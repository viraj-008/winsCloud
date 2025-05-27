import React from 'react'
import { FaTrophy } from "react-icons/fa";

const Awards:React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8 w-[90%] rounded-md  py-12 ">
             <div className="flex justify-center bg-white py-6">
               <div className="relative inline-flex group">
                 <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                 <div className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gray-900 rounded-xl shadow-xl">
                   <FaTrophy className="text-yellow-400 drop-shadow" />
                   Awards
                   <FaTrophy className="text-yellow-400 drop-shadow" />
                 </div>
               </div>
             </div>
   
             {/* Description */}
             <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
             <p className="text-center text-gray-600 font-montserrat  max-w-2xl mx-auto mb-10">
     Winscloud has earned widespread acclaim for delivering exceptional hosting solutions, driven by a relentless focus on innovation and customer satisfaction. Our commitment to excellence is reflected in the numerous prestigious awards and accolades we've received, affirming Winscloud's position as a trusted leader in the industry.
   </p>
   
             </p>
   
             {/* Award Cards/Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
     {/* Award Card 1 */}
     <div className="bg-gradient-to-br from-[#d4d3d3] via-[#f5f3f4] to-[#e1dede]  p-4 rounded-xl shadow-lg text-center flex flex-col items-center">
       <div className="h-28 flex items-center justify-center w-full">
         <img src="/images/logo/top.webp" alt="Award 1" className="object-contain max-h-full mx-auto" />
       </div>
       <p className="font-medium mt-3  font-josefin text-blue-900 ">Top 10 Cloud Hosting Host Advice</p>
     </div>
   
     {/* Award Card 2 */}
     <div className="bg-gradient-to-br from-[#d4d3d3] via-[#f5f3f4] to-[#e1dede] p-4 rounded-xl border-2 shadow-lg text-center flex flex-col items-center">
       <div className="h-28 flex items-center justify-center w-full">
         <img src="/images/logo/star.webp" alt="Award 2" className="object-contain max-h-full mx-auto" />
       </div>
       <p className=" font-medium mt-3 font-josefin text-blue-900 ">Rising Star Award by Compare Camp</p>
     </div>
   
     {/* Award Card 3 */}
     <div className="bg-gradient-to-br from-[#d4d3d3] via-[#f5f3f4] to-[#e1dede]  p-4 rounded-xl shadow-lg text-center flex flex-col items-center">
       <div className="h-28 flex items-center justify-center w-full">
         <img src="/images/logo/great.webp" alt="Award 3" className="object-contain max-h-full mx-auto" />
       </div>
       <p className=" font-medium mt-3 font-josefin text-blue-900 ">Great User Experience by Finances Online</p>
     </div>
   
     {/* Award Card 4 */}
    <div className=" bg-gradient-to-br from-[#d4d3d3] via-[#f5f3f4] to-[#e1dede]    relative p-[2px] rounded-xl shadow-lg">
     <div className="p-4 rounded-xl text-center flex flex-col items-center">
       <div className="h-28 flex items-center justify-center w-full">
         <img src="/images/logo/exp.webp" alt="Award 4" className="object-contain max-h-full mx-auto" />
       </div>
       <p className="font-medium mt-3 text-blue-900 font-josefin">Great Uptime by HostAdvice</p>
     </div>
   </div>
   
   </div>
   
   
           </div>
  )
}

export default Awards
