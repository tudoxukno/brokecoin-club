import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
// import { useContract, useContractRead, useContractWrite } from '@thirdweb-dev/react';
// import { ethers } from 'ethers';
import { AlertTriangle } from 'lucide-react';

const defiantMessages = [
  "They can't stop us",
  "Too broke to fail, gang",
  "HODL or die trying",
  "Diamond hands forever",
  "The revolution is broke",
  "We all in this together",
  "Broke but not broken",
  "This is the way",
  "Ain't no cap in this game",
  "We eating regardless",
  "Broke boys stay winning",
  "This ain't financial advice",
  "We built different",
  "Stacking while they sleeping",
  "No cap, all facts",
  "We don't fold under pressure",
  "Broke but we balling",
  "They sleeping on us",
  "We the real ones",
  "This is our time",
  "#RamenNoodleGang",
  "Get your $BROKE up, FN",
  "This is it Chat no cap",
  "Can't stop us twin, fr",
  "Broke shit, no joke shit",
  "Too broke to lose, gang",
  "Gang stay stacking",
  "We built different, chat",
  "We eating good, twin",
  "We the real ones, gang",
  "This ain't no cap, chat",
  "We don't fold, twin",
  "Too broke to fail, gang",
  "We balling regardless, chat",
  "Can't stop us twin, fr",
  "Gang stay winning",
  "We the revolution, chat",
  "We stacking tokens, twin",
  "We built this, gang",
  "We going to the moon, chat",
  "No cap, we up twin",
  "Gang, this real shit",
  "Chat, we too broke to fold",
  "Twin, we eating fr",
  "Gang stay HODLing",
  "Chat, we built this different",
  "Twin, we the real ones",
  "Gang, no cap we winning",
  "Chat, we stacking fr",
  "Twin, we balling regardless",
  "Getting to the BROKE billions",
  "OML we BROKE gang",
  "Used Nissan Altima type shit",
  "BROKECOIN BILLIONAIRES taking over for the '99 and the 2000",
  "We want Stimmy",
  "Give us stimmy",
  "Stimmy Stimmy Stimmy Turner",
  "We need that stimmy check",
  "Stimmy hitting different, gang",
  "BROKE billions or nothing",
  "Altima energy, we up",
  "Taking over for the 2000s, chat",
  "BROKECOIN billionaires only",
  "We want that stimmy, twin",
  "Stimmy season, we eating",
  "BROKE billions, no cap"
];

const ClaimSection = () => {
  const [claimAmount, setClaimAmount] = useState(25000);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimStatus, setClaimStatus] = useState(null);
  
  // Terminal animation state
  const [isInView, setIsInView] = useState(false);
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [displayedText3, setDisplayedText3] = useState('');
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  // Rotating message state
  const [rotatingMessage, setRotatingMessage] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  
  // Dots animation state
  const [dotsCount, setDotsCount] = useState(0);
  
  const line1 = '> booting up BROKE.exe';
  const line2 = '> wow this machine is old';
  const line3 = '> loading tokens';
  
  // Reset animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            // Reset all states
            setDisplayedText1('');
            setDisplayedText2('');
            setDisplayedText3('');
            setShowLine2(false);
            setShowLine3(false);
            setShowButton(false);
            setRotatingMessage('');
            setCurrentMessageIndex(0);
            setIsBackspacing(false);
            setDotsCount(0);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('claim-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isInView]);
  
  // Typewriter effect for line 1
  useEffect(() => {
    if (!isInView) return;
    
    if (displayedText1.length < line1.length) {
      const timer = setTimeout(() => {
        setDisplayedText1(line1.slice(0, displayedText1.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Wait 2 seconds before showing line 2
      setTimeout(() => setShowLine2(true), 2000);
    }
  }, [isInView, displayedText1]);
  
  // Typewriter effect for line 2
  useEffect(() => {
    if (!showLine2) return;
    
    if (displayedText2.length < line2.length) {
      const timer = setTimeout(() => {
        setDisplayedText2(line2.slice(0, displayedText2.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Wait 2 seconds before showing line 3
      setTimeout(() => setShowLine3(true), 2000);
    }
  }, [showLine2, displayedText2]);
  
  // Typewriter effect for line 3
  useEffect(() => {
    if (!showLine3) return;
    
    if (displayedText3.length < line3.length) {
      const timer = setTimeout(() => {
        setDisplayedText3(line3.slice(0, displayedText3.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Start animating dots after line 3 finishes
      setDotsCount(0);
    }
  }, [showLine3, displayedText3]);
  
  // Animate dots appearing sequentially
  useEffect(() => {
    if (displayedText3.length === line3.length && dotsCount < 3) {
      const timer = setTimeout(() => {
        setDotsCount(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else if (dotsCount === 3) {
      // Wait 2 seconds after all dots appear, then show button
      setTimeout(() => setShowButton(true), 2000);
    }
  }, [displayedText3.length, line3.length, dotsCount]);
  
  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);
  
  // Rotating message animation (starts after button appears)
  useEffect(() => {
    if (!showButton) return;
    
    const currentMessage = defiantMessages[currentMessageIndex];
    
    if (isBackspacing) {
      // Backspacing
      if (rotatingMessage.length > 0) {
        const timer = setTimeout(() => {
          setRotatingMessage(prev => prev.slice(0, -1));
        }, 30);
        return () => clearTimeout(timer);
      } else {
        // Finished backspacing, move to next message
        setIsBackspacing(false);
        setCurrentMessageIndex(prev => (prev + 1) % defiantMessages.length);
      }
    } else {
      // Typing
      if (rotatingMessage.length < currentMessage.length) {
        const timer = setTimeout(() => {
          setRotatingMessage(currentMessage.slice(0, rotatingMessage.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait 3 seconds then start backspacing
        const timer = setTimeout(() => {
          setIsBackspacing(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [showButton, rotatingMessage, currentMessageIndex, isBackspacing]);
  
  // Get wallet address
  const address = useAddress();
  const contractAddress = "0x27b57Aa02BB1Ea243e5B44a41890246807Cda135"; // Replace with your actual contract address
  
  // const { contract } = useContract(contractAddress);
  
  // Read contract data - temporarily disabled
  // const { data: claimableAmount } = useContractRead(contract, "claimableAmount", [address]);
  // const { data: hasClaimed } = useContractRead(contract, "hasClaimed", [address]);
  
  // Write contract functions - temporarily disabled
  // const { mutateAsync: claim } = useContractWrite(contract, "claim");

  // Mock data for now
  const claimableAmount = "25000000000000000000000"; // 25,000 tokens in wei
  const hasClaimed = false;

  const handleClaim = async () => {
    if (!address) {
      setClaimStatus({ type: 'error', message: 'Please connect your wallet first' });
      return;
    }

    if (hasClaimed) {
      setClaimStatus({ type: 'error', message: 'You have already claimed your BROKE tokens' });
      return;
    }

    setIsClaiming(true);
    setClaimStatus(null);

    try {
      // Temporarily disabled actual claim
      // await claim({ args: [claimAmount] });
      
      // Mock successful claim
      setTimeout(() => {
        setClaimStatus({ type: 'success', message: 'Successfully claimed 25,000 BROKE tokens!' });
        setIsClaiming(false);
      }, 2000);
      
    } catch (error) {
      console.error('Claim error:', error);
      setClaimStatus({ 
        type: 'error', 
        message: error.message || 'Failed to claim tokens. Please try again.' 
      });
      setIsClaiming(false);
    }
  };

  const formatNumber = (num) => {
    if (!num) return '0';
    // Temporarily disabled ethers
    // return ethers.utils.formatUnits(num, 18);
    return '25,000'; // Mock value
  };

  return (
    <section id="claim-section" className="py-16 bg-paper relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-newsreader text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-6">
            CLAIM YOUR BROKE
          </h2>
          <p className="font-inter text-xl lg:text-2xl text-charcoal font-medium">
            Join the broke revolution. Claim your 25,000 BROKE tokens and embrace the chaos.
          </p>
        </motion.div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center -mt-2 lg:-mt-6 w-full">
          {/* Left side - Claim Info image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/claim-details.png"
              alt="Claim details overview"
              className="w-full max-w-xl mx-auto h-auto object-contain mt-8 lg:mt-20"
            />
          </motion.div>

          {/* Right side - Claim Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative">
                <img 
                  src="/images/CRT-frame.png" 
                  alt="CRT Monitor" 
                  className="w-full max-w-5xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] h-auto scale-150"
                />
                
                {/* Terminal Text - Positioned inside the screen */}
                <div 
                  className="absolute"
                  style={{
                    top: '20%',
                    left: '12%',
                    right: '12%',
                    bottom: '25%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingTop: '2%'
                  }}
                >
                  <div className="w-full">
                    <div className="space-y-3 mb-2" style={{ color: '#0B8A04', fontFamily: 'IBM Plex Mono', fontWeight: 500 }}>
                      <p className="text-lg lg:text-xl xl:text-2xl">
                        {displayedText1}
                      </p>
                      {showLine2 && (
                        <p className="text-lg lg:text-xl xl:text-2xl">
                          {displayedText2}
                        </p>
                      )}
                      {showLine3 && (
                        <p className="text-lg lg:text-xl xl:text-2xl">
                          {displayedText3}
                          {dotsCount > 0 && <span> .</span>}
                          {dotsCount > 1 && <span> .</span>}
                          {dotsCount > 2 && <span> .</span>}
                        </p>
                      )}
                    </div>
                    
                    {/* Connect CTA Button - CRT Style */}
                    {showButton && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center w-full mt-12"
                      >
                        <div className="relative mb-6">
                          <button
                            onClick={() => {
                              const hiddenButton = document.querySelector('.connect-wallet-hidden-claim button');
                              if (hiddenButton) {
                                hiddenButton.click();
                              }
                            }}
                            className="crt-button"
                            style={{
                              fontFamily: 'IBM Plex Mono',
                              fontWeight: 500,
                              color: '#0B8A04',
                              backgroundColor: 'transparent',
                              border: '2px solid #0B8A04',
                              padding: '12px 32px',
                              fontSize: '1.25rem',
                              letterSpacing: '0.1em',
                              cursor: 'pointer',
                              position: 'relative',
                              textTransform: 'uppercase',
                              boxShadow: '0 0 10px rgba(11, 138, 4, 0.3), inset 0 0 10px rgba(11, 138, 4, 0.1)',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.boxShadow = '0 0 20px rgba(11, 138, 4, 0.6), inset 0 0 15px rgba(11, 138, 4, 0.2)';
                              e.target.style.borderColor = '#0BFF04';
                              e.target.style.color = '#0BFF04';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.boxShadow = '0 0 10px rgba(11, 138, 4, 0.3), inset 0 0 10px rgba(11, 138, 4, 0.1)';
                              e.target.style.borderColor = '#0B8A04';
                              e.target.style.color = '#0B8A04';
                            }}
                          >
                            &gt; CONNECT
                          </button>
                          <div className="connect-wallet-hidden-claim absolute opacity-0 pointer-events-none">
                            <ConnectWallet
                              theme="dark"
                              modalTitle="Connect Wallet to Claim BROKE"
                              modalSize="wide"
                              welcomeScreen={{
                                title: "Welcome to BROKECOIN",
                                subtitle: "Connect your wallet to claim your 25,000 BROKE tokens"
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* Rotating defiant message */}
                        <div 
                          className="text-center relative inline-block"
                          style={{ 
                            color: '#0B8A04', 
                            fontFamily: 'IBM Plex Mono', 
                            fontWeight: 500,
                            fontSize: '1rem',
                            minHeight: '1.5rem'
                          }}
                        >
                          <span>{rotatingMessage}</span>
                          <span 
                            style={{
                              opacity: showCursor ? 1 : 0,
                              transition: 'opacity 0.1s',
                              marginLeft: '2px',
                              display: 'inline-block',
                              width: '0.5em'
                            }}
                          >
                            |
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimSection; 