import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GrServices } from "react-icons/gr";

const ServiceLink = () => {

      const items = [
    { label: "Lacerte Hostiing", color: "indigo-500", border: "border-indigo-500", link: "/quickbooks-desktop" },
    { label: "Proseries-hosting", color: "purple-500", border: "border-purple-500", link: "/quickbooks-pro" },
    { label: "Cloud server hosting", color: "blue-400", border: "border-blue-400", link: "/quickbooks-premier" },
    { label: "Drake Hosting", color: "yellow-400", border: "border-yellow-400", link: "/quickbooks-enterprise" },
    { label: "Ultratax Hostingg", color: "green-500", border: "border-green-500", link: "/quickbooks-pos" },
    { label: "Act Hosting", color: "green-500", border: "border-green-500", link: "/quickbooks-canada" },
    { label: "Atx Hosting", color: "red-400", border: "border-red-400", link: "/quickbooks-uk" },
    { label: "Tax wise Hosting", color: "cyan-500", border: "border-cyan-500", link: "/quickbooks-mac" },
    { label: "Quicken Hosting", color: "pink-500", border: "border-pink-500", link: "/quickbooks-payroll" },
    { label: "Myob Hosting", color: "teal-500", border: "border-teal-500", link: "/quickbooks-accountant" },
    { label: "Fishbowl Hosting", color: "orange-400", border: "border-orange-400", link: "/quickbooks-online" },
    { label: "Doc IT Hosting", color: "amber-400", border: "border-amber-400", link: "/quickbooks-premier-plus" },
  ];
  return (
  <section>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-12">
        <h2 className="mb-10 text-3xl font-extrabold text-center justify-center  md:flex-row flex-col leading-tight text-gray-900">
         <GrServices className="text-5xl mx-auto mt-4 text-blue-900"/>
 All services of Winscloud Matrix
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <div key={index} className="relative h-[60px]">
              <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${item.color} rounded-lg`}></span>
              <div className={`relative h-full px-2 py-1 bg-white border-2 ${item.border} rounded-lg flex items-center`}>
                <FaExternalLinkAlt className="text-xl text-blue-800" />
                <Link to={item.link} className="hover:underline font-bold ml-3">
                  {item.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceLink
