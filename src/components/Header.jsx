import React from 'react'
import { FaCodeCompare } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Dropdown from './Dropdown';
import { IoDownloadOutline } from "react-icons/io5";
import SearchInput from './Search';
import WorkSection from './Work';
import data from '../data';
import me from '../assets/kelvin.jpg'
import Type from './type';

const Header = ({ data }) => {
    const itemCount = data.length;

    return (
        <>
            <div className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800'>
                <div className='pt-5 px-10'>
                    <Dropdown />
                </div>

                <div className="p-10 sm:flex sm:space-x-6">
                    <div className="flex-shrink-0 max-w-xs mb-6 h-62 sm:h-44 sm:w-44 sm:mb-0">
                        <img src={me} alt="" className="shadow-lg object-cover object-center w-full h-full dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col py-4">
                            <p className='text-sm'>PUBLIC PORTFOLIO</p>
                            < Type />
                            {/* <h2 className="mb-4 text-3xl sm:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">THIS IS KELVIN AKABA</h2> */}
                            <div className='mt-2 flex'>
                                <FaCodeCompare size={25} />
                                <p className="font-extrabold text-blue-700 text-sm md:text-xl">THE ESSENTIAL PROJECTS, ALL IN ONE PORTFOLFIO</p>
                                {/* <p className='font-extrabold'>FULL-STACK DEVELOPER</p> */}
                            </div>
                            <div className='flex mt-2'>
                                <GoDotFill size={25} />
                                <p className='font-extrabold text-slate-700 text-lg'>{itemCount} Projects</p>
                            </div>
                    </div>
                </div>
            </div>

            {/* <div className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'> */}
            <div className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'>
                <div className='flex justify-between p-8'>
                    <div className='mt-2'>
                        <div className="group relative w-max">
                            <a href="https://flowcv.com/resume/r8p9dbnsrn">
                                <button>
                                    <IoDownloadOutline size={40} />
                                </button>
                            </a>
                            <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 font-extrabold text-xl">
                            Click to view my RESUME
                            </span>
                        </div>
                    </div>
                    
                    <div>
                        <SearchInput />
                    </div>

                </div>
            </div>

            <div className=''>
                <WorkSection data={data} />
            </div>

        </>
    )
}

export default Header