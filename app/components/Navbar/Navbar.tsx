"use client";
import React from "react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiHome, FiFileText, FiBook, FiPhone } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { MdCheck, MdLightMode } from "react-icons/md";
import Modal from "../Modal/Modal";

function NavBar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [selectedMode, setSelectedMode] = useState(null);

  const selectMode = (mode: any) => {
    setSelectedMode(mode);
  };

  useEffect(() => {
    const pathToLinkMap: { [key: string]: string } = {
      "/": "home",
      "/about": "about",
      "/portfolio": "portfolio",
      "/contact": "contact",
      "/skill": "skill",
      "/service": "service",
    };
    setActiveLink(pathToLinkMap[pathname] || "home");
  }, [pathname]);

  return (
    <div className="container">
      {/* Desktop View */}
      <div className="hidden border-gray-700  w-full md:flex justify-between items-center lg:max-w-7xl md:px-8 mx-auto fixed top-3 left-0 right-0 z-20 backdrop-blur-lg bg-opacity-70 p-1  rounded-[25px] border-[0.1px] border-white-600 border-opacity-100 shadow-lg">
        <div className="text-[2.5rem] select-none font-bold flex items-center border-gray-700  justify-center border-r-2 px-5 h-[47px]">
          <span className="inline-block bg-gradient-to-b from-white to-[#008080] bg-clip-text text-transparent transform rotate-[4deg]">
            S
          </span>
          <span className="inline-block bg-gradient-to-b from-[#008080] to-white bg-clip-text text-transparent transform rotate-[-7deg]">
            C
          </span>
        </div>
        <div className="flex space-x-6">
          <Link
            href="/"
            className={`text-[#FFFFFF] px-3 py-1 hover:bg-[#28353B] transition rounded-xl ${
              activeLink === "home"
                ? "bg-[#28353B] px-3 py-1 text-[white] rounded-xl"
                : ""
            }`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-[#FFFFFF] px-3 py-1 hover:bg-[#28353B] transition rounded-xl ${
              activeLink === "about"
                ? "bg-[#28353B] px-3 py-1 text-[white] rounded-xl"
                : ""
            }`}
            onClick={() => setActiveLink("about")}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className={`text-[#FFFFFF] px-3 py-1 hover:bg-[#28353B] transition rounded-xl ${
              activeLink === "portfolio"
                ? "bg-[#28353B] px-3 py-1 text-[white] rounded-xl"
                : ""
            }`}
            onClick={() => setActiveLink("portfolio")}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className={`text-[#FFFFFF] px-3 py-1 hover:bg-[#28353B] transition rounded-xl ${
              activeLink === "contact"
                ? "bg-[#28353B] px-3 py-1 text-[white] rounded-xl"
                : ""
            }`}
            onClick={() => setActiveLink("contact")}
          >
            Contact
          </Link>
          <Link
            href="/skill"
            className={`text-[#FFFFFF] px-3 py-1 hover:bg-[#28353B] transition rounded-xl ${
              activeLink === "skill"
                ? "bg-[#28353B] px-3 py-1 text-[white] rounded-xl"
                : ""
            }`}
            onClick={() => setActiveLink("skill")}
          >
            Skills
          </Link>
          <Link
            href="/service"
            className={`text-[#FFFFFF] px-3 py-1 hover:bg-[#28353B] transition rounded-xl ${
              activeLink === "service"
                ? "bg-[#28353B] px-3 py-1 text-[white] rounded-xl"
                : ""
            }`}
            onClick={() => setActiveLink("service")}
          >
            Services
          </Link>
        </div>

        <div className="p-4 ">
          <button onClick={openModal}>
            <MdLightMode size={30} className="text-yellow-500" />
          </button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="flex flex-col gap-[0.5rem] ">
              <div className="flex gap-[2rem] justify-center space-x-4 mt-4">
                <div
                  className="
             "
                >
                  <div
                    className={`p-1 border rounded-lg cursor-pointer  ${
                      selectedMode === "light"
                        ? "border-white border-[2px]"
                        : "border-gray-300"
                    }`}
                    onClick={() => selectMode("light")}
                  >
                    <div className="text-center relative">
                      {/* Light Mode Image */}
                      <Image
                        src="/light.jpg"
                        alt="Light Mode"
                        className="w-[120px] h-[100px] rounded-lg"
                        width={200}
                        height={200}
                      />
                      {selectedMode === "light" && (
                        <MdCheck
                          size={24}
                          className="text-[white] rounded-full bg-[black] p-1 font-[bold] text-[50px] top-[30%] right-[40%] mt-2 absolute"
                        />
                      )}
                    </div>
                  </div>
                  <p className="font-[300] text-[#ededed] text-[0.875] text-center mt-2">
                    Light Mode
                  </p>
                </div>

                <div className="">
                  <div
                    className={`p-1  border rounded-lg cursor-pointer ${
                      selectedMode === "dark"
                        ? "border-white border-[2px]"
                        : "border-gray-300"
                    }`}
                    onClick={() => selectMode("dark")}
                  >
                    <div className="text-center relative">
                      {/* Dark Mode Image */}
                      <Image
                        src="/dark.jpg"
                        alt="Dark Mode"
                        className="w-[120px] h-[100px] rounded-lg"
                        width={200}
                        height={200}
                      />
                      {selectedMode === "dark" && (
                        <MdCheck
                          size={24}
                          className="text-[black] rounded-full bg-[white] p-1 font-[bold] text-[50px] top-[30%] right-[40%] mt-2 absolute"
                        />
                      )}
                    </div>
                  </div>

                  <p className="font-[300] text-[#ededed] text-[0.875] text-center mt-2">
                    Dark Mode
                  </p>
                </div>
              </div>
              <div className="flex mt-4 border-t justify-center border-gray-600 gap-[2.8rem] ">
                <button className="bg-gray-800 hover:bg-gray-700 transition  w-[130px] text-[13px] text-[white] py-2 px-4  mt-4 rounded-xl">
                  Close
                </button>
                <button className="bg-[#00808085] hover:bg-[#008080] transition  w-[130px] text-[13px] text-[white] py-2 px-4  mt-4 rounded-xl">
                  Save Changes
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      {/* Mobile View */}
      <div className=" md:hidden border-gray-700  fixed top-0 left-0 right-0 z-20 backdrop-blur-lg bg-opacity-70 p-1 px-2 mx-3 mt-2 rounded-[20px] border flex justify-between items-center shadow-md">
        <h2 className="flex items-center p-2 border rounded-full text-white text-[20px]">
          SC
        </h2>
        <div className="p-4 ">
          <button onClick={openModal}>
            <MdLightMode size={30} className="text-yellow-500" />
          </button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="flex flex-col gap-[0.5rem] ">
              <div className="flex gap-[2rem] justify-center space-x-4 mt-4">
                <div
                  className="
             "
                >
                  <div
                    className={`p-1 border rounded-lg cursor-pointer  ${
                      selectedMode === "light"
                        ? "border-white border-[2px]"
                        : "border-gray-300"
                    }`}
                    onClick={() => selectMode("light")}
                  >
                    <div className="text-center relative">
                      {/* Light Mode Image */}
                      <Image
                        src="/light.jpg"
                        alt="Light Mode"
                        className="w-[120px] h-[100px] rounded-lg"
                        width={200}
                        height={200}
                      />
                      {selectedMode === "light" && (
                        <MdCheck
                          size={24}
                          className="text-[white] rounded-full bg-[black] p-1 font-[bold] text-[50px] top-[30%] right-[40%] mt-2 absolute"
                        />
                      )}
                    </div>
                  </div>
                  <p className="font-[300] text-[#ededed] text-[0.875] text-center mt-2">
                    Light Mode
                  </p>
                </div>

                <div className="">
                  <div
                    className={`p-1  border rounded-lg cursor-pointer ${
                      selectedMode === "dark"
                        ? "border-white border-[2px]"
                        : "border-gray-300"
                    }`}
                    onClick={() => selectMode("dark")}
                  >
                    <div className="text-center relative">
                      {/* Dark Mode Image */}
                      <Image
                        src="/dark.jpg"
                        alt="Dark Mode"
                        className="w-[120px] h-[100px] rounded-lg"
                        width={200}
                        height={200}
                      />
                      {selectedMode === "dark" && (
                        <MdCheck
                          size={24}
                          className="text-[black] rounded-full bg-[white] p-1 font-[bold] text-[50px] top-[30%] right-[40%] mt-2 absolute"
                        />
                      )}
                    </div>
                  </div>

                  <p className="font-[300] text-[#ededed] text-[0.875] text-center mt-2">
                    Dark Mode
                  </p>
                </div>
              </div>
              <div className="flex mt-4 border-t justify-center border-gray-600 gap-[2.8rem] ">
                <button
                  onClick={closeModal}
                  className="bg-gray-800 hover:bg-gray-700 transition  w-[130px] text-[13px] text-[white] py-2 px-4  mt-4 rounded-xl"
                >
                  Close
                </button>
                <button className="bg-[#00808085] hover:bg-[#008080] transition  w-[130px] text-[13px] text-[white] py-2 px-4  mt-4 rounded-xl">
                  Save Changes
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      <div className="fixed border-gray-700  bottom-0 left-0 right-0 z-20 backdrop-blur-lg bg-opacity-70 shadow-t-md p-4 mx-3 mb-2 rounded-[20px] border  block md:hidden">
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
            <Link href="/skill" onClick={() => setActiveLink("skill")}>
              <div className="flex flex-col items-center ml-[60%]">
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ease-in-out ${
                    activeLink === "skill" ? "bg-[#40E0D0]/40" : ""
                  }`}
                >
                  <FiFileText size={15} />
                </div>
                <span className="mt-0 text-[10px]">Skills</span>
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
