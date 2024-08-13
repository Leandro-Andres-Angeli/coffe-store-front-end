import { Button, Container } from 'semantic-ui-react';

const PaginationButtonsContainer = ({ setPagination }) => {
  return (
    <Container>
      <Button circular onClick={() => setPagination((prev) => prev - 1)}>
        prev
      </Button>
      <Button circular onClick={() => setPagination((prev) => prev + 1)}>
        next
      </Button>
    </Container>
  );
};

export default PaginationButtonsContainer;
