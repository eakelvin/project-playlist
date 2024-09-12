import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";

const Card = ({ title, description, logo, skills, website, github, status }) => (
  <div className="p-2 items-center bg-gray-50 rounded-lg shadow">
      <a href={website}>
        <img 
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
          src={logo} 
          alt={`${title} Logo`} 
        />
        <p className="mt-3 mb-4 font-semibold">
          {description}
        </p>
      </a>
    
      <div className="p-2">
        <h3 className="text-xl font-bold tracking-tight">
          <a href={website}>{title}</a>
        </h3>
        <div className='flex items-center gap-1'>
          <h3 className='text-lg'>Status:</h3>
          {status === "true" ? (
            <div className='flex items-center gap-1'>
              <FcCheckmark />
              <span className='text-lg'>Active</span>
            </div>
          ):(
            <span className='text-lg'>Inactive</span>
          )}
        </div>
        <ul className="text-sm my-2 text-gray-500">
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </ul>
        <ul className="flex space-x-4">
          <a href={github}>
              <FaGithub size={35} />
          </a>
        </ul>
      </div>
  </div>
);

const WorkSection = ({ data }) => (
    <div className="grid md:grid-cols-2 space-y-8 md:space-x-8 py-8 px-4 mx-auto">  
      {data.map((work) => (
        <Card key={work.id} {...work} />
      ))}
    </div>
);

export default WorkSection;
