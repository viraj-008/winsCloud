import Partner from "../Partner";
import { FaShieldAlt, FaServer, FaTachometerAlt, FaLock, FaNetworkWired, FaHospital } from 'react-icons/fa';

const Introduction = () => {
  const features = [
    {
      icon: <FaTachometerAlt className="text-3xl mb-2 text-blue-500" />,
      title: "High Performance",
      description: "SSD servers that operate at breakneck speeds deliver great performance instantly. Access your apps without interruption from any location and on any device."
    },
    {
      icon: <FaShieldAlt className="text-3xl mb-2 text-blue-500" />,
      title: "Security",
      description: "We have a fully-clustered multi-tier cloud platform with 256-bit encryption and round-the-clock network monitoring to guarantee the highest level of data protection."
    },
    {
      icon: <FaServer className="text-3xl mb-2 text-blue-500" />,
      title: "Redundancy",
      description: "You can use and access your software to its fullest potential owing to multi-layer redundancy. Winscloud can help you get the most out of your application."
    },
    {
      icon: <FaLock className="text-3xl mb-2 text-blue-500" />,
      title: "Monitoring",
      description: "For maximum efficiency, our data centers’ qualified, competent, and devoted engineers continuously monitor the condition and protection of every server."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-screen filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-600 mix-blend-screen filter blur-3xl animate-float2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4  lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-josefin mb-6">
            <span className="bg-clip-text text-center text-transparent bg-gradient-to-r from-blue-300 to-white">
              Introducing Winscloud
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Your Ultimate Hub for Secure, High-Performance Hosting Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        {/* Overview Section */}
        <section className="mb-8  mx-auto">
          <div className="p-6 md:p-4 text-justify">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-inter">
              Reliable Cloud Solutions for Your Business
            </h2>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                Winscloud Matrix is a well-known cloud solution that has been providing cloud hosting services for many years and can assure you that we will assist you with a reliable and secure cloud platform to host your data. We offer a full range of cloud hosting services for CPA firms, accountants, and midsized businesses using QuickBooks, Sage Products, and Tax applications. Winscloud is devoted to enhancing the productivity and effectiveness of your accounting firm as your technology partner and facilitator. Our talented and devoted squad strives to recognize your unique requirements and develop tailored application hosting solutions to satisfy your needs.
              </p>
              <p>
                Our intelligent cloud hosting solutions are adaptable and accessible, giving you many alternatives for managing your company. If it’s about your business, data security is paramount. We take great care to assure complete data protection, as seen by the enterprise-level security mechanisms used in our data centers. The data centers in which we house our servers are SSAE-18 Type II (SOC-2) certified, ensuring the security of your information.
              </p>
              <p>
                You can count on our security team to monitor your hosted IT infrastructure and network environment 24X7 for better safety. Our team continuously monitors and prevents intrusive hackers, bugs, malware, and espionage to keep your system operational. You can rest assured that only the members of your authorized team and you will have access to the files and programs you host with us.
              </p>
              <p>
                We offer a peerless QuickBooks experience on the cloud as part of the International Association of Cloud and Managed Service Providers (MSPAlliance). WinsCloud assists you and your clients in preserving a large number of crucial billable hours. We provide integrated cloud platforms that work with many multiple platforms, gadgets, and software platforms. Furthermore, we assist with applications that run on Windows, including Sage, Drake, Ultratax CS, ProSeries Tax, TaxWise, and Lacerte.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-4  mx-auto text-justify">
          <div className=" p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaServer className="text-2xl" />
              </div>
              <h2 className="text-2xl text-center font-bold text-gray-800 font-inter">
                Data Center Partners
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Our data centers are among the highest rated in the industry, allowing us to deliver a superior hosting experience to users. We have collaborated with data centers in the cities of New York, Dallas, and Phoenix that is HIPAA and HITECH certified to provide the best hosting experience. Get the advantage of seamless access to the files and applications you host, powered by our state-of-art data centers.
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                With Tier-III and Tier-IV data centers that are fully SSAE-18 Type-II (SOC-1/SOC-2) certified and HIPAA and HITECH audited, you can be assured that your data is safe and secure. Our data centers deliver seamless access to your hosted apps and data with the highest level of security owing to powerful cloud resources and high-tech components. You can be sure that our data centers can withstand extreme weather conditions in addition to power shortages and deliver a seamless connection.
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2 ">•</span>
                Our five data centers and one network point of presence (PoP) are strategically positioned around the globe, making it easy to access all of the major domestic and international connectivity points. Make your business more successful by leveraging our Local Internet Exchange and 2x10G, 4x10G, or 1x100G connectivity in our U.S. locations.
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2"></span>
                We provide you with colocation services that are extremely safe, redundant, and dependable from several locations across the world. Choosing the right data center location can make all the difference to your company. Your ability to give them a better experience depends on how near you are to them. You can guarantee a high level of availability and 100% availability for your services with worldwide interconnection points and solid network infrastructure. Our high-bandwidth connectivity, business-grade security, and great performance provide your company a solid foundation. See each of our locations: (1) Los Angeles, California (Network PoP) (2) Phoenix, Arizona (3) Seattle, Washington (4) Atlanta, Georgia (5) Chicago, Illinois (6) Ashburn, Virginia
              </p>
              <div className="mt-6">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Our Locations:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {['Phoenix,AZ,USA,', "Ashburn,VA,USA", 'Phoenix, Arizona', 'Dallas,TX,USA'].map((location, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-8  text-justify mx-auto">
          <section className="mb-4 w-[90%] mx-auto">
            <h2 className="text-3xl mb-4 font-bold text-center mt-12 text-gray-800 font-inter">
              Data Center Security
            </h2>
            <div className="">
              <div className="flex items-center mb-6">
                <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h2 className="text-2xl text-start font-bold text-gray-800 font-kanit">
                  Enterprise Security Protocols
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 font-montserrat">
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  We use intrusion detection and mitigation systems, network anti-virus software, cutting-edge Cisco firewalls, and other defense technologies as part of our security systems.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  We host all of our applications on reliable hardware from vendors such as HP, Cisco, Network Appliance, etc.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Our data centers include top-notch infrastructure, including generators, top-tier UPS, and HVAC. This essentially makes us impervious to environmental problems. Our servers at Winscloud are powered and cooled by redundant power supplies.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  We guarantee 99.9% server hardware reliability with our Server Cluster solution.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Servers are connected to our redundant switched and routed network, which is geared towards high performance and uptime at all times. Our mission is to provide the highest quality hardware to all our customers, regardless of their plan.
                </p>
              </div>
            </div>
          </section>
          <h2 className="text-2xl mt-4 md:text-3xl font-bold text-center text-gray-800 mb-8 font-inter">
            Why Choose Winscloud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

      


        {/* Network Speed Section */}
        <section className="mb-4  text-justify mx-auto">
          <div className=" p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaNetworkWired className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                Network Speed & Reliability
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                Our robust network guarantees excellent connectivity and availability of your hosted apps and corporate files in addition to offering a seamless connection.
              </p>
              <p>
                The SSD servers located in our cutting-edge data centres have robust Intrusion Warning and Prevention Systems, 256-bit encryption, multi-level authentication, and the most recent anti-virus software to provide the most secure environment possible.
              </p>
              <p>
                Additionally, we take all essential precautions to prevent unwanted access, including 24/7 network scanning, Surveillance cameras, on-site security officers, and other measures.
              </p>
            </div>
          </div>
        </section>

        {/* HIPAA Compliance */}
        <section className="-mb-9 text-justify  mx-auto">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaHospital className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                HIPAA Compliance
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                The Health Insurance Portability and Accountability Act (HIPAA) was passed into law to make it simpler for employees to keep their health insurance when their employment changes. Additionally, it promotes the use of electronic health records to improve the effectiveness and general quality of the nation’s healthcare system through easy information sharing.

              </p>
              <p>
                Winscloud, a prominent application/software hosting company, is committed to protecting client data throughout all phases of the system. We are able to provide highly secure and continuous solutions owing to our SSAE-18 Type-II (SOC-1/SOC-2) certified data centers. It enables HIPAA-covered companies and their business partners to obtain a cutting-edge, dependable, and secured cloud infrastructure for the archiving, processing, and upkeep of secure electronic health information.

              </p>
              <p>
                Our data centers are equipped with several best-in-class security measures to ensure compliance with HIPAA when it comes to storage, access, management, and sharing of data. We practice the following major policies:
              </p>

              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>User accounts should be monitored for proper role-specific logins.</li>
                <li>A stringent privacy policy that follows HIPAA regulations.</li>
                <li>Highly qualified and knowledgeable individuals to monitor data security.
                  Control of application access.</li>
                <li>Reusable and recyclable media and devices with advanced controls.</li>
                <li>Every vendor involved in the processing and handling of data must sign a Business Associate Agreement (BAA).</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Partner />
    </div>
  );
};

export default Introduction;