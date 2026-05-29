import CallToAction from '@/components/CallToActions';
import { CheckCertificateFields } from '@/components/CheckCertificate';
import Features from '@/components/FeatureFirst';
import FeaturesTwo from '@/components/FeatureSecond';
import { HeroCarousel } from '@/components/HeroCarousel';
import { InformasiCarousel } from '@/components/InformasiCarousel';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CheckCertificateFields />
      <Features />
      <FeaturesTwo />
      <InformasiCarousel />
      <CallToAction />
    </>
  );
}
