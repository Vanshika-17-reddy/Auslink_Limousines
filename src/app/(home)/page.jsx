import Hero from './components/Hero';
import Reviews from '@/app/components/Reviews';
import Services from './components/Services';
import FeaturedVehicle from './components/FeaturedVehicle';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Services />
      <FeaturedVehicle />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
