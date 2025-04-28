import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
const Drake_Hosting = () => {

    const faqs = [
        {
          question: "What is Drake tax hosting?",
          answer: "Drake tax hosting is a blend of the drake desktop software and the power of cloud. It provides users with a centralized platform to access their key tax data from a location of their choice, irrespective of the time zone or device.",
         
        },
        {
          question: "Why should I choose Drake Tax software cloud hosting?",
          answer: "Drake Tax hosting is one of the best decisions business owners can make. Since you can access your data at any time and from anywhere, you can get more done in less time and effort. Hosting your Drake tax software on the cloud makes tax season a lot easier, allowing multiple authorized users to work on the same data set, filing taxes faster, with less errors.",
        },
        {
          question: "How much does Drake cloud hosting cost?",
          answer: "We have many affordable and flexible pricing plans to offer. You can check out our hosting plans here – https://www.winscloudmatrix.com/pricing/.",
        },
        {
          question: "Are all versions of Drake Tax Hosting supported on the cloud servers?",
          answer: "It does not matter which version of Drake Tax software you are using. We provide hosting of all Drake versions.",
        },
        {
          question: "I use a number of add-ons along with my Drake tax software. Is hosting possible for these add-ons as well?",
          answer: "Yes, at Winscloud, we offer hosting of 200+ add-ons and third party apps for your uninterrupted tax filing with drake cloud hosting.",
        },
        {
          question: "Do you provide any sort of tech support in case of any issue?",
          answer: "Yes, we have a dedicated, trained, and experienced team in-house to provide you with the support needed,  at anytime of the day or night. You can reach out to us for support via email, phone, and chat.",
        },
        {
          question: "What are the pre-requisites for Drake software cloud hosting?",
          answer: "The only prerequisite for opting for drake cloud hosting solution is a working device like laptop, computer, tablet or phone and uninterrupted internet connection.",
        },
        {
          question: "Is my data safe with Drake hosting providers?",
          answer: "Yes, your drake hosting provider ensures complete safety of your critical information. There are several measures in place to protect your data from theft, ransomware attacks, and man-made and natural disasters like earthquake, floods, or robbery.",
        },
        {
          question: "How much time does it take to migrate to the cloud? Can I access my data during transition?",
          answer: "It usually takes a couple of hours to migrate the Drake desktop software to the cloud. It depends on you if you wish to migrate your entire data to the cloud. It may take a few hours extra depending on the size of your data..",
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
          Drake Tax Software Hosting
          </h1>
          <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
          Professional Tax returns, anytime, anywhere with Drake tax software cloud hosting
          </p>
          <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Start One-Month Free Trial
          </button></Link>
        </div>
      </div>
    </div>

    {/* Adjusted spacing to be responsive */}
    <div className="md:-mt-[30px] -mt-6 px-4">
      <h1 className="text-center text-lg md:text-3xl font-bold">
      Drake Cloud Hosting: How does opting for Drake Tax Hosting Elevate Your Tax Preparation?
      </h1>

      <p className="text-sm text-center text-gray-700 mt-5 font-bold">No more staying tethered to your office computer!</p>
      
    </div>

    <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
      {/* Text Section */}
      <div className="w-full md:w-[45%]">
        <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
        Drake software cloud hosting refers to the freedom of accessing your desktop software on a remote server. With Drake hosting, users can access their Drake software on-the-go, on any device of their choice to carry out their tax preparation process.
        </p>
        <p className="font-montserrat text-sm md:text-base">
        Winscloud Matrix’s drake cloud hosting solution gives you the freedom to access your key files saved on the desktop software from anywhere, allowing you to work from the comforts of your home, collaborating with your clients and team members to prepare taxes, and enjoy a seamless tax process. Tax preparation on drake tax hosting is also a completely secure solution that keeps the worries of data security at bay.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img className="h-48 md:h-80 border-2 p-2 border-black rounded-lg object-cover" src="./images/logo/drake.jpg" alt="QuickBooks Hosting" />
      </div>
    </div>


    <h1 className="text-center text-lg md:text-2xl my-5 px-4 font-bold">
    Drake Hosting Key Features: How does drake cloud hosting take your tax preparation to the next level?
      </h1>

    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">
        Anytime, anywhere Access</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        Drake Cloud hosting facilitates anytime, anywhere access to data. File taxes on the go, work with a remote team in collaboration, and file e-forms well before the deadline..
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Multi-Device Support</h2>
        <p className="text-gray-700 font-montserrat " >
        Make your hectic tax season seamless with the flexibility of accessing your key tax files from multiple devices, including your office desktop computer, your personal laptop, cell phone, and tablet.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Third-Party App Integration</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Not just Drake, the same cloud server can accommodate your other important apps like QuickBooks, Sage and third-party apps that make your tax preparation smooth.
        </p>
      </div>
     
    </div>


    <h1 className="text-center text-lg md:text-2xl my-5 px-4 font-bold">
    How to Set Up Your Drake Tax Software on the Cloud in 3 Simple Steps?
      </h1>

       <p className="text-center px-4 font-montserrat">Team Winscloud can help you transition to ProSeries Hosting seamlessly in 3 easy steps –</p> 


 <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"> 
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">
        Find the most suitable hosting plan for your small business</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        As an experienced drake hosting provider, we offer dedicated as well as shared hosting to our clients to accommodate their unique needs. We offer complete freedom to business owners to select the plan that meets their needs, is affordable, and offers flexibility to scale..
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Provide your Drake License details</h2>
        <p className="text-gray-700 font-montserrat " >
        To begin your cloud transition process, you must present your Drake software license to your Drake hosting provider. You might also need to provide additional details like your number of users and the amount of storage you need.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Access your drake tax software cloud hosting</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        In just 2-5 hours, depending on the size of your data, your transition to the cloud will be complete. You can then access your favorite software and safely begin your tax preparation process, on the very same day!
        </p>
      </div>
     
   </div> 







    <div className="bg-gray-200 my-8 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
      <h1 className="text-center font-semibold font-kanit text-2xl px-4">
      Ready to see how Drake Cloud Hosting helps with tax preparation?
      </h1>
      <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
      Try Drake Hosting for FREE
      </button>
    </div>

    

    
    <div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Why Should You Choose Winscloud for Drake Tax Software Hosting: Tax Preparation Transformed with the Power of Cloud
  </h1>



    <div className="flex flex-col  md:flex-row  mt-8">

      <div className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
      <p className=" "><span className="font-kanit font-bold ">Multi-User Collaboration-</span>With Winscloud’s Drake Tax hosting, you can experience maximum productivity with your tax filing operations by remotely collaborating with multiple members of your team, in real time.</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Cost-Effective Hosting- </span>We offer affordable and the most flexible drake tax hosting pricing. Our plans are flexible and provide you with the freedom to choose the services you need and pay only for what you use.</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Highest Level Security- </span>We understand the importance of keeping our client’s data safe, with an array of security measures like a network firewall, end-to-end data encryption, regular backups of your files, etc.
</p>
      </div>
    
    <div className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">

      <p className=""> <span className="font-kanit font-bold ">Multiple Device Compatibility- </span> Drake Cloud hosting allows tax preparers and accountants to access the software and tax data from any device connected with the internet, including laptop, phone, tablet, and desktop.</p>
      <p className=" "><span className="font-kanit font-bold ">24×7 Tech-Support--</span>We have a team of certified IT professionals who work round-the-clock to provide our clients with unparalleled assistance to help keep your system up-and-running.</p>
      <p className=" "><span className="font-kanit font-bold ">High Up Time- </span> Experience minimum downtime uninterrupted access to your Drake hosting and the tax data saved on all your devices with our 99.99% uptime guarantee.</p>
     
    </div>
    </div>
</div> 


<h1 className="text-2xl text-center font-bold font-kanit mt-8 px-8">Drake Tax Software Hosting: Frequently Asked Questions (FAQs) -</h1> 

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

export default Drake_Hosting
