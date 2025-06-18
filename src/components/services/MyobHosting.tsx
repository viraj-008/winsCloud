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

const MyobHosting = () => {
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
            >Myob Hosting
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
MYOB Hosting: Streamline Finances for Growth and Prosperity
        </h2>
</section>

<section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/myob.webp"
              alt="QuickBooks Hosting Service"
            />

          </figure>

          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
MYOB hosting is a cloud accounting software designed to cater to the needs of emerging organizations, providing them with a reliable system for financial management. While MYOB may not enjoy the same level of popularity as QuickBooks or Sage, it distinguishes itself with its advanced tools, widely regarded as the best utilities for small businesses. Experts laud MYOB as the most user-friendly platform for budding enterprises. Additionally, MYOB offers an array of incredible features, including the Process Payroll Assistant and flow-chart navigation graphics. Moreover, it boasts its own Android and iOS app, MYOB On The Go, enhancing accessibility and convenience for users on the move. With Winscloud’s fast and efficient cloud hosting solutions, MYOB is empowered with limitless capabilities, enabling businesses to streamline their financial processes and achieve their goals with ease and efficiency.
            </h2>

            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
The best is the access to data which can be done from any corner of the globe through any device connected to the internet. We have definitive solutions for every MYOB version and this is possible due to our team of experts.
            </p>
          </article>
        </section>

         <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
                        <h2 className="font-bold text-3xl md:text-5xl mt-3 font-serif  my-5  text-center text-textPrimary">
Advantages of Winscloud MYOB Hosting Solutions
                        </h2>
                        <p className="text-center font-montserrat mb-10 text-gray-800 max-w-6xl mx-auto">MYOB Hosting: Simplify finances, access anywhere, anytime, for peace of mind
                        </p>
              
                        <div className="grid gap-14 md:grid-cols-3 md:gap-8">
                          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              
                              <LuDatabaseBackup />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Streamlined Accounting
                            </h1>
                            <p className="px-4 text-gray-500">
                            MYOB simplifies financial management by providing tools for bookkeeping, invoicing, and expense tracking, making it easier to keep accurate financial records.
                            </p>
                          </div>
                          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                              <FaUsersGear />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Scalability
                            </h1>
                            <p className="px-4 text-gray-500">
                         MYOB software can accommodate the growth of your business. As your operations expand, you can add more features and users to meet your evolving needs.
                            </p>
                          </div>
              
                          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                              <RiInformation2Fill />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Inventory Management
                            </h1>
                            <p className="px-4 text-gray-500">
                           For businesses with inventory, MYOB helps manage stock levels, track sales, and reorder products when needed, minimizing stock outs and overstock situations.
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
Flexibility and Security Combined: MYOB Remote Access Solutions
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300 ">
           MYOB Remote Access allows seamless access to MYOB software, enabling remote financial management. Secure remote connectivity empowers users to work flexibly from any location, fostering collaboration. Robust encryption protocols safeguard sensitive financial data, ensuring security. MYOB Remote Access offers reliable performance and scalability to meet evolving business demands. It streamlines financial processes, facilitating informed decision-making and effective financial management. Experience heightened efficiency and productivity with MYOB Remote Access, empowering users to achieve their financial goals effortlessly.
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
Empower Your Business: Achieve Financial Goals with MYOB Hosting
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
MYOB Hosting provides businesses with efficient financial management solutions. With cloud-based services, users can securely access MYOB software from any location, ensuring convenience and flexibility. This streamlined approach fosters seamless collaboration among team members, enhancing productivity. Robust encryption protocols guarantee the security of sensitive financial information. Additionally, MYOB Hosting offers scalable options tailored to meet diverse business needs, optimizing cost-effectiveness. Experience simplified financial management with MYOB Hosting and empower your business to achieve its financial goals effortlessly.
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
Efficiency Redefined: Elevate Your Business with Our MYOB Hosting Provider
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
          Experience top-notch financial management solutions with our MYOB Hosting provider services. Access MYOB software securely from anywhere, ensuring flexibility and convenience for your business operations. Collaborate seamlessly with team members and safeguard sensitive financial data with robust encryption protocols. Our scalable options cater to diverse business needs, optimizing cost-effectiveness and efficiency. Elevate your financial management experience with our MYOB Hosting provider services and unlock growth and success in your business endeavours.
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
Seamless Collaboration: Experience Cloud MYOB Excellence   </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
Experience cutting-edge financial management solutions with Cloud MYOB services. Access MYOB software securely from anywhere, ensuring flexibility and convenience for your business operations. Collaborate seamlessly with team members and protect sensitive financial data with robust encryption protocols. Our scalable options meet diverse business needs, optimizing cost-effectiveness and efficiency. Enhance your financial management journey with Cloud MYOB, paving the way for growth and success in your business endeavours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Awards />
      </main>

      <Partner />
    </>
  );
};

export default MyobHosting;
