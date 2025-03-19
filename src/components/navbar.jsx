import React from "react";
import { FaLink, FaMasksTheater } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaMasksTheater size={30} />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EA
            </span> */}
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a
            href="/projects"
            className="text-sm hover:underline cursor-pointer"
          >
            Projects
          </a>
          <a
            href="https://flowcv.com/resume/r8p9dbnsrn"
            target="_blank"
            className="flex items-center text-sm text-lime-400 hover:underline cursor-pointer"
          >
            <FaLink size={18} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
