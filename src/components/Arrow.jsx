const ROTATE = { right: 0, down: 90, up: -90 };

export default function Arrow({ direction = 'right' }) {
  return (
    <svg className={`arrow arrow--${direction}`} viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <g transform={`rotate(${ROTATE[direction]} 12 12)`}>
        <path d="M1 12h21.5M16.5 6 22.5 12 16.5 18" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}
