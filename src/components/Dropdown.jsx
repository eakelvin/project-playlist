import React, { useState } from 'react'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        <div className="relative inline-block text-left mb-5">
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                EA
                <svg
                className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                />
                </svg>
            </button>

            {isOpen && (
                <div className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <a href='https://ea-linktree.netlify.app/' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Link Tree
                        </a>
                    </li>
                    <li>
                        <a href='#' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Contact ME?
                        </a>
                    </li>
                    {/* <li>
                        <a href='#' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Home
                        </a>
                    </li> */}
                    
                </ul>
                </div>
            )}
            </div>
    </div>
  )
}

export default Dropdown