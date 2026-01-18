import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedVehicle from './components/FeaturedVehicle';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedVehicle />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
