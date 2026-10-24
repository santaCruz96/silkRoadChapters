"use client";

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/icons/Icon';
import Button from '../Button';
import NotifyForm from './NotifyForm';
import { useNotifyModal } from '@/store/useNotifyModalStore';

export default function NotifyModal() {
    const { isOpen, lectureId, onAvailable, close } = useNotifyModal();

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
            {isOpen && lectureId && (
                <motion.div
                    className="fixed inset-0 z-15"
                    style={{
                        willChange: 'background-color',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                    }}
                    initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
                    animate={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                    exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
                    onMouseDown={close}
                >
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                        <motion.div
                            className="flex flex-col gap-12 rounded-[20px] p-4 w-full max-w-82 bg-background
                                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
                            style={{
                                willChange: 'opacity',
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden'
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start">
                                <div
                                    className="flex items-center justify-center w-15 h-15 rounded-xl bg-light
                                        shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)]"
                                >
                                    <Icon className="w-8 h-8 fill-dark" name="mail"/>
                                </div>
                                <Button
                                    color="empty"
                                    size="xs"
                                    form="square"
                                    icon="squareClose"
                                    onClick={close}
                                />
                            </div>
                            <NotifyForm
                                key={lectureId}
                                lectureId={lectureId}
                                onAvailable={onAvailable}
                                onClose={close}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
