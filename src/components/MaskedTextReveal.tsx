import { motion } from 'framer-motion';

interface MaskedTextRevealProps {
  content: string;
  className?: string;
}

const MaskedTextReveal = ({ content, className = '' }: MaskedTextRevealProps) => {
  // Split content into words
  const words = content.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      y: "110%", // Move down 110%
      opacity: 0,
    },
    visible: { 
      y: "0%", 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const, // Custom ease similar to expo.out
      }
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap justify-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <span 
          key={index} 
          className="inline-block overflow-hidden mr-[0.25em] pb-[0.1em] -mb-[0.1em] align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default MaskedTextReveal;
