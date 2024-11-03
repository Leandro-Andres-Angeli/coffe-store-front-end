import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const {
    user: [user],
  } = useContext(AppContext);
  return user ? children : <Navigate to='/' />;
};
export const NotAuth = ({ children }) => {
  const {
    user: [user],
  } = useContext(AppContext);
  return !user ? children : <Navigate to='/' />;
};
