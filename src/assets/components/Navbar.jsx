import { Menu, MenuHeader } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu className='pa3' as='nav'>
      <MenuHeader>
        {' '}
        <h1>☕ Coffee Shop</h1>
      </MenuHeader>
    </Menu>
  );
};

export default Navbar;
