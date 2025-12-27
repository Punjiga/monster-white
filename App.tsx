import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [isPlaying, setIsPlaying] = useState(true); // Auto-play enabled
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-play music on mount
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay, user needs to interact
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="antialiased selection:bg-black selection:text-white bg-white">
      {/* Local Audio Player - Hidden */}
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