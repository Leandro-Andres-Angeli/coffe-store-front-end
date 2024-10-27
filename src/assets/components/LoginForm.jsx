import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Button, Form, FormField, Input, Message } from 'semantic-ui-react';
import React from 'react';
import { checkEmail, checkErrors } from '../../utils';

const LoginForm = () => {
  const [errors, setErrors] = useState({
    email: '',
  });
  return (
    <>
      <Form error className='pl2 pa3 pr5-m pr7-l'>
        <h4>Login</h4>
        <FormField
          required
          width={16}
          label='E-mail'
          control={Input}
          type='email'
          name='email'
          onChange={(e) => checkEmail(e, setErrors)}
        ></FormField>
        {errors.email && <Message error content={errors.email} />}
        <FormField
          width={16}
          required
          label='Password'
          control={Input}
          type='password'
          name='password'
        ></FormField>

        <FormField
          disabled={!checkErrors(errors)}
          color={checkErrors(errors) ? 'blue' : 'red'}
          control={Button}
          type='submit'
        >
          Login
        </FormField>
      </Form>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default LoginForm;
