import { useLayoutEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Manifesto from './components/Manifesto.jsx';
import Journey from './components/Journey.jsx';
import Crossing from './components/Crossing.jsx';
import Finale from './components/Finale.jsx';
import Footer from './components/Footer.jsx';
import { setupMotion } from './motion/setupMotion.js';

export default function App() {
  const rootRef = useRef(null);

  useLayoutEffect(() => setupMotion(rootRef.current), []);

  return (
    <div ref={rootRef} className="site">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Manifesto />
        <Journey />
        <Crossing />
        <Finale />
      </main>
      <Footer />
    </div>
  );
}
