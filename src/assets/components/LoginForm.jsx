import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Button, Form, FormField, Input, Message } from 'semantic-ui-react';
import React from 'react';
import { checkEmail, checkErrors } from '../../utils';
import { customToast } from '../utils/customToast';

const LoginForm = () => {
  const { VITE_API_BASE_URL } = import.meta.env;
  const [errors, setErrors] = useState({
    email: '',
  });
  const [areEmptyFields, setAreEmptyFields] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target;

    const user = { email, password };
    await loginUser(`${VITE_API_BASE_URL}auth/`, user);
  };

  const loginUser = async (url, userData) => {
    let response;
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
      response = serverRespose;
      if (!serverRespose.ok) {
        return;
      }
    } catch (error) {
      console.log(error);
      response = error;
    } finally {
      const { ok } = response;
      customToast(!ok ? 'error' : 'success', response.message);
    }
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        error
        className='pl2 pa3 pr5-m pr7-l'
        onChange={(e) => {
          const inputs = [...e.currentTarget.querySelectorAll('input')].map(
            (el) => el.value
          );
          setAreEmptyFields(inputs.some((val) => val === ''));
        }}
      >
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
          disabled={areEmptyFields || !checkErrors(errors)}
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
