import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Button, Form, FormField, Input, Message } from 'semantic-ui-react';
import React from 'react';

const LoginForm = () => {
  return (
    <>
      <h4>Login</h4>
      <Form error className='pl2 pa3 pr5-m pr7-l'>
        <FormField
          required
          width={16}
          label='E-mail'
          control={Input}
          type='email'
          name='email'
        ></FormField>

        <FormField
          width={16}
          required
          label='Password'
          control={Input}
          type='password'
          name='password'
        ></FormField>

        <FormField color={'blue'} control={Button} type='submit'>
          Login
        </FormField>
      </Form>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default LoginForm;
