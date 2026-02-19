import { cookies } from 'next/headers';

export const TOKEN_COOKIE_NAME = 'access_token';
export const REFRESH_COOKIE_NAME = 'refresh_token';

export async function setAuthCookies(accessToken: string, refreshToken: string) {
    const cookieStore = await cookies();
    const isProduction = process.env.NODE_ENV === 'production';

    cookieStore.set(TOKEN_COOKIE_NAME, accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60, 
    });

    cookieStore.set(REFRESH_COOKIE_NAME, refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60,
    });
}

export async function getAccessToken() {
    const cookieStore = await cookies();
    return cookieStore.get(TOKEN_COOKIE_NAME)?.value;
}

export async function getRefreshToken() {
    const cookieStore = await cookies();
    return cookieStore.get(REFRESH_COOKIE_NAME)?.value;
}

export async function clearAuthCookies() {
    const cookieStore = await cookies();
    cookieStore.delete(TOKEN_COOKIE_NAME);
    cookieStore.delete(REFRESH_COOKIE_NAME);
}