import { useState } from 'react';
import {
  Container,
  Divider,
  Form,
  FormField,
  Input,
  Message,
} from 'semantic-ui-react';

import {
  checkEqualPassword,
  checkPasswordLength,
} from '../utils/validationForms';

const Security = () => {
  const [errors, setErrors] = useState({
    password: '',
    passwordLength: '',
  });

  return (
    <Container>
      <h2>Update password</h2>
      {JSON.stringify(errors)}
      <Form error className='pl2 pa3 pr5-m pr7-l'>
        <FormField
          width={16}
          required
          label='Current Password'
          control={Input}
          type='password'
          name='password'
        ></FormField>
        <Divider></Divider>
        <h4>New Password</h4>
        <FormField
          width={16}
          required
          label='Password'
          control={Input}
          type='password'
          name='password'
          onChange={(e) => checkPasswordLength(e, setErrors)}
        ></FormField>
        {errors.passwordLength && (
          <Message error content={errors.passwordLength} />
        )}
        <FormField
          onChange={(e) => {
            checkEqualPassword(e, setErrors);
          }}
          width={16}
          required
          label='Repeat Password'
          control={Input}
          type='password'
          name='password2'
        ></FormField>
        {errors.password.length !== 0 && (
          <Message error content={errors.password} />
        )}
        {errors.passwordLength.length !== 0 && 'error'}
      </Form>
    </Container>
  );
};
export default Security;
