import Link from "next/link";
import '../styles/CTA.css';
import { ctaContent } from '../content';

export default function CTA() {
  const { title, description, primaryBtn, secondaryBtn } = ctaContent;

  return (
    <section className="fleet-cta">
      {/* Decorative elements */}
      <div className="fleet-cta__glow fleet-cta__glow--left"></div>
      <div className="fleet-cta__glow fleet-cta__glow--right"></div>
      <div className="fleet-cta__pattern"></div>

      <div className="container fleet-cta__container">
        {/* Decorative lines */}
        <div className="fleet-cta__decorative-line fleet-cta__decorative-line--top"></div>

        <div className="fleet-cta__content">
          <h2 className="fleet-cta__title">{title}</h2>

          <p className="fleet-cta__description">{description}</p>

          <div className="fleet-cta__buttons">
            <Link href={primaryBtn.href} className="fleet-cta__btn fleet-cta__btn--primary">
              <span>{primaryBtn.label}</span>
            </Link>
            <a href={secondaryBtn.href} className="fleet-cta__btn fleet-cta__btn--secondary">
              <span>{secondaryBtn.label}</span>
            </a>
          </div>
        </div>

        <div className="fleet-cta__decorative-line fleet-cta__decorative-line--bottom"></div>
      </div>
    </section>
  );
}
