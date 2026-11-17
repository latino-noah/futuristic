import '../styles/crossing.css';
export default function Crossing() {
  return (
    <section id="crossing" className="crossing" aria-labelledby="crossing-title" data-crossing>
      <div className="crossing__pin">
        <div className="crossing__frame" data-crossing-frame>
          <img
            src="/media/desert-2400.jpg"
            srcSet="/media/desert-1280.jpg 1280w, /media/desert-2400.jpg 2400w"
            sizes="100vw"
            width="2400"
            height="1792"
            alt="The full desert at night: rippled violet dunes, a mountain range and a faint pink glow along the horizon."
            loading="lazy"
            decoding="async"
            data-crossing-img
          />
        </div>

        <h2 id="crossing-title" className="crossing__words">
          <span className="crossing__word crossing__word--1" data-crossing-word>Cross</span>{' '}
          <span className="crossing__word crossing__word--2 mono" data-crossing-word>the</span>{' '}
          <span className="crossing__word crossing__word--3" data-crossing-word>horizon</span>
        </h2>

        <p className="crossing__label mono" data-crossing-meta>04 — The crossing</p>
        <p className="crossing__readout mono">
          <span>Distance to horizon</span>
          <span><span data-crossing-readout>0.0</span> km</span>
        </p>
      </div>
    </section>
  );
}
