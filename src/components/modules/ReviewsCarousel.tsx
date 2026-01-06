"use client";

import ReviewCard from "../common/ReviewCard";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import useEmblaCarousel from "embla-carousel-react";

function ReviewsCarouselMobile() {
    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true, loop: true });

    return (
        <div className="w-full">
            <div ref={emblaRef}>
                <div className="flex gap-4">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <ReviewCard key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ReviewsCarouselDesktop() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const upperX = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
    const lowerX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <div ref={containerRef} className="flex flex-col gap-4">
            <motion.div className="flex gap-4" style={{ x: upperX }}>
                {Array.from({ length: 15 }).map((_, index) => (
                    <ReviewCard key={index}/>
                ))}
            </motion.div>
            <motion.div className="flex gap-4" style={{ x: lowerX }}>
                {Array.from({ length: 15 }).map((_, index) => (
                    <ReviewCard key={index}/>
                ))}
            </motion.div>
        </div>
    );
}

export default function ReviewsCarousel() {
    const isTablet = useResponsiveStore((state) => state.isTablet);
    return isTablet ? <ReviewsCarouselMobile /> : <ReviewsCarouselDesktop />;
}