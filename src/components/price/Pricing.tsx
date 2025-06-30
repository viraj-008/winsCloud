import { Helmet } from "react-helmet";
import { useState } from "react";
import PriceForm from "./PriceForm";
import Partner from "../Partner";
import { motion } from "framer-motion";
import { 
  FaHeadset, 
  FaDatabase, 
  FaExchangeAlt, 
  FaShieldAlt, 
  FaPrint, 
  FaFileWord 
} from 'react-icons/fa';

const features = [
    { icon: <FaHeadset className="text-blue-500" />, text: "24 x 7 Tech Support" },
    { icon: <FaDatabase className="text-green-500" />, text: "Daily Data Backup" },
    { icon: <FaExchangeAlt className="text-purple-500" />, text: "Data Migration" },
    { icon: <FaShieldAlt className="text-red-500" />, text: "Firewall Protection" },
    { icon: <FaPrint className="text-yellow-500" />, text: "Universal Printing" },
    { icon: <FaFileWord className="text-blue-600" />, text: "MS Word" }
  ];

export type Plan = {
  keyName: string;
  userMonth?: number;
  numberUserFrom: number;
  numberUserto: number;
  storage: number;
  default?: number;
  AdditionalAccount?: number;
  extra?: number;
  packageMonth?: number;

};

function Pricing() {
  const sharedPlans: Plan[] = [
    { keyName: "Basic", userMonth: 29, numberUserFrom: 1, numberUserto: 5, storage: 6 },
    { keyName: "Standard", userMonth: 27, numberUserFrom: 6, numberUserto: 10, storage: 8 },
    { keyName: "Enterprise", userMonth: 25, numberUserFrom: 11, numberUserto: 15, storage: 10 },
    { keyName: "Corporate", userMonth: 23, numberUserFrom: 16, numberUserto: 20, storage: 12 },
  ];

  const dedicatedPlans: Plan[] = [
    { keyName: "Basic", packageMonth: 65, default: 1, numberUserFrom: 1, numberUserto: 5, AdditionalAccount: 32, storage: 50, extra: 8 },
    { keyName: "Standard", packageMonth: 199, default: 6, numberUserFrom: 6, numberUserto: 10, AdditionalAccount: 29, storage: 50, extra: 10 },
    { keyName: "Enterprise", packageMonth: 349, default: 11, numberUserFrom: 11, numberUserto: 15, AdditionalAccount: 27, storage: 50, extra: 12 },
    { keyName: "Corporate", packageMonth: 489, default: 16, numberUserFrom: 16, numberUserto: 25, AdditionalAccount: 25, storage: 50, extra: 15 },
  ];

  const [planType, setPlanType] = useState("shared");
  const plans: Plan[] = planType === "shared" ? sharedPlans : dedicatedPlans;

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showForm, setShowForm] = useState(false);  // Form ko dikhane ke liye state




  return (

    <>
    <div className="z-10">
       <Helmet>
          <title>Choose Smart, Pay Less | Explore Winscloud Cloud Pricing</title>
          <meta name="description" content="Explore Winscloud's flexible and transparent pricing plans designed for businesses of all sizes. Get affordable, scalable, and secure cloud hosting solutions tailored to your needs." />
        </Helmet>

  <div className="w-full flex bg-gradient-to-br from-blue-900 to-black pt-20 px-5 md:px-20 items-center min-h-[340px] rounded-b-3xl shadow-xl">
    <div className="w-full text-center md:text-left">
        <motion.h1
        className="text-slate-100 mt-4 font-bold text-center font-josefin text-3xl sm:text-4xl md:text-6xl leading-tight mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.8 }}
      >
        $ OUR PRICING PLANS $
      </motion.h1>
      <p className="text-white font-montserrat text-xl mt-2 font-light text-center">Find the perfect solution for your business</p>
    </div>
  </div>

 

  <div className="pt-5 px-2 md:pt-8  mx-auto">
    {/* Toggle Buttons */}
   <div className="mb-6 md:mb-8 flex  sm:flex-row gap-3 sm:gap-4 justify-center">
  <button
    onClick={() => setPlanType("shared")}
    className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 transition duration-300 ease-in-out rounded-full font-josefin font-semibold text-base md:text-lg shadow-md ${
      planType === "shared" 
        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
        : "bg-gray-100 hover:bg-gray-200"
    }`}
  >
    Shared Hosting
  </button>
  <button
    onClick={() => setPlanType("dedicated")}
    className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 transition duration-300 ease-in-out rounded-full font-josefin font-semibold text-base md:text-lg shadow-md ${
      planType === "dedicated" 
        ? "bg-gradient-to-r from-green-700 to-emerald-800 text-white" 
        : "bg-gray-100 hover:bg-gray-200"
    }`}
  >
    Dedicated Hosting
  </button>
</div>

    <div className="relative mb-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-4 bg-white text-gray-500 font-medium">
          Choose Your Plan
        </span>
      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-4 gap-8">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`border rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
            planType === "shared" 
              ? "border-green-200 bg-gradient-to-b from-green-50 to-white" 
              : "border-pink-200 bg-gradient-to-b from-pink-50 to-white"
          }`}
        >
          {/* Card Header */}
          <div className={`py-4 px-6 ${
            planType === "shared" 
              ? "bg-gradient-to-r from-green-500 to-emerald-600" 
              : "bg-gradient-to-r from-green-700 to-emerald-800"
          }`}>
            <h3 className="text-xl text-center font-josefin font-bold text-white">
              {plan.keyName}
            </h3>
          </div>
          
          {/* Card Body */}
          <div className="p-6">
            {/* Price */}
            <div className="text-center mb-6">
              <span className="text-gray-600 font-medium">Starting at</span>
              <div className="mt-2">
                {planType === "shared" ? (
                  <span className="text-4xl font-bold text-gray-800">${plan.userMonth}</span>
                ) : (
                  <span className="text-4xl font-bold text-gray-800">${plan.packageMonth}</span>
                )}
                <span className="text-gray-500">/month</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700 font-medium">Users</span>
                <span className="font-semibold">
                  {plan.numberUserFrom}-{plan.numberUserto}
                </span>
              </div>

              {planType === "dedicated" && plan.default !== undefined && (
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700 font-medium">Default Users</span>
                  <span className="font-semibold">{plan.default}</span>
                </div>
              )}

              {planType === "dedicated" && plan.AdditionalAccount !== undefined && (
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700 font-medium">Extra User</span>
                  <span className="font-semibold text-red-600">${plan.AdditionalAccount}</span>
                </div>
              )}

              {planType === "shared" && (
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700 font-medium">Storage</span>
                  <span className="font-semibold">{plan.storage}GB/user</span>
                </div>
              )}

              {planType === "dedicated" && plan.extra !== undefined && (
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700 font-medium">Storage</span>
                  <div className="text-right">
                    <div className="font-semibold">{plan.storage}GB base</div>
                    <div className="text-sm">+ {plan.extra}GB extra/user</div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <button 
                className={`px-6 py-3 rounded-lg font-josefin font-bold text-white shadow-md transition-all ${
                  planType === "shared" 
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" 
                    : "bg-gradient-to-r from-green-400 to-emerald-700 hover:from-green-600 hover:to-emerald-800"
                }`}
                onClick={() => {
                  setSelectedPlan(plan);
                  setShowForm(true);
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Form Modal */}
  {showForm && selectedPlan && (
   <PriceForm
  key={selectedPlan.keyName} // <-- add this line
  selectedPlan={selectedPlan}
  setShowForm={setShowForm}
  planType={planType}
  sharedPlans={sharedPlans}
  dedicatedPlans={dedicatedPlans}
  onSwitchPlan={(plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  }}
/>
  )}
</div>

<div className="bg-white rounded-xl  p-6 mt-8 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center font-josefin">
        Our Features
      </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  {features.map((feature, index) => (
    <div 
      key={index}
      className="flex items-center justify-center p-4 bg-gray-50 rounded-lg  transition-colors"
    >
      <div className="text-2xl mr-3 text-center">
        {feature.icon}
      </div>
      <div className="text-center">
        <h3 className="font-medium text-gray-800 font-josefin">
          {feature.text}
        </h3>
      </div>
    </div>
  ))}
</div>
    </div>
      <Partner />
    </>
  );
}

export default Pricing;
