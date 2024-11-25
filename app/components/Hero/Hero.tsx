/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const Typewriter = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto pt-[5rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-1 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="bg-[#080C16] rounded-3xl w-full p-6 md:p-[4rem] flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex w-full flex-col align-center justify-start md:text-left text-center">
          <div className="space-y-4 w-full">
            <h1 className="text-[2rem] md:text-[1.6rem] font-serif font-bold text-[white]">
              Meet <span className="text-[#008080]">Shivam</span>.
            </h1>
            <h2 className="text-[1.8rem] md:flex md:gap-[0.5rem] text-center md:px-1 md:text-[2.2rem] font-[600] text-[white]">
              I Am
              <Typewriter
                textStyle={{ fontWeight: "600", color: "#008080" }}
                startDelay={200}
                cursorColor="#008080"
                multiText={[
                  "Frontend Developer!",
                  "Mern Developer!",
                  "Full Stack Developer!",
                ]}
                multiTextDelay={400}
                typeSpeed={80}
                multiTextLoop
              />
            </h2>
            <p className="w-full md:w-[384px] text-[#e2e2e2] text-[1rem] md:text-[1.2rem] font-[400]">
              Start a new project with me or take an existing one to the next
              level.
            </p>
            <div className="flex justify-center md:justify-start space-x-2 md:space-x-4 mt-4 md:mt-6">
              <Link
                href="/portfolios"
                className="bg-[#008080] text-[0.8rem] md:text-[0.9rem] text-white py-2 px-3 md:px-4 rounded-xl hover:bg-teal-700 transition"
              >
                See my work
              </Link>
              <Link
                href="/contact"
                className="bg-gray-800 text-[0.8rem] md:text-[0.9rem] text-white py-[0.5rem] px-6 md:px-8 rounded-xl hover:bg-gray-900 transition"
              >
                Start Now
              </Link>
            </div>
            {/* Resume Button */}
            <div className="">
              <button
                onClick={handleOpenModal}
                className="bg-gray-800 text-[0.8rem] md:text-[0.9rem] text-white py-[0.6rem] px-20 md:px-20 rounded-xl hover:bg-gray-900 transition"
              >
                See My Resume
              </button>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex justify-center gap-2 md:justify-end md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/assets/shivam.jpg"
            alt="Shivam"
            className="w-full xl:w-[350px] md:w-[350px] border-[3px] border-dashed border-gray-400 p-1 shadow-lg"
            width={800}
            height={600}
            style={{
              borderRadius: "50% 50% 20% 20%", // Adjust the values as needed
            }}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-700 rounded-lg shadow-lg p-4 w-[90%] md:w-[70%] h-[80%] flex flex-col">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="self-end text-white-500 hover:text-white-700"
            >
              ✖
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/assets/cft/shivam_resume.pdf"
              className="flex-grow w-full h-full border rounded"
              title="Resume"
            ></iframe>

            {/* Download Button */}
            <Link
              href="/assets/cft/shivam_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-[0.8rem] md:text-[0.9rem] text-white py-[0.5rem] px-6 md:px-8 rounded-xl hover:bg-gray-900 transition mt-4 text-center"
              download
            >
              Download Resume
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
