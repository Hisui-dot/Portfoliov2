import { motion } from 'framer-motion';
import { useState } from 'react';
import ElectricCard from '../ui/ElectricCard';
import profile from "../../assets/profile.jpg";

const About = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section 
      id="about" 
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 sm:px-8 md:px-16 lg:px-24 py-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col justify-center order-1 lg:order-1"
        >
          
          <p className="text-lg md:text-2xl text-white/70 leading-relaxed">
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
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex items-center justify-center order-2 lg:order-2"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`,
              transition: 'transform 0.1s ease-out',
            }}
            className="cursor-pointer w-full max-w-md"
          >
            <ElectricCard>
              <div className="relative w-full aspect-3/4">
                
                <img
                  src={profile} 
                  alt="Adrianne Jade"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(20%) contrast(1.1) brightness(1.05)',
                  }}
                />
                
                <div 
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(${rotation.y + 180}deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%)`,
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
  );
};

export default About;