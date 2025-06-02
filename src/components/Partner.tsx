import { motion } from "framer-motion";

const Partner = () => {
  interface Logo {
    image: string;
  }

  const footerLogos: Logo[] = [
    { image: "/images/Flogo/Google.webp" },
    { image: "/images/Flogo/idrive.png" },
    { image: "/images/Flogo/micro.png" },
    { image: "/images/Flogo/Sectigo.png" },
    { image: "/images/Flogo/veeam.png" },
    { image: "/images/Flogo/Wasabi.png" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 255, 0.3)",
    transition: { duration: 0.3 },
  };

  return (
    <div className="w-full py-16 bg-gradient-to-t from-[#0f172a] via-[#163579] to-black relative mt-12 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
        >
          Our Trusted Partners
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full mb-6"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="rounded-xl px-6 py-4 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10"
        >
          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
            Backed by <span className="text-blue-400">industry leaders</span> in cloud infrastructure, data security, and IT innovation, we ensure seamless service delivery. Our partners help us build a <span className="text-purple-400">resilient, high-performance</span> environment so you can focus on what matters most — your success.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="w-[90%] mx-auto my-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {footerLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hoverEffect}
              className="flex items-center justify-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/30"
            >
              <motion.img
                src={logo.image}
                alt={`Logo ${index + 1}`}
                className="w-full h-auto max-h-16 object-contain  transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Partner;