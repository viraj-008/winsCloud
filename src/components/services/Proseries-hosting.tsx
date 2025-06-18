import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { MdOutlineSecurity } from "react-icons/md";
import { RiShakeHandsLine } from "react-icons/ri";
import { LuClock } from "react-icons/lu";
import ServiceLink from "../ServiceLink"; 
import Expriance from "../Expriance";
import Awards from "../Awards";

const ProseriesHosting = () => {
  const faqs = [
    {
      question: "What is ProSeries Hosting?",
      answer:
        "ProSeries Cloud Hosting refers to accessing and working on the ProSeries desktop application on a virtual server using the internet. Hosting the desktop application on the cloud allows tax preparers and accountants to collaborate with their clients remotely, saving them time and effort during the busy tax season.",
    },
    {
      question: "What is the cost of ProSeries Tax Software Hosting?",
      answer:
        "The hosting plans offered by Winscloud Matrix are affordable and flexible. Starting at just $23 per month, our pay as you go model allows you to choose the services you need and pay only for what you have used.",
    },
    {
      question: "Why should I choose Winscloud Matrix for my ProSeries Cloud Hosting?",
      answer:
        "Having worked with clients from varied domains and several businesses of small and medium sizes, we have years of experience in hosting all accounting and tax applications. Not just that, our team of cloud experts are equipped with the required knowledge to host more than 200 add-ons and third-party apps that assist in making your accounting and tax process smoother.",
    },
    {
      question: "Can I get a ProSeries Cloud Hosting Free Trial before hosting?",
      answer:
        "Yes, we offer a one-month Free Trial for clients who wish to experience working in the cloud environment before deciding. Ready to take a free trial with Winscloud Matrix? Start FREE TRIAL Now.",
    },
    {
      question: "What security measures are in place to ensure my data is secure with ProSeries hosting?",
      answer:
        "We understand that the taxpayer’s data is critical and must be protected from the risk of data theft, ransomware, floods, and earthquakes. We ensure that your stored data is safe by implementing the latest security measures like end-to-end data encryption in servers, network firewalls for added protection, multi-factor authentication to ensure only authorized users gain access to the data, anti-virus and anti-malware protection, and multiple redundancies and data center monitoring round-the-clock.",
    },
    {
      question: "Can I collaborate with my clients and members of my team through ProSeries Hosting?",
      answer:
        "Yes, with ProSeries Hosting, you can collaborate with your clients and team at any time of the day and from any device. You can be on vacation or at any remote location and still stay up to date with your tax operations, the only requirements being a working internet connection.",
    },
    {
      question: "Is my version of ProSeries desktop application supported for cloud hosting?",
      answer:
        "Yes, we support all versions of ProSeries whether you wish to host ProSeries Basic, Professional, or any other edition that our clients own. We provide the same level of support and security irrespective of the version you have.",
    },
    {
      question: "Is there any support for troubleshooting provided by my top hosting services provider?",
      answer:
        "Yes, we provide 24/7/365 support related to ProSeries hosting as well as add-ons and third-party apps. Our team is available on email, chat, and call to help you with your issues and is responsive whenever you need.",
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
            >ProSeries Tax Software Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
Secure, scalable and secure tax operations with ProSeries Cloud Hosting
            </p>

            <Link to="/get-in-touch">
              <button className="relative group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Get in Touch with Us
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
        <h2 className='text-3xl text-center py-4 max-w-6xl mx-auto font-bold font-montserrat text-textPrimary'>
Why Choose ProSeries Hosting: Elevate your tax operations and crack the full potential of your ProSeries Tax Software Hosting

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
          <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
ProSeries Tax Software Hosting is professional tax software based on the cloud. It helps tax pros and accountants carry out key tasks for their clients like preparing and monitoring returns, filing e-forms, and tracking errors from anywhere, at any time, with efficiency. With the power of cloud, accountants and tax professionals can give their clients peace of mind since ProSeries Hosting keeps their data safe and secure, with bank grade security measures like encrypted servers, network firewalls, and anti-virus.
          </h2>
           <p className="font-montserrat text-gray-700 text-justify text-sm md:text-base">
With ProSeries Cloud Hosting, tax preparers can experience easy tax filing, enjoy the robust features of the popular tax software, gain 24/7 access to tax data so they can stay on top of their clients’ tax filing anytime, anywhere, and remotely collaborate with their clients and team. This added flexibility, security, and productivity that comes with ProSeries Cloud Hosting significantly elevates the entire tax preparation process.
            </p>

        </article>


      </section>



          <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl mt-7 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex-1">
          <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
Ready to see how ProSeries Cloud Hosting helps with tax preparation?
           </h1>
          <Link to='/trial'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                  Try ProSeries Hosting for FREE
            </button>
          </Link>
        </div>
      </div>



        <div className="mt-14 max-w-4xl mx-auto  px-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 font-inter mb-6">
Key Features: What makes ProSeries Cloud Hosting stand out?
      </h1>

      <div className="flex flex-wrap justify-center">
        {/* Card 1 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full  bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-gray-100  text-lg font-medium">Remote Access
</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white">
                ProSeries Cloud hosting facilitates anytime, anywhere access to data. File taxes on the go, work with a remote team in collaboration, and file e-forms well before the deadline.
              </p>
             
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full  bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-gray-100  text-lg font-medium">Data Security
</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white">
                Cloud hosting providers ensure that your client’s data is safe and secure with bank-grade security measures like network firewalls, server encryption, anti-virus, anti-malware, and more.
              </p>
             
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-gray-200 text-lg font-medium">Data Backup
</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white">
                Be assured of your data accessibility as your data is backed up twice a day, across multiple layers so it is never lost, keeping your accounting and tax operations always running.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>


    <ServiceLink />

        <section className="px-3 pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50  to-gray-100">
                         <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 p-2 ">
              Who should choose Sage 500 ERP Application Hosting?
                      </h1>
                     <p className="text-xl mt-2 font-montserrat text-center">Team Winscloud can help you transition to ProSeries Hosting seamlessly in 3 easy steps –

</p>
                              <div className="h-full my-8 w-full pt-12 p-4">
                                  <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                                    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                                      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                        <RiShakeHandsLine />
                                      </div>
                                      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Choose a hosting plan that best suits your business
       </h1>
                                      <p className="px-4 text-gray-500">
                                       We offer both dedicated as well as shared hosting so you can choose the option that fits in with your budget and meets your hosting needs. You can scale up or down as you go hassle-free.       
                                      </p>
                                    </div>
                                    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                                      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                        <LuClock />
                                      </div>
                                      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Share your ProSeries License and other details</h1>
                                      <p className="px-4 text-gray-500">
                             Once you provide our cloud expert with your application license, software link, data you need to be transferred to the cloud and chosen plan details, we will begin your cloud transition process.              
                                      </p>
                                    </div>
                                    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                                      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                                        <MdOutlineSecurity />
                                      </div>
                                      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Start Your Tax Preparation Process in the Cloud</h1>
                                      <p className="px-4 text-gray-500">
Our experts are trained to complete your transition to cloud in just 120 minutes, depending on your data. Your data is safely and securely migrated to the cloud with maximum up time, so you can start your clients’ tax prep right away.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </section>

        <section className="px-5 md:px-24 py-16 ">
       <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
Why Choose Winscloud Matrix for Your ProSeries Cloud Hosting: Anytime, Anywhere Advantage with Unceasing Expert Support
        </h1>  
       
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "Remote Collaboration",
              desc: "With Winscloud Matrix ProSeries Hosting, you can collaborate with your clients and other professionals from your team on-the-go, breaking all the location barriers.",
            },
            {
              title: "Effective Hosting Cost",
              desc: "Our hosting plans are affordable, flexible, and scalable, giving you complete freedom to choose services that you require and pay only for what you use.",
            },
            {
              title: "Bank Grade Security",
              desc: " We make conscious efforts to keep your data integrity intact, with multiple layers of security such as firewall, encryption, backups, monitoring, and anti-virus protection in place.",
            },
            {
              title: "High Up Time Guarantee",
              desc: "Our high-speed servers and secure and reliable networks ensure that you get maximum up time with your ProSeries cloud hosting, ensuring a high level of productivity.",
            },
            {
              title: "Multiple Device Compatibility-",
              desc: "ProSeries Cloud hosting allows tax preparers and accountants to access the software and tax data from any device connected with the internet, including laptop, phone, tablet, and desktop.",
            },
            {
              title: "24×7 Technical Support",
              desc: " Our technical support team is dedicatedly working round-the-clock to provide you with assistance, troubleshooting, and guidance via email, chat, and call.",
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

      <Expriance/>
      <Awards/>

          <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2">ProSeries Cloud Hosting Frequently Asked Questions (FAQs) -</h1>
        <section>
         
          <div className="max-w-3xl mx-auto mt-10 border rounded-lg shadow-lg overflow-hidden">
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
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 bg-gray-50 text-gray-700">
                    {faq.answer && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Partner />
    </>
  );
};

export default ProseriesHosting;
