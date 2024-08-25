"use client";

import Link from "next/link";
import { useState } from "react";
// import { IoIosDownload } from "react-icons/io";
import { FiHome, FiFileText, FiBook, FiPhone } from "react-icons/fi";
import Image from "next/image";
import { CiDark } from "react-icons/ci";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className="container">
      <nav className="w-full   fixed top-0 left-0 right-0 z-20 bg-[#0E2F44] shadow-lg py-4">
        <div className="flex rounded-[30px] py-0 transparent border justify-between items-center w-full px-4 mx-auto lg:max-w-7xl md:px-8">
          <h2 className="border flex justify-between items-center p-2  rounded-full">
            SC
          </h2>

          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`text-[#FFFFFF] ${
                activeLink === "home" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-[#FFFFFF] ${
                activeLink === "about" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("about")}
            >
              About
            </Link>

            <Link
              href="/portfolio"
              className={`text-[#FFFFFF] ${
                activeLink === "portfolio" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("portfolio")}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={`text-[#FFFFFF] ${
                activeLink === "contact" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </Link>
            <Link
              href="/skill"
              className={`text-[#FFFFFF] ${
                activeLink === "skill" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("skill")}
            >
              Tech Stack
            </Link>
            <Link
              href="/service"
              className={`text-[#FFFFFF] ${
                activeLink === "service" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("service")}
            >
              Services
            </Link>
          </div>

          <Link href="/modal">
            <CiDark />
          </Link>
        </div>
      </nav>

      <div className="md:hidden fixed top-0 left-0 right-0 z-20 bg-[#0E2F44] p-4 flex justify-between items-center shadow-md">
        <h2 className="border flex justify-between items-center p-2  rounded-full">
          SC
        </h2>
        <Link href="/modal">
          <CiDark />
        </Link>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 bg-[#0E2F44] shadow-t-md p-4 md:hidden">
        <ul className="flex justify-between  items-center relative">
          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "home" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="/" onClick={() => setActiveLink("home")}>
              <div className="flex flex-col items-center">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "home"
                      ? "bg-[#40E0D0]/50" // Light transparent background
                      : ""
                  }`}
                >
                  <FiHome size={15} />
                </div>
                <span className="mt-0 text-[10px]">Home</span>
              </div>
            </Link>
          </li>
          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "portfolio" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="/portfolio" onClick={() => setActiveLink("portfolio")}>
              <div className="flex flex-col items-center ml-[-60%] ">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "portfolio" ? "bg-[#40E0D0]/50" : ""
                  }`}
                >
                  <FiBook size={15} />
                </div>
                <span className="mt-0 text-[10px]">Portfolio</span>
              </div>
            </Link>
          </li>
          <li className="p-2 h-[70px] bg-[#0e2f44] w-[70px] absolute top-[-50%] left-1/2 -translate-x-[55%] translate-y-[-47%] rotate-45 border-t-4 rounded-full border-l-4 border-[#0e2f44] ">
            <Link
              href="/about"
              onClick={() => setActiveLink("about")}
              title="About"
            >
              <div
                className={`p-2 rounded-full border transition-colors duration-300 ease-in-out ${
                  activeLink === "about"
                    ? "bg-[#40E0D0]/50 border-b-4 rounded-b-full"
                    : ""
                }`}
              >
                <Image
                  src="/assets/shivam profile.jpg"
                  className="-rotate-45 absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  alt=""
                  height={70}
                  width={70}
                />
              </div>
            </Link>
          </li>

          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "project" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="/project" onClick={() => setActiveLink("project")}>
              <div className="flex flex-col items-center ml-[60%]">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "project" ? "bg-[#40E0D0]/40" : ""
                  }`}
                >
                  <FiFileText size={15} />
                </div>
                <span className="mt-0 text-[10px]">Projects</span>
              </div>
            </Link>
          </li>
          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "contact" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="/contact" onClick={() => setActiveLink("contact")}>
              <div className="flex flex-col items-center">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "contact" ? "bg-[#40E0D0]/50" : ""
                  }`}
                >
                  <FiPhone size={15} />
                </div>
                <span className="mt-0 text-[10px]">Contact</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
