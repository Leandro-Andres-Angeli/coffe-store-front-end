import {
  Container,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Image,
} from 'semantic-ui-react';
import { cardStyles } from './swipercard.module.css';
import AppButton from './shared/AppButton';
import { useSwiper } from 'swiper/react';
const HeroSwiperCard = ({ linkNum }) => {
  return (
    <Container
      className={`${cardStyles} b--black-10 b--solid shadow-1 br2-l pa2 pa0-ns`}
      bordered='true'
    >
      <Grid columns={2} stackable>
        <GridRow className='items-center'>
          <GridColumn className='pb3'>
            <Image
              src={`images/Caramel_Macchiato_${linkNum}.jpg`}
              className='mt4 pl3 '
              wrapped
            />
          </GridColumn>
          <GridColumn
            style={{ display: 'flex', justifyContent: 'space-around' }}
            className='flex flex-column'
          >
            <div className='mr-auto '>
              <h2>Delicious Coffee</h2>
              <Divider />
            </div>
            <p className='mb4-m'>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className=' flex btns-container justify-end gap-1 pb3 ph3'>
              <AppButton iconName='angle left' swiper={useSwiper()}></AppButton>
              <AppButton
                iconName='angle right'
                swiper={useSwiper()}
              ></AppButton>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};

export default HeroSwiperCard;
