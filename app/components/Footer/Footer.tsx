import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-[#080C16] py-12 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/shivam.jpg"
              alt="Profile"
              width={28}
              height={28}
              className="rounded-full object-cover w-28 h-28 border-4 border-white shadow-lg mb-4"
            />
            <h2 className="text-3xl font-semibold">Shivam Chauhan</h2>
            <p className="text-gray-200 mt-1">Web Developer</p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <p className="text-gray-200">
              Phone:{" "}
              <Link href="tel:+916394687564" className="hover:text-white">
                +91 6394687564
              </Link>
            </p>
            <p className="text-gray-200">
              Email:{" "}
              <Link
                href="mailto:shivamchauhan249@gmail.com"
                className="hover:text-white"
              >
                shivamchauhan249@gmail.com
              </Link>
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex justify-center md:justify-start space-x-6">
            <Link
              href="https://www.facebook.com"
              className="text-3xl hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              href="https://github.com"
              className="text-3xl hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shivam-chauhan-81665b279/"
              className="text-3xl hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-3xl hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-300 border-t border-gray-400 pt-4">
          © 2024 Shivam Chauhan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
