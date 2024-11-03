import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../pages/ContactUs";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
