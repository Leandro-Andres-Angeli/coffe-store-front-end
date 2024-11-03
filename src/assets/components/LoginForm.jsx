import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Button, Form, FormField, Input, Message } from 'semantic-ui-react';
import React from 'react';
import { checkEmail, checkErrors } from '../../utils';
import { customToast } from '../utils/customToast';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { VITE_API_BASE_URL } = import.meta.env;
  const navigate = useNavigate();
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
      if (request.status === 404) {
        throw Error('auth error');
      }
      const serverRespose = await request.json();

      response = serverRespose;
      localStorage.setItem('token', serverRespose.token);
      navigate('/');
    } catch (error) {
      console.log('in error');

      customToast('error', error.message);
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
