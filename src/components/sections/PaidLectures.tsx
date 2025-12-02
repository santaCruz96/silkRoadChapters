"use client";

import Button from "../common/Button";
import ScaleSlider from "../modules/PaidLecturesSlider";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function PaidLectures() {
    const pathname = usePathname();

    const isContentPage = pathname.includes('/paid');

    return (
        <section className="flex flex-col gap-16 items-center">
            <div className="flex flex-col w-148 items-center">
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
                    <Link href={'/catalog/paid-lectures'} className="mt-8">
                        <Button
                            color="dark"
                            size="xxl"
                            form="round"
                            icon="arrowRightUp"
                            hover="primary"
                        >
                            See all
                        </Button>
                    </Link>
                }
            </div>
            <ScaleSlider/>
        </section>
    )
}