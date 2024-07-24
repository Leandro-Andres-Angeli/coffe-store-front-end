import { useEffect, useReducer, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from '../../hooks/useFetch';
import { Card, Container, Grid } from 'semantic-ui-react';
import AppButton from '../shared/AppButton';

const categoriesReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'init':
      console.log('init');
      return action.payload;

    default:
      return state;
  }
};

const initialState = {
  result: [],
  loading: false,
  success: false,
  done: false,
};
const AppCarousel = () => {
  const [categories, dispatchCategories] = useReducer(
    categoriesReducer,
    initialState
  );
  const url = 'http://localhost:8000/categories';
  // const [data, setData] = useState(initialState);
  // useFetch(url, setData);
  useFetch(url, dispatchCategories);

  useEffect(() => {
    // categoriesReducer({ type: 'init' });
  }, []);
  const [swiper, setSwiper] = useState(null);
  // useFetch(url, dispatchCategories);

  return (
    <Container bordered={'false'} className='pt2 mt5 b--transparent'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onBeforeInit={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {Boolean(categories?.result) &&
          categories.result.map((el) => {
            return (
              <SwiperSlide style={{ margin: 0 }} key={el.id}>
                <Card
                  fluid
                  color='yellow'
                  image={`images/categories/${el.category
                    .toLowerCase()
                    .replaceAll(' ', '-')}-0.jpg`}
                  header={el.category}
                  className='b--transparent w-100'
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Container className=' mt5 ml2 '>
        <Grid className=' w-100 flex btns-container justify-end  pa3 pr2'>
          <AppButton
            swiper={swiper}
            iconName='angle left'
            className='swiper-button-prev'
          >
            {' '}
          </AppButton>
          <AppButton
            swiper={swiper}
            iconName='angle right'
            className='swiper-button-next '
          ></AppButton>
        </Grid>
      </Container>
    </Container>
  );
};

export default AppCarousel;
