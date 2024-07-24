import { SwiperSlide } from 'swiper/react';
import HeroSectionCarousel from './HeroSectionCarousel';
import HeroSwiperCard from './HeroSwiperCard';
import cardStyles from '../../assets/components/swipercard.module.css';

const HeroSection = () => {
  return (
    <main className=' ph2 pv4'>
      <HeroSectionCarousel>
        {[0, 1, 2, 3].map((el) => {
          return (
            <SwiperSlide key={el}>
              <HeroSwiperCard
                style={{
                  width: '100%',
                }}
                className={`
        ${cardStyles.cardStlyes}`}
                linkNum={el}
              ></HeroSwiperCard>
            </SwiperSlide>
          );
        })}
      </HeroSectionCarousel>
    </main>
  );
};

export default HeroSection;
