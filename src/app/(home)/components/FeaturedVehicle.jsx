import Link from "next/link";
import '../styles/FeaturedVehicle.css';
import { featuredVehicleContent } from '../content';

export default function FeaturedVehicle() {
  const { tagline, title, description, features, btnText, btnHref, imageLabel } = featuredVehicleContent;

  return (
    <section className="featured">
      <div className="container">
        <div className="featured__grid">
          {/* Content */}
          <div>
            <p className="featured__tagline">{tagline}</p>
            <h2 className="featured__title">{title}</h2>
            <p className="featured__description">{description}</p>

            {/* Features */}
            <ul className="featured__list">
              {features.map((feature, index) => (
                <li key={index} className="featured__list-item">
                  <svg className="featured__check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={btnHref} className="btn-gold">
              {btnText}
            </Link>
          </div>

          {/* Image Placeholder */}
          <div className="featured__image-wrapper">
            <div className="featured__image-placeholder">
              <div className="featured__image-content">
                <svg className="featured__image-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <p className="featured__image-label">{imageLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
