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

        {/* Image Gallery - 4 Columns */}
        <div className="vehicle-showcase__gallery">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className="vehicle-showcase__gallery-item"
              onClick={() => openLightbox(index)}
            >
              <div className="vehicle-showcase__gallery-placeholder">
                <svg className="vehicle-showcase__gallery-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="vehicle-showcase__gallery-label">{image.label}</p>
              </div>
            </button>
          ))}
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
            <div className="lightbox__image-placeholder">
              <svg className="lightbox__image-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="lightbox__image-label">{galleryImages[currentImage].label}</p>
            </div>
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
