import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdPublishedWithChanges } from "react-icons/md";

import { LuClock } from "react-icons/lu";
import Partner from "../Partner";
import { motion } from "framer-motion";
import Expriance from "../Expriance";
import Awards from "../Awards";
import SageLinks from "../SageLinks";

const Sage_500Hosting = () => {
  const faqs = [
    {
      question: "What is Sage 500 hosting?",
      answer: "Sage 500 cloud hosting means integrating the desktop software into the cloud environment. It provides business owners with the flexibility to access their business data on the go, in real time, from any device they have in vicinity, only with internet connectivity.",
    },
    {
      question: "How much does Sage 100 cloud hosting services cost?",
      answer: "Winscloud Matrix Sage 100 cloud hosting services shared plans start from $23 and dedicated hosting plans start from $69. You can scale up or down as you go and pay only for what you use. The features vary depending on the plan you choose.",
    },
    {
      question: "How much does Sage 500 hosting cost?",
      answer: "The cost of Sage 500 cloud hosting depends on certain factors, like the number of authorized users you choose the type of hosting you prefer for your business such as shared or dedicated hosting, the data storage you need, among a few other features. Our plans start at $23 per month. Know more about our pricing plans by getting in touch with our cloud experts.",
    },
    {
      question: "How can I transition to Sage 500 cloud hosting?",
      answer: "To transition your on-premises Sage 500 ERP application to the cloud, you can get in touch with our cloud expert team for assistance. We will help you transition seamlessly, with maximum up time, so your customers enjoy maximum satisfaction and your profits multiply even during your cloud transition.",
    },
    {
      question: "Will my data be always accessible with Sage 500 cloud hosting?",
      answer: "Yes, your data is always accessible on Sage 500 hosting. Multiple backups of your data, multiple-user access to a file in real-time, and other such features of the cloud make your data always accessible.",
    },
    {
      question: "Do I need my Sage 500 license before moving to the cloud?",
      answer: "Yes, you need to provide your Sage 500 license to transition the cloud. If you do not have the license, you need to procure it and present it to your hosting provider before making the move.",
    },
    {
      question: "Can multiple members from my team access my Sage 500 hosting?",
      answer: "The cloud facilitates multiple user access to the information saved on the desktop software hosted on the cloud. All you need is authorization to access the remote software and the log in credentials provided by your hosting provider to access the saved data.",
    },
    {
      question: "Can I host multiple versions of Sage on the cloud?",
      answer: "Yes, the cloud supports multiple versions of Sage software – whether you wish to host Sage 50, 100, 300, or 500. Furthermore, all versions of this software are also supported.",
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
           >Sage 500 ERP Hosting
           </motion.h1>
     
           <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
Anytime, anywhere accounting & high productivity with Sage 500 ERP Hosting
           </p>
     
          <Link to="/trial">
  <button className="relative group overflow-hidden">
        <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
        <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
     get a free trial
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
        <h2 className='text-3xl text-center py-4 font-bold font-montserrat text-textPrimary'>
Business Operations Simplified with Sage 500 Cloud Hosting
        </h2>
        <p className="font-montserrat text-xl text-center font-semibold">Team Collaboration On-the-Go
</p>
      </section>

       
       <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
        {/* IMAGE on the right (or bottom on mobile) */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
            src="./images/logo/sage-500.webp"
            alt="QuickBooks Hosting Service"
          />

        </figure>

        {/* TEXT on the left (or top on mobile) */}
        <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
          <h2 className="font-semibold text-textPrimary text-justify   text-xl md:text-xl ">
        Sage 500 hosting is business management software blended with the cloud which helps businesses drive productivity, add efficacy to their day-to-day operations, and minimize costs with its robust features. Businesses from multiple domains find Sage 500 a valuable addition to their routine operations, helping them make informed decisions that promote profitability.
          </h2>
           <p className="font-montserrat text-gray-700 text-justify text-sm md:text-base">
            Sage 500 offers customization to accommodate individual business needs. Retail businesses can stay on track with their sales and inventory, ensuring that they always have product availability. The automated supply chain feature of Sage 500 and inventory management contributes to customer satisfaction, forecasts consumer behavior, and maximizes profits. With Sage 500 hosting, these features are amplified 10x. Multiple teams can collaborate in real time to stay on top of these features and ensure seamless business operations round-the-clock.
            </p>
        </article>
      </section>


       <div className="bg-gradient-to-br w-[96%] mx-auto  from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex-1">
          <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
Ready for Sage 500 ERP Cloud Hosting?          </h1>
          <Link to='/get-in-touch'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
              Get in Touch With an Expert
            </button>
          </Link>
        </div>
      </div>

      <SageLinks/>

       <section className="px-3 pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50  to-gray-100">
                  <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 p-2 ">
       Who should choose Sage 500 ERP Application Hosting?
               </h1>
              
                       <div className="h-full my-8 w-full pt-12 p-4">
                           <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                             <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                               <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                 <RiShakeHandsLine />
                               </div>
                               <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Real time Collaboration
</h1>
                               <p className="px-4 text-gray-500">
                                Sage 500 cloud hosting provides an integrated cloud environment that facilitates multi-user access to financial data saved in the cloud in real time.       
                               </p>
                             </div>
                             <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                               <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                 <LuClock />
                               </div>
                               <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Round the Clock Tech Support</h1>
                               <p className="px-4 text-gray-500">
                      A good Sage 500 cloud hosting services provider like Winscloud Matrix offers 24/7 tech support to assist with troubleshooting and other technical issues.
       
                               </p>
                             </div>
                             <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                               <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                                 <MdPublishedWithChanges />
                               </div>
                               <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Third-Party Apps Supported</h1>
                               <p className="px-4 text-gray-500">
Sage 500 hosting supports an infinite number of add-ons and third-party apps to be hosted on the cloud for enhanced productivity and ease of managing business.
                               </p>
                             </div>
                           </div>
                         </div>
                       </section>

       

        <section className="w-[90%] max-w-4xl mx-auto my-12">
  <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
    <h2 className="text-center font-semibold font-kanit text-2xl md:text-4xl font-serif text-blue-800 mb-6 px-4">
      Simple Steps to Migrate to the Cloud with Sage 500 Cloud Hosting
    </h2>
    
    <p className="px-4 font-montserrat text-gray-600 mb-6 text-lg leading-relaxed">
      If you are ready to embrace the cloud, you can migrate your financial data and your desktop-based Sage 500 ERP application to the cloud in the following steps:
    </p>
    
    <ul className="list-disc pl-8 space-y-3 mb-8">
      <li className="font-montserrat text-gray-700 text-lg p-2 hover:bg-gray-50 rounded transition">
        <span className="font-medium">Find</span> the best Sage 500 hosting provider with the right experience for your business
      </li>
      <li className="font-montserrat text-gray-700 text-lg p-2 hover:bg-gray-50 rounded transition">
        <span className="font-medium">Provide</span> your Sage 500 ERP License information to your chosen hosting provider
      </li>
      <li className="font-montserrat text-gray-700 text-lg p-2 hover:bg-gray-50 rounded transition">
        <span className="font-medium">Share</span> any specific requirements with them
      </li>
      <li className="font-montserrat text-gray-700 text-lg p-2 hover:bg-gray-50 rounded transition">
        <span className="font-medium">Provide</span> access to your business data and migrate safely to the cloud environment
      </li>
      <li className="font-montserrat text-gray-700 text-lg p-2 hover:bg-gray-50 rounded transition">
        <span className="font-medium">Receive</span> your cloud credentials from your hosting provider
      </li>
    </ul>
    
    <h2 className="font-semibold font-inter text-2xl md:text-3xl text-gray-800 mt-10 mb-6 px-4 text-center">
      Post your FREE DEMO login and run your business on-the-go
    </h2>
    
    <div className="flex justify-center mt-8">
      <button className="transition-all duration-300 border-2 bg-green-600 hover:bg-green-700 text-lg md:text-xl rounded-full px-8 md:px-14 text-white font-josefin py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Contact Us for Cloud Hosting
      </button>
    </div>
  </div>
</section>

       
      <section className="px-5 md:px-24 py-16 ">
       <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
Why Choose Winscloud Matrix for your Sage 300 ERP cloud hosting services?
        </h1>  
        <p className="max-w-4xl font-montserrat text-xl mx-auto text-center">The right Sage 500 ERP cloud hosting services provider is critical when migrating your business to the cloud. Winscloud Matrix comes with the right experience, success stories, and features that make them the perfect choice for Sage 500 hosting –

</p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "MRemote Access",
              desc: "Sage 500 cloud hosting with Winscloud promotes remote work, multi-user collaboration, and access to the same set of data from anywhere at any time.",
            },
            {
              title: "Effective Hosting Cost",
              desc: "Our hosting plans start from a minimal price of $23 per month. Our flexible pay-as-you-go pricing model allows you to scale up/down as per your business needs. Check our pricing here.",
            },
            {
              title: "Multiple Device Support",
              desc: " By hosting your Sage 500 ERP on the cloud, you can access your critical data from any internet connected device on-the-go, including your smart phone, laptop, desktop computer, and tablet.",
            },
            {
              title: "Technical Assistance 24/7/365",
              desc: "Our team of technical professionals are readily available round-the-clock and are trained to provide all sorts of assistance and tech support for a smooth cloud experience.",
            },
            {
              title: "Bank-grade Security",
              desc: "We ensure that you have better control over your data and unparalleled security with measures like network firewall, routine monitoring redundancies, anti-virus, anti-malware, dedicated servers, etc.",
            },
            {
              title: "Data Backup Guarantee ",
              desc: " Your data is backed up twice a day to ensure that your critical business information is always accessible, and encrypted copies are saved in three different locations for added safety.",
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


          <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2"> Sage 500 ERP Frequently Asked Questions-
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
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${openIndex === index ? 'bg-red-100' : 'bg-gray-100'} transition-all duration-300`}>
          {openIndex === index ? (
            <FaMinus className="text-red-600 h-3 w-4" />
          ) : (
            <FaPlus className="text-gray-600 h-3 w-4" />
          )}
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default Sage_500Hosting;
