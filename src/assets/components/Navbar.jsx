import {
  Button,
  ButtonContent,
  Icon,
  Input,
  Menu,
  MenuHeader,
} from 'semantic-ui-react';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
const menuIcons = new Map([
  [true, 'close'],
  [false, 'bars'],
]);
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Menu className='pa3 ' as='nav'>
      <MenuHeader>
        {' '}
        <h1>☕ Coffee Shop</h1>
      </MenuHeader>
      <Input placeholder='search product' icon={'search icon'}></Input>
      <Button onClick={() => setMenuOpen((prev) => !prev)}>
        <ButtonContent>
          <Icon name={menuIcons.get(menuOpen).toString()}></Icon>{' '}
        </ButtonContent>
      </Button>
    </Menu>
  );
};

export default Navbar;
