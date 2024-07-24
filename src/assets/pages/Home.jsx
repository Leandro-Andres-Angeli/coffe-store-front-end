import AppCarousel from '../components/appCarousel/AppCarousel';
import HeroSection from '../components/HeroSection';
import { Institutional } from '../components/Institutional';

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AppCarousel></AppCarousel>
      <Institutional></Institutional>
    </>
  );
};

export default Home;
