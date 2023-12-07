import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

const Contact = () => {
    const whatsappUrl = 'https://api.whatsapp.com/send/?phone=233201523804&text&type=phone_number&app_absent=0'

  return (
    <div className='p-5 mx-auto mt-16 bg-black text-white'>
        <div className='flex justify-center'><Dropdown /></div>
        <div className='p-12'>
            <h1>Want to get in touch with me?</h1>
            <p className='py-5'>Send me an email at 
                <br />
                <span className='font-extrabold text-xl'>
                    akabakelvin@gmail.com
                </span>
                <br />
                I never stop checking my email and whatsapp, even though I could be sleeping or showering.
            </p>

            <Link to={whatsappUrl}>
                <button type="button" className="text-white bg-green-500 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-400 me-2 mb-2">
                    <FaWhatsapp />
                    WHATSAPP
                </button>
            </Link>

        </div>
    </div>
  )
}

export default Contact