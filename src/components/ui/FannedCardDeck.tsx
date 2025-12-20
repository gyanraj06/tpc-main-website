import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardData {
    id: string | number;
    content: React.ReactNode;
    color?: string;
}

interface FannedCardDeckProps {
    cards: CardData[];
    className?: string;
}

const FannedCardDeck = ({ cards, className }: FannedCardDeckProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={cn("relative h-96 w-full flex items-center justify-center perspective-1000", className)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative w-full max-w-sm h-full flex items-center justify-center">
                <AnimatePresence>
                    {cards.map((card, index) => {
                        return (
                            <Card
                                key={card.id}
                                card={card}
                                index={index}
                                total={cards.length}
                                hovered={hovered}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
};

const Card = ({ card, index, total, hovered }: { card: CardData; index: number; total: number; hovered: boolean }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    // Calculate fan position
    const centerIndex = (total - 1) / 2;
    const offset = index - centerIndex;

    // Refined Fan Physics
    // Rotation: Simple spread from -Xdeg to +Xdeg
    const rotationBase = offset * 5;
    const rotationHover = offset * 12; // Spread more on hover

    // X Offset: Spread items horizontally
    const xBase = offset * 20;
    const xHover = offset * 70; // Spread wide on hover

    // Y Offset: Create an arc (center items higher/lower)
    // Using absolute value of offset to create symmetrical arc
    const yBase = Math.abs(offset) * 2;
    const yHover = Math.abs(offset) * 10;

    return (
        <motion.div
            style={{
                x,
                y,
                rotateX,
                rotateY,
                zIndex: index,
                cursor: "grab",
            }}
            drag
            dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
            whileTap={{ cursor: "grabbing", scale: 1.05 }}
            animate={{
                rotate: hovered ? rotationHover : rotationBase,
                x: hovered ? xHover : xBase,
                y: hovered ? yHover : yBase,
                scale: hovered ? 1 : 0.95,
                zIndex: hovered ? 100 + index : index, // Ensure stacking order is preserved but flexible
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className={cn(
                "absolute w-64 h-80 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm flex flex-col pointer-events-auto overflow-hidden",
                "bg-gradient-to-br from-neutral-900 to-neutral-800",
                card.color // Allow custom bg classes
            )}
        >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {card.content}
        </motion.div>
    );
};

export default FannedCardDeck;
