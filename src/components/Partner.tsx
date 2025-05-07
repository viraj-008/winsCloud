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
      const slideVariants = {
        animate: {
          x: ["0%", "-50%"],
          transition: {
            duration: 10,      // Slower and smoother
            ease: "linear",
            repeat: Infinity,
          },
        },
      };
      
      
      
  return (
    <>


    <h1 className="text-4xl text-center bg-gray-300 my-8 font-serif p-3 font-bold text-gray-800 w-[96%] rounded-xl mx-auto">Our Trusted Partners</h1>
   <motion.div className="overflow-hidden my-4 w-[90%] bg-white py-4 mx-auto">
      <motion.div
        className="flex gap-8 w-max"
        variants={slideVariants}
        animate="animate"
      >
        {footerLogos.map((logo, index) => (
          <div
            key={index}
            className="w-[150px] h-[75px] flex items-center justify-center bg-white p-2 rounded-md shadow-sm"
          >
            <img
              src={logo.image}
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Duplicate logos for seamless loop */}
        {footerLogos.map((logo, index) => (
          <div
            key={`dup-${index}`}
            className="w-[150px] h-[75px] flex items-center justify-center bg-white p-2 rounded-md shadow-sm"
          >
            <img
              src={logo.image}
              alt={`Logo duplicate ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
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
