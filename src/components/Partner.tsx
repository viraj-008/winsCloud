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


  <div className="w-full py-12 bg-gray-50">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-blue-700 font-serif mb-2">
          Our Trusted Partners
        </h2>
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 rounded-full mb-4" />
      <div className=" rounded-xl px-6 py-4 max-w-2xl mx-auto">
  <p className="text-sm md:text-base font-josefin text-center">
    Backed by industry leaders in cloud infrastructure, data security, and IT innovation, we ensure seamless service delivery. Our partners help us build a resilient, high-performance environment so you can focus on what matters most — your success.
  </p>
</div>

      </div>

   <motion.div
      className="w-[90%] mx-auto my-8 p-6 rounded-xl shadow-lg"
      initial="initial"
      animate="animate"
    >
      <div className="flex justify-center flex-wrap border-2 rounded-md gap-6 ">
        {footerLogos.map((logo, index) => (
          <motion.div
            key={index}
            // variants={singleItem}
            initial="initial"
            animate="animate"
            className="w-[90px] sm:w-[110px] md:w-[120px] h-[45px] sm:h-[55px] md:h-[60px] flex items-center justify-center  p-2"
          >
            <img
              src={logo.image}
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>


    </div>



    </>      
    
  )
}

export default Partner
