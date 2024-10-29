import { NextResponse } from "next/server";

export async function middleware(req: any) {
    const hasAccess = req.cookies.get('hasAccess')?.value === 'true'; // Check if cookie is set
    if (!hasAccess) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
