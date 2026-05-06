import {
  S3Client,
  PutObjectCommand,
  GetBucketLocationCommand,
} from "@aws-sdk/client-s3";
import { randomBytes } from "crypto";

const BUCKET = process.env.S3_BUCKET || "";
const ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID || "";
const SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";
const INITIAL_REGION = process.env.AWS_REGION || "us-east-1";

if (!BUCKET) {
  console.warn("[s3] S3_BUCKET env var is not set — uploads will fail.");
}

let cachedRegion: string | null = null;
let cachedClient: S3Client | null = null;

function makeClient(region: string) {
  return new S3Client({
    region,
    credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
  });
}

// Discover the bucket's actual region on first use and cache it. AWS S3
// requires the SDK to use the bucket's home region for PutObject; if the env
// var is wrong the SDK throws PermanentRedirect. We probe once via the
// us-east-1 control plane which works for any bucket.
async function getClient(): Promise<S3Client> {
  if (cachedClient && cachedRegion) return cachedClient;

  // First, try the env var as-is.
  let region = INITIAL_REGION;
  try {
    const probe = makeClient("us-east-1");
    const out = await probe.send(
      new GetBucketLocationCommand({ Bucket: BUCKET })
    );
    // GetBucketLocation returns null/empty for us-east-1, "EU" for eu-west-1
    // legacy, or a real region string otherwise.
    const loc = out.LocationConstraint;
    if (loc && typeof loc === "string") {
      region = loc === "EU" ? "eu-west-1" : loc;
    } else {
      region = "us-east-1";
    }
  } catch (err) {
    console.warn(
      `[s3] Region auto-detect failed, falling back to ${INITIAL_REGION}.`,
      err
    );
  }
  cachedRegion = region;
  cachedClient = makeClient(region);
  return cachedClient;
}

export type UploadResult = { url: string; key: string; region: string };

const ALLOWED_MIME = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const EXT_FOR_MIME: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

/**
 * Upload a buffer to the configured S3 bucket under `<prefix>/<unique>.<ext>`
 * and return the publicly-readable URL.
 *
 * Caller is expected to have validated content type / size already, but this
 * helper re-checks so misuse can't bypass limits.
 */
export async function uploadToS3(
  buffer: Buffer,
  contentType: string,
  prefix: "blog" | "changelog" = "blog"
): Promise<UploadResult> {
  if (!BUCKET) throw new Error("S3 bucket not configured");
  if (!ALLOWED_MIME.has(contentType)) {
    throw new Error(`Unsupported file type: ${contentType}`);
  }
  if (buffer.length > MAX_BYTES) {
    throw new Error(`File too large (${buffer.length} bytes, max ${MAX_BYTES})`);
  }

  const ext = EXT_FOR_MIME[contentType] || "bin";
  const key = `${prefix}/${Date.now()}-${randomBytes(6).toString("hex")}.${ext}`;

  const client = await getClient();
  await client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      // Long-lived cache; filenames are content-keyed so stale cache isn't
      // a concern when authors re-upload.
      CacheControl: "public, max-age=31536000, immutable",
    })
  );

  const region = cachedRegion || INITIAL_REGION;
  // Virtual-host style URL — works for all buckets created after Sep 2020.
  const url =
    region === "us-east-1"
      ? `https://${BUCKET}.s3.amazonaws.com/${key}`
      : `https://${BUCKET}.s3.${region}.amazonaws.com/${key}`;
  return { url, key, region };
}
