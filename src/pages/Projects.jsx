import React from "react";
import ProjectSection from "../components/card";
import data from "../data";
import Navbar from "../components/navbar";

const Projects = () => {
  return (
    <div className="">
      <Navbar />

      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="pt-2 text-start md:text-center">
          <p className="text-lime-400 font-bold">Projects</p>
          <p className="text-gray-500">
            Showcasing my work, side projects, and technical experiments.
          </p>
        </div>

        <ProjectSection data={data} />
      </div>
    </div>
  );
};

export default Projects;
