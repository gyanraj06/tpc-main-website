import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import StaggerButton from './StaggerButton';

const NewHeroSection = () => {
  const marqueeItems = [
    { id: 1, title: 'Event Builder', subtitle: 'Drag & Drop', image: 'https://picsum.photos/seed/event/600/400' },
    { id: 2, title: 'Analytics', subtitle: 'Real-time Data', image: 'https://picsum.photos/seed/analytics/600/400' },
    { id: 3, title: 'Ticketing', subtitle: 'Seamless Checkout', image: 'https://picsum.photos/seed/tickets/600/400' },
    { id: 4, title: 'Vendor Portal', subtitle: 'Manage Suppliers', image: 'https://picsum.photos/seed/vendor/600/400' },
    { id: 5, title: 'Marketing', subtitle: 'Campaign Tools', image: 'https://picsum.photos/seed/marketing/600/400' },
    { id: 6, title: 'CRM', subtitle: 'Customer Insights', image: 'https://picsum.photos/seed/crm/600/400' },
  ];

  // Duplicate items to ensure we have enough to fill the screen and loop
  // We need enough items so that when one set leaves, another is arriving
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  const CARD_WIDTH = 300; // Increased width significantly
  const TOTAL_WIDTH = items.length * CARD_WIDTH;

  // Start from the second set of items (index 6) so we have items on the left
  const x = useMotionValue(-TOTAL_WIDTH / 3);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: -2 * (TOTAL_WIDTH / 3), // Animate to the end of the second set
      transition: {
        duration: 25, // Slowed down slightly for larger cards
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        // We need to specify 'from' explicitly for the loop to work correctly from the start
        from: -TOTAL_WIDTH / 3
      }
    });
  }, [controls, TOTAL_WIDTH]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center bg-transparent pt-32 pb-20 z-20 overflow-hidden"
    >

      {/* Main Text Content */}
      <div className="container-custom mx-auto text-center z-10 mb-24 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-primary tracking-tight mb-6 leading-[1.1]"
        >
          India's AI-Powered <br className="hidden md:block" />
          <StaggerButton text="Experience OS " className="text-gray-800" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed"
        >
          Smart discovery for travelers, Intelligence growth tool for organizers
        </motion.p>
      </div>

      {/* Arch Carousel Container */}
      <div
        className="w-full relative z-10 h-[600px] overflow-hidden"
        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
      >
        {/* Removed side gradients to prevent overlapping/cutting of cards */}

        {/* 
          Track is positioned with its left edge at the center of the screen (left-1/2).
          Items are positioned absolutely relative to this track.
          'x' animates the track to the left, moving items through the center.
        */}
        <motion.div
          className="absolute left-1/2 top-10 -ml-[150px]" // Shift left by half card width (300/2)
          style={{ x }}
          animate={controls}
        >
          {items.map((item, index) => (
            <ArchItem
              key={`${item.id}-${index}`}
              item={item}
              index={index}
              x={x}
              cardWidth={CARD_WIDTH}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ArchItem = ({ item, index, x, cardWidth }: any) => {
  const [style, setStyle] = useState({ y: 0, rotate: 0 });

  useEffect(() => {
    const unsubscribe = x.on("change", (latestX: number) => {
      const realX = latestX + (index * cardWidth);

      // Parabola: y = x^2 / 2000 (flatter curve)
      const y = (realX * realX) / 2000;

      // Rotation: proportional to X (increased rotation)
      const rotate = realX / 20;

      setStyle({ y, rotate });
    });

    return () => unsubscribe();
  }, [x, index, cardWidth]);

  return (
    <motion.div
      className="flex-shrink-0 w-72 h-56 rounded-md overflow-hidden shadow-2xl absolute bg-[#050505] border border-white/10 p-1" // Reduced padding to p-1
      style={{
        left: index * cardWidth, // Initial position
        y: style.y,
        rotate: style.rotate,
        transformOrigin: "center bottom",
        opacity: Math.max(0, 1 - (style.y / 600)) // Fade out as it goes down
      }}
    >
      <div className="w-full h-full rounded-md overflow-hidden flex flex-col">
        {/* Image Section (Top 75%) */}
        <div className="h-[75%] w-full relative group rounded-md overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        {/* Footer Section (Bottom 25%) */}
        <div className="h-[25%] w-full bg-[#0a0a0a] flex flex-col justify-center items-start px-3 border-t border-white/5 text-left">
          <span className="font-heading text-sm font-medium text-gray-200 truncate tracking-wide">
            {item.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default NewHeroSection;
