import { motion } from 'framer-motion';

const BrokeBoard = () => {
  const stats = [
    {
      label: "Market Cap",
      value: "$ -42.69",
      icon: null
    },
    {
      label: "Holders",
      value: "1.5",
      icon: null
    },
    {
      label: "Volume (24h)",
      value: "0.00 BROKE",
      icon: null
    },
    {
      label: "Liquidity Locked",
      value: "Emotionally.",
      icon: null
    }
  ];

  return (
    <section id="broke-board" className="bg-paper border-t-2 border-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-newsreader text-4xl md:text-6xl font-bold text-charcoal mb-4">
            BROKEBOARD™
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-2">
                {stat.icon && <stat.icon className="w-8 h-8 mx-auto text-charcoal mb-2" />}
              </div>
              <h3 className="font-inter text-sm font-medium text-dust mb-1 uppercase tracking-wider">
                {stat.label}
              </h3>
              <p className="font-inter text-2xl md:text-3xl font-semibold text-charcoal">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-inter text-sm font-medium text-dust">
            Accurate as of vibes.
          </p>
        </motion.div>
      </div>

      {/* Shorter bottom border - positioned absolutely */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-charcoal"></div>
    </section>
  );
};

export default BrokeBoard; 