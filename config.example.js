// Configuration file for BROKECOIN site
// Copy this to config.js and update with your values

export const config = {
  // Get your client ID from https://thirdweb.com/dashboard
  thirdwebClientId: 'your-client-id-here',
  
  // Replace with your deployed contract address on Base Mainnet
  contractAddress: '0x27b57Aa02BB1Ea243e5B44a41890246807Cda135',
  
  // Site configuration
  siteName: 'BROKECOIN',
  siteDescription: 'The only coin backed by tears and bad decisions',
  
  // Token configuration
  tokenSymbol: 'BROKE',
  totalSupply: '1,000,000,000',
  claimLimit: '25,000',
  
  // Social links
  socialLinks: {
    twitter: 'https://twitter.com/brokecoin',
    telegram: 'https://t.me/brokecoin',
    discord: 'https://discord.gg/brokecoin'
  }
}; 