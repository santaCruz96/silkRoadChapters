"use client";

import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import Search from "@/components/modules/Search";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Header() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    const handleClick = () => {
        if (!isExpanded) {
            setIsExpanded(!isExpanded)
        } 
        return
    }

    return (
        <motion.header 
            className="fixed top-8 left-1/2 -translate-x-1/2 max-w-300 w-full mx-auto bg-light rounded-[20px]
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] z-50"
            animate={{ maxWidth: isExpanded ? '1200px' : '288px' }}
            transition={{ type: 'spring', damping: 22, stiffness: 200 }}
            onClick={() => handleClick()}
        >
            <div className="container relative mx-auto p-3 flex justify-between items-center">
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
                        size="md"
                        form="square"
                        hover="headerPrimary"
                    >
                        Menu
                    </Button>
                    <Search/>
                </motion.div>
                <Link
                    className="absolute w-[203px] left-1/2 -translate-x-1/2"
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
                        size="lg"
                        form="square"
                        hover="headerSecondary"
                    >
                        Join Us
                    </Button>
                    <Button 
                        color="stroke" 
                        size="md"
                        form="square"
                        hover="headerSecondary"
                    >
                        English
                    </Button>
                </motion.div>
            </div>
        </motion.header>
    )
}