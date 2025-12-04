'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, Palette, Sparkles, Droplet, Crown, Heart } from 'lucide-react';
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations';

const services = [
    {
        icon: Scissors,
        title: 'Precision Haircuts',
        description: 'Expert cuts tailored to your unique style and face shape.',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069',
    },
    {
        icon: Palette,
        title: 'Color Artistry',
        description: 'From subtle highlights to bold transformations.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069',
    },
    {
        icon: Sparkles,
        title: 'Premium Styling',
        description: 'Special occasion styling for your perfect look.',
        image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070',
    },
    {
        icon: Droplet,
        title: 'Hair Treatments',
        description: 'Nourishing treatments for healthy, vibrant hair.',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080',
    },
    {
        icon: Crown,
        title: 'Bridal Services',
        description: 'Make your special day unforgettable.',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071',
    },
    {
        icon: Heart,
        title: 'Consultation',
        description: 'Personalized advice from our expert stylists.',
        image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070',
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <section id="services" className="section-padding bg-charcoal-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 noise opacity-50" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

            <div ref={containerRef} className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base font-medium text-gold-500 tracking-widest uppercase mb-4 block"
                    >
                        Our Services
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                        <span className="gradient-text">Premium Hair Care</span>
                        <br />
                        <span className="text-cream-50">Services</span>
                    </h2>
                    <p className="text-lg text-cream-300 leading-relaxed">
                        Discover our comprehensive range of luxury hair services, each designed
                        to bring out your natural beauty.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ y: -10 }}
                                className="group relative cursor-hover"
                            >
                                <div className="relative overflow-hidden rounded-2xl glass-dark h-full">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <motion.div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent" />

                                        {/* Icon */}
                                        <motion.div
                                            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Icon className="w-7 h-7 text-charcoal-950" />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-2xl font-display font-bold text-cream-50 mb-3 group-hover:text-gold-500 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-cream-300 leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className="text-gold-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                                        >
                                            Learn More
                                            <span>→</span>
                                        </motion.button>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-300" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-center mt-16"
                >
                    <a href="#booking" className="cursor-hover">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary px-10 py-5 text-lg"
                        >
                            Book Your Service
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
