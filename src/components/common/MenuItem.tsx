"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useModal } from '@/store/useModalStore';
import { motion } from 'framer-motion';
import { MenuItemProps } from '@/types/props/MenuItem.props';
import { useResponsiveStore } from "@/store/useResponsiveStore";

export default function MenuItem({route, label}: MenuItemProps) {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const isTablet = useResponsiveStore(state => state.isTablet);

    const close = useModal((state) => state.close);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [close]);

    return (
        <Link 
            href={route}
            className='relative w-full h-15.25 py-4'
            onClick={close}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div 
                className='absolute top-0 left-0 rounded-xl w-full h-full z-20
                    shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] bg-light'
                initial={{ x: '-110%' }}
                animate={{ x: isHovered && !isTablet ? 0 : '-110%' }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
            </motion.div>
            <motion.span 
                className='absolute font-semibold text-[22px] leading-7.25 text-dark z-21'
                animate={{ x: isHovered && !isTablet ? 16 : 0 }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                {label}
            </motion.span>
        </Link>
    )
}