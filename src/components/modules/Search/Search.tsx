"use client"

import { useSearch } from "@/store/useSearchStore";
import Icon from "@/icons/Icon"
import Input from "../../common/Input"
// import useScrollLock from '@/hooks/useScrollLock';
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

    // useScrollLock(isActive);

    return (
        <div className={`${menu ? 'sm:hidden' : 'block w-full sm:w-auto'} relative`}>
            <Input 
                className={`${isActive ? 'px-3 placeholder:opacity-0' : 'pl-12 placeholder:opacity-100'} 
                    placeholder:text-dark placeholder:font-bold placeholder:text-[12px] text-[12px] font-bold
                    rounded-[30px] w-full sm:w-72 h-12.75 bg-stroke focus:outline-none transition-all`}
                name="input-search"
                type="search"
                placeholder={t('search')}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <Icon 
                className={`absolute top-3.5 left-3 ${isActive ? 'opacity-0' : 'opacity-100'} 
                    transition-opacity stroke-dark fill-transparent`} 
                name={"magnifer"}
            />
            {/* <div 
                className="absolute w-full sm:w-72 bg-light rounded-[20px] z-20 px-4
                    shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
            >
                {abstractArray.map((_, index) => (
                    <div key={index} className="py-4 w-full border-b border-stroke">
                        <p className="font-normal text-[16px] text-fill-dark leading-4.75">
                            Как Амир Темур оказался в Самарканде
                        </p>
                    </div>
                ))}
            </div> */}
        </div>
    )
}