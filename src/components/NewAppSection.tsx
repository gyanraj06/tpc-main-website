import { motion } from 'framer-motion';
import mockupImage from '../assets/mock.png';
import qrImage from '../assets/app-qr.png';
import pcBackground from '../assets/4-PC.png';

const NewAppSection = () => {
  return (
    <section id="new-app-section" className="py-16 relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl sm:rounded-3xl mx-2 sm:mx-6"
        style={{
          backgroundImage: `url(${pcBackground})`
        }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl sm:rounded-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-6 lg:px-12 xl:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex relative items-center justify-between gap-8">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 z-10 px-2 sm:px-4 lg:px-0"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 sm:mb-6">
              Introducing<br />TPC Ops app
            </h2>

            <p className="font-body text-base sm:text-lg text-white/80 leading-relaxed">
              Powering seamless operations for Trip Pe Chalo. Manage trips, vendors, and bookings - all in one place.
            </p>
          </motion.div>

          {/* Center Mockup - extends beyond bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center z-20 relative"
            style={{ alignSelf: 'flex-end' }}
          >
            <img
              src={mockupImage}
              alt="TPC Ops App Mockup"
              className="object-contain"
              style={{
                height: '800px',
                width: 'auto',
                marginBottom: '-440px'
              }}
            />
          </motion.div>

          {/* Right Content - QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col items-center justify-center z-10"
          >
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 sm:mb-6 text-center">
              Get Here
            </h3>

            <a
              href="https://github.com/gyanraj06/tpc-flutter-ops-app/releases/download/Apps/TPC.Ops.v1.0.1.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block mx-auto"
            >
              <img
                src={qrImage}
                alt="Download TPC Ops App"
                className="w-36 h-36 block mx-auto transition-all duration-300 group-hover:scale-105 drop-shadow-2xl"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <p className="font-body text-base sm:text-lg text-white/90 mt-4 sm:mt-6 text-center">
                Scan or Click to download
              </p>
            </a>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center z-10"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4">
              Introducing<br />TPC Ops app
            </h2>

            <p className="font-body text-base sm:text-lg text-white/80 leading-relaxed">
              Powering seamless operations for Trip Pe Chalo. Manage trips, vendors, and bookings - all in one place.
            </p>
          </motion.div>

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center z-10 w-full"
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-normal text-white mb-4 text-center">
              Get Here
            </h3>

            <a
              href="https://github.com/gyanraj06/tpc-flutter-ops-app/releases/download/Apps/TPC.Ops.v1.0.1.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block mx-auto"
            >
              <img
                src={qrImage}
                alt="Download TPC Ops App"
                className="w-32 h-32 sm:w-36 sm:h-36 block mx-auto transition-all duration-300 group-hover:scale-105 drop-shadow-2xl"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <p className="font-body text-base text-white/90 mt-4 text-center">
                Scan or Click to download
              </p>
            </a>
          </motion.div>

          {/* Mockup - extends beyond bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center z-20 relative"
            style={{ marginBottom: '-357px' }}
          >
            <img
              src={mockupImage}
              alt="TPC Ops App Mockup"
              className="object-contain"
              style={{
                height: '650px',
                width: 'auto'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewAppSection;
