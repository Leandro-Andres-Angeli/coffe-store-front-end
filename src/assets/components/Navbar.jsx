import {
  Button,
  ButtonContent,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Input,
  Menu,
  MenuHeader,
} from 'semantic-ui-react';
import { headerNavbar } from './navbarstyles.module.css';
import { useState } from 'react';
const menuIcons = new Map([
  [true, 'close'],
  [false, 'bars'],
]);
const Navbar = () => {
  // const { headerNavbar } = navbarStyles;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Menu className={`pa3  ${headerNavbar}`} as='nav'>
      <MenuHeader>
        {' '}
        <h1 style={{ width: 'max-content' }}>☕ Coffee Shop</h1>
      </MenuHeader>

      <Input
        className='flex-auto mh6 dn'
        placeholder='search product'
        icon={'search icon'}
      ></Input>

      <Button
        circular
        icon={menuIcons.get(menuOpen).toString()}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {/* <ButtonContent>
          <Icon name={menuIcons.get(menuOpen).toString()}></Icon>{' '}
        </ButtonContent> */}
      </Button>
    </Menu>
  );
};

export default Navbar;
