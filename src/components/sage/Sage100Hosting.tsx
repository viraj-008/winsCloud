import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { LuClock } from "react-icons/lu";
import { LiaUsersSolid } from "react-icons/lia";
import { MdPriceCheck } from "react-icons/md";

import { motion } from "framer-motion";
import SageLinks from "../SageLinks";
import Expriance from "../Expriance";
import Awards from "../Awards";

const Sage100Hosting = () => {
  const faqs = [
    {
      question: "What is Sage 100 hosting?",
      answer: "Sage 100 cloud hosting services allows business owners, CPAs, and bookkeepers to access their critical business files on the cloud and their most useful Sage 100 ERP desktop with the help of the internet. This allows owners to collaborate with their remote team on the same set of data, at any time and on any day.",

    },
    {
      question: "How much does Sage 100 cloud hosting services cost?",
      answer: "Winscloud Matrix Sage 100 cloud hosting services shared plans start from $23 and dedicated hosting plans start from $69. You can scale up or down as you go and pay only for what you use. The features vary depending on the plan you choose.",
    },
    {
      question: "Can I host my add-ons along with Sage 100 hosting?",
      answer: "Yes. Our cutting-edge, cloud servers can accommodate as many servers as you want. Winscloud’s team of technical experts can aid with hosting all sorts of add-ons and third-party apps that optimize accounting and make business management easier.",
    },
    {
      question: "Is my company data safe and secure with Sage 100 cloud hosting services?",
      answer: "Yes, your data is safe with Winscloud Matrix’s Sage 100 cloud hosting services. We have multiple layers of security in place to ensure tight security to protect your data such as network firewall, multiple monitoring redundancies daily, authorized controls, data encryption, anti-virus and anti-malware, among other measures.  .",
    },
    {
      question: "What will happen to my existing data on Sage 100 desktop? Will my data be transferred to cloud with Sage 100 hosting?",
      answer: "Our tech team will provide you with complete assistance to transfer all your data saved on your desktop Sage 100 ERP software to the cloud. We ensure that the data transfer is seamless with maximum uptime during the transition.",
    },
    {
      question: "How safe are the data centers? Is there any protection against theft, flood, or disaster like earthquake?",
      answer: "Our top-notch SSAE 16 certified data centers have robust security measures in place to protect your critical data against cyber-attacks, ransomware attacks, natural disasters like flooding and earthquake, and theft. Your data is safe, always accessible, ultimately helping businesses run smoothly and maximize customer satisfaction.",
    },
    {
      question: "How is Sage 100 useful for small businesses?",
      answer: "Sage 100 ERP cloud hosting provides businesses with secure login credentials that ensure only authorized users can access the data saved on the cloud-based application. Multiple users can access and work on the same set of files in real-time, on the go, from any device and at any time. Hosting Sage 100 on the cloud also ensures 99.99% up time, greatly elevating productivity and customer happiness.",
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
          <title>Sage 100 Hosting Providers – Cloud Experts | Winscloud Matrix LLC</title>
          <meta name="description" content="Host Sage 100 securely in the cloud with real-time access, multi-user support & expert help. Call +1 714-882-1244 to get started instantly!" />
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
            >Sage 100 ERP Application Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-xl xl:max-w-2xl  my-3 md:my-0 md:mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Access and manage your small and mid-sized business from anywhere, at any time with Sage 100 cloud hosting
            </p>

            <Link to="/trial">
              <button className="relative group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Get a free trial
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
              className="w-full max-w-md  h-[230px] md:h-[260px] -my-8  md:my-0  lg:mt-12 xl:mt-0  xl:h-auto rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>

      <main>
        <section>
          <h2 className='text-3xl text-center py-4 w-[90%] mx-auto font-bold font-inter text-textPrimary'>
            Sage 100 Cloud Hosting to Elevate Your Accounting Experience
          </h2>
          <p className="font-inter text-xl text-center font-semibold">Top Reasons to Move Your Sage 100 ERP to the Cloud
          </p>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 md:px-16 md:py-6">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/sage100.webp"
              alt="sage 100 hosting"
            />

          </figure>

          {/* TEXT on the left (or top on mobile) */}
          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
              Sage 100 ERP is one of the most sought-after and user-friendly accounting software for small businesses. However, sticking to the traditional software has its own set of cons. With the increased need for businesses to stay online and accessible round-the-clock, it is important to move to the cloud. Sage 100 ERP hosting helps install and set up the desktop software on virtual servers, making it accessible on any device, from any location, and at any time of day, via the internet.
            </h2>
            <p className="font-montserrat text-gray-700 text-justify text-sm md:text-base">
              Sage 10 ERP hosting is an exceptional solution for small and mid-sized businesses as it adds a greater level of flexibility and scalability. Business owners can still enjoy all the powerful features of their most used accounting software with Sage 100 cloud hosting allowing their business to scale at a pace that they desire. Taking the productivity of Sage 100 hosting further, SMBs can also host an array of add-ons on the cloud.
            </p>
          </article>
        </section>



        <div className="bg-gradient-to-br w-[90%] my-6 mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
              Ready for Sage 100 ERP Cloud Hosting?          </h1>
            <Link to='/get-in-touch'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                Get in Touch With an Expert
              </button>
            </Link>
          </div>
        </div>



        <section className="w-[90%] mx-auto py-16 ">


          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
            Why should you choose Winscloud Matrix for Sage 100 cloud hosting?
          </h1>
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Multi-Layered Security",
                desc: "At Winscloud Matrix, we have multiple layers of security to keep your critical business files and information safe, such as SSAE 16 certified data centers, network firewalls, automatic data backups that take place twice a day, anti-virus, anti-malware, and two-factor verification.",
              },
              {
                title: "Round-the-Clock Customer Support",
                desc: "Team Winscloud consists of dedicated experts who are trained to tackle all sorts of technical challenges that businesses may face before, during and after transitioning to the cloud. We also provide 24/7 assistance with any technical questions that you may have.",
              },
              {
                title: "Flexible Pricing",
                desc: "We offer flexible pricing plans that accommodate all your business needs. Increase or decrease the number of authorized users, choose your preferred hosting type between dedicated and shared hosting, scale up and down as you go, and pay only for what you use.",
              },
              {
                title: "Data Backup",
                desc: "We ensure that your financial data is backed up twice a day and saved across multiple layers of security so that your data is easily recovered. It provides protection against accidents like theft, deletion, or natural disasters like floods or an earthquake.",
              },
              {
                title: "Third-party Integrations",
                desc: "We promise maximum satisfaction with running your business via the cloud. We know businesses use multiple add-ons and third-party apps with Sage 100 hosting to stay on top of their business management system. We can host 200+ apps along with your Sage 100 application.",
              },
              {
                title: "Max Up time Guarantee",
                desc: "For maximum customer satisfaction, we ensure 99.99% up time to all our clients. Your data is backed up, we ensure strict online monitoring to protect against incidents like data theft, and our robust infrastructure minimizes outages, promising maximum accessibility.",
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

        <SageLinks />

        <section className=" pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50  to-gray-100">
          <h1 className=" text-4xl text-center font-bold font-inter text-blue-900 p-8 ">
            Who should choose Sage 100 ERP Application Hosting?
          </h1>
          <p className="text-justify text-xl md:text-center w-[90%] font-montserrat text-gray-800 ">Sage 100 is an accounting software for small and mid-sized businesses, particularly suitable for those that are growing. Sage 100 cloud hosting services are perfect for businesses like manufacturing, chemical substances, construction, healthcare, retail, food and beverage, not for profit organizations, distribution, and professional services.
          </p>
          <p className="text-justify text-xl md:text-center mt-4 font-montserrat w-[90%]  text-gray-800 max-w-5xl">Sage 100 ERP application hosting can manage accounting, manufacturing, sales, inventory, and warehouse. It also helps businesses by generating insights which can help predict customer behaviors, ultimately helping meet their changing demands. While the desktop software is a perfect solution to manage the day-to-day business operations, Sage 100 cloud hosting blends it with the power of cloud – allowing businesses to grow seamlessly.
          </p>
          <div className=" my-8 pt-4 ">
            <div className="grid gap-14 md:grid-cols-3 w-[90%] mx-auto md:gap-5">
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <LuClock />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Round-the-Clock Accessibility</h1>
                <p className="px-4 text-gray-500">
                  Sage 100 ERP application hosting allows you and your team to access your information from anywhere, at any time, from multiple devices, if they are connected to the internet.

                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <LiaUsersSolid />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Multi-User Collaboration</h1>
                <p className="px-4 text-gray-500">
                  Sage 100 hosting enables all authorized users to share files on the hosted application, makes edits to the data, and work in collaboration without being physically present on the same location.

                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                  <MdPriceCheck />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">No Upfront Costs</h1>
                <p className="px-4 text-gray-500">
                  One of the biggest benefits of Sage 100 cloud hosting is that it is cost efficient because you do not need to install an elaborate in-house IT infrastructure or a team to maintain it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Expriance />
        <Awards />

        <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2"> Sage 100 ERP Cloud Hosting Frequently Asked Questions -
        </h1>
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
                <div className="p-5 bg-gray-50 text-gray-700">
                  {faq.answer && (
                    <p className="font-montserrat text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
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

export default Sage100Hosting;
