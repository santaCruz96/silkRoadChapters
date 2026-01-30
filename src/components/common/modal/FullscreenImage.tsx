"use client";

import { useFullscreenImage } from '@/store/useFullscreenImageStore';
import Button from '../Button';
import { AnimatePresence, motion } from 'framer-motion';
import useScrollLock from '@/hooks/useScrollLock';

export default function FullscreenImage() {

    const { image, isOpen, close } = useFullscreenImage();

    useScrollLock(isOpen);

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
                    <div 
                        className="w-full sm:w-300 h-46.25 xs:h-69 sm:h-100 
                            md:h-132 lg:h-169.25 bg-image mx-4 md:mx-8
                            rounded-[30px] bg-cover bg-center bg-no-repeat" 
                        style={{ backgroundImage: `url(${image})`}}
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}