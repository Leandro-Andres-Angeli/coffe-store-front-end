import { useEffect, useState, useReducer } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PaginationButtonsContainer from '../components/paginationBtns/PaginationButtonsContainer';
import useFetch from '../hooks/useFetch';
import productsReducer, {
  initialState,
} from '../dispatchers/productsDispatcher/productsReducer';

const Category = () => {
  const { state } = useLocation();
  const params = useParams();

  const [products, dispatchProducts] = useReducer(
    productsReducer,
    initialState
  );
  const [pagination, setPagination] = useState(Number(params.page));
  const { VITE_API_BASE_URL } = import.meta.env;
  useFetch(
    `${VITE_API_BASE_URL}products/category?category=${params.category}&page=${pagination}`,
    dispatchProducts,
    'load',
    'products'
  );
  useEffect(() => {}, [pagination]);

  return (
    <div>
      Category
      {products && JSON.stringify(products)}
      <PaginationButtonsContainer></PaginationButtonsContainer>
    </div>
  );
};

export default Category;
