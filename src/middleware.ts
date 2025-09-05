import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const { pathname } = request.nextUrl;


  if (!token && pathname.startsWith("/card")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

 
  if (token && pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/card", request.url));
  }

  if (token && pathname.startsWith("/auth/register")) {
    return NextResponse.redirect(new URL("/card", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/card", "/auth/login", "/auth/register"], 
};