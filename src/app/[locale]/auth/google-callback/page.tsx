'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginWithGoogleTokens } from '@/lib/api/auth';
import { useAuthStore } from '@/store/useAuthStore';
import NotRegistered from './NotRegistered';
import Blocked from './Blocked';
import LoginError from './LoginError';

const GOOGLE_ERRORS: Record<string, React.ReactNode | string> = {
    'User.NotRegistered': <NotRegistered/>,
    'User.Blocked': <Blocked/>,
    'User.ExternalIdentityProviderLoginError': <LoginError/>
};

export default function GoogleCallback() {
    const router = useRouter();
    const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
    const didRun = useRef(false);
    const [errorKey, setErrorKey] = useState<string | null>(null);

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;

        const run = async () => {
            const error = new URLSearchParams(window.location.search).get('error');

            if (error) {
                setErrorKey(error);
                return;
            }

            const hash = window.location.hash.substring(1);
            const params = new URLSearchParams(hash);

            const accessToken = params.get('accessToken');
            const refreshToken = params.get('refreshToken');

            if (!accessToken || !refreshToken) {
                setErrorKey('Tokens missing');
                return;
            }

            const result = await loginWithGoogleTokens(accessToken, refreshToken);

            if (!result.success) {
                setErrorKey('Session error');
                return;
            }

            setAuthenticated(true);
            router.replace('/account');
        };

        run().catch(() => {
            setErrorKey('Auth error');
        });
    }, [router, setAuthenticated]);

    if (errorKey) {
        return (
            GOOGLE_ERRORS[errorKey]
        );
    }

    return null;
}