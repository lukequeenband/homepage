import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroBanner from '../assets/images/small banner.png';

export default function Hero() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Trigger a reset of the trace animation if the user scrolls back to the very top
      if (currentScrollY <= 5 && lastScrollY > 5) {
        setAnimationKey(prev => prev + 1);
      }
      lastScrollY = currentScrollY;
    };

    const handleHashChange = () => {
      // Trigger a reset if the hash goes back to empty/home
      if (window.location.hash === "" || window.location.hash === "#" || window.location.hash === "#home") {
        setAnimationKey(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 brightness-110 bg-[position:85%_center] md:bg-[position:85%_center] lg:bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${heroBanner}")`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/30 bg-linear-to-r from-black/55 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-8xl text-white font-black leading-tight mb-6"
          >
            Live Music <br />
            Done Right.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl leading-relaxed"
          >
            <span className="font-bold text-primary">LUKE QUEEN BAND</span> is St. Louis' premier cover band duo. From modern hits to timeless classics, we bring the party to stages of every size.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="mailto:info@LukeQueenBand.com" 
              className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center group hover:scale-105 transition-transform"
            >
              {/* Perimeter border trace glow svg */}
              <svg 
                key={animationKey}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 10 }}
              >
                {/* Glow layer */}
                <rect
                  x="1.5"
                  y="1.5"
                  style={{ width: 'calc(100% - 3px)', height: 'calc(100% - 3px)' }}
                  rx="6"
                  ry="6"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="25 75"
                  pathLength="100"
                  className="animate-border-trace"
                />
                {/* Sharp core layer */}
                <rect
                  x="1.5"
                  y="1.5"
                  style={{ width: 'calc(100% - 3px)', height: 'calc(100% - 3px)' }}
                  rx="6"
                  ry="6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="25 75"
                  pathLength="100"
                  className="animate-border-trace"
                />
              </svg>

              <span className="relative z-10 flex items-center">
                BOOK NOW
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white/50 md:hidden"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
