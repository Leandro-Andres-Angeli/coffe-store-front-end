import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './assets/components/Navbar';

import Home from './assets/pages/Home';
import Category from './assets/pages/Category';
import Appbar from './assets/components/shared/Appbar';
import { useState } from 'react';

import Footer from './assets/components/shared/Footer';
import SignUp from './assets/pages/SignUp';
import Login from './assets/pages/Login';
import AppContext from './assets/context/AppContext';
import { useEffect } from 'react';
import { NotAuth } from './assets/components/auth/Auth';
import Search from './assets/pages/Search';

function App() {
  window.addEventListener('storage', function () {
    console.log('storage');
  });
  const [user, setUser] = useState({ user: null, token: null });
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) || null);
  }, []);
  return (
    <AppContext.Provider value={{ user: [user, setUser] }}>
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
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
