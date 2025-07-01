import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
import { MdDevices } from "react-icons/md";
import { IoIosDesktop } from "react-icons/io";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { motion } from "framer-motion";
import ServiceLink from "../ServiceLink";
import Expriance from "../Expriance";
import Awards from "../Awards";
function UltraTaxHosting() {
  const faqs = [
    {
      question: "What is UltraTax Hosting?",
      answer:
        "UltraTax CS hosting is the perfect solution for businesses that wish to experience greater flexibility, multiple user collaboration, and 24/7 availability irrespective of distance. With UltraTax CS hosting, users can collaborate remotely with multiple people, work on the same set of data from any location, and file taxes stress-free and flawlessly.",
    },
    {
      question: "How much does UltraTax Cloud Hosting service cost?",
      answer:
        "Our UltraTax CS tax hosting pricing starts at just $23 per month. Prices may increase with additional services. You can choose between shared and dedicated hosting, storage options, and other services and pay for what you really use. We are also scalable and can accommodate any changing need without any hiccups.",
    },
    {
      question: "Does UltraTax CS hosting provide complete features of the desktop software?",
      answer:
        "Yes, you get to enjoy all the impeccable features of the UltraTax CS desktop software by hosting it on the cloud. We can also transfer all or part of your data on the cloud along with your tax preparation software if you need.",
    },
    {
      question: "I still want to use my add-ons along with the UltraTax cloud hosting solution. Is it possible?",
      answer:
        "Our cloud experts team is capable of hosting all add-ons on the cloud along with your UltraTax CS software. If you also use any third party add-on, we would be happy to host it for  you.",
    },
    {
      question: "Which version of UltraTax is supported by UltraTax Cloud services?",
      answer:
        "We support all versions of UltraTax CS on the cloud. You just need to have a license of the version of UltraTax you own and provide it to your hosting provider before your transition.",
    },
    {
      question: "What happens to the existing data on the desktop app if we opt for UltraTax CS tax hosting?",
      answer:
        "You can choose to migrate all or part of your data to the cloud along with your UltraTax CS tax hosting. Your chosen hosting plan should also accommodate your data size.",
    },
    {
      question: "Do we get tech support with Hosting UltraTax Software? Are there any hidden costs involved?",
      answer:
        "We have a dedicated team of trained IT professionals to tackle all your technical queries and issues. Be assured that we provide 24/7/365 support completely free of cost for our clients.",
    },
    {
      question: "Why should I choose UltraTax Cloud Hosting solution? How is it beneficial for my business?",
      answer:
        "UltraTax cloud hosting solution caters to the modern business needs of remote access, collaboration on the go, round-the-clock availability, bank grade data security, and maximum uptime. Winscloud Matrix’s UltraTax hosting solution fulfills these needs and more, helping your business grow multi-folds.",
    },
    {
      question: "Can I get a demo before choosing UltraTax hosting?",
      answer:
        "Yes. After you choose your preferred hosting plan, we complete your cloud setup. Once completed, we offer you a free demo to the UltraTax software hosting so you can start strong.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="md:min-h-[90vh] rounded-b-3xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12 lg:py-0">

         <Helmet>
          <title>UltraTax Hosting | Cloud-Based UltraTax CS Solutions</title>
          <meta name="description" content="Get secure, reliable UltraTax CS cloud hosting with Winscloud Matrix. Enhance your tax workflow with 24/7 access, top-tier performance, and expert support." />
        </Helmet>

        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >Ultra Tax Hosting
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-2xl my-3 md:my-0 md:mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Work with remote teams & clients, file taxes seamlessly, from any location and any device with UltraTax CS Hosting
            </p>

            <Link to="/trial">
              <button className="relative group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Start One-month FREE Trial
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <motion.div
            animate={{
              x: [0, -10, 0, 10, 0],
              y: [0, 10, 0, -10, 0],
              opacity: 1,
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex mt-12 md:justify-end"
          >
            <img
              src="/images/Home/homePNG.png"
              alt="ServerImage"
              className="w-full max-w-md h-[230px] md:h-[260px] -my-8  md:my-0  lg:mt-12 xl:mt-0  xl:h-auto rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>

      <main>
        <section>
          <h2 className='text-3xl text-center py-4 w-[88%] mx-auto font-bold font-inter text-textPrimary'>
            UltraTax Cloud Hosting Service: Perfect solution for tax professionals and accounting firms to enhance productivity
          </h2>


        </section>

        <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4  md:px-16 md:py-6">
          {/* IMAGE on the right (or bottom on mobile) */}
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-lg border-4 border-blue-300 shadow-2xl rounded-2xl object-contain"
              src="./images/logo/ultratax.webp"
              alt="ultraTax hosting"
            />

          </figure>

          <article className="w-full md:w-1/2 text-center md:text-start  space-y-4">
            <h2 className="font-semibold text-textPrimary text-justify  text-xl md:text-xl ">
              UltraTax CS is a professional tax preparation software that helps businesses accomplish more in terms of tax filing by leveraging automation to save their time and enhance efficiency. UltraTax CS hosting means using a high-performing, fast, virtual, remote server to use the UltraTax software and its data on the cloud. UltraTax cloud hosting solution allows tax preparers and accounting firms to collaborate with their clients from any location, saving several hours a day on travelling to and from their location or staying tied up to their work computer.
            </h2>
            <p className="font-montserrat text-gray-700 text-sm text-justify md:text-base">
              One of the easiest ways to elevate productivity and have an error-free, stress-free tax season is to opt for UltraTax CS tax hosting. You can still use all the elaborate features of the UltraTax desktop software and enjoy greater flexibility, security, efficiency, and collaboration with UltraTax hosting. With an experienced cloud hosting provider, such as Winscloud Matrix, you can get the most comfortable cloud experience without worrying about incurring additional IT and maintenance costs.
            </p>

          </article>
        </section>

        <section className=" pt-3 mx-auto mt-10 flex flex-col items-center  bg-gradient-to-br from-blue-50  to-gray-100">
          <h1 className="text-3xl md:text-4xl text-center font-bold font-inter text-blue-900 p-2 ">
            Simplify Your Tax Preparation with UltraTax Cloud Hosting service
          </h1>

          <div className="h-full my-8 w-full  ">
            <div className="grid gap-14 md:grid-cols-3 w-[90%] mx-auto md:gap-5">
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <MdDevices />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Multiple Device Support </h1>
                <p className="px-4 text-gray-500">
                  Access UltraTax cloud hosting service from your phone, home or office desktop, or tablet and stay connected with your printers and scanners connected via the internet.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <IoIosDesktop />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Desktop-like Experience</h1>
                <p className="px-4 text-gray-500">
                  Enjoy all features of the desktop software with UltraTax CS tax hosting for the most productive, hassle-free, and easygoing tax preparation season.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                  <MdOutlineWifiProtectedSetup />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Add-ons Integration</h1>
                <p className="px-4 text-gray-500">
                  UltraTax CS Cloud Hosting supports more than 200 add ons and third party apps, helping you integrate all the useful tools to make your tax filing productive.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="w-[90%] mx-auto py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
            Simplify Your Tax Preparation with UltraTax Cloud Hosting service
          </h1>
          <p className="text-justify text-lg md:text-center font-montserrat text-gray-800">At Winscloud, we understand the need for businesses to be available round-the-clock and have helped multiple small and medium-sized businesses with their UltraTax hosting. Our reliable team of cloud experts provide their cloud knowledge, expertise, and 24/7 support to tackle all your hosting related needs and concerns.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Multi-User Collaboration",
                desc: "UltraTax Hosting allows multiple users to collaborate seamlessly, on the same file. This helps take your tax filing to the next level, making your hectic tax season seamless, productive, and  error free",
              },
              {
                title: "99.9% Uptime",
                desc: "Our state-of-the-art servers ensure 99.99% uptime. Your business is always running, elevating customer satisfaction, and tax season hassle-free.",
              },
              {
                title: "Flexible Pricing",
                desc: " Our pay-as-you-go model allows our clients to alternate their needs as they go. We readily accommodate all your dynamic business needs and you pay only for what you use.",
              },
              {
                title: "Dedicated Support",
                desc: "Our cloud experts are well-trained in UltraTax CS Cloud hosting for small to mid-sized businesses. They work dedicatedly to help resolve all sorts of issues faced by businesses",
              },
              {
                title: "Same-day Transitiont",
                desc: " Our team of experts at Winscloud Matrix vouch for a quick, smooth transition. In just 2 hours, your UltraTax software can be hosted in the cloud. Data transfer, however, may take longer.",
              },
              {
                title: "Data Backup",
                desc: "  With Winscloud Matrix’s UltraTax cloud hosting service, your client’s critical tax information and other data is kept completely safe under multiple security layers and multiple backups.",
              },


            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-br w-[90%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl mt-7 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
              Would you like us to help you decide on the best plan for YOUR business? Start a One-Month FREE TRIAL to make an informed decision
            </h1>
            <Link to='/trial'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full font-semibold transition block mx-auto">
                Start Your Free Trial
              </button>
            </Link>
          </div>
        </div>


        <ServiceLink />

        <div className="py-16 w-[90%] mx-auto bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 font-inter mb-2 text-center">
              Simplify Your Tax Preparation with UltraTax Cloud Hosting service
            </h1>
            <p className="font-inter max-w-4xl mx-auto text-gray-800 text-center my-6 font-semibold">At Winscloud, we help all small and mid-sized businesses transition to UltraTax CS cloud hosting in three simple steps –
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


              {/* Card 2 */}
              <div className="flex flex-col h-full">
                <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <h2 className="text-gray-100 text-xl font-semibold">
Select a suitable hosting plan
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
Check out our hosting plans here and select the plan that best suits your business needs. Our plans are flexible, allowing you to scale up and down as you go.

                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col h-full">
                <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <h2 className="text-gray-100 text-xl font-semibold">
Provide Key Software Details
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
Your cloud expert will require key information like your license details, your software version, among other details to provide you with a customized cloud setup.

                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col h-full">
                <div className="flex rounded-xl h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black p-8 flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <div className="w-10 h-10 mb-4 md:mb-3 md:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <h2 className="text-gray-100 text-xl font-semibold">
Start Your Free Demo
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-300">
Once the setup is complete with your stated requirements, you can ask your cloud expert to give you a free demo of your UltraTax Cloud Hosting service.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Expriance />
        <Awards />

      <section className="my-12 w-[90%] mx-auto">
  <h1 className="text-center font-inter font-bold text-3xl text-textPrimary p-2">
    UltraTax CS Hosting Frequently Asked Questions
  </h1>

  <div className="max-w-3xl mx-auto mt-10 border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
    {faqs.map((faq, index) => (
      <div key={index} className="border-b border-gray-100 last:border-b-0">
        <button
          className="w-full text-left flex justify-between items-center p-5 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => toggleFAQ(index)}
        >
          <span className="font-josefin w-[90%] text-gray-800 text-lg font-medium">
            {faq.question}
          </span>
          <div
            className={`flex items-center justify-center h-8 w-8 rounded-full ${
              openIndex === index ? "bg-red-100" : "bg-gray-100"
            } transition-all duration-300`}
          >
            {openIndex === index ? (
              <FaMinus className="text-red-600 h-3 w-4" />
            ) : (
              <FaPlus className="text-gray-600 h-3 w-4" />
            )}
          </div>
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 bg-gray-50 text-gray-700">
            {faq.answer && (
              <p className="font-montserrat text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      </main>

      <Partner />
    </>
  );
}

export default UltraTaxHosting;
