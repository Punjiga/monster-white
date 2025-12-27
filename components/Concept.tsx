import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Feather, Zap } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Cero Azúcar",
    description: "Todo el sabor, nada de culpa. Una fórmula diseñada para mantenerte al 100% sin el bajón de azúcar.",
    icon: Zap
  },
  {
    title: "Sabor Ligero",
    description: "Un perfil de sabor cítrico y refrescante. Menos dulce, más crujiente. Perfecto para cualquier momento.",
    icon: Feather
  },
  {
    title: "Ultra Frío",
    description: "La experiencia Ultra White se vive mejor helada. Frescura instantánea en cada sorbo.",
    icon: Snowflake
  }
];

const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-32 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="font-display font-bold text-gray-400 tracking-[0.2em] text-sm uppercase block mb-4">La Fórmula</span>
          <h2 className="font-display font-bold text-6xl md:text-8xl mb-8 text-black uppercase tracking-tight">El Concepto</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-10"></div>
          <p className="font-body text-gray-700 max-w-3xl mx-auto text-xl leading-relaxed font-light">
            Algunas personas son imposibles de complacer. En cuanto consiguen lo que creían querer, ya piden otra cosa. 
            <strong className="text-black font-semibold"> Ultra White</strong> es la respuesta a esa exigencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gray-50 p-12 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-black">
                <feature.icon size={120} strokeWidth={1} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors duration-500 shadow-sm">
                    <feature.icon size={28} />
                </div>
                <h3 className="font-display font-bold text-3xl mb-4 tracking-wide uppercase text-black">{feature.title}</h3>
                <p className="font-body text-gray-600 leading-relaxed text-base">
                    {feature.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-black group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;