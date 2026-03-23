'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { setAuthCookies } from '@/lib/authCookies';
import { useAuthStore } from '@/store/useAuthStore';

export default function GoogleCallback() {
    const router = useRouter();
    const setAuthenticated = useAuthStore((s) => s.setAuthenticated);
    const didRun = useRef(false);

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;

        const run = async () => {
            const error = new URLSearchParams(window.location.search).get('error');
            if (error) {
                router.replace('/login?googleError=' + encodeURIComponent(error));
                return;
            }

            const hash = window.location.hash.substring(1);
            const params = new URLSearchParams(hash);

            const accessToken = params.get('accessToken');
            const refreshToken = params.get('refreshToken');

            if (!accessToken || !refreshToken) {
                router.replace('/login?googleError=TokensMissing');
                return;
            }

            await setAuthCookies(accessToken, refreshToken);
            setAuthenticated(true);
            router.replace('/account');
        };

        run();
    }, [router, setAuthenticated]);

    return null;
}