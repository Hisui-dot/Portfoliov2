import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Hyperspeed from './Hyperspeed';

const PortfolioSections = () => {

  const [showHighway, setShowHighway] = useState(true);
  const [highwaySpeed, setHighwaySpeed] = useState(2);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {

    const slowDownTimer = setTimeout(() => {
      setHighwaySpeed(0.1);
    }, 2000);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    const fadeOutTimer = setTimeout(() => {
      setShowHighway(false);
    }, 3500);

    return () => {
      clearTimeout(slowDownTimer);
      clearTimeout(contentTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (

    <div className="relative min-h-screen bg-black">

      <AnimatePresence>

        {showHighway && (

          <motion.div
          className="fixed inset-0 z-0"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: 'easeOut' }
          }}
          >

            <Hyperspeed
              targetSpeed={highwaySpeed}
              effectOptions={{
                distortion: "mountainDistortion",
                length: 400,
                roadWidth: 9,
                islandWidth: 2,
                lanesPerRoad: 3,
                fov: 90,
                fovSpeedUp: 150,
                colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0x131318,
                  brokenLines: 0x131318,
                  leftCars: [0xff0000, 0xff0000],
                  rightCars: [0xffffff, 0xffffff],
                  sticks: 0x03b3c3
                }
              }}
            />

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>

        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >

            <section id="hero" className="h-screen snap-start flex items-center justify-center">
              <Hero />
            </section>

            <section id="about" className="min-h-screen snap-start">
              <About />
            </section>

          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default PortfolioSections;