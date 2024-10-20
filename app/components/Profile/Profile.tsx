"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-0  right-3   flex items-center justify-end w-[100%] md:w-[40%] xl:w-[25%] lg:w-[30%] h-[80px] overflow-hidden">
      <div
        className="relative flex  items-center  rounded w-[100%] justify-end"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/assets/shivam profile.jpg"
          alt="Your Photo"
          width={50}
          height={50}
          className="object-cover rounded-[50px] shadow-lg"
        />

        <motion.div
          className={`absolute bottom-[1x] gap-4 w-full   flex items-center justify-between right-0 bg-[#080c16fa]  text-white rounded-[20px] border-2 border-gray-700 px-3 py-2 ${
            isHovered ? "translate-x-0" : "translate-x-full"
          }`}
          initial={{ translateX: "100%" }}
          animate={{ translateX: isHovered ? "0%" : "100%" }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex flex-col px-4 ">
            <h2 className="text-[25px] font-[600] Poppins text-[#4ac1c1]">
              Shivam chauhan
            </h2>
            <p className=" text-[14px] Poppins font-[400] text-[#a0b4b4d7]">
              Full Stack Web Developer
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Link href="/contact">
              <button className="bg-[#0c3232cc] px-6 py-3 transition-all  text-[13px] rounded-lg hover:bg-[#215b5bae]">
                Hire Me
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
