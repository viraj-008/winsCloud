import Partner from "../Partner"
const FishbowlHosting = () => {
    console.log("Fishbowl Hosting Page Loaded")
  return (
    <>
    <div className="h-auto w-full pb-10">
    <div className="w-full flex bg-[url('/images/Home/server.webp')] bg-cover bg-center  pt-20 px-5 md:px-20 items-center min-h-[530px]">
      <div className="w-full text-center md:text-left">
        <h1 className="text-white  px-2 p-4 rounded-lg font-kanit text-3xl md:text-6xl leading-tight">
        Fishbowl Hosting Services
        </h1>
       
      </div>
    </div>
  </div>

  <div className="  justify-center  p-4 m">

    <h1 className="text-center font-semibold font-kanit text-2xl">Fishbowl Hosting Services: Streamlining Inventory Management for Businesses

    </h1>
    {/* Text Section */}
    <div className="w-[96%] font-semibold text-gray-700  mx-auto">
      <p className="font-montserrat text-center my-2 md:my-4 text-sm md:text-base">
   
      For vast manufacturing units or warehouse admins, Fishbowl Hosting Services are a must. This inventory management platform offers the best tools to automate processes, enhance efficiency, and address inventory-related issues. Fishbowl empowers teams with robust features like material billing and work orders, while also enabling oversight of multiple components simultaneously. Warehouse operations, including packing, picking, and shipping, are upgraded with Fishbowl Hosting Services. The platform provides a plethora of tools to monitor KPIs and effectively manage resource allocation.
</p>
      <p className="font-montserrat text-center text-sm md:text-base">
      With Winscloud, you can integrate your Fishbowl system with our cloud computing technology through Fishbowl Hosting Services. Hosting online enhances the system’s capabilities to perform limitless functionalities from anywhere, anytime. Our competitive prices reduce your supply chain costs and automate inventory and warehouse management efficiently.</p>
    </div>

    {/* Image Section */}
    <div className=" w-[90%] mx-auto  flex justify-center mt-8">
      <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/fish-bowl.webp" alt="QuickBooks Hosting" />
    </div>
  </div>


  <h1 className="text-center text-lg md:text-2xl my-5 px-4 font-bold">
  Best Features of Fishbowl Hosting with Winscloud
  </h1>

    <p className="text-center px-4 font-montserrat">Fishbowl Hosting: Simplify finances, access anywhere, anytime, for peace of mind
</p>


    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
      <h2 className="font-bold text-xl mb-2 font-kanit">   
      Inventory Tracking
      </h2>
      <p className="text-gray-700 font-montserrat  transition-all duration-300">
      Fishbowl provides real-time tracking of inventory levels, helping businesses monitor stock levels, manage reorder points, and prevent stock outs or overstock situations.
</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
      <h2 className="font-bold text-xl mb-2 font-kanit">Scalability
      </h2>
      <p className="text-gray-700 font-montserrat " >
      MYOB software can accommodate the growth of your business. As your operations expand, you can add more features and users to meet your evolving needs.
</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
      <h2 className="font-bold text-xl mb-2  font-kanit">Inventory Management
      </h2>
      <p className="text-gray-800 font-montserrat transition-all duration-300">
      For businesses with inventory, MYOB helps manage stock levels, track sales, and reorder products when needed, minimizing stock outs and overstock situations.
</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
      <h2 className="font-bold text-xl mb-2  font-kanit">99.99% uptime
      </h2>
      <p className="text-gray-800 font-montserrat transition-all duration-300">
      With regularly available servers, you can work on your finances without any service breakdown.
      </p>
    </div>
    {/* Card 5 */}
    <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
      <h2 className="font-bold text-xl mb-2  font-kanit">Reliable Services
</h2>
      <p className="text-gray-800 font-montserrat transition-all duration-300">
      The cloud hosting services offered by Winscloud are SSAE-18 Type II (SOC-2) certified safe, for using maximum security on its servers.
      </p>
    </div>
    {/* Card 6 */}
    <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
      <h2 className="font-bold text-xl mb-2  font-kanit">Backup & Recovery
      </h2>
      <p className="text-gray-800 font-montserrat transition-all duration-300">
      We have automated data backup and recovery option to prevent any accidental data loss and for deleted files
      </p>
    </div>
   
  </div>

  <h1 className="text-center text-lg md:text-2xl my-5  mt-12 underline px-4 font-bold">
  What can you do with us
  </h1>

    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white/20  backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      
      <h2 className="font-bold text-xl mb-2   bg-red-600 text-white font-josefin py-3 rounded-lg">Flexibility and Security Efficient Inventory Management: Explore Fishbowl Hosting Solutions
      </h2>
      <p className="text-gray-700  p-2 rounded-md shadow-lg  font-montserrat transition-all duration-300">
      Unlock streamlined inventory management solutions with Fishbowl hosting. Efficiently manage stock levels, track sales, and reorder products to minimize stock outs and overstock. Our Fishbowl hosting services provide secure access to inventory management software from anywhere, ensuring flexibility for your business operations. Collaborate seamlessly with team members and protect sensitive inventory data with robust encryption protocols. Experience heightened efficiency and productivity with Fishbowl hosting, empowering your business to achieve its inventory management goals effortlessly.
</p>
    </div>
    <div className="bg-white/20  backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      
      <h2 className="font-bold text-xl mb-2   bg-red-600 text-white font-josefin py-3 rounded-lg"> Stay Connected, Stay Productive: Experience Fishbowl Remote Access Today
      </h2>
      <p className="text-gray-700  p-2 rounded-md shadow-lg  font-montserrat transition-all duration-300">
      Effortlessly manage your inventory with Fishbowl remote access. Conveniently track sales, place orders, and collaborate with your team from any location. With robust encryption measures, your inventory data remains secure. Fishbowl remote access solution offers flexibility and convenience, helping your business streamline operations and boost productivity. Stay ahead of the competition with Fishbowl’s remote inventory management capabilities.
</p>
    </div>
    <div className="bg-white/20  backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      
      <h2 className="font-bold text-xl mb-2   bg-red-600 text-white font-josefin py-3 rounded-lg">Efficiency Redefined: Elevate Streamline Operations Anywhere: Explore Fishbowl's Cloud Hosting Solutions
      </h2>
      <p className="text-gray-700  p-2 rounded-md shadow-lg  font-montserrat transition-all duration-300">
      Unlock exceptional inventory management capabilities with Fishbowl’s cloud hosting. Track sales, manage stock levels, and streamline reordering processes seamlessly from any location. Our secure cloud hosting ensures data protection while providing flexibility and accessibility for your business operations. Collaborate effortlessly with team members and scale your inventory management as your business expands. With Fishbowl’s cloud hosting, empower your business with efficient inventory management solutions that drive productivity and growth. Experience the power of cloud-based inventory management with Fishbowl today.
</p>
    </div>
    <div className="bg-white/20  backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
      
      <h2 className="font-bold text-xl mb-2   bg-red-600 text-white font-josefin py-3 rounded-lg">Efficient Inventory Management Made Easy: Hosted Fishbowl Solutions

      </h2>
      <p className="text-gray-700  p-2 rounded-md shadow-lg  font-montserrat transition-all duration-300">
      Experience enhanced inventory management with Hosted Fishbowl solutions. Track sales, manage stock levels, and optimize reordering processes seamlessly from any location. Our secure hosting guarantees data protection while providing flexibility for your business operations. Collaborate effortlessly with team members and scale your inventory management as your business expands. With Hosted Fishbowl, empower your business with efficient solutions that drive productivity and growth. Unlock the potential of hosted inventory management with Fishbowl today.
</p>
    </div>

    </div>
   
<Partner/>

  </>
  )
}

export default FishbowlHosting
