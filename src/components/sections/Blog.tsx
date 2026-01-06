"use client";

import { usePathname } from 'next/navigation';
import BlogSlider from "../modules/BlogSlider";

export default function Blog() {
    const pathname = usePathname();

    const isContentPage = pathname.includes('/blog');

    return (
        <section className="flex flex-col gap-12 sm:gap-16 items-center w-full">
            <div className="flex flex-col w-full sm:w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    {isContentPage ? 
                        'More Stories to Read'
                    :
                        'Stories from the Silk Road'
                    }
                </h3>
                <p className="font-medium max-w-130 text-[16px] leading-[160%] text-center text-grey">
                    {isContentPage ? (
                        <>
                            Continue exploring reflections and insights from across the Silk Road.
                        </>
                    ) : (
                        <>
                            Explore reflections on the ancient routes — their history, culture, and the connections that bridge past and present.
                        </>
                    )}           
                </p>
            </div>
            <BlogSlider/>
        </section>
    )
}