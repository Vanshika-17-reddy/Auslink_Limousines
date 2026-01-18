import Link from 'next/link';
import '../styles/components/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link href="/" className="footer__logo">
                <span className="footer__logo-text">AUSLINK</span>
                <span className="footer__logo-sub">LIMOUSINES</span>
              </Link>
              <p className="footer__desc">
                Melbourne&apos;s premier luxury limousine service. Over 24 years of excellence in chauffeured transportation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__list">
                {['Home', 'Our Fleet', 'Services', 'Gallery', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="footer__link"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="footer__heading">Our Services</h4>
              <ul className="footer__list">
                {['Weddings', 'School Formals', 'Winery Tours', 'Corporate Events', 'Spring Racing', 'Airport Transfers'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/services#${item.toLowerCase().replace(' ', '-')}`}
                      className="footer__link"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer__heading">Contact Us</h4>
              <ul className="footer__contact-list">
                <li>
                  <a href="tel:0450860035" className="footer__link">
                    0450 860 035
                  </a>
                </li>
                <li>
                  <a href="mailto:info@auslinklimousines.au" className="footer__link">
                    info@auslinklimousines.au
                  </a>
                </li>
                <li>
                  <span className="footer__contact-text">Melbourne, Victoria</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              &copy; {currentYear} Auslink Limousines. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
