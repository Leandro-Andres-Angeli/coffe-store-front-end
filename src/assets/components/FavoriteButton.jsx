import { useContext, useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import AppContext from '../context/AppContext';

const FavoriteButton = ({ item }) => {
  const {
    user: [user, userDispatcher],
  } = useContext(AppContext);

  const [clickAction, setClickAction] = useState(null);
  useEffect(() => {
    console.log('render');

    setClickAction(
      user.favorites.some((el) => el.id === item.id) ? 'pull' : 'push'
    );
  }, [item.id, user?.favorites]);
  useEffect(() => {
    console.log('render');
    localStorage.setItem('user', JSON.stringify(user));
  }, [user, user.favorites]);

  const handleFavorites = async () => {
    try {
      const fetchToDb = await fetch(
        `http://localhost:3001/api/favorites/add?userId=${user.id}&action=${clickAction}`,
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
      if (!res.ok) {
        throw Error('error updating user favorites');
      }

      userDispatcher({
        type: `${clickAction}Favorites`,
        payload: res.product,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div onClick={handleFavorites}>
      {clickAction}
      <Button
        circular
        color={`${clickAction === 'pull' && 'yellow'} `}
        icon='star'
      ></Button>
    </div>
  );
};

export default FavoriteButton;
