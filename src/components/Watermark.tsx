import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Watermark = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
      className="fixed bottom-6 right-6 z-[100] hidden md:block"
    >
      <Link to="/book-demo" className="flex items-center gap-3 bg-black/40 backdrop-blur-md pl-1 py-1 pr-5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:bg-black/50 cursor-pointer group">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold tracking-tighter border border-white/10 shadow-sm">
          TPC
        </div>
        <span className="text-sm font-medium text-white/90 tracking-wide group-hover:text-white transition-colors">
          Book a demo
        </span>
      </Link>
    </motion.div>
  );
};

export default Watermark;
