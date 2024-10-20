import { useEffect, useState, useReducer } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import productsReducer, {
  initialState,
} from '../dispatchers/productsDispatcher/productsReducer';
import PaginationButtonsContainer from '../components/paginationBtns/PaginationButtonsContainer';
import {
  Container,
  Dimmer,
  Item,
  ItemContent,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemMeta,
  Loader,
} from 'semantic-ui-react';

const Category = () => {
  const location = useLocation();
  console.log(location);
  const category = location.pathname.split('/').at(-1).replaceAll('%20', ' ');
  /*  const { state } = location; */
  const params = useParams();

  const [products, dispatchProducts] = useReducer(
    productsReducer,
    initialState
  );
  const [pagination, setPagination] = useState(0);
  const { VITE_API_BASE_URL } = import.meta.env;
  const { loading } = products;

  useFetch(
    `${VITE_API_BASE_URL}products/category?category=${params.category}&page=${pagination}`,
    dispatchProducts,
    'load',
    'products'
  );
  useEffect(() => {}, [pagination]);
  const [animateClasses] = useState('animate__animated animate__fadeIn');
  return (
    <div className='flex-grow-1'>
      {loading ? (
        /* loading */

        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
      ) : (
        <Container>
          <h2> Category : {category}</h2>
          <ItemGroup divided className={`${animateClasses}`}>
            {products.data &&
              products.data.products.map((el) => (
                <Item key={el.id}>
                  <ItemContent>
                    <ItemHeader>{el.name}</ItemHeader>
                    <ItemMeta>{el.description}</ItemMeta>

                    <ItemExtra>
                      {new Intl.NumberFormat('us', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(el.price)}
                    </ItemExtra>
                  </ItemContent>
                </Item>
              ))}
            {/* {products.data && JSON.stringify(products)} */}
          </ItemGroup>
          <PaginationButtonsContainer
            next={products?.data?.next}
            prev={products?.data?.prev}
            {...{ setPagination }}
          ></PaginationButtonsContainer>
        </Container>
      )}
    </div>
  );
};

export default Category;
