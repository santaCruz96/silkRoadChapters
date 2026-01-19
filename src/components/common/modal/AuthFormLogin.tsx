import { useRouter } from 'next/navigation';
import { useModal } from '@/store/useModalStore';
import Button from '../Button';
import {useTranslations} from 'next-intl';

export default function AuthFormLogin() {
    const t = useTranslations('Modal.login');
    const router = useRouter();
    
    const {open, close} = useModal();

    const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        open('resetPassword');
    }

    const goToAccount = () => {
        close();
        router.push('/account');
    }

    return (
        <div className="flex flex-col gap-[55px]">
            <form action={goToAccount} className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
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
                </div>
                <a  
                    href="#"
                    onClick={handleForgotPassword}
                    className="cursor-pointer font-normal text-[14px] leading-[160%] underline 
                        decoration-grey underline-offset-auto text-grey text-start"
                >
                    {t('forgotPassword')}
                </a>
                <Button
                    type="submit"
                    color="dark"
                    size="full"
                    form="round"
                    icon="squareArrowRight"
                    hover="primary"
                >
                    {t('signIn')}
                </Button>
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