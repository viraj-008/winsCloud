import { Link } from "react-router-dom";
import Partner from "../Partner";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { GrDocumentTest } from "react-icons/gr";
import { motion } from "framer-motion";
import Awards from "../Awards";
import Expriance from "../Expriance";
import ServiceLink from "../ServiceLink";

const ActHosting = () => {
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
            >Act Hosting
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

      <section>
        <h2 className='text-3xl text-center py-4 max-w-6xl mx-auto font-bold font-montserrat text-textPrimary'>
ACT Hosting Services offers seamless and powerful CRM management

        </h2>

</section>

      <main>


        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/act-soft.webp"
              alt="QuickBooks Hosting Service"
            />

          </figure>

          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
              ACT Hosting Services cater to federal, state, and local tax needs for organizations, trusts, and enterprises. ACT hosting software ensures precise error detection and rectification, enhancing filing accuracy. Its features streamline processes, reduce IRS rejection risks, and save time on entry cross-checking. Hosting ACT on Winscloud Matrix’s cloud platform, part of ACT Hosting Services, enhances efficiency and accessibility for tax professionals. It provides robust support for collaborative tax estimation and quick returns, empowering teams to work seamlessly on centralized servers. With dedicated technical support available, our experts ensure smooth operations and prompt resolution of any software queries or issues.
            </h2>

            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
              We’ve successfully assisted numerous accounting professionals with our fast and efficient ACT hosting services. Our advanced systems empower your entire team to collaborate seamlessly on centralized servers, greatly improving tax estimation accuracy and facilitating quick filing processes. Additionally, our dedicated team of ACT hosting experts is always available to promptly address any technical queries, provide comprehensive support, and ensure smooth operations across various communication channels, ensuring your business runs efficiently and effectively.
            </p>
          </article>
        </section>



        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
          <h2 className="font-bold text-3xl md:text-5xl mt-3 font-serif  my-5  text-center text-textPrimary">
            Rely on Our ATX Hosting Solutions for Unmatched Cloud Server Performance
          </h2>
          <p className="text-center font-montserrat mb-10 text-gray-800 max-w-6xl mx-auto">ATX Hosting: Simplify finances, access anywhere, anytime, for peace of mind

          </p>

          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <LuDatabaseBackup />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Well-equipped Data Centers

              </h1>
              <p className="px-4 text-gray-500">
                Winscloud Cloud Server Hosting Providers offers hosting services that utilize state-of-the-art cloud technology allowing them to provide you with world-class service.
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
Built-in error-checking and validation tools helped ensure accurate calculations and minimized the risk of common tax preparation errors.
              </p>
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
Effortless Tax Management: ATX Cloud Hosting Solutions
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300 ">
              ATX Cloud Hosting transforms tax preparation for financial professionals by providing seamless access to ATX tax software from any location. This solution streamlines workflows and boosts efficiency. Accountants and CPAs can securely access important files and client information at any time and from any device. With robust encryption and backup measures, ATX Cloud Hosting ensures data security. Its scalable infrastructure adapts to diverse business needs. Simplify tax preparation with ATX Cloud Hosting, empowering financial professionals to excel.
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
Seamless Tax Management Anywhere: Explore ATX Remote Access
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
             ATX Remote Access provides financial professionals with convenient access to their tax software from anywhere. This remote solution facilitates seamless management of tax files and client data on-the-go. Secure encryption and backup protocols ensure the protection of sensitive information with ATX Remote Access. The platform’s versatility enables easy adaptation to changing needs, enhancing productivity and flexibility. Streamlining workflow processes, ATX Remote Access empowers users to deliver top-tier services to their clients efficiently, contributing to improved business outcomes.
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
Unlock Flexibility with ACT Efficient Tax Preparation Made Easy with Hosted ATX Software
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
Optimize CRM Operations with Top-Tier Tax Solutions: ATX Hosting in the USA            </h2>
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

      

        <section className="flex flex-col md:flex-row justify-around mt-10 px-4">
          <Link to="https://www.act.com/products/" aria-label="Try ACT Hosting from Winscloud">
             <div className="relative inline-flex my-4 md:my-0 items-center justify-center gap-4 group">
      <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        role="button"
        className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
        title="payment"
        href="#"
      >
        Try ACT Hosting from Winscloud by Clicking Here.
        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height="10"
          width="10"
          fill="none"
          className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
        >
          <path
            d="M0 5h7"
            className="transition opacity-0 group-hover:opacity-100"
          />
          <path
            d="M1 1l4 4-4 4"
            className="transition group-hover:translate-x-[3px]"
          />
        </svg>
      </a>
    </div>
          </Link>

          <Link to="https://www.act.com/products/" aria-label="Check Out ACT Product">
             <div className="relative inline-flex items-center justify-center gap-4 group">
      <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        role="button"
        className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
        title="payment"
        href="#"
      >
       Here is the ACT Product for you to Check 0ut
        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height="10"
          width="10"
          fill="none"
          className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
        >
          <path
            d="M0 5h7"
            className="transition opacity-0 group-hover:opacity-100"
          />
          <path
            d="M1 1l4 4-4 4"
            className="transition group-hover:translate-x-[3px]"
          />
        </svg>
      </a>
    </div>
          </Link>
        </section>


<Awards/>
        
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default ActHosting;
