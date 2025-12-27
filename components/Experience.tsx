import React from 'react';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

interface ExperienceProps {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ isPlaying, toggleAudio }) => {
  return (
    <section id="experience" className="py-20 md:py-40 bg-white relative flex flex-col items-center justify-center border-t border-gray-100 overflow-hidden">

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
        </motion.div>
      </div>

      {/* Rhythm Visualization - Has its own dedicated space */}
      <div className="w-full flex items-end justify-center gap-2 h-32 my-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 md:w-4 bg-black/20 rounded-full"
            animate={isPlaying ? {
              height: [20, Math.random() * 80 + 30, 25, Math.random() * 60 + 20, 20],
            } : { height: 20 }}
            transition={isPlaying ? {
              duration: 0.8 + Math.random() * 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.1
            } : { duration: 0.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <p className="font-body text-gray-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
          Una experiencia auditiva curada para acompañar la frescura de Monster Ultra White.
          Sonidos ambientales, pads sintéticos y energía latente.
          <br /><br />
          <span className="text-sm text-gray-400 font-bold tracking-widest uppercase block mt-4">
            {isPlaying ? 'Reproduciendo...' : 'Toca el icono de audífonos para sumergirte.'}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Experience;