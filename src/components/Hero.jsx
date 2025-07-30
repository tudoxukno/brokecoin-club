import { motion } from 'framer-motion';
import { ChevronDown, AlertTriangle } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      label: "Market Cap",
      value: "$ -42.69"
    },
    {
      label: "Holders",
      value: "1.5"
    },
    {
      label: "Volume (24h)",
      value: "0.00 BROKE"
    },
    {
      label: "Liquidity Locked",
      value: "Emotionally."
    }
  ];

  return (
    <section id="home" className="relative h-screen flex items-start justify-center overflow-hidden pt-6">
      {/* Long top border that extends behind the coin - positioned directly below BUY BROKECOIN NOW button */}
      <div className="absolute left-0 right-0 h-px bg-charcoal z-0" style={{ top: 'calc(50% - 120px)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Copy - Moved to the left using margin */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:-ml-48 lg:pt-8"
          >
            <h1 className="hero-text text-3xl md:text-5xl lg:text-7xl xl:text-8xl leading-tight">
              The only coin backed by tears and&nbsp;bad&nbsp;decisions.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://thirdweb.com/contracts/deploy/0x27b57Aa02BB1Ea243e5B44a41890246807Cda135"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal text-white px-12 py-6 font-bebas text-xl md:text-2xl lg:text-3xl tracking-wider hover:bg-broke-600 transition-all duration-300 transform hover:scale-105 rounded-lg text-center"
              >
                BUY BROKECOIN NOW
              </a>
            </div>

            {/* BROKEBOARD Section - Integrated into hero flow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ marginTop: '120px' }}
            >
              {/* BROKEBOARD Title */}
              <h2 className="font-inter text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-8 text-left" style={{ marginTop: '-40px' }}>
                BROKEBOARD™
              </h2>

              {/* Stats in horizontal row */}
              <div className="grid grid-cols-4 mb-4" style={{ marginTop: '80px', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '5rem' }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                    className="text-left"
                  >
                    <h3 className="font-inter text-sm font-medium text-dust mb-1 uppercase tracking-wider whitespace-nowrap">
                      {stat.label}
                    </h3>
                    <p className="font-inter text-xl md:text-2xl lg:text-3xl font-semibold text-charcoal whitespace-nowrap">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom text */}
              <p className="font-inter text-base font-medium text-dust text-left" style={{ marginTop: '80px' }}>
                Accurate as of vibes.
              </p>
            </motion.div>

            {/* Bottom border that extends behind the coin - same width as top divider */}
            <div className="absolute left-0 right-0 h-px bg-charcoal z-0" style={{ top: 'calc(50% + 200px)' }}></div>
          </motion.div>

          {/* Right side - Crying Coin - Unchanged */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative lg:translate-x-32">
              {/* Main Coin */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-96 h-96 lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] z-30"
              >
                {/* Actual Coin Image */}
                <img
                  src="/images/hero-image.png"
                  alt="BROKECOIN - Crying Coin"
                  className="w-full h-full object-contain relative z-40"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />

                {/* Fallback CSS Coin */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-2xl border-4 border-gray-600 hidden">
                  {/* Coin Texture */}
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full">
                    {/* Crying Face */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        {/* Face */}
                        <div className="w-32 h-32 mx-auto mb-4 relative">
                          {/* Head */}
                          <div className="w-full h-full bg-gray-600 rounded-full flex items-center justify-center">
                            {/* Eyes */}
                            <div className="flex space-x-8">
                              <div className="w-6 h-6 bg-black rounded-full relative">
                                <div className="absolute -bottom-2 left-1 w-2 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                              </div>
                              <div className="w-6 h-6 bg-black rounded-full relative">
                                <div className="absolute -bottom-2 right-1 w-2 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                          {/* Mouth */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-black rounded-b-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section with scroll indicator and warning box */}
        {/* Scroll indicator */}
        <div className="absolute bottom-48 left-0 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ marginLeft: '400px', transform: 'translateY(-15px)' }}
          >
            <a href="#broke-board" className="flex flex-row items-center space-x-2 text-charcoal hover:text-broke-600 transition-colors">
              <img
                src="/images/down-arrow.png"
                alt="Scroll down"
                className="w-16 h-16 animate-bounce"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <ChevronDown className="w-16 h-16 animate-bounce hidden" />
              <span className="loud-text text-6xl">SCROLL TO SEE THE DAMAGE</span>
            </a>
          </motion.div>
        </div>

        {/* Warning box */}
        <div className="absolute bottom-28 right-0 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-sm"
          >
            <div className="bg-paper border-2 border-charcoal p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <img
                  src="/images/warning-icon.png"
                  alt="Warning"
                  className="w-10 h-10 text-charcoal flex-shrink-0 mt-1"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <AlertTriangle className="w-10 h-10 text-charcoal flex-shrink-0 mt-1 hidden" />
                <div>
                  <h4 className="font-bebas text-2xl tracking-wider text-charcoal mb-3">
                    WARNING:
                  </h4>
                  <p className="body-text text-lg">
                    Buying BROKECOIN may result in short-term laughter, long-term regret, and excessive screenshotting.
                    Please consult your wallet before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 