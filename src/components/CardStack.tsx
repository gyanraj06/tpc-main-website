import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
    id: number;
    content: React.ReactNode;
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                const lastItem = newArray.pop(); // remove the last item
                if (lastItem) {
                    newArray.unshift(lastItem); // add the last item to the front
                }
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative h-[400px] w-full flex items-center justify-center">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute bg-transparent h-full w-full flex items-center justify-center"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        {card.content}
                    </motion.div>
                );
            })}

            {/* Progress Bar */}
            <div className="absolute bottom-5 w-[260px] h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    key={cards[0].id}
                    className="h-full bg-blue-600"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                />
            </div>
        </div>
    );
};
