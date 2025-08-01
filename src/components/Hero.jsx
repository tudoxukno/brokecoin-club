import { motion } from 'framer-motion';
import { ChevronDown, AlertTriangle, ArrowDownToLine } from 'lucide-react';
import BrokeBoardTicker from './BrokeBoardTicker';

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-6 overflow-hidden">
                  {/* Mobile Layout */}
            <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col">
        {/* Mobile Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col"
        >
          {/* Headline */}
          <h1 className="hero-text text-2xl sm:text-3xl md:text-4xl leading-tight text-center mb-8">
            The only coin backed by tears and bad decisions.
          </h1>

          {/* Coin Image - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              <img
                src="/images/hero-image.png"
                alt="BROKECOIN - Crying Coin"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            </motion.div>
          </motion.div>

          {/* CTA Button - Centered */}
          <div className="flex justify-center mb-12">
            <a
              href="https://thirdweb.com/contracts/deploy/0x27b57Aa02BB1Ea243e5B44a41890246807Cda135"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal text-white px-8 py-4 font-bebas text-xl sm:text-2xl tracking-wider hover:bg-broke-600 transition-all duration-300 transform hover:scale-105 rounded-lg text-center"
            >
              BUY BROKECOIN NOW
            </a>
          </div>

          {/* BROKEBOARD Section - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t-2 border-charcoal pt-8"
          >
            <h2 className="font-inter text-2xl sm:text-3xl font-semibold text-charcoal mb-6 text-left">
              BROKEBOARD™
            </h2>

            {/* BROKEBOARD Ticker for Mobile */}
            <BrokeBoardTicker />
          </motion.div>

          {/* Bottom Divider Line - Mobile */}
          <div className="border-t-2 border-charcoal mb-12"></div>

          {/* Warning Box - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full mb-16"
          >
            <div className="border-2 border-charcoal p-6 sm:p-8 shadow-lg" style={{ backgroundColor: '#CEC5BA' }}>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <img
                  src="/images/warning-icon.png"
                  alt="Warning"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal flex-shrink-0 mt-1"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal flex-shrink-0 mt-1 hidden" />
                <div>
                  <h4 className="font-inter text-base sm:text-lg font-semibold tracking-wider text-charcoal mb-2 sm:mb-3">
                    WARNING:
                  </h4>
                  <p className="font-inter text-sm sm:text-base text-charcoal leading-relaxed">
                    Buying BROKECOIN may result in short-term laughter, long-term regret, and excessive screenshotting.
                    Please consult your wallet before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Label - Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <a href="#broke-board" className="flex flex-row items-center justify-center space-x-2 text-charcoal hover:text-broke-600 transition-colors">
              <svg 
                  className="w-8 h-8 animate-bounce" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              <span className="font-bebas text-2xl sm:text-3xl tracking-wider">
                SCROLL TO SEE THE DAMAGE
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

                              {/* Desktop Layout - Perfect Mockup Match */}
            <div className="hidden 2xl:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Hero Section - Headline and Coin */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-8">
                {/* Left side - Headline and CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <h1 className="hero-text text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
                    The only coin backed by tears and bad decisions.
                  </h1>
                  <div>
                    <a
                      href="https://thirdweb.com/contracts/deploy/0x27b57Aa02BB1Ea243e5B44a41890246807Cda135"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-charcoal text-white px-8 py-4 font-bebas text-xl lg:text-2xl tracking-wider hover:bg-broke-600 transition-all duration-300 transform hover:scale-105 rounded-lg inline-block"
                    >
                      BUY BROKECOIN NOW
                    </a>
                  </div>
                </motion.div>

                {/* Right side - Coin */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center lg:justify-end"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]"
                  >
                    <img
                      src="/images/hero-image.png"
                      alt="BROKECOIN - Crying Coin"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* BROKEBOARD Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Top divider - Full width */}
                <div className="border-t-2 border-charcoal mb-8"></div>
                
                {/* BROKEBOARD Title */}
                <h2 className="font-inter text-3xl lg:text-4xl xl:text-5xl font-semibold text-charcoal mb-8">
                  BROKEBOARD™
                </h2>

                {/* BROKEBOARD Ticker for Desktop */}
                <BrokeBoardTicker />

                {/* Bottom divider - Full width */}
                <div className="border-t-2 border-charcoal mb-8"></div>
              </motion.div>

              {/* Bottom Section - Warning and Scroll */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex justify-center lg:justify-start"
                >
                  <a href="#broke-board" className="flex flex-row items-center space-x-4 text-charcoal hover:text-broke-600 transition-colors">
                    <svg 
                        className="w-12 h-12 animate-bounce" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    <span className="font-bebas text-3xl lg:text-4xl tracking-wider">SCROLL TO SEE THE DAMAGE</span>
                  </a>
                </motion.div>

                {/* Warning box */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="max-w-sm lg:max-w-md"
                >
                  <div className="border-2 border-charcoal p-6 shadow-lg" style={{ backgroundColor: '#CEC5BA' }}>
                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/warning-icon.png"
                        alt="Warning"
                        className="w-6 h-6 text-charcoal flex-shrink-0 mt-1"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <AlertTriangle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1 hidden" />
                      <div>
                        <h4 className="font-inter text-lg font-semibold tracking-wider text-charcoal mb-3">
                          WARNING:
                        </h4>
                        <p className="font-inter text-base text-charcoal leading-relaxed">
                          Buying BROKECOIN may result in short-term laughter, long-term regret, and excessive screenshotting.
                          Please consult your wallet before proceeding.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

      {/* Tablet Layout (md: 768px - 2xl: 1536px) */}
      <div className="hidden md:flex 2xl:hidden max-w-3xl mx-auto px-6 py-12 flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          {/* Headline */}
          <h1 className="hero-text text-3xl md:text-5xl text-center mb-10">
            The only coin backed by tears and bad decisions.
          </h1>

          {/* Coin Image - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-10"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-80 h-80 md:w-96 md:h-96"
            >
              <img
                src="/images/hero-image.png"
                alt="BROKECOIN - Crying Coin"
                className="w-full h-full object-contain"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            </motion.div>
          </motion.div>

          {/* CTA Button - Centered */}
          <div className="flex justify-center mb-12">
            <a
              href="https://thirdweb.com/contracts/deploy/0x27b57Aa02BB1Ea243e5B44a41890246807Cda135"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal text-white px-10 py-5 font-bebas text-2xl tracking-wider hover:bg-broke-600 transition-all duration-300 transform hover:scale-105 rounded-lg text-center"
            >
              BUY BROKECOIN NOW
            </a>
          </div>

          {/* BROKEBOARD Section - Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t-2 border-charcoal pt-10 mb-10"
          >
            <h2 className="font-inter text-3xl font-semibold text-charcoal mb-8 text-left">
              BROKEBOARD™
            </h2>
            {/* BROKEBOARD Ticker for Tablet */}
            <BrokeBoardTicker />
          </motion.div>

          {/* Warning Box - Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full mb-12"
          >
            <div className="border-2 border-charcoal p-8 shadow-lg" style={{ backgroundColor: '#CEC5BA' }}>
              <div className="flex items-start space-x-4">
                <img
                  src="/images/warning-icon.png"
                  alt="Warning"
                  className="w-6 h-6 text-charcoal flex-shrink-0 mt-1"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <AlertTriangle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1 hidden" />
                <div>
                  <h4 className="font-inter text-lg font-semibold tracking-wider text-charcoal mb-3">
                    WARNING:
                  </h4>
                  <p className="font-inter text-base text-charcoal leading-relaxed">
                    Buying BROKECOIN may result in short-term laughter, long-term regret, and excessive screenshotting.
                    Please consult your wallet before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Label - Tablet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <a href="#broke-board" className="flex flex-row items-center justify-center space-x-3 text-charcoal hover:text-broke-600 transition-colors">
              <svg 
                  className="w-10 h-10 animate-bounce" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              <span className="font-bebas text-3xl tracking-wider">
                SCROLL TO SEE THE DAMAGE
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 