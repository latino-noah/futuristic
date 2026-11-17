// An image "plate": reserved aspect ratio, lazy image, optional parallax and mono caption.
export default function Plate({ src, w, h, alt, caption, ratio, position, className = '', parallax = true, eager = false }) {
  return (
    <figure className={`plate ${className}`}>
      <div className="plate__media" style={{ aspectRatio: ratio || `${w} / ${h}` }}>
        <img
          src={src}
          width={w}
          height={h}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={position ? { objectPosition: position } : undefined}
          data-parallax={parallax || undefined}
        />
      </div>
      {caption && <figcaption className="mono plate__caption">{caption}</figcaption>}
    </figure>
  );
}
