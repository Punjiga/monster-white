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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6 md:py-8'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
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
              <a href="#concept" onClick={(e) => scrollToSection(e, 'concept')} className="hover:text-black transition-colors">Concepto</a>
              <a href="#visuals" onClick={(e) => scrollToSection(e, 'visuals')} className="hover:text-black transition-colors">Galería</a>
              <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-black transition-colors">Experiencia</a>
              <button
                onClick={() => setShowModal(true)}
                className="border-2 border-black px-8 py-2 font-display font-bold text-black uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 text-sm"
              >
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
              <a href="#concept" onClick={(e) => scrollToSection(e, 'concept')} className="text-black font-bold">Concepto</a>
              <a href="#visuals" onClick={(e) => scrollToSection(e, 'visuals')} className="text-black font-bold">Galería</a>
              <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="text-black font-bold">Experiencia</a>
              <button
                onClick={() => { setShowModal(true); setIsMenuOpen(false); }}
                className="text-black font-bold text-left"
              >
                Comprar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Comprar Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-12 max-w-md mx-4 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-4">¡Encuéntranos!</h3>
              <p className="font-body text-gray-600 text-lg mb-8">
                Ve a tu tienda más cercana ;)
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="border-2 border-black px-8 py-3 font-display font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;