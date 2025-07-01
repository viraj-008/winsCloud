import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { MdOutlineSecurity } from "react-icons/md";
import { RiShakeHandsLine } from "react-icons/ri";
import { LuClock } from "react-icons/lu";

import { HiLockClosed, HiBolt, HiCheckBadge } from "react-icons/hi2";
import Expriance from "../Expriance";
import QuickLinks from "../QuickLinks";
import Awards from "../Awards";

const QickBooks_Hosting = () => {
  const faqs = [
    {
      question: "How to Host QuickBooks Desktop on Cloud?",
      Head: "Host your most preferred QuickBooks Desktop application to the cloud in simple and easy steps –",
      Head2: "Choose Your Most Suitable Plan",
      answer: "If you are not sure about our pricing structure and wish to know more about our offers, contact us here. Our experts will guide you in identifying the plan that suits your business.",
      Head3: "Share Details of Your QuickBooks",
      answer2: "Our expert will need details of your QuickBooks license to facilitate your transition to the cloud. Your transition can take a few hours to complete, depending upon your data.",
      Head4: "Making your cloud transition",
      answer3: "Our technical experts will ensure that your transition happens quickly. You can alter your decisions based on your number of users, your data size.",
      Head5: "Making your cloud transition",
      answer4: "Our technical experts will ensure that your transition happens quickly. You can alter your decisions based on your number of users, your data size."
    },
    {
      question: "What is QuickBooks Hosting?",
      answer: "QuickBooks Cloud Hosting is a service that allows you to remotely access your QuickBooks Desktop software from anywhere in the world. QuickBooks hosting services allow you to access your data from multiple devices that are connected to the internet."
    },
    {
      question: "How many users can collaborate simultaneously using QuickBooks Cloud Hosting?",
      answer: "Yes, most QuickBooks Cloud Hosting providers support a wide range of add-ons and extensions to enhance functionality."
    },
    {
      question: "Does QuickBooks Cloud Hosting support add-ons and extensions?",
      answer: "Yes, you can host multiple versions of QuickBooks on the cloud, depending on the provider’s offerings."
    },
    {
      question: "I want to host more than one version of QuickBooks on the cloud. Is it possible?",
      answer: "Yes, you can host multiple versions of QuickBooks on the cloud, depending on the provider’s offerings."
    },
    {
      question: "I operate on a Mac. Will QuickBooks Cloud Hosting support this operating system?",
      answer: "Yes, QuickBooks Cloud Hosting allows Mac users to access QuickBooks remotely on a virtual desktop, making it compatible with macOS."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

      <section className="md:min-h-[90vh]  rounded-b-3xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12  lg:py-0">
        <Helmet>
          <title>QuickBooks Hosting Services | Fast & Secure Cloud Hosting</title>
          <meta name="description" content="Get reliable QuickBooks cloud hosting with 99.9% uptime, full data security & expert support. Call +1 714-882-1244 to move QuickBooks to the cloud today!" />
        </Helmet>


        <div className="max-w-6xl mx-auto    pt-6 md:pt-0 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left  lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-5xl leading-tight md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Trusted QuickBooks Hosting Provider
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl my-3 md:my-0 md:mb-10  bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Make your accounting operations more secure and collaborate with your team anytime, from anywhere with Winscloud’s QuickBooks Hosting Services.
            </p>

            <Link to="/trial">
              <button className="relative  group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Start FREE Trial - Claim Top Hosting Services Today!
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
            className="flex py-8 md:mt-13 md:justify-end"
          >
            <img
              src="/images/Home/homePNG.png"
              alt="ServerImage"
              className="w-full  max-w-md h-[230px] md:h-[260px] -my-16 md:my-0  xl:h-auto    rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>


      <main>
        <section className="md:px-12 px-2 w-[90%] text-3xl  font-inter  mx-auto">
          <h1 className="md:text-3xl font-inter text-2xl text-center pt-4 font-bold text-textPrimary">
            QuickBooks Hosting: Desktop-like experience on any device, from any part of the globe
          </h1>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-6">
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/qb-hosting.webp"
              alt="QuickBooks Hosting"
            />
          </figure>
          <article className="w-full md:w-1/2  text-center md:text-start space-y-4">
            <h2 className="font-semibold text-textPrimary text-xl text-justify md:text-xl">
              Want to experience the synergy between your most loved QuickBooks Desktop application and the power of the cloud? Tap into the efficacy and efficiency of cloud infrastructure with Winscloud Matrix – your authorized QuickBooks hosting provider.
            </h2>
            <p className="font-montserrat text-gray-700 text-justify  text-sm md:text-base">
              Businesses today need technological solutions that are flexible, secure and scalable to accommodate their altering, day-to-day business requirements. At Winscloud, our QuickBooks Hosting solution lets you safely access your company data, from the comforts of your home or your office, and promotes secure collaboration with your teams across multiple locations.

            </p>
            <p className="font-montserrat text-gray-700 text-justify  text-sm md:text-base">
              QuickBooks Desktop Cloud Hosting is an advanced solution that enhances the functionality of the desktop application by moving it to the cloud. Users can access all the features of their favorite QuickBooks application, along with their key data with only a working internet connection, from any device of their choice – laptop, desktop, cell phone, or tablet.
            </p>
          </article>
        </section>

        <div className="bg-gradient-to-br w-[90%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Do away with saving and sharing your desktop files via VPN, email, or cloud storage today!
            </h1>
            <Link to="/trial">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
                Start Your One-Month Free Trial
              </button>
            </Link>
          </div>
        </div>

        <section className=" pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-100">
          <h2 className="font-bold font-inter  text-4xl mt-3 text-center text-textPrimary">
            Why Choose Winscloud Matrix for QuickBooks Hosting Service?
          </h2>
          <p className="text-gray-800 mt-4 text-xl text-center font-semibold">Access When You Need It</p>
          <p className="font-montserrat w-[90%] text-xl text-gray-800 text-justify md:text-center mt-4">
            Our US-based, superfast data centers and SSD-based HPC servers ensure 99.99% uptime for the most seamless collaboration with teams across multiple locations and devices. Experience unparalleled performance and unmatched flexibility with easy accessibility of your fully backed-up data.
          </p>

          <div className="h-full my-8 w-[90%] pt-6 ">
            <div className="grid gap-14 md:grid-cols-3 md:gap-5">
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <RiShakeHandsLine className="text-3xl" />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Best-fitting Plans</h1>
                <p className="px-4 text-gray-500">
                  Our monthly QuickBooks Hosting plans are highly flexible, perfect to accommodate your changing needs. Not sure if Winscloud fits the bill for you? We promise a 30-day money back guarantee to ensure full value for your investments.                  .
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <LuClock className="text-3xl" />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Round-the-Clock Support</h1>
                <p className="px-4 text-gray-500">
                  Need expert help with technical issues related to your QuickBooks or are you simply on the lookout for a certified expert to provide you with the technical know-how of Hosted QuickBooks on the cloud? We promise 24/7 tech support via email, call and text with a 15-minute response time.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                  <MdOutlineSecurity className="text-3xl" />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Data Security and Recovery</h1>
                <p className="px-4 text-gray-500">
                  We understand that modern businesses seek modern solutions when it comes to data security. Our SSAE 16 certified data centers, network firewalls, automated data backups, anti-virus among other security solutions ensure that your hosted QuickBooks data is safe and secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <QuickLinks />

        <div className="my-12">
          <h1 className="text-center font-inter font-bold text-3xl my-8 text-textPrimary p-2">
            Wins Cloud with Top-notch Security
          </h1>
          <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <HiLockClosed className="w-14 h-14 text-current" />
              </div>
              <h3 className="text-3xl font-bold">Safe</h3>
              <p> Safe, Reliable, and Fully Secured Cloud Hosting.</p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <HiBolt className="w-14 h-14 text-current" />
              </div>
              <h3 className="text-3xl font-bold">Efficient</h3>
              <p>Proven Performance with Maximum Efficiency</p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <HiCheckBadge className="w-14 h-14 text-current" />
              </div>
              <h3 className="text-3xl font-bold">Proven</h3>
              <p>Trusted by Businesses for Hassle-Free Scaling</p>
            </div>
          </div>
        </div>

        <Expriance />
        <Awards />

        <h1 className="text-center font-inter font-bold text-3xl text-textPrimary mt-3 pt-2">
          QuickBooks Hosting FAQs
        </h1>
        <section className="max-w-3xl mx-auto mt-8 border border-gray-200 rounded-xl shadow-lg overflow-hidden bg-white">
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
                <div className="p-5 bg-gray-50 text-gray-700 space-y-4">
                  {faq.Head && <p className="font-bold text-gray-800 text-lg">{faq.Head}</p>}
                  {faq.Head2 && <p className="font-bold text-gray-700 text-lg">{faq.Head2}</p>}
                  {faq.answer && <p className="font-montserrat text-gray-600 text-sm leading-relaxed">{faq.answer}</p>}
                  {faq.Head3 && <p className="font-bold text-gray-700 text-lg mt-4">{faq.Head3}</p>}
                  {faq.answer2 && <p className="font-montserrat text-gray-600 text-sm leading-relaxed">{faq.answer2}</p>}
                  {faq.Head4 && <p className="font-bold text-gray-700 text-lg mt-4">{faq.Head4}</p>}
                  {faq.answer3 && <p className="font-montserrat text-gray-600 text-sm leading-relaxed">{faq.answer3}</p>}
                  {faq.Head5 && <p className="font-bold text-gray-700 text-lg mt-4">{faq.Head5}</p>}
                  {faq.answer4 && <p className="font-montserrat text-gray-600 text-sm leading-relaxed">{faq.answer4}</p>}
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

export default QickBooks_Hosting;
