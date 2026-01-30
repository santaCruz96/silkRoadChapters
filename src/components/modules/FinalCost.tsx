"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from "@/icons/Icon";
import Square from "../common/Square";
import Button from "../common/Button";
import {useTranslations} from 'next-intl';
import Link from "next/link";
import Checkbox from '../common/Checkbox';

export default function FinalCost() {
    const [isAgreed, setIsAgreed] = useState(false);

    const t = useTranslations('Payment');

    const router = useRouter();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAgreed(e.target.checked);
    };

    return (
        <div className="col-span-1 sm:col-span-8 lg:col-span-3 rounded-[20px] sm:rounded-[30px] p-4 bg-accent-success 
            flex flex-col gap-[51.5px] shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
        >
            <div className="flex gap-4">   
                <Square>
                    <Icon className="fill-dark w-8 h-8" name="octobank"/>
                </Square>
                <p className="font-semibold text-[24px] sm:text-[32px] text-light">
                    121 208.97 UZS
                </p>
            </div>
            <div className="flex items-center gap-3">
                <Checkbox 
                    id="public-checkbox"
                    checked={isAgreed}
                    onChange={handleChange}
                    use="payment"
                />
                <label htmlFor="public-checkbox" className="italic font-medium text-[12px] leading-[160%] text-light">
                    {t('agree')}{' '}
                    <Link 
                        href="/public-offer" 
                        className="underline decoration-underline underline-offset-auto"
                    >
                        {t('publicOffer')}
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