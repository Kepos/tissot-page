// src/pages/Impressum.jsx

import filz from './assets/filzhintergrund.webp';
import { Link } from 'react-router-dom';

const Impressum = () => {
  return (
    <>
      <div
        className="fixed inset-0 opacity-5 pointer-events-none select-none hidden sm:inline"
        style={{
          backgroundImage: `url(${filz})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100% 66vw', // Bild auf 1/4 skalieren (50% Breite, 50% Höhe)
          backgroundPosition: 'top left', // Startpunkt der Wiederholung
        }}
      />

      {/* Mobile Background Image: */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none select-none sm:hidden"
        style={{
          backgroundImage: `url(${filz})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150vh 100%', // Bild auf 1/4 skalieren (50% Breite, 50% Höhe)
          backgroundPosition: 'top left', // Startpunkt der Wiederholung
        }}
      />
      <header className="fixed top-0 left-0 w-full z-30">
        <div className="max-w-5xl mx-auto px-10 py-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex t-logo text-5xl font-bold">T</div>
          </Link>

          {/* Desktop Navigation */}
          <nav>
            <nav className="flex gap-6 text-gray-700 font-medium">
              <Link to="/" className="hover:text-blue-600 transition-colors">
                zurück zur Homepage
              </Link>
            </nav>
          </nav>
        </div>
      </header>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-[#ffcd5e] font-bold mb-8 mt-[15vh]">
          Impressum
        </h1>

        <p className="mb-4">Inhaltlich verantwortlich:</p>

        <p className="mb-4">
          Sven Tissot
          <br />
          Schippelsweg 12
          <br />
          22455 Hamburg
        </p>

        <p className="mb-4">
          Kontakt:
          <br />
          Tel.: +49 40 5525235
          <br />
          E-Mail: <a href="mailto:sven@tissot.de">sven@tissot.de</a>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Haftungsausschluss</h2>
        <p className="mb-4">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Webseiten. Für den Inhalt der verlinkten
          Seiten sind ausschließlich deren Betreiber verantwortlich. Wenn wir
          etwas falsch gemacht haben, oder etwas vergessen haben - bitte
          informieren Sie uns doch, damit wir dies sofort korrigieren können!
          Wir melden Serien-Abmahnungen an www.abmahnwelle.de und übergeben sie
          grundsätzlich an unseren Anwalt !
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Hinweis</h2>
        <p className="mb-4">
          Dies ist nicht der Webauftritt des Schweizer Uhrenherstellers Tissot
          S.A GmbH. Diesen finden Sie unter{' '}
          <a
            className="underline"
            target="_blank"
            href="https://www.tissotwatches.com/"
          >
            www.tissotwatches.com
          </a>
        </p>

        <p className="text-sm text-gray-500">Stand: Juli 2025</p>
      </div>
    </>
  );
};

export default Impressum;
