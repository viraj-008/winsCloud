import React from "react";
import { Link } from "react-router-dom";

const FreeTrialForm: React.FC = () => {
  return (
    <>
    <div className='h-[530px] w-full pb-20'>
        <div className='w-full flex bg-gradient-to-r from-black via-pink-500 to-blue-500 pt-28 px-5 md:px-20 items-center'>
          <div className='w-full text-center md:text-left'>
            <h1 className='text-white text-4xl md:text-6xl'>
            Start Your No-Obligation Free Trial Today!
            </h1>
            <p className='text-xl md:text-4xl mt-4 md:mt-7'>
              Get the financial tools and insights to<br /> start, build, and grow your business
            </p>
           <Link to='/trial'><button className='mx-auto md:mx-0 flex border my-10 md:my-16 bg-green-600 hover:bg-green-700 text-xl md:text-4xl px-6 md:px-12 text-white font-josefin py-2 rounded-lg'>
            Free One-Month trial!
            </button></Link> 
          </div>
        </div>
      </div>
        <h2 className="text-3xl font-kanit font-bold mx-auto text-center mt-3
        ">Start Your No-Obligation Free Trial Today!</h2>
    <div className="flex flex-col lg:flex-row justify-center items-center px-6 py-12">
      {/* Left Section */}
      <div className="max-w-lg text-left lg:mr-12">
        <h3 className="text-xl font-semibold mt-4 font-kanit">What does Winscloud have in Store for you?</h3>
        <p className="text-gray-600 mt-4 font-montserrat">
          Unlock top-tier cloud solutions boasting unparalleled security and
          reliability accessible from any corner of the globe. Our
          cutting-edge cloud hosting services streamline your operations
          effortlessly. Harness our tech-driven solution to elevate your
          practices, enhancing value and achieving peak operational
          efficiency.
        </p>
        <ul className="mt-4 text-gray-700 list-disc pl-5 font-montserrat">
          <li>Zero Downtime</li>
          <li>24×7 Tech Support</li>
          <li>5-minute Human Response</li>
          <li>Automated Backup</li>
          <li>Customizable Platforms</li>
          <li>Bank-grade Data security</li>
          <li>Cross-device Compatibility</li>
          <li>Multi-user Collaboration</li>
        </ul>
      </div>

      {/* Right Section - Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full border border-gray-200">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 text-white text-center rounded-md">
          <h3 className="text-lg font-bold font-josefin">Start your free trial</h3>
          <p className="text-sm font-montserrat">No Credit Card. No Long-term Contract</p>
        </div>
        
        <form className="mt-6 space-y-4">
          <p className="text-pink-600 font-semibold font-josefin">Fill-up your trial form</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name*" className="border p-2 rounded-md w-full" required />
            <select className="border p-2 font-montserrat text-red-600 font-semibold rounded-md w-full" required>
              <option>QuickBooks</option>
              <option>Sage</option>
              <option>Drake</option>
              <option>Other</option>
            </select>
            <input type="email" placeholder="Email*" className="border p-2 rounded-md w-full" required />
            <input type="text" placeholder="Company*" className="border p-2 rounded-md w-full" required />
          </div>
          <div className="flex gap-2">
            <select className="border p-2 rounded-md">
              <option>+1</option>
            </select>
            <input type="text" placeholder="888" className="border p-2 rounded-md w-1/4" required />
            <input type="text" placeholder="888" className="border p-2 rounded-md w-1/4" required />
            <input type="text" placeholder="8888" className="border p-2 rounded-md w-1/4" required />
          </div>
          <textarea placeholder="License Details*" className="border p-2 rounded-md w-full h-20" required />
          <button type="submit" className="w-full bg-gray-800 font-bold font-josefin text-white py-2 rounded-md hover:bg-gray-700">
            Get 30 Days Free Trial
          </button>
        </form>
      </div>
    </div>
    <div>
        <h1 className='text-4xl my-7 bg-gray-200 text-center text-gray-700 
        font-josefin md:w-[50%] mx-auto p-3 rounded-md font-bold'>Our Trusted Partners</h1>
        <img  className='md:h-32 mx-auto px-2' src='./images/logo/Partner.avif'/> 
        <div className='bg-red-700 flex flex-col md:flex-row justify-between mt-8 px-4 rounded-lg md:w-[60%] w-[90%] mx-auto items-center'>
    <p className='text-white text-center mt-4 md:mt-0 font-josefin font-bold'>
        Get an Account in Minutes Today!
    </p> 
    <Link to="/trial"><button className='border mx-auto font-josefin m-4 md:my-3 bg-green-600 hover:bg-green-700 text-md md:text-lg px-6 md:px-12 text-white py-2 rounded-full'>
       Free One-Month trial!
    </button></Link>
</div>

      </div>
    </>
  );
};

export default FreeTrialForm;