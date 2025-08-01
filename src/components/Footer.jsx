import { motion } from 'framer-motion';
import { Heart, Coffee, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Main Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-start mb-6">
              <img 
                src="/images/brokecoin-logo.png" 
                alt="BROKECOIN Logo" 
                className="w-48 h-48 mb-4 object-contain"
              />
              <div className="text-left">
                <h3 className="font-bebas text-2xl tracking-wider">BROKECOIN</h3>
                <p className="mono-text text-xs">Est. 2025 (maybe)</p>
              </div>
            </div>
            <p className="body-text text-sm mb-6">
              The only coin backed by tears and bad decisions. 
              We're not financial advisors, we're barely functional adults.
            </p>
          </motion.div>

          {/* Middle Column - Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-xl tracking-wider mb-6">SOCIAL</h4>
            <div className="space-y-6">
              <a 
                href="https://x.com/brokecoinbase" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 body-text text-sm text-white hover:text-broke-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X</span>
              </a>
              <a 
                href="https://t.me/brokecoinbillionaires" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 body-text text-sm text-white hover:text-broke-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>Telegram</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Lore & Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-xl tracking-wider mb-6">LEGAL</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <a 
                  href="/terms" 
                  className="block body-text text-sm text-white hover:text-broke-300 transition-colors"
                >
                  Terms of Service
                </a>
                <a 
                  href="/privacy" 
                  className="block body-text text-sm text-white hover:text-broke-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/cookies" 
                  className="block body-text text-sm text-white hover:text-broke-300 transition-colors"
                >
                  Cookie Policy
                </a>
                <a 
                  href="/disclaimer" 
                  className="block body-text text-sm text-white hover:text-broke-300 transition-colors"
                >
                  Full Disclaimer
                </a>
              </div>
              
              <div className="bg-yellow-600 bg-opacity-20 p-4 border border-yellow-400 border-opacity-30">
                <h5 className="font-bebas text-sm tracking-wider mb-2 text-yellow-300">DISCLAIMER</h5>
                <p className="mono-text text-xs">
                  This is not financial advice. This is barely coherent. 
                  Invest at your own risk. We're all going to zero anyway.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white border-opacity-20 mt-12 pt-8"
        >
          <div className="text-center">
            <p className="mono-text text-xs">
              © 2025 BROKECOIN | A U3 Labs, LLC Production | All rights reserved (whatever that means).
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="mono-text text-xs opacity-60">
              Built with tears, coffee, and the audacity to believe. 
              Powered by Base Mainnet and copious amounts of delusion.
            </p>
            <p className="mono-text text-xs opacity-40 mt-2">
              Contract: 0x27b57Aa02BB1Ea243e5B44a41890246807Cda135 | 
              Network: Base | 
              Supply: 1,000,000,000 BROKE | 
              Claim Limit: 25,000 per wallet
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 