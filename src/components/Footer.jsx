import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () => {

    // const forLinkedIn = () => {
    //     window.location.replace('https://www.linkedin.com/in/raajveer-khattar/')
    // }
    // const forGithub = () => {
    //     window.location.replace('https://github.com/raajveerk')
    // }
    // const forInsta = () => {
    //     window.location.replace('https://www.instagram.com/raajveerkhattar/')
    // }

  return (
    <div className='flex flex-col w-full bg-black bg-opacity-30 backdrop-blur-md py-4 text-white'>
        <p className='flex justify-between md:text-md text-sm font-semibold'>
            <a href='https://www.linkedin.com/in/raajveer-khattar/' target='_blank' rel='noopener noreferrer' className='sm:pl-20 pl-6 pr-8 mt-3 cursor-pointer'><BsLinkedin /></a>
            <span className='text-center cursor-default'>'Who's at the Terrace?' made by <a href='https://linktr.ee/raajveerkhattar' target='_blank' rel='noopener noreferrer' className='underline text-teal-400 cursor-pointer'>Raajveer Khattar</a></span>
            <a href='https://github.com/raajveerk' target='_blank' rel='noopener noreferrer' className='sm:pr-20 pr-6 pl-8 mt-3 cursor-pointer'><BsGithub /></a>
        </p>
    </div>
  )
}
