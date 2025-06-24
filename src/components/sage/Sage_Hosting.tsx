import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Partner from "../Partner";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { GrDocumentTest } from "react-icons/gr";
import SageLinks from "../SageLinks";
import Awards from "../Awards";
import Expriance from "../Expriance";

const Sage_Hosting = () => {
  const faqs = [
    {
      question: "What is Sage Hosting?",
      answer: "Sage Hosting providers like Winscloud Matrix host the Sage desktop application on the cloud, making it accessible via the internet using multiple devices like phone, tablet, laptop, or desktop. This allows business owners, CPAs, and bookkeepers to access data at any time, from anywhere in the world.",
     
    },
    {
      question: "What are the benefits of Sage Hosting?",
      answer: "Sage is one of the best business accounting software with robust features that facilitate financial management for small and mid-sized businesses. Hosting Sage on the cloud is a cost-effective solution which makes data saved on the desktop more accessible on any device from any location.",
    },
    {
      question: "How much does Sage hosting cost?",
      answer: "The cost of Sage Hosting depends on the number of users you choose and the type of hosting you prefer, be it shared or dedicated hosting. Our hosting plans at Winscloud Matrix start from $29/month. Check out our pricing plans here.",
    },
    {
      question: "Do I need a license to host my Sage application on the cloud?",
      answer: "Yes, a licensed Sage application is a must to host it on the cloud. You can share your license details with your Sage Hosting Provider who will then host it on a cloud server for you.",
    },
    {
      question: "How can I access my data with Sage hosting?",
      answer: "Accessing your business data saved on your Sage application is very easy. All you need is to use the credentials provided by your Sage Hosting Provider and log in to your remote server to access your files and other information.",
    },
    {
      question: "Will my critical business data be safe on the cloud?",
      answer: "We care for your business and understand the importance of being always available to your customers. Hence, our certified SSAE-16 Type-II (SOC-2) data centers ensure 99.99% accessibility.",
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
             className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-5xl leading-tight mb-8"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: 'easeOut' }}
             viewport={{ once: true, amount: 0.8 }}
           >Sage Hosting
           </motion.h1>
     
           <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
Elevate your accounting experience with cloud-based Sage ERP & CRM applications with Winscloud Sage Hosting Provider
           </p>
     
          <Link to="/Get-in-Tou">
  <button className="relative group overflow-hidden">
        <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
        <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
      Get Free Trial Now
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
        <h2 className='text-3xl text-center px-2 py-4 max-w-6xl mx-auto font-bold font-montserrat text-textPrimary'>
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
            src="./images/logo/sage-hosting.jpg"
            alt="QuickBooks Hosting Service"
          />

        </figure>

        {/* TEXT on the left (or top on mobile) */}
        <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
          <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
          Sage hosting means taking your licensed desktop Sage accounting, ERP and CRM applications to the cloud to experience the flexibility and security of the cloud in your day-to-day business operations. Sage Cloud hosting allows multi-user collaboration in real-time, from anywhere across the world. The enhanced productivity that comes with Sage hosting improves customer satisfaction, little to no errors in data, and saves time.
          </h2>
           <p className="font-montserrat text-gray-700 text-justify text-sm md:text-base">
             Unlike Online versions, Sage hosting comes packed with all the features of the desktop application, thus adding to the efficiency. It can prove to be an excellent service for various businesses like accounting firms, retail & wholesale businesses, various types of industries, food and beverage, and not-for-profit organizations.
            </p>

        </article>
      </section>

        <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex-1">
          <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
         Are you ready to experience Sage Hosting for your business?
          </h1>
          <Link to='/get-in-touch'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
              Get in Touch With an Expert
            </button>
          </Link>
        </div>
      </div>

        

      <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
         <h2 className="font-bold text-3xl mt-3 mb-12 text-center text-textPrimary">
            Benefits of Sage Hosting: What does the cloud have to offer?
                </h2>
              
        <div className="grid gap-14 md:grid-cols-3 md:gap-8">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
         
           <LuDatabaseBackup />
      
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Desktop-like Features
</h1>
            <p className="px-4 text-gray-500">
     Hosting your Sage application on the cloud makes the robust features of the desktop application accessible on the virtual server.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
            <FaUsersGear />
      
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Access On-the-Go
      </h1>
            <p className="px-4 text-gray-500">
     Enjoy easy access to your financial data from multiple devices like your phone, tablet, desktop at home, or laptop with Sage hosting.
            </p>
          </div>
      
          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
               <RiInformation2Fill />
      
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Multi-User Collaboration
      </h1>
            <p className="px-4 text-gray-500">
      Sage hosting supports multiple users access to the same set of data, in real time, making collaboration feasible and accounting operations fast.
            </p>
          </div>
          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
               <GiChoice />
      
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Enhanced Productivity
      </h1>
            <p className="px-4 text-gray-500">
     With all your financial data accessible round-the-clock and on any device, your data stays updated, leading to enhanced customer satisfaction. 
            </p>
          </div>
          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
               <BiDetail />
      
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Cost Effective
      </h1>
            <p className="px-4 text-gray-500">
      Eliminate the need for an expensive and space-consuming, in-house IT infrastructure and a dedicated IT team for maintenance and support.
    
            </p>
          </div>
          <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
              <GrDocumentTest />
      
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Automatic Updates
      </h1>
            <p className="px-4 text-gray-500">
      Sage hosting promotes error free updates of your books and critical financial data, eradicating the scope for manual errors.
      
            </p>
          </div>
        </div>
      </div>


<SageLinks/>
       

      <section className="px-5 md:px-24 py-16 ">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
Winscloud QuickBooks Enterprise Cloud Hosting: Powerful Features That Help Your Business Grow
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "Data Security",
              desc: "Winscloud Matrix has multiple layers of security in place such as SSAE 16 certified data centers, automated data backups, anti-virus and anti-malware, network firewalls, and two-factor verification to keep your data safe.",
            },
            {
              title: "Round-the-Clock Tech support",
              desc: "Our dedicated, in-house tech team provides support around the clock. Whether you need technical guidance or help with troubleshooting, our team is always at your disposal to provide the necessary assistance.",
            },
            {
              title: "Scalability",
              desc: "Modern businesses have dynamic needs. Our cloud infrastructure accommodates these changing needs of small businesses, giving them the freedom to scale up and down as required.",
            },
            {
              title: "Uptime Guarantee",
              desc: "At Winscloud, we understand the importance of business continuity. Our SSAE-16 Type-II (SOC-2) data centers ensure maximum uptime with uninterrupted access to your business.",
            },
            {
              title: "Flexible Plans",
              desc: "Winscloud’s pricing plans offer scalability and cost optimization. Our pricing model is flexible, allowing you to pay as you go based on the actual cloud usage.",
            },
            {
              title: "120-Min Data Migration",
              desc: " Our team of experienced professionals are trained to seamlessly transfer business data saved on your desktop application to the cloud in just 2 hours.",
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

        <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2">Sage Hosting Frequently Asked Questions (FAQs) -</h1>

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

export default Sage_Hosting;
