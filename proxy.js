import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request) {
  const { pathname, search } = request.nextUrl;

  // Prepare headers for forwarding
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", pathname);

  // Skip static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  // Supported locales
  const locales = ["en", "ar"];
  const pathnameSegments = pathname.split("/");
  const firstSegment = pathnameSegments[1];

  // If already has a locale, continue normally
  if (locales.includes(firstSegment)) {
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  // Detect preferred language from browser
  const acceptLang = request.headers.get("accept-language") || "";
  const preferredLang = acceptLang.startsWith("ar") ? "ar" : "en";

  // Redirect to localized path (without trailing slash for homepage)
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLang}${pathname === "/" ? "" : pathname}`;
  url.search = search;

  return NextResponse.redirect(url);
}
