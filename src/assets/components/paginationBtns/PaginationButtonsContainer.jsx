import { Button } from 'semantic-ui-react';

const PaginationButtonsContainer = ({ setPagination, prev, next }) => {
  return (
    <div className='absolute ' style={{ bottom: '20%', right: '10%' }}>
      {prev && (
        <Button
          className='ui brown circular icon button'
          icon='angle left'
          circular
          onClick={() => setPagination((p) => p - 1)}
        ></Button>
      )}
      {next === true && (
        <Button
          icon='angle right'
          className='ui brown circular icon button'
          circular
          onClick={() => setPagination((p) => p + 1)}
        ></Button>
      )}
    </div>
  );
};

export default PaginationButtonsContainer;
