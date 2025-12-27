import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Gallery: React.FC = () => {
   const { scrollYProgress } = useScroll();
   const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

   // Local Monster Energy Ultra White images from /content folder
   const LOCAL_IMAGES = {
      img1: "/content/img (1).jpg",
      img2: "/content/img (2).jpg",
      img3: "/content/img (3).jpg"
   };

   return (
      <section id="visuals" className="py-40 bg-white text-black overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row justify-between items-end">
            <div>
               <h2 className="font-display font-bold text-7xl md:text-9xl mb-4 text-black uppercase tracking-tighter">Estética</h2>
               <div className="w-32 h-2 bg-black"></div>
            </div>
            <h3 className="font-display font-medium text-xl md:text-2xl tracking-[0.2em] text-gray-400 uppercase mt-6 md:mt-0">
               Official Visuals
            </h3>
         </div>

         <div className="flex flex-col md:flex-row w-full gap-10 px-6 md:px-12 md:h-[650px]">

            {/* Card 1: Pure Product - Clean Shot */}
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex-1 relative group overflow-hidden bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
               <div className="absolute inset-0 overflow-hidden">
                  <img
                     src={LOCAL_IMAGES.img1}
                     alt="Monster Ultra White Visual 1"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
               </div>
               <div className="absolute bottom-0 left-0 p-8 z-10">
                  <span className="font-display font-bold text-6xl text-gray-200 group-hover:text-black transition-colors duration-300">01</span>
                  <p className="font-body text-sm font-semibold tracking-widest uppercase mt-2">Full Profile</p>
               </div>
            </motion.div>

            {/* Card 2: Detail Shot - Simulated Macro of the Top/Tab via CSS Object Position */}
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex-1 relative group overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
               {/* Full image with hover effects */}
               <div className="absolute inset-0 overflow-hidden">
                  <img
                     src={LOCAL_IMAGES.img2}
                     alt="Monster Ultra White Visual 2"
                     className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>

               <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-700"></div>

               <div className="absolute bottom-0 left-0 p-8 z-10">
                  <span className="font-display font-bold text-6xl text-gray-300 group-hover:text-black transition-colors duration-300">02</span>
                  <p className="font-body text-sm font-semibold tracking-widest uppercase mt-2">Top Detail</p>
               </div>
            </motion.div>

            {/* Card 3: Brand Identity - Typography Focus */}
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="flex-1 relative group overflow-hidden bg-black shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center border border-gray-100"
            >
               <div className="text-center p-12 relative z-10">
                  <h4 className="font-display font-bold text-6xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full scale-150 group-hover:scale-110 transition-transform duration-700 select-none tracking-tighter">MONSTER</h4>
                  <div className="font-display font-bold text-3xl tracking-[0.4em] text-white border-4 border-white p-6 inline-block group-hover:bg-white group-hover:text-black transition-colors duration-300">
                     ULTRA
                  </div>
               </div>
               <div className="absolute bottom-0 left-0 p-8 z-10">
                  <span className="font-display font-bold text-6xl text-gray-600 group-hover:text-white transition-colors duration-300">03</span>
                  <p className="font-body text-sm font-semibold tracking-widest uppercase mt-2 text-gray-400">Identity</p>
               </div>
            </motion.div>
         </div>

         <motion.div style={{ x }} className="absolute top-1/3 left-0 w-full pointer-events-none opacity-[0.02] whitespace-nowrap">
            <span className="font-display font-bold text-[15rem] md:text-[25rem] tracking-tighter">UNLEASH THE BEAST UNLEASH THE BEAST</span>
         </motion.div>
      </section>
   );
};

export default Gallery;