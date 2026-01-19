import Button from "../Button"
import {useTranslations} from 'next-intl';

export default function AuthFormRegister() {
    const t = useTranslations('Modal.register');

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
                <input 
                    id="privacy-checkbox" 
                    type="checkbox" 
                    className="cursor-pointer rounded-sm w-5 h-5 bg-light border-none
                        shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]
                        checked:bg-accent-success"
                />
                <label htmlFor="privacy-checkbox" className="italic font-medium text-[12px] leading-[160%] text-grey">
                    {t('agree')}{' '}
                    <a 
                        href="/privacy-policy" 
                        className="underline decoration-underline underline-offset-auto"
                    >
                        {t('privacyPolicy')}
                    </a>
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