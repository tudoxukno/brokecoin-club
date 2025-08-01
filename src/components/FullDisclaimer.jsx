import { motion } from 'framer-motion';

const FullDisclaimer = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg4.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="font-newsreader text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-6">
            FULL DISCLAIMER
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-charcoal font-medium">
            The comprehensive legal protection we all need
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Last Updated */}
          <div className="bg-yellow-600 bg-opacity-20 p-4 border border-yellow-400 border-opacity-30">
            <p className="font-mono text-sm text-charcoal">
              <strong>Last Updated:</strong> January 2025 (maybe)
            </p>
          </div>

          {/* Critical Warning */}
          <div className="bg-red-600 bg-opacity-20 p-8 border-4 border-red-400 border-opacity-30">
            <h2 className="font-bebas text-2xl lg:text-3xl tracking-wider text-red-800 mb-4">
              ⚠️ CRITICAL WARNING ⚠️
            </h2>
            <p className="font-inter text-base lg:text-lg text-red-800 mb-4">
              <strong>READ THIS ENTIRE DISCLAIMER BEFORE PROCEEDING.</strong> By accessing or using 
              BROKECOIN services, you acknowledge that you have read, understood, and agree to be 
              bound by all terms and conditions outlined herein.
            </p>
            <p className="font-inter text-base lg:text-lg text-red-800">
              <strong>IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE OUR SERVICES.</strong>
            </p>
          </div>

          {/* General Disclaimer */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              GENERAL DISCLAIMER
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              The information provided on the BROKECOIN website is for general informational purposes only. 
              While we strive to keep the information up to date and correct, we make no representations 
              or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
              suitability, or availability of the information, products, services, or related graphics 
              contained on the website for any purpose.
            </p>
            <p className="font-inter text-base lg:text-lg text-charcoal">
              Any reliance you place on such information is therefore strictly at your own risk.
            </p>
          </div>

          {/* Financial Disclaimer */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              FINANCIAL DISCLAIMER
            </h2>
            <div className="bg-red-600 bg-opacity-20 p-6 border border-red-400 border-opacity-30">
              <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
                <strong>NOT FINANCIAL ADVICE:</strong> Nothing on this website constitutes professional 
                and/or financial advice. All content is for informational purposes only.
              </p>
              <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
                <strong>CRYPTOCURRENCY RISKS:</strong> Cryptocurrency investments are highly speculative 
                and involve substantial risk of loss. The value of cryptocurrencies can be extremely 
                volatile and may result in significant financial losses.
              </p>
              <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
                <strong>NO GUARANTEES:</strong> Past performance does not guarantee future results. 
                There is no guarantee that any investment will achieve its objectives or that any 
                particular rate of return will be achieved.
              </p>
              <p className="font-inter text-base lg:text-lg text-charcoal">
                <strong>INVESTMENT DECISIONS:</strong> You should only invest what you can afford to lose. 
                Consider consulting with a qualified financial advisor before making any investment decisions.
              </p>
            </div>
          </div>

          {/* Regulatory Disclaimer */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              REGULATORY DISCLAIMER
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              BROKECOIN operates in a rapidly evolving regulatory environment. Cryptocurrency regulations 
              vary significantly by jurisdiction and are subject to change. Users are responsible for 
              understanding and complying with all applicable laws and regulations in their jurisdiction.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Cryptocurrency may be subject to securities, commodities, or other financial regulations
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Tax implications may vary by jurisdiction
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Regulatory requirements may change without notice
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Users are responsible for their own compliance
              </li>
            </ul>
          </div>

          {/* Technology Disclaimer */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              TECHNOLOGY DISCLAIMER
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              BROKECOIN operates on blockchain technology, which involves inherent risks:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Smart Contract Risk:</strong> Smart contracts may contain bugs or vulnerabilities
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Network Risk:</strong> Blockchain networks may experience congestion or failures
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Security Risk:</strong> Digital assets may be subject to theft or loss
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Irreversible Transactions:</strong> Blockchain transactions are typically irreversible
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Technical Complexity:</strong> Blockchain technology is complex and evolving
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              LIMITATION OF LIABILITY
            </h2>
            <div className="bg-red-600 bg-opacity-20 p-6 border border-red-400 border-opacity-30">
              <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> BROKECOIN, U3 Labs, and their 
                respective officers, directors, employees, agents, and affiliates shall not be liable 
                for any direct, indirect, incidental, special, consequential, or punitive damages, 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="font-inter text-base lg:text-lg text-charcoal">
                  Loss of profits, revenue, or data
                </li>
                <li className="font-inter text-base lg:text-lg text-charcoal">
                  Business interruption or loss of business opportunities
                </li>
                <li className="font-inter text-base lg:text-lg text-charcoal">
                  Damages resulting from investment decisions
                </li>
                <li className="font-inter text-base lg:text-lg text-charcoal">
                  Technical failures or security breaches
                </li>
                <li className="font-inter text-base lg:text-lg text-charcoal">
                  Regulatory actions or compliance issues
                </li>
              </ul>
            </div>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              INDEMNIFICATION
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              You agree to indemnify, defend, and hold harmless BROKECOIN, U3 Labs, and their respective 
              officers, directors, employees, agents, and affiliates from and against any and all claims, 
              damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of 
              or relating to your use of our services or violation of these terms.
            </p>
          </div>

          {/* No Warranty */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              NO WARRANTY
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              BROKECOIN services are provided "as is" and "as available" without any warranties of any kind, 
              either express or implied, including but not limited to warranties of merchantability, 
              fitness for a particular purpose, non-infringement, or accuracy.
            </p>
          </div>

          {/* Force Majeure */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              FORCE MAJEURE
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              BROKECOIN shall not be liable for any failure to perform its obligations where such failure 
              is a result of acts of nature, government actions, war, civil disturbance, or other causes 
              beyond our reasonable control.
            </p>
          </div>

          {/* Severability */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              SEVERABILITY
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              If any provision of this disclaimer is found to be unenforceable or invalid, that provision 
              will be limited or eliminated to the minimum extent necessary so that this disclaimer will 
              otherwise remain in full force and effect and enforceable.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              GOVERNING LAW
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              This disclaimer shall be governed by and construed in accordance with applicable laws. 
              Any disputes arising from this disclaimer shall be resolved in accordance with applicable 
              legal procedures.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              CONTACT INFORMATION
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              If you have any questions about this disclaimer, please contact us through our 
              social media channels or Telegram group before using our services.
            </p>
          </div>

          {/* Final Warning */}
          <div className="bg-red-600 bg-opacity-20 p-8 border-4 border-red-400 border-opacity-30">
            <h2 className="font-bebas text-2xl lg:text-3xl tracking-wider text-red-800 mb-4">
              FINAL WARNING
            </h2>
            <p className="font-inter text-base lg:text-lg text-red-800 mb-4">
              <strong>CRYPTOCURRENCY INVESTMENTS ARE INHERENTLY RISKY.</strong> You should only invest 
              what you can afford to lose. The potential for loss is substantial and may exceed your 
              initial investment.
            </p>
            <p className="font-inter text-base lg:text-lg text-red-800">
              <strong>By proceeding, you acknowledge that you understand these risks and accept full 
              responsibility for your investment decisions.</strong>
            </p>
          </div>

          {/* Final Note */}
          <div className="bg-charcoal bg-opacity-10 p-6 border border-charcoal border-opacity-20">
            <p className="font-inter text-base lg:text-lg text-charcoal italic">
              We're all in this together, but we're not responsible for your financial decisions. 
              Stay broke, stay humble, and never invest more than you can afford to lose. 
              This is not financial advice - it's just the harsh reality of crypto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FullDisclaimer; 