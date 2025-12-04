'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
    const navBlur = useTransform(scrollY, [0, 100], [10, 20]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                ref={navRef}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                style={{ opacity: navOpacity }}
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled
                    ? 'glass-dark shadow-2xl shadow-gold-500/10'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20 md:h-24">
                        {/* Logo */}
                        <Link href="#home" className="relative z-50 magnetic cursor-hover">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-3"
                            >
                                <div className="relative w-12 h-12 md:w-14 md:h-14">
                                    <Image
                                        src="/images/logo.jpg"
                                        alt="The Hive Salon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <h1 className="text-xl font-display font-bold gradient-text">
                                        The Hive Salon
                                    </h1>
                                    <p className="text-xs text-gold-400">Premium Hair Care</p>
                                </div>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className="relative text-sm font-medium text-cream-100 hover:text-gold-500 transition-colors duration-300 cursor-hover group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link href="tel:+1234567890" className="cursor-hover">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium hover:glass-dark transition-all duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Now
                                </motion.button>
                            </Link>
                            <Link href="#booking" className="cursor-hover">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary flex items-center gap-2"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book Now
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative z-50 p-2 cursor-hover"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-gold-500" />
                            ) : (
                                <Menu className="w-6 h-6 text-gold-500" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed inset-0 z-[999] lg:hidden glass-dark backdrop-blur-2xl"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    custom={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                        ease: [0.23, 1, 0.32, 1],
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className="text-3xl md:text-4xl font-display font-bold text-cream-100 hover:text-gold-500 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="flex flex-col gap-4 mt-8 w-full max-w-xs"
                            >
                                <Link href="tel:+1234567890" className="w-full">
                                    <button className="w-full flex items-center justify-center gap-2 px-6 py-4 glass rounded-full text-sm font-medium">
                                        <Phone className="w-4 h-4" />
                                        Call Now
                                    </button>
                                </Link>
                                <Link href="#booking" className="w-full">
                                    <button className="w-full btn-primary flex items-center justify-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Book Appointment
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
