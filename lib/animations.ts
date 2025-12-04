// Reusable Framer Motion Animation Variants

// Custom easing function
const customEase = [0.23, 1, 0.32, 1] as const;

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: customEase,
        },
    },
};

export const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: customEase,
        },
    },
};

export const fadeDown = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: customEase,
        },
    },
};

export const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: customEase,
        },
    },
};

export const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: customEase,
        },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: customEase,
        },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: customEase,
        },
    },
};

export const slideUp = {
    hidden: { y: '100%' },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            ease: customEase,
        },
    },
};

export const slideDown = {
    hidden: { y: '-100%' },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            ease: customEase,
        },
    },
};

export const revealText = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: customEase,
        },
    },
};

export const imageReveal = {
    hidden: {
        scale: 1.3,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: customEase,
        },
    },
};

export const rotateIn = {
    hidden: {
        opacity: 0,
        rotate: -10,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: customEase,
        },
    },
};

export const navVariants = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: customEase,
        },
    },
};

export const menuVariants = {
    closed: {
        opacity: 0,
        x: '100%',
        transition: {
            duration: 0.5,
            ease: customEase,
        },
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: customEase,
        },
    },
};

export const menuItemVariants = {
    closed: {
        opacity: 0,
        x: 50,
    },
    open: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: customEase,
        },
    }),
};
