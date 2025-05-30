import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import Partner from "../Partner";

const QickBooks_Desktop = () => {
  const faqs = [
    {
      question: "How can I reach your team for QuickBooks Cloud Hosting services?",

      answer: "Our team is available via phone, email and chat. Visit our website to contact us https://www.winscloudmatrix.com/"
    },
    {
      question: "What is Winscloud Matrix’s quickbooks desktop hosting pricing?",
      answer: "Our quickbooks desktop hosting pricing starts at just $23 per month, Check out our detailed hosting plans here – https://www.winscloudmatrix.com/pricing/",
    },
    {
      question: "How much time does it take to transition to Cloud Hosting for QuickBooks Desktop?",
      answer: "It usually take 2 to 4 hours to transition to QuickBooks Desktop hosting. It may take longer if your data is too heavy.",
    },
    {
      question: "Can I get a Demo before buying a plan?",
      answer: "We offer a one-month FREE TRIAL to all our users to help them explore QuickBooks Desktop hosting. Contact our cloud expert now to START YOUR FREE TRIAL",
    },
    {
      question: "Can I customize my QuickBooks Desktop hosting plan as per my business needs?",
      answer: "Our quickbooks cloud hosting pricing is flexible so as to accommodate all your business needs. You can scale up and down without paying anything extra.",
    },
    {
      question: "I use multiple QuickBooks applications. Do you provide QuickBooks Desktop Hosting for all of them?",
      answer: "We offer cloud hosting for all QuickBooks desktop applications, including QuickBooks Pro, Premier, Enterprise, POS, and Canada.",
    },
    {
      question: "Do I need to provide a license for my QuickBooks Desktop hosting?",
      answer: "Yes, it is mandatory to provide your QuickBooks desktop license before transitioning to the cloud. Your cloud expert might also need additional details from you to begin your cloud transition.",
    },
    {
      question: "Can I authorize more than one person to access my QuickBooks Desktop Cloud hosting?",
      answer: "Multiple users can be authorized to access your QuickBooks hosted desktop, if you want. All authorized users can access the data safely and collaborate in real time from any internet connected device.",
    },
    {
      question: "I might need technical assistance during and after my transition to quickbooks hosted desktop. Do you provide any support for the same?",
      answer: "Our technical support team works 24/7/365 to assist you with troubleshooting any issue that you may be facing.",
    },
    {
      question: " Do you provide dedicated hosting for QuickBooks Desktop?",
      answer: "Yes, we offer both dedicated and shared hosting plans for QuickBooks hosted Desktop. You can choose any of the two types of hosting, depending on your needs.",
    },
    {
      question: " What should I do if I wish to cancel my QuickBooks Desktop Hosting plan? Are there any hidden cancellation charges?",
      answer: "You are never bound by any strict policy wherein you are charged for cancelling service anytime. You can simply notify us 30 days prior to your cancellation date.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <header className="w-full flex bg-[url('/images/Home/quickBook.jpg')] bg-cover bg-center pt-20 px-5 md:px-20 items-center">
        <div className="w-full text-center md:text-left">
          <h1 className="text-white font-josefin text-4xl md:text-6xl md:pt-6">
            QuickBooks Desktop Cloud <br /> Hosting
          </h1>
          <p className='text-xl md:text-3xl bg-gradient-to-r from-orange-500 via-indigo-100 to-green-100 text-transparent bg-clip-text font-kanit mt-4 md:mt-7'>
            Anytime, anywhere access to business with Cloud Hosting for <br /> QuickBooks Desktop
          </p>
          <Link to='/trial' aria-label="Start QuickBooks Desktop Hosting Trial">
            <button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Get QuickBooks Desktop Hosting Now
            </button>
          </Link>
        </div>
      </header>

      <main>
        <section>
          <h2 className='text-lg md:text-2xl text-center py-4 font-bold font-serif text-gray-800'>
            QuickBooks Desktop Hosting: Run your favorite QuickBooks Desktop Application from Anywhere, at Anytime
          </h2>
        </section>

        <section className="flex flex-col md:flex-row justify-between p-4 md:p-8">
          <article className="w-full text-justify md:w-[45%]">
            <p className="font-josefin text-gray-600 my-2 md:my-4 text-sm md:text-base">
              QuickBooks desktop cloud hosting means accessing the desktop version of QuickBooks software on a remote
              server with the help of the internet. With only authorized users permitted to access QuickBooks desktop cloud hosting, users can
              safely access their critical business data, work on the same set of files in real-time, irrespective of where they are located.
            </p>
            <p className="font-josefin text-gray-600 text-sm md:text-base">
              QuickBooks Desktop Hosting providers take care of all the technical aspects of transitioning
              to the cloud. Winscloud Matrix, for instance, provides everything from a safe and secure remote server,
              the IT infrastructure needed for cloud hosting QuickBooks Desktop software, 100% data backup, security measures to protect data from risks like theft, and technical
              support. Users who transition to cloud hosting for QuickBooks Desktop enjoy enhanced collaboration with their teams,
              higher productivity, and safety of their business data, all at a minimal cost.
            </p>
          </article>

          <figure className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
            <img
              className="h-48 md:h-80 border-2 border-black rounded-lg object-cover"
              src="./images/logo/qb-desktop.webp"
              alt="QuickBooks Desktop Cloud Hosting Interface"
            />
          </figure>
        </section>

        <section className="bg-red-600 p-4 w-[90%] mx-auto rounded-lg flex flex-col items-center py-6">
          <h2 className="text-center text-white font-semibold font-kanit text-2xl px-4">
            Six Easy Steps to Transition to QuickBooks Desktop Cloud Hosting
          </h2>
          <p className="text-gray-100 font-josefin text-center">
            Migrating to the cloud can be done in a few easy steps. Having the right QuickBooks Desktop Hosting Provider on your side can make the process simpler and faster. With Winscloud, you are assigned a cloud expert right from the start who will assist you with your cloud migration. You can also opt for a one-month Free Trial to get the real experience of running your business from the cloud. To begin your transition, here are the simple steps you need to follow
          </p>
        </section>

        <section className="w-[90%] mt-5  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="backdrop-blur-lg p-6 border hover:bg-red-800 hover:text-white transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img src="images/logo/qb1.webp" alt="Best-fitting Plans" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
            <h3 className="font-bold text-xl mb-2 font-kanit">Wait for Data Transfer</h3>
            <p className="font-montserrat transition-all duration-300">
              You can choose to transfer all your data on the cloud. However, it may take a few hours to safely transfer your data, depending on its size.
            </p>
          </article>

          <article className="bg-white/20 backdrop-blur-lg p-6 hover:bg-red-800 hover:text-white transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img src="images/logo/teamwork.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
            <h3 className="font-bold text-xl mb-2 font-kanit">Access Using Credentials</h3>
            <p className="font-montserrat">
              You can access your QuickBooks Desktop cloud hosting using the username and password provided by your hosting provider. You can also choose to add more authorized users to your cloud hosting for QuickBooks desktop.
            </p>
          </article>

          <article className="bg-white/20 hover:bg-red-800 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img src="images/logo/qb2.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
            <h3 className="font-bold text-xl mb-2 font-kanit">Provide Your License Information</h3>
            <p className="font-montserrat transition-all duration-300">
              Your cloud hosting provider will need you to provide your license information since it is mandatory to share your QuickBooks License details with your hosting provider to host it in the cloud.
            </p>
          </article>

          <article className="bg-white/20 hover:bg-red-800 hover:text-white  transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <p className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28 text-center">
              <SlCalender className="mx-auto text-8xl text-yellow-500" />
            </p>
            <h3 className="font-bold text-xl mb-2 font-kanit">Select a Hosting Plan</h3>
            <p className=" font-montserrat transition-all duration-300">
              At Winscloud, we offer both dedicated and shared hosting plans. You can choose a plan that suits your business needs the best. Enquire quickbooks desktop hosting pricing now.
            </p>
          </article>

          <article className="bg-white/20 hover:bg-red-800 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img src="images/logo/qb3.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
            <h3 className="font-bold text-xl mb-2 font-kanit">Provide Your Details</h3>
            <p className=" font-montserrat transition-all duration-300">
              Contact our cloud expert at Winscloud Matrix and provide your software details, other relevant information and hosting requirements. Your preferred number of users, storage needs, hosting preferences like shared or dedicated hosting should all be conveyed to your cloud expert.
            </p>
          </article>

          <article className="bg-white/20 hover:bg-red-800 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
            <h3 className="font-bold text-xl mb-2 font-kanit">Begin Access Testing</h3>
            <p className="font-montserrat transition-all duration-300">
              Once you have access to your QuickBooks Desktop cloud hosting, test the platform by using it.
            </p>
          </article>
        </section>

        <section>
          <h2 className="text-3xl text-center font-bold font-kanit mt-8">We Host All Versions of Your Most Loved QuickBooks Desktop</h2>
          <p className="text-center w-[90%] md:w-[80%] mx-auto mt-4 font-montserrat">Maximize efficiency in your accounting and tax operations with affordable and secure QuickBooks Desktop Hosting. Let our team handle your QuickBooks Desktop Hosting, so you can focus on what is most important – YOUR Business!</p>
          <p className="text-blue-500 text-center mt-6 font-bold">
            <Link to="/quickbooks-desktop" className="hover:underline">QuickBooks Desktop</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-pro" className="hover:underline">QuickBooks Pro</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-premier" className="hover:underline">QuickBooks Premier</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-enterprise" className="hover:underline">QuickBooks Enterprise</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-pos" className="hover:underline">QuickBooks POS</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-canada" className="hover:underline">QuickBooks Canada</Link>
          </p>
        </section>

        <section className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
          <h2 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
            Need our help with your QuickBooks Desktop Cloud Hosting?
          </h2>
          <div className="flex justify-center">
            <Link to='/Get-in-Touch'>
              <button className="border-2 my-6 md:my-6 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
                Contact QuickBooks Hosting Expert
              </button>
            </Link>
          </div>
        </section>

        <section className="my-12 w-[90%] mx-auto">
          <h2 className="text-center font-kanit font-semibold text-2xl pt-5">
            Winscloud Matrix: Your Trusted QuickBooks Cloud Hosting Provider
          </h2>
          <p className="text-center font-josefin text-gray-600 text-sm mt-3">
            Winscloud, an experienced cloud hosting provider, has helped multiple businesses from an array of domains in their smooth transition to the cloud and growing from there. We do not just offer QuickBooks hosting solutions to small and medium business owners – we offer a commitment to ensure data security, uninterrupted business access that ensures maximum customer satisfaction, and support at any time of day and night. Here are some of the many benefits of QuickBooks desktop cloud hosting with Winscloud Matrix
          </p>

          <div className="flex flex-col md:flex-row mt-8">
            <article className="md:w-[50%] space-y-4 font-montserrat text-sm p-3">
              <p>
                <span className="font-kanit font-bold">Flexibility</span> - Our QuickBooks Cloud hosting solution offers unparalleled flexibility to businesses, facilitating multi-user collaboration across multiple locations. With access to only authorized users, SMBs can safely collaborate on the same set of data, in real-time.
              </p>
              <p>
                <span className="font-kanit font-bold">Customization</span> - We understand that every business has its own unique needs. Therefore, we ensure that we accommodate all unique needs for the most satisfactory cloud experience. Whether you need more storage, dedicated hosting, scalable quickbooks desktop hosting pricing, we have it all.
              </p>
              <p>
                <span className="font-kanit font-bold">Cost-efficiency</span> - Our quickbooks desktop hosting pricing starts at just $23 per month. Not only is it affordable, but our pricing plans are also cost efficient since you only have to pay for hosting services, without worrying about setting up an IT infrastructure or paying separately for tech support.
              </p>
            </article>

            <article className="md:w-[50%] space-y-4 p-3 font-montserrat text-sm">
              <p>
                <span className="font-kanit font-bold">Maximum Uptime</span> - Our state-of-the-art and reliable SSAE-16 Type-II (SOC-2) data centers ensure 99.99% accessibility, helping minimize downtime. With this high availability, users can enjoy high business productivity and uninterrupted business operations.
              </p>
              <p>
                <span className="font-kanit font-bold">Support</span> - Winscloud’s technical support team is highly trained to tackle all sorts of QuickBooks Desktop Hosting issues that businesses might face before, during or after their transition to the cloud. The team works tirelessly, round-the-clock to troubleshoot.
              </p>
              <p>
                <span className="font-kanit font-bold">Security</span> - Our top-notch security measures such as network firewall, daily monitoring redundancies, anti-virus, anti-malware, among others to ensure your QuickBooks Desktop Hosting data is protected at all levels, round-the-clock.
              </p>
            </article>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-10 border rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <article key={index} className="border-b last:border-b-0">
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
            </article>
          ))}
        </section>
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default QickBooks_Desktop;
