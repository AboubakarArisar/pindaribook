import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <header
        className={` p-4 shadow-lg bg-[rgb(249 246 242)] sticky top-0 z-30 `}
      >
        <nav className='flex justify-between items-center p-3'>
          <div className='cursor-pointer text-green-600 font-bold text-2xl'>
            <Link to='/'>Logo</Link>
          </div>
          <div className='hidden md:flex justify-center items-center gap-6 font-semibold text-black'>
            {["Features", "Solutions", "Pricing"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className='hover:text-green-600 transition duration-300 transform hover:scale-105'
              >
                {item}
              </Link>
            ))}
          </div>
          <div className='hidden md:flex'>
            <CustomButton>Login</CustomButton>
          </div>
          <div
            className='md:hidden flex justify-center items-center'
            onClick={toggleMenu}
          >
            {showMenu ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='black'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='black'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                />
              </svg>
            )}
          </div>
        </nav>
        {showMenu && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
            onClick={toggleMenu}
          >
            <div
              className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 transform ${
                showMenu ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex w-full justify-between items-center'>
                <span className='text-green-600 font-bold text-2xl'>Menu</span>
                <button onClick={toggleMenu}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='black'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <ul className='mt-8 flex flex-col justify-center items-center space-y-6 font-semibold text-black'>
                {["Features", "Solutions", "Pricing"].map((item) => (
                  <li
                    key={item}
                    className='hover:text-green-600 transition duration-300 transform hover:scale-105'
                  >
                    <Link to={`/${item.toLowerCase()}`} onClick={toggleMenu}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='flex justify-center items-center mt-6 w-full'>
                <CustomButton>Login</CustomButton>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
