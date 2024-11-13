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
      <ProductsPresentational
        loading={false}
        products={{ data: { products: user.favorites } }}
        title={'Favorites'}
      ></ProductsPresentational>
    </Container>
  );
};

export default Favorites;
