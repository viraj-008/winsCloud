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
  

const singleItem = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
      
      
      
  return (
    <>


  <div className="w-full py-12 bg-gray-50">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-blue-700 font-serif mb-2">
          Our Trusted Partners
        </h2>
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 rounded-full mb-4" />
      <div className="bg-blue-100 rounded-xl px-6 py-4 max-w-2xl mx-auto">
  <p className="text-sm md:text-base font-josefin text-center">
    Backed by industry leaders in cloud infrastructure, data security, and IT innovation, we ensure seamless service delivery. Our partners help us build a resilient, high-performance environment so you can focus on what matters most — your success.
  </p>
</div>

      </div>

     <motion.div
  className="w-[90%] mx-auto my-8 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-6 rounded-xl shadow-lg"
  
>
  

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
    {footerLogos.map((logo, index) => (
      <motion.div
        key={index}
        variants={singleItem}
        animate="animate"
        className="w-[120px] h-[60px] flex items-center justify-center bg-white rounded-lg shadow p-2"
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
