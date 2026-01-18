'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/components/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/fleet', label: 'Our Fleet' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="container">
        <div className="header__nav">
          {/* Logo */}
          <Link href="/" className="header__logo">
            <span className="header__logo-text">AUSLINK</span>
            <span className="header__logo-sub">LIMOUSINES</span>
          </Link>

          {/* Desktop Nav */}
          <div className="header__links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="header__link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="header__cta">
            <a href="tel:0450860035" className="header__phone">
              0450 860 035
            </a>
            <Link href="/contact" className="btn-gold header__book-btn">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="header__menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="header__menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="header__mobile-nav">
            <div className="header__mobile-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="header__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:0450860035" className="header__mobile-phone">
                0450 860 035
              </a>
              <Link href="/contact" className="btn-gold header__mobile-book" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
