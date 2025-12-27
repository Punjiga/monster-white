import React from 'react';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

interface ExperienceProps {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ isPlaying, toggleAudio }) => {
  return (
    <section id="experience" className="py-40 bg-white relative flex items-center justify-center border-t border-gray-100 overflow-hidden">

      {/* Rhythm Visualization - Animated bars when playing */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex items-end justify-center gap-2 h-40 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 bg-black rounded-full"
              animate={isPlaying ? {
                height: [20, Math.random() * 100 + 40, 30, Math.random() * 80 + 20, 20],
              } : { height: 20 }}
              transition={{
                duration: 0.8 + Math.random() * 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Clickable Audio Control */}
          <button
            onClick={toggleAudio}
            className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-10 border-2 transition-all duration-500 cursor-pointer ${isPlaying
                ? 'bg-black text-white border-black animate-pulse'
                : 'bg-gray-50 text-black border-gray-200 hover:bg-gray-100'
              }`}
            aria-label="Toggle Audio"
          >
            <Headphones size={44} strokeWidth={1.5} />
          </button>

          <h2 className="font-display font-bold text-gray-400 tracking-[0.4em] mb-6 uppercase text-sm">
            Soundscape
          </h2>

          <p className="font-display font-bold text-5xl md:text-7xl text-black mb-8 uppercase tracking-tight">
            Atmósfera Ultra
          </p>

          <div className="w-[1px] h-20 bg-black/20 mx-auto my-10" />

          <p className="font-body text-gray-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
            Una experiencia auditiva curada para acompañar la frescura de Monster Ultra White.
            Sonidos ambientales, pads sintéticos y energía latente.
            <br /><br />
            <span className="text-sm text-gray-400 font-medium block mt-4">
              {isPlaying ? '🎵 Reproduciendo...' : 'Toca el icono de audífonos para sumergirte.'}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;