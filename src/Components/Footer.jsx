import React from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";



const Footer = () => {
  return (
    <div className='flex justify-between items-center px-8 mt-20'>
      <div><img src="./assets/logo.svg" alt="30 Days Coding" /></div>
      <p>2023 &copy; DSA revision</p>
      <div className='flex gap-6 px-6 pr-16'><IoLogoYoutube />
      <FaLinkedinIn />
      <BsInstagram />
      </div>
    </div>
  );
}

export default Footer;
