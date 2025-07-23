import React from 'react';
import Header from './components/Header';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ResultsSection from './components/ResultsSection';
import OfferSection from './components/OfferSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './styles/magenta-theme.css'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <ProblemSection />
        <SolutionSection />
        <ResultsSection />
        <OfferSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
