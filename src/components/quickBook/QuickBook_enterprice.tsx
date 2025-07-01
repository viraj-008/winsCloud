import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { GrDocumentTest } from "react-icons/gr";
import Awards from "../Awards";
import QuickLinks from "../QuickLinks";
import Expriance from "../Expriance";

const QuickBook_enterprice = () => {

  const faqs = [
    {
      question: "What is QuickBooks Enterprise Hosting?",

      answer: "QuickBooks Desktop Enterprise is the perfect solution for businesses that are scaling up and need more flexibility. QuickBooks Enterprise Hosting allows businesses to access all the robust QuickBooks desktop features, along with the flexibility to collaborate with multiple users from a remote server.",
      answer2: "Hosting a QuickBooks file through VPN or cloud on your own is possible, but you might face a range of issues and can be expensive. Top quickbooks hosting providers can help you seamlessly transition to the cloud, eliminating additional expenses. A top quickbooks hosting provider also offers 24*7 support."
    },
    {
      question: "How much does QuickBooks Enterprise Hosting cost?",
      answer: "QuickBooks Enterprise hosting plans depend on factors such as the number of users, your choice of server i.e. sharing or dedicated, etc. Our plans range from $25 to $489 per month. Take our FREE Trial now to get firsthand experience of our services before deciding.",
    },
    {
      question: "Can my top quickbooks hosting provider host multiple versions of QuickBooks Enterprise desktop?",
      answer: "Yes, at Winscloud, we host all versions and subscriptions of QuickBooks Enterprise desktop on the cloud. Not just that, we will also host all your add-ons and integrations on the cloud for you.",
    },
    {
      question: "Is data backed up on QuickBooks Enterprise desktop hosted on the cloud?",
      answer: "The data is backed up twice a day and kept at three different locations to make recovery faster in case of any disaster. We keep the last 30 days of backup which can be provided as and when required.",
    },
    {
      question: "Do I need a QuickBooks Enterprise license to host QuickBooks on the cloud?",
      answer: "Yes, you need a QuickBooks Enterprise license to move to the cloud.",
    },
    {
      question: "Is QuickBooks Enterprise discontinued?",
      answer: "While QuickBooks Pro and Premier were discontinued on July 31, 2024, QuickBooks Enterprise will not be discontinued. You can enjoy working on your favorite accounting software and renew/purchase a subscription as per the need.",
    },
    {
      question: "How can I access my QuickBooks Enterprise on the cloud?",
      answer: "To access your QuickBooks Enterprise desktop on the cloud, you need a working internet connection, a device such as your laptop/tablet/phone or desktop, with your operating system like Windows, Linux, or Mac.",
    },
    {
      question: "How is QuickBooks Enterprise Desktop different from QuickBooks hosting and online?",
      answer: "QuickBooks Pro is accounting software that is most suitable for SMBs that are looking to streamline their accounting operations. QuickBooks Premier on the other hand is best for small and mid-sized businesses that have certain industry-specific requirements. For larger businesses that need to manage inventory, track sales, and more, QuickBooks Enterprise is a more viable option.",
      answer2: "QuickBooks Pro is accounting software that is most suitable for SMBs that are looking to streamline their accounting operations. QuickBooks Premier on the other hand is best for small and mid-sized businesses that have certain industry-specific requirements. For larger businesses that need to manage inventory, track sales, and more, QuickBooks Enterprise is a more viable option.",
      answer3: "QuickBooks Pro is accounting software that is most suitable for SMBs that are looking to streamline their accounting operations. QuickBooks Premier on the other hand is best for small and mid-sized businesses that have certain industry-specific requirements. For larger businesses that need to manage inventory, track sales, and more, QuickBooks Enterprise is a more viable option."
    },

  ];

  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="md:min-h-[90vh] rounded-b-3xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">
         <Helmet>
          <title>QuickBooks Enterprise Hosting for CPAs | Winscloud Cloud Experts</title>
          <meta name="description" content="Cloud-hosted QuickBooks Enterprise for CPAs—multi-user access, secure file sharing, and real-time collaboration. Call +1 714-882-1244 for your free demo!" />
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
            >QuickBooks Enterprise Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Your One-Stop-Solution to all your advanced accounting needs, accessible from anywhere, at any time
            </p>

            <Link to="/Get-in-Touch">
              <button className="relative group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Call our Expert
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
            className="flex md:mt-12 md:justify-end"
          >
            <img
              src="/images/Home/homePNG.png"
              alt="ServerImage"
              className="w-full float-right  max-w-md h-[230px] md:h-[260px] -my-4 lg:mt-12 xl:mt-0 xl:h-auto md:my-0  rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>

      <main>
        <h2 className='text-3xl w-[90%] mx-auto text-center font-inter py-4 font-bold  text-textPrimary'>
          QuickBooks Enterprise Cloud Hosting: A World Class Solution to Remotely Manage Your Business Operations
        </h2>

        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4  md:px-16 md:py-6">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/qb-hosting.webp"
              alt="QuickBooks enterprise"
            />

          </figure>

          {/* TEXT on the left (or top on mobile) */}
          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary  text-justify  text-xl md:text-xl ">All the features of Intuit’s most powerful and advanced accounting software blended with the flexibility of the cloud. Grow your business by focusing on more important tasks with QuickBooks Enterprise cloud hosting by assigning relevant tasks to your team any time, anywhere.
            </h2>

            <p className="font-montserrat text-justify text-gray-700 text-sm md:text-base">
              QuickBooks Desktop offers an end-to-end accounting solution to modern businesses. However, businesses today need added flexibility and ease while managing routine functions, such as managing cash flow, generating invoices, and keeping track of inventory. QuickBooks Enterprise Cloud Hosting lets you keep track of all your key tasks on the go. No more sitting tethered to your desktop to access your critical data. With QuickBooks Enterprise hosting, you can stay up to date anytime, anywhere.
            </p>
            <p className="font-montserrat text-justify text-gray-700 text-sm md:text-base">
              Winscloud’s QuickBooks Enterprise Hosting solution lets you use all of QuickBooks Enterprise’s robust features and simplifies business operations with the flexibility of the cloud. QuickBooks Enterprise hosting is the perfect solution for large businesses that need to manage business from multiple locations, large size of inventory, and heavy daily transactions, such as manufacturing, accounting, and retail businesses.
            </p>
          </article>
        </section>


        <div className="bg-gradient-to-br w-[90%] my-6  mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">

          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-start md:text-4xl font-bold mb-2">
              Ready to take complete control of your Business Finances? Get QuickBooks Enterprise Hosting Today
            </h1>
            <Link to='/trial'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
                Take a QuickBooks Hosting FREE Trial
              </button>
            </Link>
          </div>

        </div>



        <section className=" w-[90%] mx-auto py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
            Winscloud QuickBooks Premier Cloud Hosting: Why should you choose us as your hosting provider?
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Unlock the power of cloud hosting services
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "More Productivity on the Cloud",
                desc: "QuickBooks Enterprise Cloud hosting provides businesses with a single cloud platform, facilitating multi-user collaboration in real-time, from anywhere across the globe. This makes accounting seamless for businesses and tax season stress free.",
              },
              {
                title: "Scalability",
                desc: "Businesses are dynamic, needing to scale up or down frequently. QuickBooks Enterprise hosting offers the freedom to scale as you go, and you don’t have to worry about anything. QuickBooks Cloud Hosting adapts to business needs, promising operative freedom.",
              },
              {
                title: "Add-Ons Integration",
                desc: "Your top QuickBooks hosting provider will not just host your QuickBooks Enterprise desktop software on the cloud. More than 200 add-ons and third-party apps, including all versions of QuickBooks, MS Excel, etc. are available and can be hosted on the cloud.",
              },
              {
                title: "No Location Barrier",
                desc: "While QuickBooks Enterprise Desktop needs you to be tethered to your computer, hosting the application on the cloud offers more convenience. Your data is in close proximity, irrespective of your location.",
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


        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100    p-6  ">
          <h2 className="font-bold font-inter w-[90%] mx-auto text-4xl mt-3 mb-12 text-center text-textPrimary">
            Winscloud Matrix Advantage: Why choose us as your QuickBooks cloud hosting provider?
          </h2>

          <div className="grid w-[90%] mx-auto gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <LuDatabaseBackup className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Enhanced Mobility
                r</h1>
              <p className="px-4 text-gray-500">
                Our QuickBooks Enterprise hosting service helps you break location barriers and gives you the freedom to access your favorite application, your critical financial data, and collaborate with your team on the go.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                <FaUsersGear className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Cost Effective Cloud Hosting
              </h1>
              <p className="px-4 text-gray-500">
                Winscloud’s QuickBooks Enterprise cloud hosting solutions help save big on expensive in-house IT infrastructure, maintenance, and support staff. You can also check our plans here.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                <RiInformation2Fill className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank-level Security
              </h1>
              <p className="px-4 text-gray-500">
                Your data security is our top-most priority. We have key measures in place, like two-factor authentication, 256-Bit encryption, network firewalls and anti-virus, 24*7 video surveillance, and flood detection systems for your QuickBooks Enterprise cloud hosting.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <GiChoice className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Maximum Uptime Guarantee
              </h1>
              <p className="px-4 text-gray-500">
                We conduct regular maintenance and automated system backups twice a day and our cutting-edge, high-performance servers ensure 99.99% up time to ensure your hosted QuickBooks Enterprise data is always constantly accessible.
              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                <BiDetail className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Experience Tech Team
              </h1>
              <p className="px-4 text-gray-500">
                We have an in-house team of trained and highly experienced technical support professionals who are available round-the-clock to provide you with end-to-end assistance, whether you need technical guidance or help with troubleshooting.

              </p>
            </div>
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <GrDocumentTest className="text-2xl" />

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Scalable Pricing Structure

              </h1>
              <p className="px-4 text-gray-500">
                We believe in offering full control to our customers with our scalable hosting plans. You can pay as you go without any contract boundation or choose from our tailored hosting plans based on YOUR team/business size.

              </p>
            </div>
          </div>
        </div>






        <div className="bg-gradient-to-br w-[90%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">

          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-start md:text-4xl font-bold mb-2">
              Ready to start your cloud hosting journey with Winscloud Matrix?
            </h1>
            <Link to='/get-in-touch'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
                Get in Touch with Us
              </button>
            </Link>
          </div>

        </div>

        <QuickLinks />
        <Expriance />
        <Awards />
        <h1 className="text-center font-inter font-bold text-3xl text-textPrimary pt-4">QuickBooks Enterprise FAQs</h1>

        <section className="max-w-3xl mx-auto mt-10 border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                className="w-full text-left flex justify-between items-center p-5 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-josefin w-[90%] text-gray-800 text-lg font-medium">
                  {faq.question}
                </span>
                <div className="flex items-center justify-center">
                  {openIndex === index ? (
                    <div className="bg-red-100 p-2 rounded-full">
                      <FaMinus className="text-red-600 text-xs" />
                    </div>
                  ) : (
                    <div className="bg-gray-100 p-2 rounded-full">
                      <FaPlus className="text-gray-600 text-xs" />
                    </div>
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
  )
}

export default QuickBook_enterprice
