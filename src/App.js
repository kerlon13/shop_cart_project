import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import SingleCategory from './pages/SingleCategory';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavMenu />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<Categories />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/:category' element={<SingleCategory />} />
          <Route path='/:category/:product_id' element={<SingleProduct />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

