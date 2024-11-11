import { Container, Dimmer, ItemGroup, Loader } from 'semantic-ui-react';
import ProductItem from '../ProductItem';
import { ToastContainer } from 'react-toastify';

const ProductsPresentational = ({ loading, title, products }) => {
  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
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
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default ProductsPresentational;
