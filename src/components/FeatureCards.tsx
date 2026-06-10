import React from 'react';
import { motion } from 'motion/react';
import { Headphones, Calendar, Heart, Music, MapPin, Mail, Search } from 'lucide-react';
import { SONG_LIST } from '../constants';

const cards = [
  {
    title: "SEE US LIVE",
    description: "Experience the energy of our live performances across the Midwest.",
    icon: Calendar,
    id: "tour"
  },
  {
    title: "LISTEN",
    description: "Watch live performance videos and hear the band in action.",
    icon: Headphones,
    id: "music"
  },
  {
    title: "Tip Jar",
    description: "Support the music directly. Every tip helps us keep the show on the road.",
    icon: Heart,
    id: "tip-jar"
  }
];

export default function FeatureCards() {
  return (
    <div className="relative -mt-20 md:-mt-16 z-20 w-full max-w-7xl mx-auto px-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.a
            key={card.title}
            href={`#${card.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="bg-white px-8 py-7 rounded-xl shadow-2xl shadow-black/5 hover:shadow-primary/10 transition-all group flex flex-col items-center text-center border border-slate-100 cursor-pointer block"
          >
            <div className="mb-4 bg-slate-950 p-4 rounded-lg group-hover:bg-primary transition-all duration-300">
              <card.icon className="w-8 h-8 text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-black mb-2 text-slate-900 uppercase md:whitespace-nowrap">{card.title}</h3>
            <p className="text-slate-500 leading-relaxed">
              {card.description}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Horizontal Setlist Banner (Desktop/Tablet Only) */}
      <motion.a
        href="#songs"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.015 }}
        transition={{ 
          delay: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="mt-8 bg-[#e6f7f3] border-l-[10px] border-[#1da58a] rounded-xl py-3.5 px-6 md:py-4 md:px-8 shadow-sm transition-all hidden md:flex flex-row items-center justify-between gap-6 cursor-pointer group"
      >
        <div className="flex items-center gap-3.5 md:gap-4 text-left">
          <Music className="w-6 h-6 text-[#1fa78f] shrink-0" />
          <span className="text-base md:text-lg lg:text-[19px] font-semibold text-[#0a483c] tracking-tight">
            Wondering if we play your song?
          </span>
        </div>
        <div className="shrink-0 flex items-center gap-1 text-[#1fa78f] font-semibold text-sm md:text-base hover:text-[#178e7a] transition-colors">
          <span>Search our {SONG_LIST?.length || 166}-song set list</span>
          <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </div>
      </motion.a>

      {/* Mobile Only Quick Links Row */}
      <div className="grid grid-cols-3 gap-4 mt-8 md:hidden w-full max-w-sm mx-auto">
        {/* Setlist Link */}
        <motion.a
          href="#songs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group aspect-square rounded-full w-full max-w-[90px] mx-auto flex flex-col items-center justify-center bg-[#34B49C] hover:bg-[#2da18b] text-white shadow-lg shadow-[#34B49C]/20 transition-all border border-[#2da18b]/20 text-center"
        >
          <Music className="w-5 h-5 mb-1 text-white transition-transform duration-300 group-hover:scale-125" />
          <span className="text-[9px] font-black tracking-wider text-white uppercase">SETLIST</span>
        </motion.a>

        {/* Venues Link */}
        <motion.a
          href="#venues"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group aspect-square rounded-full w-full max-w-[90px] mx-auto flex flex-col items-center justify-center bg-[#34B49C] hover:bg-[#2da18b] text-white shadow-lg shadow-[#34B49C]/20 transition-all border border-[#2da18b]/20 text-center"
        >
          <MapPin className="w-5 h-5 mb-1 text-white transition-transform duration-300 group-hover:scale-125" />
          <span className="text-[9px] font-black tracking-wider text-white uppercase">VENUES</span>
        </motion.a>

        {/* Contact Link */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group aspect-square rounded-full w-full max-w-[90px] mx-auto flex flex-col items-center justify-center bg-[#34B49C] hover:bg-[#2da18b] text-white shadow-lg shadow-[#34B49C]/20 transition-all border border-[#2da18b]/20 text-center"
        >
          <Mail className="w-5 h-5 mb-1 text-white transition-transform duration-300 group-hover:scale-125" />
          <span className="text-[9px] font-black tracking-wider text-white uppercase">CONTACT</span>
        </motion.a>
      </div>
    </div>
  );
}

