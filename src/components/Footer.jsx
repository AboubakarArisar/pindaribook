import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className='bg-black/90 text-white py-6'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>&copy; 2024 pindaribook. All rights reserved.</p>
        <div className='mt-4'>
          <Link to='/privacy' className='text-gray-400 hover:text-white mx-2'>
            Privacy Policy
          </Link>
          <Link to='/terms' className='text-gray-400 hover:text-white mx-2'>
            Terms of Service
          </Link>
          <Link to='/contact' className='text-gray-400 hover:text-white mx-2'>
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
