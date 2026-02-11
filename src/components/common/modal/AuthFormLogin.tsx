import { useState } from 'react';
import { useModal } from '@/store/useModalStore';
import { useLogin } from '@/hooks/useLogin';
import Button from '../Button';
import {useTranslations} from 'next-intl';

export default function AuthFormLogin() {
    const t = useTranslations('Modal.login');

    const {open, close} = useModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginMutation = useLogin(close);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginMutation.mutate({ email, password });
    };

    const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        open('resetPassword');
    }

    return (
        <div className="flex flex-col gap-[55px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loginMutation.isPending}
                        className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                            shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                            placeholder:font-medium placeholder:text-image focus:outline-none"
                        placeholder={t('email')}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loginMutation.isPending}
                        className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                            shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                            placeholder:font-medium placeholder:text-image focus:outline-none"
                        placeholder={t('password')}
                    />
                </div>
                {loginMutation.isError && (
                    <p className="text-red-500 text-sm">
                        {loginMutation.error.message}
                    </p>
                )}
                <a  
                    href="#"
                    onClick={handleForgotPassword}
                    className="cursor-pointer font-normal text-[14px] leading-[160%] underline 
                        decoration-grey underline-offset-auto text-grey text-start"
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
                        hover="primary"
                        disabled={loginMutation.isPending}
                    >
                        {t('signIn')}
                    </Button>
                    <Button
                        type="submit"
                        color="light"
                        size="full"
                        form="round"
                        shadow
                        icon="google"
                        hover="secondary"
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