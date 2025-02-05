import React, { useState, useEffect } from 'react';
import { ChevronRight, MessageCircle, Bot, Clock, Users, ChevronDown, Menu, X, Star, Twitter } from 'lucide-react';
import { StatNumber } from './components/StatNumber';
import { CountdownTimer } from './components/CountdownTimer';
import { CookieConsent } from './components/CookieConsent';
import { WaitlistModal } from './components/WaitlistModal';
import logoUrl from './assets/logo.png';  // Nota: ./assets invece di ../assets

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
                src={logoUrl}  // Usa il logo importato
                alt="GOAT Logo" 
                className="h-12" 
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full transition-all"
                >
                  Mettiti in lista di attesa
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="block w-full mt-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full transition-all text-center"
              >
                Mettiti in lista di attesa
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="hero-bg min-h-screen flex items-center relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="text-center">
            <img 
              src={logoUrl}  // Usa il logo importato
              alt="GOAT Logo" 
              className="hero-logo w-40 h-40 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
              <span className="gold-gradient">{import.meta.env.VITE_SITE_TITLE}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-white">
              {import.meta.env.VITE_SITE_SUBTITLE}
            </h2>
            
            <div className="mb-8">
              <CountdownTimer targetDate="2025-03-01T00:00:00" />
            </div>

            <div className="w-full max-w-lg mx-auto mb-16">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black text-2xl font-extrabold py-6 px-12 rounded-full inline-flex items-center justify-center transition-all transform hover:scale-105 hover:shadow-2xl border-4 border-yellow-400"
              >
                Mettiti in lista di attesa
                <ChevronRight className="ml-3 w-7 h-7" />
              </button>
            </div>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="gold-gradient">{import.meta.env.VITE_HERO_TITLE}</span><br />
              {import.meta.env.VITE_HERO_SUBTITLE}
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {import.meta.env.VITE_HERO_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
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