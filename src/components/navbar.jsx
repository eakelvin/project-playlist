import React from "react";
import { FaLink, FaMasksTheater } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full bg-white text-black border-b border-gray-200 fixed z-[100] top-0 start-0 overflow-hidden">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaMasksTheater size={30} />
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a
            href="/projects"
            className="text-base font-semibold hover:underline cursor-pointer"
          >
            Projects
          </a>
          <a
            href="https://flowcv.com/resume/r8p9dbnsrn"
            target="_blank"
            className="flex items-center text-base font-semibold hover:underline cursor-pointer"
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
