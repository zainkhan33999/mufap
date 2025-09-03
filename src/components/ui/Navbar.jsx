"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menus = [
    {
      title: "About Us",
      route: "/about-us",
      links: [
        { name: "About-MUFAP", route: "/about-us/about-mufap" },
        { name: "Vision and Mission", route: "/about-us/about-vision" },
        
      ],
    },
    {
      title: "Investor's Education",
      route: "/ie",
      links: [
        { name: "", route: "/ie/" },
        { name: "FAQS", route: "/ie/faqs" },
      ],
    },
    {
      title: "Members",
      route: "/members",
      links: [
        { name: "Partners", route: "/members/partners" },
        { name: "Team", route: "/members/team" },
      ],
    },
    {
      title: "Contact Us",
      route: "/contact",
      links: [
        { name: "Contact", route: "/contact/contact-us" },
      ],
    },
  ];
  

  return (
    <nav className="bg-[#1A3B2D] lg:bg-white shadow-sm border-b relative">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="w-[170px] lg:w-[200px] ">

        <Link href="/" className="relative font-bold  z-50 bg-[#1A3B2D] text-[#1A3B2D]">
          <Image src={logo} alt="logo" className="object-cover bg-[#1A3B2D] p-2" priority />
        </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 relative">
          {menus.map((menu, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.title)}   // open when hovered
              onClick={() => setOpenMenu(menu.title)}       // also open if clicked
            >
              {/* Parent link */}
              <div
                className="hover:text-[#1A3B2D] transition"
              >
                {menu.title}
              </div>

              {/* Dropdown */}
              {openMenu === menu.title && (
                <div
                  className="absolute top-10 left-0 bg-white shadow-lg border rounded-md w-64 py-3 z-50"
                  onMouseLeave={() => setOpenMenu(null)} // <-- remove this if you want it to *stay open*
                >
                  {menu.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.route}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-[#1A3B2D]">
            Digital Account Opening
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpenMenu(openMenu ? null : "mobile")}
        >
          <p className="text-2xl cursor-pointer">☰</p> 
        </button>
      </div>

      {/* Mobile Dropdown - Positioned absolutely to prevent content pushdown */}
      {openMenu === "mobile" && (
        <div className="md:hidden bg-white border-t shadow-md absolute w-full left-0 top-full z-50">
          {menus.map((menu, idx) => (
            <div key={idx} className="border-b">
              {/* Main menu button */}
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === menu.title ? null : menu.title)
                }
                className="w-full flex justify-between items-center px-4 py-3 font-medium hover:bg-gray-100"
              >
                {menu.title}
                {/* Chevron icons instead of arrows */}
                <span className="transform transition-transform">
                  {openDropdown === menu.title ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  }
                </span>
              </button>

              {/* Submenu links */}
              {openDropdown === menu.title && (
                <div className="bg-gray-50">
                  {menu.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.route}
                      className="block px-6 py-2 text-gray-700 hover:bg-gray-200"
                      onClick={() => setOpenMenu(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;