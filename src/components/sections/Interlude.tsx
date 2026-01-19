"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import {useTranslations} from 'next-intl';

export default function Interlude() {
    const t = useTranslations('Interlude');
    const isMobile = useResponsiveStore(state => state.isMobile);
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end end"]
    });
    
    const width = useTransform(scrollYProgress, [0, 1], ["420px", "1200px"]);
    const height = useTransform(scrollYProgress, [0, 1], ["239px", "677px"]);

    const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    return (
        <section className="relative flex items-center w-full justify-center overflow-hidden">
            
            <motion.div 
                ref={ref}
                className="relative flex flex-col justify-center items-center p-4 
                    rounded-[20px] sm:rounded-[30px] overflow-hidden z-10" 
                style={isMobile ? { width: "100%", height: "459px" } : { width, height }}
            >   
                <motion.div className="absolute flex flex-col sm:max-w-[880px] gap-4 opacity-0 z-10" style={{ opacity }}>
                    <h1 className="font-bold text-[36px] sm:text-[64px] leading-11
                        sm:leading-[77px] tracking-[-0.01em] text-center text-light"
                    >
                        {t('title')}
                    </h1>
                    <p className="font-medium text-[16px] leading-[160%] text-center text-light">
                        {t('text')}
                    </p>
                </motion.div>
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="absolute min-w-300 min-h-full sm:min-h-[459px] lg:min-h-[677px] z-9"
                >
                    <source src="/video/interlude.mp4" type="video/mp4" />
                </video>
            </motion.div>
        </section>
    )
}
