import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    text: "From start to finish, these guys had everyone singing. Great mix of music from the 60’s to present. I recommend for your private party or your business. If they are playing at a local winery, brew pub or restaurant- I will be there. Love these guys.",
    author: "Carl H.",
    role: "Private Party",
    location: "Defiance, MO",
    rating: 5
  },
  {
    id: 2,
    text: "Great band!  Made the event fun and enjoyable for everyone!!  Will definitely be booking them again.",
    author: "Ryan J.",
    role: "Private Party",
    location: "St. Louis, MO",
    rating: 5
  },
  {
    id: 3,
    text: "Luke Queen Band was not only professional, but insanely talented! They played for our wedding shower and guests couldn’t have had a better time!",
    author: "Christina G.",
    role: "Wedding Shower",
    location: "Kirkwood, MO",
    rating: 5
  },
  {
    id: 4,
    text: "Our entire party really enjoyed the band. Will hire again.",
    author: "Michael M.",
    role: "Private Party",
    location: "Huntleigh, MO",
    rating: 5
  },
  {
    id: 5,
    text: "Great experience. Everyone had a great time. Well worth the cost!",
    author: "Donnie G.",
    role: "Private Party",
    location: "Kirkwood, MO",
    rating: 5
  }
];

export default function Testimonials() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="testimonials" className="pt-12 md:pt-[57.6px] pb-20 md:pb-24 bg-slate-900 border-t border-slate-800 text-white overflow-hidden relative">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-widest text-sm">Client Experiences</span>
          <h2 className="text-4xl md:text-6xl uppercase tracking-tight mt-2 font-black leading-none text-white">
            What People <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Are Saying</span>
          </h2>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) {
                nextReview();
              } else if (info.offset.x > 50) {
                prevReview();
              }
            }}
            className="relative bg-slate-950/40 border border-slate-800/80 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm min-h-[320px] flex flex-col justify-between cursor-grab active:cursor-grabbing touch-pan-y select-none"
          >
            
            {/* Quote Mark Decoration */}
            <div className="absolute top-6 right-8 text-slate-800 hover:text-primary/10 transition-colors pointer-events-none">
              <Quote className="w-16 h-16 transform scale-x-[-1]" />
            </div>

            <div className="space-y-6">
              {/* Rating stars */}
              <div className="flex gap-1" id="rating-stars">
                {Array.from({ length: REVIEWS[reviewIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Animated quote text */}
              <div className="min-h-[140px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                      key={reviewIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed italic"
                  >
                    "{REVIEWS[reviewIndex].text}"
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-800/60 mt-6">
              <div>
                <h4 className="font-bold text-lg text-white">{REVIEWS[reviewIndex].author}</h4>
                <p className="text-[#34B49C] text-sm font-medium">
                  {REVIEWS[reviewIndex].role} &middot; <span className="text-slate-400">{REVIEWS[reviewIndex].location}</span>
                </p>
              </div>

              {/* Carousel Controls */}
              <div className="flex gap-3">
                <button
                    onClick={prevReview}
                    aria-label="Previous review"
                    className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextReview}
                    aria-label="Next review"
                    className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </motion.div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2.5">
            {REVIEWS.map((_, idx) => (
              <button
                  key={idx}
                  onClick={() => setReviewIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === reviewIndex ? 'bg-primary w-8' : 'bg-slate-800 w-2.5 hover:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
