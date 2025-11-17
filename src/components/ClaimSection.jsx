import { useState } from 'react';
import { motion } from 'framer-motion';
// import { useContract, useContractRead, useContractWrite, useAddress } from '@thirdweb-dev/react';
// import { ethers } from 'ethers';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const ClaimSection = () => {
  const [claimAmount, setClaimAmount] = useState(25000);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimStatus, setClaimStatus] = useState(null);
  
  // Temporarily disabled Thirdweb hooks to prevent white screen
  const address = null; // useAddress();
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
    <section id="claim-section" className="py-20 bg-paper relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-newsreader text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-6">
            CLAIM YOUR BROKE
          </h2>
          <p className="font-inter text-xl lg:text-2xl text-charcoal font-medium">
            Join the broke revolution. Claim your 25,000 BROKE tokens and embrace the chaos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Claim Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-2 border-charcoal p-8 shadow-lg h-full flex flex-col">
              <h3 className="font-bebas text-2xl lg:text-3xl tracking-wider text-charcoal mb-6">
                CLAIM DETAILS
              </h3>
              
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-inter text-lg font-medium text-charcoal">Claim Limit:</span>
                  <span className="font-bebas text-lg text-broke-600">25,000 BROKE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-lg font-medium text-charcoal">Network:</span>
                  <span className="font-bebas text-lg text-broke-600">Base Mainnet</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-lg font-medium text-charcoal">Contract:</span>
                  <span className="font-mono text-xs break-all text-charcoal">
                    {contractAddress}
                  </span>
                </div>
                {address && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-lg font-medium text-charcoal">Your Address:</span>
                      <span className="font-mono text-xs break-all text-charcoal">
                        {address.slice(0, 6)}...{address.slice(-4)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-lg font-medium text-charcoal">Claimable Amount:</span>
                      <span className="font-bebas text-lg text-broke-600">
                        {claimableAmount ? formatNumber(claimableAmount) : '0'} BROKE
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-lg font-medium text-charcoal">Has Claimed:</span>
                      <span className="font-bebas text-lg">
                        {hasClaimed ? (
                          <span className="text-green-600 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-1" />
                            Yes
                          </span>
                        ) : (
                          <span className="text-red-600 flex items-center">
                            <XCircle className="w-5 h-5 mr-1" />
                            No
                          </span>
                        )}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right side - Claim Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-2 border-charcoal p-8 shadow-lg h-full flex flex-col">
              <h3 className="font-bebas text-2xl lg:text-3xl tracking-wider text-charcoal mb-6">
                CLAIM YOUR SHARE
              </h3>

              {!address ? (
                <div className="text-center py-12">
                  <p className="font-inter text-lg font-medium text-charcoal mb-6">
                    Connect your wallet to claim your BROKE tokens
                  </p>
                  <div className="bg-gray-50 border-2 border-charcoal p-4">
                    <p className="font-mono text-sm text-charcoal">
                      Wallet not connected
                    </p>
                  </div>
                </div>
              ) : hasClaimed ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bebas text-xl lg:text-2xl tracking-wider text-charcoal mb-2">
                    ALREADY CLAIMED
                  </h4>
                  <p className="font-inter text-base lg:text-lg text-charcoal">
                    You've already claimed your BROKE tokens. Welcome to the broke family!
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block font-bebas text-lg tracking-wider text-charcoal mb-2">
                      CLAIM AMOUNT
                    </label>
                    <div className="bg-gray-50 border-2 border-charcoal p-4 text-center">
                      <span className="font-bebas text-2xl lg:text-3xl text-broke-600">
                        25,000 BROKE
                      </span>
                    </div>
                  </div>

                  {claimStatus && (
                    <div className={`p-4 border-2 ${
                      claimStatus.type === 'success' 
                        ? 'border-green-400 bg-green-50' 
                        : 'border-red-400 bg-red-50'
                    }`}>
                      <div className="flex items-center space-x-2">
                        {claimStatus.type === 'success' ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        <span className="font-inter text-sm text-charcoal">
                          {claimStatus.message}
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleClaim}
                    disabled={isClaiming || hasClaimed}
                    className={`w-full py-4 font-bebas text-xl lg:text-2xl tracking-wider transition-all duration-300 ${
                      isClaiming || hasClaimed
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-charcoal text-white hover:bg-broke-600 hover:scale-105'
                    }`}
                  >
                    {isClaiming ? 'CLAIMING...' : 'CLAIM 25,000 BROKE'}
                  </button>

                  <div className="text-center">
                    <p className="font-mono text-xs text-charcoal">
                      Gas fees apply. No refunds. We're all in this together.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClaimSection; 