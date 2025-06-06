import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Partner from './Partner';

const Home: React.FC = () => {
  return (
    <>
      <header className="w-full flex bg-[url('/images/Home/cloude.jpg')] bg-cover bg-center px-5 items-center">
        <div className='w-full text-center md:text-left'>
          <motion.h1
            className="text-slate-100 mt-[80px] md:mt-[100px] font-bold font-josefin text-3xl md:text-6xl text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.8 }}
          >
            Celebrating a Decade of <br /> Powerful Servers
          </motion.h1>
          <p className='text-xl md:text-3xl bg-gradient-to-r from-gray-400 via-indigo-100 to-green-100 text-transparent bg-clip-text font-serif mt-4 md:mt-7'>
            Get the financial tools and insights to<br /> start, build, and grow your business
          </p>
          <Link to="/trial">
            <button className='mx-auto md:mx-0 flex border my-5 md:my-16 bg-green-600 text-xl md:text-4xl px-6 md:px-12 text-white font-josefin py-2 rounded-lg'>
              Request a Free Demo
            </button>
          </Link>
        </div>
      </header>

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

          <div className='flex flex-col text-justify text-gray-700 font-josefin md:flex-row justify-around mt-9 px-5 md:px-12'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-8 font-montserrat text-sm p-4">
              {/* Row 1 */}
              <div>
                <p>
                  <span className="font-semibold text-black">Secure and Reliable Hosting –</span>
                  Data Security is our top priority when it comes to our operations. At Winscloud Matrix, we protect your data from all sorts of cyber threats so you can put away your data theft worries and focus on more productive areas.
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold text-black">Efficiency for YOUR Business –</span>
                  We promise 99.99% uptime, around-the-clock. Our heavy-duty, reliable and state-of-the-art servers ensure industry standard performance, so that you can collaborate with your team from the comfort of your home or when you are on holiday.
                </p>
              </div>

              {/* Row 2 */}
              <div>
                <p>
                  <span className="font-semibold text-black">24/7 Assistance –</span>
                  Our team of technical experts are available at your beck and call 24/7 to provide you with the best technical assistance to troubleshoot issues and keep your system running smoothly.
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold text-black">Affordable Cloud Hosting –</span>
                  Our hosting plans can be customized to your business needs and are easy on the pocket. You can choose between our Shared and Dedicated Hosting Plans.
                </p>
              </div>
            </div>
          </div>

          <aside className='border md:w-[90%] mx-auto rounded-lg my-8 p-2 bg-red-800 shadow-lg'>
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
          </aside>
        </section>

        <section className='w-[90%] mx-auto'>
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
        </section>
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default Home;