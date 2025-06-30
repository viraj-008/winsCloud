import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const GetTouch: React.FC = () => {
  return (
        <div className="min-h-screen bg-gradient-to-t from-[#090c17] via-[#102f86] to-black py-16 px-4 sm:px-6 lg:px-8 flex items-center">
  <div className="max-w-6xl  mx-auto w-full">
    {/* Header */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
        Get in <span className="text-indigo-400">Touch</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
        We'd love to hear from you! Whether you have a question or just want to say hi, reach out and we'll respond as soon as we can.
      </p>
    </div>

    {/* Contact Cards - Centered */}
    <div className="flex flex-col  md:flex-row md:justify-between mx-auto space-y-6 md:space-y-0 md:space-x">
  {/* Location Card */}


  {/* Phone Card */}
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200/50 transform hover:-translate-y-1">
    <div className="flex items-start space-x-5">
      <div className="flex-shrink-0 p-3 rounded-xl bg-green-100 text-green-600">
        <FaPhoneAlt className="text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1.5">Call Us</h3>
        <a 
          href="tel:+17148821244" 
          className="text-indigo-600 hover:text-indigo-700 transition-colors text-lg font-medium block mb-0.5"
        >
          +1 (714) 882-1244
        </a>
        <span className="text-gray-500 text-sm">Available 24/7</span>
      </div>
    </div>
  </div>

  {/* Email Card */}
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200/50 transform hover:-translate-y-1">
    <div className="flex items-start space-x-5">
      <div className="flex-shrink-0 p-3 rounded-xl bg-pink-100 text-pink-600">
        <FaEnvelope className="text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1.5">Email Us</h3>
        <a 
          href="mailto:info@winscloudmatrix.com" 
          className="text-indigo-600 hover:text-indigo-700 transition-colors text-base font-medium block mb-1"
        >
          info@winscloudmatrix.com
        </a>
        <a 
          href="mailto:sales@winscloudmatrix.com" 
          className="text-indigo-600 hover:text-indigo-700 transition-colors text-base font-medium block"
        >
          sales@winscloudmatrix.com
        </a>
      </div>
    </div>
  </div>

    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-200/50 transform hover:-translate-y-1">
    <div className="flex items-start space-x-5">
      <div className="flex-shrink-0 p-3 rounded-xl bg-indigo-100 text-indigo-600">
        <FaMapMarkerAlt className="text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1.5">Our Location</h3>
        <p className="text-gray-600 leading-snug">
          16192 Coastal Highway<br />
          Lewes, DE 19958<br />
          United States
        </p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
  );
};

export default GetTouch;
