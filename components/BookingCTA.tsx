'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function BookingCTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        <section id="booking" className="section-padding bg-charcoal-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/10" />
                <div className="absolute inset-0 noise opacity-20" />
            </div>

            <div ref={containerRef} className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm md:text-base font-medium text-gold-500 tracking-widest uppercase mb-4 block">
                            Book Now
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            <span className="gradient-text">Ready for Your</span>
                            <br />
                            <span className="text-cream-50">Transformation?</span>
                        </h2>
                        <p className="text-lg text-cream-300 leading-relaxed mb-8">
                            Schedule your appointment today and experience the luxury and expertise
                            that defines The Hive Salon. Our team is ready to bring your vision to
                            life.
                        </p>

                        {/* Contact Info */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            className="space-y-4"
                        >
                            {[
                                { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                                { icon: Mail, text: 'hello@thehivesalon.com', href: 'mailto:hello@thehivesalon.com' },
                                { icon: MapPin, text: '123 Beauty Street, New York, NY 10001', href: '#' },
                                { icon: Clock, text: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM', href: '#' },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        variants={staggerItem}
                                        href={item.href}
                                        className="flex items-center gap-4 group cursor-hover"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-5 h-5 text-charcoal-950" />
                                        </div>
                                        <span className="text-cream-200 group-hover:text-gold-500 transition-colors duration-300">
                                            {item.text}
                                        </span>
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-dark rounded-3xl p-8 md:p-10"
                    >
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-cream-50 mb-6">
                            Book Your Appointment
                        </h3>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-cream-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-charcoal-950/50 border border-gold-500/20 rounded-xl text-cream-50 placeholder-cream-500 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-cream-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-charcoal-950/50 border border-gold-500/20 rounded-xl text-cream-50 placeholder-cream-500 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-cream-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 bg-charcoal-950/50 border border-gold-500/20 rounded-xl text-cream-50 placeholder-cream-500 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-cream-300 mb-2">
                                    Service
                                </label>
                                <select className="w-full px-4 py-3 bg-charcoal-950/50 border border-gold-500/20 rounded-xl text-cream-50 focus:outline-none focus:border-gold-500 transition-colors duration-300">
                                    <option>Haircut</option>
                                    <option>Color</option>
                                    <option>Styling</option>
                                    <option>Treatment</option>
                                    <option>Bridal</option>
                                    <option>Consultation</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-cream-300 mb-2">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 bg-charcoal-950/50 border border-gold-500/20 rounded-xl text-cream-50 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-cream-300 mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    rows={3}
                                    className="w-full px-4 py-3 bg-charcoal-950/50 border border-gold-500/20 rounded-xl text-cream-50 placeholder-cream-500 focus:outline-none focus:border-gold-500 transition-colors duration-300 resize-none"
                                    placeholder="Any special requests?"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                            >
                                <Calendar className="w-5 h-5" />
                                Confirm Booking
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
