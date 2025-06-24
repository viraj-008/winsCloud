import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { LuDatabaseBackup } from "react-icons/lu";
import { GiChoice } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
import QuickLinks from "../QuickLinks";
import Awards from "../Awards";
const Quick_hosting_canada = () => {
  const faqs = [

    {
      question: "What is QuickBooks Cloud Hosting?",
      answer: "QuickBooks desktop cloud hosting simply means taking the offline version of the software to the cloud and accessing it with the help of the internet. This way, business owners, accountants, and bookkeepers can access their files and documents saved on the desktop version of the software from anywhere, at any time, and from any time. It also facilitates multiple user access, from any device that is connected to the internet. ",
    },
    {
      question: "Can multiple users access cloud hosted QuickBooks Canada at the same time?",
      answer: "Yes, cloud-based QuickBooks Canada applications have the capacity to support multiple users accessing the same set of information. The sales and inventory teams can work on the same data set and keep the information up to date in real time, which helps to ensure maximum customer satisfaction.",
    },
    {
      question: "How much does it cost to host QuickBooks Canada on the cloud?",
      answer: "The cost of hosting QuickBooks ranges depending on several factors like the size of business, number of users, shares of dedicated server hosting, etc. Your top quickbooks hosting provider can guide you in taking the right decision. A Free Trial of your hosting provider’s services can help you experience the cloud environment and see if it meets your requirements.",
    },
    {
      question: "Does QuickBooks Hosting support multiple devices?",
      answer: "Yes, QuickBooks Canada hosting can be accessed across multiple devices, including cell phones, tablets, laptops, and desktop computers. All you need is a working internet connection.",
    },
    {
      question: "What if I am travelling out of Canada? Can I still access my QuickBooks application?",
      answer: "If you have a working internet connection on your device, you can access your QuickBooks data from any location. Whether you are travelling across Canada or overseas, your important files are always within your reach.",
    },
    {
      question: "How do top quickbooks hosting providers ensure data security?",
      answer: "At Winscloud Matrix, our customers’ data is automatically backed up twice daily so that your QuickBooks Canada hosting data is safe and always accessible.",
    },
    {
      question: "How is QuickBooks Canada different from QuickBooks USA?",
      answer: "There are certain key differences between QuickBooks Canada and the USA. QuickBooks Canada is customized to Canadian accounting and tax laws and some of the key differences include currency settings and tax and payroll compliances, and vice versa for QuickBooks USA.",
    },


  ];

  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="min-h-[90vh] rounded-b-xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">
        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-5xl leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >QuickBooks Hosting Canada
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Business Data at your fingertips with QuickBooks Canada Hosting     </p>

            <Link to="/trial">
              <button className="relative group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Take a Free Trial Today!
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
        <h2 className='text-3xl text-center max-w-8xl mx-auto px-3  py-4 font-bold font-montserrat text-textPrimary'>
QuickBooks Canada Hosting: Remote Access to All Versions QuickBooks Desktop for Canadian Businesses
        </h2>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
        {/* IMAGE on the right (or bottom on mobile) */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
            src="./images/logo/qb-canada.webp"
            alt="QuickBooks Hosting Service"
          />

        </figure>

        {/* TEXT on the left (or top on mobile) */}
        <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
          <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
            QuickBooks Canada Hosting is the most sought-after accounting solution by business owners, CPAs, and bookkeepers in Canada. QuickBooks Canada Hosting allows hosting of multiple versions of QuickBooks, offering added flexibility, security, and mobility to business owners who wish to collaborate with their team in real-time and stay up to date with their business operations on-the-go.

          </h2>
          <p className=" font-montserrat text-gray-600 text-justify text-sm md:text-base">
            QuickBooks hosting Canada is suitable for small, mid-sized and large businesses. Winscloud provides hosting to multiple QuickBooks versions intended to meet different business needs. We have served tailored QuickBooks Canada hosting solutions and add-ons integration to multiple Canadian businesses like retail, wholesale, not for profit organizations, CPA firms, among others.
          </p>

        </article>
      </section>


      <section className="px-3 pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-100 ">
        <h2 className="font-bold text-3xl mt-3 text-center text-textPrimary">
          Benefits of Moving from Desktop to QuickBooks Canada Hosting
        </h2>
        <p className="font-inter text-gray-800 text-center mt-4 max-w-4xl">
          Our US-based, superfast data centers and SSD-based HPC servers ensure 99.99% uptime for the most seamless collaboration with teams across multiple locations and devices. Experience unparalleled performance and unmatched flexibility with easy accessibility of your fully backed-up data.

        </p>
        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100  pt-12 p-4 ">
          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <LuDatabaseBackup />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Multi-User Collaboration
              </h1>
              <p className="px-4 text-gray-500">
                QuickBooks Canada hosting supports multiple user access to the same set of data, allowing the entire team to work on the document in real-time, from any location in Canada. Whether you are in British Columbia or Vancouver, as a business owner, you can enjoy greater access to your financial data, all the time.
              </p>
            </div>



            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <GiChoice />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Access On the Go
              </h1>
              <p className="px-4 text-gray-500">
                Need expert help with technical issues related to your QuickBooks or are you simply on the lookout for a certified expert to provide you with the technical know-how of Hosted QuickBooks on the cloud? We promise 24/7 tech support via email, call and text with a 15-minute response time.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <GrDocumentTest />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Data Security and Recovery
              </h1>
              <p className="px-4 text-gray-500">
                We understand that modern businesses seek modern solutions when it comes to data security. Our SSAE 16 certified data centers, network firewalls, automated data backups, anti-virus among other security solutions ensure that your hosted QuickBooks data is safe and secure.
              </p>
            </div>
          </div>
        </div>
      </section>




      <section className="px-5 md:px-24 py-16 ">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
          Winscloud Matrix: Your Trusted QuickBooks Canada Hosting Parter
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "Disaster-proof hosting",
              desc: "With Winscloud Matrix, you do not have to worry about the safety of your data. Our comprehensive security protocols are always in place to ensure your data is safe and accessible.",
            },
            {
              title: "Easy & Quick Migration",
              desc: "Transitioning to the cloud and securely migrating all your data with Winscloud Matrix while ensuring maximum uptime usually takes less than 2 hours",
            },
            {
              title: "24/7/365 Support",
              desc: "Be it troubleshooting or technical guidance, our dedicated and trained technical support staff are available round-the-clock to provide you with the necessary help at any time of the day.",
            },
            {
              title: "Add-Ons Integration ",
              desc: "We are equipped with hosting more than 200 add-ons to go with your QuickBooks desktop application. Our team can also support you with troubleshooting any issues related to these add-ons.",
            },
            {
              title: "Flexible Pricing Plans",
              desc: "Our QuickBooks Hosting Canada pricing plans are flexible and customizable. We provide you with complete freedom to choose a plan that best suits your current business needs",
            },
            {
              title: "Maximum Up Time",
              desc: " We care for your business and understand the importance of being always available to your customers. Hence, our certified SSAE-16 Type-II (SOC-2) data centers ensure 99.99% accessibility",
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


      <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex-1">
          <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
            Are you ready to begin your One-Month Free Trial of QuickBooks Canada Hosting?

          </h1>
          <Link to='/get-in-touch'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
              Get in Touch With an Expert
            </button>
          </Link>
        </div>
      </div>
      <QuickLinks />

      <Awards />





      <h1 className="text-center font-inter font-bold text-3xl text-textPrimary  p-2">QuickBooks Canada FAQs</h1>

      <div className="max-w-3xl mx-auto mt-10 border border-gray-200 rounded-xl shadow-lg overflow-hidden">
  {faqs.map((faq, index) => (
    <div key={index} className="border-b border-gray-100 last:border-b-0">
      <button
        className="w-full text-left flex justify-between items-center p-5 hover:bg-gray-50 transition-colors duration-200"
        onClick={() => toggleFAQ(index)}
      >
        <span className="font-josefin text-gray-800 text-lg font-medium">
          {faq.question}
        </span>
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${openIndex === index ? 'bg-red-100' : 'bg-gray-100'} transition-all duration-300`}>
          {openIndex === index ? (
            <FaMinus className="text-red-600 text-xs" />
          ) : (
            <FaPlus className="text-gray-600 text-xs" />
          )}
        </div>
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-5 bg-gray-50">
          <p className="font-montserrat text-gray-800 text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
      <Partner />

    </>
  )
}

export default Quick_hosting_canada
