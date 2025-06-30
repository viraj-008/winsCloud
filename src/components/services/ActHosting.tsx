import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { GiServerRack } from "react-icons/gi";
import { BsDatabaseCheck } from "react-icons/bs";
import { MdFactCheck } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { motion } from "framer-motion";
import Awards from "../Awards";
import Expriance from "../Expriance";
import ServiceLink from "../ServiceLink";

const ActHosting = () => {
  return (
    <>
      <section className="md:min-h-[90vh] rounded-b-3xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">

          <Helmet>
          <title>ACT Hosting Services | Cloud ACT! CRM Hosting by Winscloud</title>
          <meta name="description" content="Host ACT! CRM in the cloud with Winscloud’s reliable ACT Hosting Services. Enjoy seamless access, top performance, and full add-on compatibility at low costs." />
        </Helmet>

        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >Act Hosting
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

      <section>
        <h2 className='text-3xl text-center mt-4 mb-4 md:mb-0  mx-auto font-bold font-montserrat text-textPrimary'>
          ACT Hosting Services offers seamless and powerful CRM management

        </h2>

      </section>

      <main>


        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4  md:px-16 md:py-6">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/act-soft.webp"
              alt="act hosting"
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



        <div className="h-full my-8 w-full py-8 bg-gradient-to-br from-blue-50 to-gray-100   pt-12  ">
          <h2 className="font-bold  text-4xl  font-inter px-4  my-4  text-center text-textPrimary">
Simplified ACT Hosting: Our Cloud, Your Financial Data
          </h2>
          <p className="text-center text-xl font-montserrat mb-10 px-4 text-gray-800  mx-auto">ACT! Hosting: Simplify finances, access anywhere, anytime, for peace of mind
          </p>

          <div className="grid w-[90%] mx-auto gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <GiPayMoney className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Reduce Expenses
              </h1>
              <p className="px-4 text-gray-500">
                With our dedicated server, you can save your cost to establish an IT infrastructure.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                <GiServerRack className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">All Add-ons
              </h1>
              <p className="px-4 text-gray-500">
                We are reducing your work on finding the respective plug-ins by providing all ACT add-ons at once.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                <BsDatabaseCheck className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Data security
              </h1>
              <p className="px-4 text-gray-500">
               Cross-device compatibility The systems are supportive to various devices such as desktops, laptops, smartphones and tablets.Protect from any threds
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <MdFactCheck className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Every Time Support
              </h1>
              <p className="px-4 text-gray-500">
                The team at Winscloud is always ready to help you even during holidays by live chat.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                <BsPersonLinesFill className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Online support 24/7

              </h1>
              <p className="px-4 text-gray-500">
                Access our round-the-clock support for QuickBooks Premier Hosting, ensuring assistance whenever you need it, day or night.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <MdOutlineSecurity className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">High security
              </h1>
              <p className="px-4 text-gray-500">
               Multiple security measures are in place to protect your data and applications on the cloud. These include multiple layers of authentication, strong encryption, and multi-factor authentication (MFA).
              </p>
            </div>
          </div>
        </div>


        <Expriance />
        <ServiceLink />

        <div className="py-16  w-[90%] mx-auto bg-white">
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
                      Elevate CRM Efficiency with ACT Hosting Solutions
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300 ">
                      ACT Hosting offers efficient solutions for customer relationship management. Utilizing cloud-based services, businesses can seamlessly access and utilize ACT software from any location. The platform emphasizes data security through robust encryption and backup protocols, ensuring sensitive customer information remains protected. Its scalable infrastructure caters to diverse business needs, optimizing cost-effectiveness. With ACT Hosting, businesses can enhance customer relationship management, boost productivity, and remain competitive in the modern market landscape.
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
                      Optimize CRM Efficiency with ACT Hosting Providers
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                      ACT Hosting Providers offer customized solutions for customer relationship management. By leveraging cloud-based services, businesses can access ACT software seamlessly from any location. These providers prioritize data security with robust encryption and backup protocols, ensuring the protection of sensitive customer information. Their scalable infrastructure meets diverse business needs, optimizing cost-effectiveness. Collaborating with ACT Hosting Providers empowers businesses to enhance customer relationship management, increase productivity, and maintain competitiveness in today’s dynamic market landscape.
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
Unlock Flexibility with ACT Remote Access Solutions
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                     ACT Remote Access facilitates convenient management of customer relationships from anywhere, ensuring seamless operations on-the-go. With robust encryption and backup protocols, sensitive data remains securely protected. The platform’s versatile features empower businesses to effortlessly adapt to changing needs, streamline workflow processes, and significantly enhance overall productivity. Ultimately, ACT Remote Access plays a pivotal role in improving customer service and organizational efficiency by providing users with the flexibility and accessibility needed to achieve sustained success in today’s competitive landscape.
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
                     Optimize CRM Operations with ACT Cloud Hosting Solutions
           </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                     ACT Cloud Hosting offers streamlined CRM solutions. By leveraging cloud-based services, users gain convenient access to ACT software from anywhere, ensuring seamless operations. The platform emphasizes data security with robust encryption and backup protocols to protect sensitive customer information. Its scalable infrastructure meets diverse business needs, optimizing cost-effectiveness. With ACT Cloud Hosting, businesses can enhance CRM efficiency, increase productivity, and maintain competitiveness in today’s dynamic market landscape.
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


        <Awards />

      </main>

        <Partner />
    </>
  );
};

export default ActHosting;
