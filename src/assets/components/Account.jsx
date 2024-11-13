import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Account = () => {
  return (
    <>
      <h2>Profile</h2>

      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Account;
