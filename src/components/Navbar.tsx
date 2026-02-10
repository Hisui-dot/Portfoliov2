import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <ul className="flex gap-10 items-center">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <button
              onClick={() => scrollToSection(item.href)}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </button>

            <span
              className="
                absolute left-0 -bottom-1
                h-px w-full
                bg-white
                scale-x-0
                origin-left
                transition-transform duration-300 ease-out
                group-hover:scale-x-100
              "
            />
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
