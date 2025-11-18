"use client"

import { JSX } from "react";
import { useState } from "react"
import Icon from "@/icons/Icon"
import Input from "../common/Input"

export default function Search(): JSX.Element {
    const [focused, setFocused] = useState<boolean>(false)

    const handleFocus = () => {
        setFocused(true); 
    };

    const handleBlur = () => {
        setFocused(false); 
    };

    return (
        <div className="relative ">
            <Input 
                className={`${focused ? 'px-3 placeholder:opacity-0' : 'pl-12 placeholder:opacity-100'} placeholder:text-dark 
                    placeholder:font-bold placeholder:text-[12px] rounded-xl w-34 h-10 bg-stroke focus:w-72 focus:outline-none transition-all`}
                name="input-search"
                type="search"
                placeholder="Search"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <Icon 
                className={`absolute top-2 left-3 ${focused ? 'opacity-0' : 'opacity-100'} 
                    transition-opacity stroke-dark fill-transparent`} 
                name={"magnifer"}
            />
        </div>
    )
}