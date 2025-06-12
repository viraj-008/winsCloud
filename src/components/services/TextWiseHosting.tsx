import Partner from "../Partner";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { GrDocumentTest } from "react-icons/gr";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Expriance from "../Expriance";
import ServiceLink from "../ServiceLink";
import Awards from "../Awards";

const TextWiseHost = () => {
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
              Tax wise Hosting
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
              src="./images/logo/textwise.webp"
              alt="QuickBooks Hosting Service"
            />

          </figure>

          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
TaxWise Hosting Software stands out as one of the most efficient, exhaustive, and manageable solutions for tax preparation and return filing, earning widespread acclaim among US-based organizations, CPAs, and tax professionals. TaxWise Hosting Software offers a vast array of functionalities, tools, and features, ensuring smooth, precise, hassle-free, and time-efficient tax filing processes. Leveraging expertise in cloud computing, Winscloud delivers premier TaxWise hosting solutions. Our platforms provide access to all features, coupled with desktop compatibility, facilitating the estimation of even the most sophisticated returns. More than just a hosting service, we save your organization valuable time and resources, drawing from our extensive experience and expertise in cloud computing. Say goodbye to IT infrastructure expenses as our team takes care of everything for you.
            </h2>

            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
           We excel in hosting all versions and editions of TaxWise Hosting software. With our cloud hosting solutions, you get access to the overall desktop features which enable you to complete even the most complicated returns with absolute ease. Choosing Winscloud as your Tax software hosting partner is a very wise idea as we not only endeavor to save you valuable time and efforts required for tax practice, but also, turns out to be extremely cost-effective as the IT infrastructure for supporting the software demands no hefty investments upfront and neither in-house IT professionals have to be hired. Our hosted tax software solutions always provide users instant Tax data base access, easy central client management and also, secure data backup.
            </p>
          </article>
        </section>

        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
                        <h2 className="font-bold text-3xl md:text-5xl mt-3 font-serif  my-5  text-center text-textPrimary">
               Benefits of Winscloud TaxWise Hosting Software
                        </h2>
                        <p className="text-center font-montserrat mb-10 text-gray-800 max-w-6xl mx-auto">TaxWise hosting: Simplify finances, access anywhere, anytime, for peace of mind
                        </p>
              
                        <div className="grid gap-14 md:grid-cols-3 md:gap-8">
                          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              
                              <LuDatabaseBackup />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Comprehensive Tax Support
                            </h1>
                            <p className="px-4 text-gray-500">
                             TaxWise offered extensive support for federal and state tax forms, making it suitable for a wide range of individual and business tax scenarios. It often included support for various tax credits, deductions, and schedules.
                            </p>
                          </div>
                          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                              <FaUsersGear />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">High-performance servers
                            </h1>
                            <p className="px-4 text-gray-500">
                          Winscloud Cloud Server Hosting Providers also offer high-performance cloud servers based on Solid State Drives (SSD). These servers are designed to give the best possible performance compared to traditional hard servers.
                            </p>
                          </div>
              
                          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                              <RiInformation2Fill />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Data security
                            </h1>
                            <p className="px-4 text-gray-500">
                             Cross-device compatibility The systems are supportive to various devices such as desktops, laptops, smartphones and tablets. Protect from any threads
                            </p>
                          </div>
                          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                              <GiChoice />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Error Checking and Validation
                            </h1>
                            <p className="px-4 text-gray-500">
            Built-in error-checking and validation tools helped ensure accurate calculations and minimized the risk of common tax preparation errors.                    </p>
                          </div>
                          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                              <BiDetail />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Online support 24/7
              
                            </h1>
                            <p className="px-4 text-gray-500">
              Access our round-the-clock support for QuickBooks Premier Hosting, ensuring assistance whenever you need it, day or night.
                            </p>
                          </div>
                          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                              <GrDocumentTest />
              
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Updates and Compliance
                            </h1>
                            <p className="px-4 text-gray-500">
                              ATX typically provided regular updates to keep the software in compliance with changing tax laws and regulations, helping tax professionals stay current and avoid potential compliance issues.
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
     Driving Growth: Impact of Reliable Tax Software Hosting Providers
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300 ">
           Tax software hosting providers specialize in seamlessly integrating tax software with secure cloud-based solutions. These dedicated tax software hosting providers ensure confidential data storage, robust security measures, and 24/7 accessibility by hosting tax software on their servers. Managing technical aspects like updates, backups, and security, tax software hosting providers alleviate the IT burden for businesses. Offering scalable solutions, these providers adjust resources based on user requirements and storage needs. With dedicated customer support, they aid in migration, troubleshooting, and ensuring a smooth tax software experience. Partnering with tax software hosting providers allows businesses to focus on core activities, relying on experts for a secure, optimized tax software system aligned with their specific operational demands.
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
     Elevating Tax Efficiency: Embracing Tax Software Cloud Hosting
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
             Tax software cloud hosting seamlessly integrates tax software with cloud technology for secure data storage, enhanced accessibility, and streamlined tax operations. Enabling real-time data access and fortified security measures, tax software cloud hosting optimizes tax functionalities. With automatic updates, simplified IT management, and reduced costs, this solution empowers informed decision-making through analytics. Adaptable to evolving tax needs, tax software cloud hosting fosters productivity and compliance. As a catalyst for efficient tax management, it offers flexibility, scalability, and superior experiences while aligning with evolving regulations and ensuring data security.
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
    Efficiency Redefined: Premier Tax Software Hosting Insights
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
            Experience a revolution in tax preparation with Hosted ATX Software for financial professionals. This cloud-based solution offers secure access to Hosted ATX Software from anywhere, streamlining the management of tax files and client data. Enhancing productivity and flexibility, Hosted ATX Software ensures robust encryption and backup measures for data protection. The scalable infrastructure of Hosted ATX Software caters to diverse business needs, optimizing cost-effectiveness. Empower your financial practice with simplified tax preparation, delivering top-tier services effortlessly and efficiently.
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
Top-Tier Tax Solutions: ATX Hosting in the USA
   </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
             ATX Hosting services in the USA provide tax professionals with streamlined solutions for efficient tax preparation. Offering secure cloud-based access, users can conveniently utilize ATX software from any location. This facilitates seamless management of tax files and client data, enhancing productivity and flexibility. Robust encryption and backup measures ensure the security of sensitive information. The scalable infrastructure of ATX Hosting in the USA adapts to diverse business needs, optimizing cost-effectiveness. Elevate your tax preparation process with ATX Hosting in the USA for top-tier services with ease.
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

export default TextWiseHost;
