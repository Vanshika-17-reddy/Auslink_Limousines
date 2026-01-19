'use client';

import { useState } from 'react';
import '../styles/VehicleShowcase.css';
import { vehicleShowcaseContent } from '../content';

export default function VehicleShowcase() {
  const { title, description, imageLabel, specs, features, weddingPackage, galleryImages } = vehicleShowcaseContent;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="vehicle-showcase">
      <div className="container">
        {/* Image Gallery - 4 Columns */}
        <div className="vehicle-showcase__gallery">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className="vehicle-showcase__gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.label}
                className="vehicle-showcase__gallery-image"
              />
            </button>
          ))}
        </div>

        {/* Car Name & Description */}
        <div className="vehicle-showcase__info">
          <h2 className="vehicle-showcase__title">{title}</h2>
          <p className="vehicle-showcase__description">{description}</p>
        </div>

        {/* Specs Grid */}
        <div className="vehicle-showcase__specs">
          {specs.map((spec, index) => (
            <div key={index} className="vehicle-showcase__spec">
              <div className="vehicle-showcase__spec-value">{spec.value}</div>
              <div className="vehicle-showcase__spec-label">{spec.label}</div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="vehicle-showcase__features">
          <ul className="vehicle-showcase__features-list">
            {features.map((feature, index) => (
              <li key={index} className="vehicle-showcase__feature-item">
                <svg className="vehicle-showcase__check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Wedding Package */}
        <div className="vehicle-showcase__wedding">
          <p className="vehicle-showcase__wedding-text">{weddingPackage}</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].label}
              className="lightbox__image"
            />
            <p className="lightbox__counter">{currentImage + 1} / {galleryImages.length}</p>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
