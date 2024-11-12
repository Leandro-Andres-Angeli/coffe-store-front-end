import { useContext, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon, Menu, MenuItem, Sidebar } from 'semantic-ui-react';
import AppContext from '../../context/AppContext';

const Appbar = ({ sidebarVisibility, setSidebarVisibility }) => {
  const location = useLocation();

  const {
    user: [user, userDispatcher],
  } = useContext(AppContext);
  useEffect(() => {
    setSidebarVisibility(false);
  }, [location, setSidebarVisibility]);
  return (
    <Sidebar
      as={Menu}
      animation={'push'}
      direction={'left'}
      icon='labeled'
      vertical
      visible={sidebarVisibility}
      width='thin'
      onHide={() => setSidebarVisibility(false)}
    >
      <MenuItem as={NavLink} to='/'>
        <Icon name='coffee' />
        Home
      </MenuItem>
      <MenuItem as={NavLink} to='/search'>
        <Icon name='search' />
        Search
      </MenuItem>
      {!user && (
        <>
          <MenuItem as={NavLink} to='/signup'>
            <Icon name='user plus' />
            Create account
          </MenuItem>
          <MenuItem as={NavLink} to='/login'>
            <Icon name='user circle' />
            Login
          </MenuItem>
        </>
      )}

      {user && (
        <>
          <MenuItem
            role='button'
            onClick={() => {
              localStorage.clear();
              userDispatcher({ type: 'logout' });
            }}
          >
            {' '}
            <Icon name='log out' />
            Log out
          </MenuItem>
          <MenuItem as={NavLink} to='profile/account/public'>
            <Icon name='user'></Icon>
            Account
          </MenuItem>
        </>
      )}
    </Sidebar>
  );
};

export default Appbar;
