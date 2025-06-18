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

const DocItHosting = () => {
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
            >Doc IT Hosting
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
Doc-it Hosting Provider Streamlines Document Management for Businesses
          </h2>
        </section>

       

       <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/doc-it.webp"
              alt="Fishbowl Hosting Service"
            />

          </figure>

          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
Doc-it Hosting Provider, essential for accounting firms and small to mid-sized organizations, offers a cost-effective, secure solution for data management. Doc-it suites employ a 4-step process in each document lifecycle: gather, process, store, and deliver, ensuring organized and confidential file management.
            </h2>

            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
Winscloud, a trusted cloud hosting company, provides advanced solutions to small enterprises. Doc-it hosting enables CPAs and organizations to achieve accurate tax return filing. Hosted by us, you can harness its full potential, accessing it from anywhere, anytime, via any internet-connected device.
            </p>
            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
Fishbowl, a renowned inventory management solution, is enhanced by secure hosting, flexible access, and seamless collaboration, making it a valuable asset for businesses. As a trusted Doc-it Hosting Provider, we ensure industry-standard security measures like SSL, firewall, and synchronous replication. Our SAS 70 and SSAE 18 certifications attest to our commitment to data security and reliability, providing businesses with peace of mind and the assurance of top-tier protection for their valuable data.
            </p>
          </article>
        </section>

        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
                 <h2 className="font-bold text-3xl md:text-5xl mt-3 font-serif  my-5  text-center text-textPrimary">
Benefits of Winscloud Doc-it Hosting
                 </h2>
                 <p className="text-center font-montserrat mb-10 text-gray-800 max-w-6xl mx-auto">Doc-it hosting: Simplify finances, access anywhere, anytime, for peace of mind
                 </p>
       
                 <div className="grid gap-14 md:grid-cols-3 md:gap-8">
                   <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                     <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
       
                       <LuDatabaseBackup />
       
                     </div>
                     <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Inventory Tracking
      
                     </h1>
                     <p className="px-4 text-gray-500">
                      Fishbowl provides real-time tracking of inventory levels, helping businesses monitor stock levels, manage reorder points, and prevent stockouts or overstock situations.
                     </p>
                   </div>
                   <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                     <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                       <FaUsersGear />
       
                     </div>
                     <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Scalability
                     </h1>
                     <p className="px-4 text-gray-500">
       As your business expands, Doc-it software can adapt to accommodate your growth. Easily incorporate additional features and users to fulfill your evolving requirements as your operations scale up.
                     </p>
                   </div>
       
                   <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                     <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                       <RiInformation2Fill />
       
                     </div>
                     <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Inventory Management
                     </h1>
                     <p className="px-4 text-gray-500">
       The software provides Canadian businesses with a comprehensive payroll solution, encompassing automated tax calculations, T4 preparation, and direct deposit services.
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
Efficient Document Management: Explore Doc-it Hosting Solutions
 </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300 ">
Experience streamlined document management with Doc-it hosting. Easily organize, store, and access your documents from any location, fostering collaboration and productivity. Our secure hosting guarantees data protection while providing flexibility for your business operations. Collaborate seamlessly with team members and scale your document management as your business expands. With Doc-it hosting, empower your business with efficient solutions that drive productivity and growth. Explore the advantages of hosted document management with Doc-it today.

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
Boost Your Document Management: Embrace Hosted Doc-it Solutions
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
Enhance your document management prowess with Hosted Doc-it solutions. Seamlessly organize, store, and access your documents from anywhere, fostering collaboration and productivity. Our secure hosting guarantees data protection while offering flexibility for your business operations. Collaborate effortlessly with team members and scale your document management as your business grows. With Hosted Doc-it, empower your business with efficient solutions that drive productivity and growth. Discover the advantages of hosted document management with Doc-it today.
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
Reliable Infrastructure, Trusted Support: Hosting Providers at Your Service
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
Hosting providers play a crucial role in business operations, delivering dependable hosting solutions to keep websites and applications accessible online. They handle server infrastructure, offering technical support, security measures, and maintenance services. Hosting providers offer diverse hosting plans, including shared, VPS, dedicated, and cloud hosting, tailored to meet various needs. By partnering with hosting providers, businesses can ensure optimal performance, uptime, and security for their online presence, freeing them to focus on core operations while experts manage the technical aspects.
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
Efficient Document Management: Unleash the Power of Cloud Doc-it
   </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-300">
Discover the convenience of Cloud Doc-it for efficient document management. Easily organize, store, and access your documents from any location, fostering collaboration and productivity. Our secure cloud platform ensures data protection while providing flexibility for your business operations. Collaborate seamlessly with team members and scale your document management as your business expands. With Cloud Doc-it, empower your business with efficient solutions that drive productivity and growth. Experience the benefits of cloud-based document management with Doc-it today.
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

export default DocItHosting;
