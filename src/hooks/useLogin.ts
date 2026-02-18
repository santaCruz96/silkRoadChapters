import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/api/auth';
import {useTranslations} from 'next-intl';

export function useLogin(onSuccess?: () => void, onError?: (message: string) => void) {
    const t = useTranslations('Validation.login');
    const router = useRouter();

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            if (data.success) {
                onSuccess?.();
                router.push('/account');
                router.refresh();
            } else {
                onError?.(t('clientError'));
            }
        },
        onError: () => {
            onError?.( t('serverError'));
        },
    });
}