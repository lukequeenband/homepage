import React from 'react';
import { motion } from 'motion/react';
import { Music, Calendar, Heart } from 'lucide-react';

const cards = [
  {
    title: "Live Shows",
    description: "Experience the energy of our live performances across the Midwest.",
    icon: Calendar,
    id: "tour"
  },
  {
    title: "Song List",
    description: "Search our catalog of crowd-favorite hits from country to rock and more.",
    icon: Music,
    id: "songs"
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
            className="bg-white px-10 py-7 rounded-xl shadow-2xl shadow-black/5 hover:shadow-primary/10 transition-shadow group flex flex-col items-center text-center border border-slate-100"
          >
            <div className="mb-4 bg-slate-950 p-4 rounded-lg group-hover:bg-primary transition-all duration-300">
              <card.icon className="w-8 h-8 text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-black mb-2 text-slate-900 uppercase">{card.title}</h3>
            <p className="text-slate-500 leading-relaxed">
              {card.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
