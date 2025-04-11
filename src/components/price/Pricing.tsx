import { useState } from "react";

// Define a type that supports both shared and dedicated plan properties
type Plan = {
  keyName: string;
  userMonth: number;
  numberUserFrom: number;
  numberUserto: number;
  storage: number;
  default?: number;
  AdditionalAccount?: number;
  extra?: number;
};

function Pricing() {
  const sharedPlans: Plan[] = [
    { keyName: "Basic", userMonth: 29, numberUserFrom: 1, numberUserto: 5, storage: 6 },
    { keyName: "Standard", userMonth: 49, numberUserFrom: 6, numberUserto: 10, storage: 8 },
    { keyName: "Enterprise", userMonth: 79, numberUserFrom: 11, numberUserto: 15, storage: 10 },
    { keyName: "Corporate", userMonth: 99, numberUserFrom: 16, numberUserto: 20, storage: 12 },
  ];

  const dedicatedPlans: Plan[] = [
    { keyName: "Basic", userMonth: 65, default: 1, numberUserFrom: 1, numberUserto: 5, AdditionalAccount: 32, storage: 50, extra: 8 },
    { keyName: "Standard", userMonth: 199, default: 6, numberUserFrom: 6, numberUserto: 11, AdditionalAccount: 29, storage: 50, extra: 10 },
    { keyName: "Enterprise", userMonth: 349, default: 11, numberUserFrom: 11, numberUserto: 15, AdditionalAccount: 27, storage: 50, extra: 12 },
    { keyName: "Corporate", userMonth: 489, default: 16, numberUserFrom: 16, numberUserto: 25, AdditionalAccount: 25, storage: 50, extra: 15 },
  ];

  const [planType, setPlanType] = useState("shared");
  const plans: Plan[] = planType === "shared" ? sharedPlans : dedicatedPlans;

  return (
    <>
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
            className={`px-4 py-2 rounded font-josefin font-bold ${
              planType === "shared" ? "bg-blue-900 text-white" : "bg-gray-100"
            }`}
          >
            Shared
          </button>
          <button
            onClick={() => setPlanType("dedicated")}
            className={`px-4 py-2 rounded font-josefin font-bold ${
              planType === "dedicated" ? "bg-blue-900 text-white" : "bg-gray-100"
            }`}
          >
            Dedicated
          </button>
        </div>

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
                <span className="text-gray-800 font-bold">User/month:</span>{" "}
                <span>${plan.userMonth}</span>
              </p>
              <p className="flex justify-between font-josefin">
                <span className="text-gray-800 font-bold">Number of Users:</span>{" "}
                <span>
                  {plan.numberUserFrom}-{plan.numberUserto}
                </span>
              </p>

              {planType === "dedicated" && plan.default !== undefined && (
                <p className="flex justify-between font-josefin">
                  <span className="text-gray-800 font-bold">Default Users:</span>{" "}
                  <span>{plan.default}</span>
                </p>
              )}

              {planType === "dedicated" && plan.AdditionalAccount !== undefined && (
                <p className="flex justify-between font-josefin">
                  <span className="text-gray-800 font-bold">Additional Account:</span>{" "}
                  <span>{plan.AdditionalAccount}</span>
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
                <button className="bg-red-500 px-3 mr-2 font-semibold font-josefin pt-1 text-white rounded-lg">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;
