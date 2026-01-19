"use client";

import GeographyCarousel from "../modules/GeographyCarousel";
import Image from "next/image";
import { useChoseCountry } from "@/store/useCountriesStore";
import { AnimatePresence, motion } from 'framer-motion';
import {useTranslations} from 'next-intl';

export default function Geography() {
    const {isHovered, selectedCountry} = useChoseCountry();
    const t = useTranslations('Geography');

    return (
        <section className="relative flex flex-col gap-16 items-center w-full">
            <AnimatePresence>
                {isHovered && 
                    <motion.div 
                        className="absolute w-full h-full top-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {selectedCountry?.images.map((image) => (
                            <div 
                                key={image.coords} 
                                className={`absolute ${image.coords} w-[60px] h-[60px]
                                    rounded-xl overflow-hidden`}
                            >
                                <Image
                                    src={image.path}
                                    alt="Country image"
                                    width={60}
                                    height={60}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
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