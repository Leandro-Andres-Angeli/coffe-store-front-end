import { useEffect, useState, useReducer } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';

import PaginationButtonsContainer from '../components/paginationBtns/PaginationButtonsContainer';
import { Container } from 'semantic-ui-react';

import ProductsPresentational from '../components/shared/ProductsPresentational';
import productsReducer, {
  initialState,
} from '../reducers/productsReducer/productsReducer';

const Category = () => {
  const location = useLocation();

  const category = location.pathname.split('/').at(-1).replaceAll('%20', ' ');

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

  return (
    <div className='flex-grow-1'>
      <ProductsPresentational
        {...{ loading, products }}
        title={`Category : ${category}`}
      ></ProductsPresentational>
      <Container>
        <PaginationButtonsContainer
          next={products?.data?.next}
          prev={products?.data?.prev}
          {...{ setPagination }}
        ></PaginationButtonsContainer>
      </Container>
    </div>
  );
  /*  return (
    <div className='flex-grow-1'>
      {loading ? (
        //  loading 

        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
      ) : (
        <Container>
          <h2> Category : {category}</h2>
          <ItemGroup divided className={`${animateClasses}`}>
            {products.data &&
              products.data.products.map((el) => (
                <ProductItem key={el.id} {...{ el }}></ProductItem>
              ))}
          
          </ItemGroup>
          <PaginationButtonsContainer
            next={products?.data?.next}
            prev={products?.data?.prev}
            {...{ setPagination }}
          ></PaginationButtonsContainer>
        </Container>
      )}
    </div>
  ); */
};

export default Category;
