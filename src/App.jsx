import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/Navbar';

import Home from './assets/pages/Home';
import Category from './assets/pages/Category';
import Appbar from './assets/components/shared/Appbar';
import { useEffect, useState } from 'react';

import Footer from './assets/components/shared/Footer';
import SignUp from './assets/pages/SignUp';

function App() {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  return (
    <BrowserRouter>
      <Navbar {...{ sidebarVisibility, setSidebarVisibility }}></Navbar>

      <Appbar {...{ sidebarVisibility, setSidebarVisibility }}></Appbar>

      <Routes>
        <Route element={<Home></Home>} path='/'></Route>
        <Route
          element={<Category></Category>}
          path='category/:category'
        ></Route>
        <Route element={<SignUp></SignUp>} path='signup'></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
