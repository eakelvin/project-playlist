import React from 'react'
import Dropdown from '../components/Dropdown'

const Skill = () => {
    return (
        <div>
            <div className="max-w-xl mx-auto p-4 mt-16">
                <Dropdown />

                <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">Skills</h4>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">HTML</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#FF6464" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">CSS</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="blue" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">JAVASCRIPT</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="yellow" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">REACT</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="blue" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">REDUX</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="purple" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">FIREBASE</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="yellow" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">BOOTSTRAP</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="purple" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">TAILWIND</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="lightskyblue" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">NODE JS</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="green" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">EXPRESS </span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="black" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">MONGO DB</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="green" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>
                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">MONGOOSE</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="green" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>
                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">REST APIs</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="blue" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>
                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">ALGORITHMS AND DATA STRUCTURE</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="blue" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>
                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">REACT NATIVE</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="purple" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>
                <div className="mb-7">
                    <div className="flex justify-between py-1">
                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">GIT / GITHUB</span>
                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">100%</span>
                    </div>
                    <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="black" strokeWidth="1" fillOpacity="0" style={{ strokeDasharray: '99px, 100px', strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}></path>
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default Skill

