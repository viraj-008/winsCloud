import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { FaCaretRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


type NavItem = {
  name: string | ReactNode;
  dropdown: { label: string; href: string, icon?: string }[];
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: number]: boolean }>({});
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems: NavItem[] = [
    {
      name: "QuickBooks Hosting",
      dropdown: [
        { label: "Quickbooks Hosting", href: "/quickbooks-Hosting", icon: "./images/logo/qb-logo.png" },
        { label: "QuickBooks Desktop", href: "/quickbooks-desktop", icon: "./images/logo/qb-logo.png" },
        { label: "QuickBooks Pro", href: "/quickbooks-pro", icon: "./images/logo/qb-logo.png" },
        { label: "QuickBooks Premier", href: "/quickbooks-premier", icon: "./images/logo/qb-logo.png" },
        { label: "QuickBooks Enterprise", href: "/quickbooks-enterprise", icon: "./images/logo/qb-logo.png" },
        { label: "QuickBooks POS", href: "/quickbooks-pos", icon: "./images/logo/qb-logo.png" },
        { label: "QuickBooks Canada", href: "/quickbooks-hosting-canada", icon: "./images/logo/qb-logo.png" }
      ]
    },
    {
      name: "Sage Hosting",
      dropdown: [
        { label: "Sage Hosting", href: "/sage-hosting", icon: "./images/logo/sage-logo.jpg" },
        { label: "Sage 50 Hosting", href: "/sage-50-hosting", icon: "./images/logo/sage-logo.jpg" },
        { label: "Sage 100 Hosting", href: "/sage-100-hosting", icon: "./images/logo/sage-logo.jpg" },
        { label: "Sage 300 Hosting", href: "/sage-300-hosting", icon: "./images/logo/sage-logo.jpg" },
        { label: "Sage 500 Hosting", href: "/sage-500-hosting", icon: "./images/logo/sage-logo.jpg" }
      ]
    },
    {
      name: "Service", dropdown: [
        { label: "Lacerte_Hostiing", href: "/lacerte_Hosting", icon: "./images/logo/lecert.png" },
        { label: "Proseries-hosting", href: "/proseries-hosting", icon: "./images/logo/Proseries.png" },
        { label: "Cloud server hosting", href: "/cloud-server-hosting", icon: "./images/logo/OIP.jpg" },
        { label: "Drake Hosting", href: "drake-hosting", icon: "./images/logo/drake.jpg" },
        { label: "Ultratax Hosting", href: "ultratax-hosting", icon: "./images/logo/tax.png" },
        { label: "Act Hosting", href: "act-hosting", icon: "./images/logo/act.jpg" },
        { label: "Atx Hosting", href: "atx-hosting", icon: "./images/logo/atx.jpg" },
        { label: "Tax wise Hosting", href: "tax-wise-hosting", icon: "./images/logo/tax.png" },
        { label: "Quicken Hosting", href: "quicken-hosting", icon: "./images/logo/quicken1.webp" },
        { label: "Myob Hosting", href: "myob-hosting", icon: "./images/logo/Proseries.png" },
        { label: "Fishbowl Hosting", href: "fishbowl-hosting", icon: "./images/logo/lecert.png" },
        { label: "Doc IT Hosting", href: "doc-it-hosting", icon: "./images/logo/lecert.png" },
      ]
    },
    { name: "Pricing", dropdown: [] },
    {
      name: "Support", dropdown: [
        { label: "Windows supprt", href: "https://www.zoho.com/assist/join/" },
        { label: "Android supprt", href: "https://www.zoho.com/assist/join/" },
        { label: "FAQ", href: "faq" },
        { label: "Whats My Ip", href: "whats-ip" }
      ]
    },
    {
      name: "About Us", dropdown: [
        { label: "Introduction", href: "/introduction" },
        { label: "Policy", href: "/policy" },
        { label: "Contact", href: "/Get-in-Touch" },
        { label: "Blogs", href: "/blogs" },
      ]
    },
  ];

  const toggleMobileDropdown = (index: number) => {
    if (window.innerWidth < 1024) {
      setMobileDropdowns(prev => ({
        [index]: !prev[index]
      }));
    }
  };

  return (
    <header className={`   fixed 
  inset-x-0
    mt-5
    w-[90%]              
          
    xs:max-w-[340px]      
     xl:max-w-[1440px]
    mx-auto
    rounded-lg
    z-50
    bg-white
    m-6
    shadow-lg
    transition-all
    duration-200
        ${showNavbar ? "translate-y-0" : "-translate-y-[150px]"} transform`}>
      <div className="flex flex-wrap justify-between  items-center lg:justify-around">
        <Link to="/">
          <img className="px-2 my-1 h-6 md:h-10  rounded-lg" src="./images/logo/wins.png" alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10  flex items-center justify-center transition-all duration-300 text-xl text-blue-700 relative "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >

          <span
            className={`absolute transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
          >
            ✕
          </span>

          {/* Menu icon - Slides up while fading out */}
          <RiMenu3Line
            className={`absolute transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
          />
        </button>

        {/* Nav Menu */}
        <div className={`w-[90%]  lg:w-auto bg-white lg:bg-transparent lg:flex mt-2 rounded-lg lg:items-center transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
          <Link to="/"
            className="w-full lg:w-auto py-2 px-4 mb-1 text-3xl text-red-600 hidden font-josefin font-semibold md:block  hover:scale-105 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaHome />
          </Link>

          {navItems.map((item, index) => (
            <div key={index} className="relative  group lg:h-auto border-gray-200 lg:border-none">

              {item.dropdown.length > 0 ? (
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className="w-full lg:w-auto py-2 px-4 text-[20px] text-black lg:hover:scale-105 transition-all duration-300 font-josefin flex justify-between items-center"
                  aria-expanded={mobileDropdowns[index]}
                >
                  {item.name}
                  <span className="lg:hidden transition-transform duration-300 ease-in-out">
                    <div
                      className={`transform transition-transform duration-300 ease-in-out ${mobileDropdowns[index] ? 'rotate-0' : 'rotate-90'
                        }`}
                    >
                      <FaCaretRight className="text-blue-900" />
                    </div>
                  </span>

                </button>
              ) : (
                <Link
                  to={`/${String(item.name).toLowerCase().replace(/\s+/g, "-")}`}
                  className="w-full lg:w-auto py-2 px-4 text-[20px] text-black hover:scale-105 transition-all duration-300 font-josefin flex justify-between items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}

              {item.dropdown.length > 0 && (

                <div className={`lg:absolute  static w-full lg:w-80  bg-white transition-all duration-300 ease-in-out
                    ${mobileDropdowns[index] ? 'block' : 'hidden'} 
                    lg:hidden lg:group-hover:block lg:top-full 
                    ${index >= navItems.length - 2 ? 'lg:right-0' : 'lg:left-0'}
                    lg:shadow-lg lg:rounded-lg`}>
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-[16px] font-josefin text-gray-600 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
                    >
                      {subItem.icon && <img src={subItem.icon} className="h-5 w-5" alt="icon" />}
                      <span>{subItem.label}</span>
                    </Link>
                  ))}

                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
