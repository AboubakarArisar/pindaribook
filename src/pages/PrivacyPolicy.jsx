import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
      <main className="w-full min-h-screen bg-black flex flex-col justify-center items-center gap-8 p-8">
        <div className="container  mx-0 px-4 text-white">  
          <h1 className="text-4xl font-bold pt-10 ">
            PRIVACY POLICY
          </h1>
          <div className="container  pt-3 ">
            <p className="text-small font-bold font-sans  mb-4  ">
              OUR PERSONAL INFORMATION , COOKIES AND THIRD PARTY POLICIES 
            </p>
          </div>
          
          <div className="flex items-end mt-6 mb-2">
            <h2 className="text-2xl font-serif p-8">
              PERSONAL INFORMATION
            </h2>
            <div className="container mx-10 flex justify-end items-end">
              <p className="text-lg mb-8">
              We collect data to provide and improve our note-keeping services, such as your personal information, 
              note content, and usage patterns. This data is used solely to enhance user experience and ensure data security.
              </p>
            </div>
          </div>

          <div className="flex items-end mt-6 mb-2">
            <h2 className="text-2xl font-serif p-8">
              THIRD PARTY POLICIES
            </h2>
            <div className="container mx-10 flex justify-end items-end">
              <p className="text-lg mb-8">
              Your data is not shared with third parties unless required by law, part of a business transfer, or if you’ve provided explicit consent.
              </p>
            </div>
          </div>
          <div className="flex items-end mt-6 mb-4">
            <h2 className="text-2xl font-semibold p-8">
              DATA SECURITY      
            </h2>
            <div className="container mx-20  flex justify-end items-end">
              <p className="text-lg mb-8 ">
              We prioritize the security of your data and use advanced encryption and security protocols to safeguard it from unauthorized access.
              </p>
            </div>
          </div>
          <div className="flex items-end mt-6 mb-4">
            <h2 className="text-2xl font-semibold p-8">
              Security of Information
            </h2>
            <div className="container mx-10 flex justify-end items-end">
              <p className="text-lg mb-8">
                If you have any questions about this Privacy Policy, please contact us at: 
                <a href="" className="text-blue-400 hover:underline">contact us</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default PrivacyPolicy;
  