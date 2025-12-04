'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function CustomCursor() {
    const { x, y } = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .magnetic, .cursor-hover'
        );

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-gold-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: x - 8,
                    y: y - 8,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />
            {/* Cursor follower */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-gold-500/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                animate={{
                    x: x - 20,
                    y: y - 20,
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.8,
                }}
            />
        </>
    );
}
