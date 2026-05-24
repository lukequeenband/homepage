import { motion } from 'motion/react';
import { VIDEOS } from '../constants';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="videos" className="pt-[58px] md:pt-20 pb-[58px] md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl mb-6 uppercase">See Us In Action</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-14 font-medium">
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
              className="group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-xl">
                <iframe 
                  src={video.url}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{video.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
