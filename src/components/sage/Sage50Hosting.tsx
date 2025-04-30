import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";

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
    <div className="h-auto w-full pb-10">
      <div className="w-full flex bg-[url('/images/Home/sage1.jpg')] bg-cover bg-center  pt-20 px-5 md:px-20 items-center min-h-[530px]">
        <div className="w-full text-center md:text-left">
          <h1 className="text-white text-3xl md:text-6xl leading-tight">
          Sage 50 Cloud Hosting
          </h1>
          <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
          Sage 50 Cloud Hosting

Anytime, anywhere accounting for your Small and Mid-Sized Business with Sage 50 Hosting Service
          </p>
          <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Consult a Hosting Expert
          </button></Link>
        </div>
      </div>
    </div>

    {/* Adjusted spacing to be responsive */}
    <div className="md:-mt-[30px] -mt-6 px-4">
      <h1 className="text-center text-lg md:text-3xl font-bold">
      How is Sage 50 Cloud Hosting by Winscloud Matrix Beneficial for Your Business?
      </h1>
        <h1 className="font-semibold text-center font-montserrat mt-5 text-sm text-gray-700 md:text-xl">
        The power of Cloud Hosting Blended with Sage 50
        </h1>
    </div>

    <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
      {/* Text Section */}
      <div className="w-full md:w-[45%]">
        <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
        Sage 50 cloud hosting is an IaaS (Infrastructure-as-a-Service) solution that offers the robust, desktop version of the easy-to-use Sage 50 application on the cloud. Business owners who choose to host their Sage 50 on cloud save time, money and the hassle of driving to their office every time they need to work on their important business files. With hosted Sage 50, you no longer must stay tethered to your office desktop. Instead, you can access your data on the go, on any device, from wherever you are.
        </p>
        <p className="font-montserrat text-sm md:text-base">
        Sage 50 hosting offers the exact same features as the desktop application, along with enhanced storage and computing capabilities. Businesses that transition to the cloud-based Sage 50 have the leverage to allow business access to multiple people from their team so they can collaborate from the comfort of their home at any time of the day. Most Sage 50 hosting providers offer affordable plans where the businesses have the option to scale up as their business grows, without paying a hefty amount every now and then.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/sage50.webp" alt="QuickBooks Hosting" />
      </div>
    </div>

    <div className="bg-gray-200 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
      <h1 className="text-center font-semibold font-kanit text-2xl px-4">
      Is your business ready to move to the cloud with Sage 50 hosting service?
      </h1>
      <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
      Start One Month Trial
      </button>
    </div>

    <div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
      <h1 className="font-bold font-kanit">
      Why is Winscloud Matrix the best hosting provider for your business?
      </h1>
     
    </div>


    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Add-ons Integration</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        Our team can integrate more than 200 add-ons and third-party apps along with your Sage 50 application to further enhance your business operations in the cloud.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Maximum Uptime Guarantee</h2>
        <p className="text-gray-700 font-montserrat " >
        Our tech support team is well-trained in handling all sorts of challenges that businesses face before, during and after transitioning to the cloud and always ensures 99.99% up time
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Customizable Pricing</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Our hosting plans accommodate all your changing needs and gives you the freedom to pay as you go. We ensure that you get the most out of what you pay and offer a One-month FREE TRIAL. Start Trial
        </p>
      </div>
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">All Backed Up</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">Your important business data is automatically backed up twice daily and is accessible for 30 days. You can still restore your data after 30 days, providing protection against accidental deletions and disasters.
        </p>
      </div>
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Data Security</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        We have multiple security measures in place, including network firewalls, authorized access control, antivirus and antimalware protection, and robust SSAE-16-certified data centers.
        </p>
      </div>
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">24/7/365 Support</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        We have an in-house team of experts who are available seven days a week, throughout the year, to provide you with technical assistance at any time of the day or night.
        </p>
      </div>
    </div>




      <div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Why Choose Sage 50 Cloud hosting?
  </h1>

  <p className="text-center font-montserrat text-sm mt-2">The advanced accounting and payroll software helps businesses carry out several key operations such as managing cash flows, sales, invoices, and monitoring payments. The powerful features of the Sage 50 application facilitate handling of a plethora of accounting operations like monitoring revenue, day-to-day expenses, and anticipating future cash flows. Sage 50 hosting is a perfect solution for accountants & bookkeepers, and for small and medium firms operating in manufacturing, construction, retail and wholesale businesses, IT services, law firms, food and beverage, etc. Certain large size businesses also find Sage 50 useful.  </p>
  <p className="text-center font-montserrat my-6">In today’s world where businesses need to be caught up with the technological advances, Sage 50 hosting plays a key role in their survival. Cloud computing saves these small businesses time, money and effort to stay updated with their business needs and significantly enhances productivity. </p>

    <div className="flex flex-col  md:flex-row  mt-8">

      <div className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
      <p className=" "><span className="font-kanit font-bold ">Anytime, Anywhere Access- </span>Sage 50 hosting solution provides 24/7 access to critical financial data, empowering business owners to stay up to date with their inventory status, daily sales, and other updates from anywhere in the world.</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">High level of productivity-  </span> With business data at your fingertips and multiple device compatibility, Sage 50 hosting allows remote teams to work on the same data set simultaneously, promoting uninterrupted productivity.</p>
      </div>
    
    <div className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">

      <p className=""> <span className="font-kanit font-bold ">Multi-user Collaboration-</span>With Sage 50 hosting, multiple users can access the same data saved on the cloud hosted application, share information, and ensure timely completion of critical projects by working in real time.</p>
      <p className=" "><span className="font-kanit font-bold ">Cost Effective Solution-</span>With Sage 50, small businesses can save big on heavy IT infrastructure, floor space, and in-house staff needed for its maintenance. Sage 50 hosting providers charge a minimal amount for all these services.</p>
     
    </div>
    </div>
</div>

<h1 className="text-2xl text-center font-bold font-kanit mt-8 px-8">Sage 50 Cloud Hosting Frequently Asked Questions -</h1>

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

export default Sage50Hosting
