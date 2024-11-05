import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <hr />
    <footer className="bg-b[rgb(249 246 242)] text-black h-[20vh] flex justify-center items-center py-6">
      <div className="flex flex-col justify-center items-center gap-2  text-center">
        <p className="text-sm py-2">
          &copy; 2024 pindaribook. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-2">
          <Link to="/privacy" className="hover:text-black ">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="hover:text-black ">
            Terms of Service
          </Link>
          |
          <Link to="/contact" className="hover:text-black  ">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
