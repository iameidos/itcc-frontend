import CallToAction from '@/components/CallToActions';
import FeaturesTwo from '@/components/FeatureSecond';
import OurServices from '@/components/OurServices';
import { CheckCertificateFields } from '@/components/CheckCertificate';
import { HeroCarousel } from '@/components/HeroCarousel';
import { InformasiCarousel } from '@/components/InformasiCarousel';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CheckCertificateFields />
      <FeaturesTwo />
      <OurServices />
      <InformasiCarousel />
      <CallToAction />
    </>
  );
}
