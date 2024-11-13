import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  MenuItem,
} from 'semantic-ui-react';

const Profile = () => {
  return (
    <Container>
      <h1>Profile settings</h1>

      <Menu>
        <MenuItem>
          <Dropdown text='Account'>
            <DropdownMenu>
              <DropdownItem as={NavLink} to='account/public'>
                Public profile
              </DropdownItem>

              <DropdownItem as={NavLink} to='account/security'>
                Security
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MenuItem>

        <MenuItem as={NavLink} to='favorites'>
          Favorites{' '}
        </MenuItem>
      </Menu>

      <Outlet></Outlet>
    </Container>
  );
};

export default Profile;
