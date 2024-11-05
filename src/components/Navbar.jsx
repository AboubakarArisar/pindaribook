import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkLoginStatus();

    const handleLoginEvent = () => {
      checkLoginStatus();
    };
    window.addEventListener("login", handleLoginEvent);

    return () => {
      window.removeEventListener("login", handleLoginEvent);
    };
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setUser(null);
    setShowDropdown(false);
    toast.success("Logged out successfully");
  };

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <header className='p-4 shadow-lg bg-white sticky top-0 z-30'>
        <Toaster />
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
          <div className='hidden md:flex items-center gap-4'>
            {isLoggedIn ? (
              <>
                <div
                  className='relative cursor-pointer'
                  onClick={toggleDropdown}
                >
                  <img
                    src={user?.photoURL}
                    alt='User Avatar'
                    className='w-10 h-10 rounded-full border-2 border-green-600'
                  />
                  {showDropdown && (
                    <div className='absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg p-2'>
                      <button
                        onClick={handleLogout}
                        className='w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <CustomButton onClick={handleLogin}>Login</CustomButton>
            )}
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
            className='fixed inset-0 bg-black bg-opacity-50 z-40 transition-transform duration-300 ease-in-out'
            onClick={toggleMenu}
          >
            <div
              className='fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 transform translate-x-0 transition-transform duration-300 ease-in-out'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex w-full justify-center gap-4 items-center'>
                {isLoggedIn && (
                  <div
                    className='relative cursor-pointer'
                    onClick={toggleDropdown}
                  >
                    <img
                      src={user?.photoURL}
                      alt='User Avatar'
                      className='w-10 h-10 rounded-full border-2 border-green-600'
                    />
                    {showDropdown && (
                      <div className='absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg p-2'>
                        <button
                          onClick={handleLogout}
                          className='w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <div onClick={toggleMenu}>
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
                </div>
              </div>
              <ul className='mt-16 flex flex-col justify-center items-center space-y-6 font-semibold text-black'>
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
                {!isLoggedIn ? (
                  <CustomButton onClick={handleLogin}>Login</CustomButton>
                ) : (
                  <CustomButton onClick={handleLogout}>Logout</CustomButton>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
