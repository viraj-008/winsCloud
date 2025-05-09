import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Partner from "../Partner";
const QuickBook_prem = () => {

  const faqs = [
    {
      question: "What is QuickBooks Premier Hosting?",

      answer: "QuickBooks Premier Plus hosting means accessing your full-fledged desktop software on a cloud server using the internet. This allows for multi-user collaboration across multiple locations and on multiple devices, that too in real-time."
    },
    {
      question: "Is QuickBooks Premier Hosting expensive? How much does QuickBooks Premier Cloud Hosting cost?",
      answer: "At Winscloud Matrix, your top quickbooks hosting provider offers pocket-friendly affordable cloud hosting plans which start from just $23/month. You can choose a plan that accommodates your team size. To accommodate your dynamic business needs, we also offer the option to pay as you go.",
    },
    {
      question: "Does QuickBooks Premier Cloud Hosting support other applications?",
      answer: "Yes, at Winscloud, our cloud hosting supports most third-party apps and add-ons. You can get all your preferred applications integrated with your QuickBooks Premier Hosting for the most seamless cloud hosting experience.",
    },
    {
      question: "Can I host my other QuickBooks apps on the cloud along with QuickBooks Premier Plus hosting?",
      answer: "Yes, you can take multiple QuickBooks versions to the cloud. Our experts at Winscloud can host all your favorite QuickBooks applications for you.",
    },
    {
      question: "How do I access my QuickBooks Premier cloud hosting?",
      answer: "Your QuickBooks Premier hosting can be accessed via your desktop, laptop or any device of your choice with a working internet connection. Our team at Winscloud will provide you with a username and password along with the necessary steps required to access your financial data on your hosted QuickBooks Premier.",
    },
    {
      question: "Can I collaborate with my remote team in real time with QuickBooks Premier hosting?",
      answer: "Yes, multiple users can work on the same set of data or files on QuickBooks Premier hosting in real time. There are no location barriers and the cloud hosted quickbooks can be accessed from multiple devices like phone, tablet, laptop, and desktop with a working internet connection.",
    },
    {
      question: "How many variants are supported with QuickBooks Premier Plus hosting?",
      answer: "Our cloud infrastructure can host all variants of QuickBooks desktop, including QuickBooks Pro, Premier, Enterprise, POS, and Canada, all versions of Sage, and tax applications like Lacerte, Drake, ProSeries, etc. Our team is also capable of hosting and providing support for almost every add-on in case of any technical issues.",
    },
    {
      question: "How is QuickBooks Premier Plus different from QuickBooks Pro, Enterprise desktop and Online versions?",
      answer: "QuickBooks Pro is accounting software that is most suitable for SMBs that are looking to streamline their accounting operations. QuickBooks Premier on the other hand is best for small and mid-sized businesses that have certain industry-specific requirements. For larger businesses that need to manage inventory, track sales, and more, QuickBooks Enterprise is a more viable option.",
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
            QuickBooks Premier Hosting
          </h1>
          <p className='text-xl md:text-3xl bg-gradient-to-r from-orange-500 via-indigo-100 to-green-100 text-transparent bg-clip-text font-kanit mt-4 md:mt-7'>
            Host your QuickBooks Premier on the cloud and make your critical accounting data easily accessible, anytime, anywhere.
          </p>
          <Link to='/trial' aria-label="Start QuickBooks Premier Free Trial">
            <button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Start QuickBooks Premier Hosting Free Trial
            </button>
          </Link>
        </div>
      </header>

      <main>
        <section className="p-4">
          <h2 className="text-center font-serif text-lg md:text-3xl font-bold">
            Seamless Accounting for your Business with QuickBooks Premier Plus Hosting
          </h2>
        </section>

        <section className="flex flex-col md:flex-row justify-between p-4 md:p-8">
          <article className="w-full text-justify font-josefin text-gray-600 md:w-[45%]">
            <p className=" my-2 md:my-4 text-sm md:text-base">
              QuickBooks Premier Plus is one of the most popular accounting software used by CPAs, accountants, and small businesses.
              Hosting the QuickBooks Premier Plus can transform your accounting workflow, boost productivity, and promote multi-user collaboration.
            </p>
            <p className=" text-sm md:text-base">
              Our team at Winscloud, your top quickbooks hosting provider, has helped small and mid-sized businesses completely turn around their business operations
              with services like QuickBooks Pro hosting. We help take your business to the cloud and help your team work remotely, without worrying about the hassles of transitioning
              to the cloud. Our team of experts take care of all your needs and preferences and ensure your business runs smoothly even during transition, ensuring maximum up time.
            </p>
          </article>

          <figure className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
            <img
              className="h-48 md:h-80 border-2 border-black rounded-lg object-cover"
              src="./images/logo/qb-prem.webp"
              alt="QuickBooks Premier Cloud Hosting Interface"
            />
          </figure>
        </section>

        <section className="w-[90%] mx-auto mt-10 flex flex-col items-center">
          <h2 className="font-bold text-center my-4 text-2xl font-kanit">
            QuickBooks Premier Cloud Hosting: Why should you opt for
          </h2>
          <p className="text-gray-600 text-center font-bold">Automate Everyday Accounting Tasks and Focus on Other Important Productive Business Operations</p>
        </section>

        <section className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-red-800 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img src="images/logo/qb2.webp" alt="QuickBooks Premier Budget-Friendly Solutions" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
            <h2 className="font-bold text-xl mb-2 font-kanit">Budget Friendly Solution</h2>
            <p className=" font-montserrat  transition-all duration-300">
              QuickBooks Premier Cloud hosting eliminates the need for an in-house, physical IT infrastructure and therefore the cost of maintaining them.
            </p>
          </article>

          <article className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-red-800  transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img src="images/logo/qb3.webp" alt="Round-the-Clock Support" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
            <h2 className="font-bold text-xl mb-2 font-kanit">Desktop-like Features on Cloud</h2>
            <p className="0 font-montserrat " >
              With QuickBooks Premier hosting, you get the full package – all your desktop application features, your complete data, and other apps with the added flexibility of the cloud.
            </p>
          </article>

          <article className="bg-white/20 hover:text-white hover:bg-red-800  transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img src="images/logo/qb1.webp" alt="Data Security and Recovery" className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28" />
            <h2 className="font-bold text-xl mb-2  font-kanit">Multi-Device Compatibility</h2>
            <p className=" font-montserrat transition-all duration-300">
              Access your critical business data and collaborate with CPAs and bookkeepers on multiple devices like PC, tablet, or phone.
            </p>
          </article>
        </section>

        <section aria-label="QuickBooks Versions" className="text-center">
          <h2 className="text-3xl text-center font-bold font-kanit mt-8">
            Step Up Your Accounting Operations with our QuickBooks Hosting Services
          </h2>
          <nav className="text-blue-500 text-center mt-6 font-bold">
            <Link to="/quickbooks-desktop" className="hover:underline">QuickBooks Desktop</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-pro" className="hover:underline">QuickBooks Pro</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-premier" className="hover:underline">QuickBooks Premier</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-enterprise" className="hover:underline">QuickBooks Enterprise</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-pos" className="hover:underline">QuickBooks POS</Link> <span className="text-black">|</span>{' '}
            <Link to="/quickbooks-canada" className="hover:underline">QuickBooks Canada</Link>
          </nav>
        </section>

        <section className="my-12 w-[90%] mx-auto" aria-label="Why Choose Winscloud">
          <h1 className="text-center font-serif font-semibold text-2xl pt-5">
            Winscloud QuickBooks Premier Cloud Hosting: Why should you choose us as your hosting provider?
          </h1>

          <div className="flex flex-col font-montserrat  md:flex-row  mt-8">

            <div className="md:w-[50%] space-y-4  text-sm p-3">
              <p className=" "><span className=" font-bold ">Pocket-friendly Transition-</span>Our plans are pocket-friendly and can accommodate any changing business needs within minutes.<Link to='/pricing' className="text-blue-500 font-semibold">Check our quickbooks premier cloud hosting pricing here.</Link> </p>
              <p className=" "> <span className=" font-bold my-6 ">Round-the-Clock Tech Support-</span>The expert advisors at Winscloud are available for support, guidance, and troubleshooting issues 24/7/365 so you don’t have to worry about any tech issues during/post transition.</p>
              <p className=""> <span className=" font-bold ">99.99% Up-Time Guarantee- </span>Our team of technical experts work round-the-clock to ensure that you always get maximum server uptime. In case of any technical issue that may cause downtime, our team of experts can provide full support to resolve the issue.</p>
            </div>

            <div className="md:w-[50%] space-y-4 p-3  text-sm">

              <p className=" "><span className=" font-bold ">Add-Ons Integration- </span> We are fully equipped with hosting multiple add-ons and integrating third party apps along with QuickBooks Premier hosting and promote seamless collaboration with other CPAs and bookkeeper</p>
              <p className=""><span className=" font-bold ">High Data Security- </span> Security is a concern for most CPAs and business owners. With QuickBooks Premier cloud hosting, you have the freedom to provide access to authorized users only.</p>
              <p className=" "><span className=" font-bold ">High-performance Servers- </span>  Our state-of-the-art high-performance, SSD-based remote servers offer seamless collaboration with your remote team and automated data backups for quick recovery in case of disaster</p>
            </div>
          </div>
        </section>

        <section className="my-12 w-[90%] mx-auto bg-gray-200 rounded-lg text-center">
          <h2 className="text-center font-kanit font-semibold text-2xl pt-5 px-2">
            Want us to help you decide which version of QuickBooks Premier Hosting is best for your small business?
          </h2>
          <div className="flex justify-center">
            <Link to='/get-in-touch'>
              <button className="border-2 my-6 md:my-6 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
                Get in Touch for quickbooks premier hosting with our Expert
              </button>
            </Link>
          </div>
        </section>

        <section className="w-[90%] mx-auto mt-10 flex flex-col items-center">
          <h2 className="font-bold font-kanit">
            QuickBooks Premier Cloud Hosting FAQs -
          </h2>
        </section>

        <section className="max-w-3xl mx-auto mt-10 border rounded-lg shadow-lg overflow-hidden" aria-label="Frequently Asked Questions">
        
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
        </section>
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  )
}

export default QuickBook_prem
