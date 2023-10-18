import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";
import Bookshelf from "./pages/Bookshelf";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
