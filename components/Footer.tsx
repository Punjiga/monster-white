import React from 'react';

interface FooterProps {
  scrollToTop: () => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToTop }) => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200 text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="font-display font-bold text-6xl text-black tracking-tighter hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Ir arriba"
            >
              M
            </button>
          </div>

          <div className="flex gap-10 font-display text-sm font-bold text-gray-500 uppercase tracking-widest">
            <a href="https://www.instagram.com/monsterenergy/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
            <a href="https://twitter.com/MonsterEnergy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Twitter</a>
            <a href="https://www.tiktok.com/@monsterenergy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">TikTok</a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-10">
          <p className="font-body text-xs text-gray-500 leading-relaxed text-justify md:text-center max-w-5xl mx-auto tracking-wide mb-8">
            "Este es un proyecto creativo no oficial realizado únicamente con fines de portfolio y experimentación visual.
            Monster Energy® y todos los materiales relacionados son marcas registradas de sus respectivos propietarios.
            La música, los videos y cualquier contenido multimedia pertenecen a sus respectivos creadores y se utilizan únicamente como referencia visual y auditiva, sin fines de lucro ni intención comercial.
            No existe afiliación oficial."
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://srstudio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-display text-xs text-gray-400 hover:text-black transition-colors font-bold tracking-[0.2em] uppercase border-b border-transparent hover:border-black"
            >
              Creado por SR STUDIO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;