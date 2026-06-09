import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Trophy, Wine, Home, Check, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface VenueCategory {
  id: string;
  title: string;
  icon: any;
  items: string[];
}

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
              Venues
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl">
              From packed festivals and legendary country clubs to top wineries and dozens of vibrant senior communities—here are some of the premier venues we've had the pleasure of entertaining.
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
      </div>
    </section>
  );
}
