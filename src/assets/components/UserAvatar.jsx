import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

const UserAvatar = ({ user = null }) => {
  if (!user) {
    return;
  }
  return (
    <Link to='profile/account/public'>
      <div className='flex mr4 items-center '>
        <Image
          size='mini'
          circular
          src={
            user.avatar ||
            'https://tse1.mm.bing.net/th?id=OIP.7O4_GREtLbxqPdJCTmfatQHaHa&pid=Api'
          }
        ></Image>
        <p className='ml1'>{user.name}</p>{' '}
      </div>
    </Link>
  );
};

export default UserAvatar;
