// Renders text as masked lines. Without JS / motion the lines are simply visible.
export default function Lines({ lines, as: Tag = 'span', className = '', ...rest }) {
  return (
    <Tag className={`lines ${className}`} data-lines {...rest}>
      {lines.map((line, i) => (
        <span className={`line line--${i + 1}`} key={i}>
          <span className="line__inner">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
