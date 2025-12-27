import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isMuted: boolean;
  toggleAudio: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMuted, toggleAudio }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          {/* Brand Logo Text - Strong and Aggressive */}
          <span className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-black">
            M
          </span>
          <div className="hidden md:flex flex-col leading-none">
            <span className="font-display font-bold text-lg tracking-wider text-black">
              MONSTER ENERGY
            </span>
            <span className="font-display text-xs tracking-[0.2em] text-gray-500 uppercase">
              Ultra White
            </span>
          </div>
        </motion.div>

        <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium tracking-wide text-gray-600">
            <a href="#concept" className="hover:text-black transition-colors">Concepto</a>
            <a href="#visuals" className="hover:text-black transition-colors">Galería</a>
            <a href="#experience" className="hover:text-black transition-colors">Experiencia</a>
            <button className="border-2 border-black px-8 py-2 font-display font-bold text-black uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 text-sm">
                Comprar
            </button>
            </div>

            <button 
                onClick={toggleAudio}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors text-black"
                aria-label="Toggle Audio"
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            <button 
            className="md:hidden text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 flex flex-col gap-6 md:hidden font-display uppercase tracking-widest text-lg shadow-xl"
          >
            <a href="#concept" onClick={() => setIsMenuOpen(false)} className="text-black font-bold">Concepto</a>
            <a href="#visuals" onClick={() => setIsMenuOpen(false)} className="text-black font-bold">Galería</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-black font-bold">Experiencia</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;