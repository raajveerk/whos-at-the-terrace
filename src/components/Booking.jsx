import React, { useState } from 'react'
import { CiBeerMugFull } from "react-icons/ci"
import { GiPartyPopper } from "react-icons/gi"
// import { CSSTransition } from 'react-transition-group'
import "./Booking.scss";
// import { DatePicker } from "react-date-picker/dist/DatePicker";
// import { Moment } from "moment";

export const Booking = () => {

    const [visible, setVisible] = useState(false);

    // let datePickStyleUno = {
    //     display: visible ? 'flex' : 'none',
    //     opacity: '0'
    // }

    // let datePickStyleDos = {
    //     display: visible ? 'flex' : 'none',
    //     opacity: '1',
    //     transition: 'opacity 1.2s'
    // }

    // let bookBtnStyleUno = {
    //     display: visible ? 'flex' : 'none',
    //     opacity: '0'
    // }

    // let bookBtnStyleDos = {
    //     display: visible ? 'flex' : 'none',
    //     opacity: '1',
    //     transition: 'opacity 1.2s'
    // }

    // const [date, setDate] = useState();

  return (
    <div className='text-white my-[175px]'>
        <div className='sm:flex sm:flex-col hidden items-center text-center sm:mx-auto mx-[30px] mb-[40px] sm:text-lg text-md font-semibold cursor-default'>
            <p>Yoooo! Looks like the terrace is not occupied right now.</p>
            <p className='flex'>Press the button below to schedule a booking! <span className='ml-1 md:pt-1 text-xl'><CiBeerMugFull /></span></p>
        </div>
        <div className='flex flex-col sm:hidden items-center text-center sm:mx-auto mx-[30px] mb-[40px] sm:text-lg text-md font-semibold cursor-default leading-relaxed'>
            <p>Yoooo! Looks like the terrace is not occupied right now. Press the button</p>
            <p className='flex'>below to schedule a booking! <span className='ml-1 pt-1 text-xl'><CiBeerMugFull /></span></p>
        </div>

        {visible &&
            <div className='sm:mx-auto mx-[50px] max-w-[800px] sm:flex flex-col justify-center sm:w-full mt-[60px] mb-[0px] transition-all duration-300 items-center sm:space-x-0 sm:space-y-8 space-y-6 dateTimeSec'>
            <div className='sm:block'>
                <h3 className='sm:text-xl text-lg font-bold text-left mb-4 underline cursor-default'>FROM</h3>
                <div className='justify-center sm:w-full flex sm:mx-auto space-x-6'>
                    <input type="date" className='text-black font-medium text-lg rounded-lg p-2 transition duration-200 ease-in-out fromDate' />
                    <input type="time" className='text-black font-medium text-lg rounded-lg p-2 transition duration-200 ease-in-out fromTime' />
                </div>
            </div>
            <div className='sm:block'>
                <h3 className='sm:text-xl text-lg font-bold text-left mb-4 underline cursor-default'>TO</h3>
                <div className='justify-center sm:w-full flex sm:mx-auto space-x-6'>
                    <input type="date" className='text-black font-medium text-lg rounded-lg p-2 transition duration-200 ease-in-out toDate' />
                    <input type="time" className='text-black font-medium text-lg rounded-lg p-2 transition duration-200 ease-in-out toTime' />
                </div>
            </div>
            </div>
        }

        {visible && 
            <div className='text-black mx-auto max-w-[500px] flex justify-center w-full mt-[50px] mb-[100px] items-center bookBtn'>
            <button className='bg-teal-400 px-8 py-4 text-center rounded-2xl flex md:text-2xl text-xl font-bold hover:bg-white transition-all duration-300 hover:scale-110 active:bg-white focus:ring-4 focus:ring-teal-400'>
                BOOK!<GiPartyPopper className='ml-1 mt-1 md:text-2xl text-xl'/>
            </button>
            </div>
        }

        {/* {!visible &&
            <div style={{display: visible ? 'flex' : 'none'}} className='sm:mx-auto mx-[50px] max-w-[800px] sm:flex flex-col justify-center sm:w-full mt-[60px] mb-[0px] transition-all duration-300 items-center sm:space-x-0 sm:space-y-8 space-y-6 notDateTimeSec'>
            <div className='sm:block'>
                <h3 className='sm:text-xl text-lg font-bold text-left mb-4 underline cursor-default'>FROM</h3>
                <div className='justify-center sm:w-full flex sm:mx-auto space-x-6'>
                    <input type="date" className='text-black font-medium text-lg rounded-lg p-2 transition duration-200 ease-in-out' />
                    <input type="time" className='text-black font-medium text-lg rounded-lg p-2 transition duration-200 ease-in-out' />
                </div>
            </div>
            <div className='sm:block'>
                <h3 className='sm:text-xl text-lg font-bold text-left mb-4 underline cursor-default'>TO</h3>
                <div className='justify-center sm:w-full flex sm:mx-auto space-x-6'>
                    <input type="date" className='text-black font-medium text-lg rounded-lg p-2 transition duration-200 ease-in-out' />
                    <input type="time" className='text-black font-medium text-lg rounded-lg p-2 transition duration-200 ease-in-out' />
                </div>
            </div>
            </div>
        }

        {!visible &&
            <div className='text-black mx-auto max-w-[500px] flex justify-center w-full mt-[50px] mb-[100px] items-center notBookBtn' style={{display: visible ? 'flex' : 'none'}}>
            <button className='bg-teal-400 px-8 py-4 text-center rounded-2xl flex md:text-2xl text-xl font-bold hover:bg-white transition-all duration-300 hover:scale-110 active:bg-white focus:ring-4 focus:ring-teal-400'>
                BOOK!<GiPartyPopper className='ml-1 mt-1 md:text-2xl text-xl'/>
            </button>
            </div>
        } */}

            <button onClick={() => setVisible(!visible)} className='bg-white backdrop-blur-md bg-opacity-20 flex flex-col px-[50px] max-w-[300px] rounded-2xl items-center transition-all duration-300 ease-in-out shadow-md text-center mx-auto py-6 md:hover:scale-110 hover:bg-opacity-50 active:bg-opacity-50 focus:ring focus:ring-teal-400'>
                <h3 className='text-center md:text-4xl text-2xl font-bold tracking-wide transition-all duration-300 ease-in-out schedBtn'>{visible ? 'CANCEL' : 'SCHEDULE'}</h3>
            </button>
    </div>
  )
}
