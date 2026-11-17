import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HORIZON_KM = 38;

/**
 * All scroll-driven motion lives here. Content is fully visible in the markup;
 * motion only ever *adds* states, and gsap.matchMedia reverts everything on
 * cleanup or when the user switches to reduced motion.
 */
export function setupMotion(root) {
  if (!root) return undefined;
  const mm = gsap.matchMedia(root);
  const q = (sel) => Array.from(root.querySelectorAll(sel));

  mm.add(
    {
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 821px)',
    },
    (ctx) => {
      const { motion, desktop } = ctx.conditions;
      document.documentElement.classList.toggle('has-motion', motion);
      if (!motion) {
        setReadout(root, 0);
        return undefined;
      }

      setReadout(root, HORIZON_KM);

      /* ---------- Text reveals ---------- */
      q('[data-lines]').forEach((el) => {
        gsap.from(el.querySelectorAll('.line__inner'), {
          yPercent: 108,
          duration: 1.25,
          ease: 'expo.out',
          stagger: 0.085,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });

      q('[data-reveal]').forEach((el) => {
        // opacity only (not visibility) so links stay keyboard-reachable before they reveal
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      q('[data-rule]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: '0 50%',
          duration: 1.4,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      /* ---------- Hero → manifesto ---------- */
      const hero = root.querySelector('#top');
      if (hero) {
        gsap.timeline({
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
        })
          .to('[data-hero-media]', { yPercent: desktop ? 18 : 10, scale: 1.06, ease: 'none' }, 0)
          .to('[data-hero-content]', { yPercent: desktop ? -14 : -6, opacity: 0, ease: 'power1.in' }, 0)
          .to('[data-hero-shade]', { opacity: 0.85, ease: 'power1.in' }, 0);
      }

      /* ---------- Image parallax (desktop only) ---------- */
      if (desktop) {
        q('[data-parallax]').forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -6, scale: 1.14 },
            {
              yPercent: 6,
              scale: 1.14,
              ease: 'none',
              scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          );
        });
      }

      /* ---------- Signature: cross the horizon ---------- */
      const section = root.querySelector('[data-crossing]');
      if (section) {
        const frame = section.querySelector('[data-crossing-frame]');
        const img = section.querySelector('[data-crossing-img]');
        const words = section.querySelectorAll('[data-crossing-word]');
        const meta = section.querySelectorAll('[data-crossing-meta]');

        if (desktop) {
          const tl = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.6,
              onUpdate: (self) => setReadout(root, HORIZON_KM * (1 - self.progress)),
            },
          });
          tl.fromTo(frame, { clipPath: 'inset(24% 30% 24% 30%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 5 }, 0)
            .fromTo(img, { scale: 1.22 }, { scale: 1, duration: 5 }, 0)
            .fromTo(meta, { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 }, 3.2)
            .fromTo(words, { yPercent: 35, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 1.5, stagger: 0.55, ease: 'power2.out' }, 1.4)
            .to(words, { yPercent: -25, autoAlpha: 0, duration: 1.3, stagger: 0.3, ease: 'power2.in' }, 6.2)
            .to({}, { duration: 0.8 });
        } else {
          // Mobile: a simple scale + fade, no pinning.
          gsap.fromTo(img, { scale: 1.16, autoAlpha: 0.35 }, {
            scale: 1, autoAlpha: 1, ease: 'none',
            scrollTrigger: {
              trigger: section, start: 'top bottom', end: 'center center', scrub: true,
              onUpdate: (self) => setReadout(root, HORIZON_KM * (1 - self.progress)),
            },
          });
          gsap.fromTo(words, { y: 24, autoAlpha: 0 }, {
            y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 45%', toggleActions: 'play none none reverse' },
          });
        }
      }

      return () => document.documentElement.classList.remove('has-motion');
    }
  );

  // Fonts change line metrics; refresh once they've settled.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());

  return () => mm.revert();
}

function setReadout(root, km) {
  const el = root.querySelector('[data-crossing-readout]');
  if (el) el.textContent = Math.max(0, km).toFixed(1);
}
