import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrokeBoardTicker = () => {
  const [stats, setStats] = useState({
    marketCap: { value: '$-42.69', isSpinning: false },
    holders: { value: '1.5', isSpinning: false },
    volume: { value: '0.00 BROKE', isSpinning: false },
    liquidity: { value: 'Emotionally.', isSpinning: false }
  });

  const [vibesText, setVibesText] = useState('Accurate as of vibes.');
  const [isVibesSpinning, setIsVibesSpinning] = useState(false);

  // Satirical data arrays
  const marketCapValues = [
    '$-42.69', '$-69.42', '$-420.69', '$-1,337', '$-999', '$-666', 
    '$-1337.42', '$-420.1337', 'ERROR', '∞', '$-0.01', '$-1000',
    'WTF', 'BROKE AF', 'LOL', 'FML', '¯\\_(ツ)_/¯', 'N/A', '404'
  ];

  const holderValues = [
    '1.5', '1.4', '1.3', '1.2', '1.1', '1.0', '0.9', '0.5', '0.1', 
    '0', '-1', '-5', '∞', 'ERROR', '¯\\_(ツ)_/¯',
    'WTF', 'BROKE AF', 'LOL', 'FML', 'N/A', '404', 'DEAD'
  ];

  const volumeValues = [
    '0.00 BROKE', '0.01 BROKE', '0.00 BROKE', '420.69 BROKE', 
    '69.42 BROKE', '0.00 BROKE', 'N/A', '¯\\_(ツ)_/¯', 'ERROR', 
    '0.00 BROKE', '1.337 BROKE', '0.00 BROKE',
    'WTF BROKE', 'BROKE AF', 'LOL BROKE', 'FML BROKE', '404 BROKE', 'DEAD BROKE'
  ];

  const liquidityValues = [
    'Emotionally.', 'Spiritually.', 'Metaphysically.', 'Locked in tears.', 
    'Lost in the void.', '¯\\_(ツ)_/¯', 'ERROR 404: LIQUIDITY NOT FOUND',
    'In the heart.', 'In the soul.', 'In the vibes.', 'Probably locked.',
    'WTF.', 'BROKE AF.', 'LOL.', 'FML.', '404.', 'DEAD.', 'GONE.', 'YEETED.'
  ];

  const vibesValues = [
    'Accurate as of vibes.', 'Accurate as of chaos.', 'Accurate as of tears.',
    'Accurate as of bad decisions.', 'Accurate as of 3am thoughts.',
    'Accurate as of existential crisis.', 'Accurate as of pure vibes.',
    'Accurate as of vibes (maybe).', 'Accurate as of vibes (not really).',
    'Accurate as of vibes (source: trust me bro).', '¯\\_(ツ)_/¯',
    'ERROR: VIBES NOT FOUND', 'Accurate as of vibes (probably not).'
  ];

  // Slot machine spin effect
  const spinValue = (values, setter, key) => {
    setter(prev => ({ ...prev, [key]: { ...prev[key], isSpinning: true } }));
    
    let spinCount = 0;
    const maxSpins = 15 + Math.floor(Math.random() * 10); // 15-25 spins
    const spinInterval = setInterval(() => {
      const randomValue = values[Math.floor(Math.random() * values.length)];
      setter(prev => ({ 
        ...prev, 
        [key]: { value: randomValue, isSpinning: true } 
      }));
      
      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        const finalValue = values[Math.floor(Math.random() * values.length)];
        setter(prev => ({ 
          ...prev, 
          [key]: { value: finalValue, isSpinning: false } 
        }));
      }
    }, 50 + Math.random() * 100); // 50-150ms between spins
  };

  // Spin vibes text
  const spinVibes = () => {
    setIsVibesSpinning(true);
    let spinCount = 0;
    const maxSpins = 10 + Math.floor(Math.random() * 5);
    const spinInterval = setInterval(() => {
      const randomVibe = vibesValues[Math.floor(Math.random() * vibesValues.length)];
      setVibesText(randomVibe);
      
      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        const finalVibe = vibesValues[Math.floor(Math.random() * vibesValues.length)];
        setVibesText(finalVibe);
        setIsVibesSpinning(false);
      }
    }, 80 + Math.random() * 120);
  };

  // Auto-update stats - one at a time only
  useEffect(() => {
    let isUpdating = false;
    
    const updateStats = () => {
      if (isUpdating) return; // Prevent overlapping updates
      
      const randomDelay = 4000 + Math.random() * 4000; // 4-8 seconds between updates
      
      setTimeout(() => {
        isUpdating = true;
        
        // Randomly choose which stat to update
        const statKeys = ['marketCap', 'holders', 'volume', 'liquidity'];
        const randomStat = statKeys[Math.floor(Math.random() * statKeys.length)];
        
        switch (randomStat) {
          case 'marketCap':
            spinValue(marketCapValues, setStats, 'marketCap');
            break;
          case 'holders':
            spinValue(holderValues, setStats, 'holders');
            break;
          case 'volume':
            spinValue(volumeValues, setStats, 'volume');
            break;
          case 'liquidity':
            spinValue(liquidityValues, setStats, 'liquidity');
            break;
        }
        
        // Occasionally update vibes text (separate from stat updates)
        if (Math.random() < 0.15) { // 15% chance, even less frequent
          setTimeout(() => {
            if (!isUpdating) { // Only if no stat is currently updating
              spinVibes();
            }
          }, 1500); // Longer delay for vibes
        }
        
        // Reset flag after animation completes
        setTimeout(() => {
          isUpdating = false;
          updateStats(); // Schedule next update
        }, 2500); // Wait for spin animation to complete
        
      }, randomDelay);
    };
    
    updateStats();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 2xl:grid-cols-4 gap-8 mb-6">
        {/* Market Cap */}
        <div className="text-left">
          <h3 className="font-inter text-sm font-medium text-dust mb-2 uppercase tracking-wider">
            Market Cap
          </h3>
          <div className="h-12 lg:h-16 xl:h-20 flex items-center">
            <motion.p 
              key={`marketCap-${stats.marketCap.value}`}
              className={`font-inter text-xl lg:text-2xl xl:text-3xl font-semibold whitespace-nowrap ${
                stats.marketCap.isSpinning ? 'text-red-500' : 'text-charcoal'
              }`}
              animate={stats.marketCap.isSpinning ? { 
                scale: [1, 1.05, 1],
                filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
              } : {}}
              transition={{ duration: 0.2, repeat: stats.marketCap.isSpinning ? Infinity : 0 }}
            >
              {stats.marketCap.value}
            </motion.p>
          </div>
        </div>

        {/* Holders */}
        <div className="text-left">
          <h3 className="font-inter text-sm font-medium text-dust mb-2 uppercase tracking-wider">
            Holders
          </h3>
          <div className="h-12 lg:h-16 xl:h-20 flex items-center">
            <motion.p 
              key={`holders-${stats.holders.value}`}
              className={`font-inter text-xl lg:text-2xl xl:text-3xl font-semibold whitespace-nowrap ${
                stats.holders.isSpinning ? 'text-red-500' : 'text-charcoal'
              }`}
              animate={stats.holders.isSpinning ? { 
                scale: [1, 1.05, 1],
                filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
              } : {}}
              transition={{ duration: 0.2, repeat: stats.holders.isSpinning ? Infinity : 0 }}
            >
              {stats.holders.value}
            </motion.p>
          </div>
        </div>

        {/* Volume */}
        <div className="text-left">
          <h3 className="font-inter text-sm font-medium text-dust mb-2 uppercase tracking-wider">
            Volume (24h)
          </h3>
          <div className="h-12 lg:h-16 xl:h-20 flex items-center">
            <motion.p 
              key={`volume-${stats.volume.value}`}
              className={`font-inter text-xl lg:text-2xl xl:text-3xl font-semibold whitespace-nowrap ${
                stats.volume.isSpinning ? 'text-red-500' : 'text-charcoal'
              }`}
              animate={stats.volume.isSpinning ? { 
                scale: [1, 1.05, 1],
                filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
              } : {}}
              transition={{ duration: 0.2, repeat: stats.volume.isSpinning ? Infinity : 0 }}
            >
              {stats.volume.value}
            </motion.p>
          </div>
        </div>

        {/* Liquidity */}
        <div className="text-left">
          <h3 className="font-inter text-sm font-medium text-dust mb-2 uppercase tracking-wider">
            Liquidity Locked
          </h3>
          <div className="h-12 lg:h-16 xl:h-20 flex items-center">
            <motion.p 
              key={`liquidity-${stats.liquidity.value}`}
              className={`font-inter text-xl lg:text-2xl xl:text-3xl font-semibold whitespace-nowrap ${
                stats.liquidity.isSpinning ? 'text-red-500' : 'text-charcoal'
              }`}
              animate={stats.liquidity.isSpinning ? { 
                scale: [1, 1.05, 1],
                filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
              } : {}}
              transition={{ duration: 0.2, repeat: stats.liquidity.isSpinning ? Infinity : 0 }}
            >
              {stats.liquidity.value}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Vibes Text - Moved back to original position */}
      <motion.p 
        key={`vibes-${vibesText}`}
        className={`font-inter text-base font-medium text-dust mb-8 ${
          isVibesSpinning ? 'text-red-500' : 'text-dust'
        }`}
        animate={isVibesSpinning ? { 
          scale: [1, 1.02, 1],
          filter: ['brightness(1)', 'brightness(1.1)', 'brightness(1)']
        } : {}}
        transition={{ duration: 0.2, repeat: isVibesSpinning ? Infinity : 0 }}
      >
        {vibesText}
      </motion.p>
    </>
  );
};

export default BrokeBoardTicker; 