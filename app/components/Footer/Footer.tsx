import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { MdAddIcCall, MdAttachEmail } from "react-icons/md";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#080c167b] to-[#1a1e2eae] py-12 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/shivam.jpg"
              alt="Profile"
              width={800}
              height={600}
              className="rounded-full w-[200px] h-[200px] border-4 border-white shadow-xl mb-4"
            />
            <h2 className="text-3xl font-bold mb-1">Shivam Chauhan</h2>
            <p className="text-gray-200 mb-1">MERN Stack Developer</p>
            <div className="flex items-center space-x-3 text-gray-400 text-lg">
              <FontAwesomeIcon icon={faLaptopCode} />
              <span>Web Developer</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 text-gray-300">
            <h3 className="text-[2rem] font-bold text-white">Contact Info</h3>
            <p className="flex items-center justify-center md:justify-start">
              <MdAddIcCall className="text-[#0D4347] mr-2 text-[1.2rem]" />
              <Link
                href="tel:+916394687564"
                className="hover:text-[#0D4347] transition-all"
              >
                +91 6394687564
              </Link>
            </p>
            <p className="flex items-center justify-center md:justify-start ">
              <MdAttachEmail className="text-[#0D4347] mr-2 text-[1.2rem]" />
              <Link
                href="mailto:shivamchauhan2499@gmail.com"
                className="hover:text-[#0D4347] transition-all"
              >
                shivamchauhan2499@gmail.com
              </Link>
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[2rem] font-bold text-white mb-4">
              Connect Me
            </h3>
            <div className="flex gap-[1rem] items-center  justify-center  ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-[0.2rem] w-8 h-8 rounded-lg text-white  bg-blue-900 hover:bg-blue-700 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-[0.2rem] w-8 h-8 rounded-lg text-white  bg-gray-900 hover:bg-gray-800 transition"
              >
                <FaThreads size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-[0.2rem] w-8 h-8 rounded-lg text-white  bg-blue-700 hover:bg-blue-800 transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-[0.2rem] w-8 h-8 rounded-lg text-white  bg-gradient-to-t to-red-600 via-pink-1400 from-yellow-900 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-[0.2] w-8 h-8 rounded-lg text-white  bg-[#000000e6] hover:bg-[#00000079] transition"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
          <p>© 2024 Shivam Chauhan. All rights reserved.</p>
          <p>
            Passionate about creating intuitive and efficient web solutions with
            modern technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
