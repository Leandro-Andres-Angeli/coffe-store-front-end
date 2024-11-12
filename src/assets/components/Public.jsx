import { useContext, useRef } from 'react';

import {
  Button,
  Container,
  Form,
  FormField,
  Image,
  Input,
} from 'semantic-ui-react';
import AppContext from '../context/AppContext';

const Public = () => {
  const {
    user: [user],
  } = useContext(AppContext);
  const inputFileRef = useRef();
  return (
    <Form>
      <Container className='mb4 flex'>
        <Image
          src='https://react.semantic-ui.com/images/wireframe/square-image.png'
          size='small'
          circular
          className='mb3 '
        />
        <input type='file' ref={inputFileRef} hidden />
        <Button
          onClick={() => inputFileRef.current.click()}
          label='update picture'
          type='file'
          icon='picture'
          circular
          labelPosition='left'
        ></Button>
      </Container>
      <FormField className='mt4'>
        <Input defaultValue={user.name} type='text' label='name'></Input>
      </FormField>
      <FormField className='mt4'>
        <Input
          defaultValue={user.lastName}
          type='text'
          label='last name'
        ></Input>
      </FormField>
      <div className='flex mb3 mt4 justify-end'>
        <Button type='submit' className='ml-auto' color='blue'>
          update
        </Button>
        <Button type='reset' color='red'>
          reset changes
        </Button>
      </div>
    </Form>
  );
};

export default Public;
