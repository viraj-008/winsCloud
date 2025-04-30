import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";

const Sage100Hosting = () => {
    const faqs = [
        {
          question: "What is Sage 100 hosting?",
          answer: "Sage 100 cloud hosting services allows business owners, CPAs, and bookkeepers to access their critical business files on the cloud and their most useful Sage 100 ERP desktop with the help of the internet. This allows owners to collaborate with their remote team on the same set of data, at any time and on any day.",
         
        },
        {
          question: "How much does Sage 100 cloud hosting services cost?",
          answer: "Winscloud Matrix Sage 100 cloud hosting services shared plans start from $23 and dedicated hosting plans start from $69. You can scale up or down as you go and pay only for what you use. The features vary depending on the plan you choose.",
        },
        {
          question: "Can I host my add-ons along with Sage 100 hosting?",
          answer: "Yes. Our cutting-edge, cloud servers can accommodate as many servers as you want. Winscloud’s team of technical experts can aid with hosting all sorts of add-ons and third-party apps that optimize accounting and make business management easier.",
        },
        {
          question: "Is my company data safe and secure with Sage 100 cloud hosting services?",
          answer: "Yes, your data is safe with Winscloud Matrix’s Sage 100 cloud hosting services. We have multiple layers of security in place to ensure tight security to protect your data such as network firewall, multiple monitoring redundancies daily, authorized controls, data encryption, anti-virus and anti-malware, among other measures.  .",
        },
        {
          question: "What will happen to my existing data on Sage 100 desktop? Will my data be transferred to cloud with Sage 100 hosting?",
          answer: "Our tech team will provide you with complete assistance to transfer all your data saved on your desktop Sage 100 ERP software to the cloud. We ensure that the data transfer is seamless with maximum uptime during the transition.",
        },
        {
          question: "How safe are the data centers? Is there any protection against theft, flood, or disaster like earthquake?",
          answer: "Our top-notch SSAE 16 certified data centers have robust security measures in place to protect your critical data against cyber-attacks, ransomware attacks, natural disasters like flooding and earthquake, and theft. Your data is safe, always accessible, ultimately helping businesses run smoothly and maximize customer satisfaction.",
        },
        {
          question: "How is Sage 100 useful for small businesses?",
          answer: "Sage 100 ERP cloud hosting provides businesses with secure login credentials that ensure only authorized users can access the data saved on the cloud-based application. Multiple users can access and work on the same set of files in real-time, on the go, from any device and at any time. Hosting Sage 100 on the cloud also ensures 99.99% up time, greatly elevating productivity and customer happiness.",
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
          Sage 100 ERP Application Hosting
          </h1>
          <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
          Access and manage your small and mid-sized business from anywhere, at any time with Sage 100 cloud hosting
          </p>
          <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Get Sage 100 Hosting
          </button></Link>
        </div>
      </div>
    </div>

    {/* Adjusted spacing to be responsive */}
    <div className="md:-mt-[30px] -mt-6 px-4">
      <h1 className="text-center text-lg md:text-3xl font-bold">
      Sage 100 Cloud Hosting to Elevate Your Accounting Experience
      </h1>
        <h1 className="font-semibold text-center font-montserrat mt-5 text-sm text-gray-700 md:text-xl">
        Top Reasons to Move Your Sage 100 ERP to the Cloud
        </h1>
    </div>

    <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
      {/* Text Section */}
      <div className="w-full md:w-[45%]">
        <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
        Sage 100 ERP is one of the most sought-after and user-friendly accounting software for small businesses. However, sticking to the traditional software has its own set of cons. With the increased need for businesses to stay online and accessible round-the-clock, it is important to move to the cloud. Sage 100 ERP hosting helps install and set up the desktop software on virtual servers, making it accessible on any device, from any location, and at any time of day, via the internet.
        </p>
        <p className="font-montserrat text-sm md:text-base">
        Sage 10 ERP hosting is an exceptional solution for small and mid-sized businesses as it adds a greater level of flexibility and scalability. Business owners can still enjoy all the powerful features of their most used accounting software with Sage 100 cloud hosting allowing their business to scale at a pace that they desire. Taking the productivity of Sage 100 hosting further, SMBs can also host an array of add-ons on the cloud.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/sage100.webp" alt="QuickBooks Hosting" />
      </div>
    </div>

    <div className="bg-gray-200 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
      <h1 className="text-center font-semibold font-kanit text-2xl px-4">
      Ready for Sage 100 ERP Cloud Hosting?
      </h1>
      <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
      Get in Touch with an Expert
      </button>
    </div>

    <h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Who should choose Sage 100 ERP Application Hosting?hy Choose Sage 50 Cloud hosting?
  </h1>

  <p className="text-center font-montserrat  mt-2 px-4">Sage 100 is an accounting software for small and mid-sized businesses, particularly suitable for those that are growing. Sage 100 cloud hosting services are perfect for businesses like manufacturing, chemical substances, construction, healthcare, retail, food and beverage, not for profit organizations, distribution, and professional services.</p>
  <p className="text-center font-montserrat my-6 px-4">Sage 100 ERP application hosting can manage accounting, manufacturing, sales, inventory, and warehouse. It also helps businesses by generating insights which can help predict customer behaviors, ultimately helping meet their changing demands. While the desktop software is a perfect solution to manage the day-to-day business operations, Sage 100 cloud hosting blends it with the power of cloud – allowing businesses to grow seamlessly.</p>

    


    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Round-the-Clock Accessibility</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        Sage 100 ERP application hosting allows you and your team to access your information from anywhere, at any time, from multiple devices, if they are connected to the internet.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Multi-User Collaboration</h2>
        <p className="text-gray-700 font-montserrat " >
        Sage 100 hosting enables all authorized users to share files on the hosted application, makes edits to the data, and work in collaboration without being physically present on the same location.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">No Upfront Costs</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        One of the biggest benefits of Sage 100 cloud hosting is that it is cost efficient because you do not need to install an elaborate in-house IT infrastructure or a team to maintain it.
        </p>
      </div>
     
    </div>




      <div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Why should you choose Winscloud Matrix for Sage 100 cloud hosting?
  </h1>

    <div className="flex flex-col  md:flex-row  mt-8">

      <div className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
      <p className=" "><span className="font-kanit font-bold ">Multi-Layered Security- </span>At Winscloud Matrix, we have multiple layers of security to keep your critical business files and information safe, such as SSAE 16 certified data centers, network firewalls, automatic data backups that take place twice a day, anti-virus, anti-malware, and two-factor verification. </p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Round-the-Clock Customer Support- </span>Team Winscloud consists of dedicated experts who are trained to tackle all sorts of technical challenges that businesses may face before, during and after transitioning to the cloud. We also provide 24/7 assistance with any technical questions that you may have.</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Flexible Pricing-</span>We offer flexible pricing plans that accommodate all your business needs. Increase or decrease the number of authorized users, choose your preferred hosting type between dedicated and shared hosting, scale up and down as you go, and pay only for what you use.</p>
      </div>
    
    <div className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">

      <p className=""> <span className="font-kanit font-bold ">Data Backup-</span>We ensure that your financial data is backed up twice a day and saved across multiple layers of security so that your data is easily recovered. It provides protection against accidents like theft, deletion, or natural disasters like floods or an earthquake.</p>
      <p className=" "><span className="font-kanit font-bold ">Third-party Integrations</span>We promise maximum satisfaction with running your business via the cloud. We know businesses use multiple add-ons and third-party apps with Sage 100 hosting to stay on top of their business management system. We can host 200+ apps along with your Sage 100 application.</p>
      <p className=" "><span className="font-kanit font-bold ">Max Up time Guarantee-</span>For maximum customer satisfaction, we ensure 99.99% up time to all our clients. Your data is backed up, we ensure strict online monitoring to protect against incidents like data theft, and our robust infrastructure minimizes outages, promising maximum accessibility.</p>
     
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

export default Sage100Hosting
