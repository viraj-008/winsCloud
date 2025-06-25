import { Link } from "react-router-dom";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { FaMapLocation } from "react-icons/fa6";
import { TbServerSpark } from "react-icons/tb";
import { FaSoundcloud } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { VscServerEnvironment } from "react-icons/vsc";

import ServiceLink from "../ServiceLink";
import Expriance from "../Expriance";
import Awards from "../Awards";

const CloudServerHosting = () => {
  return (
    <>
      <section className="min-h-[90vh] rounded-b-xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">
        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >Coude Server Hosting
            </motion.h1>
            {/* 
            <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Streamline your workflow and organize your tax operations with Lacerte Hosting
            </p> */}

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
            Dedicated Server Hosting for Optimal Performance and Security
          </h2>

        </section>


        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/get.png"
              alt="QuickBooks Hosting Service"
            />

          </figure>



          {/* TEXT on the left (or top on mobile) */}
          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
              ProSeries Tax Software Hosting is professional tax software based on the cloud. It helps tax pros and accountants carry out key tasks for their clients like preparing and monitoring returns, filing e-forms, and tracking errors from anywhere, at any time, with efficiency. With the power of cloud, accountants and tax professionals can give their clients peace of mind since ProSeries Hosting keeps their data safe and secure, with bank grade security measures like encrypted servers, network firewalls, and anti-virus.
            </h2>
            <p className="font-montserrat text-gray-700   text-sm text-justify md:text-base">
              With ProSeries Cloud Hosting, tax preparers can experience easy tax filing, enjoy the robust features of the popular tax software, gain 24/7 access to tax data so they can stay on top of their clients’ tax filing anytime, anywhere, and remotely collaborate with their clients and team. This added flexibility, security, and productivity that comes with ProSeries Cloud Hosting significantly elevates the entire tax preparation process.
            </p>

          </article>


        </section>


        <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base p-6 rounded-lg  shadow-md bg-white hover:shadow-lg mx-8 transition-shadow duration-300">At Winscloud, we pride ourselves on being the best cloud server provider in the business. We are always looking for new ways to improve our service and make our customers’ lives easier. To provide flexible and scalable Cloud Hosting solutions we are constantly innovating and expanding services so that our customers can always rely on us.Winscloud’s Cloud server providers are a reliable and trusted name when it comes to providing cloud hosting services. We have a team of experts who are always available to take care of all the technical issues that may arise. The company has a wide range of services that it offers, from maintaining infrastructure to managing the software hassle. This makes Winscloud’s flexible and scalable Cloud Hosting the perfect partner for any business that wants to move to the cloud.

        </p>


        <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl mt-7 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
              Ready to see how  Cloud Server Hosting helps with tax preparation?
            </h1>
            <Link to='/trial'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                Try Cloud Server Hosting for FREE
              </button>
            </Link>
          </div>
        </div>

        <ServiceLink />
        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
          <h2 className="font-bold text-3xl md:text-4xl mt-3 font-inter  my-5  text-center text-textPrimary">
            We are reliable cloud dedicated server hosting provider
          </h2>
          <p className="text-center font-montserrat mb-10 text-gray-800 max-w-6xl mx-auto">Cloud Dedicated Server Hosting: Simplify finances, access anywhere, anytime, for peace of mind</p>

          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <FaMapLocation />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Well-equipped Data centers
              </h1>
              <p className="px-4 text-gray-500">
                Winscloud Cloud Server Hosting Providers offers hosting services that utilize state-of-the-art cloud technology allowing them to provide you with world-class service.

              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                <TbServerSpark />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">High-performance servers
              </h1>
              <p className="px-4 text-gray-500">
                Winscloud Cloud Server Hosting Providers also offer high-performance cloud servers based on Solid State Drives (SSD). These servers are designed to give the best possible performance compared to traditional hard servers.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                <FaSoundcloud />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Access the Cloud
              </h1>
              <p className="px-4 text-gray-500">
                Cross-device compatibility The systems are supportive to various devices such as desktops, laptops, smartphones and tablets.Protect from any threds

              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <VscServerEnvironment />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Business continuity

              </h1>
              <p className="px-4 text-gray-500">
                Our business Continuity and DR Planning ensure your critical business applications can operate during an emergency.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                <BiSupport />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Online support 24/7

              </h1>
              <p className="px-4 text-gray-500">
                Access our round-the-clock support for QuickBooks Premier Hosting, ensuring assistance whenever you need it, day or night.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <GrShieldSecurity />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">High security


              </h1>
              <p className="px-4 text-gray-500">
                Multiple security measures are in place to protect your data and applications on the cloud. These include multiple layers of authentication, strong encryption, and multi-factor authentication (MFA).

              </p>
            </div>
          </div>
        </div>



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
                      Revolutionizing Digital Infrastructure: The Power of Cloud Server Hosting
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300 ">
                      Cloud server hosting revolutionizes digital infrastructure, offering adaptable, scalable, and dependable solutions. By leveraging remote servers, it eliminates the need for physical hardware, reducing expenses and maintenance.
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
                      Enhancing Efficiency: The Versatility of Hosted Cloud Servers
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                      Businesses benefit from hosted cloud servers, which offer efficient and adaptable computing solutions. By utilizing remote servers, hosted cloud servers eliminate the requirement for physical infrastructure.
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
                      Empowering Efficiency: The Role of Cloud Server Providers in Modern Business
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                      Cloud server providers deliver dependable and scalable computing resources as needed by businesses. They handle infrastructure management, enabling clients to concentrate on core operations.
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
                      Empowering Business Efficiency: The Role of Server Providers in Modern IT
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                      Server providers deliver essential computing resources, ensuring smooth operations for businesses. They manage infrastructure, freeing clients to prioritize core objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Expriance />
        <Awards />

      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default CloudServerHosting;
