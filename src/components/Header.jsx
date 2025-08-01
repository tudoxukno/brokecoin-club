import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { ConnectWallet } from '@thirdweb-dev/react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWalletClick = () => {
    alert('Wallet connection temporarily disabled - site needs to be stable first');
  };

  // Function to handle navigation with smooth scrolling on home page
  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      // On home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      {/* Desktop Header - No container padding to allow edge positioning */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-2 items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo - Spans 3 columns, positioned at start */}
          <div className="col-span-3 flex items-center justify-start">
            <Link to="/">
              <img 
                src="/images/brokecoin-logo.png" 
                alt="BROKECOIN" 
                className="h-12 w-12"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <Link to="/" className="bg-white text-black w-12 h-12 flex items-center justify-center font-bebas text-3xl font-bold hidden">
                B
              </Link>
            </Link>
          </div>

          {/* Navigation - Spans 6 columns, centered */}
          <nav className="col-span-6 flex justify-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              onClick={() => handleNavClick('home')}
              className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors"
            >
              HOME
            </Link>
            <Link 
              to="/" 
              onClick={() => handleNavClick('brokenomics')}
              className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors"
            >
              BROKENOMICS
            </Link>
            <Link 
              to="/" 
              onClick={() => handleNavClick('whitepaper')}
              className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors"
            >
              WHITEPAPER
            </Link>
            <Link 
              to="/" 
              onClick={() => handleNavClick('claim-section')}
              className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors"
            >
              CLAIM BROKE
            </Link>
          </nav>

          {/* CTA - Spans 3 columns, positioned at end */}
          <div className="col-span-3 flex items-center justify-end">
            <button 
              onClick={handleWalletClick}
              className="flex items-center space-x-2 font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors"
            >
              <img 
                src="/images/purchase-tag.png" 
                alt="" 
                className="w-4 h-4"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden">🏷️</span>
              <span>BUY BROKECOIN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header - With hamburger menu */}
      <div className="md:hidden">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Mobile Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/images/brokecoin-logo.png" 
                alt="BROKECOIN" 
                className="h-10 w-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <Link to="/" className="bg-white text-black w-10 h-10 flex items-center justify-center font-bebas text-2xl font-bold hidden">
                B
              </Link>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:text-broke-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} bg-black border-t border-gray-700`}>
          <nav className="flex flex-col py-4">
            <Link 
              to="/" 
              onClick={() => handleNavClick('home')}
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
            >
              HOME
            </Link>
            <Link 
              to="/" 
              onClick={() => handleNavClick('brokenomics')}
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
            >
              BROKENOMICS
            </Link>
            <Link 
              to="/" 
              onClick={() => handleNavClick('whitepaper')}
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
            >
              WHITEPAPER
            </Link>
            <Link 
              to="/" 
              onClick={() => handleNavClick('claim-section')}
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
            >
              CLAIM BROKE
            </Link>
            
            {/* Mobile CTA inside menu */}
            <div className="px-4 py-3 border-t border-gray-700 mt-2">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleWalletClick();
                }}
                className="flex items-center space-x-2 font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors"
              >
                <img 
                  src="/images/purchase-tag.png" 
                  alt="" 
                  className="w-4 h-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden">🏷️</span>
                <span>BUY BROKECOIN</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 