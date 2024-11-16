import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t'>
    <div className='container flex flex-col gap-2 p-4 mx-auto text-center lg:flex-row lg:justify-between'>
        <p>© All Rights Reserved 2024.</p>

        <div className='flex items-center justify-center gap-4 text-2xl'>
            <a href='' className='hover:text-primary-100'>
                <FaFacebookF/>
            </a>
            <a href='' className='hover:text-primary-100'>
                <FaInstagram/>
            </a>
            <a href='' className='hover:text-primary-100'>
                <CiLinkedin/>
            </a>
            <a href='' className='hover:text-primary-100'>
                <FaYoutube/>
            </a>
        </div>
    </div>
</footer>
  )
}

export default Footer
