import Link from "next/link";
import '../styles/Hero.css';
import { heroContent } from '../content';

export default function Hero() {
  const { tagline, title, subtitle, description, primaryBtn, secondaryBtn } = heroContent;

  return (
    <section className="fleet-hero">
      {/* Background */}
      <div className="fleet-hero__background"></div>

      {/* Content */}
      <div className="container">
        <div className="fleet-hero__grid">
          <div className="fleet-hero__content">
            {/* Tagline */}
            <p className="fleet-hero__tagline">{tagline}</p>

            {/* Main Title */}
            <h1 className="fleet-hero__title">{title}</h1>

            {/* Subtitle */}
            <h2 className="fleet-hero__subtitle">{subtitle}</h2>

            {/* Description */}
            <p className="fleet-hero__description">{description}</p>

            {/* Buttons */}
            <div className="fleet-hero__buttons">
              <Link href={primaryBtn.href} className="btn-gold">
                {primaryBtn.label}
              </Link>
              <Link href={secondaryBtn.href} className="btn-outline">
                {secondaryBtn.label}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="fleet-hero__image-wrapper">
            <img
              src="https://auslink-limousines.s3.ap-southeast-2.amazonaws.com/Images/LimousineAtPort.jpg"
              alt="Lincoln Super Stretch Limousine"
              className="fleet-hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
