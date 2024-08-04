import { useEffect, useReducer, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from '../../hooks/useFetch';
import { Card, Container, Grid, Input } from 'semantic-ui-react';

import AppButton from '../shared/AppButton';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const categoriesReducer = (state = initialState, action) => {
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

  const swiperRef = useRef(null);

  useFetch(url, dispatchCategories, 'load');
  useEffect(() => {
    console.log('render');
  }, [url]);

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
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        slidesPerGroup={3}
        draggable
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        onAfterInit={function () {
          swiperRef.current = this;
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
    </Container>
  );
};

export default AppCarousel;
