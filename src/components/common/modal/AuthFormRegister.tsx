import { useState } from "react";
import { useModal } from '@/store/useModalStore';
import { useRegister } from '@/hooks/useRegister';
import Link from "next/link";
import Button from "../Button"
import Checkbox from "../Checkbox";
import {useTranslations} from 'next-intl';
import { IMaskInput } from 'react-imask';
import { RegisterData } from '@/types/api/auth';
import { validateRegisterForm } from "@/schemas/register";

import type { FormErrors } from "@/schemas/register";

export default function AuthFormRegister() {
    const t = useTranslations('Modal.register');
    const tValid = useTranslations('Validation.register');
    const { close } = useModal();

    const [isAgreed, setIsAgreed] = useState(false);
    const [formData, setFormData] = useState<RegisterData>({
        fullName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        repeatPassword: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const registerMutation = useRegister(close);

    const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAgreed(e.target.checked);
        if (e.target.checked) {
            setErrors(prev => ({ ...prev, agreement: undefined }));
        }
    };

    const handleInputChange = (field: keyof RegisterData) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;
        setFormData(prev => ({ ...prev, [field]: value }));
        setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    const formatDateToISO = (dateString: string): string => {
        const parts = dateString.split('.');
        if (parts.length !== 3) return dateString;
        const [day, month, year] = parts;
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateRegisterForm(formData, isAgreed, {
            nameLength: tValid('nameLength'), 
            birthdayFormat: tValid('birthdayFormat'), 
            birthdayFuture: tValid('birthdayFuture'),
            emailRequired: tValid('emailRequired'),
            emailValid: tValid('emailValid'),
            passwordRequired: tValid('passwordRequired'),
            passwordLength: tValid('passwordLength'),
            passwordValid: tValid('passwordValid'),
            repeatPassword: tValid('repeatPassword'),
            repeatPasswordValid: tValid('repeatPasswordValid'),
            agreement: tValid('agreement')
        });
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        const payload = { ...formData };
        if (payload.dateOfBirth) {
            payload.dateOfBirth = formatDateToISO(payload.dateOfBirth);
        }

        registerMutation.mutateAsync(payload);
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-1">
                <input
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange('fullName')}
                    disabled={registerMutation.isPending}
                    className={inputClass('fullName')}
                    placeholder={t('name')}
                />
                {errors.fullName && (
                    <span className={spanClass()}>{errors.fullName}</span>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <IMaskInput
                    mask={Date}
                    value={formData.dateOfBirth}
                    onChange={handleInputChange('dateOfBirth')}
                    disabled={registerMutation.isPending}
                    className={inputClass('dateOfBirth')}
                    placeholder={t('birthday')}
                />
                {errors.dateOfBirth && (
                    <span className={spanClass()}>{errors.dateOfBirth}</span>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    disabled={registerMutation.isPending}
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
                    value={formData.password}
                    onChange={handleInputChange('password')}
                    disabled={registerMutation.isPending}
                    className={inputClass('password')}
                    placeholder={t('password')}
                />
                {errors.password && (
                    <span className={spanClass()}>{errors.password}</span>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="password"
                    value={formData.repeatPassword}
                    onChange={handleInputChange('repeatPassword')}
                    disabled={registerMutation.isPending}
                    className={inputClass('repeatPassword')}
                    placeholder={t('repeatPassword')}
                />
                {errors.repeatPassword && (
                    <span className={spanClass()}>{errors.repeatPassword}</span>
                )}
            </div>
            <div className="flex flex-col gap-1 mb-4">
                <div className="flex items-center gap-3">
                    <Checkbox
                        id="privacy-checkbox"
                        checked={isAgreed}
                        isError={errors.agreement}
                        onChange={handleAgreeChange}
                        use="register"
                    />
                    <label
                        htmlFor="privacy-checkbox"
                        className={`italic font-medium text-[12px] leading-[160%] 
                            ${isAgreed ? 'text-accent-success' : errors.agreement ? 'text-accent-alert' : 'text-grey'}`}
                    >
                        {t('agree')}{' '}
                        <Link
                            href="/privacy-policy"
                            className="underline decoration-underline underline-offset-auto"
                        >
                            {t('privacyPolicy')}
                        </Link>
                    </label>
                </div>
            </div>
            <Button
                type="submit"
                color="dark"
                size="full"
                form="round"
                icon="user"
                hover={isAgreed ? "primary" : ""}
                disabled={registerMutation.isPending}
            >
                {t('signUp')}
            </Button>
        </form>
    );
}