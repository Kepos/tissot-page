import wappen from './assets/wappen.png';
import filz from './assets/filzhintergrund.jpg';
import './App.css';
import Header from './components/Header';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import PageTeaser from './components/PageTeaser';
import pageteasers from './pageteasers.json';
import Footer from './components/Footer';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 0.5, 1], [-0, distance, distance]);
}

function App() {
  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, 550);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0.8]);

  return (
    <>
      <img
        src={filz}
        alt="Hintergrund Struktur"
        className="fixed inset-0 w-full h-full object-cover opacity-5 pointer-events-none select-none"
      />
      <Header />
      <div className="h-[80vh] flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1, ease: 'easeInOut' },
          }}
          style={{ opacity }}
        >
          <h2 className="text-[#ffcd5e] fixed text-3xl ml-12 mb-2 top-[350px]">
            Willkommen bei
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, duration: 1.5, ease: 'easeInOut' },
          }}
          style={{ opacity }}
        >
          <h1 className="text-8xl fixed">Familie Tissot</h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 3, duration: 2, ease: 'easeInOut' },
        }}
        style={{ y, scale }}
      >
        <div className="flex w-full justify-end -mt-70">
          <img src={wappen} className="w-md" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 4.5, duration: 1, ease: 'easeInOut' },
        }}
      >
        <div className="w-[60px] h-[8px] bg-[#C40002] absolute top-[80vh]"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0, duration: 1, ease: 'easeInOut' },
        }}
        viewport={{ margin: '20px' }}
      >
        <h2 className="text-[#ffcd5e] font-[Zapfino]  text-2xl mb-5">Hallo!</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.5, duration: 1, ease: 'easeInOut' },
        }}
        viewport={{ margin: '20px' }}
      >
        <p>
          Wir sind die Familie Tissot. <br />
          Seit Generationen erfreuen wir unsere Mitmenschen <br />
          mit jeder Menge Grips, Witz, Kreativität und ganz viel Liebe. <br />
          Wir sind Genießer, keine Spießer. <br />
          Wir sind gewitzt, Ohren nicht geschlitzt. <br />
          Wir sind urkomisch, keine Uhrenhändler. <br />
          Wir sind halt die Tissot’s.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.5, duration: 1, ease: 'easeInOut' },
        }}
        viewport={{ margin: '20px', once: true }}
        className="text-center mt-64"
      >
        <h2 className="text-[#ffcd5e] font-[Zapfino] mb-4 text-2xl">
          Unsere besten Seiten
        </h2>
        <p>
          Dies sind die Webauftritte von allen Tissots, die welche haben.
          <br /> Gerne einfach mal überall vorbeischauen!
        </p>
      </motion.div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 mt-20 max-w-3xl cursor-pointer">
          {pageteasers.map((item) => (
            <PageTeaser
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className="w-100 h-[1000px]"></div>
      <Footer />
    </>
  );
}

export default App;
