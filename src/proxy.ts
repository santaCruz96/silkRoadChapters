import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

const protectedRoutes = ['/account'];
const authRoutes = ['/login', '/register'];

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const accessToken = request.cookies.get('access_token')?.value;

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
        if (!accessToken) {
        const loginUrl = new URL('/', request.url);
        return NextResponse.redirect(loginUrl);
        }
    }

    if (authRoutes.some((route) => pathname.startsWith(route))) {
        if (accessToken) {
            return NextResponse.redirect(new URL('/account', request.url));
        }
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};