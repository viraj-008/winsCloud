import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const GetTouch: React.FC = () => {
  return (
        <div className="min-h-screen bg-gradient-to-t from-[#3e61d1] via-[#102f86] to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-12 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question or just want to say hi, reach out and we'll respond as soon as we can.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info - Joyful Bubbles */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-100">
              <div className="flex items-start">
                <div className="p-4 rounded-full bg-indigo-100 text-indigo-600 mr-6">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-lg text-gray-600">
                    16192 Coastal Highway<br />
                    Lewes, DE 19958<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-100">
              <div className="flex items-start">
                <div className="p-4 rounded-full bg-green-100 text-green-600 mr-6">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Call Us</h3>
                  <a 
                    href="tel:+17148821244" 
                    className="text-lg text-indigo-600 hover:text-indigo-800 transition-colors block mb-1"
                  >
                    +1 (714) 882-1244
                  </a>
                  <p className="text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-pink-100">
              <div className="flex items-start">
                <div className="p-4 rounded-full bg-pink-100 text-pink-600 mr-6">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Email Us</h3>
                  <a 
                    href="mailto:info@winscloudmatrix.com" 
                    className="text-lg text-indigo-600 hover:text-indigo-800 transition-colors block mb-1"
                  >
                    info@winscloudmatrix.com
                  </a>
                  <a 
                    href="mailto:sales@winscloudmatrix.com" 
                    className="text-lg text-indigo-600 hover:text-indigo-800 transition-colors block"
                  >
                    sales@winscloudmatrix.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Playful Design */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border-2 border-indigo-50">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Send Us a <span className="text-indigo-600">Message</span>
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                  placeholder="What would you like to say?"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Send Message
                  <RiSendPlaneFill className="ml-2 text-xl" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
