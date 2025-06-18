import Partner from "../Partner";
import { FaFileAlt, FaShieldAlt, FaExclamationTriangle, FaBan, FaCopyright, FaExchangeAlt, FaGlobe } from 'react-icons/fa';

const Policy = () => {
  const policyItems = [
    {
      icon: <FaBan className="text-2xl text-blue-500" />,
      title: "Spamming",
      description: "Sending unsolicited bulk/commercial email without recipient consent is prohibited as it negatively impacts network performance and client perceptions of our services."
    },
    {
      icon: <FaCopyright className="text-2xl text-blue-500" />,
      title: "Intellectual Property Violations",
      description: "Actions that violate patents, copyrights, trademarks, or other intellectual property rights of businesses or individuals are strictly prohibited."
    },
    {
      icon: <FaExclamationTriangle className="text-2xl text-blue-500" />,
      title: "AUP Violations",
      description: "Providing resources that facilitate prohibited activities like DDoS attacks, mail bombs, or other service disruptions is not allowed."
    },
    {
      icon: <FaShieldAlt className="text-2xl text-blue-500" />,
      title: "Illegal Activities",
      description: "Participating in unlawful schemes including fraud, pyramid schemes, credit card fraud, or software piracy is grounds for immediate termination."
    },
    {
      icon: <FaGlobe className="text-2xl text-blue-500" />,
      title: "Export Control Violations",
      description: "Exporting encryption software outside the United States via our network is strictly prohibited."
    },
    {
      icon: <FaFileAlt className="text-2xl text-blue-500" />,
      title: "Obscene Materials",
      description: "Transmission, storage, or dissemination of child pornography or obscene content on our network is not permitted under any circumstances."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-screen filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 pagerounded-full bg-blue-600 mix-blend-screen filter blur-3xl animate-float2"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-josefin mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              User Acceptance Policy
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Guidelines for the Responsible Use of Our Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-kanit">
              Our Commitment to Security and Integrity
            </h2>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                At Winscloud Matrix LLC, we are dedicated to safeguarding the integrity, privacy, and security of our clients' critical information. As a leading QuickBooks hosting provider, we adhere to the strictest security protocols to ensure all client data remains secure and accessible only to authorized users.
              </p>
              <p>
                Our Acceptable Use Policy (AUP) outlines customer rights and responsibilities when using our services, clarifying aspects of each service agreement. We reserve the right to revise this policy, with continued use of services constituting acceptance of any changes.
              </p>
            </div>
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaFileAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                Terms and Conditions
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                Our hosting services agreement involves remote access to applications and data through our secure data centers. We implement PCI Compliant, Level 1 DSS certified payment processing with bank-grade encryption to protect all financial transactions.
              </p>
              <p>
                Customers may choose from automated billing cycles (Monthly, Quarterly, Half-Yearly, or Annual) or manual payment arrangements. Service discontinuation will occur for non-payment, and users are responsible for all content they disseminate through our services.
              </p>
            </div>
          </div>
        </section>

        {/* Prohibited Activities Grid */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 font-kanit">
            Prohibited Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policyItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Renewal and Termination */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaExchangeAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                Renewal Terms and Termination
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                Services activate upon profile creation and continue for one (1) month terms, automatically renewing unless terminated. Customers must provide 15 days written notice to accounting@winscloudmatrix.com for termination.
              </p>
              <p>
                Upon termination, customer data will be removed from active systems. Data retention for 7 days post-termination is available upon request by authorized administrative contacts, subject to service fees for retrieval.
              </p>
            </div>
          </div>
        </section>

        {/* Warranties and Liability */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                Warranties and Liability
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                Winscloud disclaims liability for incidental or consequential damages including lost data or profits. While we don't proactively monitor private communications, we reserve the right to take action against policy violations that may affect service integrity.
              </p>
              <p>
                We may disclose customer information when required by law or to protect system security. Clients using our services to provide Internet access to others remain responsible for their users' compliance with this policy.
              </p>
            </div>
          </div>
        </section>

        {/* Agreement Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                <FaFileAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                Your Agreement
              </h2>
            </div>
            <div className="text-gray-700 font-montserrat">
              <p>
                By enrolling in our hosting services, you acknowledge acceptance of these terms as a representative of your organization and agree to comply with all provisions of this User Acceptance Policy.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Partner />
    </div>
  );
};

export default Policy;