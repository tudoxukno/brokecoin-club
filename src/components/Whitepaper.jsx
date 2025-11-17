import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Whitepaper = () => {
  const distribution = [
    {
      percentage: "38%",
      title: "Scattered to the broke masses",
      description: "Freely claimable. If you're here, you qualify. That's how low the bar is."
    },
    {
      percentage: "15%",
      title: "Founder Ramen & Therapy Reserve",
      description: "For crying in product meetings, and surviving late-stage capitalism with WiFi."
    },
    {
      percentage: "15%",
      title: "Meme Stimulus & Viral Bailouts",
      description: "For contests, chaos, and social rugpull engagement. Also known as 'Marketing.'"
    },
    {
      percentage: "12%",
      title: "Algorithm Sacrifice Fund",
      description: "To summon a pump that may never come. But at least we tried."
    },
    {
      percentage: "10%",
      title: "Ghost Liquidity",
      description: "For future trading pairs. So you can swap $BROKE and feel briefly alive."
    },
    {
      percentage: "10%",
      title: "Treasury of Broke Ass Bums",
      description: "For ops and 'structure,' but mostly just vibes and maybe a Canva Pro subscription."
    }
  ];

  const roadmap = [
    {
      quarter: "Q1 - SOFT DELUSION LAUNCH (CURRENT PHASE)",
      items: [
        "$BROKE officially launched (accidentally, but on purpose though)",
        "Whitepaper released unfinished",
        "First wave of believers joins the cult",
        "Dev wallet still hasn't figured out how to lock liquidity"
      ]
    },
    {
      quarter: "Q2 - STIMMY SZN",
      items: [
        "Airdrop 'campaign' begins",
        "Launch $BROKE merch line: 1 hoodie, 0 inventory",
        "Viral X thread that gets ratioed",
        "Announce DAO. Immediately regret it."
      ]
    },
    {
      quarter: "Q3 - HOOD RECESSION, PT. 2 (PT. 1 WAS 2008. WE BACK.)",
      items: [
        "Attempt to fork $BROKE from a public library computer",
        "DAO voting (spoiler: we all vote for pizza)",
        "Exchange listings (get left on read)",
        "Influencer collabs (get ghosted once they receive a hoodie)"
      ]
    },
    {
      quarter: "Q4 - COLLAPSE.EXE",
      items: [
        "Community elects treasurer (They'll dip with the treasury within 48 hours)",
        "V2 announcements (it's just a new font)",
        "Roadmap updates with mysterious arrows and a blurry JPEG of the moon",
        "BROKECOIN Netflix doc (YouTube video essay with 92 views and 14 dislikes)"
      ]
    }
  ];

  const howToBuy = [
    "Download a wallet.",
    "Back up seed phrase, then lose it.",
    "Copy the $BROKE contract address: 0x27b57Aa02BB1Ea243e5B44a4189024E807Cda135",
    "Head to thirdweb.com or wherever we're currently pretending to be legit.",
    "Connect wallet, approve pop-ups, hope for the best.",
    "Buy $BROKE. Don't overthink it.",
    "Tweet 'I just went $BROKE.'"
  ];

  const faq = [
    {
      q: "Is $BROKE a scam?",
      a: "No. But yes? It's complicated. (It's not a rug, it's more like a yoga mat.)"
    },
    {
      q: "When moon?",
      a: "We are the crater... bring snacks."
    },
    {
      q: "Is this coin backed by anything?",
      a: "Yes. It's backed by financial trauma and the audacity."
    },
    {
      q: "What chain is this on?",
      a: "Base Mainnet. It's like Ethereum but the EBT version."
    },
    {
      q: "Will I get rich?",
      a: "Rich in spirit for sure, but we're likely not making it out the hood with this one."
    },
    {
      q: "Is this financial advice?",
      a: "This is barely grammar."
    },
    {
      q: "Can I tell my mom I invested in this?",
      a: "Sure. Just don't let her see your MetaMask balance."
    },
    {
      q: "Is this a coin or a cult fashion brand?",
      a: "Both?"
    },
    {
      q: "Is it me, or does the logo lowkey look like...?",
      a: "Don't finish that sentence."
    }
  ];

  return (
    <section id="whitepaper" className="py-20 bg-paper relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Responsive Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:flex justify-center items-center space-x-8 ml-64">
            <img
              src="/images/whitepaper-header.png"
              alt="WHITEPAPER"
              className="h-32 sm:h-40 lg:h-48 object-contain"
            />
            <img
              src="/images/wip-stickynote.png"
              alt="WIP?"
              className="h-48 sm:h-56 lg:h-64 object-contain"
            />
          </div>
          
          {/* Mobile/Tablet Layout - Stacked vertically */}
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <img
              src="/images/whitepaper-header.png"
              alt="WHITEPAPER"
              className="h-24 sm:h-32 object-contain"
            />
            <img
              src="/images/wip-stickynote.png"
              alt="WIP?"
              className="h-32 sm:h-40 object-contain"
            />
          </div>
        </motion.div>

        {/* Introduction and Mission Statement - Vertical Stacking */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">INTRODUCTION</h3>
            <p className="font-mono text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
              So you're broke. Welcome. This is the inevitable outcome of financial despair and delusional optimism.
            </p>
            
            {/* Mission Statement - Subsection of Introduction */}
            <div className="ml-4 sm:ml-6 border-l-2 border-black pl-4 sm:pl-6">
              <h4 className="font-mono text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">MISSION STATEMENT?</h4>
              <p className="font-mono text-base sm:text-lg font-medium text-black mb-3 sm:mb-4">
                We didn't choose the broke life; it chose us.
              </p>
              <p className="font-mono text-base sm:text-lg font-medium text-black italic mb-2">
                "You have to be broke before you can be rich."
              </p>
              <p className="font-mono text-base sm:text-lg font-medium text-black italic">
                - Grant Cardone, allegedly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Content - Single Column */}
        <div className="space-y-8 sm:space-y-12">
          {/* What is $BROKE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">WHAT IS $BROKE?</h3>
            <p className="font-mono text-base sm:text-lg font-medium text-black">
              A meme, a movement, a minor financial decision with major emotional fallout... It exists solely to plunge further into collective wobbling.
            </p>
          </motion.div>

          {/* BROKENOMICS Deep Dive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">BROKENOMICS DEEP DIVE</h3>
            <p className="font-mono text-base sm:text-lg font-medium text-black mb-6 sm:mb-8">
              $BROKE operates on a frictionless delusion protocol with a fixed supply of 1 billion tokens. It feels like too much but also not enough.
            </p>
            
            {/* Distribution - Subsection of BROKENOMICS DEEP DIVE */}
            <div className="ml-4 sm:ml-6 pl-4 sm:pl-6">
              <h4 className="font-mono text-lg sm:text-xl font-semibold text-black mb-4 sm:mb-6">DISTRIBUTION</h4>
              <div className="space-y-3 sm:space-y-4">
                {distribution.map((item, index) => (
                  <div key={index} className="border-l-4 border-black pl-3 sm:pl-4">
                    <div className="flex items-start space-x-2">
                      <span className="font-mono text-base sm:text-lg font-semibold text-black">{item.percentage}</span>
                      <span className="font-mono text-base sm:text-lg font-semibold text-black">-</span>
                      <span className="font-mono text-base sm:text-lg font-semibold text-black">{item.title}</span>
                    </div>
                    <p className="font-mono text-sm sm:text-base font-medium text-black ml-4 sm:ml-6 mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-mono text-sm sm:text-base font-medium text-black mt-4 sm:mt-6">
                Estimated 20M $BROKE currently floating in claim-contract limbo. We're calling it Broke Stimmy Phase 2.
              </p>
            </div>
          </motion.div>

          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xl sm:text-2xl font-semibold text-black mb-6 sm:mb-8">ROADMAP? LMAO OK, FINE</h3>
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-black"></div>
              
              <div className="space-y-6 sm:space-y-8">
                {roadmap.map((phase, index) => (
                  <div key={phase.quarter} className="relative flex items-start">
                    {/* Content */}
                    <div className="ml-8 sm:ml-12 flex-1">
                      <h4 className="font-mono text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4">
                        {phase.quarter}
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="font-mono text-sm sm:text-base font-medium text-black flex items-start space-x-2">
                            <span className="text-black mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* How to Buy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">HOW TO BUY</h3>
            <p className="font-mono text-sm sm:text-base font-medium text-black mb-4 sm:mb-6">
              This isn't financial advice, and we're not financial advisors (unless... you wanted us to be?)
            </p>
            <ol className="space-y-2 sm:space-y-3">
              {howToBuy.map((step, index) => (
                <li key={index} className="font-mono text-sm sm:text-base font-medium text-black flex items-start space-x-3">
                  <span className="font-mono text-sm sm:text-base font-semibold text-black">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="font-mono text-sm sm:text-base font-medium text-black mt-4 sm:mt-6">
              Congrats. You're part of the community now. (P.S. There's no help coming.)
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6">
              FAQ (FREQUENTLY AVOIDED QUESTIONS)
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {faq.map((item, index) => (
                <div key={index}>
                  <h4 className="font-mono text-base sm:text-lg font-semibold text-black mb-1 sm:mb-2">
                    Q: {item.q}
                  </h4>
                  <p className="font-mono text-sm sm:text-base font-medium text-black">A: {item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section - Responsive Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          {/* Desktop Layout - Overlapping */}
          <div className="hidden lg:flex justify-center relative">
            <div className="relative inline-block">
              <img
                src="/images/download-cta.png"
                alt="DOWNLOAD THE FULL WHITEPAPER PDF"
                className="w-full max-w-xl object-contain"
              />
              <div className="absolute -top-32 -right-72">
                <img
                  src="/images/telegram-sticker.png"
                  alt="FREE ENTRY BROKECOIN BILLIONAIRES TELEGRAM GROUP"
                  className="w-96 h-96 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile/Tablet Layout - Stacked vertically */}
          <div className="lg:hidden flex flex-col items-center justify-center space-y-4">
            <img
              src="/images/download-cta.png"
              alt="DOWNLOAD THE FULL WHITEPAPER PDF"
              className="max-w-md object-contain"
            />
            <img
              src="/images/telegram-sticker.png"
              alt="FREE ENTRY BROKECOIN BILLIONAIRES TELEGRAM GROUP"
              className="w-64 h-64 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whitepaper; 