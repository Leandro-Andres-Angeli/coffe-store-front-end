import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/Navbar';

import Home from './assets/pages/Home';
import Category from './assets/pages/Category';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home></Home>} path='/'></Route>
        <Route
          element={<Category></Category>}
          path='category/:category/:page'
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
