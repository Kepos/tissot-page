import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageTeaser from './PageTeaser'; // adjust import as needed
import pageteasers from '../pageteasers.json';

const FILTERS = [
  'Alle',
  'Gartengeräte',
  'Comedy',
  'Blogs',
  'Wissenschaft',
  'Kreatives',
];

export default function TeaserGrid() {
  const [activeFilter, setActiveFilter] = useState<string | null>('Alle');

  const filteredItems =
    activeFilter && activeFilter != 'Alle'
      ? pageteasers.filter((item) => item.tags.includes(activeFilter))
      : pageteasers;

  return (
    <div className="pt-8 flex flex-col items-center">
      {/* FILTER BUTTONS */}
      <div className="mb-8  md:flex gap-3 flex-wrap grid-cols-3 grid">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() =>
              setActiveFilter((prev) => (prev === filter ? 'Alle' : filter))
            }
            id={`page-teaser-category-${filter}`}
            className={`md:px-4 py-2 text-xs md:text-sm transition cursor-pointer ${
              activeFilter === filter
                ? 'border-b border-b-[#ffcd5e] text-[#ffcd5e]'
                : 'text-white border-gray-300 '
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              //   animate={{ opacity: 1, scale: 1 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay:
                    window.innerWidth > 1023 ? 0.1 * ((index % 3) + 1) : 0.1,
                  duration: 1,
                  ease: 'easeInOut',
                },
              }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <PageTeaser
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
