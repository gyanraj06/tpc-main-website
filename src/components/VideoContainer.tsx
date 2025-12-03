import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from '@phosphor-icons/react';

const VideoContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Start paused so user sees the cover/play button

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const togglePlay = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      if (isPlaying) {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div ref={containerRef} className="w-full px-4 md:px-8 lg:px-12 py-2 md:py-6 flex justify-center">
      <motion.div
        style={{ scale, opacity }}
        className="relative w-full max-w-[700px] aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black group cursor-pointer"
        onClick={togglePlay}
      >
        {/* YouTube Iframe */}
        <iframe
          ref={iframeRef}
          className="w-full h-full object-cover opacity-80 transition-opacity duration-500 pointer-events-none"
          src="https://www.youtube.com/embed/vwBxOv2-2OI?start=5&enablejsapi=1&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10 pointer-events-none">
          {/* Top Section (Empty for now) */}
          <div className="flex justify-between items-start">
            {/* Potential top overlays */}
          </div>

          {/* Center Play Button */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Play weight="fill" className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-end items-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
              <span className="text-white text-xs font-medium">Reel</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoContainer;
