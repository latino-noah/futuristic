# Purple Desert

An expedition beyond the familiar — an immersive, single-page editorial site.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

**Stack:** React 18 + Vite 5, GSAP 3 + ScrollTrigger (scroll motion only), self-hosted fonts (Inter Tight, IBM Plex Mono).

**Structure**
- `src/components/` — one component per section (Header, Hero, Manifesto, Journey/Chapter, Crossing, Finale, Footer) plus small primitives (Plate, Lines, Arrow).
- `src/content.js` — navigation and chapter copy.
- `src/motion/setupMotion.js` — all scroll animation, inside `gsap.matchMedia` (reduced motion and mobile handled there, reverted on unmount).
- `src/styles/` — design tokens, base styles and one stylesheet per section.
- `public/media/` — web-optimised derivatives of `background/purple-desert/` (1920 / 1080 px H.264 loops, poster in two sizes, editorial crops of the same landscape).

The original GetLayers source files live in `background/purple-desert/`.
