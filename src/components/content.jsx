import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Content = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section className="max-w-screen-xl mx-auto py-20 px-4 flex flex-col min-h-screen">
        <div className="max-w-xl flex flex-col flex-grow">
          <div className="py-4">
            <h3 className="text-3xl font-semibold md:text-4xl text-lime-400">
              Kelvin Akaba
            </h3>
            <p>Software Engineer</p>
            <p className="text-gray-500 leading-relaxed mt-3">
              I'm a software engineer with interest in frontend development,
              open source, wordpress and javascript. Turning complex problems
              into clean, efficient solutions through code—because great
              software should feel effortless, like magic.
            </p>
          </div>
          <div className="py-2 flex items-center gap-2">
            <a href="https://github.com/eakelvin" target="_blank">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/kelvin-akaba/" target="_blank">
              <FaLinkedin size={30} />
            </a>
            {/* <a href="akabakelvin@gmail.com" target="_blank">
              <MdOutlineMail size={30} />
            </a> */}
          </div>
          <div className="mt-auto">
            <p className="">
              © {currentYear} Kelvin Akaba. All rights reserved
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
