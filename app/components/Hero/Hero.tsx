"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Typewriter = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

const Hero = () => {
  return (
    <div className="container mx-auto pt-[7rem] pb-[3rem] md:pt-[8rem] md:pb-[4rem] px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="bg-[#080C16]  rounded-3xl w-full p-6 md:p-[4rem] flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex w-full flex-col align-center justify-start text-center md:text-left text-center">
          <div className="space-y-4 w-full">
            <h1 className="text-xl md:text-[1.6rem] font-serif font-bold text-[white]">
              Meet <span className="text-[#008080]">Shivam</span>.
            </h1>
            <h2 className="text-[1.3rem]  md:flex md:gap-[0.5rem] text-center md:text-[2.3rem] font-[600] text-[white]">
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
            <p className="w-full md:w-[384px] text-[#e2e2e2] text-[0.9rem] md:text-[1.25rem] font-[400]">
              Start a new project with me or take an existing one to the next
              level.
            </p>
            <div className="flex justify-center md:justify-start space-x-2 md:space-x-4 mt-4 md:mt-6">
              <Link
                href="/"
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
          </div>
        </div>
        <div className="flex justify-center md:justify-end md:w-1/2 mt-8 md:mt-0">
          <img
            src="/assets/shivam.jpg"
            alt="Shivam"
            className="w-[220px] md:w-[350px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
