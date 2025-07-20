import wappen from '../assets/wappen-gold.png';
import { motion } from 'framer-motion';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="pb-12 text-sm text-gray-700">
      <motion.div
        className="flex-grow h-[0.5px] bg-[#ffcd5e] origin-left mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ margin: '-100px 0px' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
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
          <p className="text-xs text-gray-500 max-w-xs text-left md:text-right">
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
        </div>
      </div>
    </footer>
  );
}
