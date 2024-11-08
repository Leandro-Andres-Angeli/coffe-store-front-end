import { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import AppContext from '../context/AppContext';

const FavoriteButton = ({ item }) => {
  const {
    user: [user, userDispatcher],
  } = useContext(AppContext);
  const itemIsInFavorites = user.favorites.some((el) => el.id === item.id);
  const handleFavorites = async () => {
    try {
      const fetchToDb = await fetch(
        `http://localhost:3001/api/favorites/add?userId=${user.id}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        }
      );
      if (fetchToDb.status !== 200) {
        throw Error('error updating user favorites');
      }
      const res = await fetchToDb.json();
      userDispatcher({ type: 'addToFavorites', payload: res.product });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div onClick={handleFavorites}>
      {JSON.stringify}
      <Button
        circular
        color={`${itemIsInFavorites && 'yellow'} `}
        icon='star'
      ></Button>
    </div>
  );
};

export default FavoriteButton;
