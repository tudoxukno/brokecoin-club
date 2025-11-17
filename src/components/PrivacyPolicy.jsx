import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <section className="py-20 bg-paper relative overflow-hidden">
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
            PRIVACY POLICY
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-charcoal font-medium">
            How we handle your data (spoiler: we barely collect any)
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
              YOUR PRIVACY MATTERS TO US
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              This Privacy Policy describes how BROKECOIN ("we," "us," or "our") collects, uses, 
              and shares your personal information when you visit our website or use our services.
            </p>
            <p className="font-inter text-base lg:text-lg text-charcoal">
              <strong>TL;DR:</strong> We don't want your data, we just want you to be broke with us.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              INFORMATION WE COLLECT
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-2">
                  Information You Provide
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal mb-2">
                  When you interact with our website, you may provide us with:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Wallet addresses (when connecting to claim tokens)
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Social media handles (if you choose to share)
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Communication preferences
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-2">
                  Automatically Collected Information
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal mb-2">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    IP address and general location
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Browser type and version
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Operating system
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Pages visited and time spent
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Referring website
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              HOW WE USE YOUR INFORMATION
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Provide and maintain our services
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Process token claims and transactions
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Improve our website and user experience
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Communicate with you about updates and news
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Ensure compliance with legal obligations
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                Protect against fraud and abuse
              </li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              INFORMATION SHARING
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Service Providers:</strong> We may share information with trusted third-party 
                service providers who assist us in operating our website and providing services.
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Legal Requirements:</strong> We may disclose information if required by law 
                or to protect our rights and safety.
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Business Transfers:</strong> In the event of a merger or acquisition, 
                your information may be transferred to the new entity.
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>With Your Consent:</strong> We may share information with your explicit consent.
              </li>
            </ul>
          </div>

          {/* Cookies and Tracking */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              COOKIES AND TRACKING TECHNOLOGIES
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Essential Cookies:</strong> Required for basic website functionality
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Preference Cookies:</strong> Remember your settings and preferences
              </li>
            </ul>
            <p className="font-inter text-base lg:text-lg text-charcoal mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              DATA SECURITY
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              YOUR RIGHTS
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Access:</strong> Request a copy of your personal information
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Correction:</strong> Request correction of inaccurate information
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Deletion:</strong> Request deletion of your personal information
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Portability:</strong> Request transfer of your data to another service
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Objection:</strong> Object to processing of your personal information
              </li>
            </ul>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              CHILDREN'S PRIVACY
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you are a parent or guardian 
              and believe your child has provided us with personal information, please contact us.
            </p>
          </div>

          {/* International Transfers */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information in accordance 
              with this Privacy Policy.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              CONTACT US
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us through our social media channels or Telegram group.
            </p>
          </div>

          {/* Final Note */}
          <div className="bg-charcoal bg-opacity-10 p-6 border border-charcoal border-opacity-20">
            <p className="font-inter text-base lg:text-lg text-charcoal italic">
              We're committed to transparency and protecting your privacy. Unlike some crypto projects, 
              we actually care about your data (and your financial well-being, even though we can't 
              give you financial advice).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 