# 🪙 BROKECOIN - The Only Coin Backed by Tears and Bad Decisions

A satirical crypto landing site for the world's most emotionally volatile digital asset. Built with React, Tailwind CSS, and thirdweb integration.

## 🎭 About

BROKECOIN is a meme token that parodies crypto culture, financial desperation, and internet delusion. This site embodies the "seriously unserious" nature of the project with intentionally chaotic design and bleakly humorous content.

## ✨ Features

- **Hero Section** - Crying coin animation with satirical copy
- **BrokeBoard™** - Live market stats (accurate as of vibes)
- **BROKENOMICS** - Token allocation breakdown with "Real Talk"
- **Whitepaper** - Satirical roadmap and FAQ
- **Claim Functionality** - Thirdweb integration for claiming BROKE tokens
- **Responsive Design** - Mobile-friendly brutalist grid layout
- **Custom Fonts** - Newsreader, Bebas Neue, Inter, IBM Plex Mono
- **Animations** - Framer Motion for smooth interactions

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Thirdweb** - Web3 integration (wallet connection, contract interaction)
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Base Network** - Ethereum L2 for deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MetaMask or other Web3 wallet
- Thirdweb account (for client ID)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd brokecoin-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Thirdweb**
   - Get your client ID from [thirdweb dashboard](https://thirdweb.com/dashboard)
   - Update the `clientId` in `src/App.jsx`

4. **Update Contract Address**
   - Replace the contract address in `src/components/ClaimSection.jsx` with your deployed contract
   - Ensure your contract has the required functions: `claimableAmount`, `hasClaimed`, `claim`

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and wallet connection
│   ├── Hero.jsx           # Hero section with crying coin
│   ├── BrokeBoard.jsx     # Market statistics
│   ├── Brokenomics.jsx    # Token allocation breakdown
│   ├── Whitepaper.jsx     # Roadmap and FAQ
│   ├── ClaimSection.jsx   # Thirdweb claim functionality
│   └── Footer.jsx         # Lore and disclaimers
├── App.jsx                # Main app component
├── main.jsx              # Entry point
└── index.css             # Tailwind and custom styles
```

## 🎨 Design System

### Colors
- **Paper**: `#EAE5D9` - Main background
- **Charcoal**: `#2C2C2C` - Text and borders
- **Broke**: Orange gradient for accents
- **Dust**: `#8B8B8B` - Secondary text

### Typography
- **Newsreader** - Hero headings and section titles
- **Bebas Neue** - CTAs and loud phrases
- **Inter** - Body text
- **IBM Plex Mono** - Code and technical content

### Components
- `.btn-primary` - Primary call-to-action buttons
- `.btn-secondary` - Secondary buttons
- `.section-title` - Large section headings
- `.hero-text` - Hero section text
- `.body-text` - Standard body text
- `.mono-text` - Monospace text
- `.loud-text` - Bold, impactful text

## 🔧 Configuration

### Thirdweb Setup

1. **Get Client ID**
   - Sign up at [thirdweb.com](https://thirdweb.com)
   - Create a new project
   - Copy your client ID

2. **Update App.jsx**
   ```jsx
   <ThirdwebProvider 
     activeChain={Base}
     clientId="your-client-id-here"
   >
   ```

### Contract Integration

The claim functionality expects a smart contract with these functions:

```solidity
function claimableAmount(address user) external view returns (uint256);
function hasClaimed(address user) external view returns (bool);
function claim(uint256 amount) external;
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set environment variables**
   - Add your thirdweb client ID in Vercel dashboard

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

## 📱 Mobile Responsiveness

The site is fully responsive with:
- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly buttons
- Optimized typography scaling
- Mobile navigation considerations

## 🎭 Content Guidelines

### Tone
- **Satirical** - Parody crypto culture
- **Bleakly humorous** - Embrace financial despair
- **Self-aware** - Acknowledge the absurdity
- **Community-focused** - "We're all broke together"

### Writing Style
- Use the specified fonts for their intended purposes
- Embrace imperfection and "printed too fast" vibes
- Include lore easter eggs and internal references
- Maintain the B.R.O.K.E. narrative throughout

## 🔗 Links

- **Contract**: `0x27b57Aa02BB1Ea243e5B44a41890246807Cda135`
- **Network**: Base Mainnet
- **Supply**: 1,000,000,000 BROKE
- **Claim Limit**: 25,000 per wallet

## 📄 License

This project is for satirical purposes. No financial advice intended. We're all going to zero anyway.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🆘 Support

- **Discord**: Join our community
- **Telegram**: BROKECOIN Billionaires Group
- **Twitter**: @brokecoin

---

*Built with tears, coffee, and the audacity to believe. Powered by Base Mainnet and copious amounts of delusion.*
