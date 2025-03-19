import React from "react";
import Type from "./type";
import Particle from "./Particle";
import Dropdown from "./Dropdown";
import MobileType from "./mobileType";
import { IoDownloadOutline } from "react-icons/io5";

const OldHeader = () => {
  return (
    <div>
      <div className="text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800">
        {/* <Particle /> */}
        <div className="pt-5 px-10">
          {/* <Dropdown /> */}

          <div className="hidden md:flex">
            <Type />
          </div>
          <div className="md:hidden flex">
            <MobileType />
          </div>
        </div>

        <div className="px-10 sm:flex sm:space-x-6">
          <div className="flex flex-col py-4">
            <div className="mt-2">
              {/* <FaCodeCompare size={25} /> */}
              <p className="font-extrabold text-xl md:text-2xl">
                I design, build, and sell products and services online.
              </p>
            </div>
            <div className="mt-2">
              <a href="https://flowcv.com/resume/r8p9dbnsrn">
                <button className="bg-black hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-1">
                  <IoDownloadOutline size={30} />
                  <span>View my Resume</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldHeader;
