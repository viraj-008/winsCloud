import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
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
  console.log("Sage_Hosting component rendered");
  return (
    <>
      <div className="w-full flex bg-[url('/images/Home/sage1.jpg')] bg-cover bg-center  pt-20 px-5 md:px-20 items-center ">
        <div className="w-full text-center md:text-left">
          <h1 className="text-white  text-3xl md:text-6xl leading-tight md:pt-6">
          Sage Hosting
          </h1>
          <p className="text-base  text-gray-200 md:text-3xl mt-4 md:mt-7">
          Elevate your accounting experience with cloud-based Sage ERP & CRM applications with Winscloud Sage Hosting Provider
          </p>
          <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Get Free Trial Now
          </button></Link>
        </div>
      </div>

    {/* Adjusted spacing to be responsive */}
    <div className="p-4">
      <h1 className="text-center font-serif text-lg md:text-3xl font-bold">
      Enhanced Flexibility and Business Accessibility with Sage Hosting
      </h1>
        <h1 className="font-semibold text-center font-montserrat mt-5 text-sm text-gray-600 md:text-xl">
        Host Your Sage Desktop & Experience the Power of the Cloud
        </h1>
    </div>

    <div className="flex flex-col  md:flex-row justify-between p-4 md:p-8">
      {/* Text Section */}
      <div className="w-full text-justify font-josefin text-gray-600 md:w-[45%]">
        <p className=" my-2 md:my-4 text-sm md:text-base">
        Sage hosting means taking your licensed desktop Sage accounting, ERP and CRM applications to the cloud to
         experience the flexibility and security of the cloud in your day-to-day business operations. Sage Cloud hosting allows multi-user collaboration in real-time, from anywhere across the world. The enhanced productivity that 
        comes with Sage hosting improves customer satisfaction, little to no errors in data, and saves time.
        </p>
        <p className=" text-sm md:text-base">
        Unlike Online versions, Sage hosting comes packed with all the features of the desktop application, thus
         adding to the efficiency. It can prove to be an excellent service for various businesses like accounting firms, retail & 
        wholesale businesses, various types of industries, food and beverage, and not-for-profit organizations.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/sage-hosting.jpg" alt="QuickBooks Hosting" />
      </div>
    </div>

    <div className="bg-gray-200 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
      <h1 className="text-center font-semibold font-kanit text-2xl px-4">
      Are you ready to experience Sage Hosting for your business?
      </h1>
      <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
      Contact Our Sage Hosting Expert
      </button>
    </div>

    <div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
      <h1 className="font-bold font-kanit">
      Benefits of Sage Hosting: What does the cloud have to offer?
      </h1>
     
    </div>


    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Desktop-like Features</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        Hosting your Sage application on the cloud makes the robust features of the desktop application accessible on the virtual server.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/teamwork.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Access On-the-Go</h2>
        <p className="text-gray-700 font-montserrat " >
        Enjoy easy access to your financial data from multiple devices like your phone, tablet, desktop at home, or laptop with Sage hosting.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Multi-User Collaboration</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Sage hosting supports multiple users access to the same set of data, in real time, making collaboration feasible and accounting operations fast.
        </p>
      </div>
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Enhanced Productivity</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        With all your financial data accessible round-the-clock and on any device, your data stays updated, leading to enhanced customer satisfaction. 
        </p>
      </div>
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Cost Effective</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Eliminate the need for an expensive and space-consuming, in-house IT infrastructure and a dedicated IT team for maintenance and support.
        </p>
      </div>
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Automatic Updates</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Sage hosting promotes error free updates of your books and critical financial data, eradicating the scope for manual errors.
        </p>
      </div>
    </div>

    <h1 className="text-3xl text-center font-bold font-kanit mt-8 px-8">We host all versions of Sage Applications: Choose the one that suits your business the best</h1>
    <p className="text-blue-500 text-center mt-6 pr-2">sage 50 
      <span className="text-black ml-2">|</span> sage 100 <span className="text-black">|</span>  sage 300 <span className="text-black">|</span>  sage 500</p>



      <div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Winscloud QuickBooks Enterprise Cloud Hosting: Powerful Features That Help Your Business Grow
  </h1>
  <p className="text-center font-montserrat text-sm mt-3">Flexible, Productive, and Secure Accounting</p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-8 font-montserrat text-sm p-3">
  {/* Row 1 */}
  <div>
    <p>
      <span className="font-kanit font-bold">Data Security - </span>
      Winscloud Matrix has multiple layers of security in place such as SSAE 16 certified data centers, automated data backups, anti-virus and anti-malware, network firewalls, and two-factor verification to keep your data safe.
    </p>
  </div>
  <div>
    <p>
      <span className="font-kanit font-bold">Uptime Guarantee - </span>
      At Winscloud, we understand the importance of business continuity. Our SSAE-16 Type-II (SOC-2) data centers ensure maximum uptime with uninterrupted access to your business.
    </p>
  </div>

  {/* Row 2 */}
  <div>
    <p>
      <span className="font-kanit font-bold">Round-the-Clock Tech Support - </span>
      Our dedicated, in-house tech team provides support around the clock. Whether you need technical guidance or help with troubleshooting, our team is always at your disposal to provide the necessary assistance.
    </p>
  </div>
  <div>
    <p>
      <span className="font-kanit font-bold">Flexible Plans - </span>
      Winscloud’s pricing plans offer scalability and cost optimization. Our pricing model is flexible, allowing you to pay as you go based on the actual cloud usage.
    </p>
  </div>

  {/* Row 3 */}
  <div>
    <p>
      <span className="font-kanit font-bold">Scalability - </span>
      Modern businesses have dynamic needs. Our cloud infrastructure accommodates these changing needs of small businesses, giving them the freedom to scale up and down as required.
    </p>
  </div>
  <div>
    <p>
      <span className="font-kanit font-bold">120-Min Data Migration - </span>
      Our team of experienced professionals are trained to seamlessly transfer business data saved on your desktop application to the cloud in just 2 hours.
    </p>
  </div>
</div>




</div>

<h1 className="text-2xl text-center font-bold font-kanit mt-8 px-8">Sage Hosting Frequently Asked Questions (FAQs) -</h1>

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

  
<Partner />
  </>
  )
}

export default Sage_Hosting
