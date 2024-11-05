import React from "react";
import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <>
      <main className='w-full h-screen bg-[rgb(249 246 242)] flex flex-col justify-center items-center gap-8 '>
        <h1 className='font-gilroy font-bold text-center text-black text-3xl md:text-7xl tracking-wide'>
          Collect, Connect, Conquer
        </h1>
        <h1 className='font-gilroy font-bold text-green-600 opacity-50 text-3xl md:text-7xl tracking-wide'>
          Academics
        </h1>
        <CustomButton onClick={() => console.log("Button clicked!")}>
          Start Learning
        </CustomButton>
      </main>
    </>
  );
};

export default Home;
