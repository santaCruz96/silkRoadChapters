"use client"

import { useMemo, useState } from "react";
import { usePathname } from 'next/navigation';
import { useSearch } from "@/store/useSearchStore";
import { useCatalogStore } from "@/store/useCatalogStore";
import Link from "next/link";
import Icon from "@/icons/Icon"
import Input from "../../common/Input"
import { SearchProps } from "@/types/props/Search.props";
import { useTranslations, useLocale } from 'next-intl';
import { useDebounce } from "@/hooks/useDebounce";

export default function Search({menu}: SearchProps) {
    const { isActive, open, close } = useSearch();
    const t = useTranslations('Header');
    const locale = useLocale();

    const pathname = usePathname();
    const category = 
        pathname.includes('/catalog/free-lectures') ? 'free' :
        pathname.includes('/catalog/paid-lectures') ? 'paid' :
        pathname.includes('/catalog/blog') ? 'blog' :
        null;

    const setSearchQuery = useCatalogStore(state => state.setSearchQuery);
    const allLectures = useCatalogStore(state => state.allLectures);

    const [inputValue, setInputValue] = useState('');
    const debouncedQuery = useDebounce(inputValue, 400);

    const searchResults = useMemo(() => {
        if (!debouncedQuery.trim()) return [];

        const titleField = locale === 'ru' ? 'titleRu' : 'titleEn';

        return allLectures
            .filter((lecture) =>
                lecture[titleField].toLowerCase().includes(debouncedQuery.toLowerCase())
            )
            .slice(0, 5);
    }, [debouncedQuery, allLectures, locale]);

    const handleFocus = () => {
        open(); 
    };

    const handleBlur = () => {
        close();
        setTimeout(() => {
            setInputValue('');
            setSearchQuery('');
        }, 200);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setSearchQuery(e.target.value);
    };

    return (
        <div className={`${menu ? 'sm:hidden' : 'block w-full sm:w-auto'} relative`}>
            <Input 
                className={`${isActive ? 'px-3 placeholder:opacity-0' : 'pl-12 placeholder:opacity-100'} 
                    placeholder:text-dark placeholder:font-bold placeholder:text-[12px] text-[12px] font-bold
                    rounded-[30px] w-full sm:w-72 h-12.75 bg-stroke focus:outline-none transition-all`}
                name="input-search"
                type="search"
                placeholder={t('search')}
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoComplete="off"
            />
            <Icon 
                className={`absolute top-3.5 left-3 ${isActive ? 'opacity-0' : 'opacity-100'} 
                    transition-opacity stroke-dark fill-transparent`} 
                name={"magnifer"}
            />
            <div 
                className="absolute w-full sm:w-72 bg-light rounded-[20px] z-20 px-4
                    shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
            >
                {searchResults.map((lecture) => (
                    <Link key={lecture.id} href={`/${category}/${lecture.id}`}>
                        <div 
                            className="py-4 w-full border-b border-stroke 
                                text-grey hover:text-dark transition"
                        >
                            <p className="font-normal text-[16px] leading-4.75">
                                {locale === 'ru' ? lecture.titleRu : lecture.titleEn}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}