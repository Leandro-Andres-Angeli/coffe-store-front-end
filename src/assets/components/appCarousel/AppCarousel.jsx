import { useEffect, useReducer, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from '../../hooks/useFetch';
import { Card, Container } from 'semantic-ui-react';

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

  // useFetch(url, dispatchCategories);

  return (
    <Container bordered={'false'} className='pt2 mt5 b--transparent'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {/* {data?.success &&
          data.result.map((el) => (
            <SwiperSlide style={{ margin: 0 }} key={el.id}>
              <Card
                image={`images/categories/${el.category
                  .toLowerCase()
                  .replaceAll(' ', '-')}-0.jpg`}
                header={el.category}
                className='b--transparent'
              />
            </SwiperSlide>
          ))} */}
      </Swiper>
    </Container>
  );
};

export default AppCarousel;
