import Link from "next/link";
import '../styles/Hero.css';
import { heroContent } from '../content';

export default function Hero() {
  const { tagline, title, subtitle, description, primaryBtn, secondaryBtn } = heroContent;

  return (
    <>
      <section className="hero">
        {/* Background */}
        <div className="hero__background"></div>

        {/* Content */}
        <div className="container hero__content">
          {/* Tagline */}
          <p className="hero__tagline">{tagline}</p>

          {/* Main Title */}
          <h1 className="hero__title">{title}</h1>

          {/* Subtitle */}
          <h2 className="hero__subtitle">{subtitle}</h2>

          {/* Description */}
          <p className="hero__description">{description}</p>

          {/* Buttons */}
          <div className="hero__buttons">
            <Link href={primaryBtn.href} className="btn-gold">
              {primaryBtn.label}
            </Link>
            <Link href={secondaryBtn.href} className="btn-outline">
              {secondaryBtn.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
