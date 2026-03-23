'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginWithGoogleTokens } from '@/lib/api/auth';
import { useAuthStore } from '@/store/useAuthStore';

const GOOGLE_ERRORS: Record<string, string> = {
    'User.NotRegistered': 'Пользователь с таким email не зарегистрирован',
    'User.Blocked': 'Аккаунт заблокирован',
    'User.ExternalIdentityProviderLoginError': 'Ошибка входа через Google',
};

    export default function GoogleCallback() {
    const router = useRouter();
    const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
    const didRun = useRef(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;

        const run = async () => {
            const error = new URLSearchParams(window.location.search).get('error');

            if (error) {
                setErrorMessage(
                    GOOGLE_ERRORS[error] || 'Не удалось выполнить вход через Google'
                );
                return;
            }

            const hash = window.location.hash.substring(1);
            const params = new URLSearchParams(hash);

            const accessToken = params.get('accessToken');
            const refreshToken = params.get('refreshToken');

            if (!accessToken || !refreshToken) {
                setErrorMessage('Токены не получены');
                return;
            }

            const result = await loginWithGoogleTokens(accessToken, refreshToken);

            if (!result.success) {
                setErrorMessage(result.error || 'Не удалось создать сессию');
                return;
            }

            setAuthenticated(true);
            router.replace('/account');
        };

        run().catch(() => {
            setErrorMessage('Ошибка авторизации');
        });
    }, [router, setAuthenticated]);

    if (errorMessage) {
        return <div className="p-4 text-red-500">{errorMessage}</div>;
    }

    return null;
}