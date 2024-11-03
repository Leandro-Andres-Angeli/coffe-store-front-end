import { useContext, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon, Menu, MenuItem, Sidebar } from 'semantic-ui-react';
import AppContext from '../../context/AppContext';

const Appbar = ({ sidebarVisibility, setSidebarVisibility }) => {
  const location = useLocation();
  const {
    user: [_, setUser],
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
      <MenuItem as='a'>
        <Icon name='search' />
        Search
      </MenuItem>

      <MenuItem as={NavLink} to='/signup'>
        <Icon name='user plus' />
        Create account
      </MenuItem>
      <MenuItem as={NavLink} to='/login'>
        <Icon name='user circle' />
        Login
      </MenuItem>
      <MenuItem
        role='button'
        onClick={() => {
          localStorage.clear();
          setUser(null);
        }}
      >
        <Icon name='log out' />
        Log out
      </MenuItem>
    </Sidebar>
  );
};

export default Appbar;
