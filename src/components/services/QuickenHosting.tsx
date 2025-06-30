import { Helmet } from "react-helmet";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import { TiDeviceLaptop } from "react-icons/ti";
import { IoMdClock } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { Link } from "react-router-dom";
import Expriance from "../Expriance";
import ServiceLink from "../ServiceLink";
import Awards from "../Awards";
const QuickenHosting = () => {
  return (
    <>
      <section className="md:min-h-[90vh] rounded-b-3xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">

         <Helmet>
          <title>Quicken Hosting | Cloud Quicken Solutions by Winscloud</title>
          <meta name="description" content="Boost productivity with secure Quicken Hosting by Winscloud. Scalable, affordable, 24/7 support—Get started today with a free consultation!" />
        </Helmet>

        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-7xl leading-tight md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >Quicken Hosting
            </motion.h1>


            <Link to="/trial">
              <button className="relative mt-3 group overflow-hidden">
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
              alt="ServerImage"
              className="w-full max-w-md md:h-[400px] rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>


      <main>
        <section>
          <section>
            <h2 className='text-3xl w-[90%] mx-auto text-center mt-4 max-w-6xl  font-bold font-montserrat text-textPrimary'>
              Unveiling the Benefits of Quicken Hosting Services for Streamlined Management
            </h2>
          </section>

          <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-6">
            {/* IMAGE on the right (or bottom on mobile) */}
            <figure className="w-full md:w-1/2 flex justify-center">
              <img
                className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
                src="./images/logo/quicken.webp"
                alt="Quicken Hosting"
              />

            </figure>

            <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
              <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
                Quicken Hosting services present an all-in-one financial management system, equipped with numerous tools and functionalities tailored for optimal budget planning. Widely endorsed by accounting professionals and CPAs, its seamless operation streamlines capital operations for entrepreneurs and SME owners, significantly reducing time constraints. These features prove invaluable for tax managers dealing with high clientele demands. Winscloud offers the most advanced and cost-effective Quicken Hosting service, providing users with the opportunity to experience the transformative power of cloud computing alongside the best accounting tools available. Our competitive pricing and scalable services ensure that users can access real-time data with minimal lag from any corner of the world, empowering them to monitor their financial activities with ease and efficiency.

              </h2>

              <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
                Quicken Hosting services streamline financial management for businesses by offering cloud-based solutions. With Quicken Hosting services, users can securely access their financial data from any location, ensuring convenience and flexibility. This facilitates seamless collaboration among team members, enhancing productivity. Robust encryption protocols safeguard sensitive financial information, ensuring data security. Additionally, Quicken Hosting services provide scalable options tailored to meet the diverse needs of businesses, optimizing cost-effectiveness. Experience simplified financial management with Quicken Hosting services, empowering businesses to achieve their financial goals with ease.
              </p>
            </article>
          </div>
        </section>

        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100    py-6  ">
          <h2 className="font-bold text-4xl mt-3 font-inter  my-5  text-center text-textPrimary">
       Advantages of Winscloud Quicken Hosting Solutions
           </h2>
          <p className="text-center px-3 text-xl font-montserrat mb-10 text-gray-800 max-w-4xl mx-auto">TaxWise hosting: Simplify finances, access Quicken Hosting: Simplify finances, access anywhere, anytime, for peace of mind
          </p>

          <div className="grid w-[90%] mx-auto gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <BiSupport className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Expert Support
              </h1>
              <p className="px-4 text-gray-500">
               With trained professional Lacerte cloud hosting we are 24 x 7 available at your services.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                <FaUsersGear className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Multiple User Access

              </h1>
              <p className="px-4 text-gray-500">
                We assure that your clients and employees can collaborate on the same platform with as many numbers of user access.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                <TiDeviceLaptop className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Cross-Device Functionality
              </h1>
              <p className="px-4 text-gray-500">
                The software is compatible with multiple devices including laptop, smartphones, etc. so the user can access it by any device.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <IoMdClock className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">99.99% uptime
              </h1>
              <p className="px-4 text-gray-500">
                With regularly available servers, you can work on your finances without any service breakdown.    </p>
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

         <Expriance/>
    <ServiceLink />

        
         <div className="pt-8 w-[90%] mx-auto  bg-white">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold text-gray-800 font-inter mb-6 text-center">
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
   Efficient Financial Management: Quicken Hosting Providers Lead the Way
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300 ">
          Quicken hosting providers deliver tailored solutions for businesses seeking efficient financial management. Through cloud-based services, users gain secure access to Quicken software from any location, ensuring convenience and flexibility. These providers prioritize data security with robust encryption protocols, safeguarding sensitive financial information. Their scalable options cater to diverse business needs, optimizing cost-effectiveness. Empowering businesses to streamline financial processes and enhance collaboration, Quicken hosting providers play a pivotal role in driving effective financial management and fostering business growth.
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
    Boost Productivity with Secure Quickben Cloud Hosting Solutions
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
             Quickben cloud hosting streamlines accounting processes with its cloud-based solutions. Users securely access accounting data from any location, enhancing convenience and flexibility. Seamless collaboration among team members boosts productivity. Robust encryption protocols ensure data security. Quickben cloud hosting offers scalable options tailored to diverse business needs, optimizing cost-effectiveness. Experience streamlined accounting with Quickben cloud hosting, empowering businesses to achieve financial efficiency effortlessly.
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
Efficiency Unleashed: Quicken Remote Server Simplifies Financial Management
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
           Quicken Remote Server enables convenient access to Quicken software for businesses, facilitating remote management of financial data. This solution ensures secure connectivity, allowing users to work from any location and enhance flexibility and collaboration. With robust encryption protocols, sensitive financial information is kept safe. Quicken Remote Server guarantees reliable performance and scalability to meet evolving business requirements. It streamlines financial processes, empowering businesses to make informed decisions and achieve their financial goals efficiently. Experience heightened efficiency and productivity with Quicken Remote Server for streamlined financial management.
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
Secure and Seamless: Manage Your Money Online with Quicken
   </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
           Quicken Online transforms personal finance management with its accessible platform. Users effortlessly track expenses, manage budgets, and monitor investments from any internet-enabled device. The platform ensures real-time updates and synchronization across multiple devices, providing up-to-date financial information. With a focus on security, Quicken Online employs encryption and authentication measures to safeguard sensitive financial data, offering users peace of mind.
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

export default QuickenHosting;
