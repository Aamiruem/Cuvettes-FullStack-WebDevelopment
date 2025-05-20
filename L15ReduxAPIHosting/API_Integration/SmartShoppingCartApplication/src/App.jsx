import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserProvider } from './Context/UserContext';
import store from './Store/Store';

import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout'; // Make sure the filename matches this casing
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
}

export default App;
