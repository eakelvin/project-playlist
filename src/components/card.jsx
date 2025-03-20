import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = ({
  title,
  description,
  logo,
  skills,
  website,
  github,
  status,
}) => (
  <div class="max-w-full mx-auto cursor-pointer group relative flex flex-col my-5 shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
    <div class="relative h-56 m-2.5 overflow-hidden rounded-md">
      <img
        class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
        src={logo}
        alt="Project Image"
      />
    </div>
    <div class="px-4">
      <h6 class="mb-2 text-xl font-semibold">{title}</h6>
      <p class="leading-normal font-light">{description}</p>
    </div>
    <div class="flex items-center gap-2 px-4 pb-4 pt-0 mt-2">
      <a href={website}>
        <button
          class="bg-lime-400 text-black rounded-md py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none"
          type="button"
        >
          Preview
        </button>
      </a>

      {github && (
        <a href={github} target="_blank">
          <FaGithub size={30} />
        </a>
      )}
    </div>
  </div>
);

const ProjectSection = ({ data }) => (
  <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    {data.map((work) => (
      <Card key={work.id} {...work} />
    ))}
  </div>
);

export default ProjectSection;
