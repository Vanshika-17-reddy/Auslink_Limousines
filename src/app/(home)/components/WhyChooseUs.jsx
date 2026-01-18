import '../styles/WhyChooseUs.css';
import { whyChooseUsContent } from '../content';

export default function WhyChooseUs() {
  const { tagline, title, reasons } = whyChooseUsContent;

  return (
    <section className="why">
      <div className="container">
        {/* Section Header */}
        <div className="why__header">
          <p className="why__tagline">{tagline}</p>
          <h2 className="why__title">{title}</h2>
        </div>

        {/* Reasons Grid */}
        <div className="why__grid">
          {reasons.map((item, index) => (
            <div key={index} className="why__item">
              <div className="why__number-wrapper">
                <span className="why__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="why__item-title">{item.title}</h3>
              <p className="why__item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
