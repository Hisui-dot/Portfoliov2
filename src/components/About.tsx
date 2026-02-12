import { motion } from 'framer-motion';
import { useState } from 'react';
import ElectricCard from './ElectricCard';
import profile from "../assets/profile.jpg";

const About = () => {

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });

  };

  const handleMouseLeave = () => {

    setRotation({ x: 0, y: 0 });

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <section className="h-screen snap-start flex items-center justify-center px-8 md:px-16 lg:px-24">

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
          >
            
            <p className="text-lg text-white/80 leading-relaxed">
            A full-stack developer, designer, and creator passionate about building 
            interactive experiences that blend creativity with functionality. My journey 
            started with a fascination for how games create immersive worlds, which evolved 
            into a love for web development. I specialize in React, TypeScript, and modern 
            full-stack technologies, with a focus on performance, scalability, and user experience.
            </p>

          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
          >

            <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`,
              transition: 'transform 0.1s ease-out',
            }}
            className="cursor-pointer"
            >
              <ElectricCard className="w-96">
                
                <div className="relative w-full aspect-3/4">
                  
                  <img
                  src={profile} 
                  alt="Adrianne Jade"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(20%) contrast(1.1) brightness(1.05)',
                  }}
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-orange-500/20 via-transparent to-transparent mix-blend-overlay" />
                  
                  <div 
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(${rotation.y + 180}deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`,
                  }}
                  />
                  
                  <div 
                  className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                  }}
                  />
                  
                  <div 
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                  }}
                  />

                </div>
              </ElectricCard>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="h-screen snap-start flex items-center justify-center border-t border-white/10">
        <h2 className="text-white text-6xl font-bold">PROJECT CAROUSEL</h2>
      </section>

      <section className="h-screen snap-start flex items-center justify-center border-t border-white/10">
        <h2 className="text-white text-6xl font-bold">TECH STACK</h2>
      </section>
    </div>
  );
};

export default About;