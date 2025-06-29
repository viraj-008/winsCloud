import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Partner from "../Partner";
import { motion } from "framer-motion";

import { BsSaveFill } from "react-icons/bs";
import { BsDatabaseFillUp } from "react-icons/bs";
import { AiTwotoneControl } from "react-icons/ai";



import QuickLinks from "../QuickLinks";
import Experience from "../Expriance";
import Awards from "../Awards";

const QuickBook_pos = () => {

  const faqs = [
    {
      question: "What is QuickBooks POS Hosting?",

      answer: "QuickBooks POS hosting means taking your desktop QuickBooks POS app along with its robust features to a third party cloud in order to make it more accessible for your sales and inventory teams across multiple locations. QuickBooks POS hosting is an incredible solution that ensures data security, makes your retail business in multiple locations more accessible and adds efficacy to your business operations.",
    },
    {
      question: "How to host QuickBooks POS on cloud?",
      answer: "A top quickbooks hosting provider like Winscloud Matrix can help you transition to the cloud. You can call us at [+1 714-882-1244] or email us at [info@winscloudmatrix.com] and get in touch with our Support Technicians and we will help you move to the cloud in just 120 minutes. Get in touch with our team for cloud hosting now ",
    },
    {
      question: "Why is it better to host QuickBooks POS on cloud? What are the benefits of QuickBooks hosting?",
      answer: "There are many benefits of QuickBooks POS cloud hosting over the desktop application, including more efficiency in running a business and cost efficiency. Instead of investing in in-house cloud infrastructure and its maintenance, you can simply choose the cost-efficient option, i.e. QuickBooks POS hosting.",
    },
    {
      question: "I use several add-ons along with my QuickBooks POS. How many add-ons can I integrate with QuickBooks hosting?",
      answer: "You can integrate as many add-ons as you want. Our team at Winscloud is equipped with knowledge to host 100s of add-ons and can provide you with the required support in case of any technical issues.",
    },
    {
      question: "Do I need a QuickBooks Enterprise license to host QuickBooks on the cloud?",
      answer: "Yes, you need a QuickBooks Enterprise license to move to the cloud.",
    },
    {
      question: "How much does it cost to host QuickBooks POS desktop on cloud?",
      answer: "Most top QuickBooks hosting providers offer flexible pricing plans. At Winscloud Matrix, we don’t believe in rigid plans that don’t suit your business needs. Instead, we let you pay as you go. You can also choose between dedicated and shared hosting plans, based on your team size. Check quickbooks hosting pricing here.",
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
            >QuickBooks POS Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              An excellent hosting solution for handling simple to complex business transactions with ease
            </p>

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

      <section className="">
        <h2 className='text-3xl text-center max-w-6xl px-3 mx-auto py-4 font-bold font-inter text-textPrimary'>
          QuickBooks POS Cloud Hosting: Conveniently track multi-channel sales and manage your retail inventory from multiple locations
        </h2>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 md:px-16 md:py-6">
        {/* IMAGE on the right (or bottom on mobile) */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
            src="./images/logo/qb-pos.webp"
            alt="QuickBooks Hosting Service"
          />

        </figure>

        {/* TEXT on the left (or top on mobile) */}
        <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
          <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
            At Winscloud, we understand that small businesses need technology that can be game changers when it comes to business efficiency. QuickBooks POS cloud hosting is one such solution that takes sales tracking, inventory management, return management, and more such functions to the next level. Businesses today need remote access to manage their sales and inventory on the go. Unlike traditional POS systems, QuickBooks POS hosting offers a comprehensive solution for businesses to save their data on a remote server which can be accessed by multiple users, collaborate in real-time, and stay up to date with inventory from any location, 24/7/365.

          </h2>

        </article>
      </section>


      <div className="bg-gradient-to-br w-[90%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex-1">
          <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
            Ready to take your retail business to the cloud?
          </h1>
          <Link to='/get-in-touch'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
              Get in Touch With an Expert
            </button>
          </Link>
        </div>
      </div>


      <QuickLinks />




      <section className="w-[90%] mx-auto py-16 ">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
          Why Choose Winscloud Matrix for taking your QuickBooks Cloud Hosting?
        </h1>
        <p className="text-justify md:text-center text-lg md:text-lg text-gray-700 font-montserrat  w-[90%] mx-auto">
          Retail businesses need to stay updated with their inventory and sales to ensure maximum customer satisfaction. QuickBooks POS is a fantastic solution that allows retail business owners and its employees to stay on the same page and work together in sync, irrespective of their physical location. Winscloud Matrix allows businesses to host their highly efficient and useful QuickBooks POS desktop on the cloud, adding another level of efficacy in managing a retail business. Issues like low inventory, order placement, return requests, sales can be managed in real-time, helping customer satisfaction reach an all-time high. Here’s how Winscloud can help seamlessly achieve this success –
        </p>



        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "Support 24/7/365",
              desc: "Team Winscloud promises unlimited support round the clock to troubleshoot issues and provide guidance on technical concerns to ensure that your business runs smoothly, without any hiccups during and after the transition to the cloud.",
            },
            {
              title: "Free Trial to Help Decision Making",
              desc: "We offer a month-long Free Trial for our users to help them make an informed decision. Explore your favorite cloud hosted QuickBooks POS and run your business with the added flexibility of the cloud without paying a penny.",
            },
            {
              title: "Seamless Migration",
              desc: "Our dedicated team of experts ensure a smooth transition of your retail business to the cloud, maintaining uptime and data security.",
            },
            {
              title: "Pay As You Go ",
              desc: "Winscloud offers flexible QuickBooks POS hosting plans that cater to your business size. You can customize your plan as per your need, without any contract restriction.",
            },
            {
              title: "99.99% Uptime Guarantee",
              desc: "We guarantee a 99.99% uptime so that your critical business information and the hosted QuickBooks POS application is always accessible, and you can run your business without any interruption.",
            },
            {
              title: "Unlimited Add-Ons Integration",
              desc: " Our servers are enabled to host as many add-ons and third-party apps as you want. Our expert team is also equipped to provide you with technical support in case of any issues.",
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

      <Experience />

      <section className="px-3 pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-100 ">
        <h2 className="font-bold font-inter text-4xl mt-3 text-center text-textPrimary">
          Hosting QuickBooks POS on the Cloud: Benefits for Your Retail Business
        </h2>
        <p className="font-montserrat text-gray-800 text-xl text-justify  md:text-center mt-4 w-[90%]">
          Running a retail business has never been easier. With contemporary solutions like cloud hosting QuickBooks POS, business owners can manage multiple retail stores across different locations in real-time.
        </p>
        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100  pt-12  ">
          <div className="grid gap-14 md:grid-cols-3 w-[90%] mx-auto md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">

                <BsSaveFill className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Cost Savings

              </h1>
              <p className="px-4 text-gray-500">
                QuickBooks POS hosting is compatible with most hardware solutions at brick-and-mortar stores and supports multiple add-ons and third-party app hosting.

              </p>
            </div>



            <div  className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                <BsDatabaseFillUp className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Synchronized Data
              </h1>
              <p className="px-4 text-gray-500">
                Your employee records, orders and sales records, and inventory status across multiple locations all on one platform with QuickBooks POS hosting.
              </p>
            </div>

            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <AiTwotoneControl className="text-2xl"/>

              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">More Control Over Business
              </h1>
              <p className="px-4 text-gray-500">
                Enjoy greater control over your business by connecting all your outlets on the cloud and monitor your retail business with more precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Awards />


      <h1 className="text-center font-inter font-bold text-3xl -mb-4 text-textPrimary p-2">QuickBooks POS FAQs</h1>


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
              <div className={`flex items-center justify-center h-8 w-8 rounded-full ${openIndex === index ? 'bg-red-100' : 'bg-gray-100'} transition-all duration-300`}>
                {openIndex === index ? (
                  <FaMinus className="text-red-600 text-xs" />
                ) : (
                  <FaPlus className="text-gray-600 text-xs" />
                )}
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="p-5 bg-gray-50">
                <p className="font-montserrat text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Partner />

    </>
  )
}

export default QuickBook_pos
