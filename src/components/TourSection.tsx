import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { TOUR_DATES } from '../constants';
import { ExternalLink, Calendar, Facebook, Instagram, Youtube } from 'lucide-react';
import tourSchedulePic from '../assets/images/TourSchedulePic.jpg';

export default function TourSection() {
  const calendarSrc = "https://calendar.google.com/calendar/embed?src=OGE5ZGU4NjM0YzRkYmM0ZmJkYjdkYzQyMjI4NmZhMjJjYmYyYTUxODMyZWY1NTE2ZjE1YzhhYzdlMjIwNzJhYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&ctz=America%2FChicago&mode=AGENDA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showTzs=0&color=%2334B49C";

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="tour" ref={sectionRef} className="pt-5 md:pt-5 pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl mb-6 uppercase">Tour Schedule</h2>
            <p className="text-xl text-slate-500 font-medium">
              Catch us live at a venue near you.
            </p>
          </div>
          <a 
            href="https://calendar.google.com/calendar/u/0/r?cid=OGE5ZGU4NjM0YzRkYmM0ZmJkYjdkYzQyMjI4NmZhMjJjYmYyYTUxODMyZWY1NTE2ZjE1YzhhYzdlMjIwNzJhYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-primary hover:bg-primary/95 text-white px-8 py-3 rounded-md font-bold transition-all uppercase tracking-wide text-sm whitespace-nowrap inline-flex items-center justify-center w-full"
          >
            Add to My Calendar
            <Calendar className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="w-full md:w-[60%]">
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <iframe 
                src={calendarSrc}
                style={{ border: 0 }}
                className="w-full h-full"
                frameBorder="0" 
                scrolling="no"
                title="Tour Schedule Calendar"
              ></iframe>
            </div>

            {/* Mobile/Tablet Only Social Media Links under calendar */}
            <div className="md:hidden flex flex-wrap items-center gap-4 mt-6 pl-2">
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
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex w-full md:w-[40%] flex-col items-center">
            {/* Desktop and Tablet Add to My Calendar button above the picture */}
            <a 
              href="https://calendar.google.com/calendar/u/0/r?cid=OGE5ZGU4NjM0YzRkYmM0ZmJkYjdkYzQyMjI4NmZhMjJjYmYyYTUxODMyZWY1NTE2ZjE1YzhhYzdlMjIwNzJhYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg items-center transition-all mb-4 shadow-md hover:scale-[1.02] active:scale-[0.98] w-full justify-center"
            >
              Add to My Calendar
              <Calendar className="ml-2 w-5 h-5" />
            </a>

            <div className="w-full h-[340px] md:h-full md:flex-1 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative group">
              <div className="w-full h-full overflow-hidden absolute inset-0">
                <motion.img 
                  src={tourSchedulePic} 
                  alt="Luke Queen Band Live Performance" 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full object-cover object-top origin-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
