import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Exclude /login and /api routes to avoid infinite redirects
    if (pathname.startsWith("/login") || pathname.startsWith("/api")) {
        return NextResponse.next();
    }

    // Check for token in cookies
    const token = request.cookies.get("token");

    if (!token || token == undefined || token == null || token == "" || token == "undefined") {
        // Redirect to login page if no token is found
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|static|favicon.ico).*)"], // Applies to all routes except Next.js internal files
};
