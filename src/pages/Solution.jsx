import React from "react";
import CustomButton from "../components/CustomButton";

const Solutions = () => {
  return (
    <>
      <main className='w-full min-h-screen bg-[#F9F6F2] flex flex-col justify-center items-center gap-8 p-8'>
        <h1 className='font-gilroy font-bold text-green-600 text-3xl md:text-7xl tracking-wide'>
          Our Solutions
        </h1>
        <p className='text-lg font-gilroy text-gray-700 text-center mb-6'>
          Discover how our app solves key challenges in academic note-keeping
          and enhances your learning experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg px-4'>
          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Share Notes Instantly
            </h2>
            <p className='text-lg text-white mb-4'>
              Students can now instantly share class notes, research papers, and
              study materials with the university community, eliminating the
              need to rely on outdated textbooks or inaccessible resources.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Search by Tags
            </h2>
            <p className='text-lg text-white mb-4'>
              Searching for relevant notes is now effortless with our tag-based
              search system. You can quickly locate study materials based on
              topics like Math, History, or Computer Science, making revision
              easier.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Department-Based Organization
            </h2>
            <p className='text-lg text-white mb-4'>
              Organizing notes by department helps students access the most
              relevant study materials for their specific field of study, making
              it easy to focus on what matters most.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Collaborative Learning
            </h2>
            <p className='text-lg text-white mb-4'>
              Collaborative learning is at the core of our app. Students can
              exchange insights, discuss notes, and help each other excel.
              Whether it’s group study or peer learning, everyone benefits.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              User Ratings and Feedback
            </h2>
            <p className='text-lg text-white mb-4'>
              Students can rate and review notes, ensuring that the community
              always has access to the most useful and high-quality materials.
              This feature guarantees that you’ll find what’s most relevant.
            </p>
          </div>

          <div className='bg-[#4F9D7F] p-6 rounded-tl-xl rounded-tr-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3B7F63]'>
            <h2 className='text-2xl font-gilroy font-semibold text-white mb-4'>
              Easy Access Anywhere
            </h2>
            <p className='text-lg text-white mb-4'>
              Whether you’re on campus or at home, our app gives you easy access
              to your notes across multiple devices. You can study anytime and
              anywhere, without being restricted to a single location.
            </p>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <CustomButton className='border-2 border-[#4F9D7F] hover:bg-[#4F9D7F] hover:text-white'>
            Get Started Now
          </CustomButton>
        </div>
      </main>
    </>
  );
};

export default Solutions;
