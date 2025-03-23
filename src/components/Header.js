"use client";

import Image from "next/image";
import { useState } from "react";
import national from "../../public/national-emblem.png";
import logo from "../../public/city-police-logo.png";
import {
  ChevronDown,
  Mail,
  MessageCircle,
  Menu,
  Search,
  Accessibility,
} from "lucide-react";

export default function Header() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState("Accessibility");
  const [isOpenAcc, setIsOpenAcc] = useState(false);
  const menuItems = [
    "Report Us",
    "Citizen Corner",
    "Woman Corner",
    "Police Corner",
  ];
  return (
    <header className="bg-white w-full">
      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-1">
        {/* Logo */}
        <div className="flex items-center space-x-4 px-6">
          <Image
            src={national}
            title="National Embelem"
            alt="National Embelem"
            width={29}
          />
        </div>

        {/* Search & Controls */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#EDF5F5] px-4 pr-10 py-2 rounded-2xl border border-gray-300 focus:outline-none w-full transition-all duration-300 ease-in-out hover:border-gray-500 focus:border-blue-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 " />
          </div>
          <select
            title="Select the police station"
            alt="Select the police station"
            className="bg-[#EDF5F5] px-4 py-2 rounded-2xl border border-gray-300 hover:border-gray-500 focus:border-blue-500"
            defaultValue="Select Police Station"
          >
            <option disabled>Select Police Station</option>
            <option className="rounded-xl">Station 1</option>
            <option className="rounded-xl">Station 2</option>
          </select>
          <div
            className={`w-24 h-7 flex items-center rounded-full p-1 cursor-pointer relative ${
              language === "en" ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setLanguage(language === "en" ? "ma" : "en")}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform flex items-center justify-center text-xs font-bold ${
                language === "en" ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {language === "en" ? "EN" : "MR"}
            </div>
          </div>
          {/* Accessibility icon options */}
          <div
            className="relative inline-block w-20"
            title="Select the police station"
          >
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpenAcc(!isOpenAcc)} // Toggle dropdown visibility
              className="flex items-center justify-between w-full bg-[#EDF5F5] px-4 py-2 rounded-2xl border border-gray-300 hover:border-gray-500 focus:border-blue-500"
            >
              <div className="flex items-center">
                <Accessibility className="w-5 h-5 mr-2" />
              </div>
              <ChevronDown className="w-5 h-5" /> {/* Dropdown Arrow Icon */}
            </button>

            {/* Dropdown Menu */}
            {isOpenAcc && (
              <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-2xl shadow-md">
                <button
                  className="flex items-center px-4 py-2 w-full hover:bg-gray-200 rounded-2xl"
                  onClick={() => {
                    setSelected("Accessibility");
                    setIsOpenAcc(false); // Close dropdown on selection
                  }}
                >
                  <Accessibility className="w-5 h-5 mr-2" />
                </button>
                <button
                  className="flex items-center px-4 py-2 w-full hover:bg-gray-200 rounded-2xl"
                  onClick={() => {
                    setSelected("Other Option");
                    setIsOpenAcc(false); // Close dropdown on selection
                  }}
                >
                  <Accessibility className="w-5 h-5 mr-2" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`bg-white px-3 py-1 text-sm ${
          menuOpen ? "block items-center" : "hidden"
        } md:flex md:justify-between md:items-center`}
      >
        {/* Left Section: Logo & Title */}
        <a
          href="#"
          title="City Police Logo"
          className="flex items-center space-x-4 !no-underline"
        >
          <Image src={logo} alt="City Police Logo" height={70} />
          <h1 className="text-2xl font-bold text-blue-900">City Police</h1>
        </a>

        {/* Middle Section: Navigation Links */}
        <div className="flex flex-col md:flex-row text-blue-900 ">
          <div className="flex items-center px-2 text-sm">
            <a href="#" className="hover:text-blue-600" title="Home">
              Home
            </a>
          </div>
          <div
            key="About Us"
            title="About Us"
            className="relative group text-sm"
          >
            <button className="flex items-center px-2 py-2 hover:text-blue-600">
              <span>About Us</span> <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 top-full bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-20">
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                Crime Report
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                Lost & Found
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                Feedback
              </a>
            </div>
          </div>
          {/* Show individual items on large screens */}
          <div className="md:hidden lg:flex space-x-2">
            {menuItems.map((item) => (
              <div key={item} title={item} className="relative group">
                <button className="flex items-center px-2 py-2 hover:text-blue-600">
                  {item} <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 top-full bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-20">
                  <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                    Crime Report
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                    Lost & Found
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                    Feedback
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* "More" dropdown for tablet screens */}
          <div className="hidden md:flex lg:hidden relative">
            <div key="More" title="More" className="relative group">
              <button className="flex items-center px-3 py-2 hover:text-blue-600">
                More <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-20">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Crime Report
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Lost & Found
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Feedback
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Email & Chat Button */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a
            href="mailto:example@email.com"
            title="Email to us"
            className="bg-[#EDF5F5] text-black px-4 py-2 rounded-2xl shadow-md hover:bg-green-700 flex items-center space-x-2"
          >
            <Mail size={18} /> <span>Email</span>
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            title="contact us"
            className="bg-[#9FE5B5] text-black px-4 py-2 rounded-2xl shadow-md hover:bg-green-700 flex items-center space-x-2"
          >
            <MessageCircle size={18} /> <span>Chat with us</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
