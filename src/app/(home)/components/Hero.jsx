import Link from "next/link";
import '../styles/Hero.css';
import { heroContent } from '../content';

export default function Hero() {
  const { tagline, title, subtitle, description, primaryBtn, secondaryBtn, stats } = heroContent;

  return (
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

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="hero__stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero__stat">
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <svg
          className="hero__scroll-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
