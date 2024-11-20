import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className='w-full min-h-screen bg-[rgb(249, 246, 242)] flex flex-col justify-center items-center gap-8 p-8'>
      <div className='container mx-4 text-black'>
        <h1 className='font-gilroy font-bold text-green-600 text-3xl md:text-5xl tracking-wide text-center'>
          Privacy Policy
        </h1>
        <div className='pt-4'>
          <p className='text-base md:text-lg font-gilroy font-semibold text-center mb-6'>
            We respect your privacy and are committed to protecting your
            personal data. This policy explains how we collect, use, and protect
            your information.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-start gap-6 pt-6'>
          <div className='flex-1'>
            <h2 className='text-xl md:text-2xl font-gilroy font-semibold text-green-600'>
              Personal Information
            </h2>
            <p className='text-base md:text-lg font-gilroy text-black opacity-80'>
              We collect personal information, such as your name, email, and
              usage data, to provide and improve our services. This data is
              stored securely and is only used for service optimization and to
              communicate updates with you.
            </p>
          </div>

          <div className='flex-1'>
            <h2 className='text-xl md:text-2xl font-gilroy font-semibold text-green-600'>
              Third-Party Policies
            </h2>
            <p className='text-base md:text-lg font-gilroy text-black opacity-80'>
              We do not share your personal data with third parties unless
              required by law or with your explicit consent. We may use
              third-party services for functionality enhancement, and they may
              have access to limited data based on their service requirements.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-start gap-6 pt-6'>
          <div className='flex-1'>
            <h2 className='text-xl md:text-2xl font-gilroy font-semibold text-green-600'>
              Data Security
            </h2>
            <p className='text-base md:text-lg font-gilroy text-black opacity-80'>
              We employ state-of-the-art security measures to ensure that your
              data remains protected from unauthorized access, including
              encryption and secure servers.
            </p>
          </div>

          <div className='flex-1'>
            <h2 className='text-xl md:text-2xl font-gilroy font-semibold text-green-600'>
              Your Rights
            </h2>
            <p className='text-base md:text-lg font-gilroy text-black opacity-80'>
              You have the right to access, update, or delete your personal data
              at any time. If you would like to exercise these rights, please
              contact us using the information below.
            </p>
          </div>
        </div>

        <div className='mt-6 mb-8'>
          <h2 className='text-xl md:text-2xl font-gilroy font-semibold text-green-600'>
            Contact Us
          </h2>
          <p className='text-base md:text-lg font-gilroy text-black opacity-80'>
            If you have any questions about this Privacy Policy, please contact
            us at:
            <a
              href='mailto:contact@yourcompany.com'
              className='text-blue-400 hover:underline'
            >
              {" "}
              pindaricoders@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
