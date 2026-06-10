import { motion } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Listen', href: '#music' },
    { name: 'Shows', href: '#tour' },
    { name: 'Setlist', href: '#songs' },
    { name: 'Venues', href: '#venues' },
    { name: 'Tip Jar', href: '#tip-jar' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span 
            className={cn(
              "text-2xl md:text-[28px] lg:text-4xl font-lovelo font-black tracking-tighter transition-colors duration-500 whitespace-nowrap",
              scrolled ? "text-black" : "text-white"
            )}
            style={{
              WebkitTextStroke: scrolled ? '1.5px #000' : '1.5px #fff',
              color: 'transparent'
            }}
          >
            LUKE QUEEN BAND
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center md:space-x-3 lg:space-x-8">
          {navLinks.map((link) => {
            const isContact = link.name === 'Contact';
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  isContact
                    ? "bg-primary hover:bg-primary/90 text-white md:px-3 md:py-1.5 lg:px-5 lg:py-2.5 rounded-md font-bold md:text-[15px] lg:text-base hover:text-white hover:scale-105 transition-transform inline-block whitespace-nowrap"
                    : "md:text-[15px] lg:text-base font-semibold hover:text-primary transition-colors whitespace-nowrap",
                  !isContact && (scrolled ? "text-slate-600" : "text-white")
                )}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(scrolled ? "text-slate-900" : "text-white")}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-700 font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-slate-100 justify-start items-center">
            <a href="https://www.instagram.com/lukequeenband" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-500 transition-colors" onClick={() => setIsOpen(false)}><Instagram className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/lukequeenband/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-500 transition-colors" onClick={() => setIsOpen(false)}><Facebook className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/@lukequeenband" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-500 transition-colors" onClick={() => setIsOpen(false)}><Youtube className="w-5 h-5" /></a>
            <a href="http://www.linkedin.com/in/luke-queen-band" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-500 transition-colors" onClick={() => setIsOpen(false)}><Linkedin className="w-5 h-5" /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
