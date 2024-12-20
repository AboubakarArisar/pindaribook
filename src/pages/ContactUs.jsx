import React from "react";
import CustomButton from "../components/CustomButton";

const ContactUs = () => {
  return (
    <>
      <main className='w-full min-h-screen bg-[rgb(249, 246, 242)] flex flex-col justify-center items-center gap-8 p-8'>
        <h1 className='font-gilroy font-bold text-green-600 text-3xl md:text-7xl tracking-wide'>
          Get in Touch
        </h1>
        <form className='w-full max-w-lg bg-white p-8 rounded-lg shadow-lg'>
          <div className='mb-4'>
            <label
              className='block text-green-600 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='w-full px-3 py-2 text-gray-700 bg-transparent border-2 border-green-300 rounded-lg focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-green-600 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='w-full px-3 py-2 text-gray-700 bg-transparent border-2 border-green-300 rounded-lg focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-green-600 text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='w-full px-3 py-2 text-gray-700 bg-transparent border-2 border-green-300 rounded-lg focus:outline-none focus:shadow-outline'
              id='message'
              placeholder='Your Message'
              rows='5'
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <CustomButton
              className='border-2 border-green-600 hover:bg-green-600 hover:text-white'
              onClick={() => console.log("Form submitted!")}
            >
              Send Message
            </CustomButton>
          </div>
        </form>
      </main>
    </>
  );
};

export default ContactUs;
