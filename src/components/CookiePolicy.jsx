import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
            COOKIE POLICY
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-charcoal font-medium">
            Not the edible kind, unfortunately
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
              WHAT ARE COOKIES?
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience and understand how you use our site.
            </p>
            <p className="font-inter text-base lg:text-lg text-charcoal">
              <strong>TL;DR:</strong> Tiny files that remember stuff about your visit. 
              Like a digital Post-it note, but less sticky.
            </p>
          </div>

          {/* Types of Cookies We Use */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              TYPES OF COOKIES WE USE
            </h2>
            <div className="space-y-6">
              <div className="bg-green-600 bg-opacity-10 p-6 border border-green-400 border-opacity-30">
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-3">
                  🍪 ESSENTIAL COOKIES
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal mb-3">
                  These cookies are necessary for the website to function properly. They cannot be disabled.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Session management and security
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Basic website functionality
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Form submission and validation
                  </li>
                </ul>
              </div>

              <div className="bg-blue-600 bg-opacity-10 p-6 border border-blue-400 border-opacity-30">
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-3">
                  📊 ANALYTICS COOKIES
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal mb-3">
                  These cookies help us understand how visitors interact with our website.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Page views and time spent on site
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Traffic sources and user behavior
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Website performance metrics
                  </li>
                </ul>
              </div>

              <div className="bg-purple-600 bg-opacity-10 p-6 border border-purple-400 border-opacity-30">
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-3">
                  ⚙️ PREFERENCE COOKIES
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal mb-3">
                  These cookies remember your settings and preferences for a better experience.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Language and region preferences
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    Theme and display settings
                  </li>
                  <li className="font-inter text-base lg:text-lg text-charcoal">
                    User interface preferences
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              THIRD-PARTY COOKIES
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              We may use third-party services that also place cookies on your device:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Google Analytics:</strong> Website analytics and performance tracking
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Social Media Platforms:</strong> Integration with social media features
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Payment Processors:</strong> Secure payment processing (if applicable)
              </li>
            </ul>
            <p className="font-inter text-base lg:text-lg text-charcoal mt-4">
              These third-party cookies are subject to their respective privacy policies.
            </p>
          </div>

          {/* Cookie Duration */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              HOW LONG COOKIES LAST
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-2">
                  Session Cookies
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal">
                  These cookies are temporary and are deleted when you close your browser.
                </p>
              </div>
              <div>
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-2">
                  Persistent Cookies
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal">
                  These cookies remain on your device for a set period or until you delete them.
                </p>
              </div>
            </div>
          </div>

          {/* Managing Cookies */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              MANAGING YOUR COOKIES
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              You have several options for managing cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Browser Settings:</strong> Most browsers allow you to control cookies through settings
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Cookie Consent:</strong> We'll ask for your consent before setting non-essential cookies
              </li>
              <li className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Opt-Out Tools:</strong> Use browser extensions or tools to manage cookies
              </li>
            </ul>
            <div className="bg-yellow-600 bg-opacity-20 p-4 border border-yellow-400 border-opacity-30 mt-4">
              <p className="font-inter text-base lg:text-lg text-charcoal">
                <strong>Note:</strong> Disabling certain cookies may affect website functionality 
                and your user experience.
              </p>
            </div>
          </div>

          {/* Browser-Specific Instructions */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              BROWSER-SPECIFIC INSTRUCTIONS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-2">
                  Chrome
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal">
                  Settings → Privacy and security → Cookies and other site data
                </p>
              </div>
              <div>
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-2">
                  Firefox
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal">
                  Options → Privacy & Security → Cookies and Site Data
                </p>
              </div>
              <div>
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-2">
                  Safari
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal">
                  Preferences → Privacy → Manage Website Data
                </p>
              </div>
              <div>
                <h3 className="font-bebas text-lg lg:text-xl tracking-wider text-charcoal mb-2">
                  Edge
                </h3>
                <p className="font-inter text-base lg:text-lg text-charcoal">
                  Settings → Cookies and site permissions → Cookies and site data
                </p>
              </div>
            </div>
          </div>

          {/* Updates to Cookie Policy */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              UPDATES TO THIS COOKIE POLICY
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any 
              material changes by posting the updated policy on our website.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-4">
              CONTACT US
            </h2>
            <p className="font-inter text-base lg:text-lg text-charcoal mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us through our social media channels or Telegram group.
            </p>
          </div>

          {/* Final Note */}
          <div className="bg-charcoal bg-opacity-10 p-6 border border-charcoal border-opacity-20">
            <p className="font-inter text-base lg:text-lg text-charcoal italic">
              We use cookies responsibly and only for legitimate purposes. Unlike some websites 
              that track your every move, we're just trying to make your experience better 
              (and maybe understand why you keep refreshing the page at 2 AM).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CookiePolicy; 