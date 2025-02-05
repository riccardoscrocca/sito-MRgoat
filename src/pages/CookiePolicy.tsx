import React from 'react';
import { Link } from 'react-router-dom';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="text-yellow-500 hover:text-yellow-400">← Torna alla home</Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-invert">
          <p className="text-gray-300">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Cosa sono i cookie</h2>
          <p className="text-gray-300 mb-4">
            I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo durante la navigazione.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipologie di cookie utilizzati</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie tecnici</h3>
          <p className="text-gray-300 mb-4">
            Necessari per il funzionamento del sito. Includono cookie per:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Gestione del consenso ai cookie</li>
            <li>Mantenimento delle preferenze di navigazione</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie analitici</h3>
          <p className="text-gray-300 mb-4">
            Utilizzati per analizzare l'utilizzo del sito e migliorare l'esperienza utente.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Gestione dei cookie</h2>
          <p className="text-gray-300 mb-4">
            Puoi gestire le preferenze sui cookie attraverso:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Il banner dei cookie presente sul sito</li>
            <li>Le impostazioni del tuo browser</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Durata dei cookie</h2>
          <p className="text-gray-300 mb-4">
            I cookie hanno diverse durate:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Cookie di sessione: vengono eliminati alla chiusura del browser</li>
            <li>Cookie persistenti: rimangono fino alla loro scadenza o cancellazione</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contatti</h2>
          <p className="text-gray-300 mb-4">
            Per qualsiasi domanda sulla Cookie Policy, contattare: riccardo.scrocca@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};