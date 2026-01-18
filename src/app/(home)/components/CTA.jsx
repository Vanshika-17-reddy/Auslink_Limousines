import Link from "next/link";
import '../styles/CTA.css';
import { ctaContent } from '../content';

export default function CTA() {
  const { title, description, primaryBtn, secondaryBtn } = ctaContent;

  return (
    <section className="cta">
      {/* Decorative elements */}
      <div className="cta__glow cta__glow--left"></div>
      <div className="cta__glow cta__glow--right"></div>
      <div className="cta__pattern"></div>

      <div className="container cta__container">
        {/* Decorative lines */}
        <div className="cta__decorative-line cta__decorative-line--top"></div>

        <div className="cta__content">
          <h2 className="cta__title">{title}</h2>

          <p className="cta__description">{description}</p>

          <div className="cta__buttons">
            <Link href={primaryBtn.href} className="cta__btn cta__btn--primary">
              <span>{primaryBtn.label}</span>
            </Link>
            <a href={secondaryBtn.href} className="cta__btn cta__btn--secondary">
              <span>{secondaryBtn.label}</span>
            </a>
          </div>
        </div>

        <div className="cta__decorative-line cta__decorative-line--bottom"></div>
      </div>
    </section>
  );
}
