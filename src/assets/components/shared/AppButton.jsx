import { useRef } from 'react';
import styles from './appBtn.module.css';

import { Button } from 'semantic-ui-react';
import buttonDirection from '../../utils/buttonDirection';

const AppButton = ({ iconName, swiper }) => {
  //   const [icon, setIcon] = useState(iconOptions.init);

  const [, direction] = iconName.split(' ');

  const btnRef = useRef();

  return (
    <Button
      ref={btnRef}
      onClick={() => {
        console.log(swiper);
        swiper[`slide${buttonDirection[direction]}`]();
      }}
      className={`fs-3 ${styles.carouselBtn} `}
      icon={iconName}
      color='brown'
      circular
    ></Button>
  );
};

export default AppButton;
