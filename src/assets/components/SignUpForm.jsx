import { Button, Form, FormField, FormGroup, Input } from 'semantic-ui-react';

const SignUpForm = () => {
  return (
    <Form>
      <h4>Create Account</h4>

      <FormField
        width={12}
        label='Name'
        control={Input}
        type='text'
        name='name'
      ></FormField>

      <FormField
        width={12}
        label='Last Name'
        control={Input}
        type='text'
        name='lastName'
      ></FormField>
      <FormField
        width={12}
        label='E-mail'
        control={Input}
        type='email'
        name='email'
      ></FormField>
      <FormField
        width={12}
        label='Password'
        control={Input}
        type='password'
        name='password'
      ></FormField>
      <FormField
        width={12}
        label='Repeat Password'
        control={Input}
        type='password'
        name='password2'
      ></FormField>

      <FormField control={Button} type='submit'>
        Create Account
      </FormField>
    </Form>
  );
};

export default SignUpForm;
