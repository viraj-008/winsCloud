import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Partner from "../Partner";
function FAQ() {

  const faqs = [
    {
      question: "What is Sage 50 Why choose an application hosting provider??",
      answer: "Application hosting providers deliver scalable, secure, and managed solutions for hosting software applications, which reduces IT overhead, enhances accessibility, and ensures reliable performance for users globally."

    },
    {
      question: "How does application hosting function for remote users",
      answer: "Application hosting allows users to remotely access software applications stored and managed by the hosting provider’s servers. This enables users to connect from anywhere with internet access, utilizing the software’s features without requiring physical presence at the hosting location."
    },
    {
      question: "How do I migrate my Sage 50 on cloud?",
      answer: "If you are planning to take your Sage 50 desktop application to the cloud, you can reach out to Winscloud team, your Sage 50 hosting services provider. We can help you seamlessly transition to the cloud in just 2 hours.",
    },
    {
      question: "Is it possible to host multiple applications in a hosted environment?",
      answer: "Absolutely! Hosting multiple applications in a hosted environment is entirely feasible. Hosting providers usually offer plans allowing for hosting multiple applications on the same server or within a cloud-based setup. This strategy optimizes resource usage and cost-effectiveness, especially advantageous for businesses managing numerous software applications."


    },
    {
      question: "Does cloud hosting rely on locally installed software for operation?",
      answer: "No, cloud hosting doesn’t depend on locally installed software. It functions over the internet, granting users access to applications and data stored on remote servers. Users interact with cloud-hosted resources via web browsers or specialized software interfaces, eliminating the need for software installation on local devices",
    },
    {
      question: "Can I host multiple QuickBooks versions?",
      answer: "Winscloud can host and support multiple QuickBooks versions on one server with third-party add-ons. Our hosted QuickBooks allows multi-user access, enabling collaborative work from any location for you, clients, and staff",
    },
    {
      question: "Which versions of QuickBooks do you support for hosting?",
      answer: "Winscloud hosts all QuickBooks desktop versions, including Pro, Premier, Accountant, and Enterprise. Whether you use the latest 2024 edition or an older version (including 2021 and earlier), our hosting services cater to your specific software needs.",
    },
    {
      question: "Is it possible for me to save a local backup of data files on my desktop?",
      answer: "Absolutely. Our QuickBooks cloud hosting service offers the flexibility to create local backups on your desktop. Additionally, we provide a 30-day rolling data backup, powered by Veeam and Idrive, ensuring extra security for your critical financial data.",
    },
    {
      question: "How often is my data backed up?",
      answer: "At Winscloud, we prioritize data backup and storage. We provide a 30-day rolling backup, ensuring secure retrieval of your accounting information in unforeseen events. These backups occur daily.",
    },
    {
      question: "Do you offer 24/7 technical support?",
      answer: "Yes, we provide 24/7 technical support to meet your needs at any time. Our dedicated team is always available to help with any issues or questions you may have.",
    },
    {
      question: "How do you ensure data security and reliability?",
      answer: "Rest assured, your data is secure on our cloud platform. Our SAS 70 certified data centers offer maximum protection and reliability. We perform dual backups in separate secure locations and use password protection, hardware firewalls, and anti-spyware software to prevent unauthorized access.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  console.log("running FAQ component")
  return (
    <>

      <header className="w-full flex bg-[url('/images/Home/intro.jpg')] bg-cover bg-center pt-10 px-5 md:px-20 items-center min-h-[330px]">
        <div className="w-full text-center">
          <h1 className="text-white text-3xl md:text-6xl leading-tight">FAQ</h1>
          <Link to="/trial">
            <button className="mx-auto flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Get Free Trial Now
            </button>
          </Link>
        </div>
      </header>

      <main>
        <h1 className="text-center font-kanit font-semibold my-4 text-2xl">FAQs</h1>
        <div className="max-w-3xl mx-auto mt-10 border rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <article key={index} className="border-b last:border-b-0">
              <button
                className="w-full text-left flex justify-between items-center p-4 text-lg font-semibold hover:bg-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-josefin">{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-red-900 min-h-[12px] min-w-[12px] m-4" />
                ) : (
                  <FaPlus className="text-red-600 min-h-[12px] min-w-[28px] m-4" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-4 bg-gray-50 text-gray-700">
                  {faq.answer && <p className="font-montserrat text-[10px] md:text-sm">{faq.answer}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Partner />
    </>
  )
}

export default FAQ
