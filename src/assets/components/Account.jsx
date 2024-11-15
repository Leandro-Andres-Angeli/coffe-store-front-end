import { Outlet } from 'react-router-dom';

const Account = () => {
  return (
    <>
      <h2>Profile</h2>

      <Outlet></Outlet>
    </>
  );
};

export default Account;
