import React from 'react';
// import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import Partner from './Partner';
import { useEffect, useState } from 'react';
import { FaRegHandshake } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { TbDeviceTabletCheck } from "react-icons/tb";
import { FaUnlockAlt } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

import { FaCheck } from 'react-icons/fa'
import { SlGlobe } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import clsx from 'clsx'

type BillingCycle = 'M' | 'A'

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Start with essential tools to boost your online presence.',
    monthlyPrice: 69,
    annualPrice: 49,
    link: 'https://github.com/ansub/syntaxUI',
    features: [
      'SEO Strategy & Topic Recommendations',
      'Competitor Analysis to stand out',
      'Built-in Keyword Research',
      'Target latest Google trends',
      'SEO optimized blogs and socials',
      'Technical SEO analysis and Reports',
      'Target 100+ regions and languages',
    ],
  },
  {
    name: 'Professional',
    description:
      'Unlock enhanced features and premium content to supercharge your business.',
    monthlyPrice: 299,
    annualPrice: 199,
    link: 'https://github.com/ansub/syntaxUI',
    features: [
      'Everything in Basic plan',
      'Get 25 premium blogs',
      'Index up to 1000 pages',
      'Premium support',
      'Local SEO',
      'SEO Agent',
    ],
  },
  {
    name: 'Premium',
    description:
      'Ultimate customization and dedicated support for enterprises.',
    monthlyPrice: 2499,
    annualPrice: 1666,
    link: 'https://github.com/ansub/syntaxUI',
    features: [
      'Everything in Professional plan',
      'Get Unlimited premium blogs',
      'Add your own AI Model key',
      'Premium support & training sessions',
    ],
  },
]

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
    icon: AiOutlineThunderbolt ,
  },
  {
    name: ' ProSeries Hosting',
    description: 'Experience productive, accurate, and hassle-free tax preparation on-the-go, with our ProSeries Hosting solution.',
    icon: AiOutlineThunderbolt ,
  },
  {
    name: 'Lacerte Hosting',
    description: 'GWinscloud Matrix’s Lacerte Hosting solutions let you experience faster data transfer that is secure and saves time and helps you modernize your accounting operations.',
    icon: AiOutlineThunderbolt ,
  },
  {
    name: ' ATX Hosting',
    description: 'Maximize efficiency in tax compliance with one of our top hosting services, ATX Hosting – a powerful solution for both tax professionals as well as accounting firms.',
    icon: AiOutlineThunderbolt,
  },
  {
    name: 'UltraTax Hosting',
    description: 'Our UltraTax Hosting solution helps increase user collaboration across multiple devices, making tax filing reliable, fast and hassle-free.',
    icon: AiOutlineThunderbolt ,
  },
  {
    name: ' ACT Hosting',
    description: 'Make tax season stress-free and add more power to your tax preparation with ACT Hosting by Winscloud.',
    icon: AiOutlineThunderbolt ,
  },
  {
    name: '    TaxWise Hosting',
    description: 'Facing a busy tax season? Our TaxWise hosting offers real-time collaboration, secure and fast data transfer, allowing you to handle your workload with ease.',
    icon: AiOutlineThunderbolt ,
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


  const stats = [
    { label: 'Clients', count: 4670, suffix: '+', icon: <FaRegHandshake /> },
    { label: 'Years of Experience', count: 10, suffix: '+', icon: <FaAward /> },
    { label: 'Apps Hosted', count: 400, suffix: '+', icon: <TbDeviceTabletCheck /> },
  ];

  const [animatedCounts, setAnimatedCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const maxCount = Math.max(...stats.map(stat => stat.count));
    const duration = maxCount / 100;
    const incrementValues = stats.map(stat => Math.ceil(stat.count / (duration / 0.6)));

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setAnimatedCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(newCounts[index] + incrementValues[index], stat.count);
          return newCounts;
        });
      }, 10);
    });

    // Cleanup intervals
    return () => intervals.forEach(clearInterval);
  }, [])

  const [billingCycle, setBillingCycle] = useState<BillingCycle>('M')
  return (
    <>


      <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black text-white px-6 py-12">
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


            <button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-black text-white font-mono text-sm px-6 py-3 rounded-lg shadow-md border border-blue-600 transition duration-300 hover:scale-105">
              <span className="text-green-400">//</span> Request a Free Demo
            </button>
          </div>

          {/* Right Image with Animation */}
          <motion.div
            animate={{
              x: [0, -10, 0, 10, 0],
              y: [0, 10, 0, -10, 0],
              opacity: 1, // Always fully visible
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


      <div className="w-[90%] mx-auto my-8 rounded-xl bg-gradient-to-br from-blue-50 to-gray-100 shadow-xl">
        <div className="py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <img className="mx-auto h-20 mb-4" src="images/logo/rockk.png" alt="Company Logo" />
            <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
              Precision-Driven Skills, Purposeful Experience
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              With years of industry experience and modern tools, we deliver precise financial
              solutions that support your business growth and compliance with confidence.
            </p>
          </div>

          <div className="mt-12">
            <div className="max-w-5xl mx-auto">
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <dd className="text-5xl font-extrabold text-green-600">
                      {animatedCounts[index]}
                      {animatedCounts[index] === stat.count && stat.suffix}
                    </dd>
                    <div className="mt-2 text-center text-gray-700 text-lg font-semibold flex items-center gap-2">
                      <span className="text-yellow-400 text-3xl">{stat.icon}</span>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>





      <main>
        <section className='px-5 md:px-20'>
          <h1 className='text-xl md:text-2xl text-center py-4 font-bold font-serif text-gray-800'>Remote Access Has Never Been Smoother</h1>
          <p className='text-center text-md mt-4 font-semibold'>
            Scale Your Business Efficiently with Winscloud – Your Top Cloud Hosting Provider
          </p>

          <div className="flex flex-col md:flex-row justify-between mt-12 items-center">
            <article className="w-full text-justify md:w-[55%] text-gray-600 font-josefin md:pr-8">
              <p>
                At Winscloud, we help businesses transform securely with our reliable,
                scalable, and flexible cloud hosting solutions. Right from the get-go, we
                work around-the-clock to ensure your business is up and running, acting
                as your partners in growth. To make that happen, we pay due attention to
                ensure that our advanced cloud infrastructure adapts to your business
                needs and promotes easy scalability.
              </p>
              <h2 className="text-2xl md:text-3xl my-4">
                We absolutely love to see your business scale!
              </h2>
              <p>
                To make that happen, we pay due attention to ensure that our advanced
                cloud infrastructure adapts to your business needs and promotes easy
                scalability. With Winscloud as your application hosting provider, scaling
                up and adapting to your dynamic business needs will be the least of your
                worries.
              </p>
            </article>

            <figure className="w-full md:w-[45%] mt-6 md:mt-0">
              <img
                className="w-full max-w-[600px] h-auto border-gray-200 border-2 rounded-lg"
                src="./images/logo/herowind.webp"
                alt="Winscloud hosting solutions"
              />
            </figure>
          </div>
        </section>

        <section className='px-5 md:px-20 mt-20'>
          <h1 className='text-3xl md:text-4xl text-center font-bold font-josefin'>Why Choose Winscloud Matrix?</h1>
          <p className='text-center text-md mt-4 font-semibold'>
            Winscloud Matrix Cloud Hosting: Fast-track Your Tax and Accounting Practice
          </p>
          <p className='md:text-center mt-7 text-gray-600 text-justify font-josefin'>
            At Winscloud, we believe in ironing out the challenges that modern businesses face in handling their tax and accounting operations with the help of technology. Our cloud hosting services help our business owners seamlessly transition to the cloud, combining the robust features of desktop applications with the cloud infrastructure.
          </p>

          <div className='flex flex-col text-justify text-gray-700 font-josefin md:flex-row justify-around md:mt-9 px-5 md:px-12'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 md:mt-5 mt-5 font-montserrat text-sm p-4">
              {/* Row 1 */}
              <div className='bg-blue-100 shadow-lg p-2 rounded-lg'>
                <p>
                  <span className="font-semibold text-black">Secure and Reliable Hosting –</span>
                  Data Security is our top priority when it comes to our operations. At Winscloud Matrix, we protect your data from all sorts of cyber threats so you can put away your data theft worries and focus on more productive areas.
                </p>
              </div>
            <div className='bg-blue-100 shadow-lg p-4 rounded-lg'>
                <p>
                  <span className="font-semibold text-black">Efficiency for YOUR Business –</span>
                  We promise 99.99% uptime, around-the-clock. Our heavy-duty, reliable and state-of-the-art servers ensure industry standard performance, so that you can collaborate with your team from the comfort of your home or when you are on holiday.
                </p>
              </div>

              {/* Row 2 */}
              <div className='bg-blue-100 shadow-lg p-4 rounded-lg'>
                <p>
                  <span className="font-semibold text-black">24/7 Assistance –</span>
                  Our team of technical experts are available at your beck and call 24/7 to provide you with the best technical assistance to troubleshoot issues and keep your system running smoothly.
                </p>
              </div>
             <div className='bg-blue-100 shadow-lg p-4 rounded-lg'>
                <p>
                  <span className="font-semibold text-black">Affordable Cloud Hosting –</span>
                  Our hosting plans can be customized to your business needs and are easy on the pocket. You can choose between our Shared and Dedicated Hosting Plans.
                </p>
              </div>
            </div>
          </div>

          {/* <aside className='border md:w-[90%] mx-auto rounded-lg my-8 p-2 bg-red-800 shadow-lg'>
            <h2 className='font-serif text-white text-center text-2xl font-semibold'>
              Collaborate with your team in real-time, irrespective of where you are on the planet.
            </h2>
            <p className='text-center text-gray-100 px-2 font-josefin my-4 font-semibold'>
              We value your privacy and ensure round-the-clock security and easy accessibility to help you carry out your operations seamlessly.
            </p>
            <div className='flex justify-center'>
              <Link to="/trial">
                <button className='border font-josefin my-10 md:my-3 bg-green-600 hover:bg-green-700 text-md md:text-lg px-6 md:px-12 text-white py-2 rounded-full'>
                  Start FREE Trial - Claim Top Hosting Services Today!
                </button>
              </Link>
            </div>
          </aside> */}
        </section>

        {/* <section className='w-[90%] mx-auto'>
          <h1 className='font-kanit text-center text-3xl font-semibold'>Our Cloud Hosting Services</h1>
          <p className='font-josefin text-justify text-gray-600 my-4'>
            We help set-up a practical, secure, and flexible workspace to help you stay ahead of competition. Our holistic set of top hosting services includes a range of tax and accounting software, with 99.99% uptime, cutting-edge cloud infrastructure, and 24/7 support from Winscloud’s in-house team of experts.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 text-center'>
            <div>
              <h1 className='text-[#355e3b] text-center font-bold font-kanit text-2xl'>QuickBooks Hosting</h1>
              <p className='font-serif'>Seamlessly migrate and remotely access your preferred QuickBooks Software, be it QuickBooks Pro, QuickBooks Premier, and QuickBooks Enterprise anytime, anywhere.</p>
            </div>

            <div>
              <h1 className='text-[#355e3b] font-bold font-kanit text-2xl'>Sage Hosting </h1>
              <p className='font-serif'>Whether you are using Sage 50, Sage 100, Sage 300, and Sage 500 , our Sage Hosting solution streamlines your accounting processes seamlessly.</p>
            </div>

            <div>
              <h1 className='text-[#355e3b] font-bold font-kanit text-2xl'>Drake Hosting</h1>
              <p className='font-serif'>Wish tax filing was more efficient, quicker, and secure? Our cloud-based Drake Hosting solutions are perfect to make tax preparation smoother for both you and your team.</p>
            </div>

            <div>
              <h1 className='text-[#355e3b] font-bold font-kanit text-2xl'> ProSeries Hosting
              </h1>
              <p className='font-serif'>Experience productive, accurate, and hassle-free tax preparation on-the-go, with our ProSeries Hosting solution.</p>
            </div>

            <div>
              <h1 className='text-[#355e3b] font-bold font-kanit text-2xl'>Lacerte Hosting</h1>
              <p className='font-serif'>Winscloud Matrix’s Lacerte Hosting solutions let you experience faster data transfer that is secure and saves time and helps you modernize your accounting operations.</p>
            </div>

            <div>
              <h1 className='text-[#355e3b] font-bold font-kanit text-2xl'>ATX Hosting</h1>
              <p className='font-serif'>Maximize efficiency in tax compliance with one of our top hosting services, ATX Hosting – a powerful solution for both tax professionals as well as accounting firms.</p>
            </div>

            <div>
              <h1 className='text-[#355e3b] font-bold font-kanit text-2xl'>UltraTax Hosting</h1>
              <p className='font-serif'>Our UltraTax Hosting solution helps increase user collaboration across multiple devices, making tax filing reliable, fast and hassle-fre</p>
            </div>

            <div>
              <h1 className='text-[#355e3b] font-bold font-kanit text-2xl'>ACT Hosting</h1>
              <p className='font-serif'>Make tax season stress-free and add more power to your tax preparation with ACT Hosting by Winscloud.</p>
            </div>

            <div>
              <h1 className='text-[#355e3b] font-bold font-kanit text-2xl'>TaxWise Hosting</h1>
              <p className='font-serif'>Facing a busy tax season? Our TaxWise hosting offers real-time collaboration, secure and fast data transfer, allowing you to handle your workload with ease.</p>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl mt-6 font-serif text-gray-800 text-center font-semibold'>
              Are You Ready to Move to Application Cloud Hosting with Winscloud: Your Top Hosting Provider?
            </h2>
            <button className='border mt-8 font-josefin mx-auto my-10 md:my-5 bg-green-600 text-md md:text-lg px-6 md:px-12 text-white py-2 rounded-lg'>
              Explore Our Pricing Plans Today!
            </button>
            <p className='font-josefin px-6 text-gray-600 text-center'>
              At Winscloud, we guarantee our customers hiccup-free business experience, with 99.99% uptime and data security. The expertise, technology, and infrastructure that our trusted partners bring plays a key role in ensuring that your transition to the cloud is seamless.
            </p>
          </div>
        </section> */}

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
             <div className="relative min-h-[140px] rounded-2xl p-[2px] bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 hover:from-gray-700 hover:to-gray-500 transition-all duration-500">
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow h-full relative">

    {/* Top Right Button */}
    <button
      type="button"
      className="absolute top-4 right-4 hover:scale-125 transition-transform duration-300 "
    >
     <FaExternalLinkAlt />
    </button>

    {/* Icon */}
    <div className="mb-3 flex justify-center mt-8"> {/* Added top margin to avoid overlap */}
      <feature.icon className="h-8 w-8 text-yellow-600" />
    </div>

    {/* Title */}
    <h3 className="text-lg font-bold text-center text-gray-800">
      {feature.name}
    </h3>

    {/* Description */}
    <p className="mt-2 text-sm text-center text-gray-600">
      {feature.description}
    </p>
  </div>
</div>

     ))}
            </div>
          </div>
        </section>


        <div className="px-4  py-12">
          <div className="mb-10 text-center">
            <span className="rounded-full px-3 py-1 text-4xl font-semibold uppercase text-blue-800">
              Pricing
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-800 ">
              Fair pricing, unfair advantage.
            </h2>
            <p className="mt-2 text-gray-600 ">
              Get started with Acme today and take your business to the next level.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setBillingCycle('M')}
                className={clsx(
                  'rounded-lg px-4 py-2 text-sm font-medium',
                  billingCycle === 'M'
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-700 hover:bg-blue-400'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('A')}
                className={clsx(
                  'rounded-lg px-4 py-2 text-sm font-medium',
                  billingCycle === 'A'
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-700 hover:bg-blue-400 '
                )}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-300 p-6 "
              >
                <p className="text-xl font-bold uppercase text-blue-900">
                  {plan.name}
                </p>
                <p className="mb-4 text-sm text-gray-600 ">
                  {plan.description}
                </p>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={billingCycle}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="text-3xl font-semibold text-gray-900 "
                  >
                    ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                    <span className="text-sm font-medium text-gray-600 ">
                      /{billingCycle === 'M' ? 'month' : 'year'}
                    </span>
                  </motion.p>
                </AnimatePresence>

                <button
                  onClick={() => window.open(plan.link)}
                  className="mt-6 w-full rounded-lg bg-blue-700 py-2 text-sm font-medium text-white hover:bg-blue-900"
                >
                  Get Started
                </button>

                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 ">
                      <FaCheck className="mr-2 text-red-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
     ;

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