import React from 'react'
import { FaTrophy, FaAward, FaMedal, FaStar, FaCrown } from "react-icons/fa";

const Awards:React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-16 w-[90%] rounded-md py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Header with animated gradient */}
      <div className="flex justify-center py-6">
        <div className="relative inline-flex group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <div className="relative inline-flex items-center justify-center gap-4 px-10 py-4 text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl">
            <FaTrophy className="text-yellow-400 drop-shadow-lg animate-bounce" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 font-josefin">
              Awards & Recognition
            </span>
            <FaTrophy className="text-yellow-400 drop-shadow-lg animate-bounce" />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-gray-600 font-montserrat text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
        Winscloud has earned widespread acclaim for delivering exceptional hosting solutions, driven by a relentless focus on innovation and customer satisfaction. Our commitment to excellence is reflected in the numerous prestigious awards and accolades we've received.
      </p>

      {/* Award Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Award Card 1 */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
          <div className="absolute -right-10 -top-10 w-28 h-28 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-indigo-200 rounded-full opacity-20"></div>
          <div className="p-6 flex flex-col items-center relative z-10">
            <div className="h-32 flex items-center justify-center w-full mb-4">
              <img src="/images/logo/top.webp" alt="Top 10 Cloud Hosting" className="object-contain max-h-full mx-auto" />
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaCrown className="text-yellow-500 text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-blue-900 font-josefin mb-2">Top 10 Cloud Hosting</h3>
              <p className="text-sm text-blue-700">Host Advice 2023</p>
            </div>
          </div>
        </div>

        {/* Award Card 2 */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
          <div className="absolute -right-10 -top-10 w-28 h-28 bg-purple-200 rounded-full opacity-20"></div>
          <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-pink-200 rounded-full opacity-20"></div>
          <div className="p-6 flex flex-col items-center relative z-10">
            <div className="h-32 flex items-center justify-center w-full mb-4">
              <img src="/images/logo/star.webp" alt="Rising Star Award" className="object-contain max-h-full mx-auto" />
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaStar className="text-purple-500 text-2xl animate-pulse" />
              </div>
              <h3 className="font-bold text-lg text-purple-900 font-josefin mb-2">Rising Star Award</h3>
              <p className="text-sm text-purple-700">Compare Camp 2023</p>
            </div>
          </div>
        </div>

        {/* Award Card 3 */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 to-teal-50 border border-green-100">
          <div className="absolute -right-10 -top-10 w-28 h-28 bg-green-200 rounded-full opacity-20"></div>
          <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-teal-200 rounded-full opacity-20"></div>
          <div className="p-6 flex flex-col items-center relative z-10">
            <div className="h-32 flex items-center justify-center w-full mb-4">
              <img src="/images/logo/great.webp" alt="Great User Experience" className="object-contain max-h-full mx-auto" />
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaAward className="text-green-500 text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-green-900 font-josefin mb-2">Great User Experience</h3>
              <p className="text-sm text-green-700">Finances Online 2023</p>
            </div>
          </div>
        </div>

        {/* Award Card 4 */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-amber-50 to-red-50 border border-amber-100">
          <div className="absolute -right-10 -top-10 w-28 h-28 bg-amber-200 rounded-full opacity-20"></div>
          <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-red-200 rounded-full opacity-20"></div>
          <div className="p-6 flex flex-col items-center relative z-10">
            <div className="h-32 flex items-center justify-center w-full mb-4">
              <img src="/images/logo/exp.webp" alt="Great Uptime" className="object-contain max-h-full mx-auto" />
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaMedal className="text-amber-500 text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-amber-900 font-josefin mb-2">Great Uptime Award</h3>
              <p className="text-sm text-amber-700">HostAdvice 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="mt-16 text-center">
       
      </div>
    </div>
  )
}

export default Awards