import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and disabled
    analytics: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleReject = () => {
    const rejectedPreferences = {
      necessary: true,
      analytics: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(rejectedPreferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  if (showPreferences) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4">
        <div className="bg-[#0A0A0B] border border-white/10 rounded-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setShowPreferences(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold mb-6">Le tue preferenze relative alla privacy</h2>
          <p className="text-gray-300 mb-6">
            Questo pannello ti permette di esprimere alcune preferenze relative al trattamento delle tue informazioni personali.
            Puoi rivedere e modificare le tue scelte in qualsiasi momento accedendo al presente pannello tramite l'apposito link.
          </p>

          <div className="space-y-6 mb-6">
            <div className="border border-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Necessari</h3>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="h-4 w-4"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Questi strumenti di tracciamento sono strettamente necessari per garantire il funzionamento e la fornitura del servizio che ci hai richiesto e, pertanto, non richiedono il tuo consenso.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Misurazione</h3>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="h-4 w-4"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Questi strumenti di tracciamento ci permettono di misurare il traffico e analizzare il tuo comportamento per migliorare il nostro servizio.
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={handleReject}
              className="bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold py-2 px-6 rounded-full transition-colors"
            >
              Rifiuta tutto
            </button>
            <button
              onClick={handleAccept}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full transition-colors"
            >
              Salva preferenze
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col gap-6">
          <div className="text-gray-300 text-lg max-w-4xl">
            Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di misurazione come specificato nella{' '}
            <Link to="/cookie-policy" className="text-yellow-500 hover:text-yellow-400">cookie policy</Link>.
            <br /><br />
            Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, accedendo al pannello delle preferenze.
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => setShowPreferences(true)}
              className="text-yellow-500 hover:text-yellow-400 font-semibold whitespace-nowrap text-lg"
            >
              Scopri di più e personalizza
            </button>
            <button
              onClick={handleReject}
              className="bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-8 rounded-full transition-colors whitespace-nowrap text-lg"
            >
              Rifiuta
            </button>
            <button
              onClick={handleAccept}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full transition-colors whitespace-nowrap text-lg"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};