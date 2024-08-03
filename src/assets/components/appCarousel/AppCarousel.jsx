import { useEffect, useReducer, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from '../../hooks/useFetch';
import { Card, Container, Grid, Input } from 'semantic-ui-react';
import AppButton from '../shared/AppButton';

const categoriesReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };
    case 'load':
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
  const [url, setUrl] = useState('http://localhost:3001/api/categories');
  const [animateClasses] = useState('animate__animated animate__fadeIn');

  useFetch(url, dispatchCategories, 'load');
  useEffect(() => {
    console.log('render');
  }, [url]);
  const [swiper, setSwiper] = useState(null);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (value.length === 0) {
      setUrl('http://localhost:3001/api/categories/');
    }
    if (value.length >= 3) {
      setUrl(`http://localhost:3001/api/categories/search?regex=${value}`);
    }
  };
  return (
    <Container bordered={'false'} className=' pt2 mt5 b--transparent'>
      <h2>Featured Categories</h2>

      <Container>
        {' '}
        <Input
          onChange={handleOnChange}
          placeholder='search category'
          className='pv4'
          loading={categories.loading}
        ></Input>
      </Container>
      <Swiper
        className=''
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onAfterInit={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {Boolean(!categories?.result.length) && !categories?.loading && (
          <Container className={`${animateClasses} pv5`}>
            <p>No results</p>
          </Container>
        )}

        {Boolean(categories?.result) &&
          categories.result.map((el) => {
            return (
              <SwiperSlide
                className='dim cursor-pointer'
                style={{ margin: 0 }}
                key={el.id}
              >
                <Card
                  fluid
                  color='yellow'
                  image={`images/categories/${el.category
                    .toLowerCase()
                    .replaceAll(' ', '-')}-0.jpg`}
                  header={el.category}
                  className={`b--transparent w-100  ${animateClasses}`}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Container className=' mt5 ml2 '>
        {categories.result.length > 3 && (
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
        )}
      </Container>
    </Container>
  );
};

export default AppCarousel;
