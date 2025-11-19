import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ConnectWallet, useAddress, useContract, useChain, useSwitchChain, useActiveClaimCondition, useClaimConditions, useClaimerProofs, useTokenBalance } from '@thirdweb-dev/react';
import { Base } from '@thirdweb-dev/chains';
import { AlertTriangle, CheckCircle2, ExternalLink, Loader2 } from 'lucide-react';

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
      // On mobile: show button after line 1 (don't show line 2)
      // On desktop: wait 2 seconds before showing line 2
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      if (isMobile) {
        // On mobile, show button after a short delay
        setTimeout(() => setShowButton(true), 1000);
      } else {
        // On desktop, continue with line 2
        setTimeout(() => setShowLine2(true), 2000);
      }
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
  
  // Check user's token balance to see if they've already claimed
  const { data: tokenBalance, isLoading: isLoadingBalance } = useTokenBalance(contract, address);
  
  // Fallback: Try to read claim conditions directly from contract if hooks fail
  const [fallbackClaimCondition, setFallbackClaimCondition] = useState(null);
  
  useEffect(() => {
    const fetchClaimConditionDirectly = async () => {
      if (!contract || activeClaimCondition || isLoadingClaimCondition) return;
      
      try {
        // Try to read claim condition directly from contract
        // DropERC20 uses claimCondition() function
        const conditionId = await contract.call("getActiveClaimConditionId", []);
        
        if (conditionId !== undefined && conditionId !== null) {
          const condition = await contract.call("getClaimConditionById", [conditionId]);
          
          if (condition) {
            // Handle both array and object formats
            // DropERC20 can return as array: [startTimestamp, maxClaimableSupply, supplyClaimed, quantityLimitPerWallet, merkleRoot, pricePerToken, currency]
            // Or as object with named properties
            let maxSupply, claimed, startTime, quantityLimit, merkleRoot, pricePerToken, currency;
            
            if (Array.isArray(condition)) {
              // Array format: [startTimestamp, maxClaimableSupply, supplyClaimed, quantityLimitPerWallet, merkleRoot, pricePerToken, currency]
              startTime = condition[0]?.toString() || "0";
              maxSupply = condition[1]?.toString() || "0";
              claimed = condition[2]?.toString() || "0";
              quantityLimit = condition[3]?.toString() || "0";
              merkleRoot = condition[4] || "";
              pricePerToken = condition[5]?.toString() || "0";
              currency = condition[6] || "";
            } else {
              // Object format
              startTime = condition.startTimestamp?.toString() || condition.startTime?.toString() || "0";
              maxSupply = condition.maxClaimableSupply?.toString() || "0";
              claimed = condition.supplyClaimed?.toString() || "0";
              quantityLimit = condition.quantityLimitPerWallet?.toString() || condition.maxQuantityPerWallet?.toString() || "0";
              merkleRoot = condition.merkleRoot || "";
              pricePerToken = condition.pricePerToken?.toString() || "0";
              currency = condition.currency || "";
            }
            
            // Calculate available supply
            const maxSupplyBig = BigInt(maxSupply || "0");
            const claimedBig = BigInt(claimed || "0");
            const available = maxSupplyBig > claimedBig ? maxSupplyBig - claimedBig : BigInt("0");
            
            // Ensure startTime is in seconds (Unix timestamp)
            // If it's too large (> year 2100), it might be in milliseconds, so divide by 1000
            let startTimeSeconds = BigInt(startTime || "0");
            if (startTimeSeconds > BigInt("4102444800")) { // Year 2100 in seconds
              // Likely in milliseconds, convert to seconds
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
    
    // Only try fallback if hooks failed and we've waited a bit
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
  // For public claims (no merkleRoot), anyone can claim
  // For allowlist claims, user needs proofs
  const merkleRoot = effectiveClaimCondition?.merkleRoot;
  const isPublicClaim = !merkleRoot || 
    merkleRoot === "" || 
    merkleRoot === "0x0000000000000000000000000000000000000000000000000000000000000000";
  
  const canClaim = effectiveClaimCondition && (
    isPublicClaim || 
    (claimerProofs && claimerProofs.length > 0)
  );

  // Check if wallet has already claimed by checking contract state
  useEffect(() => {
    const checkClaimStatus = async () => {
      if (!address || !contract || !effectiveClaimCondition) {
        setHasClaimedFromContract(false);
        return;
      }

      setIsCheckingClaimStatus(true);
      try {
        // Check 1: Token balance - if they have 25,000+ tokens, they likely claimed
        if (tokenBalance) {
          const balance = BigInt(tokenBalance.value?.toString() || "0");
          const claimAmount = BigInt("25000000000000000000000"); // 25,000 * 10^18
          if (balance >= claimAmount) {
            setHasClaimedFromContract(true);
            setIsCheckingClaimStatus(false);
            return;
          }
        }

        // Check 2: Try to read from contract's claim tracking
        // DropERC20 tracks claims per wallet via quantityLimitPerWallet
        // If they try to claim again, the contract will reject it
        // But we can check their current claimable amount
        try {
          const quantityLimit = effectiveClaimCondition.quantityLimitPerWallet 
            ? BigInt(effectiveClaimCondition.quantityLimitPerWallet.toString())
            : BigInt("0");
          
          // If quantityLimit is 0, there's no per-wallet limit (unlimited claims)
          // If quantityLimit > 0, check if they've already claimed their limit
          if (quantityLimit > BigInt("0")) {
            // Try to get their claimed amount from the contract
            // DropERC20 has a mapping to track claims per wallet
            const claimedAmount = await contract.call("getSupplyClaimedByWallet", [address]);
            if (claimedAmount) {
              const claimed = BigInt(claimedAmount.toString());
              if (claimed >= quantityLimit) {
                setHasClaimedFromContract(true);
                setIsCheckingClaimStatus(false);
                return;
              }
            }
          }
        } catch (error) {
          // Contract might not have this function, that's okay
          // We'll rely on balance check and contract rejection
        }

        setHasClaimedFromContract(false);
      } catch (error) {
        console.error("Error checking claim status:", error);
        setHasClaimedFromContract(false);
      } finally {
        setIsCheckingClaimStatus(false);
      }
    };

    checkClaimStatus();
  }, [address, contract, effectiveClaimCondition, tokenBalance]);

  // Check localStorage for claim status and clear on disconnect
  useEffect(() => {
    if (address) {
      const stored = localStorage.getItem(`claimed_${address.toLowerCase()}`);
      if (stored === 'true') {
        setLocalHasClaimed(true);
      } else {
        setLocalHasClaimed(false);
      }
    } else {
      // Clear claim status when wallet disconnects
      setClaimStatus(null);
      setTxHash(null);
      setLocalHasClaimed(false);
      setHasClaimedFromContract(false);
    }
  }, [address]);
  
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

    // Check if already claimed (localStorage or contract check)
    if (localHasClaimed || hasClaimedFromContract) {
      setClaimStatus({ type: 'error', message: 'You have already claimed your BROKE tokens' });
      return;
    }

    if (isLoadingClaimCondition || isLoadingConditions) {
      setClaimStatus({ type: 'info', message: 'Checking claim status...' });
      return;
    }

    if (!effectiveClaimCondition) {
      // Check if it's a loading issue or a configuration issue
      if (isLoadingClaimCondition || isLoadingContract) {
        setClaimStatus({ type: 'info', message: 'Loading claim conditions...' });
        return;
      }
      // Only show error if we're not loading and have no condition
      setClaimStatus({ type: 'error', message: 'Claim conditions not available. Please refresh and try again.' });
      return;
    }

    // Check if claim phase has started
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    const startTimeRaw = effectiveClaimCondition.startTime ? Number(effectiveClaimCondition.startTime) : 0;
    
    // Ensure startTime is in seconds (not milliseconds)
    let startTime = startTimeRaw;
    if (startTime > 4102444800) { // If larger than year 2100, it's likely in milliseconds
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
      // Verify contract is ready
      if (!contract || !contract.erc20) {
        throw new Error('Contract not initialized. Please refresh the page.');
      }

      // Claim amount (25,000 tokens). Thirdweb handles decimals internally for DropERC20.
      const claimQuantity = '25000';

      // Call the claim function with quantity
      // Use a timeout to prevent hanging
      const claimPromise = contract.erc20.claimTo(address, claimQuantity);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Transaction timeout. Please try again.')), 60000)
      );
      
      const receipt = await Promise.race([claimPromise, timeoutPromise]);
      
      // Get transaction hash from receipt
      const hash = receipt?.receipt?.transactionHash || receipt?.receipt?.hash || receipt?.transactionHash || receipt?.hash;
      setTxHash(hash);
      
      // Mark as claimed in localStorage
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
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        data: error.data,
        stack: error.stack
      });
      
      let errorMessage = 'Failed to claim tokens. Please try again.';
      
      if (error.message?.includes('user rejected') || error.message?.includes('User denied') || error.message?.includes('rejected')) {
        errorMessage = 'Transaction was cancelled';
      } else if (error.message?.includes('insufficient funds') || error.message?.includes('gas') || error.message?.includes('0x')) {
        errorMessage = 'Not enough ETH for gas fees. Please add ETH to your wallet.';
      } else if (error.message?.includes('already claimed') || error.message?.includes('Already claimed')) {
        errorMessage = 'You have already claimed your tokens';
        if (address) {
          localStorage.setItem(`claimed_${address.toLowerCase()}`, 'true');
          setLocalHasClaimed(true);
        }
      } else if (error.message?.includes('invalid_union') || error.message?.includes('ZodError')) {
        errorMessage = 'Invalid claim request. Please refresh and try again.';
      } else if (error.message?.includes('execution reverted') || error.message?.includes('revert')) {
        // Contract reverted - try to extract the reason
        const revertReason = error.message.match(/revert\s+(.+)/i)?.[1] || error.reason || 'Transaction failed';
        errorMessage = `Transaction failed: ${revertReason}`;
      } else if (error.message?.includes('IPFS gateway') || error.message?.includes('timed out') || error.message?.includes('Request timed out') || error.message?.includes('Failed to fetch')) {
        errorMessage = 'Network timeout. Please check your connection and try again.';
      } else if (error.message?.includes('network') || error.message?.includes('Network')) {
        errorMessage = 'Network issue. Please refresh and try again.';
      } else if (error.message) {
        // Show the actual error message if it's helpful
        errorMessage = error.message.length > 100 ? 'Transaction failed. Please try again.' : error.message;
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
                    
                    {/* Connect CTA Button - CRT Style */}
                    {showButton && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center w-full mt-6 mb-2"
                      >
                        <div className="relative mb-4">
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
                          ) : (localHasClaimed || hasClaimedFromContract) ? (
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
                              disabled={isClaiming || (isLoadingClaimCondition && !fallbackClaimCondition) || isLoadingContract || !isCorrectNetwork || !contract || (effectiveClaimCondition && !canClaim) || isCheckingClaimStatus || hasClaimedFromContract}
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
                                cursor: (isClaiming || (isLoadingClaimCondition && !fallbackClaimCondition) || isLoadingContract || !isCorrectNetwork || !contract || (effectiveClaimCondition && !canClaim)) ? 'not-allowed' : 'pointer',
                                position: 'relative',
                                textTransform: 'uppercase',
                                boxShadow: '0 0 10px rgba(11, 138, 4, 0.3), inset 0 0 10px rgba(11, 138, 4, 0.1)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                              }}
                              onMouseEnter={(e) => {
                                if (!isClaiming && (!isLoadingClaimCondition || fallbackClaimCondition) && !isLoadingContract && isCorrectNetwork && contract && (!effectiveClaimCondition || canClaim)) {
                                  e.target.style.boxShadow = '0 0 20px rgba(11, 138, 4, 0.6), inset 0 0 15px rgba(11, 138, 4, 0.2)';
                                  e.target.style.borderColor = '#0BFF04';
                                  e.target.style.color = '#0BFF04';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isClaiming && (!isLoadingClaimCondition || fallbackClaimCondition) && !isLoadingContract && isCorrectNetwork && contract && (!effectiveClaimCondition || canClaim)) {
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
                              ) : (
                                <span>&gt; CLAIM</span>
                              )}
                            </button>
                          )}
                        </div>
                        
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