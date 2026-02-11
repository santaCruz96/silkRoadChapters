'use client'

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/api/auth';
import { authCookies } from '@/lib/cookies';

export function useLogin(onSuccess?: () => void) {
    const router = useRouter();

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            if (data.accessToken && data.refreshToken) {
                authCookies.setTokens(data.accessToken, data.refreshToken);
            }
            onSuccess?.();
            router.push('/account');
            router.refresh();
        },
    });
}