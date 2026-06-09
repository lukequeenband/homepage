import { motion } from 'motion/react';
import { VIDEOS } from '../constants';
import { Play, ExternalLink } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="music" className="pt-[58px] md:pt-20 pb-[58px] md:pb-20 bg-slate-950 border-t border-slate-900 text-white overflow-hidden relative">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl mb-6 uppercase text-white tracking-tight">See Us In Action</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-14 font-medium">
          Nothing beats being there, but these highlights are a close second. Check out some of our recent live performances.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {VIDEOS.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group text-center"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 mb-6 shadow-2xl group/iframe">
                <iframe 
                  src={video.url}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {video.playlistUrl && (
                  <a 
                    href={video.playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-slate-950/80 hover:bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full border border-slate-800 backdrop-blur-sm transition-all duration-300 flex items-center gap-1.5 shadow-lg group-hover/iframe:scale-105 z-20"
                  >
                    <span>View Playlist</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              {video.playlistUrl ? (
                <a 
                  href={video.playlistUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 group/link hover:no-underline"
                >
                  <h4 className="text-2xl font-black text-white group-hover:text-primary group-hover/link:text-primary transition-colors uppercase tracking-tight">
                    {video.title}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover/link:text-primary transition-colors" />
                </a>
              ) : (
                <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight">{video.title}</h4>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
