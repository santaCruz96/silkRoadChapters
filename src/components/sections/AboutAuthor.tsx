"use client";

import Button from "../common/Button";
import { usePathname } from 'next/navigation';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import Image from "next/image";
import { usePush } from "@/store/usePushStore";
import {useTranslations} from 'next-intl';

export default function AboutAuthor() {
    const { addPush, pushes } = usePush();

    const t = useTranslations('AboutAuthor');
    const tPush = useTranslations('Push');

    const isMobile = useResponsiveStore(state => state.isMobile);

    const pathname = usePathname();

    const isAboutPage = pathname.includes('/about')

    const imagePath = isAboutPage ? '/images/about-author.webp' : '/images/main-author.webp'

    const handleEmail = () => {
        navigator.clipboard.writeText('info@src.education')
        if (pushes.length < 1) addPush('success', tPush('emailCopy'))
    }

    return (
        <section className="flex flex-col-reverse gap-12 sm:flex-row sm:justify-between w-full">
            <div>
                <h2 className="font-bold text-[24px] leading-[140%] text-dark">
                    {t('title1')} <br />{t('title2')} <br />{t('title3')}
                </h2>
                {isAboutPage ? 
                    <p className="mt-4 mb-12 sm:mb-8 font-medium text-[16px] leading-[160%] text-grey sm:max-w-110 text-wrap">
                        {t('aboutPage_p1')} <br />
                        <br /> {t('aboutPage_p2')} <br />
                        <br /> {t('aboutPage_p3')} <br />
                        <br /> {t('aboutPage_p4')} <br />
                        <br /> {t('aboutPage_p5')} 
                    </p>
                :
                    <p className="mt-4 mb-12 sm:mb-8 font-medium text-[16px] leading-[160%] text-grey sm:max-w-110 text-wrap">
                        {t('homePage_p1')} <br />
                        <br /> {t('homePage_p2')} <br />
                        <br /> {t('homePage_p3')}
                    </p>
                }
                <div className="flex flex-col gap-4">
                    <a 
                        href="https://www.instagram.com/yuliya_travel_expert" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:w-fit"
                    >
                        <Button
                            color="dark"
                            size={isMobile ? "full" : "xxl"}
                            form="round"
                            icon="instagram"
                            hover="primary"
                        >   
                            Instagram
                        </Button>
                    </a>
                    <Button
                        color="light"
                        size={isMobile ? "full" : "xxl"}
                        form="round"
                        icon="mail"
                        shadow
                        hover="secondary"
                        onClick={handleEmail}
                    >   
                        Email
                    </Button>
                </div>
            </div>
            <div className="rounded-[20px] sm:rounded-[30px] w-full h-82 
                sm:w-82 lg:w-148 lg:h-148 bg-image overflow-hidden"
            >
                <Image
                    src={imagePath}
                    alt="Author image"
                    width={592}
                    height={592}
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}