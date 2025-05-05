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

<motion.div
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-white w-[90%] mx-auto rounded-lg px-4 py-4"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3 }}
  viewport={{ once: false, amount: 0.2 }}
>
  {footerLogos.map((logo, index) => (
    <div
      key={index}
      className="w-full aspect-[6/3] flex items-center justify-center bg-white p-2 rounded-md shadow-sm"
    >
      <img
        src={logo.image}
        alt={`Logo ${index + 1}`}
        className="w-full h-full object-contain"
      />
    </div>
  ))}
</motion.div>

     <motion.div
  className="bg-red-700 flex flex-col my-8 md:flex-row justify-around mt-8 px-4 rounded-lg md:w-[90%] w-[90%] mx-auto items-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.1 }}
  viewport={{ once: false, amount: 0.2 }}
>
  <p className="text-white text-center mt-4 md:mt-0 font-josefin font-bold">
    Get an Account in Minutes Today!
  </p>
  <Link to="/trial">
    <button className="border mx-auto font-josefin m-4 md:my-3 bg-green-600 hover:bg-green-700 text-md md:text-lg px-6 md:px-12 text-white py-2 rounded-full">
      Free One-Month trial!
    </button>
  </Link>
</motion.div>


    </>      
    
  )
}

export default Partner
