import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";

const Sage_300Hosting = () => {
  const faqs = [
    {
      question: "What is Sage 300 hosting?",
      answer: "Sage 300 hosting means running the traditional, on-premises application in a cloud environment via the internet. Sage 300 hosting allows business owners to access their desktop software from anywhere, at any time, and collaborate with their remote teams in real time.",     
    },
    {
      question: "Will my data be migrated to the cloud during Sage 300 hosting?",
      answer: "Yes, your cloud hosting provider can help migrate all your pre-existing data to the cloud. Our cloud support team at Winscloud Matrix can seamlessly and securely transfer your data to the cloud environment.",
    },
    {
      question: "What are the benefits of Sage 300 cloud hosting?",
      answer: "With Sage 300 Hosting, your files and financial data are available at one central location and are accessible 24/7. Multiple members from your team can work on the desired set of data in collaboration, at the same time. The cloud-based Sage 300 is safe, with multiple security measures in place to protect your data from theft, accidental deletion, or disasters like earthquakes.",
    },
    {
      question: "What is the cost of Sage 300 ERP cloud hosting? How much does Sage 300 hosting cost?",
      answer: "The cost of Sage 300 cloud hosting depends on the plan you choose, the number of users, type of hosting i.e. shared or dedicated, etc. Winscloud Matrix’s plans start at just $23 per month. Need help with deciding which plan is best for you? Get in touch with our experts NOW!",
    },
    {
      question: "Are add-ons/third-party apps supported with Sage 300 hosting?",
      answer: "Yes, you can have all your add-ons and third-party apps hosted on the cloud along with your Sage 300 hosting. Our technical team at Winscloud Matrix will provide all necessary support and troubleshooting that you may face during the transition.",
    },
    {
      question: "Is Sage 300 hosting cheaper than using the traditional desktop software?",
      answer: "When using the on-premises Sage ERP 300, you need to invest in servers and maintenance staff to run your business smoothly. Businesses that are facing a budget constraint may find it difficult to make such monetary investments. With Sage 300 cloud hosting, you only need to pay for your chosen plan and everything else is taken care of by your hosting provider. Ready for your transition to the cloud? Contact us today!",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section - Only added <header> tag */}
      <header className="w-full flex bg-[url('/images/Home/sage1.jpg')] bg-cover bg-center pt-20 px-5 md:px-20 items-center">
        <div className="w-full text-center md:text-left">
          <h1 className="text-gray-200 font-josefin text-4xl md:text-6xl md:pt-6">
            Sage 300 ERP Application <br /> Hosting
          </h1>
          <p className='text-xl md:text-3xl bg-gradient-to-r from-blue-100 via-indigo-100 to-green-100 text-transparent bg-clip-text font-kanit mt-4 md:mt-7'>
            Better organize projects, and optimize business operations from anywhere, anytime with Sage 300 cloud hosting
          </p>
          <Link to='/trial'>
            <button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Start Free Trial
            </button>
          </Link>
        </div>
      </header>

      {/* ALL ORIGINAL CONTENT BELOW - ONLY ADDED SEMANTIC TAGS */}
      <main>
        <section>
          <h1 className="text-center font-serif text-lg md:text-3xl font-bold">
            Unify All Your Critical Tasks, Elevate Accounting, and Boost Productivity with Sage 300 ERP Hosting
          </h1>
          <h2 className="font-semibold text-center font-montserrat mt-5 text-sm text-gray-700 md:text-xl">
            Run Business Seamlessly on the Cloud
          </h2>
        </section>

        <section className="flex flex-col md:flex-row justify-between p-4 md:p-8">
          <div className="font-josefin w-full md:w-[45%]">
            <p className="my-2 md:my-4 text-sm md:text-base">
              Sage 300 ERP is robust business management software which is used for multiple business operations such as accounting, bookkeeping, inventory tracking, sales, among others. An Infrastructure-as-a-service, Sage 300 cloud hosting service helps businesses enjoy an enhanced level of security, greater productivity, and more accessibility from anywhere, at any time.
            </p>
            <p className="text-sm md:text-base">
              Business owners can rely on Sage 300 cloud hosting to safely carry out business operations such as inventory management, accounts payable, accounts receivable, automated bank reconciliation, and financial reporting from any location and device.
            </p>
          </div>

          <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
            <img 
              className="h-48 md:h-80 border-2 border-black rounded-lg object-cover" 
              src="./images/logo/sage300.webp" 
              alt="Sage 300 Cloud Hosting Interface" 
              loading="lazy"
            />
          </div>
        </section>

        <section className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Only added alt text */}
          <div className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img 
              src="images/logo/qb2.webp" 
              alt="Sage 300 Hosting Plans" 
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" 
            />
            <h2 className="font-bold text-xl mb-2 font-kanit">Know Your Needs</h2>
            <p className="text-gray-700 font-montserrat transition-all duration-300">
              The first step to embracing Sage 300 cloud hosting is to collect all your information – your personal details, number of users, their names, your Sage 300 license details, and the add-ons or third-party apps you wish to host.
            </p>
          </div>

          {/* Card 2 - Only added alt text */}
          <div className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img 
              src="images/logo/qb3.webp" 
              alt="Sage 300 Cloud Support" 
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" 
            />
            <h2 className="font-bold text-xl mb-2 font-kanit">Finding a Sage 300 cloud hosting provider</h2>
            <p className="text-gray-700 font-montserrat">
              For a seamless transition from desktop to Sage 300 hosting, you need to find the best Sage 300 cloud hosting provider for your business who has the right experience, trained support staff, and robust security measures in place.
            </p>
          </div>

          {/* Card 3 - Only added alt text */}
          <div className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img 
              src="images/logo/qb1.webp" 
              alt="Sage 300 Data Security" 
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" 
            />
            <h2 className="font-bold text-xl mb-2 font-kanit">Access the Cloud</h2>
            <p className="text-gray-800 font-montserrat transition-all duration-300">
              Finally, to migrate to the cloud, you need to enter your complete information, wait for the notification, designate a point person, gain access to the cloud and experience enhanced level of mobility, security, accessibility, and productivity like never before.
            </p>
          </div>
        </section>

        {/* ALL OTHER SECTIONS EXACTLY AS ORIGINAL - ONLY ADDED <section> TAGS */}
        <section className="bg-red-600 w-[90%] mx-auto mt-8 rounded-lg flex flex-col items-center py-6">
          <h1 className="text-center font-semibold font-kanit text-2xl px-4">
            Are you prepared to make your transition to cloud with Sage 300 Cloud Hosting?
          </h1>
          <button className="mt-6 border-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
            Contact Our Hosting Experts
          </button>
        </section>

        <section className="w-[90%] mx-auto my-4">
          <h1 className="text-center font-semibold font-kanit text-2xl px-4">
            Sage 300 Cloud hosting service: Why is it the right choice for your business?
          </h1>
          <h2 className="text-center text-gray-600 font-semibold font-kanit px-4">
            Make Your Move to the Cloud
          </h2>
          <p className="text-center font-montserrat mt-2 px-4">
            Sage 300 hosting with Winscloud Matrix is the right choice for your business if you are looking for a trustworthy and experienced hosting provider. We have helped businesses from multiple domains transition to the cloud. Our team has experience in dealing with all sorts of issues that businesses might face before, during or after their transition to the cloud. Our robust security measures help keep your information secure, our state-of-the-art data centers keep your data backed up, ensuring maximum up time so your business is always accessible. Enjoy the highest level of customer satisfaction by moving to the cloud, at affordable prices and experience a comprehensive business solution with Sage 300 cloud hosting.
          </p>
        </section>

        {/* FAQ Section - Only added schema markup */}
        <section itemScope itemType="https://schema.org/FAQPage" className="my-12 w-[90%] mx-auto">
          <h1 className="text-2xl text-center font-bold font-kanit mt-8 px-8">
            Sage 300 Cloud Hosting Service Frequently Asked Questions
          </h1>
          <div className="max-w-3xl mx-auto mt-10 border rounded-lg shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-b-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
                  itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                >
                  <div className="p-4 bg-gray-50 text-gray-700">
                    {faq.answer && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Partner />
      </main>
    </>
  );
};

export default Sage_300Hosting;