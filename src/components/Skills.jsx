import React from 'react'

import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/reactImg.png'
import tailwind from '../assets/tailwind.png'
import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
import firebase from '../assets/firebase.png'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'
import python from '../assets/python.png'


const Skills = () => {
    const skills=[
        {
            id:1,
            title:"HTML",
            src:html,
            style:"shadow-orange-500"
        },
        {
            id:2,
            title:"CSS",
            src:css,
            style:"shadow-blue-500"
        },       
        {
            id:3,
            title:"JavaScript",
            src:javascript,
            style:"shadow-yellow-500"
        }, 
        {
            id:4,
            title:"React",
            src:reactImg,
            style:"shadow-cyan-500"
        },
        {
            id:5,
            title:"Python",
            src:python,
            style:"shadow-green-600"
        },
        {
            id:6,
            title:"C++",
            src:cpp,
            style:"shadow-blue-700"
        },
        {
            id:7,
            title:"C",
            src:c,
            style:"shadow-blue-400"
        },
        {
            id:8,
            title:"Java",
            src:java,
            style:"shadow-blue-900"
        },
        {
            id:9,
            title:"Github",
            src:github,
            style:"shadow-gray-500"
        },
        {
            id:10,
            title:"Tailwind",
            src:tailwind,
            style:"shadow-sky-400"
        },
        {
            id:11,
            title:"MySQL",
            src:mysql,
            style:"shadow-emerald-600"
        },
        {
            id:12,
            title:"Firebase",
            src:firebase,
            style:"shadow-yellow-400"
        }
    ]
  return (
    <div name="skills" className='bg-gradient-to-b from-black to-black w-full md:h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-4'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline pt-2'>
                    Skills
                </p>
                <p className='py-4 text-lg'>The skills I have acquired</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {skills.map(({id,title,src,style})=>(
                    <div key={id} className={`py-3 shadow-md hover:scale-105 duration-500 rounded-xl ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='font-bold mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills