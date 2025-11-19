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
- **Install Command:** `rm -rf node_modules package-lock.json && npm install --include=optional`

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

## Custom Domain Setup (Namecheap)

### Step 1: Add Domain in Vercel
1. Go to your Vercel project dashboard
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `brokecoin.club` or `www.brokecoin.club`)
4. Click **Add**
5. Vercel will show you DNS records to configure

### Step 2: Configure DNS in Namecheap
1. Log into your Namecheap account
2. Go to **Domain List** → Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. You'll need to add these records (Vercel will show you the exact values):

   **For root domain (brokecoin.club):**
   - **Type:** A Record
   - **Host:** @
   - **Value:** `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)
   - **TTL:** Automatic

   **OR use CNAME (recommended):**
   - **Type:** CNAME Record
   - **Host:** @
   - **Value:** `cname.vercel-dns.com.` (Vercel will provide exact value)
   - **TTL:** Automatic

   **For www subdomain:**
   - **Type:** CNAME Record
   - **Host:** www
   - **Value:** `cname.vercel-dns.com.` (Vercel will provide exact value)
   - **TTL:** Automatic

### Step 3: Wait for DNS Propagation
- DNS changes can take 24-48 hours to propagate
- Usually works within a few minutes to a few hours
- Vercel will show "Valid Configuration" when it's ready

### Step 4: SSL Certificate
- Vercel automatically generates SSL certificates via Let's Encrypt
- HTTPS will be enabled automatically once DNS is configured
- No additional setup needed

### Troubleshooting
- If domain doesn't work after 24 hours, double-check DNS records match exactly what Vercel shows
- Make sure you removed any conflicting A/CNAME records
- Vercel dashboard will show any configuration errors

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

