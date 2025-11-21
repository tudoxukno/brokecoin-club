import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ConnectWallet, useAddress, useContract, useChain, useSwitchChain, useActiveClaimCondition, useClaimConditions, useClaimerProofs, useTokenBalance } from '@thirdweb-dev/react';
import { Base } from '@thirdweb-dev/chains';
import { AlertTriangle, CheckCircle2, ExternalLink, Loader2 } from 'lucide-react';
import SocialGate from './SocialGate';

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
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimStatus, setClaimStatus] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const [localHasClaimed, setLocalHasClaimed] = useState(false);
  const [hasClaimedFromContract, setHasClaimedFromContract] = useState(false);
  const [isCheckingClaimStatus, setIsCheckingClaimStatus] = useState(false);
  const [socialGateUnlocked, setSocialGateUnlocked] = useState(false);

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
  const securityProtocolText = '> SECURITY PROTOCOL ACTIVATED';

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
  
  // Typewriter effect for line 1 (or security protocol text)
  useEffect(() => {
    if (!isInView) return;
    
    const targetText = address ? securityProtocolText : line1;
    const setDisplayed = setDisplayedText1;
    const displayed = displayedText1;

    if (displayed.length < targetText.length) {
      const timer = setTimeout(() => {
        setDisplayed(targetText.slice(0, displayed.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const isMobile = window.innerWidth < 1024;
      if (isMobile || address) {
        setTimeout(() => setShowButton(true), 1000);
      } else {
        setTimeout(() => setShowLine2(true), 2000);
      }
    }
  }, [isInView, displayedText1, address]);

  // Typewriter effect for line 2 (only on desktop, if not connected)
  useEffect(() => {
    if (!showLine2 || address) return;
    
    if (displayedText2.length < line2.length) {
      const timer = setTimeout(() => {
        setDisplayedText2(line2.slice(0, displayedText2.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowLine3(true), 2000);
    }
  }, [showLine2, displayedText2, address]);
  
  // Typewriter effect for line 3 (only on desktop, if not connected)
  useEffect(() => {
    if (!showLine3 || address) return;
    
    if (displayedText3.length < line3.length) {
      const timer = setTimeout(() => {
        setDisplayedText3(line3.slice(0, displayedText3.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setDotsCount(0);
    }
  }, [showLine3, displayedText3, address]);
  
  // Animate dots appearing sequentially
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const shouldStartDots = (isMobile || address)
      ? (displayedText1.length === (address ? securityProtocolText.length : line1.length) && !showLine2)
      : (displayedText3.length === line3.length);
    
    if (shouldStartDots && dotsCount < 3) {
      const timer = setTimeout(() => {
        setDotsCount(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else if (dotsCount === 3) {
      setTimeout(() => setShowButton(true), 2000);
    }
  }, [displayedText1.length, displayedText3.length, line1.length, line3.length, dotsCount, showLine2, address, securityProtocolText.length]);
  
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
      if (rotatingMessage.length > 0) {
        const timer = setTimeout(() => {
          setRotatingMessage(prev => prev.slice(0, -1));
        }, 30);
        return () => clearTimeout(timer);
      } else {
        setIsBackspacing(false);
        setCurrentMessageIndex(prev => (prev + 1) % defiantMessages.length);
      }
    } else {
      if (rotatingMessage.length < currentMessage.length) {
        const timer = setTimeout(() => {
          setRotatingMessage(currentMessage.slice(0, rotatingMessage.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsBackspacing(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [showButton, rotatingMessage, currentMessageIndex, isBackspacing]);
  
  // Get wallet address and chain info
  const address = useAddress();
  const chain = useChain();
  const switchChain = useSwitchChain();
  const contractAddress = "0x27b57Aa02881Ea243e5B4Aa4189024EBB7Cda135";
  
  // Initialize contract
  const { contract, isLoading: isLoadingContract } = useContract(contractAddress);
  
  // Use Thirdweb DropERC20 hooks
  const { data: activeClaimCondition, isLoading: isLoadingClaimCondition, error: claimConditionError } = useActiveClaimCondition(contract);
  const { data: claimConditions, isLoading: isLoadingConditions } = useClaimConditions(contract);
  const { data: claimerProofs, isLoading: isLoadingProofs } = useClaimerProofs(contract, address || undefined);
  
  // Check user's BROKE balance to see if they've already claimed
  const { data: tokenBalance, isLoading: isLoadingTokenBalance } = useTokenBalance(contract, address);
  
  // Fallback: Try to read claim conditions directly from contract if hooks fail
  const [fallbackClaimCondition, setFallbackClaimCondition] = useState(null);
  
  useEffect(() => {
    const fetchClaimConditionDirectly = async () => {
      if (!contract || activeClaimCondition || isLoadingClaimCondition) return;
      
      try {
        const conditionId = await contract.call("getActiveClaimConditionId", []);
        
        if (conditionId !== undefined && conditionId !== null) {
          const condition = await contract.call("getClaimConditionById", [conditionId]);
          
          if (condition) {
            let maxSupply, claimed, startTime, quantityLimit, merkleRoot, pricePerToken, currency;
            
            if (Array.isArray(condition)) {
              startTime = condition[0]?.toString() || "0";
              maxSupply = condition[1]?.toString() || "0";
              claimed = condition[2]?.toString() || "0";
              quantityLimit = condition[3]?.toString() || "0";
              merkleRoot = condition[4] || "";
              pricePerToken = condition[5]?.toString() || "0";
              currency = condition[6] || "";
            } else {
              startTime = condition.startTimestamp?.toString() || condition.startTime?.toString() || "0";
              maxSupply = condition.maxClaimableSupply?.toString() || "0";
              claimed = condition.supplyClaimed?.toString() || "0";
              quantityLimit = condition.quantityLimitPerWallet?.toString() || condition.maxQuantityPerWallet?.toString() || "0";
              merkleRoot = condition.merkleRoot || "";
              pricePerToken = condition.pricePerToken?.toString() || "0";
              currency = condition.currency || "";
            }
            
            const maxSupplyBig = BigInt(maxSupply || "0");
            const claimedBig = BigInt(claimed || "0");
            const available = maxSupplyBig > claimedBig ? maxSupplyBig - claimedBig : BigInt("0");
            
            let startTimeSeconds = BigInt(startTime || "0");
            if (startTimeSeconds > BigInt("4102444800")) {
              startTimeSeconds = startTimeSeconds / BigInt("1000");
            }
            
            setFallbackClaimCondition({
              startTime: startTimeSeconds.toString(),
              maxClaimableSupply: maxSupply,
              supplyClaimed: claimed,
              quantityLimitPerWallet: quantityLimit,
              merkleRoot: merkleRoot,
              pricePerToken: pricePerToken,
              currency: currency,
              availableSupply: available.toString(),
            });
          }
        }
      } catch (error) {
        console.error("Could not fetch claim condition directly:", error);
      }
    };
    
    if (claimConditionError || (!activeClaimCondition && !isLoadingClaimCondition)) {
      const timer = setTimeout(fetchClaimConditionDirectly, 2000);
      return () => clearTimeout(timer);
    }
  }, [contract, activeClaimCondition, isLoadingClaimCondition, claimConditionError]);
  
  // Use fallback if main hook failed
  const effectiveClaimCondition = activeClaimCondition || fallbackClaimCondition;
  
  // Calculate claimable amount
  const claimableAmount = effectiveClaimCondition?.availableSupply || null;
  
  // Check if user can claim
  const merkleRoot = effectiveClaimCondition?.merkleRoot;
  const isPublicClaim = !merkleRoot || 
    merkleRoot === "" || 
    merkleRoot === "0x0000000000000000000000000000000000000000000000000000000000000000";
  
  const canClaim = effectiveClaimCondition && (
    isPublicClaim || 
    (claimerProofs && claimerProofs.length > 0)
  );

  // Check localStorage for claim status and clear on disconnect
  useEffect(() => {
    if (address) {
      const stored = localStorage.getItem(`claimed_${address.toLowerCase()}`);
      if (stored === 'true') {
        setLocalHasClaimed(true);
      }
      if (tokenBalance && parseFloat(tokenBalance.displayValue) >= 25000) {
        setHasClaimedFromContract(true);
      } else {
        setHasClaimedFromContract(false);
      }
    } else {
      setClaimStatus(null);
      setTxHash(null);
      setLocalHasClaimed(false);
      setHasClaimedFromContract(false);
      setSocialGateUnlocked(false);
    }
  }, [address, tokenBalance]);
  
  // Check if on correct network
  const isCorrectNetwork = chain?.chainId === Base.chainId;

  const handleClaim = async () => {
    if (!address) {
      setClaimStatus({ type: 'error', message: 'Please connect your wallet first' });
      return;
    }

    if (!isCorrectNetwork) {
      try {
        await switchChain(Base.chainId);
        setClaimStatus({ type: 'info', message: 'Please switch to Base network and try again' });
        return;
      } catch (error) {
        setClaimStatus({ type: 'error', message: 'Please switch to Base network in your wallet' });
        return;
      }
    }

    if (localHasClaimed || hasClaimedFromContract) {
      setClaimStatus({ type: 'error', message: 'You have already claimed your BROKE tokens' });
      return;
    }

    if (isLoadingClaimCondition || isLoadingConditions) {
      setClaimStatus({ type: 'info', message: 'Checking claim status...' });
      return;
    }

    if (!effectiveClaimCondition) {
      if (isLoadingClaimCondition || isLoadingContract) {
        setClaimStatus({ type: 'info', message: 'Loading claim conditions...' });
        return;
      }
      setClaimStatus({ type: 'error', message: 'Claim conditions not available. Please refresh and try again.' });
      return;
    }

    const now = Math.floor(Date.now() / 1000);
    const startTimeRaw = effectiveClaimCondition.startTime ? Number(effectiveClaimCondition.startTime) : 0;
    
    let startTime = startTimeRaw;
    if (startTime > 4102444800) {
      startTime = Math.floor(startTime / 1000);
    }
    
    if (startTime > now && startTime > 0) {
      const startDate = new Date(startTime * 1000);
      setClaimStatus({ 
        type: 'error', 
        message: `Claim phase starts on ${startDate.toLocaleDateString()} at ${startDate.toLocaleTimeString()}` 
      });
      return;
    }

    if (!canClaim) {
      setClaimStatus({ type: 'error', message: 'Your wallet is not eligible to claim' });
      return;
    }

    if (!effectiveClaimCondition.availableSupply || effectiveClaimCondition.availableSupply.toString() === '0') {
      setClaimStatus({ type: 'error', message: 'No tokens available to claim' });
      return;
    }

    if (!contract?.erc20) {
      setClaimStatus({ type: 'error', message: 'Contract not ready. Please refresh and try again.' });
      return;
    }

    setIsClaiming(true);
    setClaimStatus(null);
    setTxHash(null);

    try {
      const claimQuantity = '25000';

      const claimPromise = contract.erc20.claimTo(address, claimQuantity);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Claim transaction timed out after 60 seconds.')), 60000)
      );

      const receipt = await Promise.race([claimPromise, timeoutPromise]);
      
      const hash = receipt?.receipt?.transactionHash || receipt?.receipt?.hash || receipt?.transactionHash || receipt?.hash;
      setTxHash(hash);
      
      if (address) {
        localStorage.setItem(`claimed_${address.toLowerCase()}`, 'true');
        setLocalHasClaimed(true);
      }
      
      setClaimStatus({ 
        type: 'success', 
        message: 'Successfully claimed 25,000 BROKE tokens!' 
      });
      
    } catch (error) {
      console.error('Claim error:', error);
      
      let errorMessage = 'Failed to claim tokens. Please try again.';
      
      if (error.message?.includes('user rejected') || error.message?.includes('User denied')) {
        errorMessage = 'Transaction was cancelled';
      } else if (error.message?.includes('insufficient funds') || error.message?.includes('gas')) {
        errorMessage = 'Not enough ETH for gas fees';
      } else if (error.message?.includes('already claimed')) {
        errorMessage = 'You have already claimed your tokens';
        if (address) {
          localStorage.setItem(`claimed_${address.toLowerCase()}`, 'true');
          setLocalHasClaimed(true);
        }
      } else if (error.message?.includes('invalid_union') || error.message?.includes('ZodError')) {
        errorMessage = 'Claim request was invalid. Please refresh the page, reconnect your wallet, and try again.';
      } else if (error.message?.includes('Claim transaction timed out')) {
        errorMessage = 'Claim transaction timed out. Please check your wallet and try again.';
      } else if (error.message?.includes('IPFS gateway') || error.message?.includes('timed out') || error.message?.includes('Request timed out') || error.message?.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please refresh and try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setClaimStatus({ 
        type: 'error', 
        message: errorMessage 
      });
    } finally {
      setIsClaiming(false);
    }
  };

  const getExplorerUrl = (hash) => {
    if (!hash) return null;
    return `https://basescan.org/tx/${hash}`;
  };

  return (
    <section id="claim-section" className="py-16 bg-paper relative overflow-hidden">
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
                style={{ display: 'block' }}
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
                      top: '16%',
                      left: '11%',
                      right: '11%',
                      bottom: '14%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      paddingTop: '2%',
                      paddingBottom: '2%',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="w-full">
                      {/* Show original terminal text OR social gate, not both */}
                      {!address ? (
                        // Original terminal animation when no wallet connected
                        <div className="space-y-3 mb-2" style={{ color: '#0B8A04', fontFamily: 'IBM Plex Mono', fontWeight: 500 }}>
                          <p className="text-lg lg:text-xl xl:text-2xl">
                            {displayedText1}
                          </p>
                          {showLine2 && (
                            <p className="hidden lg:block text-lg lg:text-xl xl:text-2xl">
                              {displayedText2}
                            </p>
                          )}
                          {showLine3 && (
                            <p className="hidden lg:block text-lg lg:text-xl xl:text-2xl">
                              {displayedText3}
                              {dotsCount > 0 && <span> .</span>}
                              {dotsCount > 1 && <span> .</span>}
                              {dotsCount > 2 && <span> .</span>}
                            </p>
                          )}
                        </div>
                      ) : !socialGateUnlocked ? (
                        // Social gate when wallet connected but not unlocked
                        <SocialGate 
                          onUnlock={() => setSocialGateUnlocked(true)}
                          initiallyUnlocked={false}
                        />
                      ) : (
                        // Success state when gate is unlocked
                        <div className="space-y-3 mb-2" style={{ color: '#0B8A04', fontFamily: 'IBM Plex Mono', fontWeight: 500 }}>
                          <p className="text-lg lg:text-xl xl:text-2xl">> CREDENTIALS VERIFIED</p>
                          <p className="text-lg lg:text-xl xl:text-2xl">> ACCESS GRANTED</p>
                          <p className="text-lg lg:text-xl xl:text-2xl">> CLAIM UNLOCKED</p>
                        </div>
                      )}
                      
                      {/* Connect/Claim Button */}
                      {showButton && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="flex flex-col items-center w-full mt-6 mb-2"
                        >
                          {!address ? (
                            <div className="connect-wallet-crt-wrapper">
                              <ConnectWallet
                                theme="dark"
                                modalTitle="Connect Wallet to Claim BROKE"
                                modalSize="wide"
                                welcomeScreen={{
                                  title: "Welcome to BROKECOIN",
                                  subtitle: "Connect your wallet to claim your 25,000 BROKE tokens"
                                }}
                                connectButton={{
                                  label: '> CONNECT',
                                  className: 'crt-connect-button'
                                }}
                                showThirdwebBranding={false}
                                walletConnectV1ProjectId={undefined}
                              />
                            </div>
                          ) : socialGateUnlocked ? (
                            // Show claim button only when gate is unlocked
                            (localHasClaimed || hasClaimedFromContract) ? (
                              <button
                                disabled
                                className="crt-claim-button"
                                style={{
                                  fontFamily: 'IBM Plex Mono',
                                  fontWeight: 500,
                                  color: '#0B8A04',
                                  backgroundColor: 'transparent',
                                  border: '2px solid #0B8A04',
                                  padding: '10px 24px',
                                  fontSize: '1.1rem',
                                  letterSpacing: '0.1em',
                                  cursor: 'not-allowed',
                                  opacity: 0.6,
                                  position: 'relative',
                                  textTransform: 'uppercase',
                                  boxShadow: '0 0 10px rgba(11, 138, 4, 0.2), inset 0 0 10px rgba(11, 138, 4, 0.05)',
                                }}
                              >
                                &gt; CLAIMED
                              </button>
                            ) : (
                              <button
                                onClick={handleClaim}
                                disabled={isClaiming || (isLoadingClaimCondition && !fallbackClaimCondition) || isLoadingContract || !isCorrectNetwork || !contract || (effectiveClaimCondition && !canClaim) || !socialGateUnlocked}
                                className="crt-claim-button"
                                style={{
                                  fontFamily: 'IBM Plex Mono',
                                  fontWeight: 500,
                                  color: '#0B8A04',
                                  backgroundColor: 'transparent',
                                  border: '2px solid #0B8A04',
                                  padding: '10px 24px',
                                  fontSize: '1.1rem',
                                  letterSpacing: '0.1em',
                                  cursor: (isClaiming || (isLoadingClaimCondition && !fallbackClaimCondition) || isLoadingContract || !isCorrectNetwork || !contract || (effectiveClaimCondition && !canClaim) || !socialGateUnlocked) ? 'not-allowed' : 'pointer',
                                  position: 'relative',
                                  textTransform: 'uppercase',
                                  boxShadow: '0 0 10px rgba(11, 138, 4, 0.3), inset 0 0 10px rgba(11, 138, 4, 0.1)',
                                  transition: 'all 0.3s ease',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                }}
                                onMouseEnter={(e) => {
                                  if (!isClaiming && (!isLoadingClaimCondition || fallbackClaimCondition) && !isLoadingContract && isCorrectNetwork && contract && (!effectiveClaimCondition || canClaim) && socialGateUnlocked) {
                                    e.target.style.boxShadow = '0 0 20px rgba(11, 138, 4, 0.6), inset 0 0 15px rgba(11, 138, 4, 0.2)';
                                    e.target.style.borderColor = '#0BFF04';
                                    e.target.style.color = '#0BFF04';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (!isClaiming && (!isLoadingClaimCondition || fallbackClaimCondition) && !isLoadingContract && isCorrectNetwork && contract && (!effectiveClaimCondition || canClaim) && socialGateUnlocked) {
                                    e.target.style.boxShadow = '0 0 10px rgba(11, 138, 4, 0.3), inset 0 0 10px rgba(11, 138, 4, 0.1)';
                                    e.target.style.borderColor = '#0B8A04';
                                    e.target.style.color = '#0B8A04';
                                  }
                                }}
                              >
                                {isClaiming ? (
                                  <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>&gt; CLAIMING...</span>
                                  </>
                                ) : (isLoadingContract || (isLoadingClaimCondition && !fallbackClaimCondition)) ? (
                                  <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>&gt; LOADING...</span>
                                  </>
                                ) : !isCorrectNetwork ? (
                                  <span>&gt; SWITCH TO BASE</span>
                                ) : !socialGateUnlocked ? (
                                  <span>&gt; COMPLETE SOCIAL TASKS</span>
                                ) : (
                                  <span>&gt; CLAIM</span>
                                )}
                              </button>
                            )
                          ) : null}
                          
                          {/* Status Messages */}
                          {claimStatus && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mb-3 lg:mb-2 text-center"
                              style={{
                                color: claimStatus.type === 'success' ? '#0B8A04' : claimStatus.type === 'error' ? '#ff4444' : '#0B8A04',
                                fontFamily: 'IBM Plex Mono',
                                fontWeight: 500,
                                fontSize: '0.85rem',
                              }}
                            >
                              {claimStatus.type === 'success' && <CheckCircle2 className="inline w-4 h-4 mr-1" />}
                              {claimStatus.type === 'error' && <AlertTriangle className="inline w-4 h-4 mr-1" />}
                              {claimStatus.message}
                              {txHash && claimStatus.type === 'success' && (
                                <a
                                  href={getExplorerUrl(txHash)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 inline-flex items-center hover:underline"
                                  style={{ color: '#0BFF04' }}
                                >
                                  View on Basescan
                                  <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                              )}
                            </motion.div>
                          )}
                   
                          {/* Rotating defiant message */}
                          <div 
                            className="text-center relative inline-block w-full"
                            style={{ 
                              color: '#0B8A04', 
                              fontFamily: 'IBM Plex Mono', 
                              fontWeight: 500,
                              fontSize: '1rem',
                              minHeight: '1.5rem',
                              marginTop: '0.75rem'
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
