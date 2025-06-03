import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import {  Link } from "react-router-dom";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { GrDocumentTest } from "react-icons/gr";
import SageLinks from "../SageLinks";
import Expriance from "../Expriance";
import Awards from "../Awards";

const Sage50Hosting = () => {
  const faqs = [
    {
      question: "What is Sage 50 Hosting?",
      answer: "Sage 50 hosting means accessing the Sage 50 desktop software from a virtual server with the help of the internet, from any device like a phone, laptop, tablet, and desktop, and on any operating system.",
    },
    {
      question: "Why is it better to host Sage 50 on the cloud?",
      answer: "Hosting the Sage 50 desktop software on the cloud significantly improves business accessibility. Multiple teams can collaboratively work on the business data, keeping inventory up to date, managing cash flows, and tracking sales, ultimately maximizing customer satisfaction. Business owners can monitor their business from anywhere on the globe, without worrying about distance.",
    },
    {
      question: "How do I migrate my Sage 50 on cloud?",
      answer: "If you are planning to take your Sage 50 desktop application to the cloud, you can reach out to Winscloud team, your Sage 50 hosting services provider. We can help you seamlessly transition to the cloud in just 2 hours.",
    },
    {
      question: "How much does Sage 50 cloud hosting cost?",
      answer: "Winscloud’s Sage 50 hosting services plans are flexible and start at a minimum amount of $23 per month. The price you pay may differ based on the number of users you choose and the type of hosting you choose – shared or dedicated server. Check out our pricing here.",
    },
    {
      question: "Will my data be safe with cloud hosting?",
      answer: "At Winscloud Matrix, your data is automatically backed up two times a day to ensure safety of your critical information. Our SSAE-16 compliant data centers further ensure complete security to your data, even in the event of a natural disaster such as flood or earthquake. Your business data is always accessible, and your customers are always happy.",
    },
    {
      question: "Can multiple people from my team be accommodated on Sage 50 cloud hosting?",
      answer: "Yes, one of the primary benefits of Sage 50 Cloud hosting is that it allows multiple users to access the data from multiple locations to facilitate teamwork and files sharing on the cloud-based software.",
    },
    {
      question: "Can I access my Sage 50 cloud hosting even when I am travelling overseas?",
      answer: "Yes, you can access your Sage 50 hosting solution from anywhere in the world. All you need is a working internet connection, a device such as your phone, laptop, or tablet, and your login credentials provided by your Sage 50 cloud hosting provider..",
    },
    {
      question: "Does Winscloud support all versions of Sage 50 desktop applications?",
      answer: "At Winscloud, we support all versions of your favorite Sage 50 application, including Pro, Premium and Quantum.",
    },
    {
      question: "Are add-ons supported with Sage 50 cloud hosting?",
      answer: "Yes, we support all add-ons and most third-party applications at Winscloud. Our team is trained to support you with the hosting of all of your applications and troubleshooting in case of any issues.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <section className="min-h-[80vh] rounded-b-3xl flex items-center bg-gradient-to-br from-[#b5b6b9] via-[#102f86] to-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto w-full gap-12 items-center mt-8">

          {/* Left Content */}
          <div className="text-center md:text-left mt-8">
            <motion.h1
              className="text-slate-100 font-bold font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Sage 50 Cloud Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
Anytime, anywhere accounting for your Small and Mid-Sized Business with Sage 50 Hosting Service
            </p>

           <Link to='trial'> <button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-black text-white font-mono text-sm px-6 py-3 rounded-lg shadow-md border border-blue-600 transition duration-300 hover:scale-105">
              <span className="text-green-400">//</span>Consult a Hosting Expert
            </button></Link>
          </div>

        </div>
      </section>

      <main>
        <section>
        <h2 className='text-3xl text-center py-4 font-bold font-montserrat text-textPrimary'>
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
            src="./images/logo/sage50.webp"
            alt="QuickBooks Hosting Service"
          />

        </figure>

        {/* TEXT on the left (or top on mobile) */}
        <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
          <h2 className="font-semibold text-textPrimary   text-xl md:text-xl ">
        Sage 50 cloud hosting is an IaaS (Infrastructure-as-a-Service) solution that offers the robust, desktop version of the easy-to-use Sage 50 application on the cloud. Business owners who choose to host their Sage 50 on cloud save time, money and the hassle of driving to their office every time they need to work on their important business files. With hosted Sage 50, you no longer must stay tethered to your office desktop. Instead, you can access your data on the go, on any device, from wherever you are.
          </h2>
           <p className="font-montserrat text-gray-700 text-sm md:text-base">
             Sage 50 hosting offers the exact same features as the desktop application, along with enhanced storage and computing capabilities. Businesses that transition to the cloud-based Sage 50 have the leverage to allow business access to multiple people from their team so they can collaborate from the comfort of their home at any time of the day. Most Sage 50 hosting providers offer affordable plans where the businesses have the option to scale up as their business grows, without paying a hefty amount every now and then.
            </p>

        </article>
      </section>


          <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex-1">
          <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
            Is your business ready to move to the cloud with Sage 50 hosting service?
          </h1>
          <Link to='/trial'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                  Start One Month Trial
            </button>
          </Link>
        </div>
      </div>

      <section className="px-5 md:px-24 py-16 ">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
     Why Choose Sage 50 Cloud hosting?
        </h1>
        <p className="text-center font-montserrat text-gray-800">The advanced accounting and payroll software helps businesses carry out several key operations such as managing cash flows, sales, invoices, and monitoring payments. The powerful features of the Sage 50 application facilitate handling of a plethora of accounting operations like monitoring revenue, day-to-day expenses, and anticipating future cash flows. Sage 50 hosting is a perfect solution for accountants & bookkeepers, and for small and medium firms operating in manufacturing, construction, retail and wholesale businesses, IT services, law firms, food and beverage, etc. Certain large size businesses also find Sage 50 useful.  
</p>
<p className="text-center mt-4 font-montserrat text-gray-800">In today’s world where businesses need to be caught up with the technological advances, Sage 50 hosting plays a key role in their survival. Cloud computing saves these small businesses time, money and effort to stay updated with their business needs and significantly enhances productivity.
</p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "Anytime, Anywhere Access",
              desc: "Sage 50 hosting solution provides 24/7 access to critical financial data, empowering business owners to stay up to date with their inventory status, daily sales, and other updates from anywhere in the world.",
            },
            {
              title: "High level of productivity",
              desc: "With business data at your fingertips and multiple device compatibility, Sage 50 hosting allows remote teams to work on the same data set simultaneously, promoting uninterrupted productivity.",
            },
            {
              title: "Multi-user Collaboration",
              desc: "With Sage 50 hosting, multiple users can access the same data saved on the cloud hosted application, share information, and ensure timely completion of critical projects by working in real time.",
            },
            {
              title: "Cost Effective Solution",
              desc: "With Sage 50, small businesses can save big on heavy IT infrastructure, floor space, and in-house staff needed for its maintenance. Sage 50 hosting providers charge a minimal amount for all these services.",
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


        <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12  ">
                 <h2 className="font-bold text-3xl mt-3 mb-12 text-center text-textPrimary">
                  Why is Winscloud Matrix the best hosting provider for your business?
                            </h2>
                      
                <div className="grid gap-14 md:grid-cols-3 md:gap-8">
                  <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                 
                   <LuDatabaseBackup />
              
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Add-ons Integration
        </h1>
                    <p className="px-4 text-gray-500">
                      Our team can integrate more than 200 add-ons and third-party apps along with your Sage 50 application to further enhance your business operations in the cloud.
                     </p>
                  </div>
                  <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
                    <FaUsersGear />
              
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Maximum Uptime Guarantee
              </h1>
                    <p className="px-4 text-gray-500">
             Our tech support team is well-trained in handling all sorts of challenges that businesses face before, during and after transitioning to the cloud and always ensures 99.99% up time.
                    </p>
                  </div>
              
                  <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
                       <RiInformation2Fill />
              
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Customizable Pricing
              </h1>
                    <p className="px-4 text-gray-500">
Our hosting plans accommodate all your changing needs and gives you the freedom to pay as you go. We ensure that you get the most out of what you pay and offer a One-month FREE TRIAL. Start Trial
                    </p>
                  </div>
                  <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
                       <GiChoice />
              
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">All Backed Up
              </h1>
                    <p className="px-4 text-gray-500">
Your important business data is automatically backed up twice daily and is accessible for 30 days. You can still restore your data after 30 days, providing protection against accidental deletions and disasters.
                    </p>
                  </div>
                  <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
                       <BiDetail />
              
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Data Security
              </h1>
                    <p className="px-4 text-gray-500">
   We have multiple security measures in place, including network firewalls, authorized access control, antivirus and antimalware protection, and robust SSAE-16-certified data centers.            
                    </p>
                  </div>
                  <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
                      <GrDocumentTest />
              
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">24/7/365 Support
              </h1>
                    <p className="px-4 text-gray-500">
       We have an in-house team of experts who are available seven days a week, throughout the year, to provide you with technical assistance at any time of the day or night.              
                    </p>
                  </div>
                </div>
              </div>

        <SageLinks/>
        <Expriance/>
        <Awards/>
        <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2"> Sage 50 Cloud Hosting Frequently Asked Questions</h1>
        <section className="max-w-3xl mx-auto mt-10 border rounded-lg shadow-lg overflow-hidden">
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
        </section>
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default Sage50Hosting;
