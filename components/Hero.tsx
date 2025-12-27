import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const yCan = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 bg-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gray-100 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')] opacity-[0.04] pointer-events-none mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          style={{ y: yText }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display font-medium text-gray-500 tracking-[0.3em] text-sm md:text-base mb-6 uppercase">
              Zero Azúcar — Zero Calorías
            </h2>

            <div className="relative">
              <h1 className="font-display font-bold text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] text-black mb-8 uppercase tracking-tighter">
                ULTRA<br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-white text-outline-dark">WHITE</span>
              </h1>
            </div>

            <p className="font-body text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed mb-10 text-lg md:text-xl font-normal">
              Una reinterpretación total de la energía. Menos dulce, sabor ligero,
              cítrico y refrescante. <span className="font-semibold text-black">La energía de Monster sin el peso.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="w-16 h-[2px] bg-black group-hover:w-24 transition-all duration-300"></span>
              <span className="font-display font-bold text-2xl text-black uppercase tracking-wide">Unleash the Beast</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Visual - Larger, Rotated with Lightning Hover */}
        <motion.div
          style={{ y: yCan, opacity }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20 group"
          >
            {/* Lightning Bolt Effect - Behind Can */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Zap
                size={400}
                strokeWidth={1}
                className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.8)] animate-pulse"
                fill="rgba(250,204,21,0.3)"
              />
            </div>

            {/* Larger Can Image with Rotation */}
            <div className="relative w-[350px] h-[650px] md:w-[450px] md:h-[850px] drop-shadow-2xl transform rotate-3">
              <img
                src="/content/monsterHeader.png"
                alt="Lata Monster Energy Ultra White"
                className="w-full h-full object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)] transition-all duration-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-display text-xs tracking-widest uppercase text-gray-400">Scroll</span>
        <div className="w-[2px] h-12 bg-gray-200 overflow-hidden">
          <div className="w-full h-full bg-black animate-[tobottom_1.5s_infinite]"></div>
        </div>
      </motion.div>

      <style>{`
        @keyframes tobottom {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;