import { Container, Dimmer, ItemGroup, Loader } from 'semantic-ui-react';
import ProductItem from '../ProductItem';

const ProductsPresentational = ({ loading, title, products }) => {
  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
    );
  }
  if (!products?.data?.products?.length) {
    return (
      <Container>
        <p>No results</p>
      </Container>
    );
  }
  return (
    <Container>
      <h2>{title}</h2>

      <ItemGroup divided className='animate__animated animate__fadeIn'>
        {products.data &&
          products.data.products.map((el) => (
            <ProductItem key={el.id} {...{ el }}></ProductItem>
          ))}
      </ItemGroup>
    </Container>
  );
};

export default ProductsPresentational;
