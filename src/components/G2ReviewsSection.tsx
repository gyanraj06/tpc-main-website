import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import g2BadgesImage from '../assets/g2-badges-441e57.png';

const G2ReviewsSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-neutral-beige rounded-2xl px-10 py-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="font-hero text-lg font-normal text-primary leading-tight">
                G2 ranks TravelPerk as one of the top travel management SaaS on the market
              </h2>
            </div>
            <div className="flex-shrink-0">
              <LazyImage
                src={g2BadgesImage}
                alt="G2 Reviews and Badges"
                className="h-24 w-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default G2ReviewsSection;