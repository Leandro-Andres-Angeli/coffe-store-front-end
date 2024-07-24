import { useRef } from 'react';
import styles from './appBtn.module.css';
import { useSwiper } from 'swiper/react';
import { Button } from 'semantic-ui-react';
import buttonDirection from '../../utils/buttonDirection';

const AppButton = ({ iconName }) => {
  //   const [icon, setIcon] = useState(iconOptions.init);

  const [, direction] = iconName.split(' ');
  console.log('dir', direction);
  const swiper = useSwiper();
  const btnRef = useRef();

  return (
    <Button
      ref={btnRef}
      //   onMouseEnter={() => setIcon(iconOptions.hover)}
      //   onMouseOver={() => setIcon(iconOptions.hover)}
      //   onMouseLeave={() => setIcon(iconOptions.init)}
      onClick={() => swiper[`slide${buttonDirection[direction]}`]()}
      className={`fs-3 ${styles.carouselBtn} `}
      icon={iconName}
      color='brown'
      circular
    ></Button>
  );
};

export default AppButton;
