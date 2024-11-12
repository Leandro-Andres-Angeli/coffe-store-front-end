import { useContext, useEffect } from 'react';
/* import {
  Button,
  Container,
  Divider,
  Form,
  FormField,
  Input,
} from 'semantic-ui-react'; */

import { Outlet } from 'react-router-dom';

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
