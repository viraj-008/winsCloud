import Partner from "../Partner";

const DocItHosting = () => {
  return (
    <>
      <header className="h-auto w-full pb-10">
        <div className="w-full flex bg-[url('/images/Home/server.webp')] bg-cover bg-center pt-20 px-5 md:px-20 items-center min-h-[230px] md:min-h-[430px]">
          <div className="w-full text-center md:text-left">
            <h1 className="text-white px-2 p-4 rounded-lg font-kanit text-3xl md:text-6xl leading-tight">
              Doc IT Hosting
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className="p-2">
          <h2 className="text-center font-semibold font-serif text-gray-600 text-2xl">
            Doc-it Hosting Provider Streamlines Document Management for Businesses
          </h2>
          <article className="w-[96%] font-semibold text-gray-700 mx-auto">
            <p className="font-montserrat text-center my-2 md:my-4 text-sm md:text-base">
              Doc-it Hosting Provider, essential for accounting firms and small to mid-sized organizations, offers a cost-effective, secure solution for data management. Doc-it suites employ a 4-step process in each document lifecycle: gather, process, store, and deliver, ensuring organized and confidential file management. <br />
              Winscloud, a trusted cloud hosting company, provides advanced solutions to small enterprises. Doc-it hosting enables CPAs and organizations to achieve accurate tax return filing. Hosted by us, you can harness its full potential, accessing it from anywhere, anytime, via any internet-connected device.
            </p>
            <p className="font-montserrat text-center text-sm md:text-base">
              Fishbowl, a renowned inventory management solution, is enhanced by secure hosting, flexible access, and seamless collaboration, making it a valuable asset for businesses. As a trusted Doc-it Hosting Provider, we ensure industry-standard security measures like SSL, firewall, and synchronous replication. Our SAS 70 and SSAE 18 certifications attest to our commitment to data security and reliability, providing businesses with peace of mind and the assurance of top-tier protection for their valuable data.
            </p>
          </article>
        </section>

        <section className="w-[90%] mx-auto flex justify-center mt-8">
          <figure>
            <img
              className="h-48 md:h-80 border-2 border-black rounded-lg object-cover"
              src="./images/logo/doc-it.webp"
              alt="Doc-it Hosting Interface"
            />
          </figure>
        </section>

        <section>
          <h2 className="text-center text-lg md:text-2xl my-5 px-4 font-bold">
            Benefits of Winscloud Doc-it Hosting
          </h2>
          <p className="text-center px-4 font-montserrat">
            Benefits of Winscloud Doc-it Hosting
          </p>
        </section>

        <section className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white/20 backdrop-blur-lg p-6 border hover:text-white hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img
              src="images/logo/qb2.webp"
              alt="Inventory Tracking"
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28"
            />
            <h3 className="font-bold text-xl mb-2 font-kanit">Inventory Tracking</h3>
            <p className="text-gray-700 font-montserrat transition-all duration-300">
              Fishbowl provides real-time tracking of inventory levels, helping businesses monitor stock levels, manage reorder points, and prevent stockouts or overstock situations.
            </p>
          </article>

          <article className="bg-white/20 backdrop-blur-lg p-6 hover:text-white hover:bg-green-500 transition-all duration-300 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img
              src="images/logo/qb3.webp"
              alt="Scalability"
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28"
            />
            <h3 className="font-bold text-xl mb-2 font-kanit">Scalability</h3>
            <p className="text-gray-700 font-montserrat">
              As your business expands, Doc-it software can adapt to accommodate your growth. Easily incorporate additional features and users to fulfill your evolving requirements as your operations scale up.
            </p>
          </article>

          <article className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img
              src="images/logo/qb1.webp"
              alt="Inventory Management"
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28"
            />
            <h3 className="font-bold text-xl mb-2 font-kanit">Inventory Management</h3>
            <p className="text-gray-800 font-montserrat transition-all duration-300">
              The software provides Canadian businesses with a comprehensive payroll solution, encompassing automated tax calculations, T4 preparation, and direct deposit services.
            </p>
          </article>

          <article className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img
              src="images/logo/qb1.webp"
              alt="99.99% uptime"
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28"
            />
            <h3 className="font-bold text-xl mb-2 font-kanit">99.99% uptime</h3>
            <p className="text-gray-800 font-montserrat transition-all duration-300">
              With regularly available servers, you can work on your finances without any service breakdown.
            </p>
          </article>

          <article className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img
              src="images/logo/qb1.webp"
              alt="Reliable Services"
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28"
            />
            <h3 className="font-bold text-xl mb-2 font-kanit">Reliable Services</h3>
            <p className="text-gray-800 font-montserrat transition-all duration-300">
              The cloud hosting services offered by Winscloud are SSAE-18 Type II (SOC-2) certified safe, for using maximum security on its servers.
            </p>
          </article>

          <article className="bg-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
            <img
              src="images/logo/qb1.webp"
              alt="Backup & Recovery"
              className="mx-auto hover:scale-125 hover:translate-y-2 transition-all duration-300 mb-4 w-28"
            />
            <h3 className="font-bold text-xl mb-2 font-kanit">Backup & Recovery</h3>
            <p className="text-gray-800 font-montserrat transition-all duration-300">
              We have automated data backup and recovery option to prevent any accidental data loss and for deleted files
            </p>
          </article>
        </section>

        <section>
          <h2 className="text-center text-lg md:text-2xl my-5 mt-12 underline px-4 font-bold">
            What can you do with us
          </h2>
          <div className="w-[90%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white/20 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2 bg-red-600 text-white font-josefin py-3 rounded-lg">
                Efficient Document Management: Explore Doc-it Hosting Solutions
              </h3>
              <p className="text-gray-700 p-2 rounded-md shadow-lg font-montserrat transition-all duration-300">
                Experience streamlined document management with Doc-it hosting. Easily organize, store, and access your documents from any location, fostering collaboration and productivity. Our secure hosting guarantees data protection while providing flexibility for your business operations. Collaborate seamlessly with team members and scale your document management as your business expands. With Doc-it hosting, empower your business with efficient solutions that drive productivity and growth. Explore the advantages of hosted document management with Doc-it today.
              </p>
            </article>

            <article className="bg-white/20 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2 px-3 bg-red-600 text-white font-josefin py-3 rounded-lg">
                Boost Your Document Management: Embrace Hosted Doc-it Solutions
              </h3>
              <p className="text-gray-700 p-2 rounded-md shadow-lg font-montserrat transition-all duration-300">
                Enhance your document management prowess with Hosted Doc-it solutions. Seamlessly organize, store, and access your documents from anywhere, fostering collaboration and productivity. Our secure hosting guarantees data protection while offering flexibility for your business operations. Collaborate effortlessly with team members and scale your document management as your business grows. With Hosted Doc-it, empower your business with efficient solutions that drive productivity and growth. Discover the advantages of hosted document management with Doc-it today.
              </p>
            </article>

            <article className="bg-white/20 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2 px-3 bg-red-600 text-white font-josefin py-3 rounded-lg">
                Reliable Infrastructure, Trusted Support: Hosting Providers at Your Service
              </h3>
              <p className="text-gray-700 p-2 rounded-md shadow-lg font-montserrat transition-all duration-300">
                Hosting providers play a crucial role in business operations, delivering dependable hosting solutions to keep websites and applications accessible online. They handle server infrastructure, offering technical support, security measures, and maintenance services. Hosting providers offer diverse hosting plans, including shared, VPS, dedicated, and cloud hosting, tailored to meet various needs. By partnering with hosting providers, businesses can ensure optimal performance, uptime, and security for their online presence, freeing them to focus on core operations while experts manage the technical aspects.
              </p>
            </article>

            <article className="bg-white/20 backdrop-blur-lg p-6 border shadow-[4px_4px_10px_rgba(0,0,25,0.5)] rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2 px-3 bg-red-600 text-white font-josefin py-3 rounded-lg">
                Efficient Document Management: Unleash the Power of Cloud Doc-it
              </h3>
              <p className="text-gray-700 p-2 rounded-md shadow-lg font-montserrat transition-all duration-300">
                Discover the convenience of Cloud Doc-it for efficient document management. Easily organize, store, and access your documents from any location, fostering collaboration and productivity. Our secure cloud platform ensures data protection while providing flexibility for your business operations. Collaborate seamlessly with team members and scale your document management as your business expands. With Cloud Doc-it, empower your business with efficient solutions that drive productivity and growth. Experience the benefits of cloud-based document management with Doc-it today.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <Partner />
      </footer>
    </>
  );
};

export default DocItHosting;
