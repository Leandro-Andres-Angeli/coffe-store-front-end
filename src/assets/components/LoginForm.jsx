import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Button, Form, FormField, Input, Message } from 'semantic-ui-react';
import React from 'react';
import { checkEmail, checkErrors } from '../../utils';

const LoginForm = () => {
  const { VITE_API_BASE_URL } = import.meta.env;
  const [errors, setErrors] = useState({
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target;
    console.log(email, password);
    const user = { email, password };
    await loginUser(`${VITE_API_BASE_URL}auth/`, user);
  };

  const loginUser = async (url, userData) => {
    try {
      const request = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const serverRespose = await request.json();
      console.log(serverRespose);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} error className='pl2 pa3 pr5-m pr7-l'>
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
