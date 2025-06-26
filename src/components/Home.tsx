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


import Expriance from './Expriance';
import Awards from './Awards';



type Feature = {
  name: string
  description: string
  icon: React.ElementType
  images: string
}

const features: Feature[] = [
  {
    name: 'QuickBooks Hosting',
    description: 'Seamlessly migrate and remotely access your preferred QuickBooks Software, be it QuickBooks Pro, QuickBooks Premier, and QuickBooks Enterprise anytime, anywhere.',
    icon: AiOutlineThunderbolt,
    images: "images/Home/QuickBooks.webp"
  },
  {
    name: ' Sage Hosting',
    description: 'Whether you are using Sage 50, Sage 100, Sage 300, and Sage 500 , our Sage Hosting solution streamlines your accounting processes seamlessly.',
    icon: AiOutlineThunderbolt,
    images: "images/Home/Sage1.webp"
  },
  {
    name: 'Drake Hosting',
    description: 'Wish tax filing was more efficient, quicker, and secure? Our cloud-based Drake Hosting solutions are perfect to make tax preparation smoother for both you and your team..',
    icon: AiOutlineThunderbolt,
    images: "images/Home/Drake.webp"
  },
  {
    name: ' ProSeries Hosting',
    description: 'Experience productive, accurate, and hassle-free tax preparation on-the-go, with our ProSeries Hosting solution.',
    icon: AiOutlineThunderbolt,
    images: "images/Home/ProSeries.webp"
  },
  {
    name: 'Lacerte Hosting',
    description: 'GWinscloud Matrix’s Lacerte Hosting solutions let you experience faster data transfer that is secure and saves time and helps you modernize your accounting operations.',
    icon: AiOutlineThunderbolt,
    images: "images/Home/Lacerte.webp"
  },
  {
    name: ' ATX Hosting',
    description: 'Maximize efficiency in tax compliance with one of our top hosting services, ATX Hosting – a powerful solution for both tax professionals as well as accounting firms.',
    icon: AiOutlineThunderbolt,
    images: "images/Home/ATX.webp"
  },
  {
    name: 'UltraTax Hosting',
    description: 'Our UltraTax Hosting solution helps increase user collaboration across multiple devices, making tax filing reliable, fast and hassle-free.',
    icon: AiOutlineThunderbolt,
    images: "images/Home/UltraTax.webp"
  },
  {
    name: ' ACT Hosting',
    description: 'Make tax season stress-free and add more power to your tax preparation with ACT Hosting by Winscloud.',
    icon: AiOutlineThunderbolt,
    images: "images/Home/ACT.webp"
  },
  {
    name: '    TaxWise Hosting',
    description: 'Facing a busy tax season? Our TaxWise hosting offers real-time collaboration, secure and fast data transfer, allowing you to handle your workload with ease.',
    icon: AiOutlineThunderbolt,
    images: "images/Home/TaxWise.webp"
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


      <section className="min-h-screen rounded-b-xl flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto pt-6 w-full grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-center md:text-left lg:w-[800px]">
            <motion.h1
              className="text-slate-100 mt-4 font-bold font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Celebrating a Decade of Powerful Servers
            </motion.h1>

            <p className="text-md sm:text-lg md:text-xl font-bold max-w-xl mb-10 bg-gradient-to-r from-yellow-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
              Get the financial tools and insights to start, build, and grow your business.
            </p>

            <Link to="/trial">
              <button className="relative group overflow-hidden">
                <span className="absolute inset-0.5 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full
                    translate-y-[-2px] 
                    group-active:translate-y-0 transition-transform"></span>
                <span className="relative flex items-center justify-center gap-2 px-6 py-3 
                    text-white font-semibold tracking-wide">
                  Start FREE Trial - Claim Top Hosting Services Today!
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
              alt="Server"
              className="w-full max-w-md h-auto rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </section>



      <main>
        <section className="px-5 md:px-24  ">
          <h1 className="text-3xl md:text-5xl mt-2 text-center font-extrabold  max-w-6xl  font-serif text-blue-900 mb-2">
            Remote Access Has Never Been Smoother
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Scale Your Business Efficiently with <span className="text-blue-700 font-semibold">Winscloud</span> – Your Top Cloud Hosting Provider
          </p>

          <section className="max-w-6xl mx-auto px-4 py-6">
            <div className="text-center ">

              <p className="text-3xl font-bold font-inter text-blue-900 black  mx-auto">
                We absolutely love to see your business scale!
              </p>
            </div>

            <div className="bg-white max-w-6xl text-justify mx-auto  pt-1 ">

              <p className="text-gray-700 font-montserrat ">
                At Winscloud, we help businesses transform securely with our reliable, scalable, and flexible cloud hosting solutions. Right from the get-go, we work around-the-clock to ensure your business is up and running, acting as your partners in growth. To make that happen, we pay due attention to ensure that our advanced cloud infrastructure adapts to your business needs and promotes easy scalability.
                To make that happen, we pay due attention to ensure that our advanced cloud infrastructure adapts to your business needs and promotes easy scalability. With Winscloud as your application hosting provider, scaling up and adapting to your dynamic business needs will be the least of your worries.
              </p>
            </div>




          </section>


          <div className=" flex flex-col-reverse md:flex-row gap-12 items-center">
          </div>
          <h1 className="text-3xl md:text-3xl text-center font-bold font-montserrat text-blue-900">
            Why Choose Winscloud Matrix?
          </h1>
          <p className="text-center text-lg text-gray-700 mt-2 font-medium max-w-3xl mx-auto">
            Winscloud Matrix Cloud Hosting: Fast-track Your Tax and Accounting Practice
          </p>
          <p className="mt-3  text-gray-700 text-lg max-w-6xl text-justify  font-montserrat  mx-auto">
            At Winscloud, we believe in ironing out the challenges that modern businesses face in handling their tax and accounting operations with the help of technology. Our cloud hosting services help our business owners seamlessly transition to the cloud, combining the robust features of desktop applications with the cloud infrastructure.
          </p>

        </section>
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-6 p-4 mt-14">
          {[
            {
              title: "Secure and Reliable Hosting",
              desc: "Data Security is our top priority when it comes to our operations. At Winscloud Matrix, we protect your data from all sorts of cyber threats so you can put away your data theft worries and focus on more productive areas.",
            },
            {
              title: "Adding Efficiency to Running YOUR Business",
              desc: "We promise 99.99% uptime, around-the-clock. Our heavy-duty, reliable and state-of-the-art servers ensure industry standard performance, so that you can collaborate with your team from the comfort of your home or when you are on holiday.",
            },
            {
              title: "24/7 Technical Assistance",
              desc: " Our team of technical experts are available at your beck and call 24/7 to provide you with the best technical assistance to troubleshoot issues and keep your system running smoothly.",
            },
            {
              title: "Affordable Cloud Hosting, Tailored for YOUR Business Needs",
              desc: "Our hosting plans can be customized to your business needs and are easy on the pocket. You can choose between our Shared and Dedicated Hosting Plans.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100  p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <Expriance />


        <section className="bg-gradient-to-br from-blue-50 to-gray-100 my-8 text-gray-800 py-16 px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* LEFT SIDE TEXT */}
              <div className="px-4 sm:px-0">
                <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] text-blue-700 font-bold mb-6 leading-tight">
                  How Wins Cloud Helps You Make a Difference
                </h2>
                <p className="text-lg text-gray-700 font-serif leading-relaxed">
                  Over <strong>15,000+</strong> clients have chosen to place their confidence in us.
                  We believe in the synergy between tax and accounting applications and the cloud.
                  That's why we blend highly efficient virtual workspace solutions with extensive
                  experience and technical proficiency to build dependable infrastructure and deliver
                  favorable business outcomes.
                </p>
              </div>

              {/* RIGHT SIDE CARDS - Adjusted for iPad responsiveness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6 px-4 sm:px-0">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`
              rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300
              border border-white text-white min-h-[200px]
              ${index % 2 === 0 ? "translate-y-4 mb-4  md:rotate-[-4deg]" : "-translate-y-2 md:rotate-[-4deg]"}
              ${index === 1 ? "sm:translate-y-6" : index === 2 ? "sm:-translate-y-8" : ""}
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
          </div>
        </section>
        <div className="bg-gradient-to-br w-[90%] mx-auto from-blue-900 to-blue-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
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
            <Link to="/trial"><button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Start FREE Trial - Claim Top hosting Services Today!
            </button></Link>
          </div>

          {/* React Icon */}

        </div>

        <section className=" w-[96%] mx-auto  p-6 rounded-lg   py-">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900  sm:text-4xl">
                Our Cloud Hosting Services
              </h2>
              <p className="mt-4 text-lg text-gray-700 font-josefin max-w-2xl mx-auto">
                We help set-up a practical, secure, and flexible workspace to help you stay ahead of competition. Our holistic set of top hosting services includes a range of tax and accounting software, with 99.99% uptime, cutting-edge cloud infrastructure, and 24/7 support from Winscloud’s in-house team of experts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 p-4 lg:grid-cols-3 gap-8">
  {features.map((feature) => {
   
    
    
    return (
     <div 
  key={feature.name} 
  className="relative rounded-2xl transition-transform duration-300 group"
>
  <div className="relative bg-blue-300 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col border-[4px] border-transparent hover:border-green-500">
    {/* Card Image - Cover Style */}
    <div className="w-full h-48 overflow-hidden">
      <img
        src={feature.images}
        alt={feature.name}
        className="w-full h-full rounded-lg border object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Card Content */}
    <div className="p-5 flex-grow">
      <div className="flex justify-center mb-3 mt-4">
        <button
          type="button"
          className="hover:scale-125 transition-transform duration-300 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2"
        >
          <FaExternalLinkAlt className="text-gray-700" />
        </button>
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
    );
  })}
</div>
          </div>
        </section>




        <Awards />



        <div className="px-6 md:px-10 pt-16 -my-8 mx-auto rounded-md text-gray-800 max-w-6xl">

          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 drop-shadow-sm mb-10">
            Our Global Data Centers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE: Data Center List */}
            <ul className="space-y-6 text-lg leading-relaxed">
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
            <div className="relative w-full h-[400px] rounded-xl flex items-center justify-center">
              {/* Container for Globe and Pins */}
              <div className="relative w-[350px] h-[350px]">

                {/* Custom Globe Image */}
                <img
                  src="images/logo/map.png"
                  alt="World Map"
                  className="w-full h-full object-contain absolute top-0 left-0 z-0"
                />

                {/* Key Locations Highlight */}
                <div className="absolute top-0 left-0 w-full h-full">
                  {[
                    { city: 'Phoenix,AZ,USA', top: '20%', left: '25%' },
                    { city: 'Dallas,TX,USA', top: '30%', left: '30%' },
                    { city: 'Ashburn,VA,USA', top: '25%', left: '40%' },
                    { city: 'Atlanta,GA,USA', top: '35%', left: '35%' }
                  ].map((location) => (
                    <span
                      key={location.city}
                      style={{
                        top: location.top,
                        left: location.left,
                      }}
                      className="absolute bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap shadow-md transform -translate-x-1/2 -translate-y-1/2"
                    >
                      {location.city}
                    </span>
                  ))}
                </div>
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