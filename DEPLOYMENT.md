# 🚀 BROKECOIN Deployment Guide

## Prerequisites

1. **Node.js 18+** installed
2. **Git** for version control
3. **Thirdweb account** for client ID
4. **Base Mainnet wallet** with some ETH for gas fees
5. **Smart contract** deployed on Base Mainnet

## Step 1: Configuration Setup

1. **Copy the example config file:**
   ```bash
   cp config.example.js config.js
   ```

2. **Get your Thirdweb Client ID:**
   - Go to [thirdweb.com/dashboard](https://thirdweb.com/dashboard)
   - Create a new project
   - Copy your client ID
   - Update `config.js` with your client ID

3. **Update contract address:**
   - Replace the contract address in `config.js` with your deployed contract
   - Ensure your contract has these functions:
     - `claimableAmount(address user)`
     - `hasClaimed(address user)`
     - `claim(uint256 amount)`

## Step 2: Local Testing

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Test functionality:**
   - Connect wallet
   - Test claim functionality
   - Verify all sections load correctly
   - Test mobile responsiveness

## Step 3: Build for Production

1. **Create production build:**
   ```bash
   npm run build
   ```

2. **Test production build locally:**
   ```bash
   npm run preview
   ```

## Step 4: Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard:**
   - `VITE_THIRDWEB_CLIENT_ID`: Your thirdweb client ID
   - `VITE_CONTRACT_ADDRESS`: Your contract address

4. **Configure custom domain:**
   - Add `brokecoin.club` in Vercel dashboard
   - Update DNS records as instructed

## Step 5: Deploy to Netlify (Alternative)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy options:**
   - **Drag & Drop**: Upload `dist` folder to Netlify
   - **Git Integration**: Connect your GitHub repository
   - **CLI**: Use `netlify deploy`

3. **Set environment variables in Netlify dashboard**

## Step 6: Post-Deployment Checklist

- [ ] **Test wallet connection** on live site
- [ ] **Test claim functionality** with real contract
- [ ] **Verify mobile responsiveness**
- [ ] **Check all links** work correctly
- [ ] **Test PDF download** (replace placeholder)
- [ ] **Verify thirdweb integration** works
- [ ] **Test on different browsers**
- [ ] **Check loading performance**

## Step 7: Smart Contract Requirements

Your smart contract should include:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BrokeCoin is ERC20, Ownable {
    mapping(address => bool) public hasClaimed;
    uint256 public constant CLAIM_AMOUNT = 25000 * 10**18;
    
    constructor() ERC20("BROKECOIN", "BROKE") {
        _mint(msg.sender, 1000000000 * 10**18); // 1 billion tokens
    }
    
    function claimableAmount(address user) external view returns (uint256) {
        return hasClaimed[user] ? 0 : CLAIM_AMOUNT;
    }
    
    function claim(uint256 amount) external {
        require(!hasClaimed[msg.sender], "Already claimed");
        require(amount == CLAIM_AMOUNT, "Invalid amount");
        
        hasClaimed[msg.sender] = true;
        _transfer(owner(), msg.sender, amount);
    }
}
```

## Step 8: Environment Variables

Create a `.env` file for local development:

```env
VITE_THIRDWEB_CLIENT_ID=your-client-id-here
VITE_CONTRACT_ADDRESS=0x27b57Aa02BB1Ea243e5B44a41890246807Cda135
```

## Step 9: Custom Domain Setup

1. **Purchase domain** (e.g., brokecoin.club)
2. **Configure DNS records** as instructed by your hosting provider
3. **Add SSL certificate** (automatic with Vercel/Netlify)
4. **Test domain** resolves correctly

## Troubleshooting

### Common Issues:

1. **Tailwind CSS not working:**
   - Ensure PostCSS config is correct
   - Check Tailwind version compatibility

2. **Thirdweb connection fails:**
   - Verify client ID is correct
   - Check network configuration (Base Mainnet)

3. **Claim function errors:**
   - Verify contract address
   - Check contract has required functions
   - Ensure sufficient gas fees

4. **Build errors:**
   - Clear node_modules and reinstall
   - Check for dependency conflicts

### Performance Optimization:

1. **Image optimization:**
   - Use WebP format
   - Compress images
   - Implement lazy loading

2. **Code splitting:**
   - Vite handles this automatically
   - Consider route-based splitting

3. **Caching:**
   - Configure proper cache headers
   - Use CDN for static assets

## Support

- **Discord**: Join our community
- **Telegram**: BROKECOIN Billionaires Group
- **GitHub Issues**: Report bugs and feature requests

---

*Ready to launch the broke revolution! 🚀* 