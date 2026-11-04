# 👑 Royal Suppliers VNB — Luxury Modern Web Application

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11.17-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An Awwwards-inspired, high-performance luxury web experience built for **Royal Suppliers** (Vaniyambadi, Tirupattur District, Tamil Nadu — Est. 2007). Designed with fluid motion physics, 60 FPS momentum scrolling, interactive 3D perspective cards, dynamic golden particle mechanics, and an ultra-refined dark aesthetic.

> **Pure Frontend Architecture:** Zero backend dependencies. 100% static, secure, and ready for instant edge deployment.

---

## 📌 GitHub Repository Details

- **Short Description:**  
  `Luxury event decor & wedding supply web platform for Royal Suppliers VNB (Est. 2007). Built with React 18, Vite, Tailwind CSS, Framer Motion, and Lenis smooth momentum scrolling.`

- **Recommended Topics / Tags:**  
  `react`, `vite`, `tailwindcss`, `framer-motion`, `lenis-scroll`, `luxury-website`, `wedding-decor`, `canvas-confetti`, `lucide-react`, `responsive-design`, `awwwards-style`

---

## ✨ Key Features & Architectural Highlights

### 1. 🎠 Senior-Architected Automatic 3D Coverflow Showcase
- **Zero Button Clutter:** Clean, distraction-free stage stream engineered for effortless viewing.
- **Fluid Spring Physics:** Automatic transitions every 3.2 seconds using customized Framer Motion springs (`stiffness: 220`, `damping: 24`, `mass: 0.8`).
- **Smart Hover Pause:** Automatically freezes when the visitor hovers over any stage card and smoothly resumes when the cursor leaves.
- **Minimalist Slide Counter:** Elegant gold dash indicator and monospace counter (`01 / 09`) instead of bulky pagination arrows.
- **Fullscreen Lightbox:** Click any stage to open an immersive, high-resolution modal with zoom view and keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).

### 2. ⚡ 60 FPS Interactive Golden Diamond Particle Canvas
- Custom HTML5 Canvas physics engine rendering glittering diamond stardust that floats with natural ambient drift.
- **GPU Optimized:** Built without CPU-heavy `shadowBlur` in the hot render loop.
- **Viewport Aware:** Employs an `IntersectionObserver` to halt canvas rendering when scrolled past the hero, saving 100% GPU resources for the rest of the page.

### 3. 🌊 Lenis Frictionless Momentum Scrolling
- Smooth 60/120 Hz momentum scrolling configured for ultra-responsive wheel and touch dynamics.
- Cleanly decoupled from native CSS `scroll-behavior: smooth` to eliminate jitter, rubber-banding, and scroll latency.

### 4. 🎴 3D Perspective Tilt on Service Cards
- Cursor-tracking 3D rotation with depth tilt and ambient lighting glare.
- Built with hardware-accelerated dark gradients and `will-change: transform` to prevent layout repaints.
- Direct prefilled WhatsApp inquiry button on every service card (*Event Planning, High Look Decor, Material Supply*).

### 5. 🤖 Royal Assistant Interactive Chatbot
- Floating concierge with instant answers to common questions (*Services, Stage Gallery, Store Address & Hours*).
- One-click inquiry generator that seamlessly hands off conversations into WhatsApp with prefilled booking messages.

### 6. 📍 Integrated Headquarters & Office Maps
- Dark-themed Google Maps embed for the Vaniyambadi office on Jamia Masjid Street.
- Store timings badge (*9:00 AM – 9:00 PM, All 7 Days*).
- Direct call buttons for all 4 partners (*K. Obedur Rahman, K. Mohammed Shuaib, K. Muheebur Rahman, K. Enamul Hasan*).

### 7. 🎯 Luxury Trailing Custom Cursor
- Dual-element follower: zero-latency precision center dot paired with a smooth gold spring follower ring.
- Gracefully auto-disabled on mobile and touch devices.

### 8. 🚀 93% Image Performance Optimization
- Re-encoded raw 4096px phone camera JPEGs (3.5MB+ each) down to crisp, web-optimized 1440px JPEGs (~200KB each).
- Added `loading="lazy"` and `decoding="async"` across all media to guarantee instant initial page paints.

---

## 📁 Image & Asset Folders (Where to Drop Your Images)

You can swap, add, or customize your assets at any time in these directories:

1. **Logo Assets:**
   - `public/static/Images/` (e.g., `LogoWhitenew.png`)
   - `public/images/logo/`

2. **Stage & Carousel Photos:**
   - `public/static/ImagesCarousel/` (e.g., `1000336893.jpg`, `1000336921.jpg`, etc.)
   - `public/images/carousel/`

> **Note:** High-resolution assets from the live website are pre-populated in these directories as defaults, so the app runs fully dressed right out of the box.

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | React 18.3.1 + TypeScript | Scalable component architecture with static typing |
| **Build Tool** | Vite 5.4.11 | Sub-second HMR and optimized Rollup production builds |
| **Styling** | Tailwind CSS 3.4.15 | Custom royal dark palette, typography, and utility classes |
| **Motion & Physics** | Framer Motion 11.11.17 | Component transitions, spring physics, and lightbox modals |
| **Smooth Scroll** | Lenis 1.1.18 | Buttery 60 FPS momentum-based page scrolling |
| **Celebration FX** | Canvas Confetti 1.9.4 | Golden particle bursts upon booking or consultation triggers |
| **Icons** | Lucide React 0.460.0 | Clean, modern stroke iconography |
| **Typography** | Cinzel & Inter (Google Fonts) | Luxury serif royal headers + ultra-legible modern body |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (v9 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/royal-suppliers-website.git

# Navigate into the project directory
cd royal-suppliers-website

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized, production-ready static bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 One-Click Deployment

Because this project is a pure static frontend, it can be hosted anywhere with zero server setup:

### Deploy to Vercel
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Output Directory: **`dist`**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Click **Deploy Site**.

---

## 📂 Project Structure

```
royal-suppliers-website/
├── public/
│   ├── images/
│   │   ├── carousel/            # Secondary carousel asset folder
│   │   └── logo/                # Secondary logo asset folder
│   └── static/
│       ├── Images/              # Primary logo directory
│       └── ImagesCarousel/      # Primary portfolio/stage photo directory
├── src/
│   ├── components/
│   │   ├── About.tsx            # Heritage, story, and statistics
│   │   ├── Chatbot.tsx          # Floating Royal Assistant concierge
│   │   ├── CTA.tsx              # Conversion section with confetti trigger
│   │   ├── CustomCursor.tsx     # GPU-accelerated luxury trailing cursor
│   │   ├── FAQ.tsx              # Collapsible question & answer accordion
│   │   ├── FloatingActions.tsx  # Floating WhatsApp & Instagram pills
│   │   ├── Footer.tsx           # Contact lines, store timings, and credits
│   │   ├── Hero.tsx             # Canvas particle physics, headline, CTAs
│   │   ├── LocationMap.tsx      # Dark Google Map embed & address card
│   │   ├── Navbar.tsx           # Glassmorphic floating header with active spy
│   │   ├── Portfolio.tsx        # Automatic 3D Coverflow & Lightbox viewer
│   │   ├── Preloader.tsx        # Cinematic gold emblem entrance
│   │   ├── Process.tsx          # 4-step client journey breakdown
│   │   ├── Reviews.tsx          # Verified client testimonials
│   │   └── Services.tsx         # 3D perspective tilt cards
│   ├── data/
│   │   └── siteData.ts          # Centralized configuration & content
│   ├── utils/
│   │   ├── cn.ts                # Class merging utility
│   │   └── confetti.ts          # Golden celebratory burst trigger
│   ├── App.tsx                  # Root component & Lenis scroll provider
│   ├── index.css                # Tailwind directives & luxury styling
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML document & Google Fonts
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Theme extensions & gold palettes
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite configuration
```

---

## 👨‍💻 Credits & Attribution

- **Client:** Royal Suppliers VNB (Vaniyambadi, Tirupattur District, Tamil Nadu)
- **Developed by:** **anxff.io**
- **License:** All rights reserved &copy; 2026 Royal Suppliers.
