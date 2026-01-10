# Softman Engineering - Premium Agency Landing Page

A high-performance, visually stunning agency landing page built with **Next.js 15**, **Tailwind CSS 4**, and cutting-edge animation libraries. This project showcases premium engineering with a focus on rich aesthetics, fluid transitions, and interactive 3D elements.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:**
  - [Framer Motion](https://www.framer.com/motion/) (UI transitions & micro-interactions)
  - [GSAP](https://greensock.com/gsap/) (Scroll-triggered word reveals & complex sequences)
  - [Lenis](https://lenis.darkroom.engineering/) (Premium smooth scrolling)
- **3D Effects:** [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Key Features & Animations

### 1. Laser Hero V2
A state-of-the-art hero section featuring a dynamic Three.js laser flow background. It includes a custom typewriter effect and a "Mouse Reveal" image overlay that reacts to the user's cursor.

### 2. Sparking Beam Timeline
An interactive vertical timeline where a "sparking" electrical beam follows the user's scroll. The beam features a glowing head, electric pulses, and trail sparks to provide a high-energy navigational experience.

### 3. Encrypted Text Reveal
A sophisticated animation component that starts with gibberish characters and "decrypts" into clear text as it enters the viewport. Optimized for performance and SSR to prevent hydration mismatches.

### 4. Word-by-Word Scroll Reveal
Powered by GSAP, this effect reveals text content with a focus-like blur and opacity transition, creating a professional and engaging reading experience.

### 5. Premium UI Components
- **3D Cards:** Interactive tilt effects for service and project highlights.
- **Glowing Borders:** Subtle, animated gradients that respond to hover states.
- **Shine Buttons:** CTA buttons with a dynamic light sweep effect.

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

## 📐 Project Structure

- `src/app`: Next.js App Router and global styles.
- `src/components/sections`: High-level page sections (Hero, Timeline, Services, etc.).
- `src/components/ui`: Reusable, atomic UI components with integrated animations.
- `src/lib`: Utility functions and shared logic.

## 📄 License

This project is private and intended for demonstration purposes.
