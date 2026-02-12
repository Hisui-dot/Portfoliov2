import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <>
      <Navbar />
      
      <div className="relative z-10 flex items-center justify-center h-full">

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
          className="text-9xl font-bold mb-6 bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent"
          >
            Hi, I'm Adrianne Jade
          </motion.h1>
          
          <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl text-white/80 mb-8"
          >
            Developer • Designer • Creator
          </motion.p>

        </motion.div>
        
      </div>
    </>
  );
};

export default Hero;