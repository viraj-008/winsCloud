import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const QuickBook_pos = () => {

    const faqs = [
        {
          question: "What is QuickBooks POS Hosting?",
      
          answer:"QuickBooks POS hosting means taking your desktop QuickBooks POS app along with its robust features to a third party cloud in order to make it more accessible for your sales and inventory teams across multiple locations. QuickBooks POS hosting is an incredible solution that ensures data security, makes your retail business in multiple locations more accessible and adds efficacy to your business operations.",
        },
        {
          question: "How to host QuickBooks POS on cloud?",
          answer: "A top quickbooks hosting provider like Winscloud Matrix can help you transition to the cloud. You can call us at [+1 714-882-1244] or email us at [info@winscloudmatrix.com] and get in touch with our Support Technicians and we will help you move to the cloud in just 120 minutes. Get in touch with our team for cloud hosting now ",
        },
        {
          question: "Why is it better to host QuickBooks POS on cloud? What are the benefits of QuickBooks hosting?",
          answer: "There are many benefits of QuickBooks POS cloud hosting over the desktop application, including more efficiency in running a business and cost efficiency. Instead of investing in in-house cloud infrastructure and its maintenance, you can simply choose the cost-efficient option, i.e. QuickBooks POS hosting.",
        },
        {
          question: "I use several add-ons along with my QuickBooks POS. How many add-ons can I integrate with QuickBooks hosting?",
          answer: "You can integrate as many add-ons as you want. Our team at Winscloud is equipped with knowledge to host 100s of add-ons and can provide you with the required support in case of any technical issues.",
        },
        {
          question: "Do I need a QuickBooks Enterprise license to host QuickBooks on the cloud?",
          answer: "Yes, you need a QuickBooks Enterprise license to move to the cloud.",
        },
        {
          question: "How much does it cost to host QuickBooks POS desktop on cloud?",
          answer: "Most top QuickBooks hosting providers offer flexible pricing plans. At Winscloud Matrix, we don’t believe in rigid plans that don’t suit your business needs. Instead, we let you pay as you go. You can also choose between dedicated and shared hosting plans, based on your team size. Check quickbooks hosting pricing here.",
        },
       
       
      ];

      const [openIndex, setOpenIndex] = useState<null | number>(null);
          
      const toggleFAQ = (index:number) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (
         <>
        <div className="h-auto w-full pb-10">
                   <div className="w-full flex bg-gradient-to-r from-black via-pink-500 to-blue-500 pt-20 px-5 md:px-20 items-center min-h-[530px]">
                       <div className="w-full text-center md:text-left">
                           <h1 className="text-white text-3xl md:text-6xl leading-tight">
                           QuickBooks POS Hosting
                           </h1>
                           <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
                           An excellent hosting solution for handling simple to complex business transactions with ease
                           </p>
                            <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
                            Take a Free Trial Today!
                           </button></Link>
                       </div>
                   </div>
               </div>
    
               <div className="md:-mt-[30px] -mt-6 px-4">
                   <h1 className="text-center text-lg md:text-3xl font-bold">
                   QuickBooks POS Cloud Hosting: Conveniently track multi-channel sales and manage your retail inventory from multiple locations
                   </h1>
               </div>
    
               <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
     {/* Text Section */}
     <div className="w-full md:w-[45%]">
      
       <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
       At Winscloud, we understand that small businesses need technology that can be game changers when it comes to business efficiency. QuickBooks POS cloud 
       hosting is one such solution that takes sales tracking, inventory management, return management, and more such functions to the next level. Businesses today need remote access 
       to manage their sales and inventory on the go. Unlike traditional POS systems, QuickBooks POS hosting offers a comprehensive solution for businesses to save their data on a remote server which can be
        accessed by multiple users, collaborate in real-time, and stay up to date with inventory from any location, 24/7/365. 
       </p>
       
     </div>
    
     {/* Image Section */}
     <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
       <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/qb-pos.webp" alt="QuickBooks Hosting" />
     </div>
    </div>
    
    
    <div className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
    <h1 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
    Ready to take your retail business to the cloud?
    </h1>
    <div className="flex justify-center">
     <Link to='/contact'>
       <button className="border-2 my-6 md:my-6 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
       Get in Touch With an Expert
       </button>
     </Link>
    </div>
    </div>
    
    <div className="my-12 w-[90%] mx-auto">
    <h1 className="text-center font-kanit font-semibold text-2xl pt-5">
    Why Choose Winscloud Matrix for taking your QuickBooks Cloud Hosting?
     </h1>
     <p className="text-gray-600 text-center font-bold ">Retail businesses need to stay updated with their inventory and sales to ensure maximum customer satisfaction. QuickBooks POS is a fantastic solution that allows retail business owners and its employees to stay on the same page and work together in sync, irrespective of their physical location. Winscloud Matrix allows businesses to host their highly efficient and useful QuickBooks POS desktop on the cloud, adding another level of efficacy in managing a retail business. Issues like low inventory, order placement, return requests, sales can be managed in real-time, helping customer satisfaction reach an all-time high. Here’s how Winscloud can help seamlessly achieve this success –</p>
    
    
       <div className="flex flex-col  md:flex-row  mt-8">
    
         <div className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
         <p className=" "><span className="font-kanit font-bold ">Support 24/7/365 –</span> Team Winscloud promises unlimited support round the clock to troubleshoot issues and provide guidance on technical concerns to ensure that your business runs smoothly, without any hiccups during and after the transition to the cloud.</p>
         <p className=" "> <span className="font-kanit font-bold my-6 ">Free Trial to Help Decision Making–</span>We offer a month-long Free Trial for our users to help them make an informed decision. Explore your favorite cloud hosted QuickBooks POS and run your business with the added flexibility of the cloud without paying a penny.</p>
         <p className=" "> <span className="font-kanit font-bold  ">Seamless Migration – </span>Our dedicated team of experts ensure a smooth transition of your retail business to the cloud, maintaining uptime and data security.</p>
         </div>
       
       <div className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">
         <p className=""> <span className="font-kanit font-bold ">99.99% Uptime Guarantee – </span> We guarantee a 99.99% uptime so that your critical business information and the hosted QuickBooks POS application is always accessible, and you can run your business without any interruption.</p>
         <p className=""> <span className="font-kanit font-bold ">Pay As You Go </span>Winscloud offers flexible QuickBooks POS hosting plans that cater to your business size. You can customize your plan as per your need, without any contract restriction.</p>
    
         <p className=" "><span className="font-kanit font-bold ">Unlimited Add-Ons Integration –</span> Our servers are enabled to host as many add-ons and third-party apps as you want. Our expert team is also equipped to provide you with technical support in case of any issues.</p>
        
       </div>
       </div>
    </div>   
    
    <div className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
    <h1 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
    Ready to take complete control of your Business Finances? Get QuickBooks Enterprise Hosting Today
    </h1>
    <div className="flex justify-center">
     <Link to='/contact'>
       <button className="border-2 my-6 md:my-6 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
       Get in Touch with Us
       </button>
     </Link>
    </div>
    </div>
    
    <div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
                   <h1 className="font-bold text-2xl font-kanit">
                   Hosting QuickBooks POS on the Cloud: Benefits for Your Retail Business
                   </h1>
                   <p className="text-center font-montserrat">Running a retail business has never been easier. With contemporary solutions like cloud hosting QuickBooks POS, business owners can manage multiple retail stores across different locations in real-time.</p>
                  
               </div>
    
               <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Card 1 */}
         <div  className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
           <img src="images/logo/qb1.webp" alt="Best-fitting Plans"   className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
           <h2 className="font-bold text-xl mb-2 font-kanit">
           Cost Savings</h2>
           <p className="text-gray-700 font-montserrat  transition-all duration-300">
           QuickBooks POS hosting is compatible with most hardware solutions at brick-and-mortar stores and supports multiple add-ons and third-party app hosting.
           </p>
         </div>
    
         {/* Card 2 */}
         <div  className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
           <img src="images/logo/teamwork.webp" alt="Round-the-Clock Support"   className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
           <h2 className="font-bold text-xl mb-2 font-kanit">
           Synchronized Data</h2>
           <p className="text-gray-700 font-montserrat " >
           Your employee records, orders and sales records, and inventory status across multiple locations all on one platform with QuickBooks POS hosting.
           </p>
         </div>
    
         {/* Card 3 */}
         <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
     <img src="images/logo/qb2.webp" alt="Data Security and Recovery"   className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
     <h2 className="font-bold text-xl mb-2  font-kanit">More Control Over Business</h2>
     <p className="text-gray-800 font-montserrat transition-all duration-300">
     Enjoy greater control over your business by connecting all your outlets on the cloud and monitor your retail business with more precision.
     </p>
    </div>
    
      
    
    </div>
    
         <div className=" mx-auto mt-10 flex flex-col items-center">
                   <h1 className="font-bold font-kanit text-center">
                   Our Comprehensive Range of QuickBooks Hosting Services
                   </h1>
                   <p className="text-blue-400 text-[10px] space-x-1 md:space-x-4 md:text-[12px]">
                    <span>QuickBooksHosting</span>
                    <span>Desktop</span>
                    <span>PRO</span>
                    <span>Premier</span>
                    <span>Enterprise</span>
                    <span> Canada</span>
                   </p>
               </div>
    
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
    
                  
    </>
  )
}

export default QuickBook_pos
