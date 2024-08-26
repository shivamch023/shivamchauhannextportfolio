"use client";

import Link from "next/link";
import { useState } from "react";
import { FiHome, FiFileText, FiBook, FiPhone } from "react-icons/fi";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className="container">
      {/* Desktop View */}
      <div className="hidden w-full md:flex justify-between items-center w-full lg:max-w-7xl md:px-8 mx-auto fixed top-3 left-0 right-0 z-20 backdrop-blur-lg bg-opacity-70 p-4 mx-4 rounded-[25px] border border-[#fff] shadow-2xl">
        <h2 className="flex items-center p-2 border rounded-full text-white text-[20px]">
          SC
        </h2>

        <div className="flex space-x-6">
          <Link
            href="/"
            className={`text-[#FFFFFF] ${
              activeLink === "home"
                ? "bg-[#40E0D0] px-2 text-[black] rounded-sm"
                : ""
            }`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-[#FFFFFF] ${
              activeLink === "about"
                ? "bg-[#40E0D0] px-2 text-[black] rounded-sm"
                : ""
            }`}
            onClick={() => setActiveLink("about")}
          >
            About
          </Link>

          <Link
            href="/portfolio"
            className={`text-[#FFFFFF] ${
              activeLink === "portfolio"
                ? "bg-[#40E0D0] px-2 text-[black] rounded-sm"
                : ""
            }`}
            onClick={() => setActiveLink("portfolio")}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`text-[#FFFFFF] ${
              activeLink === "contact"
                ? "bg-[#40E0D0] px-2 text-[black] rounded-sm"
                : ""
            }`}
            onClick={() => setActiveLink("contact")}
          >
            Contact
          </Link>
          <Link
            href="/skill"
            className={`text-[#FFFFFF] ${
              activeLink === "skill"
                ? "bg-[#40E0D0] px-2 text-[black] rounded-sm"
                : ""
            }`}
            onClick={() => setActiveLink("skill")}
          >
            Tech Stack
          </Link>
          <Link
            href="/service"
            className={`text-[#FFFFFF] ${
              activeLink === "service"
                ? "bg-[#40E0D0] px-2 text-[black] rounded-sm"
                : ""
            }`}
            onClick={() => setActiveLink("service")}
          >
            Services
          </Link>
        </div>

        <Link
          href="#modal"
          onClick={() => setActiveLink("modal")}
          className={`relative ${
            activeLink === "modal" ? "text-yellow-500" : ""
          }`}
        >
          <MdLightMode
            size={30}
            className={`text-[#FFFFFF] ${
              activeLink === "modal" ? "text-yellow-500" : ""
            }`}
          />
        </Link>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden fixed top-0 left-0 right-0 z-20 backdrop-blur-lg bg-opacity-70 p-3 mx-3 rounded-[20px] border border-[#fff] flex justify-between items-center shadow-md">
        <h2 className="flex items-center p-2 border rounded-full text-white text-[20px]">
          SC
        </h2>
        <Link
          href="#modal"
          onClick={() => setActiveLink("modal")}
          className={`relative ${
            activeLink === "modal" ? "text-yellow-300" : ""
          }`}
        >
          <MdLightMode
            size={30}
            className={`text-[#FFFFFF] ${
              activeLink === "modal" ? "text-yellow-300" : ""
            }`}
          />
        </Link>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 backdrop-blur-lg bg-opacity-70 shadow-t-md p-4 mx-3 rounded-[20px] border border-[#fff] block md:hidden">
        <ul className="flex justify-between items-center relative">
          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "home" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="/" onClick={() => setActiveLink("home")}>
              <div className="flex flex-col items-center">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "home" ? "bg-[#40E0D0]/50" : ""
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
              <div className="flex flex-col items-center ml-[-60%]">
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
          <li className="p-2 h-[70px] bg-[#0e2f44] w-[70px] absolute top-[-50%] left-1/2 -translate-x-[55%] translate-y-[-47%] rotate-45 border-t-4 rounded-full border-l-4 border-[#0e2f44]">
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
