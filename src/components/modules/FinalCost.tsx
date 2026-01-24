"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from "@/icons/Icon";
import Square from "../common/Square";
import Button from "../common/Button";
import {useTranslations} from 'next-intl';
import Link from "next/link";

export default function FinalCost() {
    const [isAgreed, setIsAgreed] = useState(false);

    const t = useTranslations('Payment');

    const router = useRouter();

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAgreed(e.target.checked);
    };


    return (
        <div className="col-span-1 sm:col-span-8 lg:col-span-3 rounded-[20px] sm:rounded-[30px] p-4 bg-accent-success 
            flex flex-col gap-[51.5px] shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
        >
            <div className="flex gap-4">   
                <Square>
                    <Icon className="fill-dark w-8 h-8" name="eye"/>
                </Square>
                <p className="font-semibold text-[32px] text-light">
                    121 208.97 UZS
                </p>
            </div>
            <div className="flex items-center gap-3">
                <input 
                    id="privacy-checkbox" 
                    type="checkbox" 
                    checked={isAgreed}
                    onChange={handleCheckboxChange}
                    required
                    className="cursor-pointer rounded-sm w-5 h-5 bg-light border-none
                        shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]
                        checked:bg-accent-success"
                />
                <label htmlFor="privacy-checkbox" className="italic font-medium text-[12px] leading-[160%] text-light">
                    {t('agree')}{' '}
                    <Link 
                        href="/public-offer" 
                        className="underline decoration-underline underline-offset-auto"
                    >
                        {t('privacyPolicy')}
                    </Link>
                </label>
            </div>
            <Button
                color="light"
                size="full"
                form="round"
                icon="card"
                onClick={() => router.push('/successful-payment')}
                disabled={!isAgreed}
            >
                {t('purchaseButton')}
            </Button>
        </div>
    )
}