import wappen from '../assets/wappen-gold.png';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full border-t-[0.5px] border-[#ffcd5e] py-12 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        {/* Left: Logo and Year */}
        <div className="flex flex-col items-center">
          <img src={wappen} alt="Logo" className="w-16 h-auto mb-2" />
          <span>&copy; Tissot {currentYear}</span>
        </div>

        {/* Right: Links and Disclaimer */}
        <div className="flex flex-col items-start sm:items-end text-right gap-2">
          <div className="flex gap-4">
            <a href="/impressum" className="hover:underline">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:underline">
              Datenschutz
            </a>
          </div>
          <p className="text-xs text-gray-500 max-w-xs">
            Dies ist nicht der Webauftritt des Schweizer Uhrenherstellers Tissot
            S.A GmbH. Diesen finden Sie unter{' '}
            <a
              className="underline"
              target="_blank"
              href="hhtps://www.tissot.com"
            >
              www.tissot.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
