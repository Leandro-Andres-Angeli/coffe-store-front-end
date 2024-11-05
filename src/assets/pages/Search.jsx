import { useReducer, useState } from 'react';
import { Input } from 'semantic-ui-react';
import useFetch from '../hooks/useFetch';
import { initialState } from '../dispatchers/categoriesDispatcher/categoriesReducer';
import productsReducer from '../dispatchers/productsDispatcher/productsReducer';

const SearchResultList = function ({ value }) {
  const [results, setResults] = useReducer(productsReducer, initialState);
  const { VITE_API_BASE_URL } = import.meta.env;
  useFetch(
    `${VITE_API_BASE_URL}products/search?name=${value}`,
    setResults,
    'load'
  );
  return (
    <>
      <div>{JSON.stringify(results)}</div>
    </>
  );
};
const Search = () => {
  const [search, setSearch] = useState({ search: false, value: null });

  const handleSearch = (e) => {
    const { value } = e.target;
    if (value.length < 3) {
      setSearch({ search: false, value: null });
      return;
    }
    setSearch({ search: true, value });
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
