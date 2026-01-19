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

          {/* Image */}
          <div className="featured__image-wrapper">
            <img
              src="https://auslink-limousines.s3.ap-southeast-2.amazonaws.com/Images/CoupleWithLimousineBehind.jpg"
              alt={imageLabel}
              className="featured__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
