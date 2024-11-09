import { Outlet, Route, Routes } from 'react-router-dom';
export const Account = () => <p>Account</p>;
export const Favorites = () => <p>Favorites</p>;
const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Profile;
