import React from "react";
import CustomButton from "../components/CustomButton";

const Features = () => {
  return (
    <>
      <main className='w-full min-h-screen bg-[#F9F6F2] flex flex-col justify-center items-center gap-8 p-8'>
        <h1 className='font-gilroy font-bold text-green-600 text-xl md:text-7xl tracking-wide'>
          Features
        </h1>
        <p className='text-lg font-gilroy text-gray-700 text-center mb-6'>
          A platform where knowledge is shared and accessible to all. Here are
          some of the key features that make our app unique
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg px-4'>
          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Share Notes
            </h2>
            <p className='text-lg text-white mb-4'>
              Share your class notes, research papers, and study material with
              the entire university community, ensuring easy access for
              everyone.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Search by Tags
            </h2>
            <p className='text-lg text-white mb-4'>
              Find notes easily by searching tags like Math, History, or
              Computer Science to quickly locate relevant materials.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Department-Based Organization
            </h2>
            <p className='text-lg text-white mb-4'>
              Notes are categorized by department, making it simple to access
              materials specific to your field of study.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Collaborative Learning
            </h2>
            <p className='text-lg text-white mb-4'>
              Collaborate with your peers, exchange insights, discuss notes, and
              help each other excel in your academic journey.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              User Ratings and Feedback
            </h2>
            <p className='text-lg text-white mb-4'>
              Rate and review notes to ensure the community finds the most
              relevant and helpful study materials.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Easy Access Anywhere
            </h2>
            <p className='text-lg text-white mb-4'>
              Access your notes from any device, anywhere. Whether you're on
              campus or studying from home, your materials are always available.
            </p>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <CustomButton className='border-2 border-[#4F9D7F] hover:bg-[#4F9D7F] hover:text-white'>
            Get Started
          </CustomButton>
        </div>
      </main>
    </>
  );
};

export default Features;
