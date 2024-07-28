import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar className="absolute" />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Category" element={<Category />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
