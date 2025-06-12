import Partner from "../Partner";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { GrDocumentTest } from "react-icons/gr";
import Expriance from "../Expriance";
import ServiceLink from "../ServiceLink";
import Awards from "../Awards";

const FishbowlHosting = () => {
  console.log("Fishbowl Hosting Page Loaded");
  return (
    <>
      <section className="min-h-[80vh] rounded-b-3xl flex items-center bg-gradient-to-t from-[#6278c0] via-[#102f86] to-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto w-full gap-12 items-center mt-8">

          {/* Left Content */}
          <div className="text-center flex flex-col justify-center items-center md:text-left mt-12">
            <motion.h1
              className="text-slate-100 font-bold font-josefin text-3xl sm:text-4xl md:text-8xl leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Fishbowl Hosting
            </motion.h1>

            <Link to='trial'> <button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-black text-white font-mono text-sm px-6 py-3 rounded-lg shadow-md border border-blue-600 transition duration-300 hover:scale-105">
              <span className="text-green-400">//</span> Start Your Free Trial
            </button></Link>
          </div>

        </div>
      </section>

      <main>

        <section>
          <h2 className='text-3xl text-center py-4 max-w-6xl mx-auto font-bold font-montserrat text-textPrimary'>
            ATX Hosting: Stay ahead of the competition with Winscloud Solutions
          </h2>

        </section>



        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/fish-bowl.webp"
              alt="Fishbowl Hosting Service"
            />

          </figure>

          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
              For vast manufacturing units or warehouse admins, Fishbowl Hosting Services are a must. This inventory management platform offers the best tools to automate processes, enhance efficiency, and address inventory-related issues. Fishbowl empowers teams with robust features like material billing and work orders, while also enabling oversight of multiple components simultaneously. Warehouse operations, including packing, picking, and shipping, are upgraded with Fishbowl Hosting Services. The platform provides a plethora of tools to monitor KPIs and effectively manage resource allocation.
            </h2>

            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
              With Winscloud, you can integrate your Fishbowl system with our cloud computing technology through Fishbowl Hosting Services. Hosting online enhances the system’s capabilities to perform limitless functionalities from anywhere, anytime. Our competitive prices reduce your supply chain costs and automate inventory and warehouse management efficiently.
            </p>
          </article>
        </section>



        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
          <h2 className="font-bold text-3xl md:text-5xl mt-3 font-serif  my-5  text-center text-textPrimary">
            Best Features of Fishbowl Hosting with Winscloud
          </h2>
          <p className="text-center font-montserrat mb-10 text-gray-800 max-w-6xl mx-auto">TaxWise hosting: Simplify Fishbowl Hosting: Simplify finances, access anywhere, anytime, for peace of mind

          </p>

          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <LuDatabaseBackup />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Inventory Tracking

              </h1>
              <p className="px-4 text-gray-500">
                Fishbowl provides real-time tracking of inventory levels, helping businesses monitor stock levels, manage reorder points, and prevent stock outs or overstock situations.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                <FaUsersGear />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Scalability
              </h1>
              <p className="px-4 text-gray-500">
Fishbowl software is scalable to accommodate your business growth. As your operations expand, easily add more features and users to meet your evolving needs.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                <RiInformation2Fill />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Inventory Management
              </h1>
              <p className="px-4 text-gray-500">
Fishbowl aids businesses in inventory management, tracking stock levels, sales, and facilitating product reordering as required, thereby reducing instances of stockouts and overstock.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <GiChoice />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">99.99% uptime
              </h1>
              <p className="px-4 text-gray-500">
                With regularly available servers, you can work on your finances without any service breakdown.
                  </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                <BiDetail />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Reliable Services
              </h1>
              <p className="px-4 text-gray-500">
The cloud hosting services offered by Winscloud are SSAE-18 Type II (SOC-2) certified safe, for using maximum security on its servers.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <GrDocumentTest />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Backup & Recovery
              </h1>
              <p className="px-4 text-gray-500">
                We have automated data backup and recovery option to prevent any accidental data loss and for deleted files.
              </p>
            </div>
          </div>
        </div>

         <Expriance/>
    <ServiceLink />

            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold text-gray-800 font-inter mb-12 text-center">
      What can you do with us
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="flex flex-col h-full">
        <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
            <div className="w-10 h-10 mb-4 md:mb-0 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-100 text-xl font-semibold">
Efficient Inventory Management: Explore Fishbowl Hosting Solutions 
 </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300 ">
Unlock streamlined inventory management solutions with Fishbowl hosting. Efficiently manage stock levels, track sales, and reorder products to minimize stock outs and overstock. Our Fishbowl hosting services provide secure access to inventory management software from anywhere, ensuring flexibility for your business operations. Collaborate seamlessly with team members and protect sensitive inventory data with robust encryption protocols. Experience heightened efficiency and productivity with Fishbowl hosting, empowering your business to achieve its inventory management goals effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col h-full">
        <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
            <div className="w-10 h-10 mb-4 md:mb-0 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-100 text-xl font-semibold">
Stay Connected, Stay Productive: Experience Fishbowl Remote Access Today
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
Effortlessly manage your inventory with Fishbowl remote access. Conveniently track sales, place orders, and collaborate with your team from any location. With robust encryption measures, your inventory data remains secure. Fishbowl remote access solution offers flexibility and convenience, helping your business streamline operations and boost productivity. Stay ahead of the competition with Fishbowl’s remote inventory management capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col h-full">
        <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
            <div className="w-10 h-10 mb-4 md:mb-0 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-100 text-xl font-semibold">
Streamline Operations Anywhere: Explore Fishbowl's Cloud Hosting Solutions
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
Unlock exceptional inventory management capabilities with Fishbowl’s cloud hosting. Track sales, manage stock levels, and streamline reordering processes seamlessly from any location. Our secure cloud hosting ensures data protection while providing flexibility and accessibility for your business operations. Collaborate effortlessly with team members and scale your inventory management as your business expands. With Fishbowl’s cloud hosting, empower your business with efficient inventory management solutions that drive productivity and growth. Experience the power of cloud-based inventory management with Fishbowl today.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col h-full">
        <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
            <div className="w-10 h-10 mb-4 md:mb-0 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-100 text-xl font-semibold">
Efficient Inventory Management Made Easy: Hosted Fishbowl Solutions
   </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
            Experience enhanced inventory management with Hosted Fishbowl solutions. Track sales, manage stock levels, and optimize reordering processes seamlessly from any location. Our secure hosting guarantees data protection while providing flexibility for your business operations. Collaborate effortlessly with team members and scale your inventory management as your business expands. With Hosted Fishbowl, empower your business with efficient solutions that drive productivity and growth. Unlock the potential of hosted inventory management with Fishbowl today.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Awards />
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default FishbowlHosting;
