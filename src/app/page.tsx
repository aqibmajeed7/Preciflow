import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import IndustriesSection from '@/components/home/IndustriesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedProducts />
      <IndustriesSection />
      <WhyChooseSection />
    </>
  );
}
