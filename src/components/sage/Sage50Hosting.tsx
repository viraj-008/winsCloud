import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { GrIntegration } from "react-icons/gr";
import { TbArrowsMaximize } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { MdBackup } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import SageLinks from "../SageLinks";
import Expriance from "../Expriance";
import Awards from "../Awards";

const Sage50Hosting = () => {
  const faqs = [
    {
      question: "What is Sage 50 Hosting?",
      answer: "Sage 50 hosting means accessing the Sage 50 desktop software from a virtual server with the help of the internet, from any device like a phone, laptop, tablet, and desktop, and on any operating system.",
    },
    {
      question: "Why is it better to host Sage 50 on the cloud?",
      answer: "Hosting the Sage 50 desktop software on the cloud significantly improves business accessibility. Multiple teams can collaboratively work on the business data, keeping inventory up to date, managing cash flows, and tracking sales, ultimately maximizing customer satisfaction. Business owners can monitor their business from anywhere on the globe, without worrying about distance.",
    },
    {
      question: "How do I migrate my Sage 50 on cloud?",
      answer: "If you are planning to take your Sage 50 desktop application to the cloud, you can reach out to Winscloud team, your Sage 50 hosting services provider. We can help you seamlessly transition to the cloud in just 2 hours.",
    },
    {
      question: "How much does Sage 50 cloud hosting cost?",
      answer: "Winscloud’s Sage 50 hosting services plans are flexible and start at a minimum amount of $23 per month. The price you pay may differ based on the number of users you choose and the type of hosting you choose – shared or dedicated server. Check out our pricing here.",
    },
    {
      question: "Will my data be safe with cloud hosting?",
      answer: "At Winscloud Matrix, your data is automatically backed up two times a day to ensure safety of your critical information. Our SSAE-16 compliant data centers further ensure complete security to your data, even in the event of a natural disaster such as flood or earthquake. Your business data is always accessible, and your customers are always happy.",
    },
    {
      question: "Can multiple people from my team be accommodated on Sage 50 cloud hosting?",
      answer: "Yes, one of the primary benefits of Sage 50 Cloud hosting is that it allows multiple users to access the data from multiple locations to facilitate teamwork and files sharing on the cloud-based software.",
    },
    {
      question: "Can I access my Sage 50 cloud hosting even when I am travelling overseas?",
      answer: "Yes, you can access your Sage 50 hosting solution from anywhere in the world. All you need is a working internet connection, a device such as your phone, laptop, or tablet, and your login credentials provided by your Sage 50 cloud hosting provider..",
    },
    {
      question: "Does Winscloud support all versions of Sage 50 desktop applications?",
      answer: "At Winscloud, we support all versions of your favorite Sage 50 application, including Pro, Premium and Quantum.",
    },
    {
      question: "Are add-ons supported with Sage 50 cloud hosting?",
      answer: "Yes, we support all add-ons and most third-party applications at Winscloud. Our team is trained to support you with the hosting of all of your applications and troubleshooting in case of any issues.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="md:min-h-[90vh] rounded-b-3xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">
        
         <Helmet>
          <title>Best Sage 50 Cloud Hosting Services | Winscloud Matrix</title>
          <meta name="description" content="Get fast, secure Sage 50 cloud hosting with daily backups, remote access & 24/7 support. Call +1 714-882-1244 for expert Sage 50 hosting solutions now!" />
        </Helmet>

        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-5xl leading-tight md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >Sage 50 Cloud Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-xl xl:max-w-2xl my-3 md:my-0 md:mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Anytime, anywhere accounting for your Small and Mid-Sized Business with Sage 50 Hosting Service
            </p>

            <Link to="/Get-in-Touch">
              <button className="relative group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Consult a Hosting Expert
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
              className="w-full max-w-md h-[230px] md:h-[260px] -my-8  md:my-0  lg:mt-12 xl:mt-0  xl:h-auto rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>

      <main>
        <section>
          <h2 className='text-3xl text-center py-4 w-[90%] mx-auto font-bold font-inter text-textPrimary'>
How is Sage 50 Cloud Hosting by Winscloud Matrix Beneficial for Your Business?
          </h2>
          <p className="font-inter my-2 text-xl text-center font-semibold">The power of Cloud Hosting Blended with Sage 50
          </p>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4  md:px-16 md:py-6">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/sage50.webp"
              alt="sage 50 hosting"
            />

          </figure>

          {/* TEXT on the left (or top on mobile) */}
          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
              Sage 50 cloud hosting is an IaaS (Infrastructure-as-a-Service) solution that offers the robust, desktop version of the easy-to-use Sage 50 application on the cloud. Business owners who choose to host their Sage 50 on cloud save time, money and the hassle of driving to their office every time they need to work on their important business files. With hosted Sage 50, you no longer must stay tethered to your office desktop. Instead, you can access your data on the go, on any device, from wherever you are.
            </h2>
            <p className="font-montserrat text-gray-700 text-justify text-sm md:text-base">
              Sage 50 hosting offers the exact same features as the desktop application, along with enhanced storage and computing capabilities. Businesses that transition to the cloud-based Sage 50 have the leverage to allow business access to multiple people from their team so they can collaborate from the comfort of their home at any time of the day. Most Sage 50 hosting providers offer affordable plans where the businesses have the option to scale up as their business grows, without paying a hefty amount every now and then.
            </p>

          </article>
        </section>


        <div className="bg-gradient-to-br w-[90%] my-6 mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
              Is your business ready to move to the cloud with Sage 50 hosting service?
            </h1>
            <Link to='/trial'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                Start One Month Trial
              </button>
            </Link>
          </div>
        </div>

        <section className=" w-[90%] mx-auto py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
            Why Choose Sage 50 Cloud hosting?
          </h1>
          <p className="text-justify md:text-center text-lg t font-montserrat text-gray-800">The advanced accounting and payroll software helps businesses carry out several key operations such as managing cash flows, sales, invoices, and monitoring payments. The powerful features of the Sage 50 application facilitate handling of a plethora of accounting operations like monitoring revenue, day-to-day expenses, and anticipating future cash flows. Sage 50 hosting is a perfect solution for accountants & bookkeepers, and for small and medium firms operating in manufacturing, construction, retail and wholesale businesses, IT services, law firms, food and beverage, etc. Certain large size businesses also find Sage 50 useful.
          </p>
          <p className="text-justify md:text-center text-lg mt-4 font-montserrat text-gray-800">In today’s world where businesses need to be caught up with the technological advances, Sage 50 hosting plays a key role in their survival. Cloud computing saves these small businesses time, money and effort to stay updated with their business needs and significantly enhances productivity.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Anytime, Anywhere Access",
                desc: "Sage 50 hosting solution provides 24/7 access to critical financial data, empowering business owners to stay up to date with their inventory status, daily sales, and other updates from anywhere in the world.",
              },
              {
                title: "High level of productivity",
                desc: "With business data at your fingertips and multiple device compatibility, Sage 50 hosting allows remote teams to work on the same data set simultaneously, promoting uninterrupted productivity.",
              },
              {
                title: "Multi-user Collaboration",
                desc: "With Sage 50 hosting, multiple users can access the same data saved on the cloud hosted application, share information, and ensure timely completion of critical projects by working in real time.",
              },
              {
                title: "Cost Effective Solution",
                desc: "With Sage 50, small businesses can save big on heavy IT infrastructure, floor space, and in-house staff needed for its maintenance. Sage 50 hosting providers charge a minimal amount for all these services.",
              },


            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>


        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100  py-6  ">
          <h2 className="font-bold font-inter text-4xl mt-3 mb-12 text-center px-4 text-textPrimary">
            Why is Winscloud Matrix the best hosting provider for your business?
          </h2>

          <div className="grid gap-14 w-[90%] mx-auto md:grid-cols-3  md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <GrIntegration className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Add-ons Integration
              </h1>
              <p className="px-4 text-gray-500">
                Our team can integrate more than 200 add-ons and third-party apps along with your Sage 50 application to further enhance your business operations in the cloud.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                <TbArrowsMaximize  className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Maximum Uptime Guarantee
              </h1>
              <p className="px-4 text-gray-500">
                Our tech support team is well-trained in handling all sorts of challenges that businesses face before, during and after transitioning to the cloud and always ensures 99.99% up time.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                <GiReceiveMoney className="text-2xl"/>


              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Customizable Pricing
              </h1>
              <p className="px-4 text-gray-500">
                Our hosting plans accommodate all your changing needs and gives you the freedom to pay as you go. We ensure that you get the most out of what you pay and offer a One-month FREE TRIAL. Start Trial
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <MdBackup  className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">All Backed Up
              </h1>
              <p className="px-4 text-gray-500">
                Your important business data is automatically backed up twice daily and is accessible for 30 days. You can still restore your data after 30 days, providing protection against accidental deletions and disasters.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                <MdSecurity  className="text-2xl" />


              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Data Security
              </h1>
              <p className="px-4 text-gray-500">
                We have multiple security measures in place, including network firewalls, authorized access control, antivirus and antimalware protection, and robust SSAE-16-certified data centers.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <BiSupport  className="text-2xl"/>


              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">24/7/365 Support
              </h1>
              <p className="px-4 text-gray-500">
                We have an in-house team of experts who are available seven days a week, throughout the year, to provide you with technical assistance at any time of the day or night.
              </p>
            </div>
          </div>
        </div>

        <SageLinks />
        <Expriance />
        <Awards />
        <h1 className="text-center font-inter font-bold text-3xl text-textPrimary px-4 mt-3 md:pt-4"> Sage 50 Cloud Hosting Frequently Asked Questions</h1>
        <section className="max-w-3xl mx-auto mt-10 border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                className="w-full text-left flex justify-between items-center p-5 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-josefin text-gray-800 text-lg font-medium">
                  {faq.question}
                </span>
                <div
                  className={`flex items-center justify-center h-8 w-8 rounded-full ${openIndex === index ? "bg-red-100" : "bg-gray-100"
                    } transition-all duration-300`}
                >
                  {openIndex === index ? (
                    <FaMinus className="text-red-600 h-3 w-4" />
                  ) : (
                    <FaPlus className="text-gray-600 h-3 w-4" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="p-5 bg-gray-50">
                  <p className="font-montserrat text-gray-800 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

      </main>

        <Partner />
    </>
  );
};

export default Sage50Hosting;
