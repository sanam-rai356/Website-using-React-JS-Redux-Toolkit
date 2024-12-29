import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import { useState } from "react";
import OrderConfirmation from "./pages/OrderConfirmation";
import FilterData from "./pages/FilterData";

const App = () => {
  const [order, setOrder] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmation order={order} />}
          />

          <Route path="/filter-data" element={<FilterData />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
