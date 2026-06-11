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
          <span>Search our full set list</span>
          <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </div>
      </motion.a>

      <div className="grid grid-cols-3 gap-5 mt-8 md:hidden w-full max-w-sm mx-auto px-4">
        {/* Setlist Link */}
        <motion.a
          href="#songs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 0
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center group text-center"
        >
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full text-[#34B49C] fill-none" viewBox="0 0 100 100">
              {/* Outer sketchy ring */}
              <circle 
                cx="50" 
                cy="50" 
                r="44" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                fill="#0f172a"
                className="opacity-90"
              />
              {/* Inner accent sketchy ring */}
              <circle 
                cx="51" 
                cy="49" 
                r="40" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeDasharray="15 6 10 4 20 8"
                className="opacity-70"
              />
              {/* Handdrawn imperfect touch ring */}
              <path
                d="M 50,11 A 39,39 0 1,1 49.9,11"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="30 15 10 10"
                className="opacity-50"
              />
            </svg>
            <div className="relative z-10 flex flex-col items-center justify-center bg-slate-900 group-hover:bg-[#34B49C]/15 rounded-full w-16 h-16 transition-colors shadow-sm">
              <Music className="w-5 h-5 text-[#34B49C] -mt-0.5 mb-1.5" />
              <span className="text-[9px] font-black tracking-widest text-white uppercase leading-none">SETLIST</span>
            </div>
          </div>
        </motion.a>

        {/* Venues Link */}
        <motion.a
          href="#venues"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 0.08
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center group text-center"
        >
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full text-[#34B49C] fill-none" viewBox="0 0 100 100">
              {/* Outer sketchy ring */}
              <circle 
                cx="50" 
                cy="50" 
                r="44" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                fill="#0f172a"
                className="opacity-90"
              />
              {/* Inner accent sketchy ring */}
              <circle 
                cx="51" 
                cy="49" 
                r="40" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeDasharray="15 6 10 4 20 8"
                className="opacity-70"
              />
              {/* Handdrawn imperfect touch ring */}
              <path
                d="M 50,11 A 39,39 0 1,1 49.9,11"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="30 15 10 10"
                className="opacity-50"
              />
            </svg>
            <div className="relative z-10 flex flex-col items-center justify-center bg-slate-900 group-hover:bg-[#34B49C]/15 rounded-full w-16 h-16 transition-colors shadow-sm">
              <MapPin className="w-5 h-5 text-[#34B49C] -mt-0.5 mb-1.5" />
              <span className="text-[9px] font-black tracking-widest text-white uppercase leading-none">VENUES</span>
            </div>
          </div>
        </motion.a>

        {/* Contact Link */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 0.16
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center group text-center"
        >
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full text-[#34B49C] fill-none" viewBox="0 0 100 100">
              {/* Outer sketchy ring */}
              <circle 
                cx="50" 
                cy="50" 
                r="44" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                fill="#0f172a"
                className="opacity-90"
              />
              {/* Inner accent sketchy ring */}
              <circle 
                cx="51" 
                cy="49" 
                r="40" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeDasharray="15 6 10 4 20 8"
                className="opacity-70"
              />
              {/* Handdrawn imperfect touch ring */}
              <path
                d="M 50,11 A 39,39 0 1,1 49.9,11"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="30 15 10 10"
                className="opacity-50"
              />
            </svg>
            <div className="relative z-10 flex flex-col items-center justify-center bg-slate-900 group-hover:bg-[#34B49C]/15 rounded-full w-16 h-16 transition-colors shadow-sm">
              <Mail className="w-5 h-5 text-[#34B49C] -mt-0.5 mb-1.5" />
              <span className="text-[9px] font-black tracking-widest text-white uppercase leading-none">CONTACT</span>
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  );
}

