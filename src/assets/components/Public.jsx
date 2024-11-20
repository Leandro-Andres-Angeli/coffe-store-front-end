import { useContext, useRef, useState } from 'react';

import {
  Button,
  Container,
  Form,
  FormField,
  Image,
  Input,
} from 'semantic-ui-react';
import AppContext from '../context/AppContext';
import validateFileFormatImage from '../utils/validateFileFormatImage';
import { customToast } from '../utils/customToast';
import { useNavigate } from 'react-router-dom';

const Public = () => {
  const { VITE_API_BASE_URL } = import.meta.env;
  const navigate = useNavigate();
  const {
    user: [user, userDispatcher],
  } = useContext(AppContext);
  const inputFileRef = useRef();
  const [imageProfile, setimageProfile] = useState(user.avatar || '');
  const previewFiles = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result;
      console.log(result);
      setimageProfile(result);
    };
  };
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    const fileName = file.name;
    const fileFormat = fileName.slice(fileName.lastIndexOf('.') + 1);
    const validateFormat = validateFileFormatImage(fileFormat);

    if (!validateFormat) {
      console.log('not valid');
      customToast('error', 'file must be an image', undefined, 1000);
      setimageProfile(null);
      return;
    }
    /*  setimageProfile(URL.createObjectURL(file)); */
    previewFiles(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        name: { value: name },
        lastName: { value: lastName },
      } = e.target;
      const response = await fetch(`${VITE_API_BASE_URL}users/public`, {
        method: 'PATCH',
        body: JSON.stringify({ image: imageProfile, name: name, lastName }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const json = await response.json();

      customToast('success', json.message);
      navigate('/');
      localStorage.clear();
      userDispatcher({ type: 'logout' });
    } catch (error) {
      customToast('error', error.message);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Container className='mb4 flex'>
        <Image
          src={`${
            imageProfile ||
            'https://react.semantic-ui.com/images/wireframe/square-image.png'
          }`}
          size='small'
          circular
          className='mb3 '
        />
        <input
          name='profilePic'
          accept='image/jpg , image/jpeg , image/png , image/webp'
          type='file'
          ref={inputFileRef}
          hidden
          onChange={(e) => handlePictureUpload(e)}
        />

        <Button
          onClick={() => inputFileRef.current.click()}
          label='update picture'
          icon='picture'
          circular
          labelPosition='left'
          type='button'
        ></Button>

        <Button
          onClick={() => setimageProfile(user.avatar)}
          label='cancel update picture'
          icon='user cancel'
          circular
          labelPosition='left'
          type='button'
        ></Button>
        <Button
          onClick={() => setimageProfile(null)}
          label='no picture'
          icon='user cancel'
          circular
          labelPosition='left'
          type='button'
        ></Button>
      </Container>
      <FormField className='mt4'>
        <Input
          defaultValue={user.name}
          name='name'
          type='text'
          label='name'
          required
        ></Input>
      </FormField>
      <FormField className='mt4'>
        <Input
          defaultValue={user.lastName}
          type='text'
          label='last name'
          name='lastName'
          required
        ></Input>
      </FormField>
      <div className='flex mb3 mt4 justify-end'>
        <Button type='submit' className='ml-auto' color='blue'>
          update
        </Button>
        <Button
          type='reset'
          onClick={() => setimageProfile(user.avatar)}
          color='red'
        >
          reset changes
        </Button>
      </div>
    </Form>
  );
};

export default Public;
