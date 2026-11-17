import '../styles/manifesto.css';
import Lines from './Lines.jsx';

export default function Manifesto() {
  return (
    <section id="the-other-side" className="manifesto" aria-labelledby="manifesto-title">
      <div className="manifesto__grid grid">
        <p className="manifesto__label mono" data-reveal>
          <span>02</span> — The other side
        </p>

        <h2 id="manifesto-title" className="manifesto__title">
          <Lines lines={['Some places', 'aren’t found.', 'They’re felt.']} />
        </h2>

        <div className="manifesto__note">
          <span className="rule" aria-hidden="true" data-rule />
          <Lines
            as="p"
            className="manifesto__body"
            lines={['Past the noise, beyond the expected,', 'a quieter world unfolds.', 'Shaped by distance.', 'Defined by possibility.']}
          />
        </div>

        <p className="manifesto__aside mono" data-reveal>
          Field note
          <br />
          Night one, no signal
        </p>
      </div>
    </section>
  );
}
