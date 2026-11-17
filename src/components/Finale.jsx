import '../styles/finale.css';
import Arrow from './Arrow.jsx';
import Lines from './Lines.jsx';

export default function Finale() {
  return (
    <section id="enter" className="finale" aria-labelledby="finale-title">
      <div className="finale__media" aria-hidden="true">
        <img src="/media/sky.jpg" width="2400" height="1220" alt="" loading="lazy" decoding="async" data-parallax />
      </div>

      <div className="finale__content grid">
        <p className="mono finale__label" data-reveal><span>05</span> — Enter the desert</p>
        <h2 id="finale-title" className="finale__title">
          <Lines lines={['The unknown', 'is calling.']} />
        </h2>
        <a className="cta finale__cta" href="#top" data-reveal>
          <span>Back to the horizon</span>
          <Arrow direction="up" />
        </a>
      </div>
    </section>
  );
}
