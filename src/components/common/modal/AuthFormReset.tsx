import { useState } from 'react';
import { useSearchParams } from "next/navigation";
import { useModal } from '@/store/useModalStore';
import { usePush } from "@/store/usePushStore";
import Button from "../Button";
import {useTranslations} from 'next-intl';
import { validateResetPasswordForm } from '@/schemas/resetPassword';
import { resetPassword } from '@/lib/api/resetPassword';
import { useLogin } from "@/hooks/useLogin";

import { FormErrors } from '@/schemas/resetPassword';

export default function AuthFormReset() {
    const searchParams = useSearchParams();
    const { addPush } = usePush();
    const { close } = useModal();

    const email = decodeURIComponent(searchParams.get("email") ?? "");
    const token = searchParams.get("token") ?? "";

    const [ newPassword, setNewPassword ] = useState('');
    const [ repeatPassword, setRepeatPassword ] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [serverError, setServerError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const t = useTranslations('Modal.reset');
    const tPush = useTranslations('Push')
    const tValid = useTranslations('Validation.reset');

    const { mutate: login } = useLogin(
        () => {
            addPush('success', tPush('passwordResetSuccess'))
            close();;
        },
        (message) => setServerError(message)
    );

    const handleSubmitReset = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validateResetPasswordForm(newPassword, repeatPassword, {
            passwordRequired: tValid('passwordRequired'),
            passwordLength: tValid('passwordLength'),
            passwordValid: tValid('passwordValid'),
            repeatPassword: tValid('repeatPassword'),
            repeatPasswordValid: tValid('repeatPasswordValid')
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({}); 

        setIsLoading(true);

        try {
            const response = await resetPassword({ email, token, newPassword });
            
            if (!response.success) {
                setServerError(tValid('clientError'));
            }

            const password = newPassword

            login({email, password})
        } catch (error) {
            setIsLoading(false);
            console.error('Reset error:', error);
            setServerError(tValid('serverError'));
        }
    }

    const inputClass = (field: keyof FormErrors) => `
        rounded-xl px-3 py-5.5 h-12 font-medium text-[12px] w-full
        shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)]
        placeholder:font-medium focus:outline-none
        ${errors[field] ? 'bg-accent-alert placeholder:text-light text-light' : 
        'bg-light placeholder:text-image text-dark'}
    `;

    const spanClass = () => `
        text-accent-alert text-[12px] px-1 italic leading-[160%]
    `

    return (
        <div className="flex flex-col gap-30.25">
            <form action="#" className="flex flex-col gap-8" onSubmit={handleSubmitReset}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => {
                                setNewPassword(e.target.value);
                            }}
                            className={inputClass('password')}
                            placeholder={t('newPassword')}
                        />
                        {errors.password && (
                            <span className={spanClass()}>{errors.password}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <input
                            type="password"
                            value={repeatPassword}
                            onChange={(e) => {
                                setRepeatPassword(e.target.value);
                            }}
                            className={inputClass('repeatPassword')}
                            placeholder={t('repeatPassword')}
                        />
                        {errors.repeatPassword && (
                            <span className={spanClass()}>{errors.repeatPassword}</span>
                        )}
                    </div>
                    {serverError && (
                        <span className={spanClass()}>{serverError}</span>
                    )}
                </div>
                <Button
                    type="submit"
                    color="dark"
                    size="full"
                    form="round"
                    icon="squareArrowRight"
                    hover="primary"    
                    disabled={isLoading}
                >
                    {t('signIn')}
                </Button>
            </form>
            <p className="font-normal text-[14px] leading-[160%] text-grey">
                {t('bottomText')}
            </p>
        </div>
    )
}