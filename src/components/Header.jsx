import { ConnectWallet } from '@thirdweb-dev/react';

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <img 
              src="/images/brokecoin-logo.png" 
              alt="BROKECOIN" 
              className="h-10 w-10 sm:h-12 sm:w-12"
              onError={(e) => {
                // Fallback to CSS if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="bg-white text-black w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bebas text-2xl sm:text-3xl font-bold hidden">
              B
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
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

          {/* Right side - BUY BROKECOIN CTA */}
          <div className="flex items-center">
            <ConnectWallet 
              theme="dark"
              btnTitle={
                <div className="flex items-center space-x-2 font-bebas text-sm sm:text-base lg:text-lg tracking-wider">
                  <img 
                    src="/images/purchase-tag.png" 
                    alt="" 
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    onError={(e) => {
                      // Fallback to CSS if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden">🏷️</span>
                  <span className="hidden sm:inline">BUY BROKECOIN</span>
                  <span className="sm:hidden">BUY</span>
                </div>
              }
              modalTitle="Purchase BROKECOIN"
              modalSize="wide"
              welcomeScreen={{
                title: "Buy BROKECOIN",
                subtitle: "Join the broke revolution"
              }}
              className="!bg-transparent !border-none !text-white font-bebas text-sm sm:text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors !p-0 !m-0 !shadow-none"
              style={{
                backgroundColor: 'transparent !important',
                border: 'none !important',
                color: 'white !important',
                padding: '0 !important',
                margin: '0 !important',
                boxShadow: 'none !important'
              }}
            />
          </div>
        </div>

        {/* Mobile Navigation - Hidden on desktop */}
        <div className="md:hidden py-4 border-t border-gray-700">
          <nav className="flex flex-col space-y-3">
            <a href="#home" className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors">
              HOME
            </a>
            <a href="#brokenomics" className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors">
              BROKENOMICS
            </a>
            <a href="#whitepaper" className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors">
              WHITEPAPER
            </a>
            <a href="#proof" className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors">
              PROOF
            </a>
            <a href="#tap-in" className="font-bebas text-lg tracking-wider hover:text-broke-300 transition-colors">
              TAP IN
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 