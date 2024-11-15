import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Container } from 'semantic-ui-react';
import ProductsPresentational from './shared/ProductsPresentational';

const Favorites = () => {
  const {
    user: [user],
  } = useContext(AppContext);
  if (user.favorites.length === 0) {
    return <Container>You have no favorites in your account yet</Container>;
  }
  return (
    <Container>
      <div className='overflow-y-scroll' style={{ maxHeight: '50vh' }}>
        <ProductsPresentational
          loading={false}
          products={{ data: { products: user.favorites } }}
          title={'Favorites'}
        ></ProductsPresentational>
      </div>
    </Container>
  );
};

export default Favorites;
