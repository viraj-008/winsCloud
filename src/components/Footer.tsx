import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-black py-12 px-6 border-t border-blue-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="./images/logo/wins.avif" 
                alt="WinsCloud Logo" 
                className="h-12 filter brightness-110" 
              />
            
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover boundless opportunities in the cloud with WinsCloud – 
              Where Your Accomplishments Reach New Heights through AI-powered solutions.
            </p>
            
            {/* Social Media Icons with glow effect */}
            <div className="flex space-x-5 pt-2">
              {[
                { icon: <FaFacebook />, url: "https://www.facebook.com/winscloudmatrixllc/" },
                { icon: <FaXTwitter />, url: "https://x.com/WinscloudMatrix" },
                { icon: <FaInstagram />, url: "https://www.instagram.com/winscloudmatrixllc/" },
                { icon: <FaYoutube />, url: "https://www.youtube.com" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/winscloud-matrix-llc/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -4,
                    scale: 1.2,
                    textShadow: "0 0 8px rgba(96, 165, 250, 0.8)",
                  }}
                  className="text-gray-300 text-xl hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-lg font-bold mb-6 pb-2 border-b border-blue-800/50 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Company
            </h2>
            <ul className="space-y-3">
              {[
                { text: "About Us", to: "introduction" },
                { text: "Pricing", to: "pricing" },
                { text: "Blogs", to: "blogs" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-blue-300 flex items-center group transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-lg font-bold mb-6 pb-2 border-b border-blue-800/50 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Support
            </h2>
            <ul className="space-y-3">
              {[
                { text: "FAQs", to: "faq" },
                { text: "Policy", to: "policy" },
                { text: "Contact Us", to: "Get-in-Touch" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-blue-300 flex items-center group transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info with animated border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-5 rounded-lg bg-gradient-to-br from-gray-900/50 to-blue-900/20 border border-blue-800/30 hover:border-blue-500/50 transition-all"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h2 className="text-lg font-bold mb-6 pb-2 border-b border-blue-800/50 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Get In Touch
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>16192 Coastal Highway, DE 19958, United States</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@winscloudmatrix.com" className="hover:text-blue-300 transition-colors">info@winscloudmatrix.com</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+1714882XXXX" className="hover:text-blue-300 transition-colors">+1 714-882-XXXX</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright with animated gradient border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-blue-900/50 relative"
        >
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">WinsCloud Matrix LLC</span>. All rights reserved.
            <div className="mt-2 text-xs text-gray-600">
              Powered by AI-driven cloud solutions for the future.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}