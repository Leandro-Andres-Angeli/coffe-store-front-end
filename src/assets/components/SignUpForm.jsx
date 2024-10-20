import { useState } from 'react';
import { Button, Form, FormField, Input, Message } from 'semantic-ui-react';

const SignUpForm = () => {
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    console.log(e.target);
  };
  const checkString = (e) => {
    const checkNotString = /[^a-zA-Z]/g.test(e.target.value);
    if (checkNotString) {
      console.log('in');

      setErrors((prev) => ({
        ...prev,
        [e.target.name]: `Error ${e.target.name} must have only letters`,
      }));
    } else {
      setErrors((prev) => {
        delete prev[e.target.name];
        return prev;
      });
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
        password: 'error passwords must be equal',
      }));
    } else {
      setErrors((prev) => {
        delete prev['password'];
        return prev;
      });
    }
  };
  return (
    <Form error className='pa3' onSubmit={handleSubmit}>
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

      <FormField
        width={16}
        required
        label='Last Name'
        control={Input}
        type='text'
        name='lastName'
        onChange={checkString}
      ></FormField>
      <FormField
        width={16}
        required
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

      <FormField
        onChange={checkEqualPassword}
        width={16}
        required
        label='Repeat Password'
        control={Input}
        type='password'
        name='password2'
      ></FormField>
      <Message error content={errors.password} />
      <FormField control={Button} type='submit'>
        Create Account
      </FormField>
    </Form>
  );
};

export default SignUpForm;
