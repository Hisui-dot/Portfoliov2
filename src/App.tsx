import { useState } from 'react';
import Intro from "./components/sections/Intro";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Tech from "./components/sections/Tech";
import Contact from "./components/sections/Contact";

function App() {
  const [showHero, setShowHero] = useState(false);

  return (
    <>
      {!showHero && (
        <Intro onComplete={() => setShowHero(true)} />
      )}

      {showHero && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Tech />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;