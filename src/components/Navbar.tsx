import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { RiMenu3Line } from "react-icons/ri";

type NavItem = {
  name: string | ReactNode;
  dropdown: { label: string; href: string }[];
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
        { label: "QuickBook Hosting", href: "/qickBooks-Hosting" },
        { label: "QuickBooks Desktop", href: "/quickbooks-desktop" },
        { label: "QuickBooks Pro", href: "/quickbooks-pro" },
        { label: "QuickBooks Premier", href: "/quickbooks-premier" },
        { label: "QuickBooks Enterprise", href: "/quickbooks-enterprise" },
        { label: "QuickBooks POS", href: "/quickbooks-pos" },
        { label: "QuickBooks Canada", href: "/quickbooks-hosting-canada" }
      ]
    },
    {
      name: "Sage Hosting",
      dropdown: [
        { label: "Sage Hosting", href: "/sage-hosting" },
        { label: "Sage 50 Hosting", href: "/sage-50-hosting" },
        { label: "Sage 100 Hosting", href: "/sage-100-hosting" },
        { label: "Sage 300 Hosting", href: "/sage-300-hosting" },
        { label: "Sage 500 Hosting", href: "/sage-500-hosting" }
      ]
    },
    {
      name: "Service", dropdown: [
        { label: "Lacerte_Hostiing", href: "/lacerte_Hosting" },
        { label: "Proseries-hosting", href: "/proseries-hosting" },
        { label: "Cloud server hosting", href: "/cloud-server-hosting" },
        { label: "Drake Hosting", href: "drake-hosting" },
        { label: "Ultratax Hosting", href: "ultratax-hosting" },
        { label: "Act Hosting", href: "act-hosting" },
        { label: "Atx Hosting", href: "atx-hosting" },
        { label: "Tax wise Hosting", href: "tax-wise-hosting" },
        { label: "Quicken Hosting", href: "quicken-hosting" },
        { label: "Myob Hosting", href: "myob-hosting" },
        { label: "Fishbowl Hosting", href: "fishbowl-hosting" },
        { label: "Doc IT Hosting", href: "doc-it-hosting" },
      ]
    },
    { name: "Pricing", dropdown: [] },
    {
      name: "Support", dropdown: [
        { label: "Windows supprt", href: "https://www.zoho.com/assist/join/" },
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
    <div className={`   fixed 
  inset-x-0
    mt-5
    w-[90%]               /* 90% width always */
    max-w-[1440px]        /* max width for largest screens */
    xs:max-w-[340px]      /* max width for extra small screens */
    lg:max-w-[1040px]     /* max width for large screens */
    mx-auto
    rounded-lg
    z-50
    bg-white
    m-6
    shadow-lg
    transition-all
    duration-30
        ${showNavbar ? "translate-y-0" : "-translate-y-[150px]"} transform`}>
      <div className="flex flex-wrap justify-between p-2 items-center lg:justify-around">
        <Link to="/">
          <img className="px-2  h-6 md:h-8 rounded-lg" src="./images/logo/wins.png" alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden  transition-all duration-300 text-2xl mr-2 text-blue-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? "✕" : <RiMenu3Line />}
        </button>

        {/* Nav Menu */}
        <div className={`w-[90%] lg:w-auto bg-white lg:bg-transparent lg:flex mt-2 rounded-lg lg:items-center transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
          <Link to="/"
            className="w-full lg:w-auto py-2 px-4 mb-1 hidden font-josefin font-semibold md:block text-black hover:scale-105 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {navItems.map((item, index) => (
            <div key={index} className="relative group lg:h-auto border-gray-200 lg:border-none">
              {item.dropdown.length > 0 ? (
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className="w-full lg:w-auto py-2 px-4 text-[20px] text-black lg:hover:scale-105 transition-all duration-300 font-josefin flex justify-between items-center"
                  aria-expanded={mobileDropdowns[index]}
                >
                  {item.name}
                  <span className="lg:hidden">{mobileDropdowns[index] ? '−' : '+'}</span>
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
                <div className={`lg:absolute static w-full lg:w-60 bg-white transition-all duration-300 ease-in-out
                    ${mobileDropdowns[index] ? 'block' : 'hidden'} 
                    lg:hidden lg:group-hover:block lg:top-full 
                    ${index >= navItems.length - 2 ? 'lg:right-0' : 'lg:left-0'}
                    lg:shadow-lg lg:rounded-lg`}>
                  {item.dropdown.map((subItem, subIndex) => (
                    <div key={subIndex} className="font-josefin">
                      <Link to={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-[16px] font-josefin text-gray-600
                            hover:text-purple-600 transition-colors duration-200 cursor-pointer">
                        {subItem.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
