import React from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <main className='w-full h-screen bg-black flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-xl md:text-8xl text-yellow-400 shadow-xl'>404</h1>
        <h6 className='text-yellow-400'>oops! seems like you are lost</h6>
        <CustomButton onClick={handleClick}>Go Back</CustomButton>
      </main>
    </>
  );
};

export default PageNotFound;
