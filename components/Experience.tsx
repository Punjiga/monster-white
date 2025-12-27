import React from 'react';
import { motion } from 'framer-motion';
import { Music, Headphones } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40 bg-white relative flex items-center justify-center border-t border-gray-100">
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-10 text-black border border-gray-200">
             <Headphones size={40} strokeWidth={1} />
          </div>
          
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
            <br/><br/>
            <span className="text-sm text-gray-400 font-medium block mt-4">Haz click en el icono de volumen en la barra de navegación para sumergirte.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;