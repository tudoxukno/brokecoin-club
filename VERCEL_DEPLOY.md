# 🚀 Vercel Deployment Guide for BROKECOIN

## Quick Deploy Steps

### 1. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your GitHub repository (`brokecoin-club`)

### 2. Configure Build Settings
Vercel should auto-detect Vite, but verify:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 3. Set Environment Variable (CRITICAL)
1. In your Vercel project settings, go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name:** `VITE_THIRDWEB_CLIENT_ID`
   - **Value:** `6504e03070ddb2dfa12948cfdad6f0e2`
   - **Environment:** Production, Preview, Development (check all three)
3. Click **Save**

### 4. Deploy
1. Click **Deploy**
2. Wait for build to complete
3. Your site will be live at `your-project.vercel.app`

## Post-Deployment Checklist

- [ ] Test wallet connection on live site
- [ ] Test claim functionality with real wallet
- [ ] Verify mobile responsiveness
- [ ] Check all links work (whitepaper, legal pages)
- [ ] Test on different browsers
- [ ] Verify CRT animations work correctly
- [ ] Check that success messages clear on disconnect

## Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your domain (e.g., `brokecoin.club`)
3. Follow DNS configuration instructions
4. SSL certificate will be auto-generated

## Troubleshooting

**If claim functionality doesn't work:**
- Verify `VITE_THIRDWEB_CLIENT_ID` is set correctly
- Check browser console for errors
- Ensure contract address is correct: `0x27b57Aa02881Ea243e5B4Aa4189024EBB7Cda135`

**If build fails:**
- Check that all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

## Environment Variables Reference

| Variable | Value | Required |
|----------|-------|----------|
| `VITE_THIRDWEB_CLIENT_ID` | `6504e03070ddb2dfa12948cfdad6f0e2` | ✅ Yes |

---

**Ready to launch! 🎉**

