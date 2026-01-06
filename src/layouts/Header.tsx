"use client";

import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import Search from "@/components/modules/Search/Search";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useModal } from "@/store/useModalStore";
import useScrollLock from '@/hooks/useScrollLock';
import { useResponsiveStore } from "@/store/useResponsiveStore";

export default function Header() {
    const isMobile = useResponsiveStore(state => state.isMobile);

    const [isExpanded, setIsExpanded] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const isOpen = useModal((state) => state.isOpen);
    const toggle = useModal((state) => state.toggle);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsExpanded(false);
            } else if (currentScrollY < lastScrollY) {
                setIsExpanded(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useScrollLock(isOpen);

    const handleClick = () => {
        if (!isExpanded) {
            setIsExpanded(!isExpanded)
        } 
        return
    }

    return (
        <motion.header 
            className="fixed top-4 sm:top-8 left-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] 
                -translate-x-1/2 max-w-full sm:max-w-300 bg-light rounded-[20px]
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] z-15"
            animate={isMobile ?
                { maxWidth: isExpanded ? '590px' : '64px' }
            :
                { maxWidth: isExpanded ? '1200px' : '288px' } 
            }
            transition={
                { type: 'spring', damping: 22, stiffness: 200 }
            }
            onClick={() => handleClick()}
        >
            <div className="relative p-3 flex justify-between items-center">
                <motion.div
                    className="flex items-center gap-4"
                    animate={{ 
                        opacity: isExpanded ? 1 : 0,
                        pointerEvents: isExpanded ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
                >
                    <Button 
                        color="dark" 
                        size={isMobile ? 'mobileHeader' : 'md'}
                        form="square"
                        hover="headerPrimary"
                        onClick={() => toggle('menu')}
                    >
                        Menu
                    </Button>
                    <Search/>
                </motion.div>
                <Link
                    className="absolute w-7 lg:w-[203px] left-1/2 -translate-x-1/2"
                    href={'/'}
                >
                    <Logo color="dark"/>
                </Link>
                <motion.div className="flex gap-4"
                    animate={{ 
                        opacity: isExpanded ? 1 : 0,
                        pointerEvents: isExpanded ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
                >
                    <Button 
                        color="stroke" 
                        size={isMobile ? 'mobileHeader' : 'lg'}
                        form="square"
                        hover="headerSecondary"
                        onClick={() => toggle('login')}
                    >
                        Join Us
                    </Button>
                    <Button 
                        color="stroke" 
                        size="md"
                        form="square"
                        hover="headerSecondary"
                        hideOnMobile
                    >
                        English
                    </Button>
                </motion.div>
            </div>
        </motion.header>
    )
}