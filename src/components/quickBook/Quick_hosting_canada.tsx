import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Partner from "../Partner";
const Quick_hosting_canada = () => {
    const faqs = [
        
        {
          question: "What is QuickBooks Cloud Hosting?",
          answer: "QuickBooks desktop cloud hosting simply means taking the offline version of the software to the cloud and accessing it with the help of the internet. This way, business owners, accountants, and bookkeepers can access their files and documents saved on the desktop version of the software from anywhere, at any time, and from any time. It also facilitates multiple user access, from any device that is connected to the internet. ",
        },
        {
          question: "Can multiple users access cloud hosted QuickBooks Canada at the same time?",
          answer: "Yes, cloud-based QuickBooks Canada applications have the capacity to support multiple users accessing the same set of information. The sales and inventory teams can work on the same data set and keep the information up to date in real time, which helps to ensure maximum customer satisfaction.",
        },
        {
          question: "How much does it cost to host QuickBooks Canada on the cloud?",
          answer: "The cost of hosting QuickBooks ranges depending on several factors like the size of business, number of users, shares of dedicated server hosting, etc. Your top quickbooks hosting provider can guide you in taking the right decision. A Free Trial of your hosting provider’s services can help you experience the cloud environment and see if it meets your requirements.",
        },
        {
          question: "Does QuickBooks Hosting support multiple devices?",
          answer: "Yes, QuickBooks Canada hosting can be accessed across multiple devices, including cell phones, tablets, laptops, and desktop computers. All you need is a working internet connection.",
        },
        {
          question: "What if I am travelling out of Canada? Can I still access my QuickBooks application?",
          answer: "If you have a working internet connection on your device, you can access your QuickBooks data from any location. Whether you are travelling across Canada or overseas, your important files are always within your reach.",
        },
        {
          question: "How do top quickbooks hosting providers ensure data security?",
          answer: "At Winscloud Matrix, our customers’ data is automatically backed up twice daily so that your QuickBooks Canada hosting data is safe and always accessible.",
        },
        {
          question: "How is QuickBooks Canada different from QuickBooks USA?",
          answer: "There are certain key differences between QuickBooks Canada and the USA. QuickBooks Canada is customized to Canadian accounting and tax laws and some of the key differences include currency settings and tax and payroll compliances, and vice versa for QuickBooks USA.",
        },
       
       
      ];

      const [openIndex, setOpenIndex] = useState<null | number>(null);
          
      const toggleFAQ = (index:number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <>
               <div className="w-full flex bg-[url('/images/Home/quickBook.jpg')] bg-cover bg-center  pt-20 px-5 md:px-20 items-center ">
                   <div className="w-full text-center md:text-left md:pt-6">
                       <h1 className="text-white font-josefin text-4xl md:text-6xl">
                       QuickBooks Hosting Canada
                       </h1>
                       <p className='text-xl   md:text-3xl bg-gradient-to-r from-orange-500 via-indigo-100 to-green-100 text-transparent bg-clip-text font-kanit mt-4 md:mt-7'>
                       Business Data at your fingertips with QuickBooks Canada Hosting
                       </p>
                        <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
                        Start Free Trial Now
                       </button></Link>
                   </div>
               </div>

           <div className="p-2">
               <h1 className="text-center font-serif text-lg md:text-3xl font-bold">
               QuickBooks POS Cloud Hosting: Conveniently track multi-channel sales and manage your retail inventory from multiple locations
               </h1>
           </div>

           <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
 {/* Text Section */}
 <div className="w-full font-josefin text-gray-600 md:w-[45%]">
  
   <p className="my-2 md:my-4 text-sm md:text-base">
   QuickBooks Canada Hosting is the most sought-after accounting solution by business owners, CPAs, and bookkeepers in Canada. QuickBooks Canada Hosting allows hosting of multiple versions of QuickBooks, offering added flexibility, security, and mobility to business owners who wish to collaborate with their team in real-time and stay up to date with their business operations on-the-go. 
   </p>
   <p className=" my-2 md:my-4 text-sm md:text-base">
   QuickBooks hosting Canada is suitable for small, mid-sized and large businesses. Winscloud provides hosting to multiple QuickBooks versions intended to meet different business needs. We have served tailored QuickBooks Canada hosting solutions and add-ons integration to multiple Canadian businesses like retail, wholesale, not for profit organizations, CPA firms, among others.
   </p>
   
 </div>

 {/* Image Section */}
 <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
   <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/qb-canada.webp" alt="QuickBooks Hosting" />
 </div>
</div>


<div className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
Ready to take your retail business to the cloud?
</h1>
<div className="flex justify-center">
 <Link to='/get-in-touch'>
   <button className="border-2 my-6 md:my-6 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
   Get in Touch With an Expert
   </button>
 </Link>
</div>
</div>

<div className="my-12 w-[90%] mx-auto">
<h1 className="text-center font-serif font-semibold text-2xl pt-5">
Why Choose Winscloud Matrix for taking your QuickBooks Cloud Hosting?
 </h1>


   <div className="flex flex-col font-josefin  md:flex-row  mt-8">

     <div className="md:w-[50%] space-y-4 text-sm p-3">
     <p className=" "><span className=" font-bold ">Disaster-proof hosting-</span> With Winscloud Matrix, you do not have to worry about the safety of your data. Our comprehensive security protocols are always in place to ensure your data is safe and accessible.</p>
     <p className=" "> <span className=" font-bold my-6 ">Easy & Quick Migration- </span> Transitioning to the cloud and securely migrating all your data with Winscloud Matrix while ensuring maximum uptime usually takes less than 2 hours.</p>
     <p className=" "> <span className=" font-bold  ">24/7/365 Support- </span>Be it troubleshooting or technical guidance, our dedicated and trained technical support staff are available round-the-clock to provide you with the necessary help at any time of the day.</p>
     </div>
   
   <div className="md:w-[50%] space-y-4 p-3  text-sm">
     <p className=""> <span className=" font-bold ">Add-Ons Integration-</span> We are equipped with hosting more than 200 add-ons to go with your QuickBooks desktop application. Our team can also support you with troubleshooting any issues related to these add-ons.</p>
     <p className=""> <span className=" font-bold ">Flexible Pricing Plans- </span>Our QuickBooks Hosting Canada pricing plans are flexible and customizable. We provide you with complete freedom to choose a plan that best suits your current business needs.</p>

     <p className=" "><span className=" font-bold ">Maximum Up Time-</span>We care for your business and understand the importance of being always available to your customers. Hence, our certified SSAE-16 Type-II (SOC-2) data centers ensure 99.99% accessibility.</p>
    
   </div>
   </div>
</div>   



<div className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
<h1 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
Are you ready to begin your One-Month Free Trial of QuickBooks Canada Hosting?
</h1>
<div className="flex justify-center">
 <Link to='/get-in-touch'>
   <button className="border-2 my-6 md:my-6 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
   Get in Touch with Us
   </button>
 </Link>
</div>
</div>

<div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
               <h1 className="font-bold text-2xl font-kanit text-center">
               Winscloud Matrix: Your Trusted QuickBooks Canada Hosting Parter

               </h1>
               <p className="text-center font-montserrat font-semibold text-gray-500">Seamless blend of agility, security, mobility, and productivity</p>
              
           </div>

           <p className="text-center font-montserrat my-4">Our US-based, superfast data centers and SSD-based HPC servers ensure 99.99% uptime for the most seamless collaboration with teams across multiple locations and devices. Experience unparalleled performance and unmatched flexibility with easy accessibility of your fully backed-up data</p>
           <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
     {/* Card 1 */}
     <div  className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
       <img src="images/logo/teamwork.webp" alt="Best-fitting Plans"   className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
       <h2 className="font-bold text-xl mb-2 font-kanit">
       Multi-User Collaboration</h2>
       <p className="text-gray-700 font-montserrat  transition-all duration-300">
       QuickBooks Canada hosting supports multiple user access to the same set of data, allowing the entire team to work on the document in real-time, from any location in Canada. Whether you are in British Columbia or Vancouver, as a business owner, you can enjoy greater access to your financial data, all the time.
       </p>
     </div>

     {/* Card 2 */}
     <div  className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
       <img src="images/logo/qb3.webp" alt="Round-the-Clock Support"   className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
       <h2 className="font-bold text-xl mb-2 font-kanit">
       Access On the Go</h2>
       <p className="text-gray-700 font-montserrat " >
       Need expert help with technical issues related to your QuickBooks or are you simply on the lookout for a certified expert to provide you with the technical know-how of Hosted QuickBooks on the cloud? We promise 24/7 tech support via email, call and text with a 15-minute response time
       </p>
     </div>

     {/* Card 3 */}
     <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
 <img src="images/logo/qb1.webp" alt="Data Security and Recovery"   className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
 <h2 className="font-bold text-xl mb-2  font-kanit">
 
Data Security and Recovery

 </h2>
 <p className="text-gray-800 font-montserrat transition-all duration-300">
 Enjoy greater control over your busWe understand that modern businesses seek modern solutions when it comes to data security. Our SSAE 16 certified data centers, network firewalls, automated data backups, anti-virus among other security solutions ensure that your hosted QuickBooks data is safe and secure.iness by connecting all your outlets on the cloud and monitor your retail business with more precision.
 </p>
</div>

  

</div>

<h1 className="text-3xl text-center font-bold font-serif mt-8 px-4">We host multiple versions of QuickBooks Desktop for Business Owners and Accountants in Canada</h1>
 <p className="text-blue-500 text-center mt-6">QuickBooks Desktop <span className="text-black">|</span> QuickBooks Pro <span className="text-black">|</span> 
  QuickBooks Premier <span className="text-black">|</span>  QuickBooks Enterprise <span className="text-black">|</span>  QuickBooks POS <span className="text-black">|</span>  QuickBooks Canada</p>

    <h1 className="md:text-xl text-center font-bold font-kanit mt-8 px-4">QuickBooks Hosting Canada Frequently Asked Questions (FAQs) -</h1>
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
                       className={`transition-all duration-300 ease-in-out overflow-hidden ${
                         openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                       }`}
                     >
                   <div className="p-4 bg-gray-50 text-gray-700">
           <p className="font-montserrat text-[10px] md:text-sm">{faq.answer}</p>
           
           </div>
           
                     </div>
                   </div>
                 ))}
               </div>
<Partner/>
             
</>
  )
}

export default Quick_hosting_canada
