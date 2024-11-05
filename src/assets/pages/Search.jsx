import { useState } from 'react';
import { Container, Input } from 'semantic-ui-react';

import SearchResultList from '../components/SearchResultList';

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
      <div className='dn flex-l flex-auto mt3 mb3'>
        <Input
          onChange={handleSearch}
          className='flex-auto mh6 '
          placeholder='search product'
          icon={'search'}
        ></Input>
      </div>
      {!search.search && (
        <Container className='pt5 pb5 tc'>
          <p className='mr2'>Type to search</p>
        </Container>
      )}

      {search.search && (
        <section className='pt3 pb3'>
          <SearchResultList
            className='pt6 pb3'
            value={search.value}
          ></SearchResultList>
        </section>
      )}
    </section>
  );
};

export default Search;
