import React from 'react';
import Typed from 'react-typed';
import { HiArrowNarrowDown } from "react-icons/hi";


export const Hero = () => {
  return (
    <div className='text-white cursor-default'>
        <div className='max-w-[800px] w-full text-center mx-auto flex flex-col md:mt-[150px] mt-[175px] font-bold sm:text-6xl text-5xl'>
            <Typed
                strings={['Events', 'Schedules', 'Updates', 'Stock']}
                typeSpeed={120}
                backSpeed={140}
                loop
            />
        </div>
        <div className='bg-white bg-opacity-20 rounded-3xl backdrop-blur-md max-w-[800px] p-10 mt-12 lg:mx-auto sm:mx-[100px] mx-[50px] text-center flex flex-col'>
            <h2 className='md:text-xl text-md font-medium font-sansserif tracking-wide'>
                The one-stop organisaton app for KGV's often imitated, but never duplicated terrace space!
            </h2>
        </div>
        <div className='w-full flex flex-col max-w-[800px] mx-auto items-center text-2xl text-center my-[125px] animate-bounce'>
            <h3 className='text-white'><HiArrowNarrowDown /></h3>
        </div>
    </div>
  )
}
