import { useContext, useEffect } from 'react';
/* import {
  Button,
  Container,
  Divider,
  Form,
  FormField,
  Input,
} from 'semantic-ui-react'; */
import AppContext from '../context/AppContext';
import { Outlet, Route, Routes } from 'react-router-dom';

{
  /* <Form>
      <h2>Account</h2>
      <FormField>
        <Input defaultValue={user.name} type='text' label='name'></Input>
      </FormField>
      <FormField>
        <Input
          defaultValue={user.lastName}
          type='text'
          label='last name'
        ></Input>
      </FormField>
      <Container>
        <h3>Password</h3>
        <FormField>
          <Input
            defaultValue={user.lastName}
            type='password'
            label='last name'
          ></Input>
        </FormField>
      </Container>

      <Button type='reset'>cancel</Button>
    </Form> */
}
const Account = () => {
  /*  const {
    user: [user],
  } = useContext(AppContext); */

  return (
    <>
      <h2>Profile</h2>

      <Outlet></Outlet>
    </>
  );
};

export default Account;
