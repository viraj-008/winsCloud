import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Partner from './Partner';

import { FaUnlockAlt } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

import { SlGlobe } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";

import Expriance from './Expriance';
import Awards from './Awards';



type Feature = {
  name: string
  description: string
  icon: React.ElementType
}

const features: Feature[] = [
  {
    name: 'QuickBooks Hosting',
    description: 'Seamlessly migrate and remotely access your preferred QuickBooks Software, be it QuickBooks Pro, QuickBooks Premier, and QuickBooks Enterprise anytime, anywhere.',
    icon: AiOutlineThunderbolt,
  },
  {
    name: ' Sage Hosting',
    description: 'Whether you are using Sage 50, Sage 100, Sage 300, and Sage 500 , our Sage Hosting solution streamlines your accounting processes seamlessly.',
    icon: AiOutlineThunderbolt,
  },
  {
    name: 'Drake Hosting',
    description: 'Wish tax filing was more efficient, quicker, and secure? Our cloud-based Drake Hosting solutions are perfect to make tax preparation smoother for both you and your team..',
    icon: AiOutlineThunderbolt,
  },
  {
    name: ' ProSeries Hosting',
    description: 'Experience productive, accurate, and hassle-free tax preparation on-the-go, with our ProSeries Hosting solution.',
    icon: AiOutlineThunderbolt,
  },
  {
    name: 'Lacerte Hosting',
    description: 'GWinscloud Matrix’s Lacerte Hosting solutions let you experience faster data transfer that is secure and saves time and helps you modernize your accounting operations.',
    icon: AiOutlineThunderbolt,
  },
  {
    name: ' ATX Hosting',
    description: 'Maximize efficiency in tax compliance with one of our top hosting services, ATX Hosting – a powerful solution for both tax professionals as well as accounting firms.',
    icon: AiOutlineThunderbolt,
  },
  {
    name: 'UltraTax Hosting',
    description: 'Our UltraTax Hosting solution helps increase user collaboration across multiple devices, making tax filing reliable, fast and hassle-free.',
    icon: AiOutlineThunderbolt,
  },
  {
    name: ' ACT Hosting',
    description: 'Make tax season stress-free and add more power to your tax preparation with ACT Hosting by Winscloud.',
    icon: AiOutlineThunderbolt,
  },
  {
    name: '    TaxWise Hosting',
    description: 'Facing a busy tax season? Our TaxWise hosting offers real-time collaboration, secure and fast data transfer, allowing you to handle your workload with ease.',
    icon: AiOutlineThunderbolt,
  },

]

const cards = [
  {
    icon: <FaUnlockAlt />,
    title: "Data Security",
    content:
      "We prioritize the safety of your data with robust encryption, multi-factor authentication, and regular backups to ensure your information is always secure.",
  },
  {
    icon: <MdOutlineDashboardCustomize />,
    title: "Customizable Platform",
    content:
      "Tailor your workspace to meet your unique business needs with scalable features, integrations, and tools designed for maximum flexibility.",
  },
  {
    icon: <IoIosTimer />,
    title: "5 Minute Support Response",
    content:
      "Our dedicated support team responds within 5 minutes to ensure minimal downtime and maximum satisfaction for all our clients.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "24x7 Assistance",
    content:
      "Get round-the-clock assistance from our team of experts, ready to support your business anytime, anywhere.",
  },
];

const Home: React.FC = () => {




  return (
    <>


      <section className="min-h-[80vh] rounded-b-xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2  gap-12 items-center mt-8">

          {/* Left Content */}
          <div className="text-center md:text-left mt-8">
            <motion.h1
              className="text-slate-100 font-bold font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Celebrating a Decade of <br /> Powerful Servers
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Get the financial tools and insights to <br className="hidden sm:block" />
              start, build, and grow your business.
            </p>


           <Link to="/trial"><button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-black text-white font-mono text-sm px-6 py-3 rounded-lg shadow-md border border-blue-600 transition duration-300 hover:scale-105">
              <span className="text-green-400">//</span> Request a Free Demo
            </button></Link>
          </div>

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
            className="w-full flex justify-center"
          >
            <img
              src="/images/Home/homePNG.png"
              alt="Server"
              className="min-w-[200px] max-w-[500px] w-full min-h-[100px] max-h-[400px] h-auto rounded-lg object-contain"
            />
          </motion.div>



        </div>
      </section>


      <main>
        <section className="px-5 md:px-24 py-16 ">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold font-serif text-blue-900 mb-4">
            Remote Access Has Never Been Smoother
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Scale Your Business Efficiently with <span className="text-blue-700 font-semibold">Winscloud</span> – Your Top Cloud Hosting Provider
          </p>

          <div className="mt-12 flex flex-col-reverse md:flex-row gap-12 items-center">
            <article className="text-justify text-gray-800 leading-7 font-montserrat text-[17px] ">
              <p className="mb-6 text-center">
                At <strong>Winscloud</strong>, we empower businesses with scalable, flexible, and secure cloud hosting. Our around-the-clock support ensures your services never skip a beat—so you can focus on what you do best.
              </p>
              <h2 className="text-2xl text-center md:text-3xl font-bold text-blue-800 mb-4">
                We absolutely love to see your business scale!
              </h2>
              <p className="mb-6 text-center">
                Our infrastructure dynamically adjusts to your growth, offering seamless cloud adoption. With <strong>Winscloud</strong>, you're always ready for what’s next—no lag, no stress.
              </p>
            </article>


          </div>
          <h1 className="text-3xl md:text-5xl text-center font-bold font-montserrat text-blue-900">
            Why Choose Winscloud Matrix?
          </h1>
          <p className="text-center text-lg text-gray-700 mt-4 font-medium max-w-3xl mx-auto">
            Winscloud Matrix Cloud Hosting: Fast-track Your Tax and Accounting Practice
          </p>
          <p className="mt-6 text-gray-700 text-lg  text-center font-montserrat max-w-5xl mx-auto">
            We simplify tax and accounting workflows by integrating powerful desktop applications with cloud flexibility—helping modern businesses streamline operations effortlessly.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Secure and Reliable Hosting",
                desc: "Your data is protected with top-tier security against cyber threats. Focus on growth—we'll handle the protection.",
              },
              {
                title: "Efficiency for YOUR Business",
                desc: "Experience 99.99% uptime with ultra-reliable servers. Collaborate with ease—whether from the office or a vacation spot.",
              },
              {
                title: "24/7 Technical Assistance",
                desc: "Get round-the-clock help from expert support. Issues are solved swiftly so you can run your business uninterrupted.",
              },
              {
                title: "Affordable Cloud Hosting",
                desc: "Our shared and dedicated plans are built to scale with your business—and your budget.",
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

        <Expriance/>


        <section className="bg-gradient-to-br from-blue-50 to-gray-100 my-8 text-gray-800 py-16 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE TEXT */}
            <div>
              <h2 className="text-3xl text-blue-700 md:text-4xl font-bold mb-6">
                How Wins Cloud Helps You Make a Difference
              </h2>
              <p className="text-lg text-gray-700 font-serif">
                Over <strong>15,000+</strong> clients have chosen to place their confidence in us.
                We believe in the synergy between tax and accounting applications and the cloud.
                That's why we blend highly efficient virtual workspace solutions with extensive
                experience and technical proficiency to build dependable infrastructure and deliver
                favorable business outcomes.
              </p>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`
        rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300
        border border-white text-white
        ${index % 2 === 0 ? "translate-y-4 mb-3 rotate-[-2deg]" : "-translate-y-2 rotate-[1deg]"}
        sm:${index === 1 ? "translate-y-6" : index === 2 ? "-translate-y-4" : ""}
        bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black
      `}
                >
                  <span className="text-3xl mb-3 text-yellow-300 inline-block">{card.icon}</span>
                  <h3 className="text-xl text-gray-200 font-bold mb-2">{card.title}</h3>
                  <p className="text-sm font-josefin">{card.content}</p>
                </div>
              ))}
            </div>


          </div>
        </section>
        <div className="bg-gradient-to-br w-[96%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          {/* Logo or Badge */}
          <div className="  rounded-lg shadow-md">
            <img
              src="/images/logo/trial.jpg" // Replace with your actual image path
              alt="Wins Cloud"
              className="h-[200px]  rounded-2xl object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Wins Cloud - Empowering Remote Collaboration
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Collaborate with your team in real-time, irrespective of where you are on the planet.
            </p>
            <p className="mb-6">
              As a proud provider of cutting-edge cloud solutions, Wins Cloud helps businesses collaborate seamlessly, securely, and efficiently — anywhere, anytime.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Start FREE Trial - Claim Top hosting Services Today!
            </button>
          </div>

          {/* React Icon */}

        </div>

        <section className=" w-[96%] mx-auto  p-6 rounded-lg   py-16">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900  sm:text-4xl">
                Our Cloud Hosting Services
              </h2>
              <p className="mt-4 text-lg text-gray-700 font-josefin max-w-2xl mx-auto">
                We help set-up a practical, secure, and flexible workspace to help you stay ahead of competition. Our holistic set of top hosting services includes a range of tax and accounting software, with 99.99% uptime, cutting-edge cloud infrastructure, and 24/7 support from Winscloud’s in-house team of experts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div className="relative  rounded-2xl p-[2px] transition-all duration-500">
                  <div className="relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg ">
                    {/* Top Right External Link Button */}
                    <button
                      type="button"
                      className="absolute top-4 right-4 hover:scale-125 transition-transform duration-300 z-10"
                    >
                      <FaExternalLinkAlt />
                    </button>

                    {/* Card Image */}
                    <img
                      src="https://api.datalemur.com/assets/0f1e55eb-d6ee-4d7a-a0bf-8e192e98c4c0.png"
                      alt={feature.name}
                      className="w-full h-48 object-cover"
                    />

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex justify-center mb-3 mt-4">
                        <feature.icon className="h-8 w-8 text-yellow-600" />
                      </div>

                      <h3 className="text-xl font-bold text-center text-gray-800">
                        {feature.name}
                      </h3>

                      <p className="text-sm text-center text-gray-600 mt-2 leading-relaxed">
                        {feature.description}
                      </p>


                    </div>
                  </div>


                </div>

              ))}

            </div>
          </div>
        </section>


       

       <Awards />

        {/* Data Centers Section */}


        <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-3xl shadow-2xl p-10 max-w-7xl mx-auto text-gray-800 space-y-10">

          {/* Header */}
          <h2 className="text-4xl font-extrabold text-center text-blue-900 drop-shadow-sm">
            Our Global Data Centers
          </h2>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE: Data Center List */}
            <ul className="space-y-5 text-lg leading-relaxed">
              {[
                { text: 'To ensure', highlight: 'seamless access for all users.' },
                { text: 'We offer', highlight: 'high data availability and uptime.' },
                { text: 'Built with a focus on', highlight: 'optimum data security.' },
                { text: 'Partnered with', highlight: 'SSAE-18 Type II (SOC-1/SOC-2) Certified facilities.' },
                { text: 'Compliant with', highlight: 'HI-TECH and HIPAA standards.' },
                { text: 'Strategically located in', highlight: 'major U.S. cities.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-blue-700 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    {item.text} <span className="font-semibold text-gray-900">{item.highlight}</span>
                  </span>
                </li>
              ))}
            </ul>






            {/* RIGHT SIDE: Globe with Pins */}
            <div className="relative w-full h-[400px] rounded-xl  flex items-center justify-center">

              {/* Container for Globe and Pins */}
              <div className="relative w-[300px] h-[300px]">
                {/* Globe Icon */}
                <SlGlobe className="text-blue-500 text-[300px] opacity-90 absolute top-0 left-0 z-0" />
                <p className='text-white px-4 py-1 rounded-md gap-2 flex z-50 absolute font-josefin bg-blue-700'><FaMapMarkerAlt /> U.s.a</p>
                <p className='text-white px-4 py-1 rounded-md gap-2 flex z-50 absolute top-12 font-josefin bg-blue-800'><FaMapMarkerAlt /> India</p>

                {/* Pins on the Globe */}
                {[
                  { top: "60%", left: "18%", label: "Delhi, India" },
                  { top: "50%", left: "35%", label: "New York, USA" },
                  { top: "38%", left: "52%", label: "London, UK" },
                  { top: "55%", left: "75%", label: "Tokyo, Japan" },
                ].map((loc, idx) => (
                  <div
                    key={idx}
                    className="absolute flex flex-col items-center cursor-pointer group z-10"
                    style={{ top: loc.top, left: loc.left }}
                  >
                    {/* Glowing Ping Effect */}
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-6 h-6 rounded-full bg-red-400 opacity-50 animate-ping"></div>
                      <div className="absolute w-6 h-6 rounded-full border-2 border-red-600"></div>
                      <div className="w-4 h-4 bg-red-700 rounded-full relative z-10"></div>
                    </div>
                    {/* Label */}

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </main>


      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default Home;