import React, { useState, useEffect } from 'react';
import { ChevronRight, MessageCircle, Bot, Clock, Users, ChevronDown, Menu, X, Star, Twitter } from 'lucide-react';
import { StatNumber } from './components/StatNumber';
import { CountdownTimer } from './components/CountdownTimer';
import { CookieConsent } from './components/CookieConsent';
import { WaitlistModal } from './components/WaitlistModal';
import logoUrl from './assets/logo.png';  // Nota: ./assets invece di ../assets
import bgImage from './assets/hero-bg.jpg';  // o .png

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach(box => observer.observe(box));

    return () => {
      featureBoxes.forEach(box => observer.unobserve(box));
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 nav-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img 
                src={logoUrl}
                alt="GOAT Logo" 
                className="h-8 md:h-12" 
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full transition-all text-base"
                >
                  Mettiti in lista di attesa
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu migliorato */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-white/10 animate-fadeIn">
            <div className="px-4 pt-2 pb-3">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-4 rounded-full transition-all text-center"
              >
                Mettiti in lista di attesa
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        className="hero-bg min-h-screen flex items-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
          <div className="text-center">
            <img 
              src={logoUrl}
              alt="GOAT Logo" 
              className="hero-logo w-24 h-24 md:w-40 md:h-40 mx-auto mb-6 md:mb-8"
            />
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-3 md:mb-4 px-2">
              <span className="gold-gradient">G.O.A.T.</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-medium mb-6 md:mb-8 text-white px-2">
              Gold Opportunities Advanced Trading
            </h2>
            
            <div className="mb-6 md:mb-8">
              <CountdownTimer targetDate="2025-03-21T00:00:00" />
            </div>

            <div className="w-full max-w-sm md:max-w-lg mx-auto mb-8 md:mb-16 px-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black text-lg md:text-2xl font-extrabold py-4 md:py-6 px-6 md:px-12 rounded-full inline-flex items-center justify-center transition-all transform hover:scale-105 hover:shadow-2xl border-2 md:border-4 border-yellow-400"
              >
                Mettiti in lista di attesa
                <ChevronRight className="ml-2 md:ml-3 w-5 h-5 md:w-7 md:h-7" />
              </button>
            </div>

            <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 px-2">
              <span className="gold-gradient">{import.meta.env.VITE_HERO_TITLE}</span><br />
              {import.meta.env.VITE_HERO_SUBTITLE}
            </h3>
            <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              {import.meta.env.VITE_HERO_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/80 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} G.O.A.T. Trading. Tutti i diritti riservati.
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/mr_goat_au" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CookieConsent />
    </div>
  );
}

export default App;
