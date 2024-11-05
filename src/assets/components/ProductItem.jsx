import {
  Item,
  ItemContent,
  ItemExtra,
  ItemHeader,
  ItemMeta,
} from 'semantic-ui-react';

const ProductItem = ({ el }) => {
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
    </Item>
  );
};

export default ProductItem;
