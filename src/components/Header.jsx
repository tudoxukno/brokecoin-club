import { useState } from 'react';
// import { ConnectWallet } from '@thirdweb-dev/react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWalletClick = () => {
    alert('Wallet connection temporarily disabled - site needs to be stable first');
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      {/* Desktop Header - No container padding to allow edge positioning */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-2 items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo - Spans 3 columns, positioned at start */}
          <div className="col-span-3 flex items-center justify-start">
            <img 
              src="/images/brokecoin-logo.png" 
              alt="BROKECOIN" 
              className="h-12 w-12"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="bg-white text-black w-12 h-12 flex items-center justify-center font-bebas text-3xl font-bold hidden">
              B
            </div>
          </div>

          {/* Navigation - Spans 6 columns, centered */}
          <nav className="col-span-6 flex justify-center space-x-6 lg:space-x-8">
            <a href="#home" className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors">
              HOME
            </a>
            <a href="#brokenomics" className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors">
              BROKENOMICS
            </a>
            <a href="#whitepaper" className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors">
              WHITEPAPER
            </a>
            <a href="#proof" className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors">
              PROOF
            </a>
            <a href="#tap-in" className="font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors">
              TAP IN
            </a>
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
            <img 
              src="/images/brokecoin-logo.png" 
              alt="BROKECOIN" 
              className="h-10 w-10"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="bg-white text-black w-10 h-10 flex items-center justify-center font-bebas text-2xl font-bold hidden">
              B
            </div>
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
            <a 
              href="#home" 
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#brokenomics" 
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              BROKENOMICS
            </a>
            <a 
              href="#whitepaper" 
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              WHITEPAPER
            </a>
            <a 
              href="#proof" 
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              PROOF
            </a>
            <a 
              href="#tap-in" 
              className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              TAP IN
            </a>
            
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