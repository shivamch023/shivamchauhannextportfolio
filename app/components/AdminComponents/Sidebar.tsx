import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col    border border-gray-600">
      <div className="px-2 sm:pl-14 py-3 ">
        <h2 className="text-white text-[1.8rem] font-[700]">Shivam chauhan</h2>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-gray-600">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href="/admin/addProject"
            className="flex items-center border border-gray-600 gap-3 font-medium px-3 py-2  shadow-[-5px_5px_0px_#000000]"
          >
            <p className="text-white">Add Project</p>
          </Link>
          <Link
            href="/admin/projectList"
            className="mt-5 flex items-center border border-gray-600 gap-3 font-medium px-3 py-2  shadow-[-5px_5px_0px_#000000]"
          >
            <p className="text-white">Projects List</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
