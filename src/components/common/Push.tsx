"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/icons/Icon';
import { usePush } from '@/store/usePushStore';

const pushConfig = {
    info: {
        icon: 'squareInfo' as const,
        bgColor: 'bg-dark'
    },
    success: {
        icon: 'squareCheck' as const,
        bgColor: 'bg-accent-success'
    },
    error: {
        icon: 'danger' as const,
        bgColor: 'bg-accent-alert'
    },
    cookie: {
        icon: 'donut' as const,
        bgColor: 'bg-dark'
    },
};

export default function Push() {

    const { pushes, removePush } = usePush();

    return (
        <div 
            className="fixed top-32 left-1/2 -translate-x-1/2 max-w-300
                w-full h-full mx-auto z-15 pointer-events-none"
        >
            <AnimatePresence>
                {pushes.map((push) => {
                    const config = pushConfig[push.type];
                    const icon = config.icon;

                    return (
                        <motion.div 
                            key={push.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className={`absolute top-0 right-0 flex gap-3 p-4 rounded-[20px] pointer-events-auto
                                shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] ${config.bgColor}`}
                            onClick={() => removePush(push.id)}
                        >
                            <Icon className='w-[38px] h-[38px] fill-light' name={icon}/>
                            <p className='font-medium text-[12px] leading-[160%] text-light w-[206px]'>
                                {push.message}
                            </p>
                        </motion.div>
                    )
                })}
                
            </AnimatePresence>
        </div>
    )
}