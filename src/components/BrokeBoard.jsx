import { motion } from 'framer-motion';
import { TrendingDown, Users, Activity, Lock } from 'lucide-react';

const BrokeBoard = () => {
  const stats = [
    {
      icon: TrendingDown,
      label: "Market Cap",
      value: "$-42.69",
      description: "We're in the negative, but that's just a state of mind"
    },
    {
      icon: Users,
      label: "Holders",
      value: "1.5",
      description: "One person and their emotional support wallet"
    },
    {
      icon: Activity,
      label: "Volume (24h)",
      value: "0.00 BROKE",
      description: "Trading is just a social construct anyway"
    },
    {
      icon: Lock,
      label: "Liquidity Locked",
      value: "Emotionally.",
      description: "Our feelings are locked in a vault of despair"
    }
  ];

  return (
    <section id="broke-board" className="py-20 bg-white border-t-2 border-b-2 border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">BROKEBOARD™</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-paper border-2 border-charcoal p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-broke-600" />
              </div>
              <h3 className="font-bebas text-lg tracking-wider text-charcoal mb-2">
                {stat.label}
              </h3>
              <div className="text-3xl font-bold text-broke-600 mb-2">
                {stat.value}
              </div>
              <p className="mono-text text-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="mono-text italic">
            Accurate as of vibes. Last updated: whenever we remember to check.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrokeBoard; 