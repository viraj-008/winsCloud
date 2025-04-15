import { useState } from "react";
import PriceForm from "./PriceForm";

// Define a type that supports both shared and dedicated plan properties
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
    <div className="z-10">
      <div className="h-auto w-full pb-10">
        <div className="w-full flex bg-gradient-to-r from-black via-pink-500 to-blue-500 pt-20 px-5 md:px-20 items-center min-h-[530px]">
          <div className="w-full text-center md:text-left">
            <h1 className="text-white bg-green-500 px-2 p-4 rounded-lg font-kanit text-3xl md:text-6xl leading-tight">
              OUR PRICING PLANS
            </h1>
          </div>
        </div>
      </div>

      <h1 className="text-center font-bold font-josefin w-[300px] bg-red-600 mx-auto p-3 text-white rounded-lg text-2xl">
        Pricing
      </h1>

      <div className="p-6">
        {/* Toggle Buttons */}
        <div className="mb-4 flex gap-4 justify-center">
          <button
            onClick={() => setPlanType("shared")}
            className={`px-4 transition duration-500 ease-in-out py-2 rounded-full font-josefin font-bold ${planType === "shared" ? "bg-green-600 text-white" : "bg-gray-100"
              }`}
          >
            Shared
          </button>
          <button
            onClick={() => setPlanType("dedicated")}
            className={`px-4 py-2 transition duration-500 ease-in-out rounded-full font-josefin font-bold ${planType === "dedicated" ? "bg-pink-500 text-white" : "bg-gray-100"
              }`}
          >
            Dedicated
          </button>
        </div>

        <hr className="h-[2px] w-[80%] mx-auto my-4 bg-gray-500 rounded-full border"/>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border p-4 bg-gradient-to-r from-[#2dd4bf] to-[#93d694] rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl text-center font-josefin font-bold text-gray-700 underline mb-2">
                {plan.keyName}
              </h3>

              <p className="flex justify-between font-josefin">
                <span className="text-gray-800 font-bold">{planType === "shared" ? "User" : "Package"}/month:</span>{" "}
                {planType === "shared" ? (
        <span className="text-red-600">${plan.userMonth}</span>
      ) : (
        <span className="text-red-600">${plan.packageMonth}</span>
      )}
              </p>

              <p className="flex justify-between font-josefin">
                <span className="text-gray-800 font-bold">Number of Users:</span>{" "}
                <span>
                  {plan.numberUserFrom}-{plan.numberUserto}
                </span>
              </p>

              {planType === "dedicated" && plan.default !== undefined && (
                <p className="flex justify-between font-josefin">
                  <span className="text-gray-800 font-bold">Default Users/package:</span>{" "}
                  <span>{plan.default}</span>
                </p>
              )}

              {planType === "dedicated" && plan.AdditionalAccount !== undefined && (
                <p className="flex justify-between font-josefin">
                  <span className="text-gray-800 font-bold">Additional Account/user:</span>{" "}
                  <span className="text-gray-800"> <span className="text-red-600">$ </span>{plan.AdditionalAccount}</span>
                </p>
              )}

              {planType === "shared" && (
                <p className="flex justify-between font-josefin">
                  <span className="text-gray-800 font-bold">Storage:</span>{" "}
                  <span>{plan.storage}GB/user</span>
                </p>
              )}

              {planType === "dedicated" && plan.extra !== undefined && (
                <p className="flex mt-3 justify-between font-josefin">
                  <span className="text-gray-800 font-bold text-sm">Storage:</span>{" "}
                  <span className="border text-sm px-2 border-black rounded-lg">
                    {plan.storage}GB + {plan.extra}GB Extra/user
                  </span>
                </p>
              )}

              <div className="flex justify-center mt-4">
                <button className="bg-red-500 px-3 mr-2 font-semibold font-josefin pt-1 text-white rounded-lg"
                  onClick={() => {
                    setSelectedPlan(plan);  // Selected plan ko set karo
                    setShowForm(true);       // Form ko show karo
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {showForm && selectedPlan && (
        <PriceForm selectedPlan={selectedPlan}  setShowForm={setShowForm} planType={planType} />

      )}

    </div>
  );
}

export default Pricing;
