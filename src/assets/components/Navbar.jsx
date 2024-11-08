import { Button, Container, Menu, MenuHeader } from 'semantic-ui-react';
import { headerNavbar } from './navbarstyles.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
const menuIcons = new Map([
  [true, 'close'],
  [false, 'bars'],
]);
const Navbar = ({ sidebarVisibility, setSidebarVisibility }) => {
  // const { headerNavbar } = navbarStyles;
  const {
    user: [user],
  } = useContext(AppContext);
  return (
    <Container as='nav' fluid>
      <Menu className={` ${headerNavbar} pa3`} as='header'>
        <MenuHeader>
          {' '}
          <Link to='/'>
            <h1 style={{ width: 'max-content' }}>☕ Coffee Shop</h1>
          </Link>
        </MenuHeader>
        {JSON.stringify(user)}

        <span className='ml-auto'>
          <Button
            circular
            icon={menuIcons.get(sidebarVisibility).toString()}
            onClick={() => setSidebarVisibility((prev) => !prev)}
          ></Button>
        </span>
      </Menu>
    </Container>
  );
};

export default Navbar;
