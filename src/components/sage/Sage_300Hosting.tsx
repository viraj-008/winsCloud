import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { GrDocumentTest } from "react-icons/gr";
import { motion } from "framer-motion";
import Expriance from "../Expriance";
import Awards from "../Awards";
import SageLinks from "../SageLinks";
const Sage_300Hosting = () => {
  const faqs = [
    {
      question: "What is Sage 300 hosting?",
      answer: "Sage 300 hosting means running the traditional, on-premises application in a cloud environment via the internet. Sage 300 hosting allows business owners to access their desktop software from anywhere, at any time, and collaborate with their remote teams in real time.",     
    },
    {
      question: "Will my data be migrated to the cloud during Sage 300 hosting?",
      answer: "Yes, your cloud hosting provider can help migrate all your pre-existing data to the cloud. Our cloud support team at Winscloud Matrix can seamlessly and securely transfer your data to the cloud environment.",
    },
    {
      question: "What are the benefits of Sage 300 cloud hosting?",
      answer: "With Sage 300 Hosting, your files and financial data are available at one central location and are accessible 24/7. Multiple members from your team can work on the desired set of data in collaboration, at the same time. The cloud-based Sage 300 is safe, with multiple security measures in place to protect your data from theft, accidental deletion, or disasters like earthquakes.",
    },
    {
      question: "What is the cost of Sage 300 ERP cloud hosting? How much does Sage 300 hosting cost?",
      answer: "The cost of Sage 300 cloud hosting depends on the plan you choose, the number of users, type of hosting i.e. shared or dedicated, etc. Winscloud Matrix’s plans start at just $23 per month. Need help with deciding which plan is best for you? Get in touch with our experts NOW!",
    },
    {
      question: "Are add-ons/third-party apps supported with Sage 300 hosting?",
      answer: "Yes, you can have all your add-ons and third-party apps hosted on the cloud along with your Sage 300 hosting. Our technical team at Winscloud Matrix will provide all necessary support and troubleshooting that you may face during the transition.",
    },
    {
      question: "Is Sage 300 hosting cheaper than using the traditional desktop software?",
      answer: "When using the on-premises Sage ERP 300, you need to invest in servers and maintenance staff to run your business smoothly. Businesses that are facing a budget constraint may find it difficult to make such monetary investments. With Sage 300 cloud hosting, you only need to pay for your chosen plan and everything else is taken care of by your hosting provider. Ready for your transition to the cloud? Contact us today!",
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
           >Sage 300 ERP Cloud Hosting
           </motion.h1>
     
           <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
Better organize projects, and optimize business operations from anywhere, anytime with Sage 300 cloud hosting
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


      {/* ALL ORIGINAL CONTENT BELOW - ONLY ADDED SEMANTIC TAGS */}
      <main>
          <section>
        <h2 className='text-3xl text-center py-4 max-w-6xl mx-auto font-bold font-montserrat text-textPrimary'>
          QuickBooks POS Cloud Hosting: Conveniently track multi-channel sales and manage your retail inventory from multiple locations
        </h2>
        <p className="font-montserrat text-xl text-center font-semibold">Host Your Sage Desktop & Experience the Power of the Cloud
</p>
      </section>

       <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
        {/* IMAGE on the right (or bottom on mobile) */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
            src="./images/logo/sage300.webp"
            alt="QuickBooks Hosting Service"
          />

        </figure>

        {/* TEXT on the left (or top on mobile) */}
        <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
          <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
        Sage 50 cloud hosting is an IaaS (Infrastructure-as-a-Service) solution that offers the robust, desktop version of the easy-to-use Sage 50 application on the cloud. Business owners who choose to host their Sage 50 on cloud save time, money and the hassle of driving to their office every time they need to work on their important business files. With hosted Sage 50, you no longer must stay tethered to your office desktop. Instead, you can access your data on the go, on any device, from wherever you are.
          </h2>
           <p className="font-montserrat text-gray-700 text-justify text-sm md:text-base">
             Sage 50 hosting offers the exact same features as the desktop application, along with enhanced storage and computing capabilities. Businesses that transition to the cloud-based Sage 50 have the leverage to allow business access to multiple people from their team so they can collaborate from the comfort of their home at any time of the day. Most Sage 50 hosting providers offer affordable plans where the businesses have the option to scale up as their business grows, without paying a hefty amount every now and then.
            </p>

        </article>
      </section>



           <section className="px-5 md:px-24 py-16 ">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
    Why is Winscloud Matrix’s Sage 300 Cloud Hosting Service the Best Deal for Your Business?
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "Flexible Pricing & Plans",
              desc: "Our tailored pricing plans offer flexibility and can be customized to your needs. Our cost-efficient pay-as-you-go model allows you to scale up or down as per your business needs.",
            },
            {
              title: "99.9% uptime surety",
              desc: "We promise 99.99% uptime guarantee so that your data is always accessible. Your business runs uninterrupted, ensuring maximum customer satisfaction.",
            },
            {
              title: "Multiple Levels of Security",
              desc: "Our cutting-edge security features keep your data safe from threats like data theft, cyberattacks, ransomware attacks, and protection from natural disasters like floods and earthquakes.",
            },
            {
              title: "Robust Data Centers",
              desc: "Our state-of-the-art SSAE-16 data centers comply with industry standard security protocols to ensure maximum data protection and uninterrupted business continuity.",
            },
            {
              title: "Support Round-the-Clock",
              desc: " We have an in-house team of trained technical professionals who are dedicatedly working 24/7 to provide you with support from",
            },
            {
              title: "Fast Transition to the Cloud",
              desc: "Our team of cloud experts are trained to ensure a fast and seamless 120-min transition of your Sage 300 ERP to the cloud environment.",
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

      <SageLinks/>
          <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white my-12 p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex-1">
          <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
            Are you prepared to make your transition to cloud with Sage 300 Cloud Hosting?
          </h1>
          <Link to='/trial'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                  Start One Month Trial
            </button>
          </Link>
        </div>
      </div>
      

      <div>
          <h2 className="font-bold  text-4xl font-serif mt-8 max-w-5xl mx-auto  my-5  text-center text-textPrimary">
                        Sage 300 Cloud hosting service: Why is it the right choice for your business?
                                  </h2>
                                  <p className="text-center font-montserrat mb-10 text-gray-800 max-w-6xl px-4 mx-auto">
                                    Sage 300 hosting with Winscloud Matrix is the right choice for your business if you are looking for a trustworthy and experienced hosting provider. We have helped businesses from multiple domains transition to the cloud. Our team has experience in dealing with all sorts of issues that businesses might face before, during or after their transition to the cloud. Our robust security measures help keep your information secure, our state-of-the-art data centers keep your data backed up, ensuring maximum up time so your business is always accessible. Enjoy the highest level of customer satisfaction by moving to the cloud, at affordable prices and experience a comprehensive business solution with Sage 300 cloud hosting.
                                  </p>
      </div>

       <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
                       <h2 className="font-bold text-3xl mt-3  my-5  text-center text-textPrimary">
                        Benefits of Sage Hosting: What does the cloud have to offer?
                                  </h2>
                                  <p className="text-center font-montserrat mb-10 text-gray-800 max-w-6xl mx-auto">Migrating your Sage 300 desktop application to the cloud is quite easy. Follow the given 3 steps to host Sage 300 on the cloud to make your transition quick and easy –</p>
                            
                      <div className="grid gap-14 md:grid-cols-3 md:gap-8">
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                       
                         <LuDatabaseBackup />
                    
                          </div>
                          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Know Your Needs</h1>
                          <p className="px-4 text-gray-500">
                           The first step to embracing Sage 300 cloud hosting is to collect all your information – your personal details, number of users, their names, your Sage 300 license details, and the add-ons or third-party apps you wish to host.

                           </p>
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                          <FaUsersGear />
                    
                          </div>
                          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Finding a Sage 300 cloud hosting provider
                    </h1>
                          <p className="px-4 text-gray-500">
                  For a seamless transition from desktop to Sage 300 hosting, you need to find the best Sage 300 cloud hosting provider for your business who has the right experience, trained support staff, and robust security measures in place.

                          </p>
                        </div>
                    
                        <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                             <RiInformation2Fill />
                    
                          </div>
                          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Access the Cloud  
                    </h1>
                          <p className="px-4 text-gray-500">
     Finally, to migrate to the cloud, you need to enter your complete information, wait for the notification, designate a point person, gain access to the cloud and experience enhanced level of mobility, security, accessibility, and productivity like never before.

                          </p>
                        </div>
                        <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                             <GiChoice />
                    
                          </div>
                          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Anytime, anywhere access
                    </h1>
                          <p className="px-4 text-gray-500">
     Sage 300 cloud hosting lets you access your critical files any time, from anywhere across the globe, so you are always caught up with your business and ensure a high level of productivity.
                          </p>
                        </div>
                        <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                             <BiDetail />
                    
                          </div>
                          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank-grade Security
                    </h1>
                          <p className="px-4 text-gray-500">
       Sage 300 ERP hosting service providers ensure that the cloud has multiple layers of security measures in place like network firewalls, 24/7 monitoring, and data backups to ensure your critical data is secure.            
                          </p>
                        </div>
                        <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                            <GrDocumentTest />
                    
                          </div>
                          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Cost-effective Solution
                    </h1>
                          <p className="px-4 text-gray-500">
             Hosting Sage 300 on cloud eliminates the need to invest in and implement elaborate, in-house IT infrastructure. You also save on hiring dedicated staff to maintain this infrastructure.              
                          </p>
                        </div>
                      </div>
                    </div>

       

       
   <Expriance/>
   <Awards/>
        

        {/* FAQ Section - Only added schema markup */}
       <section itemScope itemType="https://schema.org/FAQPage" className="max-w-3xl mx-auto mt-10 border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
  <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-5">
    Sage 300 Cloud Hosting Service Frequently Asked Questions
  </h1>

  {faqs.map((faq, index) => (
    <div
      key={index}
      className="border-b border-gray-100 last:border-b-0"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="w-full text-left flex justify-between items-center p-5 hover:bg-gray-50 transition-colors duration-200"
        onClick={() => toggleFAQ(index)}
      >
        <span className="font-josefin text-gray-800 text-lg font-medium" itemProp="name">
          {faq.question}
        </span>
        <div
          className={`flex items-center justify-center h-8 w-8 rounded-full ${
            openIndex === index ? "bg-red-100" : "bg-gray-100"
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
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div className="p-5 bg-gray-50">
          <p className="font-montserrat text-gray-800 text-sm md:text-base leading-relaxed" itemProp="text">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  ))}
</section>


        <Partner />
      </main>
    </>
  );
};

export default Sage_300Hosting;