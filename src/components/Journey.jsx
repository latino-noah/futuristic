import '../styles/journey.css';
import Chapter from './Chapter.jsx';
import { CHAPTERS } from '../content.js';

export default function Journey() {
  return (
    <section id="journey" className="journey" aria-labelledby="journey-title">
      <header className="journey__head grid">
        <p className="mono journey__label" data-reveal><span>03</span> — The journey</p>
        <h2 id="journey-title" className="journey__title" data-reveal>
          Three chapters,<br />one landscape.
        </h2>
        <p className="journey__intro" data-reveal>
          Read it slowly. It was never meant to be crossed quickly.
        </p>
      </header>

      {CHAPTERS.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter} />
      ))}
    </section>
  );
}
