import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart"

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar className="absolute" />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
