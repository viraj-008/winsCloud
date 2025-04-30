import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


const GetTouch: React.FC = () => {
  return (
    <div>
      <section className="px-6  py-32  bg-gray-900">
        <div className="max-w-7xl mx-auto text-white flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          
          {/* Text Content */}
          <div className="md:w-1/2 mt-4">
            <div className="text-2xl border rounded-lg  p-2 md:text-5xl font-bold mb-6 leading-tight">
             <h1 className='flex items-center font-montserrat'><FaLocationDot className='mr-2 text-blue-600'/>Location.</h1>
             <p className='text-sm   font-josefin text-center text-slate-200 mt-2'> <span className='text-red-600'>Address </span>: 16192 Coastal Highway Lewes, DE 19958, United States</p>
            </div>
            <div className="text-2xl border  rounded-lg p-2 md:text-5xl font-bold mb-6 leading-tight">
           <h1 className='flex items-center font-montserrat'><FaPhoneVolume className='mr-2 text-4xl text-green-500'/> Phone. </h1> 
           <p className='text-sm  font-josefin text-center text-slate-200  mt-2'>+1 714-882-1244</p>

            </div>
            <div className="text-2xl border rounded-lg  p-2 md:text-5xl font-bold mb-6 leading-tight">
            <h1 className='flex items-center font-montserrat'><MdOutlineMail className='mr-2  text-red-500'/> Email.</h1>
            <p className='text-sm font-josefin text-slate-200  text-center mt-2'>info@winscloudmatrix.com --

sales@winscloudmatrix.com</p>
            </div>
           
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2">
            <img
              src="./images/logo/get.png"
              alt="Hero"
              className="rounded-lg shadow-lg w-[400px] md:ml-[100px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetTouch;
