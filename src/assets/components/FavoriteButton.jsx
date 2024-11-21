import { useContext, useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import AppContext from '../context/AppContext';
import { customToast } from '../utils/customToast';

const FavoriteButton = ({ item }) => {
  const { VITE_API_BASE_URL } = import.meta.env;
  const {
    user: [user, userDispatcher],
  } = useContext(AppContext);
  const token = localStorage.getItem('token');
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
    let response;
    if (!token) {
      return;
    }
    try {
      const fetchToDb = await fetch(
        `${VITE_API_BASE_URL}favorites?action=${clickAction}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(item),
        }
      );
      /*   if (fetchToDb.status !== 200) {
        throw Error('error updating user favorites');
      } */
      const res = await fetchToDb.json();
      if (!res.ok) {
        console.log(res);
        throw Error(res.message || 'error updating user favorites');
      }
      console.log('res', res);
      response = res;
      userDispatcher({
        type: `${clickAction}Favorites`,
        payload: res.product,
      });
    } catch (error) {
      console.log(error.message);
      response = error;
    } finally {
      const { ok } = response;
      const toastStyle = !ok ? 'error' : 'success';
      customToast(toastStyle, response.message, undefined, 500);
    }
  };
  return (
    <>
      <div onClick={handleFavorites}>
        {clickAction}
        <Button
          circular
          color={clickAction === 'pull' ? 'yellow' : 'white'}
          icon='star'
        ></Button>
      </div>
    </>
  );
};

export default FavoriteButton;
