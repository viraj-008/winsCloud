import React from 'react'
import { useEffect, useState } from 'react';
import { FaRegHandshake } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { TbDeviceTabletCheck } from "react-icons/tb";
const Expriance:React.FC = () => {
      const stats = [
    { label: 'Clients', count: 4670, suffix: '+', icon: <FaRegHandshake /> },
    { label: 'Years of Experience', count: 10, suffix: '+', icon: <FaAward /> },
    { label: 'Apps Hosted', count: 400, suffix: '+', icon: <TbDeviceTabletCheck /> },
  ];

  const [animatedCounts, setAnimatedCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const maxCount = Math.max(...stats.map(stat => stat.count));
    const duration = maxCount / 100;
    const incrementValues = stats.map(stat => Math.ceil(stat.count / (duration / 0.6)));

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setAnimatedCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(newCounts[index] + incrementValues[index], stat.count);
          return newCounts;
        });
      }, 10);
    });

    // Cleanup intervals
    return () => intervals.forEach(clearInterval);
  }, [])
  return (
    <div className="w-[90%] mx-auto my-8 rounded-xl bg-gradient-to-br from-blue-50 to-gray-100 shadow-xl">
        <div className="py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <img className="mx-auto h-20 mb-4" src="images/logo/rockk.png" alt="Company Logo" />
            <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
              Precision-Driven Skills, Purposeful Experience
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              With years of industry experience and modern tools, we deliver precise financial
              solutions that support your business growth and compliance with confidence.
            </p>
          </div>

          <div className="mt-12">
            <div className="max-w-5xl mx-auto">
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <dd className="text-5xl font-extrabold text-green-600">
                      {animatedCounts[index]}
                      {animatedCounts[index] === stat.count && stat.suffix}
                    </dd>
                    <div className="mt-2 text-center text-gray-700 text-lg font-semibold flex items-center gap-2">
                      <span className="text-yellow-400 text-3xl">{stat.icon}</span>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Expriance
