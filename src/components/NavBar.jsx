import React from 'react'
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {

    const [Nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!Nav);
    }

    const links = [
        {
            id:1,
            link: "home"
        },
        {
            id:2,
            link: "about"
        },
        {
            id:3,
            link: "skills"
        },
        {
            id:4,
            link: "project"
        },
        {
            id:5,
            link: "contact"
        }
    ]

  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white px-3.5 fixed">
        <div>
            <h1 className="text-5xl ml-2 font-signature">Yaswanth</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id,link})=>(
                <li key={id} className="px-4 capitalize cursor-pointer font-medium text-gray-500 hover:text-cyan-300 hover:drop-shadow-2xl hover:scale-110 duration-200">
                    <Link to={link} smooth duration={1000}>{link}</Link></li>
            )
            )}
        </ul>
        <div onClick={handleNav} className="pr-4 text-gray-500 cursor-pointer z-10 hover:scale-105 hover:text-green-500 duration-200 md:hidden">
            {Nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
        </div>
        
        {Nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-black">
                {links.map(({id,link})=>(
                    <li key={id} className="cursor-pointer py-6 capitalize text-3xl text-gray-500 hover:scale-110  hover:text-cyan-300 duration-200" >
                        <Link onClick={handleNav} to={link} smooth duration={1000}>{link}</Link></li>
                ))}
            </ul>
        )}

    </div>
  )
}

export default NavBar