'use client';

import { useState } from 'react';
import Button from "../Button";
import {useTranslations} from 'next-intl';
import { useModal } from '@/store/useModalStore';
import { usePush } from "@/store/usePushStore";
import { forgotPassword } from '@/lib/api/forgotPassword';
import { validateForgotPasswordForm } from '@/schemas/forgotPassword';

import { FormErrors } from '@/schemas/forgotPassword';

export default function AuthFormForgot() {
    const { close } = useModal(); 
    const { addPush } = usePush();

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [serverError, setServerError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const t = useTranslations('Modal.forgot');
    const tPush = useTranslations('Push')
    const tValid = useTranslations('Validation.forgot');

    const handleSubmitForgot = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        const validationErrors = validateForgotPasswordForm(email, {
            emailRequired: tValid('emailRequired'),
            emailValid: tValid('emailValid'),
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        setIsLoading(true);

        try {
            const response = await forgotPassword({ email });

            if (!response.success) {
                setServerError(tValid('clientError'));
                return;
            } 

            addPush('info', tPush('passwordForgot'))
            close();
        } catch (error) {
            console.error('Login error:', error);
            setServerError(tValid('serverError'));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-49.25">
            <form noValidate className={`flex flex-col ${!errors.email ? 'gap-8' : ''}`} onSubmit={handleSubmitForgot}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    disabled={isLoading}
                    className={`
                        rounded-xl px-3 py-5.5 h-12 font-medium text-[12px] w-full
                        shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)]
                        placeholder:font-medium focus:outline-none
                        ${errors['email'] ? 'bg-accent-alert placeholder:text-light text-light mb-1' : 
                        'bg-light placeholder:text-image text-dark'}
                    `}
                    placeholder={t('email')}
                />
                {errors.email && (
                    <span className="text-accent-alert text-[12px] px-1 italic leading-[160%] mb-4">{errors.email}</span>
                )}
                {serverError && (
                    <span className="text-accent-alert text-[12px] px-1 italic leading-[160%] mb-4">{serverError}</span>
                )}
                <Button
                    type="submit"
                    color="dark"
                    size="full"
                    form="round"
                    icon="multipleForward"
                    hover={isLoading ? "" : "primary"}   
                    disabled={isLoading}
                >
                    {t('send')}
                </Button>
            </form>
            <p className="font-normal text-[14px] leading-[160%] text-grey">
                {t('bottomText')}
            </p>
        </div>
    )
}