// One-off migration: move base64 featured images out of MongoDB into S3.
// Usage:
//   node scripts/migrate-blog-images-to-s3.mjs            # dry run
//   node scripts/migrate-blog-images-to-s3.mjs --confirm  # actually migrate
//
// Reads credentials from .env.local. Skips blogs whose image is already a URL.

import { readFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
import { MongoClient } from "mongodb";
import {
  S3Client,
  PutObjectCommand,
  GetBucketLocationCommand,
} from "@aws-sdk/client-s3";

// ── Load .env.local manually (no dotenv dep needed) ──────────────────
function loadEnv(path) {
  try {
    const text = readFileSync(path, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
      if (!m) continue;
      const [, k, vRaw] = m;
      const v = vRaw.replace(/^["']|["']$/g, "");
      if (process.env[k] == null) process.env[k] = v;
    }
  } catch {
    // ignore
  }
}
loadEnv(new URL("../.env.local", import.meta.url).pathname.replace(/^\//, ""));

const MONGO_URI = process.env.MONGODB_URI;
const BUCKET = process.env.S3_BUCKET;
const ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
const SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const INITIAL_REGION = process.env.AWS_REGION || "us-east-1";

if (!MONGO_URI) { console.error("MONGODB_URI missing"); process.exit(1); }
if (!BUCKET || !ACCESS_KEY || !SECRET_KEY) {
  console.error("AWS env vars missing (S3_BUCKET / AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY)");
  process.exit(1);
}

const CONFIRM = process.argv.includes("--confirm");
const ALLOWED_MIME = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);
const EXT_FOR_MIME = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

// ── Discover bucket region (S3 API call from us-east-1) ──────────────
async function detectRegion() {
  try {
    const probe = new S3Client({
      region: "us-east-1",
      credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
    });
    const out = await probe.send(new GetBucketLocationCommand({ Bucket: BUCKET }));
    const loc = out.LocationConstraint;
    if (loc && typeof loc === "string") return loc === "EU" ? "eu-west-1" : loc;
    return "us-east-1";
  } catch (e) {
    console.warn(`Region detect failed (${e.message}); falling back to ${INITIAL_REGION}`);
    return INITIAL_REGION;
  }
}

function parseDataUri(uri) {
  const m = /^data:([^;]+);base64,(.+)$/.exec(uri);
  if (!m) throw new Error("Not a base64 data-URI");
  return { mime: m[1], buffer: Buffer.from(m[2], "base64") };
}

function s3Url(region, bucket, key) {
  return region === "us-east-1"
    ? `https://${bucket}.s3.amazonaws.com/${key}`
    : `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
}

async function main() {
  const region = await detectRegion();
  const s3 = new S3Client({
    region,
    credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
  });

  console.log(`\n[migrate] mode=${CONFIRM ? "CONFIRM" : "DRY RUN"}  region=${region}  bucket=${BUCKET}\n`);

  const mongo = new MongoClient(MONGO_URI);
  await mongo.connect();
  const dbName = MONGO_URI.split("/").pop().split("?")[0];
  const db = mongo.db(dbName);
  const coll = db.collection("blogs");

  const blogs = await coll
    .find({}, { projection: { content: 0, faqs: 0 } })
    .toArray();

  let migrated = 0;
  let skipped = 0;
  let failed = 0;
  let savedBytes = 0;

  for (const b of blogs) {
    const img = (b.image || "").toString();
    const isBase64 = img.startsWith("data:image/");
    const sizeKb = Math.round(img.length / 1024);

    if (!isBase64) {
      const reason = !img ? "empty" : "already URL";
      console.log(`  ⏭   ${b.slug.padEnd(40)} (${reason})`);
      skipped++;
      continue;
    }

    if (!CONFIRM) {
      console.log(`  →   ${b.slug.padEnd(40)} would migrate (${sizeKb} KB base64)`);
      savedBytes += img.length;
      continue;
    }

    try {
      const { mime, buffer } = parseDataUri(img);
      if (!ALLOWED_MIME.has(mime)) throw new Error(`Unsupported MIME ${mime}`);
      const ext = EXT_FOR_MIME[mime] || "bin";
      const key = `blog/${Date.now()}-${randomBytes(6).toString("hex")}.${ext}`;
      await s3.send(new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: buffer,
        ContentType: mime,
        CacheControl: "public, max-age=31536000, immutable",
      }));
      const url = s3Url(region, BUCKET, key);
      await coll.updateOne({ _id: b._id }, { $set: { image: url } });
      console.log(`  ✓   ${b.slug.padEnd(40)} → ${url}`);
      migrated++;
      savedBytes += img.length;
    } catch (err) {
      console.error(`  ✗   ${b.slug.padEnd(40)} FAILED: ${err.message}`);
      failed++;
    }
  }

  await mongo.close();

  console.log(
    `\n[migrate] done: ${migrated} migrated, ${skipped} skipped, ${failed} failed`,
    `\n[migrate] DB payload reduced by ~${Math.round(savedBytes / 1024)} KB`
  );
  if (!CONFIRM) {
    console.log(`\n[migrate] Re-run with --confirm to actually mutate the DB.\n`);
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
