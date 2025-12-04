'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { fadeUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        // Floating animation for decorative elements
        gsap.to('.float-element', {
            y: -20,
            duration: 3,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.2,
        });
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950"
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074)',
                    }}
                />
                <div className="absolute inset-0 noise" />
            </motion.div>

            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                <motion.div
                    className="float-element absolute top-20 left-10 w-32 h-32 rounded-full bg-gold-500/10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="float-element absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold-500/10 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 container-custom text-center"
            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto"
                >
                    {/* Subtitle */}
                    <motion.div variants={staggerItem} className="flex items-center justify-center gap-2 mb-6">
                        <Sparkles className="w-5 h-5 text-gold-500" />
                        <span className="text-sm md:text-base font-medium text-gold-500 tracking-widest uppercase">
                            Premium Hair Care Experience
                        </span>
                        <Sparkles className="w-5 h-5 text-gold-500" />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={staggerItem}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
                    >
                        <span className="gradient-text">Transform Your</span>
                        <br />
                        <span className="text-cream-50">Beauty Journey</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={staggerItem}
                        className="text-lg md:text-xl text-cream-200 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Experience luxury hair care at The Hive Salon. Where artistry meets
                        expertise to create your perfect look.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
                    >
                        <a href="#booking" className="cursor-hover">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary px-10 py-5 text-lg"
                            >
                                Book Appointment
                            </motion.button>
                        </a>
                        <a href="#services" className="cursor-hover">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline px-10 py-5 text-lg"
                            >
                                Explore Services
                            </motion.button>
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeUp}
                        className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
                    >
                        {[
                            { number: '15+', label: 'Years Experience' },
                            { number: '10K+', label: 'Happy Clients' },
                            { number: '50+', label: 'Awards Won' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="glass rounded-2xl p-6 cursor-hover"
                            >
                                <h3 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-sm md:text-base text-cream-300">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-2 cursor-hover"
                >
                    <span className="text-xs text-gold-500 tracking-widest uppercase">Scroll</span>
                    <ChevronDown className="w-6 h-6 text-gold-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}
