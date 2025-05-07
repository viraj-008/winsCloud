import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { ReactNode } from "react";

type NavItem = {
    name: string | ReactNode;
    dropdown: { label: string; href: string }[];
};

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: number]: boolean }>({});
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            name: "Service", dropdown: [{ label: "Lacerte_Hostiing", href: "/lacerte_Hosting" },
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

        { name: "Pricing", dropdown: [] }, // Direct link, no dropdown
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
            name: "About Us", dropdown: [{ label: "Introduction", href: "/introduction" },
            { label: "Policy", href: "/policy" },
            { label: "Contact", href: "/Get-in-Touch" },
            { label: "Blogs", href: "/blogs" },
            ]
        },
        // { name: <FaUserCircle className="text-3xl text-blue-700" />, dropdown: [{ label: "Profile", href: "/profile" }, { label: "", href: "/terms" }] },
    ];

    const toggleMobileDropdown = (index: number) => {
        if (window.innerWidth < 1024) {
            setMobileDropdowns(prev => ({
                [index]: !prev[index] // Toggle the current dropdown
            }));
        }
    };

    return (
        <div className={`fixed w-full z-50  transition-all duration-300 
             lg:bg-transparent
            ${isScrolled ? "lg:bg-white/95 bg-white shadow-lg " : ""}`}>
            <div className="flex flex-wrap justify-between p-4  items-center lg:justify-around">
                <Link to="/">
                    <img className="bg-blue-500 px-2 h-9 rounded-lg" src="./images/logo/wins.avif" alt="Logo" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 transition-all duration-300 text-xl text-blue-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>

                {/* Nav Menu */}
                <div className={`w-[90%]  lg:w-auto bg-white lg:bg-transparent   lg:flex mt-2 rounded-lg  lg:items-center transition-all duration-500 ease-in-out 
                    ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>

                    <Link to="/"
                        className={`w-full lg:w-auto py-2 px-4 mb-1 hidden font-josefin font-semibold md:block hover:scale-105 transition-all duration-300 
                        ${isScrolled ? "text-black" : "text-black lg:text-white"}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>

                    {navItems.map((item, index) => (
                        <div key={index} className="relative group lg:h-auto border-gray-200 lg:border-none">
                            {item.dropdown.length > 0 ? (
                                <button
                                    onClick={() => toggleMobileDropdown(index)}
                                    className={`w-full  lg:w-auto py-2 px-4 text-[20px] lg:hover:scale-105   transition-all duration-300 font-josefin flex justify-between items-center 
                                    ${isScrolled ? "text-black" : "text-black lg:text-gray-200 "}`}
                                    aria-expanded={mobileDropdowns[index]}
                                >
                                    {item.name}
                                    <span className="lg:hidden">{mobileDropdowns[index] ? '−' : '+'}</span>
                                </button>
                            ) : (
                                <Link
                                    to={`/${String(item.name).toLowerCase().replace(/\s+/g, "-")}`}
                                    className={`w-full lg:w-auto py-2 px-4 text-[20px] hover:scale-105 transition-all duration-300 font-josefin flex justify-between items-center
                                    ${isScrolled ? "text-black" : "text-black lg:text-white"}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
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
