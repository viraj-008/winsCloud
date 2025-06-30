import Partner from "../Partner";
import { motion } from "framer-motion";
import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
function WhatsIp() {

    const [copied, setCopied] = useState(false);
  const ipAddress = "2401:4900:8848:a512:77af:6781:9cc6:db53";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ipAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <>
     <header className="w-full -mb-12 flex bg-gradient-to-t  from-[#6278c0] via-[#102f86] to-black pt-10 px-5 md:px-40 items-center min-h-[530px] relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 mix-blend-screen filter blur-3xl animate-float1"></div>
    <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-indigo-500 mix-blend-screen filter blur-3xl animate-float2"></div>
  </div>

  <div className="w-full text-center relative z-10">
    <motion.h1 
      className="text-white font-anton text-4xl md:text-6xl lg:text-7xl leading-tight mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What's My IP
    </motion.h1>
    
  <motion.div
      className="w-full px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center justify-center gap-2">
        <h2 className="text-white bg-blue-600/90 hover:bg-blue-700 transition-colors duration-300 rounded-lg p-2 sm:p-3 my-3 sm:my-4 md:my-6 text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl leading-tight font-mono tracking-tighter break-all">
          {ipAddress}
        </h2>
        
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-gray-600 hover:bg-gray-800 transition-colors duration-200 group relative"
          aria-label="Copy IP address"
        >
          {copied ? (
            <FaCheck className="text-green-400 text-lg" />
          ) : (
            <FaCopy className="text-white text-lg" />
          )}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </span>
        </button>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      
    </motion.div>
  </div>
</header>

{/* Add to your global CSS */}

      <main>
        <Partner />
      </main>
    </>
  );
}

export default WhatsIp;
