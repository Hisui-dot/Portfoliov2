'use client';

import { motion } from 'framer-motion';
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siFramer,
  siGit,
  siGithub,
  siVercel,
} from 'simple-icons';

const icons = [
  { icon: siHtml5, label: 'HTML5' },
  { icon: siCss, label: 'CSS3' },
  { icon: siJavascript, label: 'JavaScript' },
  { icon: siTypescript, label: 'TypeScript' },
  { icon: siReact, label: 'React' },
  { icon: siNextdotjs, label: 'Next.js' },
  { icon: siTailwindcss, label: 'Tailwind CSS' },
  { icon: siFramer, label: 'Framer Motion' },
  { icon: siGit, label: 'Git' },
  { icon: siGithub, label: 'GitHub' },
  { icon: siVercel, label: 'Vercel' },
];

const allIcons = [...icons, ...icons, ...icons, ...icons];

export default function Tech() {
  return (
    <section
      id="tech"
      className="min-h-screen bg-black text-white flex items-center justify-center py-20"
    >
      <div className="w-full flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 text-center px-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium mb-4">
            Skills & Technologies
          </p>
          <div className="w-16 h-0.5 bg-linear-to-r from-violet-600 to-transparent mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What I Work With
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee-left hover:paused py-4">
            {allIcons.map(({ icon, label }, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white hover:scale-110 transition-all duration-300 cursor-default shrink-0 shadow-md"
                title={label}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill={`#${icon.hex}`}
                  aria-label={label}
                >
                  <path d={icon.path} />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}