import { motion } from 'motion/react';
import { SONG_LIST } from '../constants';
import { Search, Music2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function MusicSection() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredSongs = SONG_LIST.filter(
    song => song.title.toLowerCase().includes(search.toLowerCase()) || 
            song.artist.toLowerCase().includes(search.toLowerCase()) ||
            song.genres?.some(g => g.toLowerCase().includes(search.toLowerCase()))
  );

  const displayedSongs = showAll ? filteredSongs : filteredSongs.slice(0, 4);

  return (
    <section id="songs" className="pt-[60px] md:pt-[69px] lg:pt-[86.4px] pb-6 md:pb-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 lg:gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8 uppercase leading-none">Song <br />List</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-md">
              We play a massive variety of genres. Search by song title, artist, or genre to find your favorites.
            </p>
            
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search title, artist, or genre..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (!showAll && e.target.value !== "") setShowAll(true);
                }}
                className="w-full bg-white/5 border border-white/25 rounded-lg py-4 pl-12 pr-4 text-slate-400 placeholder:text-slate-400 focus:border-[#34B49C] focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className={cn(
            "bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-2",
            (search || showAll) ? "max-h-[416px] overflow-y-auto custom-scrollbar" : "overflow-hidden"
          )}>
            <div className="divide-y divide-white/5">
              {displayedSongs.map((song, index) => (
                <motion.div 
                  key={`${song.title}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 flex items-center group hover:bg-white/5 transition-colors"
                >
                  <div className="bg-primary/20 p-2 rounded-lg mr-4 group-hover:bg-primary transition-colors h-fit mt-1">
                    <Music2 className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg leading-snug">{song.title}</h5>
                    <p className="text-slate-400 text-sm font-medium mt-0.5">{song.artist}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {song.genres?.map(genre => (
                        <span key={genre} className="text-[10px] uppercase tracking-wider bg-white/10 px-1.5 py-0.5 rounded text-slate-400 font-bold group-hover:bg-primary/20 group-hover:text-white transition-colors">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredSongs.length === 0 && (
                <div className="p-12 text-center text-slate-500">
                  No songs matching your search.
                </div>
              )}
            </div>

            {filteredSongs.length > 4 && !search && (
              <button 
                onClick={() => setShowAll(!showAll)}
                className="w-full py-4 text-primary font-bold uppercase tracking-wider hover:bg-white/5 transition-all text-sm sticky bottom-0 bg-slate-900/90 backdrop-blur-sm"
              >
                {showAll ? "Show Less" : `View All Songs (${filteredSongs.length})`}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
