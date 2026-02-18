import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/lib/api/auth';
import { usePush } from "@/store/usePushStore";
import {useTranslations} from 'next-intl';

export function useRegister(onSuccess?: () => void) {
    const { addPush } = usePush();
    const t = useTranslations('Push');
    const tValid = useTranslations('Validation.register');

    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            if (data.success) {
                onSuccess?.();
                addPush('info', t('emailConfirm'))
            } else {
                throw new Error(tValid('error'));
            }
        },
    });
}