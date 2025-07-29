# 🖼️ BROKECOIN Asset Guide

## 📁 Required Image Files

Place all image files in the `public/images/` directory:

### **Header Assets**
```
public/images/
├── b-logo.png          # The "B" logo for the header
└── diamond-icon.png    # Diamond icon for "BUY BROKECOIN" button
```

### **Hero Section Assets**
```
public/images/
├── crying-coin.png     # Main coin with crying face
└── butterfly.png       # Butterfly detail on the coin
```

### **Other Page Assets** (for future use)
```
public/images/
├── brokenomics-bg.png  # Background for Brokenomics section
├── whitepaper-bg.png   # Background for Whitepaper section
├── torn-paper.png      # Torn paper texture
├── sticky-note.png     # Sticky note graphic
└── warning-icon.png    # Custom warning triangle
```

## 🎯 **Asset Specifications**

### **B Logo (`b-logo.png`)**
- **Size**: 40x40px (or larger, will scale down)
- **Format**: PNG with transparency
- **Style**: White "B" on transparent background

### **Diamond Icon (`diamond-icon.png`)**
- **Size**: 16x16px (or larger, will scale down)
- **Format**: PNG with transparency
- **Style**: White diamond shape

### **Crying Coin (`crying-coin.png`)**
- **Size**: 400x400px (or larger, will scale down)
- **Format**: PNG with transparency
- **Style**: Metallic coin with crying face, "IN STRUGGLE WE TRUST" text, "$BROKE" at bottom

### **Butterfly (`butterfly.png`)**
- **Size**: 32x32px (or larger, will scale down)
- **Format**: PNG with transparency
- **Style**: Light-colored butterfly

## 🔧 **Fallback System**

The site includes fallback systems:
- If images fail to load, CSS alternatives will display
- For the coin: CSS-styled coin will show
- For the butterfly: Emoji 🦋 will display
- For the logo: CSS "B" will show

## 📋 **Asset Checklist**

- [ ] `b-logo.png` - Header logo
- [ ] `diamond-icon.png` - Buy button icon
- [ ] `crying-coin.png` - Main hero coin
- [ ] `butterfly.png` - Coin detail
- [ ] Other page assets (optional)

## 🚀 **Quick Setup**

1. **Create the images directory:**
   ```bash
   mkdir -p public/images
   ```

2. **Add your image files** to `public/images/`

3. **Test the site** - images should load automatically

4. **Check fallbacks** - if any images don't load, CSS alternatives will show

## 🎨 **Design Notes**

- All images should have transparent backgrounds where appropriate
- Use PNG format for best quality with transparency
- The site will automatically scale images to fit
- Fallback systems ensure the site always looks good 