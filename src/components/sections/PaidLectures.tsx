"use client";

import Button from "../common/Button";
import PaidLecturesSlider from "../modules/PaidLecturesSlider";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { useTranslations } from 'next-intl';

export default function PaidLectures() {
    const t = useTranslations('PaidLectures');

    const isMobile = useResponsiveStore(state => state.isMobile);
    
    const pathname = usePathname();

    const isContentPage = pathname.includes('/paid');

    return (
        <section className="flex flex-col gap-12 sm:gap-16 items-center w-full">
            <div className="flex flex-col sm:w-148 items-center">
                <h3 className="font-bold text-[36px] leading-11 text-center text-dark mb-4">
                    {isContentPage ?
                        <>{t('contentPage_title_1')} <br />{t('contentPage_title_2')} </>
                    :
                        t('homePage_title')
                    }
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    {isContentPage ? (
                        <> {t('contentPage_text_1')} <br />{t('contentPage_text_2')}</>
                    ) : (
                        t('homePage_text')
                    )
                    }
                </p>
                {!isContentPage && 
                    <Link href={'/catalog/paid-lectures'} className="mt-12 sm:mt-8 w-full sm:w-auto">
                        <Button
                            color="dark"
                            size={isMobile ? "full" : "xxl"}
                            form="round"
                            icon="arrowRightUp"
                            hover="primary"
                        >
                            {t('more_button')} 
                        </Button>
                    </Link>
                }
            </div>
            <PaidLecturesSlider page="home"/>
        </section>
    )
}