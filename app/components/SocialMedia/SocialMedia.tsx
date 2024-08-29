import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHandshake,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div
      id="social"
      className="container flex items-center justify-center mx-auto  p-4"
    >
      <div className="flex flex-col gap-[0.8rem]  mt-5 mb-5 items-center lg:w-[70%] max-width-[100%] sm:w-[100%]  text-center border border-gray-700  py-10 px-4  rounded-xl backdrop-blur-lg bg-[#10141D]">
        <div className="w-12 h-12 rounded-full  bg-[#2A2F3F] border-gray-200  flex items-center justify-center hover:bg-gray-700 transition ">
          <FaHandshake size={25} color="#ffffff" />
        </div>
        <h2 className="text-[1.1rem] font-[500] text-[#ededed]">
          Stay Connected!
        </h2>
        <p className="text-[1rem] font-[500] text-[#b3b9cd] mb-4">
          I'd love to hear from you and share my latest projects and ideas.{" "}
        </p>
        <div className="flex gap-[1rem] items-center  justify-center  ">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-[0.1rem] w-8 h-8 rounded-lg text-white  bg-gray-800 hover:bg-gray-700 transition"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-[0.1rem] w-8 h-8 rounded-lg text-white  bg-gray-800 hover:bg-gray-700 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-[0.1rem] w-9 h-9 rounded-lg text-white  bg-gray-800 hover:bg-gray-700 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-[0.1rem] w-8 h-8 rounded-lg text-white  bg-gray-800 hover:bg-gray-700 transition"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-[0.1rem] w-8 h-8 rounded-lg text-white  bg-gray-800 hover:bg-gray-700 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
