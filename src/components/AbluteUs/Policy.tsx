import Partner from "../Partner";
import { FaFileAlt, FaShieldAlt, FaExclamationTriangle, FaBan, FaCopyright, FaExchangeAlt, FaGlobe } from 'react-icons/fa';

const Policy = () => {
  const policyItems = [
    {
      icon: <FaBan className="text-2xl text-blue-500" />,
      title: "Spamming",
      description: "‘Spamming’ is an unsolicited bulk and/or commercial email sent through the Internet without the recipient’s consent. It is bad not only because it has a poor effect on consumer perceptions of Wincloud, but also because it can overburden the company’s network and interfere with service to its clients’ attitudes towards our firm."
    },
    {
      icon: <FaCopyright className="text-2xl text-blue-500" />,
      title: "Intellectual Property Violations",
      description: "Taking part in any action that violates or abridges another party’s intellectual property rights, including patents, copyrights, proprietary information, logos, registered trademark, and brand names owned by businesses, people, or other organizations."
    },
    {
      icon: <FaExclamationTriangle className="text-2xl text-blue-500" />,
      title: "Facilitating a Violation of this AUP",
      description: "This AUP prohibits the use of pings, floods, mail bombs, and denial-of-service attacks, as well as in some way providing software, programs, services, or resources that violate it."
    },
    {
      icon: <FaShieldAlt className="text-2xl text-blue-500" />,
      title: "Other illegal activities",
      description: "Taking part in actions that have been deemed to be unlawful, such as promoting, disseminating, or otherwise creating Ponzi and pyramid schemes, as well as fraudulently charging credit cards and software piracy."
    },
    {
      icon: <FaGlobe className="text-2xl text-blue-500" />,
      title: "Export control violations",
      description: "Exporting encryption software outside of the United States, via the Internet or otherwise."
    },
    {
      icon: <FaFileAlt className="text-2xl text-blue-500" />,
      title: "Obscene speech or Materials",
      description: "Advertisement, transmission, storage, display, or other dissemination of child pornography or obscene words or expressions on Winscloud’s network is not permitted."
    }
  ];

  return (
    <div className="bg-gray-50 ">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[90%]  py-6">
        {/* Introduction Section */}
        <section className="mb-5">
          <div className="  ">
            <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-800 mb-6 font-kanit">
              Introduction to User Acceptance Policy
            </h2>
            <div className="space-y-4 text-gray-700 font-montserrat text-justify">
              <p>
                We at Winscloud Matrix LLC are dedicated to safeguarding the integrity, privacy, and security of the essential information belonging to our esteemed clients. Holding the reputation as a committed QuickBooks hosting provider, we adhere to the strictest security protocols to ensure that all client data is stored in a secure atmosphere and that only authorized users have accessibility to it. A number of software, hardware, or Internet connectivity issues could cause Winscloud Matrix to be unable to provide users with access to their information. It is also possible that malicious intent or natural disasters could cause interrupted access. Whenever issues arise resulting from interrupted access to client data, Winscloud will be held harmless and indemnified. Winscloud Matrix appreciates the reality that the Internet offers a platform for unfettered dialogue among online users and the sharing of information; nonetheless, Winscloud has the right to take some precautionary or remedial measures when there are conflicting interests at play. Winscloud has created an Acceptable Use Policy (AUP) to safeguard these divergent agendas. Wincloud’s AUP policy outlines the customer’s rights and responsibilities when using the company’s services. It enhances and clarifies specific aspects of each customer’s service agreement. We reserve the right to revise this AUP at any time. By using Wincloud’s services following the publication of revisions to the AUP on the company’s website, olivedrab-rhinoceros-266077.hostingersite.com, customers are considered to have accept any new or expanded provisions of the AUP.

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
            <div className="space-y-4 text-gray-700 font-montserrat text-justify">
              <p>
                Providing application hosting services to the client is an agreement between Winscloud and the customer. Winscloud will collect payment from the customer for the use of the Services. By connecting to Wincloud’s data center remotely, customers have access to Wincloud’s services. We provide our customers with access to their data and various hosted software applications provided by Winscloud or licensed by them. A copy of the Order attached hereto details the software and applications available to the customer. Our mission at Winscloud is to protect your critical information and keep it confidential at all times. We take great precautions to ensure that no one will ever access the credit card information provided by the users, which is stored in our database in an encrypted format. Our payment mechanism is PCI Compliant, Level 1 DSS certified, and we use the same encryption methods used by the leading financial institutions and banks.
              </p>
              <p>
                Our sophisticated automated payment processing option works following the user’s billing period, which can be Monthly, Quarterly, Half-Yearly, or Annually. However, if both parties agree, we are also willing to set up a manual payment mechanism for the clients. Users shall be responsible for prompt payment of the utilized services in such circumstances. Service discontinuation will occur if payments are not made following the billing cycle. Customers should be aware that Winscloud does not evaluate, edit, censor, or take accountability for any information that its customers may make when disseminating information online. A user who posts information on the Internet is as liable as another author if their information violates copyright, slanders, or offends someone else.
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
            <div className="space-y-4 text-gray-700 font-montserrat text-justify">
              <p>
                Upon activation and availability of Customer “user profiles” on Winscloud Service, the contract shall be effective on the date of activation and continue to be effective for one (1) month from the effective date. To terminate service, customers must send written notice at least 15 days before the termination date to accounting[at] <br /> <strong>winscloudmatrix.com. </strong>If either party terminates this User Acceptance Policy agreement earlier than the expiration of the initial Term or any subsequent Term, it will automatically renew for one (1) month. Customer data will be removed from active file systems of Winscloud terminal servers upon termination of services by Customer or termination of services by Winscloud. When Winscloud terminates an account, customers may request that Winscloud Matrix retain and back up their data for 7 days only. All searches from terminated customer accounts will be subject to time and materials charges. Only the previously authorized administrative contact for the Customer account will be able to make such a request for data search or retrieval.
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
                No warranties:
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-montserrat text-justify">
              <p>
                If Customer user profiles are activated and made available for use on Winscloud Service, the Effective Date shall be the date they are activated. This Agreement will be in full force and effect for an initial Term of one (1) month following the Effective Date. It is possible for customers to terminate their service at any time by submitting a written notice 15 days in advance to accounting[at] <br /><strong>winscloudmatrix.com</strong>. This User Acceptance Policy agreement for Custom/Private Cloud environments will keep renewing for one (1) month unless either party informs the other party in writing before the end of the original Term or any subsequent Term. Winscloud will delete all Customer data from active file systems on its terminal servers upon the termination of Service by Customer or termination of Service by Winscloud. When Winscloud’s terminal servers will retain a copy of the customer’s data for a period of 7 days following termination of the account. Only the previously approved administrative contact for the Customer account is allowed to conduct searches from terminated Service accounts of customers.
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
                Limitation of Liability:
              </h2>
            </div>
            <div className="text-gray-700 font-montserrat text-justify">
              <p>
                Winscloud will never be held responsible for any liabilities, including, but not limited to, incidental or consequential damages, damages for lost data, or damages for lost profits, even if Winscloud Matrix has been informed of the risk of such losses. A lot of Winscloud’s clients are also Internet service providers and data coming from them may have been obtained from one of their clients or from a different private entity, according toWinscloud Matrix. The provision of Internet services by Winscloud’s clients is exempt from any requirements that they filter or monitor transmissions from or on behalf of their clients’ users. The company has the right to take direct action against a customer of a customer. Additionally, even though the action can have an impact on other customers of the customer, Winscloud Matrix may take immediate action against the Winscloud Matrix customer due to the actions of a customer of the customer. Except where mandated by law, a governmental agency, or when the public’s safety is at risk, Winscloud Matrix will not proactively monitor any private electronic mail messages sent or received by its clients. To make sure that its facilities are functioning satisfactorily, Winscloud Matrix monitors its service electronically. Finally, Winscloud Matrix may release customer data or information communicated over its network where doing so is required to maintain the security of the system or to protect Winscloud Matrix and others from harm.
              </p>
            </div>
          </div>
        </section>
        <section className="-mb-12">
          <div className="">
            <div className="flex items-center mb-6">

              <h2 className="text-2xl font-bold text-gray-800 font-kanit">
                You agree with user acceptance policy:
              </h2>
            </div>
            <div className="text-gray-700 font-montserrat text-justify">
              <p>
                You agree that, by enrolling an application hosting services order directly or indirectly through this Website, you represent your organization as a representative and desire to sign a contract with Winscloud Matrix that complies with the terms and conditions listed above.
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