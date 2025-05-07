import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

 import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    

      
    <footer className="bg-black text-white py-8 px-6 ">
    <div>
    </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center space-x-2">
            <img src="./images/logo/wins.avif" alt="WinsCloud Logo" className=" h-10" />
          </div>
          <p className="mt-4 text-gray-300">
            Discover boundless opportunities in the cloud with WinsCloud – Where Your Accomplishments Reach New Heights.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white text-2xl hover:scale-125 transition-all"><FaFacebook /></a>
            <a href="#" className="text-white text-2xl hover:scale-125 transition-all"><FaXTwitter /></a>
            <a href="#" className="text-white text-2xl hover:scale-125 transition-all"><FaInstagram /></a>
            <a href="#" className="text-white text-2xl hover:scale-125 transition-all"><FaYoutube /></a>
            <a href="#" className="text-white text-2xl hover:scale-125 transition-all"><FaLinkedin /></a>
          </div>
        </div>

        {/* Company Section */}
        <div>
  <h2 className="text-lg font-bold border-b pb-2 mb-4">Company</h2>
  <ul className="space-y-2">
    <li>
      <Link
        to="introduction"
        className="text-gray-300 hover:text-white hover:rotate-3 transition-transform block"
      >
        About Us
      </Link>
    </li>
    <li>
      <Link
        to="pricing"
        className="text-gray-300 hover:text-white hover:-rotate-3 transition-transform block"
      >
        Pricing
      </Link>
    </li>
    <li>
      <Link
        to="blogs"
        className="text-gray-300 hover:text-white hover:-rotate-3 transition-transform block"
      >
        Blogs
      </Link>
    </li>
  </ul>
</div>

{/* Support Section */}
<div>
  <h2 className="text-lg font-bold border-b pb-2 mb-4">Support</h2>
  <ul className="space-y-2">
    <li>
      <Link
        to="faq"
        className="text-gray-300 hover:text-white hover:rotate-3 transition-transform block"
      >
        FAQs
      </Link>
    </li>
    <li>
      <Link
        to="policy"
        className="text-gray-300 hover:text-white hover:-rotate-3 transition-transform block"
      >
        Policy
      </Link>
    </li>
    <li>
      <Link
        to="Get-in-Touch"
        className="text-gray-300 hover:text-white hover:-rotate-3 transition-transform block"
      >
        Contact Us
      </Link>
    </li>
  </ul>
</div>


        {/* Address Section */}
        <div>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">Address</h2>
          <p className="text-gray-300">16192 Coastal Highway, DE 19958, United States</p>
          <p className="text-gray-300 mt-2">info@winscloudmatrix.com</p>
          <p className="text-gray-300 mt-2">Phone: +1 714-882-XXXX</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © 2024 Winscloudmatrix LLC - All rights reserved <span className="text-purple-400">Winscloud Matrix LLC</span>
      </div>
    </footer>
    </>
  );
}