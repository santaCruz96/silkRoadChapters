'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Icon from "@/icons/Icon";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from '@/store/useAuthStore';
import { useModal } from '@/store/useModalStore';
import { usePush } from "@/store/usePushStore";
import Button from "../Button";
import {useTranslations} from 'next-intl';
import { validateResetPasswordForm } from '@/schemas/resetPassword';
import { resetPassword } from '@/lib/api/resetPassword';
import { loginUser } from '@/lib/api/auth';

import { FormErrors } from '@/schemas/resetPassword';

export default function AuthFormReset() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const { addPush } = usePush();
    const { close } = useModal();
    const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

    const email = decodeURIComponent(searchParams.get("email") ?? "");
    const token = searchParams.get("token") ?? "";

    const [ newPassword, setNewPassword ] = useState('');
    const [ repeatPassword, setRepeatPassword ] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [serverError, setServerError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const t = useTranslations('Modal.reset');
    const tPush = useTranslations('Push')
    const tValid = useTranslations('Validation.reset');

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
                return; 
            }
            
            const login = await loginUser({ email, password: newPassword });

            if (!login.success) {
                setServerError(tValid('clientError'));
                return; 
            }

            addPush('success', tPush('passwordResetSuccess'));
            close();
            setAuthenticated(true);
            router.push('/account');
        } catch (error) {
            console.error('Reset error:', error);
            setServerError(tValid('serverError'));
        } finally {
            setIsLoading(false); 
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
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value);
                                }}
                                className={`${inputClass('password')} pr-10`}
                                placeholder={t('newPassword')}
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
                    <div className="flex flex-col gap-1">
                        <div className="relative">
                            <input
                                type={showRepeatPassword ? 'text' : 'password'}
                                value={repeatPassword}
                                onChange={(e) => {
                                    setRepeatPassword(e.target.value);
                                }}
                                className={`${inputClass('repeatPassword')} pr-10`}
                                placeholder={t('repeatPassword')}
                            />
                            <button
                                type="button"
                                onClick={() => setShowRepeatPassword(prev => !prev)}
                                disabled={isLoading}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            >
                                <Icon className='fill-image' name={showRepeatPassword ? 'eyeClose' : 'eye'}/>
                            </button>
                        </div>
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