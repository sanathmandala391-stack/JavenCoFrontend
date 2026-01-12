# Image Requirements for JAVEN & CO. Website

## Total Images Needed: **29 images** (plus optional logo)

---

## 📸 IMAGE BREAKDOWN BY SECTION

### 1. **LOGO** (Optional - currently text-based)
- **Quantity:** 1
- **Location:** LoadingScreen & Navbar
- **Format:** SVG or PNG (transparent background preferred)
- **Dimensions:** Flexible (will scale)
- **Usage:** Brand logo to replace "JAVEN & CO." text

---

### 2. **HOME PAGE - Hero Slideshow**
- **Quantity:** 3 images
- **Location:** `src/components/HeroSlideshow.tsx`
- **Format:** High-resolution JPG/WebP
- **Dimensions:** 
  - Desktop: 1920x1080px (16:9 aspect ratio)
  - Full viewport height
- **Content:** Premium hero images showcasing your brand/products
- **Naming:** `hero-slide-1.jpg`, `hero-slide-2.jpg`, `hero-slide-3.jpg`

---

### 3. **HOME PAGE - Featured Collections**
- **Quantity:** 4 images
- **Location:** `src/components/FeaturedCollections.tsx`
- **Format:** High-resolution JPG/WebP
- **Dimensions:** Square (1:1 aspect ratio)
  - Recommended: 1200x1200px minimum
- **Content:** Collection showcase images
- **Naming:** `collection-1.jpg`, `collection-2.jpg`, `collection-3.jpg`, `collection-4.jpg`

---

### 4. **HOME PAGE - Shop by Category**
- **Quantity:** 4 images
- **Location:** `src/components/ShopByCategory.tsx`
- **Format:** High-resolution JPG/WebP
- **Dimensions:** 
  - Desktop: 4:3 or 3:2 aspect ratio
  - Recommended: 1200x900px or 1200x800px
- **Content:** Category images with text overlay
  - `tops.jpg` - Tops category
  - `bottoms.jpg` - Bottoms category
  - `accessories.jpg` - Accessories category
  - `outerwear.jpg` - Outerwear category
- **Note:** These will have text overlays, so ensure images work well with semi-transparent dark overlay

---

### 5. **HOME PAGE - Brand Story**
- **Quantity:** 1 image
- **Location:** `src/components/BrandStory.tsx`
- **Format:** High-resolution JPG/WebP
- **Dimensions:** Square (1:1 aspect ratio)
  - Recommended: 1200x1200px minimum
- **Content:** Editorial-style brand story image
- **Naming:** `brand-story.jpg`

---

### 6. **SHOP PAGE - Product Grid**
- **Quantity:** 12 images (minimum - can be more if you have more products)
- **Location:** `src/pages/Shop.tsx`
- **Format:** High-resolution JPG/WebP
- **Dimensions:** Square (1:1 aspect ratio)
  - Recommended: 1000x1000px minimum
- **Content:** Product images for each item in your catalog
- **Naming:** `product-1.jpg`, `product-2.jpg`, etc. (or use product SKUs/IDs)

---

### 7. **PRODUCT DETAIL PAGE**
- **Quantity:** 1 image per product (can add multiple views later)
- **Location:** `src/pages/ProductDetail.tsx`
- **Format:** High-resolution JPG/WebP
- **Dimensions:** Square (1:1 aspect ratio)
  - Recommended: 1500x1500px minimum
- **Content:** Main product image (front view)
- **Note:** You can add multiple product images (side, back, detail shots) later

---

### 8. **CART PAGE**
- **Quantity:** 2 images (for the 2 sample cart items shown)
- **Location:** `src/pages/Cart.tsx`
- **Format:** High-resolution JPG/WebP
- **Dimensions:** Square (1:1 aspect ratio)
  - Recommended: 500x500px (smaller thumbnails)
- **Content:** Product thumbnails for cart items
- **Note:** These will be the same product images from your shop, just smaller versions

---

### 9. **ABOUT PAGE**
- **Quantity:** 2 images
- **Location:** `src/pages/About.tsx`
- **Format:** High-resolution JPG/WebP
- **Dimensions:** 
  - Hero: 16:9 aspect ratio (1920x1080px)
  - Additional: 4:3 aspect ratio (1200x900px)
- **Content:** 
  - `about-hero.jpg` - Main about page hero image
  - `about-image.jpg` - Additional editorial image
- **Naming:** `about-hero.jpg`, `about-image.jpg`

---

## 📋 SUMMARY TABLE

| Section | Quantity | Aspect Ratio | Recommended Size | Priority |
|---------|----------|--------------|------------------|----------|
| Logo | 1 | Flexible | 200x60px | Optional |
| Hero Slideshow | 3 | 16:9 | 1920x1080px | **High** |
| Featured Collections | 4 | 1:1 | 1200x1200px | **High** |
| Shop by Category | 4 | 4:3 or 3:2 | 1200x900px | **High** |
| Brand Story | 1 | 1:1 | 1200x1200px | Medium |
| Shop Products | 12+ | 1:1 | 1000x1000px | **High** |
| Product Detail | 1+ per product | 1:1 | 1500x1500px | **High** |
| Cart Thumbnails | 2+ | 1:1 | 500x500px | Medium |
| About Hero | 1 | 16:9 | 1920x1080px | Medium |
| About Additional | 1 | 4:3 | 1200x900px | Medium |

---

## 🎨 IMAGE GUIDELINES

### Style Requirements:
- **Premium, minimal aesthetic** matching brand identity
- **Consistent lighting** across all images
- **Clean backgrounds** (white, off-white, or minimal)
- **High quality** - no pixelation or compression artifacts
- **Professional photography** recommended

### Technical Requirements:
- **Format:** JPG (high quality) or WebP (preferred for web)
- **Color Space:** sRGB
- **Optimization:** Compress for web (aim for <500KB per image)
- **Naming:** Use descriptive, lowercase filenames with hyphens

### File Organization:
```
/public/images/
  /hero/
    hero-slide-1.jpg
    hero-slide-2.jpg
    hero-slide-3.jpg
  /collections/
    collection-1.jpg
    collection-2.jpg
    collection-3.jpg
    collection-4.jpg
  /categories/
    tops.jpg
    bottoms.jpg
    accessories.jpg
    outerwear.jpg
  /products/
    product-1.jpg
    product-2.jpg
    ...
  /about/
    about-hero.jpg
    about-image.jpg
  /brand/
    brand-story.jpg
  /logo/
    logo.svg (or logo.png)
```

---

## 🚀 NEXT STEPS

Once you provide the images, I will:
1. Create the `/public/images/` folder structure (Vite serves files from `/public` directory)
2. Update all components to use proper image tags
3. Add proper image optimization
4. Ensure responsive image loading
5. Add alt text for accessibility

**Minimum to launch:** Hero slides (3), Featured collections (4), Category images (4), and at least 4-6 product images.

**Note:** In Vite/React, static assets should be placed in the `/public` directory and referenced with absolute paths (e.g., `/images/hero/hero-slide-1.jpg`).

