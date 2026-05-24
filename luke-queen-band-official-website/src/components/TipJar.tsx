import { motion } from 'motion/react';
import { TIP_LINKS } from '../constants';
import { CreditCard, DollarSign } from 'lucide-react';

export default function TipJar() {
  return (
    <section id="tip-jar" className="pt-[46px] md:pt-16 pb-16 bg-primary relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-[100px]" 
      />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl text-white mb-6 uppercase">Tip Jar</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
          The music never stops as long as the van has gas! If you enjoyed the show and want to support the band, feel free to drop a tip.<br className="hidden md:inline" /> We appreciate every bit of support.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={TIP_LINKS.payment}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white text-primary px-10 py-5 rounded-xl font-black text-xl shadow-xl hover:scale-105 transition-transform"
          >
            <CreditCard className="w-6 h-6" />
            <span>VENMO</span>
          </a>
        </div>
      </div>
    </section>
  );
}
