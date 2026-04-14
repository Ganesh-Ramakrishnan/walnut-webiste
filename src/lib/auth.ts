import jwt from "jsonwebtoken";
import crypto from "crypto";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;
const TOKEN_NAME = "dashboard_token";
const TOKEN_EXPIRY = "24h"; // 24 hours instead of 7 days

export function signToken(payload: { email: string }) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

export function verifyToken(token: string): { email: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { email: string };
  } catch {
    return null;
  }
}

// Constant-time comparison to prevent timing attacks
function safeCompare(a: string, b: string): boolean {
  // Pad both to same length to prevent length-based timing leaks
  const maxLen = Math.max(a.length, b.length);
  const bufA = Buffer.alloc(maxLen, 0);
  const bufB = Buffer.alloc(maxLen, 0);
  Buffer.from(a).copy(bufA);
  Buffer.from(b).copy(bufB);
  return crypto.timingSafeEqual(bufA, bufB) && a.length === b.length;
}

// Validate admin credentials from env
export function validateCredentials(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL || "";
  const adminPassword = process.env.ADMIN_PASSWORD || "";

  const emailMatch = safeCompare(email, adminEmail);
  const passwordMatch = safeCompare(password, adminPassword);

  return emailMatch && passwordMatch;
}

// Extract token from request cookies
export function getTokenFromRequest(req: NextRequest): string | null {
  return req.cookies.get(TOKEN_NAME)?.value || null;
}

// Check if request is authenticated
export function isAuthenticated(req: NextRequest): boolean {
  const token = getTokenFromRequest(req);
  if (!token) return false;
  return verifyToken(token) !== null;
}

// Cookie options for setting the token
export function getTokenCookieOptions() {
  return {
    name: TOKEN_NAME,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const, // Strict CSRF protection
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  };
}

export { TOKEN_NAME };
