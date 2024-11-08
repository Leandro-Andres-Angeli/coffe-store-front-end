import { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import AppContext from '../context/AppContext';

const FavoriteButton = ({ item }) => {
  const {
    user: [user],
  } = useContext(AppContext);
  const handleFavorites = async () => {
    try {
      const fetchToDb = await fetch('http://localhost:3001/api/favorites/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (fetchToDb.status !== 200) {
        throw Error('error updating user favorites');
      }
      const res = await fetchToDb.json();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div onClick={handleFavorites}>
      <Button circular icon='star'></Button>
    </div>
  );
};

export default FavoriteButton;
