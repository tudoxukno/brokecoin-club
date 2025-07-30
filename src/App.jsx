import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Base } from '@thirdweb-dev/chains';
import Header from './components/Header';
import Hero from './components/Hero';
import Brokenomics from './components/Brokenomics';
import Whitepaper from './components/Whitepaper';
import ClaimSection from './components/ClaimSection';
import Footer from './components/Footer';

// Import configuration (you'll need to create config.js from config.example.js)
// import { config } from '../config.js';

function App() {
  return (
    <ThirdwebProvider
      activeChain={Base}
      clientId="your-client-id-here" // Replace with your thirdweb client ID from config.js
    >
      <Router>
        <div className="min-h-screen bg-paper paper-texture">
          <Header />
          <main>
            <Hero />
            <Brokenomics />
            <Whitepaper />
            <ClaimSection />
          </main>
          <Footer />
        </div>
      </Router>
    </ThirdwebProvider>
  );
}

export default App;
