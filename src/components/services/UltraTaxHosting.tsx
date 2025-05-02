import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";

function UltraTaxHosting() {
    const faqs = [
        {
          question: "What is UltraTax Hosting?",
          answer: "UltraTax CS hosting is the perfect solution for businesses that wish to experience greater flexibility, multiple user collaboration, and 24/7 availability irrespective of distance. With UltraTax CS hosting, users can collaborate remotely with multiple people, work on the same set of data from any location, and file taxes stress-free and flawlessly.",
         
        },
        {
          question: "How much does UltraTax Cloud Hosting service cost?",
          answer: "Our UltraTax CS tax hosting pricing starts at just $23 per month. Prices may increase with additional services. You can choose between shared and dedicated hosting, storage options, and other services and pay for what you really use. We are also scalable and can accommodate any changing need without any hiccups.",
        },
        {
          question: "Does UltraTax CS hosting provide complete features of the desktop software?",
          answer: "Yes, you get to enjoy all the impeccable features of the UltraTax CS desktop software by hosting it on the cloud. We can also transfer all or part of your data on the cloud along with your tax preparation software if you need.",
        },
        {
          question: "I still want to use my add-ons along with the UltraTax cloud hosting solution. Is it possible?",
          answer: "Our cloud experts team is capable of hosting all add-ons on the cloud along with your UltraTax CS software. If you also use any third party add-on, we would be happy to host it for  you.",
        },
        {
          question: "Which version of UltraTax is supported by UltraTax Cloud services?",
          answer: "We support all versions of UltraTax CS on the cloud. You just need to have a license of the version of UltraTax you own and provide it to your hosting provider before your transitio",
        },
        {
          question: "What happens to the existing data on the desktop app if we opt for UltraTax CS tax hosting?",
          answer: "You can choose to migrate all or part of your data to the cloud along with your UltraTax CS tax hosting. Your chosen hosting plan should also accommodate your data size.",
        },
        {
          question: "Do we get tech support with Hosting UltraTax Software? Are there any hidden costs involved?",
          answer: "We have a dedicated team of trained IT professionals to tackle all your technical queries and issues. Be assured that we provide 24/7/365 support completely free of cost for our clients.",
        },
        {
          question: "Why should I choose UltraTax Cloud Hosting solution? How is it beneficial for my business?",
          answer: "UltraTax cloud hosting solution caters to the modern business needs of remote access, collaboration on the go, round-the-clock availability, bank grade data security, and maximum uptime. Winscloud Matrix’s UltraTax hosting solution fulfills these needs and more, helping your business grow multi-folds.",
        },
        {
          question: "Can I get a demo before choosing UltraTax hosting?",
          answer: "Yes. After you choose your preferred hosting plan, we complete your cloud setup. Once completed, we offer you a free demo to the UltraTax software hosting so you can start strong.",
        },
    
      ];
      const [openIndex, setOpenIndex] = useState<number | null>(null);
    
      const toggleFAQ = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <>
      <div className="w-full flex bg-[url('/images/Home/server.webp')] bg-cover bg-center  pt-20 px-5 md:px-20 items-center min-h-[230px] md:min-h-[430px]">
        <div className="w-full text-center md:text-left">
          <h1 className="text-white text-3xl md:text-4xl leading-tight">
          Work with remote teams & clients, file taxes seamlessly, from any location and any device with UltraTax CS Hosting
          </h1>
          {/* <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
          Professional Tax returns, anytime, anywhere with Drake tax software cloud hosting
          </p> */}
          <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Start Your Free Trial
          </button></Link>
        </div>
      </div>

    {/* Adjusted spacing to be responsive */}
    <div className="p-2">
      <h1 className="text-center font-serif text-gray-600 text-lg md:text-3xl font-bold">
      UltraTax Cloud Hosting Service: Perfect solution for tax professionals and accounting firms to enhance productivity
      </h1>

      
    </div>

    <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
      {/* Text Section */}
      <div className="w-full md:w-[45%]">
        <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
        UltraTax CS is a professional tax preparation software that helps businesses accomplish more in terms of tax filing by leveraging automation to save their time and enhance efficiency. UltraTax CS hosting means using a high-performing, fast, virtual, remote server to use the UltraTax software and its data on the cloud. UltraTax cloud hosting solution allows tax preparers and accounting firms to collaborate with their clients from any location, saving several hours a day on travelling to and from their location or staying tied up to their work computer.
        </p>
        <p className="font-montserrat text-sm md:text-base">
        One of the easiest ways to elevate productivity and have an error-free, stress-free tax season is to opt for UltraTax CS tax hosting. You can still use all the elaborate features of the UltraTax desktop software and enjoy greater flexibility, security, efficiency, and collaboration with UltraTax hosting. With an experienced cloud hosting provider, such as Winscloud Matrix, you can get the most comfortable cloud experience without worrying about incurring additional IT and maintenance costs.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img className="h-48 md:h-80 border-2 p-2 border-black rounded-lg object-cover" src="./images/logo/ultratax.webp" alt="QuickBooks Hosting" />
      </div>
    </div>


    <h1 className="text-center text-lg md:text-2xl my-5 px-4 font-bold">
    Simplify Your Tax Preparation with UltraTax Cloud Hosting service
      </h1>

    <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">
        Multiple Device Support</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        Access UltraTax cloud hosting service from your phone, home or office desktop, or tablet and stay connected with your printers and scanners connected via the internet.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">Desktop-like Experience</h2>
        <p className="text-gray-700 font-montserrat " >
        Enjoy all features of the desktop software with UltraTax CS tax hosting for the most productive, hassle-free, and easygoing tax preparation season.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Add-ons Integration</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        UltraTax CS Cloud Hosting supports more than 200 add ons and third party apps, helping you integrate all the useful tools to make your tax filing productive.
        </p>
      </div>
     
    </div>


    <h1 className="text-center text-lg md:text-2xl my-5 px-4 font-bold">
    Simplify Your Tax Preparation with UltraTax Cloud Hosting service
      </h1>

       <p className="text-center px-4 font-montserrat">At Winscloud, we help all small and mid-sized businesses transition to UltraTax CS cloud hosting in three simple steps –</p> 


 <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"> 
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">
        Select a suitable hosting plan</h2>
        <p className="text-gray-700 font-montserrat  transition-all duration-300">
        Check out our hosting plans here and select the plan that best suits your business needs. Our plans are flexible, allowing you to scale up and down as you go.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2 font-kanit">
        Provide Key Software Details</h2>
        <p className="text-gray-700 font-montserrat " >
        Your cloud expert will require key information like your license details, your software version, among other details to provide you with a customized cloud setup.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
        <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
        <h2 className="font-bold text-xl mb-2  font-kanit">Start Your Free Demo</h2>
        <p className="text-gray-800 font-montserrat transition-all duration-300">
        Once the setup is complete with your stated requirements, you can ask your cloud expert to give you a free demo of your UltraTax Cloud Hosting service.
        </p>
      </div>
     
   </div> 







    <div className="bg-gray-200 my-8 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
      <h1 className="text-center font-semibold font-kanit text-2xl px-4">
      Would you like us to help you decide on the best plan for YOUR business? Start a One-Month FREE TRIAL to make an informed decision
      </h1>
      <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
      Start Your Free Trial
      </button>
    </div>

    

    
    <div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5">
Winscloud Matrix UltraTax Hosting: Empower Your Tax Preparation with Your Most Trusted Application Hosting Provider
  </h1>
<p className="text-center font-montserrat  pt-5">
Winscloud Matrix UltraTax Hosting: Empower Your Tax Preparation with Your Most Trusted Application Hosting Provider
  </p>



    <div className="flex flex-col  md:flex-row  mt-8">

      <div className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
      <p className=" "><span className="font-kanit font-bold ">Multi-User Collaboration- </span>UltraTax Hosting allows multiple users to collaborate seamlessly, on the same file. This helps take your tax filing to the next level, making your hectic tax season seamless, productive, and  error free</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">99.9% Uptime-</span>Our state-of-the-art servers ensure 99.99% uptime. Your business is always running, elevating customer satisfaction, and tax season hassle-free.</p>
      <p className=" "> <span className="font-kanit font-bold my-6 ">Flexible Pricing-</span>Our pay-as-you-go model allows our clients to alternate their needs as they go. We readily accommodate all your dynamic business needs and you pay only for what you use.
</p>
      </div>
    
    <div className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">

      <p className=""> <span className="font-kanit font-bold ">Dedicated Support-  </span>Our cloud experts are well-trained in UltraTax CS Cloud hosting for small to mid-sized businesses. They work dedicatedly to help resolve all sorts of issues faced by businesses.</p>
      <p className=" "><span className="font-kanit font-bold ">Same-day Transition- </span>Our team of experts at Winscloud Matrix vouch for a quick, smooth transition. In just 2 hours, your UltraTax software can be hosted in the cloud. Data transfer, however, may take longer.</p>
      <p className=" "><span className="font-kanit font-bold ">Data Backup-  </span>With Winscloud Matrix’s UltraTax cloud hosting service, your client’s critical tax information and other data is kept completely safe under multiple security layers and multiple backups.</p>
     
    </div>
    </div>
</div> 


<h1 className="text-2xl text-center font-bold font-kanit mt-8 px-8">UltraTax CS hosting Frequently Asked Questions -</h1> 

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
   <Partner/>

  </>
  )
}

export default UltraTaxHosting
