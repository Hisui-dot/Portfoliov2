import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Hero from "./components/Hero";

function App() {
  const [introDone, setIntroDone] = useState(false);

  // Scroll lock while intro is active
  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [introDone]);

  return (
    <main className="bg-neutral-950 text-white">
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}
      {introDone && <Hero />}
    </main>
  );
}

export default App;
