import { useMutation } from '@tanstack/react-query';
import { forgotPassword } from '@/lib/api/forgotPassword';
import { useTranslations } from 'next-intl';

export function useForgotPassword(onSuccess?: () => void, onError?: (message: string) => void) {
    const t = useTranslations('Validation.forgot');

    return useMutation({
        mutationFn: forgotPassword,
        onSuccess: (data) => {
            if (data.success) {
                onSuccess?.();
            } else {
                onError?.(t('clientError'));
            }
        },
        onError: () => {
            onError?.( t('serverError'));
        },
    });
}