'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const footerLinks = {
    services: [
        { name: 'Haircuts', href: '#services' },
        { name: 'Color Services', href: '#services' },
        { name: 'Styling', href: '#services' },
        { name: 'Treatments', href: '#services' },
        { name: 'Bridal', href: '#services' },
    ],
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#team' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ],
};

const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-charcoal-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 noise opacity-20" />

            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="#home" className="inline-block mb-6">
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12">
                                    <Image
                                        src="/images/logo.jpg"
                                        alt="The Hive Salon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-bold gradient-text">
                                        The Hive Salon
                                    </h3>
                                    <p className="text-xs text-gold-400">Premium Hair Care</p>
                                </div>
                            </div>
                        </Link>

                        <p className="text-cream-300 leading-relaxed mb-6 max-w-sm">
                            Experience luxury hair care where artistry meets expertise. Transform
                            your look with our award-winning stylists.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold-500/20 transition-colors duration-300 cursor-hover"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5 text-gold-500" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-lg font-display font-bold text-cream-50 mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-cream-300 hover:text-gold-500 transition-colors duration-300 cursor-hover"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-display font-bold text-cream-50 mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-cream-300 hover:text-gold-500 transition-colors duration-300 cursor-hover"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-display font-bold text-cream-50 mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:+15551234567"
                                    className="flex items-center gap-2 text-cream-300 hover:text-gold-500 transition-colors duration-300 cursor-hover"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">+1 (555) 123-4567</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hello@thehivesalon.com"
                                    className="flex items-center gap-2 text-cream-300 hover:text-gold-500 transition-colors duration-300 cursor-hover"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm">hello@thehivesalon.com</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-2 text-cream-300">
                                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                    <span className="text-sm">
                                        123 Beauty Street<br />New York, NY 10001
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-gold-500/20 py-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="text-2xl font-display font-bold text-cream-50 mb-3">
                            Stay Updated
                        </h4>
                        <p className="text-cream-300 mb-6">
                            Subscribe to our newsletter for exclusive offers and hair care tips.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-5 py-3 bg-charcoal-900/50 border border-gold-500/20 rounded-full text-cream-50 placeholder-cream-500 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="btn-primary px-8 py-3"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gold-500/20 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-cream-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} The Hive Salon. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            {footerLinks.legal.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-cream-400 hover:text-gold-500 text-sm transition-colors duration-300 cursor-hover"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <p className="text-cream-400 text-sm flex items-center gap-2">
                            Made with <Heart className="w-4 h-4 text-gold-500 fill-gold-500" /> by The Hive
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
