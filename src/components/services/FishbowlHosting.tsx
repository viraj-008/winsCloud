import Partner from "../Partner";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsCalendarCheckFill } from "react-icons/bs";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { MdOutlineSpatialTracking } from "react-icons/md";

import Expriance from "../Expriance";
import ServiceLink from "../ServiceLink";
import Awards from "../Awards";

const FishbowlHosting = () => {
  console.log("Fishbowl Hosting Page Loaded");
  return (
    <>
      <section className="min-h-[90vh] rounded-b-xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">
        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-7xl leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >Fishbowl Hosting
            </motion.h1>


            <Link to="/trial">
              <button className="relative group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Start One-month FREE Trial
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <motion.div
            animate={{
              x: [0, -10, 0, 10, 0],
              y: [0, 10, 0, -10, 0],
              opacity: 1,
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex mt-12 md:justify-end"
          >
            <img
              src="/images/Home/homePNG.png"
              alt="Server"
              className="w-full max-w-md md:h-[400px] rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>

      <main>

        <section>
          <h2 className='text-3xl text-center py-4 max-w-6xl mx-auto font-bold font-montserrat text-textPrimary'>
            Fishbowl Hosting Services: Streamlining Inventory Management for Businesses
          </h2>

        </section>



        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4  md:px-16 md:py-6">
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



        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100  py-6  ">
          <h2 className="font-bold w-[90%] mx-auto text-4xl mt-3 font-inter  my-5  text-center text-textPrimary">
            Best Features of Fishbowl Hosting with Winscloud
          </h2>
          <p className="text-center text-xl px-3 font-montserrat mb-10 text-gray-800 max-w-3xl mx-auto">TaxWise hosting: Simplify Fishbowl Hosting: Simplify finances, access anywhere, anytime, for peace of mind

          </p>

          <div className="grid gap-14 w-[90%] mx-auto md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <MdOutlineSpatialTracking className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Inventory Tracking

              </h1>
              <p className="px-4 text-gray-500">
                Fishbowl provides real-time tracking of inventory levels, helping businesses monitor stock levels, manage reorder points, and prevent stock outs or overstock situations.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                <BsCalendarCheckFill className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Scalability
              </h1>
              <p className="px-4 text-gray-500">
                Fishbowl software is scalable to accommodate your business growth. As your operations expand, easily add more features and users to meet your evolving needs.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                <MdOutlineManageHistory className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Inventory Management
              </h1>
              <p className="px-4 text-gray-500">
                Fishbowl aids businesses in inventory management, tracking stock levels, sales, and facilitating product reordering as required, thereby reducing instances of stockouts and overstock.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <IoMdClock className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">99.99% uptime
              </h1>
              <p className="px-4 text-gray-500">
                With regularly available servers, you can work on your finances without any service breakdown.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                <GrServices className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Reliable Services
              </h1>
              <p className="px-4 text-gray-500">
                The cloud hosting services offered by Winscloud are SSAE-18 Type II (SOC-2) certified safe, for using maximum security on its servers.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <MdOutlineSettingsBackupRestore className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Backup & Recovery
              </h1>
              <p className="px-4 text-gray-500">
                We have automated data backup and recovery option to prevent any accidental data loss and for deleted files.
              </p>
            </div>
          </div>
        </div>

        <Expriance />
        <ServiceLink />

        <div className="py-6 w-[90%] mx-auto bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 font-inter mb-8 text-center">
              What can you do with us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col h-full">
                <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
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
                    <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
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
                    <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
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
                    <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
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
