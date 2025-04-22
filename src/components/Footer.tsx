import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

  interface Logo {
    image: string;
  }
const footerLogos:Logo[]=[
  {image:"/images/Flogo/Google.webp"},
  {image:"/images/Flogo/idrive.png"},
  {image:"/images/Flogo/micro.png"},
  {image:"/images/Flogo/pci.jpg"},
  {image:"/images/Flogo/Sectigo.png"},
  {image:"/images/Flogo/symantec.png"},
  {image:"/images/Flogo/veeam.png"},
  {image:"/images/Flogo/vm.png"},
  {image:"/images/Flogo/Wasabi.png"},
]

export default function Footer() {
  return (
    <>
    

      
    <footer className="bg-black text-white py-8 px-6 mt-8">

    <div>
      <h1 className='text-4xl my-7 bg-gray-200 text-center text-gray-700 font-josefin md:w-[50%] mx-auto p-3 rounded-md font-bold'>
        Our Trusted Partners
      </h1>

      {/* Mapping the logos */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-white py-4 w-[90%] mx-auto rounded-lg px-4'>
  {footerLogos.map((logo, index) => (
    <div
      key={index}
      className='w-full aspect-[6/3] flex items-center justify-center bg-white p-2 rounded-md shadow-sm'
    >
      <img
        src={logo.image}
        alt={`Logo ${index + 1}`}
        className='w-full h-full object-contain'
      />
    </div>
  ))}
</div>




      <div className='bg-red-700 flex flex-col my-8 md:flex-row justify-between mt-8 px-4 rounded-lg md:w-[60%] w-[90%] mx-auto items-center'>
        <p className='text-white text-center mt-4 md:mt-0 font-josefin font-bold'>
          Get an Account in Minutes Today!
        </p>
        <Link to="/trial">
          <button className='border mx-auto font-josefin m-4 md:my-3 bg-green-600 hover:bg-green-700 text-md md:text-lg px-6 md:px-12 text-white py-2 rounded-full'>
            Free One-Month trial!
          </button>
        </Link>
      </div>
    </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
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
            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Blogs</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold border-b pb-2 mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
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