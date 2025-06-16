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
      title: "Enterprise Security",
      description: "Multiple layers of security including firewalls, intrusion detection, and 24/7 monitoring to protect your critical business data."
    },
    {
      icon: <FaServer className="text-3xl mb-2 text-blue-500" />,
      title: "Reliable Infrastructure",
      description: "Tier-III and Tier-IV data centers with redundant power, cooling, and network connectivity for maximum uptime."
    },
    {
      icon: <FaLock className="text-3xl mb-2 text-blue-500" />,
      title: "Data Encryption",
      description: "256-bit encryption for data at rest and in transit, ensuring your information remains confidential and secure."
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-josefin mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              Introducing Winscloud
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Your Ultimate Hub for Secure, High-Performance Hosting Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-kanit">
              Reliable Cloud Solutions for Your Business
            </h2>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                Winscloud Matrix is a trusted cloud solution provider with years of experience delivering secure and reliable cloud hosting services. We specialize in hosting solutions for CPA firms, accountants, and midsized businesses using QuickBooks, Sage Products, and Tax applications.
              </p>
              <p>
                Our mission is to enhance your firm's productivity through tailored application hosting solutions designed to meet your specific requirements. With enterprise-level security and 24/7 monitoring, we ensure your data remains protected at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 font-kanit">
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

        {/* Data Center Partners */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaServer className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                Data Center Partners
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Our Tier-III and Tier-IV data centers in New York, Dallas, and Phoenix are HIPAA and HITECH certified, delivering superior hosting with enterprise-grade security.
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                With SSAE-18 Type-II (SOC-1/SOC-2) certification, we ensure your data remains protected against all threats, including power outages and extreme weather conditions.
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Our global network of five data centers and one network PoP provides seamless connectivity with 2x10G, 4x10G, or 1x100G options in U.S. locations.
              </p>
              <div className="mt-6">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Our Locations:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {['Los Angeles, California (Network PoP)', 'Phoenix, Arizona', 'Seattle, Washington', 'Atlanta, Georgia', 'Chicago, Illinois', 'Ashburn, Virginia'].map((location, i) => (
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

        {/* Security Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                Enterprise Security Protocols
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Intrusion detection and mitigation systems with network anti-virus software and Cisco firewalls
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Enterprise-grade hardware from HP, Cisco, and Network Appliance
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Redundant power infrastructure with generators, UPS, and HVAC systems
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                99.9% server hardware reliability with our Server Cluster solution
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                High-performance redundant network architecture for maximum uptime
              </p>
            </div>
          </div>
        </section>

        {/* Network Speed Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
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
                Our robust network guarantees excellent connectivity and availability of your hosted applications and business files, providing seamless access from anywhere in the world.
              </p>
              <p>
                With SSD servers in our state-of-the-art data centers, we deliver the fastest possible performance combined with 256-bit encryption, multi-level authentication, and advanced anti-virus protection.
              </p>
              <p>
                Continuous network scanning, surveillance cameras, and on-site security personnel ensure your data remains protected against unauthorized access 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* HIPAA Compliance */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
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
                Winscloud provides HIPAA-compliant hosting solutions through our SSAE-18 Type-II (SOC-1/SOC-2) certified data centers, enabling secure processing and maintenance of electronic health information.
              </p>
              <p>
                Our comprehensive security measures include:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Role-specific access controls and monitoring</li>
                <li>Stringent privacy policies compliant with HIPAA regulations</li>
                <li>Expert security personnel monitoring data 24/7</li>
                <li>Advanced controls for media and device management</li>
                <li>Business Associate Agreements (BAA) with all vendors</li>
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