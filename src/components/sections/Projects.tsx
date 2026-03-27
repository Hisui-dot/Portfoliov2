'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/project';

const projects: Project[] = [
  {
    id: 1,
    title: "ZENDRIVE",
    subtitle: "WEB APPLICATION",
    description: "A premium car rental landing page built for the Philippine market. Features a full booking form with validation, interactive car fleet, and a clean dark UI.",
    image: "/zendrive1.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://hisui-zendrive.vercel.app/",
  },
  {
    id: 2,
    title: "Coming Soon",
    subtitle: "NEXT PROJECT",
    description: "Something new is in the works. Check back soon.",
    image: null,
    tags: [],
    liveUrl: null,
  },
  {
    id: 3,
    title: "Coming Soon",
    subtitle: "NEXT PROJECT",
    description: "Something new is in the works. Check back soon.",
    image: null,
    tags: [],
    liveUrl: null,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + projects.length) % projects.length;

    if (position === 0) {
      return { zIndex: 30, scale: 1, y: 0, opacity: 1, filter: 'brightness(1)' };
    }

    const offset = position * 45;
    const scale = 1 - position * 0.08;
    const opacity = 1 - position * 0.25;

    return {
      zIndex: 30 - position,
      scale: Math.max(scale, 0.84),
      y: offset,
      opacity: Math.max(opacity, 0.5),
      filter: 'brightness(0.7)',
    };
  };

  const CardImage = ({ project, isActive, size = 'lg' }: { project: Project; isActive: boolean; size?: 'lg' | 'sm' }) => (
    <div className={`relative aspect-video rounded-xl overflow-hidden border shadow-2xl ${
      isActive
        ? 'border-violet-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
        : 'border-violet-800/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
    }`}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
          <p className="text-white/20 text-sm uppercase tracking-widest">Coming Soon</p>
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-br from-violet-900/15 via-transparent to-violet-950/25 opacity-70" />

      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`absolute bottom-4 right-4 font-bold text-white/12 leading-none select-none ${
            size === 'lg' ? 'text-[100px]' : 'text-[60px] sm:text-[80px]'
          }`}
        >
          {String(project.id).padStart(2, '0')}
        </motion.div>
      )}

      {isActive && (
        <div className="absolute inset-0 rounded-xl ring-1 ring-violet-600/20" />
      )}
    </div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 sm:px-8 md:px-16 lg:px-24 py-20"
    >
      <div className="max-w-7xl w-full">

        <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative h-137.5 flex items-center justify-center py-24">
            <div className="relative w-full max-w-2xl">

              {projects.map((project, index) => {
                const style = getCardStyle(index);
                const isActive = index === currentIndex;

                return (
                  <motion.div
                    key={project.id}
                    animate={{ zIndex: style.zIndex, scale: style.scale, y: style.y, opacity: style.opacity }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full top-1/2 left-0 -translate-y-1/2"
                    style={{ filter: style.filter, transformOrigin: 'center center' }}
                  >
                    <CardImage project={project} isActive={isActive} size="lg" />
                  </motion.div>
                );
              })}

              <button
                onClick={handlePrevious}
                className="absolute -left-16 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:border-violet-600/50 hover:bg-black/80 transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronUp size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute -right-16 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:border-violet-600/50 hover:bg-black/80 transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronDown size={24} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center space-y-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium">
                {currentProject.subtitle}
              </p>

              <div className="w-16 h-0.5 bg-linear-to-r from-violet-600 to-transparent" />

              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                {currentProject.title}
              </h2>

              <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                {currentProject.description}
              </p>

              {currentProject.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-widest text-violet-300 bg-violet-900/20 border border-violet-700/30 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 pt-2">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-violet-700/30 hover:bg-violet-700/50 border border-violet-600/40 hover:border-violet-500/60 px-5 py-2.5 rounded-full transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    View Live Site
                  </a>
                )}

                <div className="text-sm text-white/40 font-mono ml-auto">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:hidden space-y-8">

          <div className="relative h-100 flex items-center justify-center">
            <div className="relative w-full">

              {projects.map((project, index) => {
                const style = getCardStyle(index);
                const isActive = index === currentIndex;

                return (
                  <motion.div
                    key={project.id}
                    animate={{ zIndex: style.zIndex, scale: style.scale, y: style.y, opacity: style.opacity }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full top-1/2 left-0 -translate-y-1/2"
                    style={{ filter: style.filter, transformOrigin: 'center center' }}
                  >
                    <CardImage project={project} isActive={isActive} size="sm" />
                  </motion.div>
                );
              })}

              <button
                onClick={handlePrevious}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 z-40 p-3 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:border-violet-600/50 transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronUp size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-16 z-40 p-3 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:border-violet-600/50 transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronDown size={24} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 pt-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium">
                {currentProject.subtitle}
              </p>

              <div className="w-16 h-0.5 bg-linear-to-r from-violet-600 to-transparent" />

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {currentProject.title}
              </h2>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                {currentProject.description}
              </p>

              {currentProject.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-widest text-violet-300 bg-violet-900/20 border border-violet-700/30 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 pt-2">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-violet-700/30 hover:bg-violet-700/50 border border-violet-600/40 hover:border-violet-500/60 px-5 py-2.5 rounded-full transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    View Live Site
                  </a>
                )}

                <div className="text-sm text-white/40 font-mono ml-auto">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;