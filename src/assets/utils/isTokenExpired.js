import { jwtDecode } from 'jwt-decode';

const isTokenExpired = (token) => {
  console.log('token', token);
  if (!token) return true;
  try {
    const decodeToken = jwtDecode(localStorage.getItem('token'));
    const currentTime = Date.now() / 1000;
    return decodeToken.exp < currentTime;
  } catch (error) {
    console.log(error);
    return true;
  }
};
export default isTokenExpired;
