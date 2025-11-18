import { motion } from 'framer-motion';

const Brokenomics = () => {
  const allocationData = [
    {
      allocation: "Founder Reserve",
      percentage: "15%",
      amount: "(150M)",
      realTalk: "To fund ramen & therapy."
    },
    {
      allocation: "Community Claims",
      percentage: "38%",
      amount: "(380M)",
      realTalk: "Because we're all broke together."
    },
    {
      allocation: "Liquidity (Future)",
      percentage: "10%",
      amount: "(100M)",
      realTalk: "So you can trade BROKE and feel something."
    },
    {
      allocation: "Giveaways & Airdrops",
      percentage: "15%",
      amount: "(150M)",
      realTalk: "For contests, chaos, and broke-worthy engagement."
    },
    {
      allocation: "Treasury & Ops",
      percentage: "10%",
      amount: "(100M)",
      realTalk: "We manifesting org charts. One broke hire at a time."
    },
    {
      allocation: "Burn & Rewards",
      percentage: "12%",
      amount: "(120M)",
      realTalk: "For sacrifices to the algorithm. May the pump bless us."
    }
  ];

  const billOfRights = [
    "You have the right to claim.",
    "You have the right to be down bad.",
    "You have the right to rug and recover.",
    "You have the right to flex your 25K BROKE like it's a million.",
    "You have the right to Stimmy Phase 2 (eventually).",
    "You have the right to screenshot your balance and still feel rich.",
    "You have the right to hold through the poverty pump.",
    "You have the right to stare at your wallet at 2AM whispering \"we gone make it with this one\" while eating a gas station burrito and avoiding your landlord's texts, because hope is free, and delusion is cheaper.",
    "You have the right to screenshot a 12-minute pump and call it generational wealth (never mind the cliff that followed...that moment was real).",
    "You have the right to claim BROKECOIN on your taxes as \"emotional reparations.\" Let the IRS audit the pain."
  ];

  return (
    <section id="brokenomics" className="py-20 bg-paper relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-24 relative">
          {/* Vertical divider line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal transform -translate-x-1/2 ml-4"></div>
          
          {/* Left Column - BROKENOMICS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Top section - Title, subtitle, supply details */}
            <div className="space-y-8">
              {/* Title */}
              <h2 className="font-newsreader text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal">
                BROKENOMICS
              </h2>
              
              {/* Subtitle */}
              <p className="font-newsreader text-xl lg:text-2xl text-charcoal font-medium">
                The totally rational distribution plan for the world's most emotionally volatile digital asset.
              </p>
              
              {/* Supply Details - Horizontal layout */}
              <div className="flex justify-between items-center">
                <p className="font-newsreader text-lg lg:text-xl text-charcoal font-normal">
                  Total supply minted: 1 Billion BROKE
                </p>
                <p className="font-newsreader text-lg lg:text-xl text-charcoal font-normal">
                  Claim limit: 25,000 per wallet
                </p>
              </div>
            </div>
            
            {/* Middle section - Table */}
            <div className="my-8">
              <div className="border-2 border-charcoal">
                <div className="bg-charcoal text-white p-4">
                  <div className="grid grid-cols-3 gap-4 font-inter text-sm lg:text-base font-semibold">
                    <div className="flex items-center justify-center">Allocation</div>
                    <div className="flex items-center justify-center">% of Supply</div>
                    <div className="flex items-center justify-center">Real Talk</div>
                  </div>
                </div>
                <div className="divide-y divide-charcoal">
                  {allocationData.map((item, index) => (
                    <div key={index} className="p-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="font-inter text-sm lg:text-base font-semibold text-charcoal flex items-center justify-center">
                          {item.allocation}
                        </div>
                        <div className="font-inter text-sm lg:text-base font-semibold text-charcoal flex items-center justify-center">
                          {item.percentage} {item.amount}
                        </div>
                        <div className="font-inter text-sm lg:text-base font-medium text-charcoal flex items-center justify-center">
                          {item.realTalk}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Bottom section - Footer note */}
            <div className="mt-auto">
              <p className="font-inter text-sm lg:text-base text-charcoal font-medium">
                *Note: 20M BROKE remains in claim contract limbo. We're calling it the Broke Stimmy Phase 2... maybe.
              </p>
            </div>
          </motion.div>

          {/* Right Column - THE BROKECOIN BILL OF RIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col ml-12 relative"
          >
            {/* Background watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none z-0">
              <img 
                src="/images/logo-watermark.png" 
                alt="" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Top section - Title aligned with BROKENOMICS subtitle */}
              <div className="pt-28">
                <h3 className="font-newsreader text-xl lg:text-2xl xl:text-3xl font-bold text-charcoal mb-8">
                  THE BROKECOIN<br />
                  BILL OF RIGHTS:
                </h3>
              </div>
              
              {/* Middle section - List fills table space */}
              <div className="space-y-4 mb-8">
                {billOfRights.map((right, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="font-inter text-lg lg:text-xl font-semibold text-charcoal flex-shrink-0">
                      {index + 1}.
                    </span>
                    <p className="font-inter text-base lg:text-lg text-charcoal font-medium leading-relaxed">
                      {right}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Bottom section - CTA aligned with bottom of table */}
              <div className="mt-auto pt-4">
                <motion.a
                  href="#claim-section"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-charcoal text-white px-8 py-4 font-bebas text-xl lg:text-2xl tracking-wider hover:bg-broke-600 transition-all duration-300 rounded-lg text-center"
                >
                  CLAIM YOUR SHARE
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden space-y-12">
          {/* BROKENOMICS Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Title */}
            <h2 className="font-newsreader text-3xl sm:text-4xl font-bold text-charcoal">
              BROKENOMICS
            </h2>
            
            {/* Subtitle */}
            <p className="font-newsreader text-lg sm:text-xl text-charcoal font-medium">
              The totally rational distribution plan for the world's most emotionally volatile digital asset.
            </p>
            
            {/* Supply Details - Horizontal layout */}
            <div className="flex justify-between items-center">
              <p className="font-newsreader text-base sm:text-lg text-charcoal font-normal">
                Total supply minted: 1 Billion BROKE
              </p>
              <p className="font-newsreader text-base sm:text-lg text-charcoal font-normal">
                Claim limit: 25,000 per wallet
              </p>
            </div>
            
            {/* Allocation Table */}
            <div className="border-2 border-charcoal">
              <div className="bg-charcoal text-white p-3">
                <div className="grid grid-cols-3 gap-2 font-inter text-xs sm:text-sm font-semibold">
                  <div className="flex items-center justify-center">Allocation</div>
                  <div className="flex items-center justify-center">% of Supply</div>
                  <div className="flex items-center justify-center">Real Talk</div>
                </div>
              </div>
              <div className="divide-y divide-charcoal">
                {allocationData.map((item, index) => (
                  <div key={index} className="p-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-inter text-xs sm:text-sm font-semibold text-charcoal flex items-center justify-center">
                        {item.allocation}
                      </div>
                      <div className="font-inter text-xs sm:text-sm font-semibold text-charcoal flex items-center justify-center">
                        {item.percentage} {item.amount}
                      </div>
                      <div className="font-inter text-xs sm:text-sm font-medium text-charcoal flex items-center justify-center">
                        {item.realTalk}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer Note */}
            <p className="font-inter text-xs sm:text-sm text-charcoal font-medium">
              *Note: 20M BROKE remains in claim contract limbo. We're calling it the Broke Stimmy Phase 2... maybe.
            </p>
          </motion.div>

          {/* THE BROKECOIN BILL OF RIGHTS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Title */}
            <h3 className="font-newsreader text-xl sm:text-2xl font-bold text-charcoal">
              THE BROKECOIN BILL OF RIGHTS:
            </h3>
            
            {/* Numbered List */}
            <div className="space-y-3">
              {billOfRights.map((right, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="font-inter text-base sm:text-lg font-semibold text-charcoal flex-shrink-0">
                    {index + 1}.
                  </span>
                  <p className="font-inter text-sm sm:text-base text-charcoal font-medium leading-relaxed">
                    {right}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.a
              href="#claim-section"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-charcoal text-white px-6 py-3 font-bebas text-lg sm:text-xl tracking-wider hover:bg-broke-600 transition-all duration-300 rounded-lg text-center"
            >
              CLAIM YOUR SHARE
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brokenomics; 