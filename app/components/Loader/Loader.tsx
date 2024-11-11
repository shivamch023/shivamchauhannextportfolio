"use client";
import { useEffect } from "react";
import Splitting from "splitting";

const Loader = () => {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <div className=" container flex   flex-col items-center justify-center min-h-screen bg-transparent text-white">
      <div
        className=" text-[4rem] font-bold tracking-wide animate-bounce"
        data-splitting
      >
        <span className="text-shadow-sm">LOADING PROJECT</span>
      </div>
    </div>
  );
};

export default Loader;
