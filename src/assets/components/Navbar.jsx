import { Button, Input, Menu, MenuHeader } from 'semantic-ui-react';
import { headerNavbar } from './navbarstyles.module.css';

import { Link } from 'react-router-dom';
const menuIcons = new Map([
  [true, 'close'],
  [false, 'bars'],
]);
const Navbar = ({ sidebarVisibility, setSidebarVisibility }) => {
  // const { headerNavbar } = navbarStyles;

  return (
    <Menu className={`pa3  ${headerNavbar}`} as='nav'>
      <MenuHeader>
        {' '}
        <Link to='/'>
          <h1 style={{ width: 'max-content' }}>☕ Coffee Shop</h1>
        </Link>
      </MenuHeader>
      <span className='dn flex-l flex-auto'>
        <Input
          className='flex-auto mh6 '
          placeholder='search product'
          icon={'search'}
          only='mobile'
        ></Input>
      </span>
      <span className='ml-auto'>
        <Button
          circular
          icon={menuIcons.get(sidebarVisibility).toString()}
          onClick={() => setSidebarVisibility((prev) => !prev)}
        ></Button>
      </span>
    </Menu>
  );
};

export default Navbar;
