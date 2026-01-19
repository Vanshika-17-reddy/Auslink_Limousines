import Hero from './components/Hero';
import VehicleShowcase from './components/VehicleShowcase';
import Reviews from '../components/Reviews';
import ServiceAreas from '../components/ServiceAreas';
import CTA from './components/CTA';
import { seo } from './seo';

export const metadata = {
  title: seo.meta.title,
  description: seo.meta.description,
  keywords: seo.meta.keywords,
  openGraph: {
    title: seo.meta.title,
    description: seo.meta.description,
    url: `https://auslinklimousines.au${seo.meta.path}`,
    images: [seo.meta.image],
  },
};

export default function Fleet() {
  return (
    <>
      <Hero />
      <VehicleShowcase />
      <Reviews />
      <ServiceAreas />
      <CTA />
    </>
  );
}
