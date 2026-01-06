"use client";

import Button from "../common/Button";
import PaidLecturesSlider from "../modules/PaidLecturesSlider";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useResponsiveStore } from "@/store/useResponsiveStore";

export default function PaidLectures() {
    const isMobile = useResponsiveStore(state => state.isMobile);
    
    const pathname = usePathname();

    const isContentPage = pathname.includes('/paid');

    return (
        <section className="flex flex-col gap-12 sm:gap-16 items-center w-full">
            <div className="flex flex-col sm:w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    {isContentPage ?
                        'Next Steps in Your Journey'
                    :
                        'Journey Deeper into History'
                    }
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    {isContentPage ? (
                        <>
                            Explore more advanced lectures to deepen your connection  
                            <br />with the Silk Road’s heritage.
                        </>
                    ) : (
                        <>
                            Go beyond the basics — delve into detailed lectures and specialized courses created for those who want to deepen their knowledge of the Silk Road.
                        </>
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
                            See all
                        </Button>
                    </Link>
                }
            </div>
            <PaidLecturesSlider page="home"/>
        </section>
    )
}