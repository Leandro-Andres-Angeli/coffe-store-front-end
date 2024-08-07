import { useEffect, useReducer, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from '../../hooks/useFetch';
import { Card, Container, Input } from 'semantic-ui-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { appCarouselStyles } from './appCarousel.module.css';
import { Link } from 'react-router-dom';
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

  useFetch(url, dispatchCategories, 'load');
  useEffect(() => {}, [url]);

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
        className={appCarouselStyles}
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        slidesPerGroup={3}
        draggable
        style={{
          '--swiper-pagination-bullet-size': '10px',
          '--swiper-pagination-bottom': '-25px',
          overflow: 'visible',
        }}
        pagination={{ clickable: true }}
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
                <Link
                  to={`./category/${el.category}`}
                  state={{ categoryId: el.id }}
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
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default AppCarousel;
