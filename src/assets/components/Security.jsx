import { useContext, useState } from 'react';
import {
  Button,
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
import { checkErrors } from '../../utils';
import { customToast } from '../utils/customToast';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Security = () => {
  const navigate = useNavigate();
  const {
    user: [, userDispatcher],
  } = useContext(AppContext);
  const [errors, setErrors] = useState({
    password: '',
    passwordLength: '',
    differentNewPassword: '',
  });
  const { VITE_API_BASE_URL } = import.meta.env;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        currentPassword: { value: currentPasswordValue },
        password: { value: newPassword },
      } = e.target;
      const response = await fetch(`${VITE_API_BASE_URL}users/security`, {
        method: 'PATCH',
        body: JSON.stringify({
          currentPassword: currentPasswordValue,
          newPassword,
        }),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const json = await response.json();

      if (!json.ok) {
        customToast('error', json.message);
        return;
      }
      customToast('success', json.message);
      navigate('/');
      localStorage.clear();
      userDispatcher({ type: 'logout' });
    } catch (error) {
      customToast('error', error.message);
    }
  };
  return (
    <Container>
      <h2>Update password</h2>

      <Form
        onChange={(e) => {
          const { currentPassword, password } = e.currentTarget;
          if (currentPassword.value === password.value) {
            setErrors((prev) => ({
              ...prev,
              differentNewPassword:
                'new password must be  different than previous',
            }));
          } else {
            setErrors((prev) => ({ ...prev, differentNewPassword: '' }));
          }
        }}
        onSubmit={handleSubmit}
        error
        className='pl2 pa3 pr5-m pr7-l'
      >
        <FormField
          width={16}
          required
          label='Current Password'
          control={Input}
          type='password'
          name='currentPassword'
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
        {errors.differentNewPassword && (
          <Message error content={errors.differentNewPassword} />
        )}
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
        <Button disabled={!checkErrors(errors)} color='blue' type='submit'>
          update
        </Button>
      </Form>
    </Container>
  );
};
export default Security;
