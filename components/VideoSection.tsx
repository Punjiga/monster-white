import React from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden flex flex-col items-center border-t border-gray-100">

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-center gap-20">

        {/* Text Side */}
        <div className="md:w-1/2 text-center md:text-right order-1 md:order-1">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-7xl md:text-9xl mb-6 text-black uppercase tracking-tighter leading-[0.9]"
          >
            VIVE LA<br />NOCHE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-gray-500 text-xl uppercase tracking-[0.2em] mb-10 font-medium"
          >
            Energía blanca para mantenerte despierto hasta el amanecer.
          </motion.p>

          <div className="w-32 h-[2px] bg-black ml-auto mr-auto md:mr-0 mb-8"></div>
        </div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 order-2 md:order-2 flex justify-center md:justify-start"
        >
          {/* Video Container - Clean Device Frame */}
          <div className="relative w-[340px] h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-[10px] border-white bg-black ring-1 ring-gray-200">
            {/* Local Video Player - Muted, Autoplay, Loop, No Controls */}
            <video
              src="/content/video.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Subtle Inner Shadow to blend edges */}
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none rounded-[1.5rem]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;