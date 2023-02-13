import React, { useState } from 'react'
import { CiBeerMugFull } from "react-icons/ci"
import { GiPartyPopper } from "react-icons/gi"
// import { DatePicker } from "react-date-picker/dist/DatePicker";
// import { Moment } from "moment";

export const Booking = () => {

    const [visible, setVisible] = React.useState(false);

    const [date, setDate] = useState();

  return (
    <div className='text-white my-[175px]'>
        <div className='sm:flex sm:flex-col hidden items-center text-center sm:mx-auto mx-[30px] mb-[40px] sm:text-lg text-md font-semibold cursor-default'>
            <p>Yoooo! Looks like the terrace is not occupied right now.</p>
            <p className='flex'>Press the button below to schedule a booking! <span className='ml-1 pt-1 text-xl'><CiBeerMugFull /></span></p>
        </div>
        <div className='flex flex-col sm:hidden items-center text-center sm:mx-auto mx-[30px] mb-[40px] sm:text-lg text-md font-semibold cursor-default leading-relaxed'>
            <p>Yoooo! Looks like the terrace is not occupied right now. Press the button</p>
            <p className='flex'>below to schedule a booking! <span className='ml-1 pt-1 text-xl'><CiBeerMugFull /></span></p>
        </div>
        <div className='sm:mx-auto mx-[50px] max-w-[800px] flex justify-center sm:w-full mt-[60px] mb-[0px] transition-all duration-300 items-center sm:space-x-12 space-x-6' onChange={e=>setDate(e.target.value)} style={{display: visible ? 'flex' : 'none'}}>
            <input type="date" className='text-black md:text-xl text-lg rounded-lg sm:p-4 p-2 transition duration-200 ease-in-out' />
            <input type="time" className='text-black md:text-xl text-lg rounded-lg sm:p-4 p-2 transition duration-200 ease-in-out' />
        </div>

        <div className='text-black mx-auto max-w-[500px] flex justify-center w-full mt-[40px] mb-[100px] transition-all duration-300 items-center' style={{display: visible ? 'flex': 'none'}}>
            <button className='bg-teal-400 sm:p-6 px-8 py-4 text-center rounded-lg flex text-xl font-bold'>
                BOOK!<GiPartyPopper className='ml-1 mt-1 text-xl'/>
            </button>
        </div>

        <button onClick={() => setVisible(!visible)} className='bg-white backdrop-blur-md bg-opacity-20 flex flex-col px-[50px] max-w-[300px] rounded-2xl items-center transition-color duration-300 ease-in-out shadow-md text-center mx-auto py-6 hover:bg-opacity-50 active:bg-opacity-50 focus:bg-opacity-50 focus:ring focus:ring-teal-400'>
            <h3 className='text-center md:text-4xl text-2xl font-bold tracking-wide transition-transform duration-300 ease-in-out'>{visible ? 'CANCEL' : 'SCHEDULE'}</h3>
        </button>
    </div>
  )
}
