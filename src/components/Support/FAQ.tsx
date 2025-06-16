import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
  import { motion } from "framer-motion";
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

      <section className="min-h-[80vh] rounded-b-3xl flex items-center bg-gradient-to-t from-[#6278c0] via-[#102f86] to-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto w-full gap-12 items-center mt-8">

          {/* Left Content */}
          <div className="text-center flex flex-col justify-center items-center md:text-left mt-12">
            <motion.h1
              className="text-slate-100 font-bold font-josefin text-3xl sm:text-4xl md:text-8xl leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.8 }}
            >
              FAQ
            </motion.h1>

          
          </div>

        </div>
      </section>

     <main>
  <div className="max-w-3xl mx-auto mt-10">
    <h2 className="text-3xl font-josefin font-bold text-center text-gray-800 mb-8">
      Frequently Asked Questions
    </h2>
    
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <article 
          key={index} 
          className="rounded-lg overflow-hidden transition-all duration-200"
          style={{
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            backgroundColor: openIndex === index ? '#f9fafb' : 'white'
          }}
        >
          <button
            className={`w-full text-left flex justify-between items-center p-6 transition-colors duration-200 ${
              openIndex === index ? 'bg-gray-50' : 'hover:bg-gray-50'
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-josefin text-lg text-gray-800 font-medium">
              {faq.question}
            </span>
            {openIndex === index ? (
              <FaMinus className="text-red-600 h-4 w-4 transition-transform duration-200" />
            ) : (
              <FaPlus className="text-red-600 h-4 w-4 transition-transform duration-200" />
            )}
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index 
                ? "max-h-96 opacity-100 pb-6 px-6" 
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-gray-600 font-montserrat text-sm leading-relaxed">
              {faq.answer && (
                <p className="animate-fadeIn">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</main>
      <Partner />
    </>
  )
}

export default FAQ
