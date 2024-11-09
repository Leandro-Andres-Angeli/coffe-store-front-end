import {
  Item,
  ItemContent,
  ItemExtra,
  ItemHeader,
  ItemMeta,
} from 'semantic-ui-react';
import FavoriteButton from './FavoriteButton';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const ProductItem = ({ el }) => {
  const {
    user: [user],
  } = useContext(AppContext);
  return (
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

      {user && <FavoriteButton item={el}></FavoriteButton>}
    </Item>
  );
};

export default ProductItem;
