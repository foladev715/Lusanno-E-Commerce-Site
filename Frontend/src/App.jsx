import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/errorPage";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Payment from "./pages/Payment";
import { useSelector } from "react-redux";
import Redirected from "./pages/Redirected";


const App = () => {
  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/"/>:<Login />} />
        <Route path="/register" element={user ? <Navigate to="/"/>:<Register />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/redirected" element={<Redirected />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
};

export default App;