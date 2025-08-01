import { motion } from 'framer-motion';
import { motion as motionDiv } from 'framer-motion';

const Brokenomics = () => {
  const allocations = [
    {
      allocation: "Founder Reserve",
      percentage: "15%",
      amount: "150M",
      realTalk: "To fund ramen & therapy."
    },
    {
      allocation: "Community Claims",
      percentage: "38%",
      amount: "380M",
      realTalk: "Because we're all broke together."
    },
    {
      allocation: "Liquidity (Future)",
      percentage: "10%",
      amount: "100M",
      realTalk: "So you can trade BROKE and feel something."
    },
    {
      allocation: "Giveaways & Airdrops",
      percentage: "15%",
      amount: "150M",
      realTalk: "For contests, chaos, and broke-worthy engagement."
    },
    {
      allocation: "Treasury & Ops",
      percentage: "10%",
      amount: "100M",
      realTalk: "We manifesting org charts. One broke hire at a time."
    },
    {
      allocation: "Burn & Rewards",
      percentage: "12%",
      amount: "120M",
      realTalk: "For sacrifices to the algorithm. May the pump bless us."
    }
  ];

  const billOfRights = [
    "You have the right to claim.",
    "You have the right to be down bad.",
    "You have the right to rug and recover.",
    "You have the right to ignore red flags.",
    "You have the right to overhype in group chats.",
    "You have the right to refresh charts religiously.",
    "You have the right to blame the market makers.",
    "You have the right to stare at your wallet at 2AM whispering \"we gone make it with this one\" while eating a gas station burrito and avoiding your landlord's texts, because hope is free, and delusion is cheaper."
  ];

  return (
    <section id="brokenomics" className="py-12 sm:py-16 lg:py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="section-title mb-4">BROKENOMICS</h2>
          <p className="body-text text-lg sm:text-xl">
            The totally rational distribution plan for the world's most emotionally volatile digital asset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Token Allocation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-4">
                <span className="body-text font-semibold text-sm sm:text-base">Total supply minted: 1 Billion BROKE</span>
                <span className="body-text font-semibold text-sm sm:text-base">Claim limit: 25,000 per wallet</span>
              </div>
              <div className="w-full h-1 bg-charcoal"></div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {allocations.map((item, index) => (
                <motion.div
                  key={item.allocation}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-charcoal p-3 sm:p-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center">
                    <div>
                      <h3 className="font-bebas text-sm sm:text-lg tracking-wider text-charcoal">
                        {item.allocation}
                      </h3>
                    </div>
                    <div className="text-center sm:text-center">
                      <div className="font-bold text-broke-600 text-sm sm:text-base">{item.percentage}</div>
                      <div className="mono-text text-xs sm:text-sm">({item.amount})</div>
                    </div>
                    <div>
                      <p className="body-text text-xs sm:text-sm italic">{item.realTalk}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white border-2 border-charcoal">
              <p className="mono-text italic text-xs sm:text-sm">
                *Note: 20M BROKE remains in claim contract limbo. We're calling it the Broke Stimmy Phase 2... maybe.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Bill of Rights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="section-title mb-6 sm:mb-8">THE BROKECOIN BILL OF RIGHTS:</h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {billOfRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2 sm:space-x-4"
                >
                  <span className="font-bebas text-lg sm:text-xl lg:text-2xl text-broke-600 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <p className="body-text text-sm sm:text-base">{right}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a 
                href="#claim-section" 
                className="btn-primary"
              >
                CLAIM YOUR SHARE
              </a>
            </motion.div>

            {/* Background B logo - Responsive sizing */}
            <div className="absolute -top-16 sm:-top-20 -right-16 sm:-right-20 text-charcoal opacity-5 text-6xl sm:text-8xl lg:text-9xl font-bebas pointer-events-none">
              B
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brokenomics; 