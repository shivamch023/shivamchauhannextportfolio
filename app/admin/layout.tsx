import Image from "next/image";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/AdminComponents/Sidebar";
import Link from "next/link";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="flex container pt-[1rem]">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-2  px-12 border border-b border-gray-600">
            <h3 className="font-medium text-white">Admin Panel</h3>
            <Link href={"/"}>
              <Image
                src="/assets/shivam.jpg"
                width={38}
                className="rounded-[10rem]"
                alt=""
                height={38}
              />
            </Link>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
