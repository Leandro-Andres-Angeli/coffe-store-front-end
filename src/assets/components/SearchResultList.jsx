import { useEffect, useReducer, useState } from 'react';
import productsReducer from '../dispatchers/productsDispatcher/productsReducer';
import { initialState } from '../dispatchers/categoriesDispatcher/categoriesReducer';
import useFetch from '../hooks/useFetch';
import ProductsPresentational from './shared/ProductsPresentational';
import PaginationButtonsContainer from './paginationBtns/PaginationButtonsContainer';

const SearchResultList = function ({ value }) {
  const [pagination, setPagination] = useState(0);

  const [products, dispatchProducts] = useReducer(
    productsReducer,
    initialState
  );
  useEffect(() => {}, [pagination]);

  const { VITE_API_BASE_URL } = import.meta.env;
  useFetch(
    `${VITE_API_BASE_URL}products/search?name=${value}&page=${pagination}`,
    dispatchProducts,
    'load'
  );
  const { loading } = products;
  return (
    <>
      <ProductsPresentational
        {...{ loading, products }}
        title={'Search results'}
      ></ProductsPresentational>
      <PaginationButtonsContainer
        next={products?.data?.next}
        prev={products?.data?.prev}
        {...{ setPagination }}
      ></PaginationButtonsContainer>
    </>
  );
};
export default SearchResultList;
