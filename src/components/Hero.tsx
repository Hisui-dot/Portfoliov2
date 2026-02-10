import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hyperspeed from './Hyperspeed';
import Navbar from './Navbar';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [highwaySpeed, setHighwaySpeed] = useState(2);

  useEffect(() => {
    
    const slowDownTimer = setTimeout(() => {
      
      setHighwaySpeed(0.01);
    }, 2000);

    
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => {
      clearTimeout(slowDownTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      
      <div className="fixed inset-0 z-0 w-full h-full">
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
      </div>

      {showContent && (
        <>
          <Navbar />
          
          <div className="relative z-10 flex items-center justify-center h-full pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-center text-white"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] tracking-tight"
              >
                Hi, I'm Adrianne Jade
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl text-white/80 mb-8"
              >
                Developer • Designer • Creator
              </motion.p>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;