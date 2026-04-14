import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const TOKEN_NAME = "dashboard_token";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page and auth API routes
  if (pathname === "/dashboard/login" || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Protect /dashboard/* routes
  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get(TOKEN_NAME)?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      // Invalid token — clear it and redirect
      const response = NextResponse.redirect(new URL("/dashboard/login", req.url));
      response.cookies.set(TOKEN_NAME, "", { path: "/", maxAge: 0 });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
