import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className='p-4 shadow-xl bg-[rgb(249 246 242)] text-white backdrop-blur-lg sticky top-0 right-0 left-0'>
        <nav className='flex justify-around items-center gap-4'>
          <div className='w-1/3 cursor-pointer flex justify-center items-center text-green-600 font-semibold text-2xl transform transition-transform duration-300 hover:scale-105'>
            <Link to='/'>Logo</Link>
          </div>
          <div className='w-1/3 hidden  md:flex justify-center items-center'>
            <ul className='flex gap-6 text-black font-semibold'>
              {["Features", "Solutions", "Pricing"].map((item) => (
                <li
                  key={item}
                  className='hover:text-black cursor-pointer transition-colors duration-300 transform hover:scale-105 hover:underline'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-1/3 flex justify-center items-center'>
            <CustomButton >
              Login
            </CustomButton>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
