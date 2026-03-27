'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Icon from "@/icons/Icon";
import { useModal } from '@/store/useModalStore';
import Button from '../Button';
import { useTranslations } from 'next-intl';
import { validateLoginForm } from '@/schemas/login';
import { useAuthStore } from '@/store/useAuthStore';
import { loginUser } from '@/lib/api/auth';
// import { API_URL } from '@/config/constants';

import { FormErrors } from '@/schemas/login';

export default function AuthFormLogin() {
    const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

    const t = useTranslations('Modal.login');
    const tValid = useTranslations('Validation.login');
    const { open, close } = useModal();
    const router = useRouter();
    const pathname = usePathname();

    const variants = ['blog', 'free', 'paid'];
    const current = pathname.split('/')[1];

    const isAllowed = variants.includes(current);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [serverError, setServerError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

        setIsLoading(true);

        try {
            const response = await loginUser({ email, password });

            if (!response.success) {
                setServerError(tValid('clientError'));
                return;
            }

            setAuthenticated(true);
            close();
            if (!isAllowed) router.push('/account')
        } catch (error) {
            console.error('Login error:', error);
            setServerError(tValid('serverError'));
        } finally {
            setIsLoading(false)
        }
    };

    const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        open('forgotPassword');
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

    // const handleGoogleLogin  = () => {
    //     window.location.href = `${API_URL}/accounts/login/google`;
    // };

    return (
        <div className="flex flex-col gap-13.75">
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors(prev => ({ ...prev, email: undefined }));
                            }}
                            disabled={isLoading}
                            className={inputClass('email')}
                            placeholder={t('email')}
                        />
                        {errors.email && (
                            <span className={spanClass()}>{errors.email}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrors(prev => ({ ...prev, password: undefined }));
                                }}
                                disabled={isLoading}
                                className={`${inputClass('password')} pr-10`}
                                placeholder={t('password')}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(prev => !prev)}
                                disabled={isLoading}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            >
                                <Icon className='fill-image' name={showPassword ? 'eyeClose' : 'eye'}/>
                            </button>
                        </div>
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
                        hover={isLoading ? "" : "primary"}
                        disabled={isLoading}
                    >
                        {t('signIn')}
                    </Button>
                    {/* <Button
                        type="button"
                        color="light"
                        size="full"
                        form="round"
                        shadow
                        icon="google"
                        hover={isLoading ? "" : "secondary"}
                        disabled={isLoading}
                        onClick={handleGoogleLogin}
                    >
                        Google
                    </Button> */}
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
                    hover={isLoading ? "" : "secondary"}
                    disabled={isLoading}
                    onClick={() => open('register')}
                >
                    {t('signUp')}
                </Button>
            </div>
        </div>
    )
}