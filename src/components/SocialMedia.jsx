import React from 'react'
import { FaGithub, FaLinkedin,FaTwitter } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';



const socialMedia = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='bg-gray-500 flex justify-between items-centre w-40 h-14 px-4 py-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-tr-md bg-opacity-30 hover:bg-opacity-100'>
                <a href="https://www.linkedin.com/in/yaswanth-gajula/" rel="noreferrer" target={"_blank"} className='flex justify-between items-centre w-full text-white my-2 '>
                    <>
                        LinkedIn<FaLinkedin size={30} className="ml-2 "/>
                    </>
                </a>
            </li>
            <li className='bg-gray-500 flex justify-between items-centre w-40 h-14 px-4 py-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-opacity-30 hover:bg-opacity-100'>
                <a href="https://github.com/G-Yaswanth" rel="noreferrer" target={"_blank"} className='flex justify-between items-centre w-full text-white my-2'>
                    <>
                        Github<FaGithub size={30} className="ml-2"/>
                    </>
                </a>
            </li>
            <li className='bg-gray-500 flex justify-between items-centre w-40 h-14 px-4 py-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-opacity-30 hover:bg-opacity-100'>
                <a href="https://twitter.com" target={"_blank"} rel="noreferrer" className='flex justify-between items-centre w-full text-white my-2'>
                    <>
                        Twitter<FaTwitter size={30} className="ml-2"/>
                    </>
                </a>
            </li>
            <li className='bg-gray-500 flex justify-between items-centre w-40 h-14 px-4 py-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-br-md bg-opacity-30 hover:bg-opacity-100'>
                <a href="/Resume.pdf" target={"_blank"} rel="noreferrer" download='Resume' className='flex justify-between items-centre w-full text-white my-2'>
                    <>
                        Resume<BsFillPersonLinesFill size={30} className="ml-2"/>
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default socialMedia