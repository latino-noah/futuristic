import Plate from './Plate.jsx';

export default function Chapter({ chapter }) {
  const { id, no, title, text, quote, figures } = chapter;
  const [main, detail] = figures;
  const headingId = `chapter-${id}`;

  return (
    <article className={`chapter chapter--${id}`} aria-labelledby={headingId}>
      <span className="chapter__no" aria-hidden="true" data-reveal>{no}</span>

      <h3 id={headingId} className="chapter__title" data-reveal>
        <span className="mono chapter__index">{no} /</span> {title}
      </h3>

      <Plate {...main} className="chapter__plate" />
      {detail && <Plate {...detail} className="chapter__detail" parallax={false} />}

      {quote && <p className="chapter__quote" data-reveal>{quote}</p>}
      <p className="chapter__text" data-reveal>{text}</p>
    </article>
  );
}
