import React from "react";
import { auth, provider } from "../config/config";
import CustomButton from "../components/CustomButton";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("user", JSON.stringify(result.user));
        window.dispatchEvent(new Event("login"));
        toast.success("Login Success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      navigate("/");
    }
  }, []);

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
      <Toaster />
      <div className='p-6 bg-white rounded-lg shadow-lg text-center'>
        <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
          Welcome Back!
        </h2>
        <p className='mb-6 text-gray-600'>Please login to continue</p>
        <CustomButton
          onClick={handleLogin}
          className='flex items-center gap-3 p-3  text-white rounded-lg shadow-lg '
        >
          <svg
            className='w-6 h-6'
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            fill='white'
            strokeLinejoin='round'
            strokeMiterlimit='2'
          >
            <path d='M32.582 370.734C15.127 336.291 5.12 297.425 5.12 256c0-41.426 10.007-80.291 27.462-114.735C74.705 57.484 161.047 0 261.12 0c69.12 0 126.836 25.367 171.287 66.793l-73.31 73.309c-26.763-25.135-60.276-38.168-97.977-38.168-66.56 0-123.113 44.917-143.36 105.426-5.12 15.36-8.146 31.65-8.146 48.64 0 16.989 3.026 33.28 8.146 48.64l-.303.232h.303c20.247 60.51 76.8 105.426 143.36 105.426 34.443 0 63.534-9.31 86.341-24.67 27.23-18.152 45.382-45.148 51.433-77.032H261.12v-99.142h241.105c3.025 16.757 4.654 34.211 4.654 52.364 0 77.963-27.927 143.592-76.334 188.276-42.356 39.098-100.305 61.905-169.425 61.905-100.073 0-186.415-57.483-228.538-141.032v-.233z' />
          </svg>
          Login with Google
        </CustomButton>
      </div>
    </div>
  );
};

export default Login;
