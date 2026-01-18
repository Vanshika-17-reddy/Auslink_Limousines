import Link from "next/link";
import '../styles/Services.css';
import { servicesContent } from '../content';

export default function Services() {
  const { tagline, title, description, services, btnText, btnHref } = servicesContent;

  return (
    <section className="services">
      <div className="container">
        {/* Section Header */}
        <div className="services__header">
          <p className="services__tagline">{tagline}</p>
          <h2 className="services__title">{title}</h2>
          <p className="services__description">{description}</p>
        </div>

        {/* Services Grid */}
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="services__card">
              {/* Icon */}
              <div className="services__icon-wrapper">
                <svg className="services__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>

              {/* Content */}
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="services__cta">
          <Link href={btnHref} className="btn-outline">
            {btnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
