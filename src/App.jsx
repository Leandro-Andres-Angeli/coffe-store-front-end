import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './assets/components/Navbar';

import Home from './assets/pages/Home';
import Category from './assets/pages/Category';
import Appbar from './assets/components/shared/Appbar';
import { useReducer, useState } from 'react';

import Footer from './assets/components/shared/Footer';
import SignUp from './assets/pages/SignUp';
import Login from './assets/pages/Login';
import AppContext from './assets/context/AppContext';
import { useEffect } from 'react';
import { NotAuth, RequireAuth } from './assets/components/auth/Auth';

import Search from './assets/pages/Search';
import {
  initialState,
  userReducer,
} from './assets/reducers/usersReducer/usersReducer';
import Profile from './assets/pages/Profile';

import isTokenExpired from './assets/utils/isTokenExpired';
import Account from './assets/components/Account';
import Favorites from './assets/components/Favorites';
const Public = () => <p>Public</p>;
const Security = () => <p>Security</p>;
function App() {
  const [user, userDispatcher] = useReducer(userReducer, initialState);
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  useEffect(() => {
    const tokenExpiration = isTokenExpired(localStorage.getItem('token'));
    if (tokenExpiration) {
      localStorage.clear();
      userDispatcher({ type: 'logout' });
      return;
    }
    userDispatcher({
      type: 'login',
      payload: JSON.parse(localStorage.getItem('user')) || initialState,
    });
  }, []);
  return (
    <AppContext.Provider value={{ user: [user, userDispatcher] }}>
      <BrowserRouter>
        <Navbar {...{ sidebarVisibility, setSidebarVisibility }}></Navbar>

        <Appbar {...{ sidebarVisibility, setSidebarVisibility }}></Appbar>

        <Routes>
          <Route element={<Home></Home>} path='/'></Route>
          <Route
            element={<Category></Category>}
            path='category/:category'
          ></Route>
          <Route
            element={
              <NotAuth>
                <SignUp></SignUp>
              </NotAuth>
            }
            path='signup'
          ></Route>
          <Route
            element={
              <NotAuth>
                <Login></Login>
              </NotAuth>
            }
            path='login'
          ></Route>
          <Route element={<Search></Search>} path='search'></Route>
          <Route
            element={
              <RequireAuth>
                <Profile></Profile>
              </RequireAuth>
            }
            path='profile'
          >
            <Route path='account' element={<Account></Account>}>
              <Route path='public' element={<Public />}></Route>
              <Route path='security' element={<Security />}></Route>
            </Route>
            <Route path='favorites' element={<Favorites></Favorites>}></Route>
          </Route>
          {/* <Route element={<Navigate to='/' />} path='*'></Route> */}
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
