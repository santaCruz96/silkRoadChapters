"use client";

import Link from "next/link"
import Logo from "../components/common/Logo";
import SocialLink from "@/components/common/SocialLink";
import Icon from "@/icons/Icon";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import {useTranslations} from 'next-intl';

import { socialLinks } from "@/data/socialLinks.data";

export default function Footer() {
    const isMobile = useResponsiveStore(state => state.isMobile);
    const t = useTranslations('Footer');

    return (
        <footer className="w-[calc(100%-32px)] md:w-[calc(100%-64px)] max-w-300 mx-auto flex flex-col">
            <div 
                className="w-full bg-dark rounded-[20px]
                    shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] z-10"
            >
                <div className="relative mx-auto p-4 md:p-8 flex justify-between items-center">
                    <div 
                        className="flex w-full md:w-auto items-center justify-between md:justify-start 
                            sm:gap-9.25 font-bold text-[12px] text-light"
                    >
                        <Link href={'/terms-of-use'}>{t('termsOfUse')}</Link>
                        <Link href={'/user-agreement-privacy-policy'}>{t('agreement')}</Link>
                        <Link href={'/public-offer'}>{t('publicOffer')}</Link>
                    </div>
                    <Link
                        className="hidden md:block absolute left-1/2 -translate-x-1/2"
                        href={'/'}
                    >
                        <Logo color="light"/>
                    </Link>
                    <div className="hidden md:flex gap-20.5 items-center">
                        <div className="hidden md:flex gap-4.5">
                            {socialLinks.footer.map((link) => (
                                <SocialLink
                                    key={link.id}
                                    location='footer'
                                    route={link.route}
                                    iconName={link.iconName}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="my-4 md:my-8 font-medium text-[16px] leading-[150%] text-center text-grey">
                    {isMobile ? (
                        <>© 2025 Silk Road Chapters. <br />{t('rights')}</>
                    ) : (
                        <>© 2025 Silk Road Chapters. {t('rights')}</>
                    )}
                </p>
                <div className="flex gap-4 mb-4 md:my-8 ">
                    <p className="font-medium text-[16px] leading-[150%] text-center text-grey">{t('payments')}</p>
                    <Icon className="fill-grey w-6 h-6" name="visa"/>
                    <Icon className="fill-grey w-6 h-6" name="mastercard"/>
                    <Icon className="fill-grey w-6 h-6" name="uzcard"/>
                    <Icon className="fill-grey w-6 h-6" name="humo"/>
                </div>
            </div>
        </footer>
    )
}