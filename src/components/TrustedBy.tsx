import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Trophy, Wine, Home, Check, ChevronDown, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface VenueCategory {
  id: string;
  title: string;
  icon: any;
  items: string[];
}

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

const VENUES_DATA: VenueCategory[] = [
  {
    id: "country-clubs",
    title: "Country Clubs",
    icon: Trophy,
    items: [
      "Bellerive",
      "Chesterfield Athletic Club",
      "Forest Hills",
      "Greenbriar Hills",
      "The Legends",
      "Meadowbrook",
      "Persimmon Woods Golf Club",
      "Sunset",
      "Westborough",
      "Whitmoor"
    ]
  },
  {
    id: "restaurants",
    title: "Restaurants & Wineries",
    icon: Wine,
    items: [
      "Augusta Winery",
      "Bar Louie",
      "Billy G’s",
      "Bobby’s Place",
      "Candicci’s",
      "Chaumette Winery",
      "Crown Valley Brewery",
      "EdgeWild Restaurant & Winery",
      "Harpo’s",
      "The Haus Pizzeria & Bar",
      "Hendel’s Market & Cafe",
      "Hermannhof Winery",
      "Joey B’s",
      "LaChance Vineyards",
      "Lake Creek Winery",
      "Little Hills Winery",
      "Llywelyn’s Pub",
      "Mellow Mushroom",
      "Mike Duffy’s",
      "Mount Pleasant Estates",
      "Satchmo’s Bar & Grill",
      "Sugar Creek Vineyards & Winery",
      "Syberg’s",
      "Two Twelve",
      "Walnut Grill (O’Fallon & Wildwood locations)",
      "Wente’s"
    ]
  },
  {
    id: "festivals",
    title: "Festivals & Public Events",
    icon: Sparkles,
    items: [
      "Ballwin Days Festival",
      "Ballwin Summer Concert Series",
      "Chesterfield Amphitheater",
      "Des Peres Lodge",
      "Festival of the Little Hills",
      "Grant's Farm",
      "Kirkwood Farmer’s Market",
      "Prairie Day Festival",
      "Taubman Outlet Mall",
      "Wentzville Fall Festival"
    ]
  },
  {
    id: "corporate",
    title: "Miscellaneous",
    icon: Calendar,
    items: [
      "Brookdale Farms (Charity Event)",
      "Brunswick Bowling (Charity Event)",
      "Delmar Gardens (Corporate Event)",
      "Kirkwood Train Station (Corporate Event)",
      "Landings at Spirit Golf Club (Wedding Reception)",
      "The Shack (Private Party)",
      "St. Gerard Magella (Private Event)",
      "St. Jude (Charity Event)"
    ]
  },
  {
    id: "senior-living",
    title: "Senior Living Communities",
    icon: Home,
    items: [
      "Aberdeen Heights",
      "Adams Place Retirement Apartments",
      "Anthology Town & Country",
      "Anthology Wildwood",
      "Autumn View Gardens",
      "Avalon Memory Care",
      "Bethesda Dilworth",
      "Bethesda Hawthorne",
      "Bethesda Meadow",
      "Bethesda Orchard",
      "Bethesda Southgate",
      "Big Bend Woods",
      "Breeze Park Senior Living",
      "Briarcrest Estates",
      "Brookdale Creve Coeur",
      "Brookdale West County",
      "Brooking Park",
      "Cape Albeon",
      "The Cedars of Town & Country",
      "Crestview Senior Living",
      "Creve Coeur Assisted Living",
      "Daugherty Ferry Assisted Living",
      "Delmar Gardens",
      "Delmar Gardens of Chesterfield",
      "Delmar Gardens Chesterfield Villas",
      "Delmar Gardens Creve Coeur",
      "Delmar Gardens of Meramec",
      "Delmar Gardens of O’Fallon",
      "Delmar Garden Villas of O’Fallon",
      "Delmar Garden Villas South",
      "Delmar Garden Villas West",
      "Delmar Gardens On the Green",
      "Delmar Gardens South",
      "Delmar Gardens West",
      "Dolan Memory Care",
      "Family Partners Home Ballwin",
      "Family Partners Des Peres",
      "The Fountains of West County",
      "Friendship Village of Chesterfield",
      "Friendship Village of Sunset Hills",
      "Gambrill Gardens",
      "Gardenview Care Center of Chesterfield",
      "Gardenview Care Center of Daugherty Ferry",
      "The Gatesworth",
      "Glenfield Memory Care",
      "The Grande Chesterfield",
      "Holy Infant Apartments",
      "Homestead at Hickory View",
      "Laclede Groves Senior Living",
      "Lakeview Park",
      "Mari De Villa",
      "Mary Queen and Mother Center",
      "Marymount Manor",
      "Mason Pointe",
      "Mattis Pointe",
      "Meramec Bluffs Senior Living",
      "Meridian Village",
      "NHC Healthcare of Maryland Heights",
      "NHC of St. Charles",
      "NHC of Town and Country",
      "The Oaks at Bethesda",
      "Orchid Terrace",
      "Our Lady of Life Apartments",
      "Parc Provence",
      "Provision Living West County",
      "Solstice Senior Living Fenton",
      "Southview Assisted Living",
      "St. Agnes Home",
      "St. Joseph Apartments",
      "Stonecrest of Town and Country",
      "Sunrise of Des Peres",
      "Tesson Heights",
      "Victorian Gardens",
      "Westview Assisted Living"
    ]
  }
];

export default function TrustedBy() {
  const [activeTab, setActiveTab] = useState<string>("country-clubs");
  const [reviewIndex, setReviewIndex] = useState(0);

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const searchQuery = "";
  const normalizedQuery = "";

  // Items currently displayed
  const currentCategory = VENUES_DATA.find(c => c.id === activeTab) || VENUES_DATA[0];
  const displayedItems = currentCategory.items;

  // Render Category Tab Buttons
  return (
    <section id="venues" className="pt-[68px] md:pt-20 pb-12 md:pb-24 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center md:text-left mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-sans uppercase mb-4 tracking-tight leading-none text-white">
              Venues & Reviews
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl">
              From packed festivals and legendary country clubs to top wineries and dozens of vibrant senior communities—here are some of the premier venues we've had the pleasure of entertaining, and what people are saying.
            </p>
          </motion.div>
        </div>

        {/* Mobile Accordion Venue List */}
        <div className="flex flex-col gap-4 md:hidden mb-6">
          {VENUES_DATA.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = activeTab === cat.id;

            return (
              <div
                key={cat.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden bg-slate-950/40 border-slate-800/80 text-white",
                  isSelected && "border-primary bg-slate-950 shadow-[0_10px_30px_rgba(var(--color-primary),0.15)]"
                )}
              >
                <button
                  onClick={() => setActiveTab(isSelected ? "" : cat.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2.5 rounded-xl transition-colors",
                      isSelected ? "bg-primary/20 text-primary" : "bg-slate-900 border border-slate-800/60 text-slate-400 group-hover:text-primary"
                    )}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <span className={cn(
                        "font-bold text-base tracking-tight block transition-colors duration-300",
                        isSelected ? "text-primary" : "text-white group-hover:text-primary"
                      )}>
                        {cat.id === "festivals" ? "Festivals" : cat.id === "corporate" ? "Miscellaneous" : cat.id === "country-clubs" ? "Country Clubs" : cat.id === "restaurants" ? "Dining" : "Senior Living"}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 font-mono mt-0.5 block">
                        {cat.items.length} venues
                      </span>
                    </div>
                  </div>
                  <div className={cn(
                    "w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center transition-transform duration-300",
                    isSelected ? "rotate-180 border-primary/50 text-primary bg-primary/10" : "text-slate-400"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-2 border-t border-slate-900/60 bg-slate-950/70">
                        <div className="grid grid-cols-1 gap-2">
                          {cat.items.map((venue, idx) => (
                            <motion.div
                              key={venue}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.15, delay: Math.min(idx * 0.015, 0.3) }}
                              className="flex items-start gap-2.5 py-2 border-b border-slate-900/40 last:border-b-0"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-[7px] shrink-0" />
                              <p className="text-sm font-medium text-slate-300 leading-snug">
                                {venue}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Category Tabs Grid - Desktop only */}
        <div className="hidden md:grid grid-cols-5 gap-3 mb-8">
          {VENUES_DATA.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-xl border transition-all text-center group cursor-pointer relative overflow-hidden",
                  isSelected
                    ? "bg-slate-950 border-primary text-white scale-105 shadow-[0_10px_25px_rgba(var(--color-primary),0.12)]"
                    : "bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-white"
                )}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-primary"
                  />
                )}

                <IconComponent className={cn(
                  "h-5 w-5 mb-2 transition-transform",
                  isSelected ? "text-primary scale-110" : "text-slate-400 group-hover:text-primary group-hover:scale-110"
                )} />
                <span className="font-semibold text-xs md:text-sm tracking-tight leading-tight mb-1">
                  {cat.id === "festivals" ? "Festivals" : cat.id === "corporate" ? "Miscellaneous" : cat.id === "country-clubs" ? "Country Clubs" : cat.id === "restaurants" ? "Dining" : "Senior Living"}
                </span>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full">
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic List Render under Grid of Micro-cards - Desktop only */}
        <div className="hidden md:block min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "_" + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-2xl font-sans uppercase mb-6 flex items-center justify-between border-b border-slate-800 pb-3 text-white">
                <span className="flex items-center gap-2">
                  {currentCategory.title}
                  <span className="text-sm font-mono text-slate-500 hover:text-slate-300">
                    ({displayedItems.length} listed)
                  </span>
                </span>
              </h3>

              {displayedItems.length === 0 ? (
                <div className="text-center py-12 text-slate-400 max-w-sm mx-auto">
                  <p className="text-lg font-medium mb-2">No venues listed</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 pt-2">
                  {displayedItems.map((venue, idx) => (
                    <motion.div
                      key={venue}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: Math.min(idx * 0.0125, 0.3) }}
                      className="flex items-start gap-2.5 py-2 border-b border-slate-800/60"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-[7px] shrink-0" />
                      <p className="text-sm font-medium text-slate-300 leading-snug">
                        {venue}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonials divider & header */}
        <div className="mt-8 md:mt-12">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-widest text-sm">Client Experiences</span>
            <h3 className="text-4xl md:text-6xl uppercase tracking-tight mt-2 font-black leading-none text-white">
              What People <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Are Saying</span>
            </h3>
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
      </div>
    </section>
  );
}
