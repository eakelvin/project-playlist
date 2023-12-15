import React from 'react';
import { FaGithub } from "react-icons/fa";

const Card = ({ title, description, logo, skills, website, github }) => (
  <div className="p-2 items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
    <a href={website}>
      <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={logo} alt={`${title} Logo`} />
      <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{description}</p>
    </a>
    
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href={website}>{title}</a>
        </h3>
        <ul className="text-sm my-2 text-gray-500 dark:text-gray-400">
            {skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
        </ul>
        {/* <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{description}</p> */}
        <ul className="flex space-x-4">
          <a href={github}>
              <FaGithub size={35} />
          </a>
        </ul>
      </div>
    
  </div>
);

const WorkSection = ({ data }) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {data.map((work) => (
          <Card key={work.id} {...work} />
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
