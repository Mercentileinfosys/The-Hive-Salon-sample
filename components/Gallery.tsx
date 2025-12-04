'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const galleryImages = [
    {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074',
        title: 'Salon Interior',
        category: 'Interior',
    },
    {
        url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069',
        title: 'Precision Cut',
        category: 'Haircuts',
    },
    {
        url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069',
        title: 'Color Transformation',
        category: 'Coloring',
    },
    {
        url: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070',
        title: 'Elegant Styling',
        category: 'Styling',
    },
    {
        url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080',
        title: 'Hair Treatment',
        category: 'Treatments',
    },
    {
        url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071',
        title: 'Bridal Beauty',
        category: 'Bridal',
    },
    {
        url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070',
        title: 'Consultation',
        category: 'Services',
    },
    {
        url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2074',
        title: 'Modern Salon',
        category: 'Interior',
    },
    {
        url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070',
        title: 'Premium Service',
        category: 'Services',
    },
];

export default function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <section id="gallery" className="section-padding bg-charcoal-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 noise opacity-30" />

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
                        Our Work
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                        <span className="gradient-text">Stunning</span>
                        <br />
                        <span className="text-cream-50">Transformations</span>
                    </h2>
                    <p className="text-lg text-cream-300 leading-relaxed">
                        Explore our portfolio of beautiful transformations and see the artistry
                        that defines The Hive Salon.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedImage(index)}
                            className="group relative aspect-square overflow-hidden rounded-2xl cursor-hover"
                        >
                            {/* Image */}
                            <motion.div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${image.url})` }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <span className="text-xs text-gold-500 tracking-widest uppercase mb-2 block">
                                        {image.category}
                                    </span>
                                    <h3 className="text-xl font-display font-bold text-cream-50">
                                        {image.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Border Effect */}
                            <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-2xl transition-all duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[2000] flex items-center justify-center bg-charcoal-950/95 backdrop-blur-xl p-4 cursor-pointer"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold-500/20 transition-colors duration-300 z-10"
                        >
                            <X className="w-6 h-6 text-gold-500" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center rounded-2xl"
                                style={{
                                    backgroundImage: `url(${galleryImages[selectedImage].url})`,
                                    paddingBottom: '75%',
                                }}
                            />
                            <div className="mt-6 text-center">
                                <span className="text-sm text-gold-500 tracking-widest uppercase">
                                    {galleryImages[selectedImage].category}
                                </span>
                                <h3 className="text-2xl font-display font-bold text-cream-50 mt-2">
                                    {galleryImages[selectedImage].title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
