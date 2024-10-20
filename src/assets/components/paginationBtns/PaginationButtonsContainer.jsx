import { Button, Container } from 'semantic-ui-react';

const PaginationButtonsContainer = ({ setPagination, prev, next }) => {
  console.log(next);
  console.log(prev);

  return (
    <Container>
      {prev && (
        <Button circular onClick={() => setPagination((p) => p - 1)}>
          prev
        </Button>
      )}
      {next === true && (
        <Button circular onClick={() => setPagination((p) => p + 1)}>
          next
        </Button>
      )}
    </Container>
  );
};

export default PaginationButtonsContainer;
