"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosDownload } from "react-icons/io";
import { FiHome, FiFileText, FiBook, FiPhone } from "react-icons/fi";
import Image from "next/image";
import { CiDark } from "react-icons/ci";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="container">
      <nav className="w-full  fixed top-0 left-0 right-0 z-20 bg-[#0E2F44] shadow-lg py-4">
        <div className="flex border justify-between items-center w-full px-4 mx-auto lg:max-w-7xl md:px-8">
          <Link
            href="/"
            className="border flex justify-between items-center p-2  rounded-full"
          >
            SC
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link
              href="#about"
              className={`text-[#FFFFFF] ${
                activeLink === "about" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("about")}
            >
              About
            </Link>
            <Link
              href="#projects"
              className={`text-[#FFFFFF] ${
                activeLink === "projects" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </Link>
            <Link
              href="#blog"
              className={`text-[#FFFFFF] ${
                activeLink === "blog" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("blog")}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className={`text-[#FFFFFF] ${
                activeLink === "contact" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className={`text-[#FFFFFF] ${
                activeLink === "contact" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className={`text-[#FFFFFF] ${
                activeLink === "contact" ? "font-semibold" : ""
              }`}
              onClick={() => setActiveLink("contact")}
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
        <Link
          href="/"
          className="border flex justify-between items-center p-2  rounded-full"
        >
          SC
        </Link>
        <Link href="/modal">
          <CiDark />
        </Link>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 bg-[#0E2F44] shadow-t-md p-4 md:hidden">
        <ul className="flex justify-between gap-2 items-center relative">
          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "about" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="#about" onClick={() => setActiveLink("about")}>
              <div className="flex flex-col items-center">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "about"
                      ? "bg-[#40E0D0]/50" // Light transparent background
                      : ""
                  }`}
                >
                  <FiHome size={20} />
                </div>
                {/* <span className="mt-1 text-sm">About</span> */}
              </div>
            </Link>
          </li>
          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "blog" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="#blog" onClick={() => setActiveLink("blog")}>
              <div className="flex flex-col items-center ml-[-50%]">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "blog" ? "bg-[#40E0D0]/50" : ""
                  }`}
                >
                  <FiBook size={20} />
                </div>
                {/* <span className="mt-1 text-sm">Portfolio</span> */}
              </div>
            </Link>
          </li>
          <li className="p-2 h-[70px] w-[70px] absolute top-[-50%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-t-4 rounded-full border-l-4 border-[#0e2f44] ">
            <Image
              src="/assets/shivam profile.jpg"
              className="border -rotate-45 absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              alt=""
              height={70}
              width={70}
            />
          </li>
          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "projects" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="#projects" onClick={() => setActiveLink("projects")}>
              <div className="flex flex-col items-center ml-[50%]">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "projects" ? "bg-[#40E0D0]/40" : ""
                  }`}
                >
                  <FiFileText size={20} />
                </div>
                {/* <span className="mt-1 text-sm">Projects</span> */}
              </div>
            </Link>
          </li>
          <li
            className={`text-center flex items-center justify-center ${
              activeLink === "contact" ? "text-[#40E0D0]" : "text-[#FFFFFF]"
            }`}
          >
            <Link href="#contact" onClick={() => setActiveLink("contact")}>
              <div className="flex flex-col items-center">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "contact" ? "bg-[#40E0D0]/50" : ""
                  }`}
                >
                  <FiPhone size={20} />
                </div>
                {/* <span className="mt-1 text-sm">Contact</span> */}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
