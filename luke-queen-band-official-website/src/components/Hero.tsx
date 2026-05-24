import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroBanner from '../assets/images/small banner.png';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 brightness-110 bg-[position:85%_center] md:bg-center bg-cover"
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
            <a href="mailto:info@LukeQueenBand.com" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center group hover:scale-105 transition-transform">
              BOOK NOW
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
