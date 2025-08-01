import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThirdwebProvider } from '@thirdweb-dev/react';
// import { Base } from '@thirdweb-dev/chains';
import Header from './components/Header';
import Hero from './components/Hero';
import Brokenomics from './components/Brokenomics';
import Whitepaper from './components/Whitepaper';
import ClaimSection from './components/ClaimSection';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import FullDisclaimer from './components/FullDisclaimer';

// Import configuration
// import { config } from '../config.js';

function App() {
  return (
    // <ThirdwebProvider
    //   activeChain={Base}
    //   clientId={config.thirdwebClientId}
    // >
      <Router>
        <div className="min-h-screen bg-paper paper-texture">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Brokenomics />
                <Whitepaper />
                <ClaimSection />
              </main>
            } />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<FullDisclaimer />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    // </ThirdwebProvider>
  );
}

export default App;
