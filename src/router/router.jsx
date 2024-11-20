import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
