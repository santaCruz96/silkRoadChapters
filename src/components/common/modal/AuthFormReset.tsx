import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useModal } from '@/store/useModalStore';
import Button from "../Button";
import {useTranslations} from 'next-intl';

export default function AuthFormReset() {
    const t = useTranslations('Modal.reset');
    const router = useRouter();

    const { open, close } = useModal();
    const [isSended, setIsSended] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setIsSended(true);    
        open('newPassword');
    };

    const goToAccount = () => {
        close();
        router.push('/account');
    }

    if (isSended) {
        return (
            <div className="flex flex-col gap-[121px]">
                <form action={goToAccount} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <input
                            type="password"
                            className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                                shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                                placeholder:font-medium placeholder:text-image focus:outline-none"
                            placeholder={t('newPassword')}
                        />
                        <input
                            type="password"
                            className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                                shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                                placeholder:font-medium placeholder:text-image focus:outline-none"
                            placeholder={t('repeatPassword')}
                        />
                    </div>
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
                <p className="font-normal text-[14px] leading-[160%] text-grey">
                    {t('bottomText2')}
                </p>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-[197px]">
                <form action="#" className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                            shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                            placeholder:font-medium placeholder:text-image focus:outline-none"
                        placeholder={t('email')}
                    />
                    <Button
                        type="submit"
                        color="dark"
                        size="full"
                        form="round"
                        icon="multipleForward"
                        hover="primary"    
                    >
                        {t('send')}
                    </Button>
                </form>
                <p className="font-normal text-[14px] leading-[160%] text-grey">
                    {t('bottomText1')}
                </p>
            </div>
        )
    }
}