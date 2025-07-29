import { motion } from 'framer-motion';
import { Download, AlertTriangle } from 'lucide-react';

const Whitepaper = () => {
  const roadmap = [
    {
      quarter: "Q1 - SOFT DELUSION LAUNCH (CURRENT PHASE)",
      items: [
        "$BROKE officially launched (accidentally, but on purpose though)",
        "Whitepaper released unfinished",
        "Dev wallet still hasn't figured out how to lock liquidity"
      ]
    },
    {
      quarter: "Q2 - STIMMY SZN",
      items: [
        "Airdrop 'campaign' begins",
        "Launch $BROKE merch line: 1 hoodie, 0 inventory",
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
    <section id="whitepaper" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">WHITEPAPER</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="bg-yellow-200 text-charcoal px-3 py-1 font-mono text-sm">WIP?</span>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-bebas text-2xl tracking-wider text-charcoal mb-4">INTRODUCTION</h3>
          <p className="body-text mb-4">
            So you're broke. Welcome. This is the inevitable outcome of financial despair and delusional optimism.
          </p>
          <div className="bg-paper border-l-4 border-broke-600 p-4 mb-4">
            <p className="body-text italic">
              "You have to be broke before you can be rich." - Grant Cardone, allegedly.
            </p>
          </div>
        </motion.div>

        {/* What is $BROKE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-bebas text-2xl tracking-wider text-charcoal mb-4">WHAT IS $BROKE?</h3>
          <p className="body-text">
            A meme, a movement, a minor financial decision with major emotional fallout... It exists solely to plunge further into collective wobbling.
          </p>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-bebas text-2xl tracking-wider text-charcoal mb-4">ROADMAP? LMAO OK, FINE</h3>
          <p className="body-text mb-6">Let's pretend this is going somewhere:</p>
          
          <div className="space-y-8">
            {roadmap.map((phase, index) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-paper border-2 border-charcoal p-6"
              >
                <h4 className="font-bebas text-lg tracking-wider text-broke-600 mb-4">
                  {phase.quarter}
                </h4>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="body-text flex items-start space-x-2">
                      <span className="text-broke-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-bebas text-2xl tracking-wider text-charcoal mb-4">
            FAQ (FREQUENTLY AVOIDED QUESTIONS)
          </h3>
          <p className="body-text mb-6">Because someone in the group chat is definitely gonna ask...</p>
          
          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-paper border-2 border-charcoal p-4"
              >
                <h4 className="font-bebas text-lg tracking-wider text-charcoal mb-2">
                  Q: {item.q}
                </h4>
                <p className="body-text">A: {item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-paper border-2 border-charcoal p-8 torn-edge">
            <h3 className="font-bebas text-2xl tracking-wider text-charcoal mb-4">
              DOWNLOAD THE FULL WHITEPAPER PDF
            </h3>
            <p className="body-text mb-6">(52MB, mostly memes)</p>
            <a 
              href="/brokecoin-whitepaper.pdf" 
              download
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whitepaper; 