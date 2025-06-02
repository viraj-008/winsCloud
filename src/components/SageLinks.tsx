import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SageLinks = () => {
  return (
     <section>
             <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-8">
          <h2 className="mb-10 text-3xl font-extrabold leading-tight text-gray-900">  
                    We host all versions of Sage Applications: Choose the one that suits your business the best

                  </h2>
        
          <div className="w-full">
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-5 sm:mb-0 sm:w-1/2">
                <div className="relative h-[60px] ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div className="relative h-full px-2 py-1 bg-white border-2 border-indigo-500 rounded-lg flex items-center">
               <FaExternalLinkAlt className="text-xl text-blue-800" />
                             <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3 ">Sage 50 
        </Link> 
                  </div>
                </div>
              </div>
        
              <div className="w-full sm:w-1/2">
                <div className="relative h-[60px] ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div className="relative h-full px-2 py-1 bg-white border-2 border-purple-500 rounded-lg flex items-center">
                                         <FaExternalLinkAlt className="text-xl text-blue-800" />
         <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3">Sage 100</Link> 
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
                                <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3">Sage 300</Link> 
                  </div>
                </div>
              </div>
        
              <div className="w-full sm:w-1/2">
                <div className="relative h-[60px] ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                  <div className="relative h-full px-2 py-1 bg-white border-2 border-yellow-400 rounded-lg flex items-center">
                             <FaExternalLinkAlt className="text-xl text-blue-800" />
                                 <Link to="/quickbooks-desktop" className="hover:underline font-bold ml-3">Sage 500</Link> 
                  </div>
                </div>
              </div>
            </div>
        
           
          </div>
        </div>
        
                </section>
  )
}

export default SageLinks
