import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Base } from '@thirdweb-dev/chains';
import ErrorBoundary from './components/ErrorBoundary';
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

// Create QueryClient instance - MUST be outside component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  // Get client ID from environment variable
  // CRITICAL: This must be set in Vercel environment variables for production
  const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID || '6504e03070ddb2dfa12948cfdad6f0e2';
  
  // Log if client ID is missing (for debugging)
  if (!import.meta.env.VITE_THIRDWEB_CLIENT_ID && import.meta.env.MODE === 'production') {
    console.warn('⚠️ VITE_THIRDWEB_CLIENT_ID not found in environment variables. Using fallback.');
  }
  
  // Always pass clientId - it's required for IPFS gateway
  const providerProps = {
    activeChain: Base,
    queryClient: queryClient, // CRITICAL: Pass our QueryClient to ThirdwebProvider
    clientId: clientId, // ALWAYS pass clientId - required for reliable IPFS gateway
    // Disable auto-connect to allow users to switch accounts
    autoConnect: false,
    dAppMeta: {
      name: "BROKECOIN",
      description: "The only coin backed by tears and bad decisions",
      url: typeof window !== 'undefined' ? window.location.origin : 'https://brokecoin.club',
      logoUrl: typeof window !== 'undefined' ? `${window.location.origin}/images/brokecoin-logo.png` : 'https://brokecoin.club/images/brokecoin-logo.png',
      isDarkMode: true,
    },
  };
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThirdwebProvider {...providerProps}>
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
        </ThirdwebProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
