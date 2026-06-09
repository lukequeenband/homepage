import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

// Import images to ensure Vite processes them correctly
import imgA from '../assets/images/01_Luke01_ChesterfieldAmp2025.jpg';
import imgB from '../assets/images/02_Brett01_ChesterfieldAmp2025.jpg';
import imgC from '../assets/images/03_ChesterfieldAmp2025.jpg';
import imgCA from '../assets/images/04a_GrantsFarmBand.jpg';
import imgCB from '../assets/images/04b_BallwinDays_2024.jpeg';
import imgD from '../assets/images/04_Luke02_ChesterfieldAmp2025.jpg';
import imgE from '../assets/images/05_Brett02_ChesterfieldAmp2025.jpg';
import imgF from '../assets/images/06_Luke03_ChesterfieldAmp2025.jpg';
import imgG from '../assets/images/07_0 Photo_LukeBrett10_ChesterfieldAmp2025.jpg';
import imgI from '../assets/images/08_ChesterfieldAmp1.jpg';

// Gallery Images
const IMAGES = [
  imgA,
  imgB,
  imgC,
  imgCA,
  imgCB,
  imgD,
  imgE,
  imgF,
  imgG,
  imgI,
];

export default function BioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);

  const variants = {
    enter: {
      x: '100%',
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: '-100%',
      opacity: 0
    }
  };

  return (
    <section id="bio" className="pt-6 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative bg-black">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentIndex}
                  src={IMAGES[currentIndex]}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -50) {
                      nextSlide();
                    } else if (info.offset.x > 50) {
                      prevSlide();
                    }
                  }}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing touch-pan-y select-none"
                  style={{ objectPosition: IMAGES[currentIndex] === imgG ? '35% center' : 'center' }}
                  alt={`Luke Queen Band ${currentIndex + 1}`}
                />
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="p-2 rounded-full bg-white/80 text-slate-900 hover:bg-white transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="p-2 rounded-full bg-white/80 text-slate-900 hover:bg-white transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-4" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl shadow-xl hidden md:block z-20">
              <p className="text-white font-black text-4xl uppercase leading-none">EST.<br/>2015</p>
            </div>

            {/* Desktop Only Social Media Links under gallery */}
            <div className="hidden md:flex items-center gap-6 mt-12 pl-2">
              <span className="text-slate-400 uppercase font-black tracking-wider text-sm">Follow the band:</span>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/lukequeenband" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-900 hover:scale-110 active:scale-95 transition-all duration-200 transform block">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/lukequeenband/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-900 hover:scale-110 active:scale-95 transition-all duration-200 transform block">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@lukequeenband" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-900 hover:scale-110 active:scale-95 transition-all duration-200 transform block">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="http://www.linkedin.com/in/luke-queen-band" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-900 hover:scale-110 active:scale-95 transition-all duration-200 transform block">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-8 uppercase leading-none">The <br/>Story</h2>
            <div className="space-y-6 text-xl text-slate-500 font-medium leading-relaxed">
              <p>
                Based in St. Louis MO, <span className="text-slate-900 font-bold">Luke Queen Band</span> is a premier live cover band performing at wineries, festivals, corporate events, private parties, country clubs, restaurants, and senior communities across the Midwest. With 25+ years of performance experience and thousands of gigs played, <span className="text-slate-900 font-bold">Luke Queen Band</span> delivers professional musicianship, strong vocals, and a crowd-focused setlist packed with recognizable hits from the 1950s through today.
              </p>
              <p>
                Led by versatile vocalist and guitarist Luke Queen, the duo is known for its engaging stage presence, singalong energy, and ability to adapt to any atmosphere — from packed outdoor festivals to upscale private events and intimate acoustic settings.
              </p>
              <p>
                In addition to the full duo experience, Luke Queen offers solo live music performances featuring guitar, piano, and vocals for smaller events.
              </p>
              <p>
                No matter the venue or format, the goal remains the same: deliver a polished and engaging live music experience that keeps audiences entertained from the first song to the last.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
