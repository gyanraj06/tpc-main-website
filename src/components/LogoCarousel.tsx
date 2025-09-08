import { motion } from 'framer-motion';

// Import logo images
import lushLogo from '../assets/logos/lush-logo-28dab4.png';
import prizepickLogo from '../assets/logos/prizepick-logo-28dab4.png';
import accurayLogo from '../assets/logos/accuray-logo-28dab4.png';
import crossriverLogo from '../assets/logos/crossriver-logo-28dab4.png';
import bettermentLogo from '../assets/logos/betterment-logo-28dab4.png';
import motleyfoolLogo from '../assets/logos/motleyfool-logo-28dab4.png';
import onLogo from '../assets/logos/on-logo-28dab4.png';
import adyenLogo from '../assets/logos/adyen-logo-28dab4.png';
import teamviewerLogo from '../assets/logos/teamviewer-logo-28dab4.png';
import getyourguideLogo from '../assets/logos/getyourguide-logo-28dab4.png';
import nordcloudLogo from '../assets/logos/nordcloud-logo-28dab4.png';

const LogoCarousel = () => {
  const logos = [
    { src: lushLogo, alt: 'Lush' },
    { src: prizepickLogo, alt: 'PrizePick' },
    { src: accurayLogo, alt: 'Accuray' },
    { src: crossriverLogo, alt: 'CrossRiver' },
    { src: bettermentLogo, alt: 'Betterment' },
    { src: motleyfoolLogo, alt: 'The Motley Fool' },
    { src: onLogo, alt: 'On' },
    { src: adyenLogo, alt: 'Adyen' },
    { src: teamviewerLogo, alt: 'TeamViewer' },
    { src: getyourguideLogo, alt: 'GetYourGuide' },
    { src: nordcloudLogo, alt: 'Nordcloud' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="overflow-hidden bg-neutral-gray py-4">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-neutral-gray to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-neutral-gray to-transparent"></div>
        
        {/* Text overlay */}
        <div className="absolute left-0 top-0 z-20 flex h-full items-center bg-gradient-to-r from-neutral-gray via-neutral-gray/90 to-transparent pl-24 pr-12">
          <span className="font-hero text-lg font-normal text-primary whitespace-nowrap">
            Trusted by 1,000s of global teams
          </span>
        </div>

        {/* Scrolling logos container */}
        <motion.div
          className="flex"
          animate={{
            x: [0, -50 * logos.length + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[150px] h-[60px] flex items-center justify-center px-2"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCarousel;