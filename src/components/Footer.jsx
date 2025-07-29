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
            <div className="flex items-center mb-6">
              <div className="bg-white text-charcoal w-12 h-12 flex items-center justify-center font-bebas text-3xl font-bold mr-4">
                B
              </div>
              <div>
                <h3 className="font-bebas text-2xl tracking-wider">BROKECOIN</h3>
                <p className="mono-text text-xs">Est. 2024 (maybe)</p>
              </div>
            </div>
            <p className="body-text text-sm mb-6">
              The only coin backed by tears and bad decisions. 
              We're not financial advisors, we're barely functional adults.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-broke-300 transition-colors">
                <Heart className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-broke-300 transition-colors">
                <Coffee className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-broke-300 transition-colors">
                <Zap className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Middle Column - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-xl tracking-wider mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="body-text text-sm hover:text-broke-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#brokenomics" className="body-text text-sm hover:text-broke-300 transition-colors">
                  Brokenomics
                </a>
              </li>
              <li>
                <a href="#whitepaper" className="body-text text-sm hover:text-broke-300 transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#claim-section" className="body-text text-sm hover:text-broke-300 transition-colors">
                  Claim BROKE
                </a>
              </li>
              <li>
                <a href="#" className="body-text text-sm hover:text-broke-300 transition-colors">
                  B.R.O.K.E. Bureau
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right Column - Lore & Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-xl tracking-wider mb-6">LORE & LEGAL</h4>
            <div className="space-y-4">
              <div className="bg-white bg-opacity-10 p-4 border border-white border-opacity-20">
                <h5 className="font-bebas text-sm tracking-wider mb-2">B.R.O.K.E. MANIFESTO</h5>
                <p className="mono-text text-xs">
                  Buy in with blind faith. Refresh charts religiously. 
                  Overhype in group chats. Keep ignoring red flags. 
                  Exit? Never heard of her.
                </p>
              </div>
              
              <div className="bg-yellow-600 bg-opacity-20 p-4 border border-yellow-400 border-opacity-30">
                <h5 className="font-bebas text-sm tracking-wider mb-2 text-yellow-300">DISCLAIMER</h5>
                <p className="mono-text text-xs">
                  This is not financial advice. This is barely coherent. 
                  Invest at your own risk. We're all going to zero anyway.
                </p>
              </div>

              <div className="bg-paper bg-opacity-10 p-4 border border-white border-opacity-20">
                <h5 className="font-bebas text-sm tracking-wider mb-2">SIDE EFFECTS</h5>
                <p className="mono-text text-xs">
                  May cause: excessive screenshotting, 2AM wallet checking, 
                  delusional optimism, and temporary financial amnesia.
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="mono-text text-xs">
                © 2024 BROKECOIN. All rights reserved (whatever that means).
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full">
                <span className="font-bebas text-sm tracking-wider">FREE ENTRY</span>
              </div>
              <div className="text-center">
                <p className="font-bebas text-sm tracking-wider">BROKECOIN BILLIONAIRES</p>
                <p className="mono-text text-xs">TELEGRAM GROUP</p>
                <p className="mono-text text-xs italic">We're open. (Emotionally)</p>
              </div>
            </div>
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