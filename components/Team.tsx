'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Award } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const team = [
    {
        name: 'Sarah Johnson',
        role: 'Master Stylist',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
        specialty: 'Color Specialist',
        instagram: '@sarahhair',
    },
    {
        name: 'Michael Chen',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
        specialty: 'Precision Cuts',
        instagram: '@michaelcuts',
    },
    {
        name: 'Emma Williams',
        role: 'Senior Stylist',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976',
        specialty: 'Bridal Styling',
        instagram: '@emmabridal',
    },
    {
        name: 'David Martinez',
        role: 'Hair Artist',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974',
        specialty: 'Trend Setter',
        instagram: '@davidstyles',
    },
];

export default function Team() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <section id="team" className="section-padding bg-charcoal-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 noise opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />

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
                        Meet Our Team
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                        <span className="gradient-text">Expert</span>
                        <br />
                        <span className="text-cream-50">Stylists</span>
                    </h2>
                    <p className="text-lg text-cream-300 leading-relaxed">
                        Our talented team of award-winning stylists is dedicated to bringing
                        your vision to life.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -10 }}
                            className="group relative cursor-hover"
                        >
                            <div className="relative overflow-hidden rounded-2xl glass-dark">
                                {/* Image */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <motion.div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${member.image})` }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

                                    {/* Award Badge */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Award className="w-5 h-5 text-charcoal-950" />
                                    </motion.div>

                                    {/* Social Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-charcoal-950/80 flex items-center justify-center"
                                    >
                                        <a
                                            href={`https://instagram.com/${member.instagram.slice(1)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-gold-500/20 transition-colors duration-300"
                                        >
                                            <Instagram className="w-5 h-5 text-gold-500" />
                                            <span className="text-cream-50 font-medium">{member.instagram}</span>
                                        </a>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-display font-bold text-cream-50 mb-1 group-hover:text-gold-500 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-gold-500 text-sm mb-2">{member.role}</p>
                                    <p className="text-cream-400 text-sm">{member.specialty}</p>
                                </div>

                                {/* Border Effect */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
