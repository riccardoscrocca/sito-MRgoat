import React, { useState, useEffect } from 'react';
import { ChevronRight, MessageCircle, Bot, Clock, Users, ChevronDown, Menu, X, Star, Twitter } from 'lucide-react';
import { StatNumber } from './components/StatNumber';
import { CountdownTimer } from './components/CountdownTimer';
import { CookieConsent } from './components/CookieConsent';
import { WaitlistModal } from './components/WaitlistModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

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

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6 text-yellow-500" />,
      title: "Segnali Esclusivi",
      description: "Ricevi segnali di trading verificati dai migliori analisti"
    },
    {
      icon: <Bot className="w-6 h-6 text-yellow-500" />,
      title: "Bot AI Avanzato",
      description: "Notifiche automatiche e analisi in tempo reale"
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      title: "7 Giorni Gratuiti",
      description: "Prova il servizio senza rischi per una settimana"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Community Elite",
      description: "Unisciti a trader esperti e cresci insieme"
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Trader Professionista",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      text: "G.O.A.T. ha completamente trasformato il mio approccio al trading. I segnali sono precisi e il supporto è eccezionale.",
      rating: 5
    },
    {
      name: "Laura Bianchi",
      role: "Trader Principiante",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
      text: "Grazie a G.O.A.T. ho imparato a tradare in modo professionale. La community è fantastica e sempre disponibile.",
      rating: 5
    },
    {
      name: "Giuseppe Verdi",
      role: "Investitore",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
      text: "Servizio impeccabile. I risultati parlano da soli. Consiglio vivamente a chi vuole fare trading seriamente.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Cosa rende G.O.A.T. diverso dagli altri servizi?",
      answer: "G.O.A.T. combina l'esperienza di trader professionisti con tecnologia all'avanguardia per fornire segnali di trading accurati e verificati. Offriamo anche una community esclusiva e supporto 24/7."
    },
    {
      question: "Come funziona il periodo di prova gratuito?",
      answer: "Il periodo di prova dura 7 giorni e include accesso completo a tutti i servizi: segnali di trading, bot AI, community e supporto. Non è richiesta carta di credito per iniziare."
    },
    {
      question: "Posso cancellare l'abbonamento in qualsiasi momento?",
      answer: "Sì, puoi cancellare il tuo abbonamento in qualsiasi momento senza costi aggiuntivi. La cancellazione è semplice e immediata."
    },
    {
      question: "Che tipo di supporto offrite?",
      answer: "Offriamo supporto 24/7 attraverso chat live, email e la nostra community. Il nostro team di esperti è sempre disponibile per aiutarti."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 nav-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img 
                src={import.meta.env.VITE_LOGO_URL} 
                alt="GOAT Logo" 
                className="h-12" 
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Caratteristiche</a>
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
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Caratteristiche</a>
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
              src={import.meta.env.VITE_LOGO_URL}
              alt="GOAT Logo" 
              className="hero-logo w-40 h-40 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
              <span className="gold-gradient">{import.meta.env.VITE_SITE_TITLE}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-white">
              {import.meta.env.VITE_SITE_SUBTITLE}
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="gold-gradient">{import.meta.env.VITE_HERO_TITLE}</span><br />
              {import.meta.env.VITE_HERO_SUBTITLE}
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {import.meta.env.VITE_HERO_DESCRIPTION}
            </p>
            <div className="flex flex-col items-center space-y-8">
              <div className="w-full max-w-md">
                <CountdownTimer targetDate="2025-03-01T00:00:00" />
              </div>
              <div className="w-full max-w-md">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg inline-flex items-center justify-center transition-all transform hover:scale-105"
                >
                  Mettiti in lista di attesa
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <button 
                onClick={scrollToFeatures}
                className="w-12 h-12 text-yellow-500 hover:text-yellow-400 transition-colors cursor-pointer"
              >
                <ChevronDown className="w-full h-full animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gold-gradient">Perché scegliere G.O.A.T.?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Accedi a strumenti professionali e una community di esperti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-box bg-white/5 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/10 transition-all border border-white/10"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black/50 backdrop-blur-lg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <StatNumber end={500} suffix="+" delay={0} />
              <div className="text-gray-400">Membri Attivi</div>
            </div>
            <div>
              <StatNumber end={95} suffix="%" delay={200} />
              <div className="text-gray-400">Accuratezza Segnali</div>
            </div>
            <div>
              <StatNumber end={24} suffix="/7" delay={400} />
              <div className="text-gray-400">Supporto Disponibile</div>
            </div>
            <div>
              <StatNumber end={7} suffix="" delay={600} />
              <div className="text-gray-400">Giorni di Prova</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gold-gradient">Cosa dicono i nostri membri</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Scopri le storie di successo dei trader che hanno scelto G.O.A.T.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-24 bg-black/50 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gold-gradient">Domande Frequenti</span>
            </h2>
            <p className="text-gray-400">
              Trova le risposte alle domande più comuni sul nostro servizio
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
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