import { Link } from "react-router-dom"
import { motion } from "framer-motion";
const Partner = () => {

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
      
  return (
    <>
         <h1 className='text-4xl my-7 bg-gray-200 text-center text-gray-700 font-josefin md:w-[50%] mx-auto p-3 rounded-md font-bold'>
        Our Trusted Partners
      </h1>


      {/* Mapping the logos */}
      <motion.div
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-white w-[90%] mx-auto rounded-lg px-4 py-4"
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.2, once: false }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
        {footerLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="w-full aspect-[6/3] flex items-center justify-center bg-white p-2 rounded-md shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <img
              src={logo.image}
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>


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
    </>      
    
  )
}

export default Partner
