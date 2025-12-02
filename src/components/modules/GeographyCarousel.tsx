"use client";

import { useState } from "react";

import { countriesData } from "@/data/countriesData";

export default function GeographyCarousel() {

    const [currentId, setCurrentId] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleCountryIn = (id: number) => { 
        setCurrentId(id);
        setIsHovered(true);
    };

    const handleCountryOut = () => { 
        setCurrentId(null);
        setIsHovered(false);
    };

    return (
        <div className="relative w-440 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-30 bg-linear-to-r 
                from-[#f2f2f2] to-transparent z-10 pointer-events-none"
            ></div>
            <div className="absolute inset-y-0 right-0 w-30 bg-linear-to-l 
                from-[#f2f2f2] to-transparent z-10 pointer-events-none"
            ></div>
            <div className="relative flex translate-x-20">
                <div className={`${isHovered ? 'animate-pause-marquee' : 'animate-marquee'} 
                    select-none whitespace-nowrap flex gap-4`}
                >
                    {countriesData.map((country) => (
                        <div 
                            key={country.id} 
                            onMouseEnter={() => handleCountryIn(country.id)}
                            onMouseLeave={() => handleCountryOut()}
                            className={`rounded-[30px] px-8 py-4 last:mr-4 shrink-0 transition-colors
                                ${currentId === country.id ? 'bg-accent-success' : 'bg-light'}`}
                        >
                            <p className={`font-semibold text-[16px] ${currentId === country.id ? 'text-light' : 'text-dark'}`}>
                                {country.country}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={`${isHovered ? 'animate-pause-marquee2' : 'animate-marquee2'}  
                    absolute top-0 select-none whitespace-nowrap flex gap-4`}
                >
                    {countriesData.map((country) => (
                        <div 
                            key={country.id} 
                            onMouseEnter={() => handleCountryIn(country.id)}
                            onMouseLeave={() => handleCountryOut()}
                            className={`rounded-[30px] px-8 py-4 last:mr-4 shrink-0 transition-colors
                                ${currentId === country.id ? 'bg-accent-success' : 'bg-light'}`}
                        >
                            <p className={`font-semibold text-[16px] ${currentId === country.id ? 'text-light' : 'text-dark'}`}>
                                {country.country}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}