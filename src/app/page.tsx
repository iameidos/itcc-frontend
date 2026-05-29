import CallToAction from '@/components/CallToActions';
import Features from '@/components/FeatureFirst';
import FeaturesTwo from '@/components/FeatureSecond';
import { HeroCarousel } from '@/components/HeroCarousel';
import { InformasiCarousel } from '@/components/InformasiCarousel';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Features />
      <FeaturesTwo />
      <InformasiCarousel />
      <CallToAction />
    </>
  );
}
