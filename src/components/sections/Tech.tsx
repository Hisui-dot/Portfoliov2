import { motion } from 'framer-motion';
import type { Service } from '../../types/service';

const services: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'Web Development',
    description: 'Modern, scalable web applications built for performance and long-term maintainability.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: 2,
    number: '02',
    title: 'Backend Systems',
    description: 'Secure and structured backend architectures designed for production-level systems.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'Docker'],
  },
  {
    id: 3,
    number: '03',
    title: 'Deployment & Architecture',
    description: 'Production-ready systems deployed using modern containerization and cloud workflows.',
    tech: ['Vercel', 'Docker', 'Managed PostgreSQL', 'Cloud Storage'],
  },
];

const Tech = () => {
  return (
    <section
      id="tech"
      className="min-h-screen bg-black text-white flex items-center px-6 sm:px-8 md:px-16 lg:px-24 py-20 pointer-events-auto"
    >
      <div className="max-w-5xl w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium mb-4">
            Skills & Services
          </p>
          <div className="w-16 h-0.5 bg-linear-to-r from-violet-600 to-transparent" />
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="relative group cursor-default"
            >

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="pb-8 border-b border-white/10"
              >

                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-sm font-mono text-white/40">
                    {service.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight relative">
                    {service.title}
                    
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-violet-600 group-hover:w-full transition-all duration-500 ease-out" />
                  </h3>
                </div>

                <p className="text-lg text-white/70 leading-relaxed pl-14 mb-4">
                  {service.description}
                </p>

                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <div className="flex flex-wrap gap-2 pl-14 pt-2">
                    {service.tech.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1 rounded-full bg-violet-950/30 border border-violet-800/30 text-violet-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;