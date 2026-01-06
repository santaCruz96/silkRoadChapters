"use client";

import { useSearch } from "@/store/useSearchStore";
import { AnimatePresence, motion } from 'framer-motion';

export default function SearchOverlay() {
    const { isOpen } = useSearch();
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className={`fixed flex w-full h-screen z-14 bg-[rgba(0,0,0,0.3)]`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                ></motion.div>
            )}
        </AnimatePresence>
    )
}