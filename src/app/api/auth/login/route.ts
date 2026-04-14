import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { signToken, getTokenCookieOptions, TOKEN_NAME } from "@/lib/auth";
import { checkRateLimit, resetRateLimit } from "@/lib/rateLimit";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    // Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { allowed, retryAfterSeconds } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: `Too many login attempts. Try again in ${retryAfterSeconds} seconds.` },
        { status: 429 }
      );
    }

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Authenticate against MongoDB users collection
    await connectDB();
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Successful login — reset rate limit
    resetRateLimit(ip);

    const token = signToken({ email: user.email });
    const cookieOptions = getTokenCookieOptions();

    const response = NextResponse.json({ success: true, name: user.name });
    response.cookies.set(TOKEN_NAME, token, cookieOptions);

    return response;
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
