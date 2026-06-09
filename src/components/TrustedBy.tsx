import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Sparkles, Briefcase, Trophy, Wine, Home, Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface VenueCategory {
  id: string;
  title: string;
  icon: any;
  items: string[];
}

const VENUES_DATA: VenueCategory[] = [
  {
    id: "festivals",
    title: "Festivals & Public Events",
    icon: Sparkles,
    items: [
      "Ballwin Days Festival",
      "Ballwin Summer Concert Series",
      "Chesterfield Amphitheater",
      "Des Peres Lodge",
      "Grant's Farm",
      "Kirkwood Farmer’s Market",
      "Taubman Outlet Mall"
    ]
  },
  {
    id: "corporate",
    title: "Corporate & Private Events",
    icon: Briefcase,
    items: [
      "Brookdale Farms (Charity Event)",
      "Brunswick Bowling (Charity Event)",
      "Kirkwood Train Station (Corporate Event)",
      "Landings at Spirit Golf Club (Wedding Reception)",
      "The Shack (Private Party)",
      "St. Gerard Magella (Private Event)",
      "St. Jude (Charity Event)"
    ]
  },
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
      "Persimmon Woods Golf Club",
      "Sunset",
      "Westborough"
    ]
  },
  {
    id: "restaurants",
    title: "Restaurants & Wineries",
    icon: Wine,
    items: [
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
      "Joey B’s",
      "Little Hills Winery",
      "Llywelyn’s Pub",
      "Mellow Mushroom",
      "Mike Duffy’s",
      "Satchmo’s Bar & Grill",
      "Sugar Creek Vineyards & Winery",
      "Syberg’s",
      "Two Twelve",
      "Walnut Grill (O’Fallon & Wildwood locations)",
      "Wente’s"
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
  const [activeTab, setActiveTab] = useState<string>("festivals");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Handler for searching overall
  const normalizedQuery = searchQuery.trim().toLowerCase();

  // Highlight which categories contain matches or filter based on matches
  const hasMatchesGlobal = (cat: VenueCategory) => {
    if (!normalizedQuery) return true;
    return cat.items.some(item => item.toLowerCase().includes(normalizedQuery));
  };

  // Find overall matches count
  const allMatchedItems: { name: string; categoryTitle: string }[] = [];
  VENUES_DATA.forEach(cat => {
    cat.items.forEach(item => {
      if (item.toLowerCase().includes(normalizedQuery)) {
        allMatchedItems.push({ name: item, categoryTitle: cat.title });
      }
    });
  });

  // Items currently displayed (depends on whether search query is active or not)
  const currentCategory = VENUES_DATA.find(c => c.id === activeTab) || VENUES_DATA[0];
  const displayedItems = normalizedQuery
    ? currentCategory.items.filter(item => item.toLowerCase().includes(normalizedQuery))
    : currentCategory.items;

  // Render Category Tab Buttons
  return (
    <section id="trusted-by" className="pt-20 pb-24 bg-slate-950 border-t border-slate-900 text-white relative overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-sans uppercase mb-4 tracking-tight leading-none">
              Trusted By
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl">
              From packed festivals and legendary country clubs to top wineries and dozens of vibrant senior communities—here are some of the premier venues we've had the pleasure of entertaining.
            </p>
          </motion.div>
        </div>

        {/* Global Search and Stats */}
        <div className="mb-10 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search for any venue we've played..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 h-12 pl-12 pr-4 rounded-xl border border-slate-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white transition-all placeholder-slate-500"
            />
            {searchQuery && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                {allMatchedItems.length} found
              </span>
            )}
          </div>
        </div>

        {/* Category Tabs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {VENUES_DATA.map((cat) => {
            const IconComponent = cat.icon;
            const matchesCount = cat.items.filter(item => item.toLowerCase().includes(normalizedQuery)).length;
            const isSelected = activeTab === cat.id;

            // If we are searching and there are no matches in this tab, fade it out slightly
            const hasMatches = normalizedQuery ? matchesCount > 0 : true;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-xl border transition-all text-center group cursor-pointer relative overflow-hidden",
                  isSelected
                    ? "bg-slate-900 border-primary text-white scale-105 shadow-[0_0_15px_rgba(var(--color-primary),0.15)]"
                    : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white",
                  !hasMatches && "opacity-30"
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
                  isSelected ? "text-primary scale-110" : "text-slate-500 group-hover:text-primary group-hover:scale-110"
                )} />
                <span className="font-semibold text-xs md:text-sm tracking-tight leading-tight mb-1">
                  {cat.id === "festivals" ? "Festivals" : cat.id === "corporate" ? "Corp / Private" : cat.id === "country-clubs" ? "Country Clubs" : cat.id === "restaurants" ? "Wineries" : "Senior Living"}
                </span>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-950/60 px-2 py-0.5 rounded-full">
                  {normalizedQuery ? `${matchesCount}/${cat.items.length}` : cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic List Render under Grid of Micro-cards */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "_" + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-2xl font-sans uppercase mb-6 flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="flex items-center gap-2">
                  {currentCategory.title}
                  <span className="text-sm font-mono text-slate-500 hover:text-white">
                    ({displayedItems.length} listed)
                  </span>
                </span>
              </h3>

              {displayedItems.length === 0 ? (
                <div className="text-center py-12 text-slate-500 max-w-sm mx-auto">
                  <p className="text-lg font-medium mb-2">No matching venues found</p>
                  <p className="text-sm">Try searching another category or double-check the spelling!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {displayedItems.map((venue, idx) => (
                    <motion.div
                      key={venue}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: Math.min(idx * 0.0125, 0.3) }}
                      className="group flex items-start gap-3 p-4 rounded-xl bg-slate-900/45 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900 hover:shadow-md transition-all duration-300"
                    >
                      <div className="mt-0.5 p-1 rounded-md bg-slate-950 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <MapPin className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-slate-100 group-hover:text-white transition-colors">
                          {venue}
                        </p>
                        <p className="text-[10px] font-mono text-slate-500 mt-0.5">
                          Verified Performance
                        </p>
                      </div>
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
