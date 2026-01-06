"use client";

import { useEffect } from 'react';
import { useModal } from '@/store/useModalStore';
import Button from '../Button';
import { AnimatePresence, motion } from 'framer-motion';
import Menu from './Menu';
import AuthFormLogin from './AuthFormLogin';
import AuthFormRegister from './AuthFormRegister';
import AuthFormReset from './AuthFormReset';

export default function Modal() {

    const { isOpen, mode, close } = useModal();

    let content: React.ReactNode = null;
    let headerText: string = ''

    if (mode === 'menu') {
        content = <Menu/>;
        headerText = 'Menu'
    }

    if (mode === 'login') {
        content = <AuthFormLogin/>;
        headerText = 'Join Us'
    }

    if (mode === 'register') {
        content = <AuthFormRegister/>;
        headerText = 'Sign Up'
    }

    if (mode === 'reset') {
        content = <AuthFormReset/>;
        headerText = 'Reset Password'
    }

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                close();
            }
        };

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, close]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className={`fixed flex w-full h-screen z-14 bg-[rgba(0,0,0,0.3)]`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={close}
                >
                    <div className="absolute top-28 sm:top-32 left-1/2 -translate-x-1/2 max-w-300
                        w-[calc(100%-32px)] md:w-[calc(100%-64px)] h-full mx-auto z-15"
                    >
                        <motion.div 
                            className="flex flex-col absolute top-0 right-4 sm:right-0 rounded-[20px] px-4 pt-4 
                                pb-8 w-[288px] bg-background overflow-hidden
                                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='flex justify-between mb-8'>
                                <h3 className='font-semibold text-[18px] text-dark'>
                                    {headerText}
                                </h3>
                                <Button
                                    color="empty"
                                    size="xs"
                                    form="square"
                                    icon="squareClose"
                                    onClick={close}
                                />
                            </div>
                            {content}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}