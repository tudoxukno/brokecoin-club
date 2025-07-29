import { ConnectWallet } from '@thirdweb-dev/react';

const Header = () => {
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
            <ConnectWallet 
              theme="dark"
              btnTitle={
                <div className="flex items-center space-x-2 font-bebas text-base lg:text-lg tracking-wider">
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
                </div>
              }
              modalTitle="Purchase BROKECOIN"
              modalSize="wide"
              welcomeScreen={{
                title: "Buy BROKECOIN",
                subtitle: "Join the broke revolution"
              }}
              className="!bg-transparent !border-none !text-white font-bebas text-base lg:text-lg tracking-wider hover:text-broke-300 transition-colors !p-0 !m-0 !shadow-none"
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
      </div>

      {/* Mobile Header - With container padding */}
      <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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

          {/* Mobile CTA */}
          <div className="flex items-center">
            <ConnectWallet 
              theme="dark"
              btnTitle={
                <div className="flex items-center space-x-2 font-bebas text-sm tracking-wider">
                  <img 
                    src="/images/purchase-tag.png" 
                    alt="" 
                    className="w-3 h-3"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden">🏷️</span>
                  <span>BUY</span>
                </div>
              }
              modalTitle="Purchase BROKECOIN"
              modalSize="wide"
              welcomeScreen={{
                title: "Buy BROKECOIN",
                subtitle: "Join the broke revolution"
              }}
              className="!bg-transparent !border-none !text-white font-bebas text-sm tracking-wider hover:text-broke-300 transition-colors !p-0 !m-0 !shadow-none"
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

        {/* Mobile Navigation */}
        <div className="py-4 border-t border-gray-700">
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