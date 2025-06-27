import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { RiShakeHandsLine } from "react-icons/ri";
import { LuClock } from "react-icons/lu";
import Expriance from "../Expriance";
import Awards from "../Awards";
import ServiceLink from "../ServiceLink";

const Lecerte_Hosting = () => {
  const faqs = [
    {
      question: "What is Lacerte Tax Hosting?",
      answer:
        "Lacerte Hosting means your desktop tax application is hosted on a remote cloud server, making it accessible on any device such as laptop, cellphone, desktop or tablet, with the help of the internet. Anyone who hosts their Lacerte on the cloud can access their data on-the-go and collaborate with their tax professionals and remote teams from anywhere in the world.",
    },
    {
      question: "How much does Lacerte tax software hosting cost?",
      answer:
        "Lacerte Hosting by Winscloud Matrix starts at just $23 per month. The amount you pay depends on your number of users, hosting type you choose, and your storage needs. You can easily scale up and down as per your business needs with our pay as you go model.",
    },
    {
      question: "What if I don’t want to host my desktop software anymore? Can I get a FREE Trial of Lacerte Hosting?",
      answer:
        "Yes, we provide a one-month long free trial to our clients. You can use your cloud-hosted Lacerte and get firsthand experience of the cloud environment before making any decision. Your business still stays up and your data is completely secure, promising maximum up time. Pay for your preferred plan only when you are satisfied with our services",
    },
    {
      question: "Does Lacerte Hosting save time?",
      answer:
        "Lacerte hosting is a time-saving tax preparation and filing solution based in the cloud. Users can work on their essential tax files and carry out their operations from anywhere across the globe without needing to physically travel to their office to conduct these essential activities. Setting up on the cloud only takes 120 minutes, depending on your data, and you can enjoy up time even during the transition.",
    },
    {
      question: "is my Lacerte Hosting safe?",
      answer:
        "Yes, your data on Lacerte Tax Hosting is completely secure. A good tax software hosting provider like Winscloud Matrix ensures there are multiple safety measures in place such as network firewall, anti-virus and anti-malware, data encryption, multi-factor authentication, and secure login details that are shared only with the authorized personnel.",
    },
    {
      question: "Does Lacerte Hosting support add-ons integration and third-party applications?",
      answer:
        "Yes, you can host as many add-ons and third-party applications as you want along with your Lacerte hosting. Our cloud expert team at Winscloud can provide end-to-end support with hosting of your preferred add-ons and other apps.",
    },
    {
      question: "Will I be provided with any support during my transition to the cloud?",
      answer:
        "Yes, we offer 24/7 support to our clients all year round. Our team is well trained to tackle all sorts of issues that you might face during and after your transition to the cloud. Contact our team NOW for support!.",
    },
    {
      question: "How many versions of Lacerte can I host in the cloud?",
      answer: "You can host multiple versions of Lacerte Tax software in the cloud.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="min-h-[90vh] rounded-b-xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">
        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >Lacerte Tax Software Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Streamline your workflow and organize your tax operations with Lacerte Hosting
            </p>

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
          <h2 className='text-3xl w-[90%] mx-auto text-center pt-4 font-bold font-montserrat text-textPrimary'>
            Lacerte Hosting: A Modern Solution to Facilitate Business Growth, Team Collaboration, and Seamless Tax Filing
          </h2>

        </section>

        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/lace-hosting.webp"
              alt="QuickBooks Hosting Service"
            />

          </figure>

          {/* TEXT on the left (or top on mobile) */}
          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary  text-justify  text-xl md:text-xl ">
              Lacerte Tax Software hosting means accessing the desktop Lacerte application on a virtual server via the internet. Hosting Lacerte Tax Software on the cloud offers immense flexibility to access the software and its data from any remote location. Multiple people can collaborate and work on the same set of data to seamlessly file taxes and prepare reports efficiently, therefore optimizing the workflow and enhancing team’s productivity to a greater extent.
            </h2>
            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
              Lacerte Tax Hosting also facilitates easy and timely updates of the desktop application, promotes safety and data security in the cloud environment, and saves time since you do not need to travel to the office every time to work on your data. Lacerte Tax Software hosting can be accessed from anywhere, at any time.
            </p>

          </article>
        </section>



        <section className=" pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-100">
          <h2 className="font-bold font-inter text-4xl px-3 mt-3 text-center text-textPrimary">
            How to transition to Lacerte Tax Hosting?
          </h2>
          <p className="text-gray-800 mt-4 text-center font-semibold">Access When You Need It</p>
          <p className="font-inter text-gray-800 px-3 text-center mt-8">
            Winscloud helps businesses transition to the cloud environment with Lacerte Hosting in three simple steps –
          </p>

          <div className="h-full my-8 w-full pt-12 ">
            <div className="grid gap-14 w-[90%] mx-auto md:grid-cols-3 md:gap-5">
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <RiShakeHandsLine />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Choose your preferred hosting plan</h1>
                <p className="px-4 text-gray-500">
                  You can choose among our dedicated and shared hosting plans and select a plan that accommodates your number of users and storage needs.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <LuClock />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Share your Lacerte application details
                </h1>
                <p className="px-4 text-gray-500">
                  Provide your license details and your hosting plan details with our cloud expert so they can progress further with your cloud transition


                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                 <LuClock />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Begin your Lacerte cloud hosting journey
                </h1>
                <p className="px-4 text-gray-500">
                  Your cloud setup will be done in 120 minutes, and you can effortlessly begin your journey with cloud-integrated Lacerte tax software.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br w-[90%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl mt-7 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
              Need our help to decide on the best plan for your business? Take a FREE Trial Before Taking Any Decision
            </h1>
            <Link to='/trial'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                Start Your Free Trial
              </button>
            </Link>
          </div>
        </div>


        <ServiceLink />
        <section className="w-[90%] mx-auto py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
            Winscloud Matrix Lacerte Tax Hosting: Why should you choose Lacerte Hosting with Winscloud for a seamless Tax Season?
          </h1>
          <p className="text-center font-montserrat text-gray-800">The advanced accounting and payroll software helps businesses carry out several key operations such as Lacerte Tax Hosting takes your tax practice to the next level. One of the most popular software for tax professionals, firms and business owners, Lacerte Hosting aids you with flexibility, security, and accessibility.
          </p>



          <div className="grid md:grid-cols-2  gap-8 mt-14">
            {[
              {
                title: "Enhanced Bandwidth",
                desc: "Lacerte Hosting can accommodate multiple users to work on the same set of data for enhanced productivity and collaboration, ensuring higher levels of productivity and efficacy in tax filin",
              },
              {
                title: "Maximum Uptime Guarantee",
                desc: "We ensure 99.99% up time for your business and tax operations before, during and after transitioning to the cloud so your data saved on the application is always accessible by you and your team.",
              },
              {
                title: "Pay As You Go",
                desc: "Our flexible pay-as-you-go model allows you to scale up and down as per your business needs. You only pay for your preferred number of users, storage capacity and type of hosting.",
              },
              {
                title: "Data Back-Up",
                desc: "Your data is backed up across multiple layers so that it is always accessible. It also provides security against threats like theft, accidental deletion of data and breakdown of data centers..",
              },
              {
                title: "Trained Support Staff",
                desc: "Our technical support team is trained and experienced at hosting all versions of Lacerte for small to large-sized businesses. They can tackle any issue that you may face and assist with troubleshooting.",
              },
              {
                title: "Seamless Cloud Setup",
                desc: "Setting up Lacerte Hosting with Winscloud Matrix is smooth, fast and takes only around two hours to transition your entire data to the cloud, ensuring easy access to your data and tools.",
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

        <Expriance />
        <Awards />

        <section>
          <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2">  Lecerte Hosting Frequently Asked Questions</h1>
          <section className="max-w-3xl mx-auto mt-10 border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
            {faqs.map((faq, index) => (
              <article key={index} className="border-b border-gray-100 last:border-b-0">
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
                    {faq.answer && (
                      <p className="font-montserrat text-sm md:text-base leading-relaxed text-gray-800">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </section>

        </section>
      </main>

      <Partner />
    </>
  );
};

export default Lecerte_Hosting;

