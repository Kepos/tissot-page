import wappen from './assets/wappen.png';
import goldwappen from './assets/wappen-gold.png';
import filz from './assets/filzhintergrund.jpg';
import './App.css';
import Header from './components/Header';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Footer from './components/Footer';
import TeaserGrid from './components/TeaserGrid';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 0.2, 1], [-0, distance, distance]);
}

function App() {
  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, 500);

  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.8, 0.8]);

  const smscale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.6, 0.6]);
  const smy = useTransform(scrollYProgress, [0, 0.3, 1], [-0, 600, 600]);

  return (
    <>
      <img
        src={filz}
        alt="Hintergrund Struktur"
        className="fixed inset-0 w-full h-full object-cover opacity-5 pointer-events-none select-none"
      />
      <Header />

      {/* Willkommen bei Tissot */}
      <div className="h-[80vh] flex flex-col items-start justify-start md:justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          style={{ opacity, y }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 1, // <- this handles sequencing
              },
            },
            hidden: {},
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut', // or use a custom cubic bezier: [0.6, 0.01, -0.05, 0.95]
            }}
          >
            <h2 className="text-[#ffcd5e] text-[6vw] sm:text-2xl md:text-3xl ml-8 -mb-1 md:mt-0 mt-[17vh] sm:ml-12 sm:mb-0 top-[350px]">
              Willkommen bei
            </h2>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut', // or use a custom cubic bezier: [0.6, 0.01, -0.05, 0.95]
            }}
          >
            <h1 className="md:text-8xl text-[20vw] ml-2">
              Familie
              <br className="inline sm:inline lg:hidden" /> Tissot
            </h1>
          </motion.div>
        </motion.div>
      </div>

      {/* Wappen */}
      <motion.div
        initial={{ opacity: 0, marginTop: 50 }}
        animate={{
          opacity: 1,
          marginTop: 0,
          transition: { delay: 2.5, duration: 2, ease: 'easeInOut' },
        }}
        style={{ y, scale }}
        className="z-10 hidden md:block"
      >
        <div className="flex w-full justify-end md:-mt-70 -mt-60 xl:ml-0 ml-24 z-10">
          <img src={wappen} className="w-md" />
        </div>
      </motion.div>

      {/* Mobile Wappen */}
      <motion.div
        initial={{ opacity: 0, marginTop: 50 }}
        animate={{
          opacity: 1,
          marginTop: 0,
          transition: { delay: 3, duration: 2, ease: 'easeInOut' },
        }}
        style={{ y: smy, scale: smscale }}
        className="z-10 md:hidden"
      >
        <div className="flex w-full justify-end md:-mt-70 -mt-60 xl:ml-0 ml-24 z-10">
          <img src={wappen} className="w-md" />
        </div>
      </motion.div>

      {/* Red Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 4.5, duration: 1, ease: 'easeInOut' },
        }}
      >
        <div className="w-[60px] md:h-[8px] h-[4px] bg-[#C40002] absolute top-[80vh]"></div>
      </motion.div>

      {/* Hello Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0, duration: 1, ease: 'easeInOut' },
        }}
        viewport={{ margin: '-200px 0px', once: true }}
      >
        <h2 className="text-[#ffcd5e] font-[Zapfino]  text-2xl mb-5 md:mt-0 mt-32">
          Hallo!
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.5, duration: 1, ease: 'easeInOut' },
        }}
        viewport={{ margin: '-200px 0px', once: true }}
      >
        <p className="z-20 relative">
          Wir sind die Familie Tissot. <br />
          Seit Generationen erfreuen wir unsere Mitmenschen <br />
          mit jeder Menge Grips, Witz, Kreativität und ganz viel Liebe. <br />
          Wir sind Genießer, keine Spießer. <br />
          Wir sind gewitzt, Ohren nicht geschlitzt. <br />
          Wir sind urkomisch, keine Uhrenhändler. <br />
          Wir sind halt die Tissot’s.
        </p>
      </motion.div>

      {/* Golden Divider */}
      <div className="flex items-center gap-4 text-center md:mt-72 mt-28 max-w-md mx-auto">
        <motion.div
          className="flex-grow h-[0.5px] bg-[#ffcd5e] origin-right"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ margin: '-100px 0px' }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: '-100px 0px' }}
          transition={{ delay: 0, duration: 0.8 }}
        >
          <div className="whitespace-nowrap">
            <img src={goldwappen} className="w-6" />
          </div>
        </motion.div>
        <motion.div
          className="flex-grow h-[0.5px] bg-[#ffcd5e] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ margin: '-100px 0px' }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
        />
      </div>

      {/* Unsere besten Seiten */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.5, duration: 1, ease: 'easeInOut' },
        }}
        viewport={{ margin: '20px', once: true }}
        className="text-center mt-32"
        id="unsere-besten-seiten"
      >
        <h2 className="text-[#ffcd5e] font-[Zapfino] mb-4 text-2xl">
          Unsere besten Seiten
        </h2>
        <p>
          Dies sind die Webauftritte von allen Tissots, die welche haben.
          <br /> Gerne einfach mal überall vorbeischauen!
        </p>
      </motion.div>

      <TeaserGrid />
      {/* <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-12 mt-20 max-w-3xl cursor-pointer">
          {pageteasers.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay:
                    window.innerWidth > 1023
                      ? 0.3 * (((item.id - 1) % 3) + 1)
                      : 0.3,
                  duration: 1,
                  ease: 'easeInOut',
                },
              }}
              viewport={{ once: true }}
              className="cursor-pointer"
            >
              <PageTeaser
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </motion.div>
          ))}
        </div>
      </div> */}
      <div className="w-100 h-[200px]"></div>
      <Footer />
    </>
  );
}

export default App;
