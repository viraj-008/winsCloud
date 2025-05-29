import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { GrDocumentTest } from "react-icons/gr";
import QuickLinks from "../QuickLinks";
import Experience from "../Expriance";
import Awards from "../Awards";

const QickBooks_Desktop = () => {
  const faqs = [
    {
      question: "How can I reach your team for QuickBooks Cloud Hosting services?",

      answer: "Our team is available via phone, email and chat. Visit our website to contact us https://www.winscloudmatrix.com/"
    },
    {
      question: "What is Winscloud Matrix’s quickbooks desktop hosting pricing?",
      answer: "Our quickbooks desktop hosting pricing starts at just $23 per month, Check out our detailed hosting plans here – https://www.winscloudmatrix.com/pricing/",
    },
    {
      question: "How much time does it take to transition to Cloud Hosting for QuickBooks Desktop?",
      answer: "It usually take 2 to 4 hours to transition to QuickBooks Desktop hosting. It may take longer if your data is too heavy.",
    },
    {
      question: "Can I get a Demo before buying a plan?",
      answer: "We offer a one-month FREE TRIAL to all our users to help them explore QuickBooks Desktop hosting. Contact our cloud expert now to START YOUR FREE TRIAL",
    },
    {
      question: "Can I customize my QuickBooks Desktop hosting plan as per my business needs?",
      answer: "Our quickbooks cloud hosting pricing is flexible so as to accommodate all your business needs. You can scale up and down without paying anything extra.",
    },
    {
      question: "I use multiple QuickBooks applications. Do you provide QuickBooks Desktop Hosting for all of them?",
      answer: "We offer cloud hosting for all QuickBooks desktop applications, including QuickBooks Pro, Premier, Enterprise, POS, and Canada.",
    },
    {
      question: "Do I need to provide a license for my QuickBooks Desktop hosting?",
      answer: "Yes, it is mandatory to provide your QuickBooks desktop license before transitioning to the cloud. Your cloud expert might also need additional details from you to begin your cloud transition.",
    },
    {
      question: "Can I authorize more than one person to access my QuickBooks Desktop Cloud hosting?",
      answer: "Multiple users can be authorized to access your QuickBooks hosted desktop, if you want. All authorized users can access the data safely and collaborate in real time from any internet connected device.",
    },
    {
      question: "I might need technical assistance during and after my transition to quickbooks hosted desktop. Do you provide any support for the same?",
      answer: "Our technical support team works 24/7/365 to assist you with troubleshooting any issue that you may be facing.",
    },
    {
      question: " Do you provide dedicated hosting for QuickBooks Desktop?",
      answer: "Yes, we offer both dedicated and shared hosting plans for QuickBooks hosted Desktop. You can choose any of the two types of hosting, depending on your needs.",
    },
    {
      question: " What should I do if I wish to cancel my QuickBooks Desktop Hosting plan? Are there any hidden cancellation charges?",
      answer: "You are never bound by any strict policy wherein you are charged for cancelling service anytime. You can simply notify us 30 days prior to your cancellation date.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="min-h-[80vh] rounded-b-3xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12">
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
            QuickBooks Desktop Cloud Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
Anytime, anywhere access to business with Cloud Hosting for QuickBooks Desktop
            </p>

            <button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-black text-white font-mono text-sm px-6 py-3 rounded-lg shadow-md border border-blue-600 transition duration-300 hover:scale-105">
              <span className="text-green-400">//</span>Get QuickBooks Desktop Hosting Now
            </button>
          </div>

        </div>
      </section>

      <main>
        <section>
          <h2 className='text-3xl text-center py-4 font-bold font-montserrat text-textPrimary'>
            QuickBooks Desktop Hosting: Run your favorite QuickBooks Desktop Application from Anywhere, at Anytime
          </h2>
        </section>

         <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
  {/* IMAGE on the right (or bottom on mobile) */}
  <figure className="w-full md:w-1/2 flex justify-center">
  <img
  className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
  src="./images/logo/qb-desktop.webp"
  alt="QuickBooks Hosting Service"
/>

  </figure>

  {/* TEXT on the left (or top on mobile) */}
  <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
    <h2 className="font-semibold text-textPrimary   text-xl md:text-xl ">
QuickBooks desktop cloud hosting means accessing the desktop version of QuickBooks software on a remote server with the help of the internet. With only authorized users permitted to access QuickBooks desktop cloud hosting, users can safely access their critical business data, work on the same set of files in real-time, irrespective of where they are located.    </h2>
   
    <p className="font-montserrat text-gray-700 text-sm md:text-base">
QuickBooks Desktop Hosting providers take care of all the technical aspects of transitioning to the cloud. Winscloud Matrix, for instance, provides everything from a safe and secure remote server, the IT infrastructure needed for cloud hosting QuickBooks Desktop software, 100% data backup, security measures to protect data from risks like theft, and technical support. Users who transition to cloud hosting for QuickBooks Desktop enjoy enhanced collaboration with their teams, higher productivity, and safety of their business data, all at a minimal cost.

    </p>
  </article>
</section>

<div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
           
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
  Six Easy Steps to Transition to QuickBooks Desktop Cloud Hosting </h1>
    <p className="text-gray-100 font-josefin text-center">
            Migrating to the cloud can be done in a few easy steps. Having the right QuickBooks Desktop Hosting Provider on your side can make the process simpler and faster. With Winscloud, you are assigned a cloud expert right from the start who will assist you with your cloud migration. You can also opt for a one-month Free Trial to get the real experience of running your business from the cloud. To begin your transition, here are the simple steps you need to follow
          </p>

         
           <Link to="/trial">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
              Start FREE Trial - Claim Top hosting Services Today!
            </button>
             </Link>
          </div>

        </div>


   <div className="h-full my-8 w-full bg-gradient-to-br from-blue-50 to-gray-100 p-4   pt-12 p-4 ">
  <div className="grid gap-14 md:grid-cols-3 md:gap-8">
    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
   
     <LuDatabaseBackup />

      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Wait for Data Transfer</h1>
      <p className="px-4 text-gray-500">
You can choose to transfer all your data on the cloud. However, it may take a few hours to safely transfer your data, depending on its size.
      </p>
    </div>
    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-400 shadow-lg shadow-teal-500/40">
      <FaUsersGear />

      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Access Using Credentials
</h1>
      <p className="px-4 text-gray-500">
You can access your QuickBooks Desktop cloud hosting using the username and password provided by your hosting provider. You can also choose to add more authorized users to your cloud hosting for QuickBooks desktop.
      </p>
    </div>

    <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-green-500 shadow-rose-500/40">
         <RiInformation2Fill />

      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Provide Your License Information
</h1>
      <p className="px-4 text-gray-500">
Your cloud hosting provider will need you to provide your license information since it is mandatory to share your QuickBooks License details with your hosting provider to host it in the cloud.
      </p>
    </div>
    <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-orange-500 shadow-rose-500/40">
         <GiChoice />

      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Select a Hosting Plan
</h1>
      <p className="px-4 text-gray-500">
At Winscloud, we offer both dedicated and shared hosting plans. You can choose a plan that suits your business needs the best. Enquire quickbooks desktop hosting pricing now.
      </p>
    </div>
    <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-rose-500/40">
         <BiDetail />

      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Provide Your Details
</h1>
      <p className="px-4 text-gray-500">
Contact our cloud expert at Winscloud Matrix and provide your software details, other relevant information and hosting requirements. Your preferred number of users, storage needs, hosting preferences like shared or dedicated hosting should all be conveyed to your cloud expert.

      </p>
    </div>
    <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-500 shadow-rose-500/40">
        <GrDocumentTest />

      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Begin Access Testing
</h1>
      <p className="px-4 text-gray-500">
Once you have access to your QuickBooks Desktop cloud hosting, test the platform by using it.

      </p>
    </div>
  </div>
</div>

   <div>
    <h1 className="text-3xl md:text-4xl text-center font-extrabold font-serif text-blue-900 mb-4">
         We Host All Versions of Your Most Loved QuickBooks Desktop
          </h1>
          <p className="max-w-[90%] mx-auto text-center font-montserrat">Maximize efficiency in your accounting and tax operations with affordable and secure QuickBooks Desktop Hosting. Let our team handle your QuickBooks Desktop Hosting, so you can focus on what is most important – YOUR Business!</p>
       <QuickLinks/>
     </div>

      



     



        <div className="bg-gradient-to-br w-[96%] my-7 mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
     
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Winscloud Matrix: Your Trusted QuickBooks Cloud Hosting Provider</h1>
             <Link to='/Get-in-Touch'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition">
               Contact QuickBooks Hosting Expert
            </button>
             </Link>
          </div>

          {/* React Icon */}

        </div>




     <section className="px-5 md:px-24 py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
           Winscloud Matrix: Your Trusted QuickBooks Cloud Hosting Provider
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
Winscloud, an experienced cloud hosting provider, has helped multiple businesses from an array of domains in their smooth transition to the cloud and growing from there. We do not just offer QuickBooks hosting solutions to small and medium business owners – we offer a commitment to ensure data security, uninterrupted business access that ensures maximum customer satisfaction, and support at any time of day and night. Here are some of the many benefits of QuickBooks desktop cloud hosting with Winscloud Matrix –
</p>

        

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Flexibility",
                desc: "Our QuickBooks Cloud hosting solution offers unparalleled flexibility to businesses, facilitating multi-user collaboration across multiple locations. With access to only authorized users, SMBs can safely collaborate on the same set of data, in real-time.",
              },
              {
                title: "Customization",
                desc: "We understand that every business has its own unique needs. Therefore, we ensure that we accommodate all unique needs for the most satisfactory cloud experience. Whether you need more storage, dedicated hosting, scalable quickbooks desktop hosting pricing, we have it all.",
              },
              {
                title: "Cost-efficienc",
                desc: "Our quickbooks desktop hosting pricing starts at just $23 per month. Not only is it affordable, but our pricing plans are also cost efficient since you only have to pay for hosting services, without worrying about setting up an IT infrastructure or paying separately for tech support",
              },
              {
                title: "Maximum Uptime",
                desc: "Our state-of-the-art and reliable SSAE-16 Type-II (SOC-2) data centers ensure 99.99% accessibility, helping minimize downtime. With this high availability, users can enjoy high business productivity and uninterrupted business operations.",
              },
              {
                title: "Support",
                desc: "Winscloud’s technical support team is highly trained to tackle all sorts of QuickBooks Desktop Hosting issues that businesses might face before, during or after their transition to the cloud. The team works tirelessly, round-the-clock to troubleshoot.",
              },
              {
                title: "Maximum Uptime",
                desc: "Our top-notch security measures such as network firewall, daily monitoring redundancies, anti-virus, anti-malware, among others to ensure your QuickBooks Desktop Hosting data is protected at all levels, round-the-clock.",
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

       <Awards />

                    <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2">QuickBooks Desktop FAQs</h1>
        <section className="max-w-3xl mx-auto my-6 border rounded-lg shadow-lg overflow-hidden">

          {faqs.map((faq, index) => (
            <article key={index} className="border-b last:border-b-0">
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
            </article>
          ))}
        </section>
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default QickBooks_Desktop;
