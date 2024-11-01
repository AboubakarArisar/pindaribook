import React from "react";
import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <>
      <main className='w-full h-screen bg-black flex flex-col justify-center items-center gap-8'>
        <h1 className='text-yellow-400 text-3xl md:text-7xl font-mono tracking-wide'>
          Collect, Connect, Conquer
        </h1>
        <h1 className='text-yellow-500 opacity-50 text-3xl md:text-7xl font-mono tracking-wide'>
          Academics
        </h1>
        <CustomButton
          className='border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black'
          onClick={() => console.log("Button clicked!")}
        >
          Start Learning
        </CustomButton>
      </main>
    </>
  );
};

export default Home;
