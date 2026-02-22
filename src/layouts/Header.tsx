"use client";

import { useEffect } from "react";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useModal } from "@/store/useModalStore";
import useScrollLock from '@/hooks/useScrollLock';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { useLocaleStore } from '@/store/useLocaleStore';
import {useTranslations} from 'next-intl';
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

import { HeaderProps } from "@/types/props/Header.props";

export default function Header({isAuthenticated}: HeaderProps) {
    const router = useRouter();
    const t = useTranslations('Header');
    const isMobile = useResponsiveStore(state => state.isMobile);
    const {locale, setLocale} = useLocaleStore();
    const { isExpanded, forceExpand } = useHeaderScroll();

    const { 
        isOpen,
        toggle,
        close
    } = useModal();

    const toggleLanguage = () => {
        setLocale(locale === 'en' ? 'ru' : 'en');
    };

    useEffect(() => {
        if (isOpen) forceExpand();
    }, [forceExpand, isOpen]);

    useScrollLock(isOpen);

    const handleClick = () => {
        if (!isExpanded) forceExpand();
    };

    const handleAccount = async () => {
        if (isAuthenticated) {
            router.push('/account');
        } else {
            toggle('login')
        }
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
                { type: 'spring', damping: 22, stiffness: 200, delay: 0.1 }
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
                    transition={{ duration: 0.2, delay: isExpanded ? 0.2 : 0 }}
                >
                    <Button 
                        color="dark" 
                        size={isMobile ? 'mobileHeader' : 'md'}
                        form="square"
                        hover="headerPrimary"
                        onClick={() => toggle('menu')}
                    >
                        {t('menu')}
                    </Button>
                </motion.div>
                <Link
                    className="absolute w-7 lg:w-[203px] left-1/2 -translate-x-1/2"
                    href={'/'}
                    onClick={() => close()}
                >
                    <Logo color="dark"/>
                </Link>
                <motion.div className="flex gap-4"
                    animate={{ 
                        opacity: isExpanded ? 1 : 0,
                        pointerEvents: isExpanded ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.2, delay: isExpanded ? 0.2 : 0 }}
                >
                    <Button 
                        color="stroke" 
                        size={isMobile ? 'mobileHeader' : 'lg'}
                        form="square"
                        hover="headerSecondary"
                        onClick={handleAccount}
                    >
                        {isAuthenticated ? t('account') : t('signIn')}
                    </Button>
                    <Button 
                        color="stroke" 
                        size="md"
                        form="square"
                        hover="headerSecondary"
                        hideOnMobile
                        onClick={toggleLanguage}
                    >
                        {t('language')}
                    </Button>
                </motion.div>
            </div>
        </motion.header>
    )
}