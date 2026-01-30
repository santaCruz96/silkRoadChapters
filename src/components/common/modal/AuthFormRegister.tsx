import { useState } from "react";
import Link from "next/link";
import Button from "../Button"
import Checkbox from "../Checkbox";
import {useTranslations} from 'next-intl';

export default function AuthFormRegister() {
    const t = useTranslations('Modal.register');

    const [isAgreed, setIsAgreed] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAgreed(e.target.checked);
    };

    return (
        <form action="#" className="flex flex-col gap-4">
            <input
                type="text"
                className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                    shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                    placeholder:font-medium placeholder:text-image focus:outline-none"
                placeholder={t('name')}
            />
            <input
                type="text"
                className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                    shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                    placeholder:font-medium placeholder:text-image focus:outline-none"
                placeholder={t('birthday')}
            />
            <input
                type="email"
                className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                    shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                    placeholder:font-medium placeholder:text-image focus:outline-none"
                placeholder={t('email')}
            />
            <input
                type="password"
                className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                    shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                    placeholder:font-medium placeholder:text-image focus:outline-none"
                placeholder={t('password')}
            />
            <input
                type="password"
                className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                    shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                    placeholder:font-medium placeholder:text-image focus:outline-none"
                placeholder={t('repeatPassword')}
            />
            <div className="flex items-center gap-3 mb-4">
                <Checkbox 
                    id="privacy-checkbox"
                    checked={isAgreed}
                    onChange={handleChange}
                    use="register"
                />
                <label 
                    htmlFor="privacy-checkbox" 
                    className={`italic font-medium text-[12px] leading-[160%] 
                        ${isAgreed ? 'text-accent-success' : 'text-grey'}`}
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
            <Button
                type="submit"
                color="dark"
                size="full"
                form="round"
                icon="user"
                hover="primary"
            >
                {t('signUp')}
            </Button>
        </form>
    )
}