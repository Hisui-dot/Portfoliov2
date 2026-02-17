import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { Project } from '../../types/project';

const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    subtitle: "WEB APPLICATION",
    description: "A full-stack web application built with React and Node.js, focusing on real-time data visualization and user interaction.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  },
  {
    id: 2,
    title: "Project Beta",
    subtitle: "MOBILE APP",
    description: "Cross-platform mobile application featuring seamless authentication, offline support, and cloud synchronization.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
  },
  {
    id: 3,
    title: "Project Gamma",
    subtitle: "GAME PROTOTYPE",
    description: "Interactive 2D game prototype with procedural generation, physics simulation, and dynamic difficulty adjustment.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
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
      return {
        zIndex: 30,
        scale: 1,
        y: 0,
        opacity: 1,
        filter: 'brightness(1)',
      };
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
                    animate={{
                      zIndex: style.zIndex,
                      scale: style.scale,
                      y: style.y,
                      opacity: style.opacity,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute w-full top-1/2 left-0 -translate-y-1/2"
                    style={{ 
                      filter: style.filter,
                      transformOrigin: 'center center',
                    }}
                  >

                    <div className={`relative aspect-video rounded-xl overflow-hidden border shadow-2xl ${
                      isActive 
                        ? 'border-violet-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                        : 'border-violet-800/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
                    }`}>
                      
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute inset-0 bg-linear-to-br from-violet-900/15 via-transparent to-violet-950/25 opacity-70" />
                      
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="absolute bottom-6 right-6 text-[100px] font-bold text-white/12 leading-none select-none"
                        >
                          {String(project.id).padStart(2, '0')}
                        </motion.div>
                      )}

                      {isActive && (
                        <div className="absolute inset-0 rounded-xl ring-1 ring-violet-600/20" />
                      )}
                    </div>
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

              <div className="text-sm text-white/40 font-mono">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
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
                    animate={{
                      zIndex: style.zIndex,
                      scale: style.scale,
                      y: style.y,
                      opacity: style.opacity,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute w-full top-1/2 left-0 -translate-y-1/2"
                    style={{ 
                      filter: style.filter,
                      transformOrigin: 'center center',
                    }}
                  >
                    <div className={`relative aspect-video rounded-xl overflow-hidden border shadow-2xl ${
                      isActive 
                        ? 'border-violet-700/60 shadow-[0_15px_40px_rgba(0,0,0,0.5)]' 
                        : 'border-violet-800/30 shadow-[0_10px_25px_rgba(0,0,0,0.3)]'
                    }`}>
                      
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute inset-0 bg-linear-to-br from-violet-900/15 via-transparent to-violet-950/25 opacity-70" />
                      
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="absolute bottom-4 right-4 text-[60px] sm:text-[80px] font-bold text-white/12 leading-none select-none"
                        >
                          {String(project.id).padStart(2, '0')}
                        </motion.div>
                      )}

                      {isActive && (
                        <div className="absolute inset-0 rounded-xl ring-1 ring-violet-600/20" />
                      )}
                    </div>
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

              <div className="text-sm text-white/40 font-mono">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;