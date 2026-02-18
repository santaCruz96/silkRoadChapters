import { useState } from 'react';
import { useModal } from '@/store/useModalStore';
import { useLogin } from '@/hooks/useLogin';
import Button from '../Button';
import {useTranslations} from 'next-intl';
import { validateLoginForm } from '@/schemas/login';

import { FormErrors } from '@/schemas/login';

export default function AuthFormLogin() {
    const t = useTranslations('Modal.login');
    const tValid = useTranslations('Validation.login');
    const { open, close } = useModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [serverError, setServerError] = useState<string | null>(null);

    const loginMutation = useLogin(close, (message) => setServerError(message));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setServerError(null); 

        const validationErrors = validateLoginForm(email, password, {
            emailRequired: tValid('emailRequired'),
            emailValid: tValid('emailValid'),
            passwordRequired: tValid('passwordRequired'),
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        loginMutation.mutateAsync({ email, password });
    };

    const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        open('resetPassword');
    };

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
        <div className="flex flex-col gap-13.75">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors(prev => ({ ...prev, email: undefined }));
                            }}
                            disabled={loginMutation.isPending}
                            className={inputClass('email')}
                            placeholder={t('email')}
                        />
                        {errors.email && (
                            <span className={spanClass()}>{errors.email}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrors(prev => ({ ...prev, password: undefined }));
                            }}
                            disabled={loginMutation.isPending}
                            className={inputClass('password')}
                            placeholder={t('password')}
                        />
                        {errors.password && (
                            <span className={spanClass()}>{errors.password}</span>
                        )}
                    </div>
                    {serverError && (
                        <span className={spanClass()}>{serverError}</span>
                    )}
                </div>
                <a
                    href="#"
                    onClick={handleForgotPassword}
                    className="cursor-pointer font-normal text-[14px] leading-[160%] underline 
                        decoration-grey underline-offset-auto text-grey text-start w-fit"
                >
                    {t('forgotPassword')}
                </a>
                <div className='flex flex-col gap-4 w-full'>
                    <Button
                        type="submit"
                        color="dark"
                        size="full"
                        form="round"
                        icon="squareArrowRight"
                        hover={loginMutation.isPending ? "" : "primary"}
                        disabled={loginMutation.isPending}
                    >
                        {t('signIn')}
                    </Button>
                    <Button
                        type="button"
                        color="light"
                        size="full"
                        form="round"
                        shadow
                        icon="google"
                        hover={loginMutation.isPending ? "" : "secondary"}
                        disabled={loginMutation.isPending}
                    >
                        Google
                    </Button>
                </div>
            </form>
            <div className='flex flex-col gap-4'>
                <p className='font-normal text-[14px] leading-[160%] text-grey'>
                    {t('noAccount')}
                </p>
                <Button
                    color="light"
                    size="full"
                    form="round"
                    shadow
                    icon="user"
                    hover="secondary"
                    onClick={() => open('register')}
                >
                    {t('signUp')}
                </Button>
            </div>
        </div>
    )
}