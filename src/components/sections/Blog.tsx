"use client";

import { usePathname } from 'next/navigation';
import BlogSlider from "../modules/BlogSlider";
import {useTranslations} from 'next-intl';
import { Blog } from '@/types/interfaces/Blog.interface';

export interface BlogProps {
    blogs: Blog[]
}

export default function Blogs({blogs}: BlogProps) {
    const t = useTranslations('Blog');

    const pathname = usePathname();

    const isContentPage = pathname.includes('/blog');

    return (
        <section className="flex flex-col gap-12 sm:gap-16 items-center w-full">
            <div className="flex flex-col w-full sm:w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    {isContentPage ? 
                        t('contentPage_title')
                    :
                        t('homePage_title')
                    }
                </h3>
                <p className="font-medium max-w-130 text-[16px] leading-[160%] text-center text-grey">
                    {isContentPage ? (
                        <>{t('contentPage_text_1')} <br />{t('contentPage_text_2')}</>
                    ) : (
                        t('homePage_text')
                    )}           
                </p>
            </div>
            <BlogSlider blogs={blogs}/>
        </section>
    )
}