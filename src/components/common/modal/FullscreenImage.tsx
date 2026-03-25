"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { useFullscreenImage } from '@/store/useFullscreenImageStore';
import Button from '../Button';
import { AnimatePresence, motion } from 'framer-motion';
import useScrollLock from '@/hooks/useScrollLock';

export default function FullscreenImage() {

    const { image, isOpen, close } = useFullscreenImage();

    useScrollLock(isOpen);

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
                    className="fixed flex items-center justify-center w-full h-screen z-15 bg-[rgba(0,0,0,0.3)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={close}
                >
                    <div 
                        className='absolute right-4 top-4 sm:right-8 sm:top-8 w-15 h-15 
                            flex items-center justify-center cursor-pointer rounded-xl bg-light'>
                        <Button
                            color="empty"
                            size="xs"
                            form="square"
                            icon="squareClose"
                        />
                    </div>
                    <Image
                        src={image}
                        alt=""
                        width={0}
                        height={0}
                        sizes="90vw"
                        className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-[30px]"
                        onClick={(e) => e.stopPropagation()}
                        unoptimized
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}