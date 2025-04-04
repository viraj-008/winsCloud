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
                { label: "Sage 500 Hosting", href: "/sage-500-hosting" }
            ]
        },
        { name: "Service", dropdown: [{ label: "Consulting", href: "/consulting" }, { label: "Support", href: "/support" }] },
        { name: "Pricing", dropdown: [] }, // Direct link, no dropdown
        { name: "Support", dropdown: [{ label: "Help Center", href: "/help-center" }, { label: "Live Chat", href: "/live-chat" }] },
        { name: "About Us", dropdown: [{ label: "Company Info", href: "/company-info" }, { label: "Our Team", href: "/our-team" }] },
        { name: <FaUserCircle className="text-3xl text-blue-700"/>, dropdown: [{ label: "Profile", href: "/profile" }, { label: "", href: "/terms" }] },
    ];

    const toggleMobileDropdown = (index: number) => {
        if (window.innerWidth < 1024) {
            setMobileDropdowns(prev => ({
                ...prev,
                [index]: !prev[index]
            }));
        }
    };

    return (
        <div className={`fixed w-full z-50 transition-all duration-300 
            bg-white lg:bg-transparent
            ${isScrolled ? "lg:bg-white/95 shadow-lg" : ""}`}>
            <div className="flex flex-wrap justify-between p-4 items-center lg:justify-around">
                <Link to="/">
                    <img className="bg-blue-500 px-2 h-9 rounded-lg" src="./images/logo/wins.avif" alt="Logo" />
                </Link>
                
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 transition-all duration-300 text-black"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>

                {/* Nav Menu */}
                <div className={`w-full lg:w-auto lg:flex lg:items-center transition-all duration-500 ease-in-out 
                    ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>

                    <Link to="/" 
                        className={`w-full lg:w-auto py-2 px-4 mb-1 hidden md:block hover:scale-105 transition-all duration-300 
                        ${isScrolled ? "text-black" : "text-black lg:text-white"}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>

                    {navItems.map((item, index) => (
                        <div key={index} className="relative group">
                            {item.dropdown.length > 0 ? (
                                <button
                                    onClick={() => toggleMobileDropdown(index)}
                                    className={`w-full lg:w-auto py-2 px-4 text-[20px] hover:scale-105 transition-all duration-300 font-josefin flex justify-between items-center 
                                    ${isScrolled ? "text-black" : "text-black lg:text-white"}`}
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
                                        <div key={subIndex} className="mt-2">
                                            <Link to={subItem.href}  
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-4 py-2 text-[16px] font-montserrat text-gray-900
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
