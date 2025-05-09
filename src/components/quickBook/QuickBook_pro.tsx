import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Partner from "../Partner";
const QuickBook_pro = () => {
  const faqs = [
    {
      question: "What is QuickBooks Pro Hosting?",

      answer: "QuickBooks Pro Cloud Hosting is the ability to use your desktop accounting software on the cloud. A top QuickBooks hosting provider like Winscloud offers QuickBooks Pro hosting so you can securely access your company files, anytime anywhere."
    },
    {
      question: "Is data backed up in QuickBooks Pro Cloud Hosting?",
      answer: "Your top QuickBooks hosting provider automatically backs up your critical company data every day. You don’t have to worry about securing your information or paying extra for the same",
    },
    {
      question: "How is QuickBooks Pro Cloud Hosting better than QuickBooks Online?",
      answer: "QuickBooks Pro Hosting is better than QuickBoooks Online since you get to access the entire desktop application including your data, the supporting applications you use, and the features that QuickBooks Online lacks. While both solutions offer remote access, it is the added functionality and ease of QuickBooks Pro hosting that makes it a better option.",
    },
    {
      question: "What is the difference between QuickBooks Pro Desktop and QuickBooks Pro hosting? Which one is better?",
      answer: "While QuickBooks Desktop is simply your desktop application that you install and use offline on your desktop, QuickBooks Pro hosting is the same application with all the features made accessible on the internet. QuickBooks Pro cloud hosting facilitates remote access and multi-user collaboration, so that you can work with your remote team without the barriers of time and space.",
    },
    {
      question: "Which version of QuickBooks is best for small businesses: QuickBooks Pro vs Premier vs. Enterprise?",
      answer: "QuickBooks Pro is most suitable for small businesses as it caters to key accounting needs. For businesses that have some specialized needs, QuickBooks Premier is a more suitable solution. QuickBooks Enterprise is designed to handle more complex business operations for large firms.",
    },
    {
      question: "Which operating system will I need to host my QuickBooks Pro on the cloud?",
      answer: "You can install QuickBooks Pro on the cloud with your existing operating system. You can access your hosted QuickBooks from any operating system, including Mac, Windows, Linux, etc.",
    },
    {
      question: "How many versions of QuickBooks can I host on the cloud?",
      answer: "Your top QuickBooks hosting provider can host all versions of QuickBooks for you on the cloud. ",
    },

  ];

  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
        <div className="w-full flex bg-[url('/images/Home/quickBook.jpg')] bg-cover bg-center pt-20 px-5 md:px-20 items-center">
          <div className="w-full text-center md:text-left">
            <h1 className='text-white font-josefin text-4xl md:text-6xl md:pt-6'>
              QuickBooks Pro Hosting
            </h1>
            <p className='text-xl md:text-3xl bg-gradient-to-r from-orange-500 via-indigo-200 to-green-100 text-transparent bg-clip-text font-kanit mt-4 md:mt-7'>
              Secure your data on the cloud for hassle-free accounting with top quickbooks hosting providers
            </p>
            <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Contact an Expert for QuickBooks Pro Hosting Service
            </button></Link>
          </div>
        </div>

      <div className="">
        <h1 className='text-3xl md:text-2xl text-center py-4 font-bold  font-serif text-gray-800'>
          QuickBooks Pro Cloud Hosting: Take your favorite QuickBooks Pro to the cloud and add more power to your accounting operations
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
        {/* Text Section */}
        <div className="w-full text-justify font-josefin text-gray-600 md:w-[45%]">

          <p className=" my-2 md:my-4 text-sm md:text-base">
            Modern businesses need technology that saves time, promotes flexibility, and offers security. While QuickBooks Pro
            Desktop adds ease to accounting operations, QuickBooks Pro Plus Hosting takes the powerful desktop application one step further.
          </p>
          <p className=" text-sm md:text-base">
            QuickBooks Pro Hosting helps you to securely access your data from any device of your choice. Safely login to your QuickBooks Desktop application
            on the cloud and experience enhanced flexibility while working with your team. Simplify accounting, stay up to date with
            your team, and experience multi-user collaboration with your remote team, irrespective of where you are.</p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
          <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/qbpro.webp" alt="QuickBooks Hosting" />
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
        <h1 className="font-bold font-kanit">
          Why opt for QuickBooks Pro Cloud hosting?
        </h1>
        <p className="text-gray-600 text-center font-bold">Benefits of taking advantage of cloud hosting your QuickBooks Pro Desktop</p>
      </div>

      <div className="w-[90%] mt-5   mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white/20 backdrop-blur-lg p-6 border hover:bg-red-800 hover:text-white transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2 font-kanit">Optimal Performance</h2>
          <p className="font-montserrat  transition-all duration-300">
            The high-performance SSD servers ensure maximum uptime, offer additional storage, and eliminate speed and downtime issues, so your business runs smoothly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/20 backdrop-blur-lg p-6 hover:bg-red-800 hover:text-white transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb1.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2 font-kanit">Unlimited Add-Ons Integrations</h2>
          <p className="font-montserrat " >
            Need multiple add-ons and/or third-party apps to go along with QuickBooks Pro Hosting? Your top QuickBooks hosting provider can host all your apps and add-ons that support your business on the cloud
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/20 hover:bg-red-800 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/teamwork.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2  font-kanit">Industry Standard Security</h2>
          <p className="font-montserrat transition-all duration-300">
            The high-performance SSD servers ensure maximum uptime, offer additional storage, and eliminate speed and downtime issues, so your business runs smoothly.e.
          </p>
        </div>
      </div>

      <h1 className="text-3xl text-center font-bold font-kanit mt-8">Explore Other Versions of QuickBooks Hosted by Winscloud Matrix</h1>
      <p className="text-blue-500 text-center mt-6 font-bold">
  <Link to="/quickbooks-desktop" className="hover:underline">QuickBooks Desktop</Link> <span className="text-black">|</span>{' '}
  <Link to="/quickbooks-pro" className="hover:underline">QuickBooks Pro</Link> <span className="text-black">|</span>{' '}
  <Link to="/quickbooks-premier" className="hover:underline">QuickBooks Premier</Link> <span className="text-black">|</span>{' '}
  <Link to="/quickbooks-enterprise" className="hover:underline">QuickBooks Enterprise</Link> <span className="text-black">|</span>{' '}
  <Link to="/quickbooks-pos" className="hover:underline">QuickBooks POS</Link> <span className="text-black">|</span>{' '}
  <Link to="/quickbooks-canada" className="hover:underline">QuickBooks Canada</Link>
</p>

      <div className="my-12 w-[90%] mx-auto">
        <h1 className="text-center font-serif font-semibold text-2xl pt-5">
          WinsCloud: The Best QuickBooks Pro Hosting Provider for Your Business Accounting Needs
        </h1>
        <p className="text-center font-josefin text-sm mt-3">As a small business, we understand that your biggest priority is to always be up and running. Using a desktop application comes with its own limitations – you cannot collaborate with your remote team, storage is limited, and performance may not be optimum. With Winscloud’s QuickBooks Pro Plus hosting solution, you experience enhanced performance of your QuickBooks Pro Plus –
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-8 font-montserrat text-sm p-3">
  {/* Row 1 */}
  <div>
    <p>
      <span className="font-bold">Customized Pricing Plans -</span>
      We understand the dynamics of modern businesses. To provide you with tailor-made pricing, we ensure that our pocket-friendly plans allow you to pay as you go, without any contract boundation.
    </p>
  </div>
  <div>
    <p>
      <span className="font-bold">Data Back Up-</span>
      Your critical business data is backed up twice daily and saved across multiple layers to ensure easy recovery in case of accidental deletion or a natural disaster like flood.
    </p>
  </div>

  {/* Row 2 */}
  <div>
    <p>
      <span className="font-bold">Expert Support 24/7/365 -</span>
      We have a team of certified QuickBooks Pro Plus Advisors who are available on call and by email to cater to all your technical needs, including installation, upgrading and troubleshooting.
    </p>
  </div>
  <div>
    <p>
      <span className="font-bold">More Profitability-</span>
      Winscloud Matrix’s QuickBooks hosting solutions eliminates the need to invest in heavy, in-house cloud infrastructure and helps you save big on maintenance costs.
    </p>
  </div>

  {/* Row 3 */}
  <div>
    <p>
      <span className="font-bold">High Performance Servers-</span>
      Our HPC servers are managed by our team of professionals who are equipped to tackle any unexpected downtime to ensure that your business runs smoothly 24/7.
    </p>
  </div>
  <div>
    <p>
      <span className="font-bold">Always Up and Running–</span>
      Downtime can result in unhappy customers and thus adversely impact your business. Our QuickBooks Pro hosting solutions ensure business continuity with 99.99% up time.
    </p>
  </div>
</div>

      </div>

      <div className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
        <h1 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
          Experience the Ease of Accounting: Switch to QuickBooks Pro Cloud Hosting Today!
        </h1>
        <div className="flex justify-center">
          <Link to='/pricing'>
            <button className="border-2 my-6 md:my-6 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Choose Your Best QuickBooks Pro Cloud Hosting Plan
            </button>
          </Link>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
        <h1 className="font-bold font-kanit">
          Why Choose Winscloud Matrix for QuickBooks Hosting Service?
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

export default QuickBook_pro
