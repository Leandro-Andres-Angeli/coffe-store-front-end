import { useState } from 'react';

import { Button, Form, FormField, Input, Message } from 'semantic-ui-react';
import { checkEmail, checkErrors } from '../../utils';
import { customToast } from '../utils/customToast';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const { VITE_API_BASE_URL } = import.meta.env;
  const navigate = useNavigate();
  const [isDirty, setIsDirty] = useState(false);
  const [areEmptyFields, setAreEmptyFields] = useState(true);
  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    password: '',
    passwordLength: '',
    email: '',
  });

  const postUser = async (url, data) => {
    let response;
    try {
      const request = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const serverResponse = await request.json();
      response = serverResponse;
      return serverResponse;
    } catch (error) {
      response = error;
      return error;
    } finally {
      const { ok } = response;
      const toastStyle = !ok ? 'error' : 'success';
      customToast(
        toastStyle,
        response.message,
        setTimeout(() => {
          navigate('/login');
        }, 3000)
      );
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, lastName, password, email } = e.target;
    const userData = {
      name: name.value.toLowerCase().trim(),
      lastName: lastName.value.toLowerCase().trim(),
      password: password.value.trim(),
      email: email.value.trim(),
    };

    await postUser(`${VITE_API_BASE_URL}auth/newUser`, userData);
  };

  const checkPasswordLength = (e) => {
    const { value } = e.target;
    if (value.length <= 7) {
      setErrors((prev) => ({
        ...prev,

        passwordLength: `${e.target.name} must be at least 8 chars long`,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,

        passwordLength: '',
      }));
    }
  };

  const checkString = (e) => {
    const checkNotString = /[^a-zA-Z ']/g.test(e.target.value);
    if (checkNotString) {
      setErrors((prev) => ({
        ...prev,

        [e.target.name]: `${e.target.name} must have only letters`,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,

        [e.target.name]: '',
      }));
    }
  };
  const checkEqualPassword = (e) => {
    const password2 = e.target.value;
    const password = e.target
      .closest('form')
      .querySelector('[name="password"]').value;

    if (password !== password2) {
      setErrors((prev) => ({
        ...prev,

        password: 'passwords must be equal',
      }));
    } else {
      setErrors((prev) => {
        return { ...prev, password: '' };
      });
    }
  };
  return (
    <>
      <Form
        error
        className='pl2 pa3 pr5-m pr7-l'
        onChange={(e) => {
          setIsDirty(true);
          const inputs = [...e.currentTarget.querySelectorAll('input')].map(
            (el) => el.value
          );
          setAreEmptyFields(inputs.some((val) => val === ''));
        }}
        onSubmit={handleSubmit}
      >
        <h4>Create Account</h4>

        <FormField
          required
          width={16}
          label='Name'
          control={Input}
          type='text'
          name='name'
          onChange={checkString}
        ></FormField>
        {errors.name && <Message error content={errors.name} />}
        <FormField
          width={16}
          required
          label='Last Name'
          control={Input}
          type='text'
          name='lastName'
          onChange={checkString}
        ></FormField>
        {errors.lastName && <Message error content={errors.lastName} />}
        <FormField
          width={16}
          required
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
          onChange={checkPasswordLength}
        ></FormField>
        {errors.passwordLength && (
          <Message error content={errors.passwordLength} />
        )}
        <FormField
          onChange={(e) => {
            checkEqualPassword(e);
          }}
          width={16}
          required
          label='Repeat Password'
          control={Input}
          type='password'
          name='password2'
        ></FormField>
        {errors.password && <Message error content={errors.password} />}

        <FormField
          color={
            (!checkErrors(errors) && isDirty) || areEmptyFields ? 'red' : 'blue'
          }
          disabled={areEmptyFields || (!checkErrors(errors) && isDirty)}
          control={Button}
          type='submit'
        >
          Create Account
        </FormField>
      </Form>
    </>
  );
};

export default SignUpForm;
