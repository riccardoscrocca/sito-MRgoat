import React, { useState } from 'react';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    acceptPolicy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu1.make.com/wycjrvafwvywbswmc6i3nc4r37od76go', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          acceptPolicy: formData.acceptPolicy,
          timestamp: new Date().toISOString(),
          source: window.location.href
        })
      });

      const responseData = await response.text();
      console.log('Risposta:', responseData);

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', acceptPolicy: false });
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 2000);
      } else {
        console.error('Errore risposta:', responseData);
        throw new Error(`Errore nell'invio dei dati: ${response.status}`);
      }
    } catch (error) {
      console.error('Errore dettagliato:', error);
      alert('Si è verificato un errore. Per favore riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0A0A0B] border border-white/10 rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-6">
              <span className="gold-gradient">Unisciti alla lista d'attesa</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Inserisci il tuo nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Inserisci la tua email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Telefono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Inserisci il tuo numero di telefono"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={formData.acceptPolicy}
                  onChange={(e) => setFormData({ ...formData, acceptPolicy: e.target.checked })}
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-gray-300">
                  Ho letto e accetto la <a href="/privacy-policy" className="text-yellow-500 hover:text-yellow-400" target="_blank">Privacy Policy</a>
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Invio in corso...' : 'Iscriviti ora'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-green-400 text-xl font-semibold mb-2">Grazie per l'iscrizione!</div>
            <p className="text-gray-300">Ti contatteremo presto.</p>
          </div>
        )}
      </div>
    </div>
  );
};