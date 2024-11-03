import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <>
      <header className='p-4 shadow-xl bg-black/90 text-white backdrop-blur-lg sticky top-0 right-0 left-0'>
        <nav className='flex justify-around items-center gap-4'>
          <div className='w-1/3 flex justify-center items-center text-yellow-400 font-semibold text-2xl transform transition-transform duration-300 hover:scale-105'>
            Logo
          </div>
          <div className='w-1/3 flex justify-center items-center'>
            <ul className='flex gap-6 text-gray-300'>
              {["Features", "Solutions", "Pricing"].map((item) => (
                <li
                  key={item}
                  className='hover:text-yellow-400 cursor-pointer transition-colors duration-300 transform hover:scale-105 hover:underline'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-1/3 flex justify-center items-center'>
            <CustomButton className='border-yellow-400 border-2 hover:bg-yellow-400 hover:text-black hover:shadow-lg transition duration-300'>
              Login
            </CustomButton>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
