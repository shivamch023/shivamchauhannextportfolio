/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className="container flex items-center justify-center pb-12 pt-8">
      <div className="flex flex-col items-center justify-center gap-5 p-8 bg-[#10141d52] border border-gray-600 w-[80%] rounded-[20px]">
        <BsFillQuestionCircleFill className="text-gray-800 border border-gray-400  bg-white text-[4rem] rounded-[200px]" />

        <h2 className="text-[1.4rem] text-white font-semibold">
          Have a project in mind?
        </h2>

        <p className="text-[1.2rem] text-gray-400 font-sans">
          Let's get to work and create something amazing.
        </p>
        <Link
          className="px-8 py-3 text-white bg-[#0e464bf1] font-semibold rounded-[10px] hover:bg-[#0e464bad] transition-all"
          href={"/contact"}
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default GetInTouch;
