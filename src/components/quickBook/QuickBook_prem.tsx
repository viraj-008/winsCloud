import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { AiOutlineSolution } from "react-icons/ai";
import { MdInstallDesktop } from "react-icons/md";
import { MdDevices } from "react-icons/md";




import QuickLinks from "../QuickLinks";
import Expriance from "../Expriance";
import Awards from "../Awards";

const QuickBook_prem = () => {

  const faqs = [
    {
      question: "What is QuickBooks Premier Hosting?",

      answer: "QuickBooks Premier Plus hosting means accessing your full-fledged desktop software on a cloud server using the internet. This allows for multi-user collaboration across multiple locations and on multiple devices, that too in real-time."
    },
    {
      question: "Is QuickBooks Premier Hosting expensive? How much does QuickBooks Premier Cloud Hosting cost?",
      answer: "At Winscloud Matrix, your top quickbooks hosting provider offers pocket-friendly affordable cloud hosting plans which start from just $23/month. You can choose a plan that accommodates your team size. To accommodate your dynamic business needs, we also offer the option to pay as you go.",
    },
    {
      question: "Does QuickBooks Premier Cloud Hosting support other applications?",
      answer: "Yes, at Winscloud, our cloud hosting supports most third-party apps and add-ons. You can get all your preferred applications integrated with your QuickBooks Premier Hosting for the most seamless cloud hosting experience.",
    },
    {
      question: "Can I host my other QuickBooks apps on the cloud along with QuickBooks Premier Plus hosting?",
      answer: "Yes, you can take multiple QuickBooks versions to the cloud. Our experts at Winscloud can host all your favorite QuickBooks applications for you.",
    },
    {
      question: "How do I access my QuickBooks Premier cloud hosting?",
      answer: "Your QuickBooks Premier hosting can be accessed via your desktop, laptop or any device of your choice with a working internet connection. Our team at Winscloud will provide you with a username and password along with the necessary steps required to access your financial data on your hosted QuickBooks Premier.",
    },
    {
      question: "Can I collaborate with my remote team in real time with QuickBooks Premier hosting?",
      answer: "Yes, multiple users can work on the same set of data or files on QuickBooks Premier hosting in real time. There are no location barriers and the cloud hosted quickbooks can be accessed from multiple devices like phone, tablet, laptop, and desktop with a working internet connection.",
    },
    {
      question: "How many variants are supported with QuickBooks Premier Plus hosting?",
      answer: "Our cloud infrastructure can host all variants of QuickBooks desktop, including QuickBooks Pro, Premier, Enterprise, POS, and Canada, all versions of Sage, and tax applications like Lacerte, Drake, ProSeries, etc. Our team is also capable of hosting and providing support for almost every add-on in case of any technical issues.",
    },
    {
      question: "How is QuickBooks Premier Plus different from QuickBooks Pro, Enterprise desktop and Online versions?",
      answer: "QuickBooks Pro is accounting software that is most suitable for SMBs that are looking to streamline their accounting operations. QuickBooks Premier on the other hand is best for small and mid-sized businesses that have certain industry-specific requirements. For larger businesses that need to manage inventory, track sales, and more, QuickBooks Enterprise is a more viable option.",
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
           >QuickBooks Premier Hosting
           </motion.h1>
     
           <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
Host your QuickBooks Premier on the cloud and make your critical accounting data easily accessible, anytime, anywhere.
           </p>
     
          <Link to="/trial">
  <button className="relative group overflow-hidden">
        <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
        <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
      Start QuickBooks Premier Hosting Free Trial
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
       
      <div className="">
          <h2 className='text-3xl text-center py-4 px-6 font-bold font-montserrat text-textPrimary'>
Seamless Accounting for your Business with QuickBooks Premier Plus Hosting
          </h2>
      </div>

       <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
  {/* IMAGE on the right (or bottom on mobile) */}
  <figure className="w-full md:w-1/2 flex justify-center">
  <img
  className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
  src="./images/logo/qb-prem.webp"
  alt="QuickBooks Hosting Service"
/>

  </figure>

  {/* TEXT on the left (or top on mobile) */}
  <article className="w-full md:w-1/2 text-center  md:text-start  space-y-4">
    <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
QuickBooks Premier Plus is one of the most popular accounting software used by CPAs, accountants, and small businesses. Hosting the QuickBooks Premier Plus can transform your accounting workflow, boost productivity, and promote multi-user collaboration.

 </h2>
   
    <p className="font-montserrat text-gray-700  text-justify text-sm md:text-base">
Our team at Winscloud, your top quickbooks hosting provider, has helped small and mid-sized businesses completely turn around their business operations with services like QuickBooks Pro hosting. We help take your business to the cloud and help your team work remotely, without worrying about the hassles of transitioning to the cloud. Our team of experts take care of all your needs and preferences and ensure your business runs smoothly even during transition, ensuring maximum up time.
    </p>
  </article>
</section>

        
  <section className="px-3 pt-3 mx-auto mt-10 flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-100 ">
          <h2 className="font-bold text-3xl mt-3 text-center text-textPrimary">
QuickBooks Premier Cloud Hosting: Why should you opt for
          </h2>
          <p className="font-inter text-gray-800 text-center mt-4">
Automate Everyday Accounting Tasks and Focus on Other Important Productive Business Operations
          </p>
           <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
           
             <AiOutlineSolution />
        
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Budget Friendly Solution
</h1>
              <p className="px-4 text-gray-500">
QuickBooks Premier Cloud hosting eliminates the need for an in-house, physical IT infrastructure and therefore the cost of maintaining them.
              </p>
            </div>
           
        
           
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                 <MdInstallDesktop />
        
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Desktop-like Features on Cloud
        </h1>
              <p className="px-4 text-gray-500">
With QuickBooks Premier hosting, you get the full package – all your desktop application features, your complete data, and other apps with the added flexibility of the cloud.
              </p>
            </div>
            
            <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                <MdDevices />
        
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Multi-Device Compatibility
        </h1>
              <p className="px-4 text-gray-500">
Access your critical business data and collaborate with CPAs and bookkeepers on multiple devices like PC, tablet, or phone.
                    </p>
            </div>
          </div>
        </div>
        </section>


 <QuickLinks/>
      

       <section className="px-5 md:px-24 py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
Winscloud QuickBooks Premier Cloud Hosting: Why should you choose us as your hosting provider?          </h1>
    
   <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Pocket-friendly Transition ",
                desc: "Our plans are pocket-friendly and can accommodate any changing business needs within minutes. Check our quickbooks premier cloud hosting pricing here.",
              },
              {
                title: "Round-the-Clock Tech Support",
                desc: "The expert advisors at Winscloud are available for support, guidance, and troubleshooting issues 24/7/365 so you don’t have to worry about any tech issues during/post transition.",
              },
              {
                title: "99.99% Up-Time Guarantee",
                desc: "Our team of technical experts work round-the-clock to ensure that you always get maximum server uptime. In case of any technical issue that may cause downtime, our team of experts can provide full support to resolve the issue..",
              },
              {
                title: "Add-Ons Integration",
                desc: "We are fully equipped with hosting multiple add-ons and integrating third party apps along with QuickBooks Premier hosting and promote seamless collaboration with other CPAs and bookkeepers.",
              },
              {
                title: "High Data Security",
                desc: "Security is a concern for most CPAs and business owners. With QuickBooks Premier cloud hosting, you have the freedom to provide access to authorized users only..",
              },
              {
                title: "High-performance Servers",
                desc: "Our state-of-the-art high-performance, SSD-based remote servers offer seamless collaboration with your remote team and automated data backups for quick recovery in case of disaster.",
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
Want us to help you decide which version of QuickBooks Premier Hosting is best for your small business?
 </h1>
    <Link to='/get-in-touch'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
Get in Touch for quickbooks premier hosting with our Expert            </button>
             </Link>
          </div>

        </div>
 <Expriance/>
     <Awards/>

                <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2">QuickBooks Pro FAQs</h1>
      <section 
  className="max-w-3xl mx-auto mt-10 border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white"
  aria-label="Frequently Asked Questions"
>
  {faqs.map((faq, index) => (
    <div key={index} className="border-b border-gray-100 last:border-b-0">
      <button
        aria-expanded={openIndex === index}
        aria-controls={`faq-${index}`}
        className="w-full text-left flex justify-between items-center p-5 hover:bg-gray-50 transition-colors duration-200"
        onClick={() => toggleFAQ(index)}
      >
        <span className="font-josefin text-gray-800 text-lg font-medium">
          {faq.question}
        </span>
        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-100">
          {openIndex === index ? (
            <FaMinus className="text-red-600 text-xs" aria-hidden="true" />
          ) : (
            <FaPlus className="text-gray-600 text-xs" aria-hidden="true" />
          )}
        </span>
      </button>

      <div
        id={`faq-${index}`}
        role="region"
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  )
}

export default QuickBook_prem
