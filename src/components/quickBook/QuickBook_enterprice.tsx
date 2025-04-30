import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Partner from "../Partner";
const QuickBook_enterprice = () => {


  const faqs = [
    {
      question: "What is QuickBooks Enterprise Hosting?",

      answer: "QuickBooks Desktop Enterprise is the perfect solution for businesses that are scaling up and need more flexibility. QuickBooks Enterprise Hosting allows businesses to access all the robust QuickBooks desktop features, along with the flexibility to collaborate with multiple users from a remote server.",
      answer2: "Hosting a QuickBooks file through VPN or cloud on your own is possible, but you might face a range of issues and can be expensive. Top quickbooks hosting providers can help you seamlessly transition to the cloud, eliminating additional expenses. A top quickbooks hosting provider also offers 24*7 support."
    },
    {
      question: "How much does QuickBooks Enterprise Hosting cost?",
      answer: "QuickBooks Enterprise hosting plans depend on factors such as the number of users, your choice of server i.e. sharing or dedicated, etc. Our plans range from $25 to $489 per month. Take our FREE Trial now to get firsthand experience of our services before deciding.",
    },
    {
      question: "Can my top quickbooks hosting provider host multiple versions of QuickBooks Enterprise desktop?",
      answer: "Yes, at Winscloud, we host all versions and subscriptions of QuickBooks Enterprise desktop on the cloud. Not just that, we will also host all your add-ons and integrations on the cloud for you.",
    },
    {
      question: "Is data backed up on QuickBooks Enterprise desktop hosted on the cloud?",
      answer: "The data is backed up twice a day and kept at three different locations to make recovery faster in case of any disaster. We keep the last 30 days of backup which can be provided as and when required.",
    },
    {
      question: "Do I need a QuickBooks Enterprise license to host QuickBooks on the cloud?",
      answer: "Yes, you need a QuickBooks Enterprise license to move to the cloud.",
    },
    {
      question: "Is QuickBooks Enterprise discontinued?",
      answer: "While QuickBooks Pro and Premier were discontinued on July 31, 2024, QuickBooks Enterprise will not be discontinued. You can enjoy working on your favorite accounting software and renew/purchase a subscription as per the need.",
    },
    {
      question: "How can I access my QuickBooks Enterprise on the cloud?",
      answer: "To access your QuickBooks Enterprise desktop on the cloud, you need a working internet connection, a device such as your laptop/tablet/phone or desktop, with your operating system like Windows, Linux, or Mac.",
    },
    {
      question: "How is QuickBooks Enterprise Desktop different from QuickBooks hosting and online?",
      answer: "QuickBooks Pro is accounting software that is most suitable for SMBs that are looking to streamline their accounting operations. QuickBooks Premier on the other hand is best for small and mid-sized businesses that have certain industry-specific requirements. For larger businesses that need to manage inventory, track sales, and more, QuickBooks Enterprise is a more viable option.",
      answer2: "QuickBooks Pro is accounting software that is most suitable for SMBs that are looking to streamline their accounting operations. QuickBooks Premier on the other hand is best for small and mid-sized businesses that have certain industry-specific requirements. For larger businesses that need to manage inventory, track sales, and more, QuickBooks Enterprise is a more viable option.",
      answer3: "QuickBooks Pro is accounting software that is most suitable for SMBs that are looking to streamline their accounting operations. QuickBooks Premier on the other hand is best for small and mid-sized businesses that have certain industry-specific requirements. For larger businesses that need to manage inventory, track sales, and more, QuickBooks Enterprise is a more viable option."
    },

  ];

  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="h-auto w-full pb-10">
        <div className="w-full flex bg-[url('/images/Home/quickBook.jpg')] bg-cover bg-center pt-20 px-5 md:px-20 items-center min-h-[530px]">
          <div className="w-full text-center md:text-left">
            <h1  className="text-white font-josefin text-4xl md:text-6xl">
              QuickBooks Enterprise Hosting
            </h1>
            <p className='text-xl   md:text-3xl bg-gradient-to-r from-orange-500 via-indigo-100 to-green-100 text-transparent bg-clip-text font-kanit mt-4 md:mt-7'>
              Host your QuickBooks Premier on the cloud and make your critical accounting data easily accessible, anytime, anywhere.
            </p>
            <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Call our Expert
            </button></Link>
          </div>
        </div>
      </div>

      <div className="md:-mt-[30px] -mt-6 px-4">
        <h1 className="text-center font-serif text-lg md:text-3xl font-bold">
          QuickBooks Enterprise Cloud Hosting: A World Class Solution to Remotely Manage Your Business Operations
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
        {/* Text Section */}
        <div className="w-full font-josefin text-gray-600 md:w-[45%]">

          <p className=" my-2 md:my-4 text-sm md:text-base">
            All the features of Intuit’s most powerful and advanced accounting software blended with the flexibility of the cloud.
            Grow your business by focusing on more important tasks with QuickBooks Enterprise cloud hosting by assigning relevant tasks
            to your team any time, anywhere.
          </p>
          <p className=" text-sm md:text-base">
            QuickBooks Desktop offers an end-to-end accounting solution to modern businesses. However, businesses today need added flexibility
            and ease while managing routine functions, such as managing cash flow, generating invoices, and keeping track of inventory. QuickBooks
            Enterprise Cloud Hosting lets you keep track of all your key tasks on the go. No more sitting tethered to your desktop to access your critical data.
            With QuickBooks Enterprise hosting, you can stay up to date anytime, anywhere.
          </p>
          <p className=" text-sm md:text-base mt-6">
            Winscloud’s QuickBooks Enterprise Hosting solution lets you use all of QuickBooks Enterprise’s robust features and simplifies business operations with the
            flexibility of the cloud. QuickBooks Enterprise hosting is the perfect solution for large businesses that need to manage business from multiple locations, large size of inventory, and heavy daily transactions, such as manufacturing, accounting, and retail businesses.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
          <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/qb-hosting.webp" alt="QuickBooks Hosting" />
        </div>
      </div>


      <div className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
        <h1 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
          Ready to take complete control of your Business Finances? Get QuickBooks Enterprise Hosting Today
        </h1>
        <div className="flex justify-center">
          <Link to='/trial'>
            <button className="border-2 my-6 md:my-6 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Take a QuickBooks Hosting FREE Trial
            </button>
          </Link>
        </div>
      </div>

      <div className="my-12 w-[90%] mx-auto">
        <h1 className="text-center font-serif font-semibold text-2xl pt-5">
          Winscloud QuickBooks Premier Cloud Hosting: Why should you choose us as your hosting provider?
        </h1>
        <p className="text-gray-600 text-center font-bold ">Unlock the power of cloud hosting services</p>


        <div className="flex flex-col font-josefin md:flex-row  mt-8">

          <div className="md:w-[50%]  space-y-4  text-sm p-3">
            <p className=" "><span className=" font-bold ">More Productivity on the Cloud-</span> QuickBooks Enterprise Cloud hosting provides businesses with a single cloud platform, facilitating multi-user collaboration in real-time, from anywhere across the globe. This makes accounting seamless for businesses and tax season stress free.</p>
            <p className=" "> <span className=" font-bold my-6 ">Scalability-</span>Businesses are dynamic, needing to scale up or down frequently. QuickBooks Enterprise hosting offers the freedom to scale as you go, and you don’t have to worry about anything. QuickBooks Cloud Hosting adapts to business needs, promising operative freedom.</p>
          </div>

          <div className="md:w-[50%] space-y-4 p-3 font-josefin text-sm">
            <p className=""> <span className=" font-bold ">Add-Ons Integration- </span> Your top QuickBooks hosting provider will not just host your QuickBooks Enterprise desktop software on the cloud. More than 200 add-ons and third-party apps, including all versions of QuickBooks, MS Excel, etc. are available and can be hosted on the cloud.</p>

            <p className=" "><span className=" font-bold ">No Location Barriers-</span> While QuickBooks Enterprise Desktop needs you to be tethered to your computer, hosting the application on the cloud offers more convenience. Your data is in close proximity, irrespective of your location.</p>

          </div>
        </div>
      </div>

      <div className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
        <h1 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
          Ready to take complete control of your Business Finances? Get QuickBooks Enterprise Hosting Today
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
        <h1 className="font-bold text-2xl font-kanit">
          Winscloud Matrix Advantage: Why choose us as your QuickBooks cloud hosting provider?
        </h1>

      </div>

      <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb1.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2 font-kanit">Enhanced Mobility</h2>
          <p className="text-gray-700 font-montserrat  transition-all duration-300">
            Our QuickBooks Enterprise hosting service helps you break location barriers and gives you the freedom to access your favorite application, your critical financial data, and collaborate with your team on the go.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/teamwork.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2 font-kanit">
            Cost Effective Cloud Hosting</h2>
          <p className="text-gray-700 font-montserrat " >
            Winscloud’s QuickBooks Enterprise cloud hosting solutions help save big on expensive in-house IT infrastructure, maintenance, and support staff. You can also check our plans here.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb2.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2  font-kanit">Bank-level Security</h2>
          <p className="text-gray-800 font-montserrat transition-all duration-300">
            Your data security is our top-most priority. We have key measures in place, like two-factor authentication, 256-Bit encryption, network firewalls and anti-virus, 24*7 video surveillance, and flood detection systems for your QuickBooks Enterprise cloud hosting.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <p className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28 text-center" > <SlCalender className="mx-auto text-8xl text-yellow-500" /></p>
          <h2 className="font-bold text-xl mb-2  font-kanit">Maximum Uptime Guarantee</h2>
          <p className="text-gray-800 font-montserrat transition-all duration-300">
            We conduct regular maintenance and automated system backups twice a day and our cutting-edge, high-performance servers ensure 99.99% up time to ensure your hosted QuickBooks Enterprise data is always constantly accessible.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb3.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2  font-kanit">Experience Tech Team</h2>
          <p className="text-gray-800 font-montserrat transition-all duration-300">
            We have an in-house team of trained and highly experienced technical support professionals who are available round-the-clock to provide you with end-to-end assistance, whether you need technical guidance or help with troubleshooting.
          </p>
        </div>
        {/* Card 6 */}
        <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2  font-kanit">Scalable Pricing Structure</h2>
          <p className="text-gray-800 font-montserrat transition-all duration-300">
            We believe in offering full control to our customers with our scalable hosting plans. You can pay as you go without any contract boundation or choose from our tailored hosting plans based on YOUR team/business siz
          </p>
        </div>


      </div>

      <div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
        <h1 className="font-bold font-kanit">
          Most Asked QuickBooks Enterprise Hosting Questions -
        </h1>
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
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="p-4 bg-gray-50 text-gray-700">
                <p className="font-montserrat text-[10px] md:text-sm">{faq.answer}</p>

              </div>

            </div>
          </div>
        ))}
      </div>

      <Partner />
    </>
  )
}

export default QuickBook_enterprice
