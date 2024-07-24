import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
const HeroSectionCarousel = ({ children }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      draggable={true}
      allowTouchMove={true}
    >
      {children}
    </Swiper>
  );
};

export default HeroSectionCarousel;
