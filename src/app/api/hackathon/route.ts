import { NextRequest, NextResponse } from "next/server";
import { sanitizeText } from "@/lib/sanitize";

export const dynamic = "force-dynamic";

// Google Apps Script web-app URL that appends rows to the registrations sheet.
const SHEET_WEBHOOK_URL = process.env.HACKATHON_SHEET_WEBHOOK_URL;

const PERSON_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "role",
  "experience",
  "github",
  "linkedin",
] as const;

const PERSON_MAX = 200;
const MAX_TEAM_NAME = 120;
const MAX_COMPANY = 160;
const MAX_IDEA = 2000;
const MIN_TEAM_SIZE = 2;
const MAX_TEAM_SIZE = 4;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Person = Record<(typeof PERSON_FIELDS)[number], string>;

// Simple per-IP throttle so the endpoint can't be hammered into the sheet.
const submissions = new Map<string, { count: number; resetAt: number }>();
const MAX_PER_WINDOW = 5;
const WINDOW_MS = 10 * 60 * 1000;

function throttled(ip: string): boolean {
  const now = Date.now();
  const entry = submissions.get(ip);
  if (!entry || now > entry.resetAt) {
    submissions.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_PER_WINDOW) return true;
  entry.count++;
  return false;
}

function clean(value: unknown): string {
  return typeof value === "string" ? sanitizeText(value).trim() : "";
}

/** Returns the cleaned person, or an error message describing what is missing. */
function readPerson(raw: unknown, who: string): { person?: Person; error?: string } {
  if (!raw || typeof raw !== "object") return { error: `${who} details are required` };
  const source = raw as Record<string, unknown>;
  const person = {} as Person;

  for (const field of PERSON_FIELDS) {
    const value = clean(source[field]);
    if (!value) return { error: `${who}: ${field} is required` };
    if (value.length > PERSON_MAX) return { error: `${who}: ${field} is too long` };
    person[field] = value;
  }

  if (!EMAIL_REGEX.test(person.email)) return { error: `${who}: a valid email is required` };
  return { person };
}

// POST /api/hackathon — public team registration
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (throttled(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const teamName = clean(body.teamName);
  const company = clean(body.company);
  const projectIdea = clean(body.projectIdea);
  const teamSize = Number(body.teamSize);

  if (!teamName || teamName.length > MAX_TEAM_NAME) {
    return NextResponse.json({ error: "A team name is required" }, { status: 400 });
  }
  if (!company || company.length > MAX_COMPANY) {
    return NextResponse.json({ error: "A company / organization is required" }, { status: 400 });
  }
  if (!Number.isInteger(teamSize) || teamSize < MIN_TEAM_SIZE || teamSize > MAX_TEAM_SIZE) {
    return NextResponse.json(
      { error: `Team size must be between ${MIN_TEAM_SIZE} and ${MAX_TEAM_SIZE}` },
      { status: 400 }
    );
  }
  if (!projectIdea || projectIdea.length > MAX_IDEA) {
    return NextResponse.json({ error: "A project idea is required" }, { status: 400 });
  }
  if (body.agreeTerms !== true || body.agreeIP !== true) {
    return NextResponse.json({ error: "Both agreements must be accepted" }, { status: 400 });
  }

  const leadResult = readPerson(body.lead, "Team lead");
  if (leadResult.error) return NextResponse.json({ error: leadResult.error }, { status: 400 });
  const lead = leadResult.person!;

  // The lead counts towards team size, so there are size - 1 additional members.
  const rawMembers = Array.isArray(body.members) ? body.members : [];
  if (rawMembers.length !== teamSize - 1) {
    return NextResponse.json(
      { error: `A team of ${teamSize} needs ${teamSize - 1} member(s) besides the lead` },
      { status: 400 }
    );
  }

  const members: Person[] = [];
  for (let i = 0; i < rawMembers.length; i++) {
    const result = readPerson(rawMembers[i], `Member ${i + 1}`);
    if (result.error) return NextResponse.json({ error: result.error }, { status: 400 });
    members.push(result.person!);
  }

  const emails = [lead.email, ...members.map((m) => m.email)].map((e) => e.toLowerCase());
  if (new Set(emails).size !== emails.length) {
    return NextResponse.json(
      { error: "Each team member needs a different email address" },
      { status: 400 }
    );
  }

  if (!SHEET_WEBHOOK_URL) {
    console.warn("HACKATHON_SHEET_WEBHOOK_URL is not set — nothing was written to the sheet");
    return NextResponse.json({ ok: false, sheet: false }, { status: 200 });
  }

  let sheetOk = false;
  try {
    const res = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: new Date().toISOString(),
        teamName,
        company,
        teamSize,
        projectIdea,
        agreeTerms: body.agreeTerms === true,
        agreeIP: body.agreeIP === true,
        agreeNewsletter: body.agreeNewsletter === true,
        lead,
        members,
      }),
    });
    sheetOk = res.ok;
  } catch (error) {
    console.error("POST /api/hackathon: sheet append failed", error);
  }

  return NextResponse.json({ ok: sheetOk, sheet: sheetOk }, { status: 200 });
}
