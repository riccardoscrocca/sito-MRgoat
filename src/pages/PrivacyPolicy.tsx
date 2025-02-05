import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="text-yellow-500 hover:text-yellow-400">← Torna alla home</Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Informativa sulla Privacy</h1>
        
        <div className="prose prose-invert">
          <p className="text-gray-300">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Titolare del Trattamento dei Dati</h2>
            <p className="text-gray-300 mb-4">
              G.O.A.T. Trading - Italia<br />
              Email: privacy@goat-trading.it
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Tipologie di Dati raccolti</h2>
            <p className="text-gray-300 mb-4">
              Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Cookie</li>
              <li>Dati di utilizzo</li>
              <li>Email</li>
              <li>Nome</li>
              <li>Varie tipologie di Dati</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Modalità e luogo del trattamento dei Dati raccolti</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Modalità di trattamento</h3>
            <p className="text-gray-300 mb-4">
              Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
              Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Base giuridica del trattamento</h2>
            <p className="text-gray-300 mb-4">
              Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle seguenti condizioni:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>l'Utente ha prestato il consenso per una o più finalità specifiche</li>
              <li>il trattamento è necessario all'esecuzione di un contratto con l'Utente</li>
              <li>il trattamento è necessario per adempiere un obbligo legale</li>
              <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Diritti dell'Utente</h2>
            <p className="text-gray-300 mb-4">
              Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.
              In particolare, l'Utente ha il diritto di:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>revocare il consenso in ogni momento</li>
              <li>opporsi al trattamento dei propri Dati</li>
              <li>accedere ai propri Dati</li>
              <li>verificare e chiedere la rettificazione</li>
              <li>ottenere la limitazione del trattamento</li>
              <li>ottenere la cancellazione o rimozione dei propri Dati Personali</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
            <p className="text-gray-300 mb-4">
              Questa Applicazione fa utilizzo di Cookie. Per saperne di più e per un'informativa dettagliata, puoi consultare la <a href="/cookie-policy" className="text-yellow-500 hover:text-yellow-400">Cookie Policy</a>.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Ulteriori informazioni sul trattamento</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Difesa in giudizio</h3>
            <p className="text-gray-300 mb-4">
              I Dati Personali dell'Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questa Applicazione o dei Servizi connessi da parte dell'Utente.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Definizioni e riferimenti legali</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Dati Personali (o Dati)</h3>
            <p className="text-gray-300 mb-4">
              Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};