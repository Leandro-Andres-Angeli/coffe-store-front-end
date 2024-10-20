import { useEffect, useState, useReducer } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import productsReducer, {
  initialState,
} from '../dispatchers/productsDispatcher/productsReducer';
import PaginationButtonsContainer from '../components/paginationBtns/PaginationButtonsContainer';

const Category = () => {
  const location = useLocation();
  console.log(location);
  /*  const { state } = location; */
  const params = useParams();

  const [products, dispatchProducts] = useReducer(
    productsReducer,
    initialState
  );
  const [pagination, setPagination] = useState(0);
  const { VITE_API_BASE_URL } = import.meta.env;
  const {
    loading,
    data: { prev, next },
  } = products;
  useFetch(
    `${VITE_API_BASE_URL}products/category?category=${params.category}&page=${pagination}`,
    dispatchProducts,
    'load',
    'products'
  );
  useEffect(() => {}, [pagination]);

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          Category
          {products && JSON.stringify(products)}
          <PaginationButtonsContainer
            {...{ setPagination, prev, next }}
          ></PaginationButtonsContainer>
        </>
      )}
    </div>
  );
};

export default Category;
