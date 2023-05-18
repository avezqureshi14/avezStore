import LoginForm from "./components/Login";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/Footer";
import "./App.css";
import Product from "./components/Products/ProductCard";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/Payment/Checkout";
import CheckoutCard from "./components/Slips/Slip";
import CheckoutPage from "./components/Slips/Generate";
import ProductDetail from "./components/Products/ProductDetail";
import Review from "./components/Reviews/Review";
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
        <Routes>
        
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/bill/:id" element={<CheckoutCard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/products" element={<Products />} />
          <Route path="/generate" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      <FooterComponent/>
    </div>
  );
}
export default App;
