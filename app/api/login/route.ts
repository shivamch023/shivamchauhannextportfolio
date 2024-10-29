import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const { key } = body;

    if (key === process.env.NEXT_AUTH_SECRETKEY) {
        const response = NextResponse.json({ message: 'Access Granted!!!' }, { status: 200 });
        response.cookies.set('hasAccess', 'true', { httpOnly: true, path: '/' }); // Set the cookie
        return response;
    } else {
        return NextResponse.json({ message: 'Access Denied!!!' }, { status: 403 });
    }
}
