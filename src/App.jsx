import { Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details/:id" element={<ProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
