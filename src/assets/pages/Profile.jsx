import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  Divider,
  Grid,
  GridColumn,
  Menu,
  MenuItem,
} from 'semantic-ui-react';
export const Account = () => <p>Account</p>;
export const Favorites = () => <p>Favorites</p>;
const Profile = () => {
  return (
    <Container>
      <h1>Profile settings</h1>
      <Divider></Divider>
      <Grid>
        <GridColumn stretched width={12}>
          <Outlet></Outlet>
        </GridColumn>
        <GridColumn width={4}>
          <Menu fluid vertical tabular='right'>
            <MenuItem as={NavLink} to='account'>
              Account{' '}
            </MenuItem>
            <MenuItem as={NavLink} to='favorites'>
              Favorites{' '}
            </MenuItem>
          </Menu>
        </GridColumn>
      </Grid>
    </Container>
  );
};

export default Profile;
