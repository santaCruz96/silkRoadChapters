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
                    className="fixed inset-0 z-14"
                    style={{
                        willChange: 'background-color',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                    }}
                    initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
                    animate={{ backgroundColor: isOpen ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.3)' }}
                    exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
                ></motion.div>
            )}
        </AnimatePresence>
    )
}
