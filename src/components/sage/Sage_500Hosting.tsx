import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
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
    <div className="h-auto w-full pb-10">
      <div className="w-full flex bg-gradient-to-r from-black via-pink-500 to-blue-500 pt-20 px-5 md:px-20 items-center min-h-[530px]">
        <div className="w-full text-center md:text-left">
          <h1 className="text-white text-3xl md:text-6xl leading-tight">
          Sage 500 ERP Hosting
          </h1>
          <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
          Anytime, anywhere accounting & high productivity with Sage 500 ERP Hosting
          </p>
          <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Try Sage 500 Hosting for FREE
          </button></Link>
        </div>
      </div>
    </div>

    {/* Adjusted spacing to be responsive */}
    <div className="md:-mt-[30px] -mt-6 px-4">
      <h1 className="text-center text-lg md:text-3xl font-bold">
      Business Operations Simplified with Sage 500 Cloud Hosting
      </h1>
        <h1 className="font-semibold text-center font-montserrat mt-5 text-sm text-gray-700 md:text-xl">
        Team Collaboration On-the-Go
        </h1>
    </div>

    <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
      {/* Text Section */}
      <div className="w-full md:w-[45%]">
        <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
        Sage 500 hosting is business management software blended with the cloud which helps businesses drive productivity, add efficacy to their day-to-day operations, and minimize costs with its robust features. Businesses from multiple domains find Sage 500 a valuable addition to their routine operations, helping them make informed decisions that promote profitability.
        </p>
        <p className="font-montserrat text-sm md:text-base">
        Sage 500 offers customization to accommodate individual business needs. Retail businesses can stay on track with their sales and inventory, ensuring that they always have product availability. The automated supply chain feature of Sage 500 and inventory management contributes to customer satisfaction, forecasts consumer behavior, and maximizes profits. With Sage 500 hosting, these features are amplified 10x. Multiple teams can collaborate in real time to stay on top of these features and ensure seamless business operations round-the-clock.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/sage-500.webp" alt="QuickBooks Hosting" />
      </div>
    </div>

    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Real time Collaboration</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        Sage 500 cloud hosting provides an integrated cloud environment that facilitates multi-user access to financial data saved in the cloud in real time.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Round the Clock Tech Support</h2>
        <p className="text-gray-700 font-montserrat " >
        A good Sage 500 cloud hosting services provider like Winscloud Matrix offers 24/7 tech support to assist with troubleshooting and other technical issues.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Third-Party Apps Supported</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Sage 500 hosting supports an infinite number of add-ons and third-party apps to be hosted on the cloud for enhanced productivity and ease of managing business.
        </p>
      </div>
     
    </div>


    <div className="bg-gray-200 my-8 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
      <h1 className="text-center font-semibold font-kanit text-2xl px-4">
      Ready to get started with Sage 500 Cloud Hosting?
      </h1>
      <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
      Start Your Free Trial NOW
      </button>
    </div>

    <div className="w-[90%] mx-auto my-8">
        <h1 className="text-center font-semibold font-kanit text-2xl px-4">Simple Steps to Migrate to the Cloud with Sage 500 Cloud Hosting ?</h1>
        <p className="px-4 font-montserrat my-4">If you are ready to embrace the cloud, you can migrate your financial data and your desktop-based Sage 500 ERP application to the cloud in the following steps –</p>
        <ul  className="list-disc pl-5">
            <li>Find the best Sage 500 hosting provider with the right experience for your business</li>
            <li>Provide your Sage 500 ERP License information to your chosen hosting provider</li>
            <li>Share any specific requirements with them</li>
            <li>Provide access to your business data and migrate safely to the cloud environment</li>
            <li>Receive your cloud credentials from your hosting provider</li>
        </ul>

        <h1 className="font-semibold font-kanit text-2xl px-2 my-5">Post your FREE DEMO login and run your business on-the-go</h1>

        <div className="flex justify-center">
    <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
    Contact Us for Cloud Hosting
    </button>
  </div>
    </div>


    
    <div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Why Choose Winscloud Matrix for your Sage 300 ERP cloud hosting services?
  </h1>

  <p className="font-montserrat px-4 my-2 text-sm text-center">The right Sage 500 ERP cloud hosting services provider is critical when migrating your business to the cloud. Winscloud Matrix comes with the right experience, success stories, and features that make them the perfect choice for Sage 500 hosting –</p>

    <div className="flex flex-col  md:flex-row  mt-8">

      <div className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
      <p className=" "><span className="font-kanit font-bold ">Remote Access-</span> Sage 500 cloud hosting with Winscloud promotes remote work, multi-user collaboration, and access to the same set of data from anywhere at any time. </p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Effective Hosting Cost- </span>Our hosting plans start from a minimal price of $23 per month. Our flexible pay-as-you-go pricing model allows you to scale up/down as per your business needs.</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Multiple Device Support- </span>By hosting your Sage 500 ERP on the cloud, you can access your critical data from any internet connected device on-the-go, including your smart phone, laptop, desktop computer, and tablet.</p>
      </div>
    
    <div className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">

      <p className=""> <span className="font-kanit font-bold ">Technical Assistance 24/7/365-</span>Our team of technical professionals are readily available round-the-clock and are trained to provide all sorts of assistance and tech support for a smooth cloud experience</p>
      <p className=" "><span className="font-kanit font-bold ">Bank-grade Security–</span>We ensure that you have better control over your data and unparalleled security with measures like network firewall, routine monitoring redundancies, anti-virus, anti-malware, dedicated servers, etc.</p>
      <p className=" "><span className="font-kanit font-bold ">Data Backup Guarantee  –</span>Your data is backed up twice a day to ensure that your critical business information is always accessible, and encrypted copies are saved in three different locations for added safety.</p>
     
    </div>
    </div>
</div>


<h1 className="text-2xl text-center font-bold font-kanit mt-8 px-8">Sage 500 ERP Frequently Asked Questions-</h1>

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
  

  </>
  )
}

export default Sage_500Hosting
