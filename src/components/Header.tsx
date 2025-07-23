// src/components/Header.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';

export default function Header({
  onClickScroll,
}: {
  onClickScroll: (item: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  // const opacity = useTransform(scrollY, [0, 0.3, 1], [1, 0, 0]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const pointerEvents = useTransform(opacity, (value) =>
    value === 0 ? 'none' : 'auto'
  );

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <div className="max-w-5xl mx-auto px-10 py-8 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex t-logo text-5xl font-bold cursor-pointer"
          onClick={() => onClickScroll('')}
        >
          T
        </div>

        {/* Desktop Navigation */}
        <motion.nav style={{ opacity, pointerEvents }}>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            {[
              'Gartengeräte',
              'Comedy',
              'Blogs',
              'Wissenschaft',
              'Kreatives',
              '& mehr',
            ].map((item) => (
              <a
                key={item}
                onClick={() => onClickScroll(item)}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden mobile-button"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-[#ffcd5e]" />
          ) : (
            <Menu className="w-6 h-6 text-[#ffcd5e]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Navigation (animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden px-6 pb-4 pt-4 flex flex-col bg-[#000000b8] border-b-[0.5px] border-amber-400 gap-3 shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[
              'Gartengeräte',
              'Comedy',
              'Blogs',
              'Wissenschaft',
              'Kreatives',
              '& mehr',
            ].map((item) => (
              <a
                key={item}
                onClick={() => {
                  toggleMenu();
                  setTimeout(() => {
                    onClickScroll(item);
                  }, 400);
                }}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
