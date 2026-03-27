'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-white max-w-4xl -mt-16"
      >

        <div className="relative inline-block mb-8">

          <div
            className="absolute inset-0 blur-[80px] opacity-40"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
              transform: 'scale(1.4)',
            }}
            aria-hidden="true"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            style={{
              textShadow: '0 0 40px rgba(168, 85, 247, 0.25), 0 0 80px rgba(168, 85, 247, 0.15)',
            }}
          >
            <span className="whitespace-nowrap">Hi, I&apos;m</span> Adrianne Jade
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 tracking-wide font-light"
        >
          Developer • Designer • Creator
        </motion.p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-white/30 to-transparent" />
      </motion.div>

    </section>
  );
}