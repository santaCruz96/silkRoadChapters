"use client";

import GeographyCarousel from "../modules/GeographyCarousel";
import { useChoseCountry } from "@/store/useCountriesStore";
import { AnimatePresence, motion } from 'framer-motion';

export default function Geogarphy() {
    const {isHovered, selectedCountry} = useChoseCountry();

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
                        {selectedCountry?.imageCoords.map((coords) => (
                            <div key={coords} className={`absolute border ${coords}
                                border-stroke rounded-xl w-[60px] h-[60px] bg-stroke`}/>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
            <div className="flex flex-col gap-4 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark">
                    The Geography of the Silk Road
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey sm:w-132">
                    From China to Turkey, learn the cultures, histories, and landscapes of the countries that shaped the Silk Road.
                </p>
            </div>
            <GeographyCarousel/>
        </section>
    )
}