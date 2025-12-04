'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-charcoal-950"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    <div className="relative">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="relative w-32 h-32 md:w-40 md:h-40"
                        >
                            <Image
                                src="/images/logo.jpg"
                                alt="The Hive Salon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Loading Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 text-center"
                        >
                            <h2 className="text-2xl md:text-3xl font-display gradient-text">
                                The Hive Salon
                            </h2>
                            <div className="mt-4 flex justify-center gap-2">
                                <motion.div
                                    className="w-2 h-2 bg-gold-500 rounded-full"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                                />
                                <motion.div
                                    className="w-2 h-2 bg-gold-500 rounded-full"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                />
                                <motion.div
                                    className="w-2 h-2 bg-gold-500 rounded-full"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Overlay animation */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2.5, ease: 'linear' }}
                        style={{ transformOrigin: 'left' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
