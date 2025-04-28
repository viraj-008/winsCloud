import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
const Lecerte_Hosting = () => {


   const faqs = [
          {
            question: "What is Lacerte Tax Hosting?",
            answer: "Lacerte Hosting means your desktop tax application is hosted on a remote cloud server, making it accessible on any device such as laptop, cellphone, desktop or tablet, with the help of the internet. Anyone who hosts their Lacerte on the cloud can access their data on-the-go and collaborate with their tax professionals and remote teams from anywhere in the world.",
           
          },
          {
            question: "How much does Lacerte tax software hosting cost?",
            answer: "Lacerte Hosting by Winscloud Matrix starts at just $23 per month. The amount you pay depends on your number of users, hosting type you choose, and your storage needs. You can easily scale up and down as per your business needs with our pay as you go model.",
          },
          {
            question: "What if I don’t want to host my desktop software anymore? Can I get a FREE Trial of Lacerte Hosting?",
            answer: "Yes, we provide a one-month long free trial to our clients. You can use your cloud-hosted Lacerte and get firsthand experience of the cloud environment before making any decision. Your business still stays up and your data is completely secure, promising maximum up time. Pay for your preferred plan only when you are satisfied with our services",
          },
          {
            question: "Does Lacerte Hosting save time?",
            answer: "Lacerte hosting is a time-saving tax preparation and filing solution based in the cloud. Users can work on their essential tax files and carry out their operations from anywhere across the globe without needing to physically travel to their office to conduct these essential activities. Setting up on the cloud only takes 120 minutes, depending on your data, and you can enjoy up time even during the transition.",
          },
          {
            question: "is my Lacerte Hosting safe?",
            answer: "Yes, your data on Lacerte Tax Hosting is completely secure. A good tax software hosting provider like Winscloud Matrix ensures there are multiple safety measures in place such as network firewall, anti-virus and anti-malware, data encryption, multi-factor authentication, and secure login details that are shared only with the authorized personnel.",
          },
          {
            question: "Does Lacerte Hosting support add-ons integration and third-party applications?",
            answer: "Yes, you can host as many add-ons and third-party applications as you want along with your Lacerte hosting. Our cloud expert team at Winscloud can provide end-to-end support with hosting of your preferred add-ons and other apps.",
          },
          {
            question: "Will I be provided with any support during my transition to the cloud?",
            answer: "Yes, we offer 24/7 support to our clients all year round. Our team is well trained to tackle all sorts of issues that you might face during and after your transition to the cloud. Contact our team NOW for support!.",
          },
          {
            question: "How many versions of Lacerte can I host in the cloud?",
            answer: "You can host multiple versions of Lacerte Tax software in the cloud.",
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
          Lacerte Tax Software Hosting
          </h1>
          <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
          Streamline your workflow and organize your tax operations with Lacerte Hosting
          </p>
          <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Start One-month FREE Trial
          </button></Link>
        </div>
      </div>
    </div>

    {/* Adjusted spacing to be responsive */}
    <div className="md:-mt-[30px] -mt-6 px-4">
      <h1 className="text-center text-lg md:text-3xl font-bold">
      Lacerte Hosting: A Modern Solution to Facilitate Business Growth, Team Collaboration, and Seamless Tax Filing
      </h1>
    
    </div>

    <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
      {/* Text Section */}
      <div className="w-full md:w-[45%]">
        <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
        Lacerte Tax Software hosting means accessing the desktop Lacerte application on a virtual server via the internet. Hosting Lacerte Tax Software on the cloud offers immense flexibility to access the software and its data from any remote location. Multiple people can collaborate and work on the same set of data to seamlessly file taxes and prepare reports efficiently, therefore optimizing the workflow and enhancing team’s productivity to a greater extent.
        </p>
        <p className="font-montserrat text-sm md:text-base">
        Lacerte Tax Hosting also facilitates easy and timely updates of the desktop application, promotes safety and data security in the cloud environment, and saves time since you do not need to travel to the office every time to work on your data. Lacerte Tax Software hosting can be accessed from anywhere, at any time.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/lace-hosting.webp" alt="QuickBooks Hosting" />
      </div>
    </div>

    <div className=" my-8 px-4">
      <h1 className="text-center text-lg md:text-3xl font-bold">
      How to transition to Lacerte Tax Hosting?
      </h1>
      <p className="font-montserrat text-center mt-2">Winscloud helps businesses transition to the cloud environment with Lacerte Hosting in three simple steps –</p>
    
    </div>

    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Choose your preferred hosting plan</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        You can choose among our dedicated and shared hosting plans and select a plan that accommodates your number of users and storage needs.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Share your Lacerte application details</h2>
        <p className="text-gray-700 font-montserrat " >
        Provide your license details and your hosting plan details with our cloud expert so they can progress further with your cloud transition
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Begin your Lacerte cloud hosting journey</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Your cloud setup will be done in 120 minutes, and you can effortlessly begin your journey with cloud-integrated Lacerte tax software.
        </p>
      </div>
     
    </div>


    <div className="bg-gray-200 my-8 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
      <h1 className="text-center font-semibold font-kanit text-2xl px-4">
      Need our help to decide on the best plan for your business? Take a FREE Trial Before Taking Any Decision
      </h1>
      <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
      Start Your Free Trial
      </button>
    </div>



    
    <div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Winscloud Matrix Lacerte Tax Hosting: Why should you choose Lacerte Hosting with Winscloud for a seamless Tax Season?
  </h1>

  <p className="font-montserrat px-4 my-2 text-sm text-center">Lacerte Tax Hosting takes your tax practice to the next level. One of the most popular software for tax professionals, firms and business owners, Lacerte Hosting aids you with flexibility, security, and accessibility.–</p>

    <div className="flex flex-col  md:flex-row  mt-8">

      <div className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
      <p className=" "><span className="font-kanit font-bold ">Enhanced Bandwidth-</span>  Lacerte Hosting can accommodate multiple users to work on the same set of data for enhanced productivity and collaboration, ensuring higher levels of productivity and efficacy in tax filing </p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Maximum Uptime Guarantee-</span>We ensure 99.99% up time for your business and tax operations before, during and after transitioning to the cloud so your data saved on the application is always accessible by you and your team.</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Pay As You Go- </span>Our flexible pay-as-you-go model allows you to scale up and down as per your business needs. You only pay for your preferred number of users, storage capacity and type of hosting.</p>
      </div>
    
    <div className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">

      <p className=""> <span className="font-kanit font-bold ">Data Back-Up-</span>Your data is backed up across multiple layers so that it is always accessible. It also provides security against threats like theft, accidental deletion of data and breakdown of data centers.</p>
      <p className=" "><span className="font-kanit font-bold ">Trained Support Staff- </span>Our technical support team is trained and experienced at hosting all versions of Lacerte for small to large-sized businesses. They can tackle any issue that you may face and assist with troubleshooting.</p>
      <p className=" "><span className="font-kanit font-bold ">Seamless Cloud Setup- </span>Setting up Lacerte Hosting with Winscloud Matrix is smooth, fast and takes only around two hours to transition your entire data to the cloud, ensuring easy access to your data and tools.</p>
     
    </div>
    </div>
</div>


<h1 className="text-2xl text-center font-bold font-kanit mt-8 px-8">Most Asked QuickBooks Enterprise Hosting Questions -</h1>

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

export default Lecerte_Hosting

