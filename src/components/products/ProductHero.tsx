import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MagicWand, Copy, Ticket, Globe } from '@phosphor-icons/react';
import rishikeshImg from '../../assets/RISHIKESH.jpg';
import fashionImg from '../../assets/FASION.jpg';

const ProductHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const slides = [
        {
            id: 1,
            title: "Hampta Pass",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 2,
            title: "Rishikesh Day Out",
            image: rishikeshImg
        },
        {
            id: 3,
            title: "Divyafal Fashion Show",
            image: fashionImg
        },
        {
            id: 4,
            title: "Sangeet Fest 2025",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section ref={containerRef} className="relative pt-0 pb-0 lg:pb-20 overflow-visible z-10 w-full">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <motion.div
                        style={{ y, opacity }}
                        className="max-w-2xl"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-7xl font-heading font-normal text-[--primary-black] leading-[1.1] tracking-tight mb-8"
                        >
                            Create Any Experience in <span className="text-[--primary-black] relative inline-block">
                                Minutes
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[--accent-green] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span> - Not Hours
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg"
                        >
                            Trippechalo gives organisers a unified command centre to launch, manage, and scale recurring events, tours, and activities effortlessly.
                        </motion.p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {[
                                { icon: MagicWand, title: "AI Autofill", desc: "Generate content instantly" },
                                { icon: Copy, title: "Templates", desc: "Ready-to-use workflows" },
                                { icon: Ticket, title: "Adv. Ticketing", desc: "Complex pricing made simple" },
                                { icon: Globe, title: "Launch Anywhere", desc: "Multi-currency & language" }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <feature.icon className="text-2xl text-[--primary-black]" weight="duotone" />
                                    <div>
                                        <h3 className="font-heading text-sm font-normal text-[--primary-black] mb-1">{feature.title}</h3>
                                        <p className="text-xs text-gray-500">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Simple Auto-Sliding Carousel */}
                    <div className="relative h-[400px] lg:h-[500px] w-full flex flex-col items-center justify-center">
                        {/* Decorative Background Blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[--accent-green]/10 blur-[80px] rounded-full -z-10 pointer-events-none" />

                        <div className="relative w-full max-w-md h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <img
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                                    <div className="absolute bottom-8 left-8 right-8">
                                        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight shadow-black drop-shadow-md">
                                            {slides[currentSlide].title}
                                        </h3>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Dots Navigation */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductHero;
