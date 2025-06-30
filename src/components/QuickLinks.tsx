import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const QuickLinks:React.FC = () => {
  return (
      <section>
         <div className="container relative flex flex-col justify-between h-full max-w-6xl w-[90%] mx-auto xl:px-0 mt-8">
      <h2 className="mb-10 text-3xl font-extrabold leading-tight text-gray-900">  
                Explore Other Versions of QuickBooks by Winscloud Matrix
              </h2>
    
      <div className="w-full">
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-5 sm:mb-0 sm:w-1/2">
            <div className="relative h-[60px] ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full px-2 py-1 bg-white border-2 border-indigo-500 rounded-lg flex items-center">
           <FaExternalLinkAlt className="text-xl text-blue-800" />
                         <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3 ">QuickBooks Desktop 
    </Link> 
              </div>
            </div>
          </div>
    
          <div className="w-full sm:w-1/2">
            <div className="relative h-[60px] ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full px-2 py-1 bg-white border-2 border-purple-500 rounded-lg flex items-center">
                                     <FaExternalLinkAlt className="text-xl text-blue-800" />
     <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3">QuickBooks Pro</Link> 
              </div>
            </div>
          </div>
        </div>
    
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-5 sm:mb-0 sm:w-1/2">
            <div className="relative h-[60px] ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div className="relative h-full px-2 py-1 bg-white border-2 border-blue-400 rounded-lg flex items-center">
                           <FaExternalLinkAlt className="text-xl text-blue-800" />
                            <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3">QuickBooks Premier</Link> 
              </div>
            </div>
          </div>
    
          <div className="w-full sm:w-1/2">
            <div className="relative h-[60px] ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
              <div className="relative h-full px-2 py-1 bg-white border-2 border-yellow-400 rounded-lg flex items-center">
                         <FaExternalLinkAlt className="text-xl text-blue-800" />
                             <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3">QuickBooks Enterprise</Link> 
              </div>
            </div>
          </div>
        </div>
    
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-5 sm:mb-0 sm:w-1/2">
            <div className="relative h-[60px] ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full px-2 py-1 bg-white border-2 border-green-500 rounded-lg flex items-center">
                        <FaExternalLinkAlt className="text-xl text-blue-800" />
                            <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3">QuickBook POS</Link>  
              </div>
            </div>
          </div>
    
          <div className="w-full sm:w-1/2">
            <div className="relative h-[60px] ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full px-2 py-1 bg-white border-2 border-green-500  rounded-lg flex items-center">
              <FaExternalLinkAlt className="text-xl  text-blue-800" />
                 <Link to="/quickbooks-desktop" className="hover:underline  ml-3 font-bold">QuickBooks canada</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
            </section>
  )
}

export default QuickLinks
