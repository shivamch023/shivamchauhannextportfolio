"use client";
import Image from "next/image";
import Link from "next/link"; // Next.js Link for routing
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Renamed Link for scrolling
import { CgMail } from "react-icons/cg";

const MessageMe = () => {
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFocus = (field: string) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocused((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-3 mt-[8rem] items-center min-h-screen">
        {/* Top Section */}
        <div className="text-white text-center p-6">
          <h1 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            Let&apos;s <CgMail className="text-red-500" />
            <span className="text-[#008080]">talk</span>
          </h1>
          <p className="text-sm text-[#b3b9cd]">
            If you have any questions, feel free to reach out to us at any time.
            <ScrollLink
              to="social"
              smooth={true}
              duration={500}
              className="text-aqua-300 cursor-pointer underline transition ml-2 hover:text-red-400 text-[#008080]"
            >
              Social Media
            </ScrollLink>
          </p>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row p-6">
          {/* Form Section */}
          <div className="w-full flex justify-center items-center md:w-1/2 p-4">
            <form className="space-y-8">
              {/* Name Input */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-3 px-2 py-1 transform transition-all rounded-lg ${
                    focused.name
                      ? "-top-3 text-xs text-black font-semibold bg-white"
                      : "top-4 text-gray-500 bg-transparent"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`mt-4 block w-full py-4 px-8 border border-gray-700 rounded-md placeholder-transparent 
                  ${focused.name ? "border-blue-600" : "border-gray-300"} 
                  bg-transparent focus:outline-[white] text-white`}
                  placeholder="Your Name"
                  onFocus={() => handleFocus("name")}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-3 px-2 py-1 transform transition-all rounded-lg ${
                    focused.email
                      ? "-top-3 text-xs text-black font-semibold bg-white"
                      : "top-4 text-gray-500 bg-transparent"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`mt-4 block w-full py-4 px-8 border border-gray-700 rounded-md placeholder-transparent 
                  ${focused.email ? "border-blue-600" : "border-gray-300"} 
                  bg-transparent focus:outline-[white] text-white`}
                  placeholder="Email"
                  onFocus={() => handleFocus("email")}
                  onBlur={(e) => handleBlur("email", e.target.value)}
                  required
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-3 px-2 py-1 transform transition-all rounded-lg ${
                    focused.message
                      ? "-top-3 text-xs text-black font-semibold bg-white"
                      : "top-4 text-gray-500 bg-transparent"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className={`mt-4 block w-full py-4 px-8 border border-gray-700 rounded-md placeholder-transparent 
                  ${focused.message ? "border-blue-600" : "border-gray-300"} 
                  bg-transparent focus:outline-[white] text-white`}
                  placeholder="Message"
                  rows={4}
                  onFocus={() => handleFocus("message")}
                  onBlur={(e) => handleBlur("message", e.target.value)}
                  required
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 text-blue-600 border-gray-300  rounded"
                />
                <label
                  htmlFor="consent"
                  className="ml-2 block text-[12px] text-white"
                >
                  I acknowledge and agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-aqua-300 underline transition ml-2 hover:text-[#008080]"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-aqua-300 underline transition ml-2 hover:text-[#008080]"
                  >
                    Privacy Policy.
                  </Link>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-center items-center lg:items-start lg:justify-start md:items-start md:justify-center xl:items-center xl:justify-start space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#008080]  text-white text-nowrap text-[14px] transition rounded-md hover:bg-[#009688]"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  className="px-4 text-nowrap py-2 bg-[#1D2029] text-white text-[14px] transition rounded-md hover:bg-[#2a2d37]"
                >
                  Schedule a Call
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-1 flex items-center justify-center">
            <div className="relative w-full max-w-[400px]">
              <Image
                src="/assets/shivam.jpg"
                alt="Shivam"
                className="rounded-lg  shadow-lg mx-auto max-w-full h-auto"
                height={300}
                width={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageMe;
