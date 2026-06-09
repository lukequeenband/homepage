import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
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
    { name: 'Tour', href: '#tour' },
    { name: 'Songs', href: '#songs' },
    { name: 'Videos', href: '#videos' },
    { name: 'Tip Jar', href: '#tip-jar' },
    { name: 'Trusted By', href: '#trusted-by' },
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
              "text-3xl font-lovelo font-black tracking-tighter transition-colors duration-500",
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
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isContact = link.name === 'Contact';
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  isContact
                    ? "bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-bold text-sm hover:text-white hover:scale-105 transition-transform inline-block"
                    : "text-sm font-semibold hover:text-primary transition-colors",
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
        </motion.div>
      )}
    </nav>
  );
}
