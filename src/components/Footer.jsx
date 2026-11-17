import '../styles/footer.css';
import { INDEX } from '../content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__row grid">
        <p className="site-footer__mark">
          <a className="wordmark" href="#top">Purple Desert</a>
          <span className="mono">An expedition beyond the familiar.</span>
        </p>

        <nav className="site-footer__nav" aria-label="Chapters">
          <ol>
            {INDEX.map((item) => (
              <li key={item.href}>
                <a className="link" href={item.href}>
                  <span className="mono">{item.no}</span> {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <p className="mono site-footer__legal">
          © {new Date().getFullYear()} Purple Desert
          <br />
          A fictional destination
        </p>
      </div>

      <p className="site-footer__giant" aria-hidden="true">Purple Desert</p>
    </footer>
  );
}
