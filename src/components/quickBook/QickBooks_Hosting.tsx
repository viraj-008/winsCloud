import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";




const QickBooks_Hosting = () => {
  const faqs = [
    {
      question: "How to Host QuickBooks Desktop on Cloud?",
      Head: "Host your most preferred QuickBooks Desktop application to the cloud in simple and easy steps –",
      Head2: "Choose Your Most Suitable Plan",
      answer: "If you are not sure about our pricing structure and wish to know more about our offers, contact us here. Our experts will guide you in identifying the plan that suits your business.",
      Head3: "Share Details of Your QuickBooks",
      answer2: "Our expert will need details of your QuickBooks license to facilitate your transition to the cloud. Your transition can take a few hours to complete, depending upon your data.",
      Head4: "Making your cloud transition",
      answer3: "Our technical experts will ensure that your transition happens quickly. You can alter your decisions based on your number of users, your data size.",
      Head5: "Making your cloud transition",
      answer4: "Our technical experts will ensure that your transition happens quickly. You can alter your decisions based on your number of users, your data size."
    },
    {
      question: "What is QuickBooks Hosting?",
      answer: "QuickBooks Cloud Hosting is a service that allows you to remotely access your QuickBooks Desktop software from anywhere in the world. QuickBooks hosting services allow you to access your data from multiple devices that are connected to the internet.",
    },
    {
      question: "How many users can collaborate simultaneously using QuickBooks Cloud Hosting?",
      answer: "Yes, most QuickBooks Cloud Hosting providers support a wide range of add-ons and extensions to enhance functionality.",
    },
    {
      question: "Does QuickBooks Cloud Hosting support add-ons and extensions?",
      answer: "Yes, you can host multiple versions of QuickBooks on the cloud, depending on the provider’s offerings.",
    },
    {
      question: "I want to host more than one version of QuickBooks on the cloud. Is it possible?",
      answer: "Yes, you can host multiple versions of QuickBooks on the cloud, depending on the provider’s offerings.",
    },
    {
      question: "I operate on a Mac. Will QuickBooks Cloud Hosting support this operating system?",
      answer: "Yes, QuickBooks Cloud Hosting allows Mac users to access QuickBooks remotely on a virtual desktop, making it compatible with macOS.",
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
              Trusted QuickBooks Hosting Provider
            </h1>
            <p className="text-base text-gray-200 md:text-3xl mt-4 md:mt-7">
              Make your accounting operations more secure and collaborate with your team anytime, from anywhere with Winscloud’s QuickBooks Hosting Services.
            </p>
            <Link to='/Get-in-Touch'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Start FREE Trial - Claim Top Hosting Services Today!
            </button></Link>
          </div>
        </div>
      </div>

      {/* Adjusted spacing to be responsive */}
      <div className="md:-mt-[30px] -mt-6 px-4">
        <h1 className="text-center text-lg md:text-3xl font-bold">
          QuickBooks Hosting: Desktop-like experience on any device, from any part of the globe
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
        {/* Text Section */}
        <div className="w-full md:w-[45%]">
          <h1 className="font-semibold font-montserrat text-lg md:text-xl">
            Want to experience the synergy between your most loved QuickBooks Desktop application and the
            power of the cloud? Tap into the efficacy and efficiency of cloud infrastructure with Winscloud Matrix – your authorized QuickBooks hosting provider.
          </h1>
          <p className="font-montserrat my-2 md:my-4 text-sm md:text-base">
            Want to experience the synergy between your most loved QuickBooks Desktop
            application and the power of the cloud? Tap into the efficacy and efficiency of cloud
            infrastructure with Winscloud Matrix – your authorized QuickBooks hosting provider.
          </p>
          <p className="font-montserrat text-sm md:text-base">
            QuickBooks Desktop Cloud Hosting is an advanced solution that enhances the functionality of
            the desktop application by moving it to the cloud. Users can access all the features of their
            favorite QuickBooks application, along with their key data with only a working internet
            connection, from any device of their choice – laptop, desktop, cell phone, or tablet.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
          <img className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" src="./images/logo/qb-hosting.webp" alt="QuickBooks Hosting" />
        </div>
      </div>

      <div className="bg-gray-200 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
        <h1 className="text-center font-semibold font-kanit text-2xl px-4">
          Do away with saving and sharing your desktop files via VPN, email, or cloud storage today!
        </h1>
        <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
          Start Your One-Month Free Trial
        </button>
      </div>

      <div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
        <h1 className="font-bold font-kanit">
          Why Choose Winscloud Matrix for QuickBooks Hosting Service?
        </h1>
        <p className="text-gray-600 text-center font-bold">Access When You Need It</p>
        <p className="font-montserrat text-center mt-8">Our US-based, superfast data centers and SSD-based HPC servers ensure 99.99% uptime for the most seamless collaboration with teams across multiple locations and devices. Experience unparalleled performance and unmatched flexibility with easy accessibility of your fully backed-up data.</p>
      </div>


      <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb2.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2 font-kanit">Best-fitting Plans</h2>
          <p className="text-gray-700 font-montserrat  transition-all duration-300">
            Our monthly QuickBooks Hosting plans are highly flexible, perfect to accommodate your changing needs.
            Not sure if Winscloud fits the bill for you? We promise a 30-day money-back guarantee.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2 font-kanit">Round-the-Clock Support</h2>
          <p className="text-gray-700 font-montserrat " >
            Need expert help with QuickBooks? Our 24/7 tech support via email, call, and text ensures a
            15-minute response time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
          <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
          <h2 className="font-bold text-xl mb-2  font-kanit">Data Security and Recovery</h2>
          <p className="text-gray-800 font-montserrat transition-all duration-300">
            Our SSAE 16 certified data centers, network firewalls, and automated backups ensure your hosted
            QuickBooks data is safe and secure.
          </p>
        </div>
      </div>

      <h1 className="text-3xl text-center font-bold font-kanit mt-8">Explore Other Versions of QuickBooks Hosted by Winscloud Matrix</h1>
      <p className="text-blue-500 text-center mt-6">QuickBooks Desktop <span className="text-black">|</span> QuickBooks Pro <span className="text-black">|</span>
        QuickBooks Premier <span className="text-black">|</span>  QuickBooks Enterprise <span className="text-black">|</span>  QuickBooks POS <span className="text-black">|</span>  QuickBooks Canada</p>


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
                {faq.Head && <p className="font-bold text-xs md:text-xl">{faq.Head}</p>}
                {faq.Head2 && <p className="font-bold mt-2 text-xs md:text-xl">{faq.Head2}</p>}
                {faq.answer && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer}</p>}
                {faq.Head3 && <p className="font-bold mt-4 text-xs md:text-xl">{faq.Head3}</p>}
                {faq.answer2 && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer2}</p>}
                {faq.Head4 && <p className="font-bold mt-4 text-xs md:text-xl">{faq.Head4}</p>}
                {faq.answer3 && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer3}</p>}
                {faq.Head5 && <p className="font-bold mt-4 text-xs md:text-xl">{faq.Head5}</p>}
                {faq.answer4 && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer4}</p>}
              </div>

            </div>
          </div>
        ))}
      </div>

    

    </>
  );
};

export default QickBooks_Hosting;
