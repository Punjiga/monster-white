import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
    setShowSplash(false);
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="antialiased selection:bg-black selection:text-white bg-white">
      {/* Splash Screen Overlay */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center gap-12"
            >
              <img
                src="/content/icon.png"
                alt="Monster Icon"
                className="w-24 h-24 object-contain"
              />

              <button
                onClick={startExperience}
                className="group relative px-12 py-5 bg-black text-white font-display font-bold text-xl uppercase tracking-[0.3em] hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10">Unleash the Beast</span>
                <div className="absolute inset-0 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/content/Snow Strippers - under your spell (slowed  reverb).mp3"
        loop
        preload="auto"
        className="hidden"
      />

      <Navbar isMuted={!isPlaying} toggleAudio={toggleAudio} />

      <main>
        <Hero />
        <Concept />
        <Gallery />
        <VideoSection />
        <Experience isPlaying={isPlaying} toggleAudio={toggleAudio} />
      </main>
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;