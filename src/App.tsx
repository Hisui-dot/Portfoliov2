import { useState } from 'react';
import Intro from './components/Intro';
import PortfolioSections from './components/PortfolioSections';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
      {!showPortfolio && (
        <Intro onComplete={() => setShowPortfolio(true)} />
      )}
      
      {showPortfolio && (
        <PortfolioSections />
      )}
    </>
  );
}

export default App;