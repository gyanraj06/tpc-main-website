import { motion } from 'framer-motion';
import logoImage from '../assets/LogoImage.jpg';


const WhyChooseUs = () => {
    // Placeholder data for orbiting logos
    // Positions calculated for 8 items in a circle: 0, 45, 90, 135, 180, 225, 270, 315 degrees
    const orbitingItems = [
        { id: 1, label: 'Logo 1', color: 'bg-gray-500' },
        { id: 2, label: 'Logo 2', color: 'bg-gray-400' },
        { id: 3, label: 'Logo 3', color: 'bg-gray-500' },
        { id: 4, label: 'Logo 4', color: 'bg-gray-300' },
        { id: 5, label: 'Logo 5', color: 'bg-gray-500' },
        { id: 6, label: 'Logo 6', color: 'bg-gray-400' },
        { id: 7, label: 'Logo 7', color: 'bg-gray-500' },
        { id: 8, label: 'Logo 8', color: 'bg-gray-300' },
    ];

    return (
        <section className="py-10 lg:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-[1.2]">
                            Why Choose Trippechalo <br className="hidden sm:block" />
                            Over Traditional Options?
                        </h2>

                        <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed text-justify sm:text-left">
                            Built by travellers, tech innovators, and experience creators,
                            Trippechalo is the first AI-powered ecosystem designed for India’s
                            fast-growing experience economy. We go beyond traditional
                            platforms by unifying discovery, ticketing, operations, and
                            sustainability in one intelligent system. With real-time data,
                            automation, and deep local insight, we make discovering and running
                            experiences effortless, scalable, and future-ready.
                        </p>


                    </motion.div>

                    {/* Right Animation */}
                    <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center scale-90 sm:scale-100">
                        {/* Central Logo */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative z-20 w-32 h-32 sm:w-40 sm:h-40 bg-[#2563EB] rounded-full flex items-center justify-center shadow-2xl border-4 border-white overflow-hidden p-4"
                        >
                            <img src={logoImage} alt="Trippechalo Logo" className="w-full h-full object-contain" />
                        </motion.div>

                        {/* Orbit Container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Spinning Ring (Visual only, optional) */}
                            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-gray-200/50"></div>

                            {/* Rotating Container */}
                            <motion.div
                                className="absolute w-full h-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                {orbitingItems.map((item, index) => {
                                    const angle = (index * 360) / orbitingItems.length;
                                    const radius = 175; // Distance from center
                                    // We need to position them. 
                                    // Since we are rotating the whole container, we can just position them absolutely at their starting points?
                                    // No, if the container rotates, `top-0 left-1/2` will rotate.
                                    // But to distribute them, we can use transform.

                                    return (
                                        <div
                                            key={item.id}
                                            className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                                            }}
                                        >
                                            {/* Counter-rotating the item itself so it stays upright while orbiting */}
                                            <motion.div
                                                className={`w-full h-full rounded-full ${item.color} flex items-center justify-center shadow-lg border-2 border-white`}
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            >
                                                {/* Placeholder Content */}
                                                <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
