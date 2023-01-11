import React from 'react'
import vector from '../assets/vector.png';
import {TiArrowRightThick} from 'react-icons/ti'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col  justify-center items-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl font-bold text-white hover:text-cyan-400 duration-1000'>Hey, This is Yaswanth Gajula</h1>
                <p className='text-gray-500 py-4 max-w-md'>Currently there are more than 197,046,670 active websites in the World Wide Web. <br />Spending your time for visiting my portfolio webpage adds value to me and my skills. <br />Click the button below to get started. </p>
                <div>
                    <Link to={"about"} smooth duration={1000} className='group flex text-white font-bold w-fit items-center rounded-md px-6 py-3 my-2  bg-gradient-to-r to-blue-500 from-cyan-500 cursor-pointer'>
                        About Me
                        <span className='ml-2 py-1 group-hover:rotate-90 duration-500'><TiArrowRightThick size={18} /></span>
                    </Link>
                </div>
            </div>
            <div >
                {
                    <img src={vector} alt="My Profile" className='hover:scale-105 duration-300 ml-18 md:h-full mx-auto w-2/3 md:w-2/3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500' />
                }
            </div>
        </div>
    </div>
  )
}

export default Home