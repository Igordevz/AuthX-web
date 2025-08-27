import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth")?.value;
  const pathname = request.nextUrl.pathname;

  const isAuthRoute = pathname.startsWith("/login") ||
                      pathname.startsWith("/register") ||
                      pathname.startsWith("/forgot-password") ||
                      pathname.startsWith("/reset-password");

  if (!token && pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token) {
    try {
      const res = await fetch(`${process.env.API}/token`, {
        headers: {
          jwt: token,
        },
      });

      if (!res.ok) throw new Error("Token inválido");

      if (isAuthRoute) {
        const dashboardUrl = new URL("/dashboard", request.url);
        return NextResponse.redirect(dashboardUrl);
      }

      return NextResponse.next();
    } catch (error) {
      const loginUrl = new URL("/login", request.url);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("auth");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ],
};
