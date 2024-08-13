import { Button, Container } from 'semantic-ui-react';

const PaginationButtonsContainer = () => {
  return (
    <Container>
      <Button circular>prev</Button>
      <Button circular>next</Button>
    </Container>
  );
};

export default PaginationButtonsContainer;
