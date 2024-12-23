import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import Home from './home/Home';
import Shop from './shop/Shop';
import Blog from './blog/Blog';
import BlogPost from './blog/BlogPost';
import Contact from './contact/Contact';
import AccountLogIn from './account/AccountLogIn';
import AccountRegistration from './account/AccountRegistration';
import Favorites from './favorites/Favorites';
import Cart from './cart/Cart';
import store from "./cart/store";
import ProductDetails from './productDetails/ProductDetails';
import CheckOut from './checkOut/CheckOut';
import ScrollToTop from './productDetails/ScrollToTop';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/login" element={<AccountLogIn />} />
          <Route path="/register" element={<AccountRegistration />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
