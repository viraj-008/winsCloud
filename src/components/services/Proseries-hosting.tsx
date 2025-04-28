import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";

const ProseriesHosting = () => {
     const faqs = [
            {
              question: "What is ProSeries Hosting?",
              answer: "ProSeries Cloud Hosting refers to accessing and working on the ProSeries desktop application on a virtual server using the internet. Hosting the desktop application on the cloud allows tax preparers and accountants to collaborate with their clients remotely, saving them time and effort during the busy tax season.",
             
            },
            {
              question: "What is the cost of ProSeries Tax Software Hosting?",
              answer: "The hosting plans offered by Winscloud Matrix are affordable and flexible. Starting at just $23 per month, our pay as you go model allows you to choose the services you need and pay only for what you have used.",
            },
            {
              question: "Why should I choose Winscloud Matrix for my ProSeries Cloud Hosting?",
              answer: "Having worked with clients from varied domains and several businesses of small and medium sizes, we have years of experience in hosting all accounting and tax applications. Not just that, our team of cloud experts are equipped with the required knowledge to host more than 200 add-ons and third-party apps that assist in making your accounting and tax process smoother.",
            },
            {
              question: "Can I get a ProSeries Cloud Hosting Free Trial before hosting?",
              answer: "Yes, we offer a one-month Free Trial for clients who wish to experience working in the cloud environment before deciding. Ready to take a free trial with Winscloud Matrix? Start FREE TRIAL Now.",
            },
            {
              question: "What security measures are in place to ensure my data is secure with ProSeries hosting?",
              answer: "We understand that the taxpayer’s data is critical and must be protected from the risk of data theft, ransomware, floods, and earthquakes. We ensure that your stored data is safe by implementing the latest security measures like end-to-end data encryption in servers, network firewalls for added protection, multi-factor authentication to ensure only authorized users gain access to the data, anti-virus and anti-malware protection, and multiple redundancies and data center monitoring round-the-clock.",
            },
            {
              question: "Can I collaborate with my clients and members of my team through ProSeries Hosting?",
              answer: "Yes, with ProSeries Hosting, you can collaborate with your clients and team at any time of the day and from any device. You can be on vacation or at any remote location and still stay up to date with your tax operations, the only requirements being a working internet connection.",
            },
            {
              question: "Is my version of ProSeries desktop application supported for cloud hosting?",
              answer: "Yes, we support all versions of ProSeries whether you wish to host ProSeries Basic, Professional, or any other edition that our clients own. We provide the same level of support and security irrespective of the version you have.",
            },
            {
              question: "Is there any support for troubleshooting provided by my top hosting services provider?",
              answer: "Yes, we provide 24/7/365 support related to ProSeries hosting as well as add-ons and third-party apps. Our team is available on email, chat, and call to help you with your issues and is responsive whenever you need.",
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
          ProSeries Tax Software Hosting
          </h1>
          <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
          Secure, scalable and secure tax operations with ProSeries Cloud Hosting
          </p>
          <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Get in Touch with Us
          </button></Link>
        </div>
      </div>
    </div>

    {/* Adjusted spacing to be responsive */}
    <div className="md:-mt-[30px] -mt-6 px-4">
      <h1 className="text-center text-lg md:text-3xl font-bold">
      Why Choose ProSeries Hosting: Elevate your tax operations and crack the full potential of your ProSeries Tax Software Hosting
      </h1>
      
    </div>

    <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
      {/* Text Section */}
      <div className="w-full md:w-[45%]">
        <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
        ProSeries Tax Software Hosting is professional tax software based on the cloud. It helps tax pros and accountants carry out key tasks for their clients like preparing and monitoring returns, filing e-forms, and tracking errors from anywhere, at any time, with efficiency. With the power of cloud, accountants and tax professionals can give their clients peace of mind since ProSeries Hosting keeps their data safe and secure, with bank grade security measures like encrypted servers, network firewalls, and anti-virus.
        </p>
        <p className="font-montserrat text-sm md:text-base">
        With ProSeries Cloud Hosting, tax preparers can experience easy tax filing, enjoy the robust features of the popular tax software, gain 24/7 access to tax data so they can stay on top of their clients’ tax filing anytime, anywhere, and remotely collaborate with their clients and team. This added flexibility, security, and productivity that comes with ProSeries Cloud Hosting significantly elevates the entire tax preparation process.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/pro-hosting.webp" alt="QuickBooks Hosting" />
      </div>
    </div>


    <h1 className="text-center text-lg md:text-2xl my-5 px-4 font-bold">
    Key Features: What makes ProSeries Cloud Hosting stand out?
      </h1>

    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">
        Remote Access</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        ProSeries Cloud hosting facilitates anytime, anywhere access to data. File taxes on the go, work with a remote team in collaboration, and file e-forms well before the deadline.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Data Security</h2>
        <p className="text-gray-700 font-montserrat " >
        Cloud hosting providers ensure that your client’s data is safe and secure with bank-grade security measures like network firewalls, server encryption, anti-virus, anti-malware, and more.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Data Backup</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Be assured of your data accessibility as your data is backed up twice a day, across multiple layers so it is never lost, keeping your accounting and tax operations always running.
        </p>
      </div>
     
    </div>


    <h1 className="text-center text-lg md:text-2xl my-5 px-4 font-bold">
    How to Set Up Your ProSeries Tax Software on the Cloud in 3 Simple Steps?
      </h1>

      <p className="text-center px-4 font-montserrat">Team Winscloud can help you transition to ProSeries Hosting seamlessly in 3 easy steps –</p>


      <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">
        Choose a hosting plan that best suits your business</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        We offer both dedicated as well as shared hosting so you can choose the option that fits in with your budget and meets your hosting needs. You can scale up or down as you go hassle-free.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Share your ProSeries License and other details</h2>
        <p className="text-gray-700 font-montserrat " >
        Once you provide our cloud expert with your application license, software link, data you need to be transferred to the cloud and chosen plan details, we will begin your cloud transition process.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Start Your Tax Preparation Process in the Cloud</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Our experts are trained to complete your transition to cloud in just 120 minutes, depending on your data. Your data is safely and securely migrated to the cloud with maximum up time, so you can start your clients’ tax prep right away.
        </p>
      </div>
     
    </div>







    <div className="bg-gray-200 my-8 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
      <h1 className="text-center font-semibold font-kanit text-2xl px-4">
      Ready to see how ProSeries Cloud Hosting helps with tax preparation?
      </h1>
      <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
      Try ProSeries Hosting for FREE
      </button>
    </div>

    

    
    <div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Why Choose Winscloud Matrix for Your ProSeries Cloud Hosting: Anytime, Anywhere Advantage with Unceasing Expert Support
  </h1>



    <div className="flex flex-col  md:flex-row  mt-8">

      <div className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
      <p className=" "><span className="font-kanit font-bold ">Remote Collaboration-</span>With Winscloud Matrix ProSeries Hosting, you can collaborate with your clients and other professionals from your team on-the-go, breaking all the location barriers. </p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Effective Hosting Cost- </span>Our hosting plans are affordable, flexible, and scalable, giving you complete freedom to choose services that you require and pay only for what you use.</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Bank Grade Security- </span>We make conscious efforts to keep your data integrity intact, with multiple layers of security such as firewall, encryption, backups, monitoring, and anti-virus protection in place.

</p>
      </div>
    
    <div className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">

      <p className=""> <span className="font-kanit font-bold ">High Up Time Guarantee- </span>Our high-speed servers and secure and reliable networks ensure that you get maximum up time with your ProSeries cloud hosting, ensuring a high level of productivity.</p>
      <p className=" "><span className="font-kanit font-bold ">Multiple Device Compatibility-</span>ProSeries Cloud hosting allows tax preparers and accountants to access the software and tax data from any device connected with the internet, including laptop, phone, tablet, and desktop.</p>
      <p className=" "><span className="font-kanit font-bold ">24×7 Technical Support- </span>Our technical support team is dedicatedly working round-the-clock to provide you with assistance, troubleshooting, and guidance via email, chat, and call.</p>
     
    </div>
    </div>
</div>


<h1 className="text-2xl text-center font-bold font-kanit mt-8 px-8">ProSeries Cloud Hosting Frequently Asked Questions (FAQs) -</h1>

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

export default ProseriesHosting
