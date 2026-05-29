import { industriesSliderData } from '@/lib/data/industries-slider.data';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function IndustriesSection() {
  return (
    <>
      {/* INDUSTRY SECTORS */}
      <h2 className="text-3xl font-bold mb-12">Industri yang Kami Layani</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500 }}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="rounded-xl overflow-hidden"
      >
        {industriesSliderData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[380px] md:h-[480px] rounded-xl overflow-hidden">
              {/* Background Image */}
              <Image src={item.image} alt={item.title} width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90 max-w-xl">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
