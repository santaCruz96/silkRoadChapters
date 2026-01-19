"use client";

import { useSearch } from "@/store/useSearchStore";
import { useModal } from "@/store/useModalStore";
import { AnimatePresence, motion } from 'framer-motion';

export default function SearchOverlay() {
    const { isActive } = useSearch();
    const { isOpen } = useModal();

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div 
                    className={`fixed flex w-full h-screen z-14 ${!isOpen && 'bg-[rgba(0,0,0,0.3)]'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                ></motion.div>
            )}
        </AnimatePresence>
    )
}