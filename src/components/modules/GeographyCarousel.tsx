"use client";

import { useResponsiveStore } from "@/store/useResponsiveStore";
import { useChoseCountry } from "@/store/useCountriesStore";

import { useCountriesData } from "@/data/countries.data";

export default function GeographyCarousel() {
    const countriesData = useCountriesData();
    const isMobile = useResponsiveStore(state => state.isMobile);
    const { 
        isHovered, 
        currentId, 
        setHovered, 
        unsetHovered 
    } = useChoseCountry();

    return (
        <div className="relative sm:w-440 overflow-hidden">
            {!isMobile &&
                <div className="absolute inset-y-0 left-0 w-30 bg-linear-to-r 
                    from-[#f2f2f2] to-transparent z-10 pointer-events-none"
                />
            }
            {!isMobile &&
                <div className="absolute inset-y-0 right-0 w-30 bg-linear-to-l 
                    from-[#f2f2f2] to-transparent z-10 pointer-events-none"
                />
            }
            <div className="relative flex sm:translate-x-20">
                <div className={`${isHovered ? 'animate-pause-marquee' : 'animate-marquee'} 
                    select-none whitespace-nowrap flex gap-4`}
                >
                    {countriesData.map((country) => (
                        <div 
                            key={country.id} 
                            onMouseEnter={() => setHovered(country.id, countriesData)}
                            onMouseLeave={() => unsetHovered()}
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
                            onMouseEnter={() => setHovered(country.id, countriesData)}
                            onMouseLeave={() => unsetHovered()}
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