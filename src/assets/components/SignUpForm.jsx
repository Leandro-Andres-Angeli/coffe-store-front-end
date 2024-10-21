import { useState } from 'react';
import { Button, Form, FormField, Input, Message } from 'semantic-ui-react';

const SignUpForm = () => {
  const [isDirty, setIsDirty] = useState(false);
  const [areEmptyFields, setAreEmptyFields] = useState(true);
  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    password: '',
    password2: '',
    email: '',
  });
  const handleSubmit = (e) => {
    console.log(e.target);
  };
  const checkEmail = (e) => {
    const checkValidEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/g.test(
      e.target.value
    );
    if (!checkValidEmail) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: `${e.target.name} must be a valid email`,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: '',
      }));
    }
  };
  const checkErrors = (obj) => Object.values(obj).every((val) => val === '');
  const checkString = (e) => {
    const checkNotString = /[^a-zA-Z]/g.test(e.target.value);
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
    <Form
      error
      className='pa3'
      onChange={(e) => {
        setIsDirty(true);
        const inputs = [...e.currentTarget.querySelectorAll('input')].map(
          (el) => el.value
        );
        setAreEmptyFields(inputs.some((val) => val === ''));
      }}
      onSubmit={handleSubmit}
    >
      {JSON.stringify(checkErrors(errors))}
      {JSON.stringify(areEmptyFields)}
      <h4>Create Account</h4>
      {JSON.stringify(errors)}
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
        onChange={checkEmail}
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
        onChange={checkEqualPassword}
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
  );
};

export default SignUpForm;
