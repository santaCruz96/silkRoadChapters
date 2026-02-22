import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

const protectedRoutes = ['/account'];

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const accessToken = request.cookies.get('access_token')?.value;

    const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');

    if (protectedRoutes.some((route) => pathnameWithoutLocale.startsWith(route))) {
        if (!accessToken) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};