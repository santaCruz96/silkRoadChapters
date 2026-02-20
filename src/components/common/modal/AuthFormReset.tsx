import { useState } from 'react';
import { useModal } from '@/store/useModalStore';
import { usePush } from "@/store/usePushStore";
import Button from "../Button";
import {useTranslations} from 'next-intl';

export default function AuthFormReset() {
    const { addPush } = usePush();
    const { close } = useModal();

    const t = useTranslations('Modal.reset');
    const tPush = useTranslations('Push')

    const handleSubmitReset = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        close();
        addPush('success', tPush('passwordResetSuccess'))
    }

    return (
        <div className="flex flex-col gap-30.25">
            <form action="#" className="flex flex-col gap-8" onSubmit={handleSubmitReset}>
                <div className="flex flex-col gap-4">
                    <input
                        type="password"
                        className="rounded-xl px-3 py-5.5 h-12 font-medium text-[12px] text-dark
                            shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                            placeholder:font-medium placeholder:text-image focus:outline-none"
                        placeholder={t('newPassword')}
                    />
                    <input
                        type="password"
                        className="rounded-xl px-3 py-5.5 h-12 font-medium text-[12px] text-dark
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
                {t('bottomText')}
            </p>
        </div>
    )
}