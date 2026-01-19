"use client"

import { useSearch } from "@/store/useSearchStore";
import Icon from "@/icons/Icon"
import Input from "../../common/Input"
import useScrollLock from '@/hooks/useScrollLock';
import { SearchProps } from "@/types/props/Search.props";
import {useTranslations} from 'next-intl';

export default function Search({menu}: SearchProps) {
    const { isActive, open, close } = useSearch();
    const t = useTranslations('Header');

    const handleFocus = () => {
        open(); 
    };

    const handleBlur = () => {
        close(); 
    };

    useScrollLock(isActive);

    return (
        <div className={`${menu ? 'sm:hidden' : 'hidden sm:block'} relative`}>
            <Input 
                className={`${isActive ? 'px-3 placeholder:opacity-0' : 'pl-12 placeholder:opacity-100'} placeholder:text-dark 
                    placeholder:font-bold placeholder:text-[12px] rounded-xl w-34 h-10 bg-stroke lg:focus:w-52 xl:focus:w-72 
                    focus:outline-none transition-all`}
                name="input-search"
                type="search"
                placeholder={t('search')}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <Icon 
                className={`absolute top-2 left-3 ${isActive ? 'opacity-0' : 'opacity-100'} 
                    transition-opacity stroke-dark fill-transparent`} 
                name={"magnifer"}
            />
        </div>
    )
}