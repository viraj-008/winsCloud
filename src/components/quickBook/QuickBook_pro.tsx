import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { LuDatabaseBackup } from "react-icons/lu";
import { GiChoice } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
import QuickLinks from "../QuickLinks";
import Expriance from "../Expriance";
import Awards from "../Awards";
const QuickBook_pro = () => {
  const faqs = [
    {
      question: "What is QuickBooks Pro Hosting?",

      answer: "QuickBooks Pro Cloud Hosting is the ability to use your desktop accounting software on the cloud. A top QuickBooks hosting provider like Winscloud offers QuickBooks Pro hosting so you can securely access your company files, anytime anywhere."
    },
    {
      question: "Is data backed up in QuickBooks Pro Cloud Hosting?",
      answer: "Your top QuickBooks hosting provider automatically backs up your critical company data every day. You don’t have to worry about securing your information or paying extra for the same",
    },
    {
      question: "How is QuickBooks Pro Cloud Hosting better than QuickBooks Online?",
      answer: "QuickBooks Pro Hosting is better than QuickBoooks Online since you get to access the entire desktop application including your data, the supporting applications you use, and the features that QuickBooks Online lacks. While both solutions offer remote access, it is the added functionality and ease of QuickBooks Pro hosting that makes it a better option.",
    },
    {
      question: "What is the difference between QuickBooks Pro Desktop and QuickBooks Pro hosting? Which one is better?",
      answer: "While QuickBooks Desktop is simply your desktop application that you install and use offline on your desktop, QuickBooks Pro hosting is the same application with all the features made accessible on the internet. QuickBooks Pro cloud hosting facilitates remote access and multi-user collaboration, so that you can work with your remote team without the barriers of time and space.",
    },
    {
      question: "Which version of QuickBooks is best for small businesses: QuickBooks Pro vs Premier vs. Enterprise?",
      answer: "QuickBooks Pro is most suitable for small businesses as it caters to key accounting needs. For businesses that have some specialized needs, QuickBooks Premier is a more suitable solution. QuickBooks Enterprise is designed to handle more complex business operations for large firms.",
    },
    {
      question: "Which operating system will I need to host my QuickBooks Pro on the cloud?",
      answer: "You can install QuickBooks Pro on the cloud with your existing operating system. You can access your hosted QuickBooks from any operating system, including Mac, Windows, Linux, etc.",
    },
    {
      question: "How many versions of QuickBooks can I host on the cloud?",
      answer: "Your top QuickBooks hosting provider can host all versions of QuickBooks for you on the cloud. ",
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
           >QuickBooks Pro Hosting
           </motion.h1>
     
           <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
Secure your data on the cloud for hassle-free accounting with top quickbooks hosting providers
           </p>
     
          <Link to="/trial">
  <button className="relative group overflow-hidden">
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

      <div className="">
          <h2 className='text-3xl max-w-6xl mx-auto text-center py-4 font-bold font-montserrat text-textPrimary'>
QuickBooks Pro Cloud Hosting: Take your favorite QuickBooks Pro to the cloud and add more power to your accounting operations
          </h2>
      </div>

     <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
  {/* IMAGE on the right (or bottom on mobile) */}
  <figure className="w-full md:w-1/2 flex justify-center">
  <img
  className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
  src="./images/logo/bookpro.webp"
  alt="QuickBooks Hosting Service"
/>

  </figure>

  {/* TEXT on the left (or top on mobile) */}
  <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
    <h2 className="font-semibold text-textPrimary   text-xl md:text-xl ">
Modern businesses need technology that saves time, promotes flexibility, and offers security. While QuickBooks Pro Desktop adds ease to accounting operations, QuickBooks Pro Plus Hosting takes the powerful desktop application one step further.   
 </h2>
   
    <p className="font-montserrat text-gray-700 text-sm md:text-base">
QuickBooks Pro Hosting helps you to securely access your data from any device of your choice. Safely login to your QuickBooks Desktop application on the cloud and experience enhanced flexibility while working with your team. Simplify accounting, stay up to date with your team, and experience multi-user collaboration with your remote team, irrespective of where you are.
    </p>
  </article>
</section>


 <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
           
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-start md:text-4xl font-bold mb-2">
Experience the Ease of Accounting: Switch to QuickBooks Pro Cloud Hosting Today!
 </h1>
    <Link to="/trial">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
              Start FREE Trial - Claim Top hosting Services Today!
            </button>
             </Link>
          </div>

        </div>


         <section className="px-3 pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-100 ">
          <h2 className="font-bold text-3xl mt-3 text-center text-textPrimary">
Why opt for QuickBooks Pro Cloud hosting?
          </h2>
          <p className="font-inter text-gray-800 text-center mt-4">
Benefits of taking advantage of cloud hosting your QuickBooks Pro Desktop
          </p>
           <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12 p-4 ">
          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
           
             <LuDatabaseBackup />
        
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Unlimited Add-Ons Integrations
</h1>
              <p className="px-4 text-gray-500">
Need multiple add-ons and/or third-party apps to go along with QuickBooks Pro Hosting? Your top QuickBooks hosting provider can host all your apps and add-ons that support your business on the cloud.
              </p>
            </div>
           
        
           
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                 <GiChoice />
        
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Industry Standard Security

        </h1>
              <p className="px-4 text-gray-500">
      The cutting-edge cloud technology comes with multiple layers of security measures to keep critical business data safe, ensuring no data is lost during and after transition to the cloud.
              </p>
            </div>
            
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <GrDocumentTest />
        
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Optimal Performance

        </h1>
              <p className="px-4 text-gray-500">
       The high-performance SSD servers ensure maximum uptime, offer additional storage, and eliminate speed and downtime issues, so your business runs smoothly.
      
              </p>
            </div>
          </div>
        </div>
        </section>

    

     
         <section className="px-5 md:px-24 py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
         WinsCloud: The Best QuickBooks Pro Hosting Provider for Your Business Accounting Needs
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
As a small business, we understand that your biggest priority is to always be up and running. Using a desktop application comes with its own limitations – you cannot collaborate with your remote team, storage is limited, and performance may not be optimum. With Winscloud’s QuickBooks Pro Plus hosting solution, you experience enhanced performance of your QuickBooks Pro Plus –
</p>

        

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Customized Pricing Plans ",
                desc: "We understand the dynamics of modern businesses. To provide you with tailor-made pricing, we ensure that our pocket-friendly plans allow you to pay as you go, without any contract boundation.",
              },
              {
                title: "Data Back Up",
                desc: "Your critical business data is backed up twice daily and saved across multiple layers to ensure easy recovery in case of accidental deletion or a natural disaster like flood.",
              },
              {
                title: "Expert Support 24/7/365",
                desc: "We have a team of certified QuickBooks Pro Plus Advisors who are available on call and by email to cater to all your technical needs, including installation, upgrading and troubleshooting.",
              },
              {
                title: "More Profitability",
                desc: "Winscloud Matrix’s QuickBooks hosting solutions eliminates the need to invest in heavy, in-house cloud infrastructure and helps you save big on maintenance costs.",
              },
              {
                title: "High Performance Servers",
                desc: "Our HPC servers are managed by our team of professionals who are equipped to tackle any unexpected downtime to ensure that your business runs smoothly 24/7.",
              },
              {
                title: "Always Up and Running",
                desc: "Downtime can result in unhappy customers and thus adversely impact your business. Our QuickBooks Pro hosting solutions ensure business continuity with 99.99% up time.",
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
      

       <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
           
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-start md:text-4xl font-bold mb-2">
          Experience the Ease of Accounting: Switch to QuickBooks Pro Cloud Hosting Today!
     </h1>
    <Link to="/trial">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
              Choose Your Best QuickBooks Pro Cloud Hosting Plan
            </button>
             </Link>
          </div>

        </div>

     

     <QuickLinks/>
     <Expriance/>
     <Awards/>

             <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2">QuickBooks Pro FAQs</h1>

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
                <p className="font-montserrat text-[10px] md:text-sm">{faq.answer}</p>

              </div>

            </div>
          </div>
        ))}
      </div>

      <Partner />

    </>
  )
}

export default QuickBook_pro
