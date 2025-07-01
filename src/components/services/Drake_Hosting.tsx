import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { IoMdAppstore } from "react-icons/io";
import { motion } from "framer-motion";
import ServiceLink from "../ServiceLink";
import Awards from "../Awards";
import Expriance from "../Expriance";

const Drake_Hosting = () => {
  const faqs = [
    {
      question: "What is Drake tax hosting?",
      answer: "Drake tax hosting is a blend of the drake desktop software and the power of cloud. It provides users with a centralized platform to access their key tax data from a location of their choice, irrespective of the time zone or device.",
    },
    {
      question: "Why should I choose Drake Tax software cloud hosting?",
      answer: "Drake Tax hosting is one of the best decisions business owners can make. Since you can access your data at any time and from anywhere, you can get more done in less time and effort. Hosting your Drake tax software on the cloud makes tax season a lot easier, allowing multiple authorized users to work on the same data set, filing taxes faster, with less errors.",
    },
    {
      question: "How much does Drake cloud hosting cost?",
      answer: "We have many affordable and flexible pricing plans to offer. You can check out our hosting plans here – https://www.winscloudmatrix.com/pricing/.",
    },
    {
      question: "Are all versions of Drake Tax Hosting supported on the cloud servers?",
      answer: "It does not matter which version of Drake Tax software you are using. We provide hosting of all Drake versions.",
    },
    {
      question: "I use a number of add-ons along with my Drake tax software. Is hosting possible for these add-ons as well?",
      answer: "Yes, at Winscloud, we offer hosting of 200+ add-ons and third party apps for your uninterrupted tax filing with drake cloud hosting.",
    },
    {
      question: "Do you provide any sort of tech support in case of any issue?",
      answer: "Yes, we have a dedicated, trained, and experienced team in-house to provide you with the support needed,  at anytime of the day or night. You can reach out to us for support via email, phone, and chat.",
    },
    {
      question: "What are the pre-requisites for Drake software cloud hosting?",
      answer: "The only prerequisite for opting for drake cloud hosting solution is a working device like laptop, computer, tablet or phone and uninterrupted internet connection.",
    },
    {
      question: "Is my data safe with Drake hosting providers?",
      answer: "Yes, your drake hosting provider ensures complete safety of your critical information. There are several measures in place to protect your data from theft, ransomware attacks, and man-made and natural disasters like earthquake, floods, or robbery.",
    },
    {
      question: "How much time does it take to migrate to the cloud? Can I access my data during transition?",
      answer: "It usually takes a couple of hours to migrate the Drake desktop software to the cloud. It depends on you if you wish to migrate your entire data to the cloud. It may take a few hours extra depending on the size of your data..",
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
          <title>Drake Tax Hosting | Cloud Drake Software by Winscloud</title>
          <meta name="description" content="Host Drake Tax Software securely in the cloud with Winscloud Matrix LLC. Fast, scalable, and 24/7 support. Call +1 714-882-1244 for expert Drake Hosting." />
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
            >Drake Tax Software Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-xl xl:max-w-2xl  my-3 md:my-0 md:mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Professional Tax returns, anytime, anywhere with Drake tax software cloud hosting
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
              alt="ServerImage"
              className="w-full max-w-md h-[230px] md:h-[260px] -my-8  md:my-0  lg:mt-12 xl:mt-0  xl:h-auto rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>

      <main>
        <section className="w-[90%] mx-auto">
          <h2 className='text-3xl text-center py-4  font-inter  font-bold  text-textPrimary'>
            Drake Cloud Hosting: How does opting for Drake Tax Hosting Elevate Your Tax Preparation?
          </h2>
          <p className="font-montserrat text-xl  text-center font-semibold">No more staying tethered to your office computer!
          </p>

        </section>

        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 md:px-16 md:py-6">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/drake.jpg"
              alt="Drake Hosting"
            />

          </figure>

          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
              Drake software cloud hosting refers to the freedom of accessing your desktop software on a remote server. With Drake hosting, users can access their Drake software on-the-go, on any device of their choice to carry out their tax preparation process.
            </h2>
            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
              Winscloud Matrix’s drake cloud hosting solution gives you the freedom to access your key files saved on the desktop software from anywhere, allowing you to work from the comforts of your home, collaborating with your clients and team members to prepare taxes, and enjoy a seamless tax process. Tax preparation on drake tax hosting is also a completely secure solution that keeps the worries of data security at bay.
            </p>

          </article>


        </section>


        <section className=" pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50  to-gray-100">
          <h1 className="text-4xl w-[90%] text-center font-bold font-inter text-blue-900 p-2 ">
            Drake Hosting Key Features: How does drake cloud hosting take your tax preparation to the next level?
          </h1>

          <div className="h-full my-8 w-full  ">
            <div className="grid gap-14 md:grid-cols-3 w-[90%] mx-auto md:gap-5">
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <RiShakeHandsLine />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Anytime, anywhere Access </h1>
                <p className="px-4 text-gray-500">
                  Drake Cloud hosting facilitates anytime, anywhere access to data. File taxes on the go, work with a remote team in collaboration, and file e-forms well before the deadline.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <MdSupportAgent />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Multi-Device Support</h1>
                <p className="px-4 text-gray-500">
                  Make your hectic tax season seamless with the flexibility of accessing your key tax files from multiple devices, including your office desktop computer, your personal laptop, cell phone, and tablet.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                  < IoMdAppstore />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Third-Party App Integration</h1>
                <p className="px-4 text-gray-500">
                  Not just Drake, the same cloud server can accommodate your other important apps like QuickBooks, Sage and third-party apps that make your tax preparation smooth.
                </p>
              </div>
            </div>
          </div>
        </section>



        <div className="bg-gradient-to-br w-[90%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl mt-7 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
              Ready to see how Drake Cloud Hosting helps with tax preparation?
            </h1>
            <Link to='/trial'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                Try Drake Hosting for FREE
              </button>
            </Link>
          </div>
        </div>


        <div className="py-16 w-[90%] mx-auto  bg-white">
          <div className=" mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 font-inter mb-2 text-center">
              How to Set Up Your Drake Tax Software on the Cloud in 3 Simple Steps?
            </h1>
            <p className="font-montserrat max-w-4xl mx-auto text-gray-800 text-center my-6 font-semibold">Winscloud Matrix, one of the top drake hosting providers, helps you transition smoothly to Drake Tax Cloud Hosting in 3 easy steps –


            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


              {/* Card 2 */}
              <div className="flex flex-col h-full">
                <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="w-10 h-10 mb-4 md:mb-2 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <h2 className="text-gray-100 text-xl font-semibold">
                      Find the most suitable hosting plan for your small business
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                      As an experienced drake hosting provider, we offer dedicated as well as shared hosting to our clients to accommodate their unique needs. We offer complete freedom to business owners to select the plan that meets their needs, is affordable, and offers flexibility to scale.


                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col h-full">
                <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <h2 className="text-gray-100 text-xl font-semibold">
                      Provide your Drake License details
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                      To begin your cloud transition process, you must present your Drake software license to your Drake hosting provider. You might also need to provide additional details like your number of users and the amount of storage you need.


                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col h-full">
                <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <h2 className="text-gray-100 text-xl font-semibold">
                      Access your drake tax software cloud hosting
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
                      In just 2-5 hours, depending on the size of your data, your transition to the cloud will be complete. You can then access your favorite software and safely begin your tax preparation process, on the very same day!


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <ServiceLink />

        <section className="w-[90%] mx-auto py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
            Why Should You Choose Winscloud for Drake Tax Software Hosting: Tax Preparation Transformed with the Power of Cloud
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Multi-User Collaboration",
                desc: "With Winscloud’s Drake Tax hosting, you can experience maximum productivity with your tax filing operations by remotely collaborating with multiple members of your team, in real time.",
              },
              {
                title: "Cost-Effective Hosting",
                desc: "We offer affordable and the most flexible drake tax hosting pricing. Our plans are flexible and provide you with the freedom to choose the services you need and pay only for what you use.",
              },
              {
                title: "Highest Level Security",
                desc: " We understand the importance of keeping our client’s data safe, with an array of security measures like a network firewall, end-to-end data encryption, regular backups of your files, etc.",
              },
              {
                title: "Multiple Device Compatibility",
                desc: "Drake Cloud hosting allows tax preparers and accountants to access the software and tax data from any device connected with the internet, including laptop, phone, tablet, and desktop.",
              },
              {
                title: "24×7 Tech-Support",
                desc: "We have a team of certified IT professionals who work round-the-clock to provide our clients with unparalleled assistance to help keep your system up-and-running.",
              },
              {
                title: "High Up Time",
                desc: " Experience minimum downtime uninterrupted access to your Drake hosting and the tax data saved on all your devices with our 99.99% uptime guarantee.",
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

        <h1 className="text-center font-inter font-bold text-3xl text-textPrimary  mt-5 px-4 p-2">ProSeries Cloud Hosting Frequently Asked Questions (FAQs) -</h1>
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

export default Drake_Hosting;
