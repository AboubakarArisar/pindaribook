import React from "react";
import CustomButton from "../components/CustomButton";

const Pricing = () => {
  return (
    <>
      <main className='w-full min-h-screen bg-[rgb(249, 246, 242)] flex flex-col justify-center items-center gap-8 p-8'>
        <h1 className='font-gilroy font-bold text-green-600 text-3xl md:text-5xl tracking-wide text-center'>
          Choose Your Plan
        </h1>
        <p className='text-lg font-gilroy text-gray-700 text-center mb-6'>
          We offer flexible pricing plans to fit your needs. Choose the one
          that’s right for you!
        </p>

        <div className='flex flex-wrap justify-center gap-8'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-xs w-full'>
            <h2 className='text-2xl font-gilroy font-bold text-green-600 text-center mb-4'>
              Basic Plan
            </h2>
            <p className='text-lg text-center text-gray-700 mb-4'>
              Ideal for individuals who want to get started.
            </p>
            <p className='text-center text-3xl font-gilroy font-semibold text-green-600 mb-4'>
              $9.99/month
            </p>
            <ul className='text-left text-gray-700 mb-6'>
              <li>1 User</li>
              <li>Basic Features</li>
              <li>Access to All Resources</li>
            </ul>
            <CustomButton className='border-2 border-green-600 hover:bg-green-600 hover:text-white w-full'>
              Choose Plan
            </CustomButton>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-lg max-w-xs w-full'>
            <h2 className='text-2xl font-gilroy font-bold text-green-600 text-center mb-4'>
              Standard Plan
            </h2>
            <p className='text-lg text-center text-gray-700 mb-4'>
              Best for small teams or businesses.
            </p>
            <p className='text-center text-3xl font-gilroy font-semibold text-green-600 mb-4'>
              $19.99/month
            </p>
            <ul className='text-left text-gray-700 mb-6'>
              <li>Up to 5 Users</li>
              <li>Advanced Features</li>
              <li>Priority Support</li>
            </ul>
            <CustomButton className='border-2 border-green-600 hover:bg-green-600 hover:text-white w-full'>
              Choose Plan
            </CustomButton>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-lg max-w-xs w-full'>
            <h2 className='text-2xl font-gilroy font-bold text-green-600 text-center mb-4'>
              Premium Plan
            </h2>
            <p className='text-lg text-center text-gray-700 mb-4'>
              Perfect for large teams and enterprises.
            </p>
            <p className='text-center text-3xl font-gilroy font-semibold text-green-600 mb-4'>
              $49.99/month
            </p>
            <ul className='text-left text-gray-700 mb-6'>
              <li>Unlimited Users</li>
              <li>All Features</li>
              <li>Dedicated Support</li>
            </ul>
            <CustomButton className='border-2 border-green-600 hover:bg-green-600 hover:text-white w-full'>
              Choose Plan
            </CustomButton>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pricing;
