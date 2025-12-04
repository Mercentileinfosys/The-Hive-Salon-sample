'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

const testimonials = [
    {
        name: 'Jessica Anderson',
        role: 'Fashion Blogger',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
        rating: 5,
        text: 'The Hive Salon transformed my hair beyond my expectations! The attention to detail and expertise is unmatched. I always leave feeling like a million dollars.',
    },
    {
        name: 'Robert Thompson',
        role: 'Business Executive',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
        rating: 5,
        text: 'Professional, luxurious, and always on point. The team at The Hive knows exactly what I need. Best salon experience in the city!',
    },
    {
        name: 'Maria Garcia',
        role: 'Bride',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
        rating: 5,
        text: 'They made my wedding day perfect! The bridal styling was absolutely stunning. Every detail was carefully crafted. Highly recommend!',
    },
    {
        name: 'James Wilson',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974',
        rating: 5,
        text: 'Incredible artistry and creativity. The stylists here are true professionals who understand modern trends while respecting classic techniques.',
    },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            return newIndex;
        });
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section id="testimonials" className="section-padding bg-charcoal-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 noise opacity-30" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

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
                        Testimonials
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                        <span className="gradient-text">Client</span>
                        <br />
                        <span className="text-cream-50">Stories</span>
                    </h2>
                    <p className="text-lg text-cream-300 leading-relaxed">
                        Hear what our valued clients have to say about their experience at The
                        Hive Salon.
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute w-full"
                            >
                                <div className="glass-dark rounded-3xl p-8 md:p-12">
                                    {/* Quote Icon */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6"
                                    >
                                        <Quote className="w-8 h-8 text-charcoal-950" />
                                    </motion.div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                            >
                                                <Star className="w-5 h-5 fill-gold-500 text-gold-500" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-xl md:text-2xl text-cream-100 leading-relaxed mb-8 font-serif italic"
                                    >
                                        "{testimonials[currentIndex].text}"
                                    </motion.p>

                                    {/* Author */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div
                                            className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-gold-500"
                                            style={{
                                                backgroundImage: `url(${testimonials[currentIndex].image})`,
                                            }}
                                        />
                                        <div>
                                            <h4 className="text-lg font-display font-bold text-cream-50">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-gold-500 text-sm">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold-500/20 transition-colors duration-300 cursor-hover"
                        >
                            <ChevronLeft className="w-6 h-6 text-gold-500" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-hover ${index === currentIndex
                                            ? 'bg-gold-500 w-8'
                                            : 'bg-gold-500/30 hover:bg-gold-500/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold-500/20 transition-colors duration-300 cursor-hover"
                        >
                            <ChevronRight className="w-6 h-6 text-gold-500" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
