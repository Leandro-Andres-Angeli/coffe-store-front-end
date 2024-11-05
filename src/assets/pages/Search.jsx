import { useEffect, useReducer, useState } from 'react';
import { Input } from 'semantic-ui-react';
import useFetch from '../hooks/useFetch';
import { initialState } from '../dispatchers/categoriesDispatcher/categoriesReducer';
import productsReducer from '../dispatchers/productsDispatcher/productsReducer';
import ProductsPresentational from '../components/shared/ProductsPresentational';
import PaginationButtonsContainer from '../components/paginationBtns/PaginationButtonsContainer';

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
const Search = () => {
  const [search, setSearch] = useState({ search: false, value: null });

  const handleSearch = (e) => {
    const value = e.target.value.trim();

    if (value.length <= 2) {
      setSearch({ search: false, value: null });
      return;
    } else {
      setSearch({ search: true, value });
    }
  };

  return (
    <section>
      <span className='dn flex-l flex-auto'>
        <Input
          onChange={handleSearch}
          className='flex-auto mh6 '
          placeholder='search product'
          icon={'search'}
        ></Input>
      </span>
      <section>{!search.search && <p>Type to search</p>}</section>
      <section>
        {search.search && (
          <SearchResultList value={search.value}></SearchResultList>
        )}
      </section>
    </section>
  );
};

export default Search;
