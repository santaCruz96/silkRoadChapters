import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

const PROTECTED_ROUTES = ['/account', '/payment'] as const;

const LOCALE_PREFIX_REGEX = /^\/[a-z]{2}(?=\/|$)/;

function getPathnameWithoutLocale(pathname: string): string {
    return pathname.replace(LOCALE_PREFIX_REGEX, '');
}

function isProtectedRoute(pathname: string): boolean {
    return PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
}

function isAuthenticated(request: NextRequest): boolean {
    return Boolean(request.cookies.get('access_token')?.value);
}

export default function middleware(request: NextRequest) {
    const pathnameWithoutLocale = getPathnameWithoutLocale(request.nextUrl.pathname);

    if (isProtectedRoute(pathnameWithoutLocale) && !isAuthenticated(request)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};