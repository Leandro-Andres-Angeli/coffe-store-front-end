import { Button, Container, Icon, Menu, MenuHeader } from 'semantic-ui-react';
import { headerNavbar } from './navbarstyles.module.css';

import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { shoppingCart, inactive } from './shoppingCart.module.css';
import UserAvatar from './UserAvatar';
const menuIcons = new Map([
  [true, 'close'],
  [false, 'bars'],
]);

const Navbar = ({ sidebarVisibility, setSidebarVisibility }) => {
  const {
    user: [user],
  } = useContext(AppContext);

  useEffect(() => {}, [user]);
  return (
    <Container as='nav' className='mb4' fluid>
      <Menu className={` ${headerNavbar} pa3`} as='header'>
        <MenuHeader>
          {' '}
          <Link to='/'>
            <h1 style={{ width: 'max-content' }}>☕ Coffee Shop</h1>
          </Link>
        </MenuHeader>

        <span className='ml-auto flex'>
          <UserAvatar {...{ user }}></UserAvatar>
          {user && (
            <Link
              to='profile/favorites'
              className={`f3 ml-auto mt2 mr3 black-60  ${
                Boolean(user?.favorites.length) && shoppingCart
              } ${Boolean(user?.favorites.length) === false && inactive}  `}
              data-cart={user?.favorites.length}
              icon='shopping cart'
            >
              <Icon name='shopping cart ' className='ml-auto '></Icon>
            </Link>
          )}

          <Button
            circular
            icon={menuIcons.get(sidebarVisibility).toString()}
            onClick={() => setSidebarVisibility((prev) => !prev)}
          ></Button>
        </span>

        {/* shopping cart */}
      </Menu>
    </Container>
  );
};

export default Navbar;
