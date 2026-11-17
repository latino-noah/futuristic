import '../styles/hero.css';
import { useEffect, useRef, useState } from 'react';
import Arrow from './Arrow.jsx';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function pickVideo() {
  if (typeof window === 'undefined') return null;
  if (prefersReducedMotion() || navigator.connection?.saveData) return null;
  return window.matchMedia('(max-width: 960px)').matches ? '/media/desert-1080.mp4' : '/media/desert-1920.mp4';
}

export default function Hero() {
  const videoRef = useRef(null);
  const [src] = useState(pickVideo);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; // property must be set for autoplay policies
    const onPlaying = () => setPlaying(true);
    v.addEventListener('playing', onPlaying);
    const p = v.play();
    if (p && p.catch) p.catch(() => { /* autoplay blocked: poster stays */ });
    return () => v.removeEventListener('playing', onPlaying);
  }, [src]);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__media" data-hero-media>
        <img
          className="hero__poster"
          src="/media/desert-2400.jpg"
          srcSet="/media/desert-1280.jpg 1280w, /media/desert-2400.jpg 2400w"
          sizes="100vw"
          width="2400"
          height="1792"
          alt=""
          fetchpriority="high"
          decoding="async"
        />
        {src && (
          <video
            ref={videoRef}
            className={`hero__video${playing ? ' is-playing' : ''}`}
            src={src}
            poster="/media/desert-1280.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            disablePictureInPicture
          />
        )}
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__shade" data-hero-shade aria-hidden="true" />

      <div className="hero__content" data-hero-content>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line hero__line--1"><span>Beyond</span></span>
          <span className="hero__line hero__line--2"><span>the familiar.</span></span>
        </h1>

        <div className="hero__aside">
          <p className="hero__lede intro intro--3">
            A distant landscape.<br />
            A different state of mind.
          </p>
          <a className="cta intro intro--4" href="#the-other-side">
            <span>Explore the unknown</span>
            <Arrow direction="down" />
          </a>
        </div>
      </div>

      <div className="hero__foot intro intro--5">
        <p className="mono">01 — Arrival</p>
        <a className="scroll-cue mono" href="#the-other-side" aria-label="Scroll to the next chapter">
          <span aria-hidden="true">Scroll</span>
          <i aria-hidden="true" />
        </a>
        <p className="mono hero__coords" aria-label="Fictional coordinates">23°26′ N <span aria-hidden="true">·</span> 47°03′ E <span aria-hidden="true">·</span> Elev. 1,204 m</p>
      </div>
    </section>
  );
}
