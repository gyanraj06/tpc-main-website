import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true); // Default to true to prevent flash

    useEffect(() => {
        // Check if device has touch capability or is a mobile device
        const checkTouchDevice = () => {
            const hasTouchScreen = (
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia('(pointer: coarse)').matches ||
                window.innerWidth < 1024 // Also hide on tablets and smaller
            );
            setIsTouchDevice(hasTouchScreen);
        };

        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);

        return () => {
            window.removeEventListener('resize', checkTouchDevice);
        };
    }, []);

    useEffect(() => {
        // Don't add listeners on touch devices
        if (isTouchDevice) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.classList.contains('cursor-pointer')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isTouchDevice]);

    // Don't render on touch devices
    if (isTouchDevice) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-blue-600 rounded-full pointer-events-none z-[9999]"
            animate={{
                x: mousePosition.x - 6,
                y: mousePosition.y - 6,
                scale: isHovering ? 2.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        />
    );
};

export default CustomCursor;
