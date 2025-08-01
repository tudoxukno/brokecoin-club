import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg1.png"
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
            TERMS OF SERVICE
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-charcoal font-medium">
            The fine print you probably won't read anyway
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

          {/* Introduction */}
          <div>
            <h2 className="font-bebas text-2xl lg:text-3xl tracking-wider text-charcoal mb-4">
              WELCOME TO THE BROKECOIN CLUB
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              By accessing or using this website, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access the service.
            </p>
            <p className="font-inter text-base lg:text-lg text-charcoal">
              <strong>TL;DR:</strong> We're not responsible for your financial decisions, 
              and this is definitely not financial advice.
            </p>
          </div>

          {/* Definitions */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              DEFINITIONS
            </h2>
            <div className="space-y-3">
              <p className="font-inter text-base lg:text-lg text-charcoal">
                <strong>"Service"</strong> refers to the BROKECOIN website and related services.
              </p>
              <p className="font-inter text-base lg:text-lg text-charcoal">
                <strong>"User"</strong> refers to you, the person accessing this website.
              </p>
              <p className="font-inter text-base lg:text-lg text-charcoal">
                <strong>"$BROKE"</strong> refers to the BROKECOIN token on Base Mainnet.
              </p>
              <p className="font-inter text-base lg:text-lg text-charcoal">
                <strong>"U3 Labs"</strong> refers to the company that owns BROKECOIN.
              </p>
            </div>
          </div>

          {/* Use License */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              USE LICENSE
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              Permission is granted to temporarily access the materials on BROKECOIN's website 
              for personal, non-commercial transitory viewing only.
            </p>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Modify or copy the materials
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Use the materials for any commercial purpose
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Attempt to reverse engineer any software on the website
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Remove any copyright or other proprietary notations
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              DISCLAIMER
            </h2>
            <div className="bg-red-600 bg-opacity-20 p-6 border border-red-400 border-opacity-30">
              <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
                <strong>IMPORTANT:</strong> The materials on BROKECOIN's website are provided on an 'as is' basis. 
                BROKECOIN makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other 
                violation of rights.
              </p>
              <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
                <strong>CRYPTO RISK DISCLOSURE:</strong> Cryptocurrency investments are highly speculative 
                and involve substantial risk of loss. You should only invest what you can afford to lose. 
                Past performance does not guarantee future results.
              </p>
              <p className="font-inter text-base lg:text-lg text-charcoal">
                <strong>NOT FINANCIAL ADVICE:</strong> Nothing on this website constitutes professional 
                and/or financial advice. All content is for informational purposes only.
              </p>
            </div>
          </div>

          {/* Limitations */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              LIMITATIONS
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              In no event shall BROKECOIN or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or 
              inability to use the materials on BROKECOIN's website, even if BROKECOIN or a BROKECOIN authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          {/* Accuracy of Materials */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              ACCURACY OF MATERIALS
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              The materials appearing on BROKECOIN's website could include technical, typographical, 
              or photographic errors. BROKECOIN does not warrant that any of the materials on its website 
              are accurate, complete, or current. BROKECOIN may make changes to the materials contained 
              on its website at any time without notice.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              LINKS
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              BROKECOIN has not reviewed all of the sites linked to its website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply 
              endorsement by BROKECOIN of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          {/* Modifications */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              MODIFICATIONS
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              BROKECOIN may revise these terms of service for its website at any time without notice. 
              By using this website you are agreeing to be bound by the then current version of these 
              Terms of Service.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              GOVERNING LAW
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              These terms and conditions are governed by and construed in accordance with the laws 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              CONTACT INFORMATION
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              If you have any questions about these Terms of Service, please contact us through our 
              social media channels or Telegram group.
            </p>
          </div>

          {/* Final Note */}
          <div className="bg-charcoal bg-opacity-10 p-6 border border-charcoal border-opacity-20">
            <p className="font-inter text-base lg:text-lg text-charcoal italic">
              Remember: We're all in this together. Stay broke, stay humble, and never invest more 
              than you can afford to lose. This is not financial advice - it's just common sense 
              (which we all seem to lack when it comes to crypto).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService; 