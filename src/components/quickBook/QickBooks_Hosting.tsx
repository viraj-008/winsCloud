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
      <section className="min-h-[80vh] rounded-b-xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto w-full gap-12 items-center mt-8">
          <div className="text-center md:text-left mt-8">
            <motion.h1
              className="text-slate-100 font-bold font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Trusted QuickBooks Hosting Provider
            </motion.h1>
            <p className="text-md sm:text-lg md:text-xl font-bold max-w-xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Make your accounting operations more secure and collaborate with your team anytime, from anywhere with Winscloud’s QuickBooks Hosting Services.
            </p>
            <button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-black text-white font-mono text-sm px-6 py-3 rounded-lg shadow-md border border-blue-600 transition duration-300 hover:scale-105">
              <span className="text-green-400">//</span>Start FREE Trial - Claim Top hosting Services Today!
            </button>
          </div>
        </div>
      </section>

      <main>
        <section className="p-4">
          <h1 className="text-3xl text-center py-4 font-bold font-montserrat text-textPrimary">
            QuickBooks Hosting: Desktop-like experience on any device, from any part of the globe
          </h1>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/qb-hosting.webp"
              alt="QuickBooks Hosting Service"
            />
          </figure>
          <article className="w-full md:w-1/2 text-center md:text-start space-y-4">
            <h2 className="font-semibold text-textPrimary text-xl md:text-xl">
              Want to experience the synergy between your most loved QuickBooks Desktop application and the power of the cloud? Tap into the efficacy and efficiency of cloud infrastructure with Winscloud Matrix – your authorized QuickBooks hosting provider.
            </h2>
            <p className="font-montserrat text-gray-700 text-sm md:text-base">
              QuickBooks Desktop Cloud Hosting is an advanced solution that enhances the functionality of the desktop application by moving it to the cloud. Users can access all the features of their favorite QuickBooks application, along with their key data with only a working internet connection, from any device of their choice – laptop, desktop, cell phone, or tablet.
            </p>
          </article>
        </section>

        <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Do away with saving and sharing your desktop files via VPN, email, or cloud storage today!
            </h1>
            <Link to="/trial">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
                Start FREE Trial - Claim Top hosting Services Today!
              </button>
            </Link>
          </div>
        </div>

        <section className="px-3 pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-100">
          <h2 className="font-bold text-3xl mt-3 text-center text-textPrimary">
            Why Choose Winscloud Matrix for QuickBooks Hosting Service?
          </h2>
          <p className="text-gray-800 mt-4 text-center font-semibold">Access When You Need It</p>
          <p className="font-inter text-gray-800 text-center mt-8">
            Our US-based, superfast data centers and SSD-based HPC servers ensure 99.99% uptime for the most seamless collaboration with teams across multiple locations and devices. Experience unparalleled performance and unmatched flexibility with easy accessibility of your fully backed-up data.
          </p>

          <div className="h-full my-8 w-full pt-12 p-4">
            <div className="grid gap-14 md:grid-cols-3 md:gap-5">
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <RiShakeHandsLine />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Best-fitting Plans</h1>
                <p className="px-4 text-gray-500">
                  Our monthly QuickBooks Hosting plans are highly flexible, perfect to accommodate your changing needs. Not sure if Winscloud fits the bill for you? We promise a 30-day money-back guarantee.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <LuClock />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Round-the-Clock Support</h1>
                <p className="px-4 text-gray-500">
                  Need expert help with QuickBooks? Our 24/7 tech support via email, call, and text ensures a 15-minute response time.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                  <MdOutlineSecurity />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Data Security and Recovery</h1>
                <p className="px-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!
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
              <p>Our products are secure and private out-of-the-box</p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <HiBolt className="w-14 h-14 text-current" />
              </div>
              <h3 className="text-3xl font-bold">Efficient</h3>
              <p>Feel good about your wallet and the environment</p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <HiCheckBadge className="w-14 h-14 text-current" />
              </div>
              <h3 className="text-3xl font-bold">Proven</h3>
              <p>Leading the Smart Home world for 10 years</p>
            </div>
          </div>
        </div>

        <Expriance />
        <Awards />

        <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2">
          QuickBooks Hosting FAQs
        </h1>
        <section className="max-w-3xl mx-auto mt-10 border rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                className="w-full text-left flex justify-between items-center p-4 text-lg font-semibold hover:bg-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-josefin">{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-red-900 min-h-[12px] min-w-[12px] m-4" />
                ) : (
                  <FaPlus className="text-red-600 min-h-[12px] min-w-[28px] m-4" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-4 bg-gray-50 text-gray-600">
                  {faq.Head && <p className="font-bold text-xs md:text-xl">{faq.Head}</p>}
                  {faq.Head2 && <p className="font-bold mt-2 text-xs md:text-xl">{faq.Head2}</p>}
                  {faq.answer && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer}</p>}
                  {faq.Head3 && <p className="font-bold mt-4 text-xs md:text-xl">{faq.Head3}</p>}
                  {faq.answer2 && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer2}</p>}
                  {faq.Head4 && <p className="font-bold mt-4 text-xs md:text-xl">{faq.Head4}</p>}
                  {faq.answer3 && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer3}</p>}
                  {faq.Head5 && <p className="font-bold mt-4 text-xs md:text-xl">{faq.Head5}</p>}
                  {faq.answer4 && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer4}</p>}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default QickBooks_Hosting;
