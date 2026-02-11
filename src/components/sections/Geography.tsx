"use client";

import GeographyCarousel from "../modules/GeographyCarousel";
import Image from "next/image";
import { useChoseCountry } from "@/store/useCountriesStore";
import {useTranslations} from 'next-intl';

import { useCountriesData } from "@/data/countries.data";

export default function Geography() {
    const countriesData = useCountriesData();
    
    const {isHovered, selectedCountry} = useChoseCountry();
    const t = useTranslations('Geography');

    function showMiniPhotos(
        currentCountry: string, 
        currentCountryPhoto: string
    ) {
        return isHovered && currentCountry === currentCountryPhoto
    }

    return (
        <section className="relative flex flex-col gap-16 items-center w-full">
            <div 
                className="absolute w-full h-full top-0"
            >
                {countriesData.map((country) =>
                    country.images.map((image) => {
                        const visible = selectedCountry
                        ? showMiniPhotos(selectedCountry.country, image.country)
                        : false

                        return (
                            <div
                                key={`${image.coords}`}
                                className={`absolute ${image.coords} w-15 h-15 rounded-xl overflow-hidden
                                    transition-opacity duration-400 ease-in-out
                                    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            >
                                <Image
                                    src={image.path}
                                    alt="Country image"
                                    width={60}
                                    height={60}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )
                    })
                )}
            </div>
            <div className="flex flex-col gap-4 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark">
                    {t('title')}
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey sm:w-132">
                    {t('text')}
                </p>
            </div>
            <GeographyCarousel/>
        </section>
    )
}