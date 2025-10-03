import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // Skip static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // If the path already has a valid locale, let it pass
  const locales = ["en", "ar"];
  const pathnameSegments = pathname.split("/");
  const firstSegment = pathnameSegments[1];

  if (locales.includes(firstSegment)) {
    return NextResponse.next();
  }

  // Detect preferred language
  const acceptLang = request.headers.get("accept-language") || "";
  const preferredLang = acceptLang.startsWith("ar") ? "ar" : "en";

  // Construct new URL
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLang}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}
