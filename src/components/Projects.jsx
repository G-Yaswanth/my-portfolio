import React from 'react'
import helpdesk from '../assets/projects/helpdesk.png'
import food from '../assets/projects/food-recipe.png'
import hac from '../assets/projects/helpacourse.png'

const Projects = () => {
  const prjcts =[
    {
      id:1,
      src: helpdesk,
      link: "https://mlrhelpdesk.netlify.app/",
      git: ""
    },
    {
      id:2,
      src: food,
      link: "https://eloquent-hamilton-5f3bfa.netlify.app/",
      git: "https://github.com/G-Yaswanth/Food-Recipe"
    },
    {
      id:3,
      src:hac,
      link: "https://helpacourse.com/",
      git: ""
    }
  ]

  return (
    <div name="project" className='bg-black w-full h-screen'>
        <div className='mx-auto flex flex-col justify-center w-full h-full max-w-screen-lg text-white'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 inline border-gray-500 pt-2'>Projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  sm:px-0'>
              {prjcts.map(({id,src,link, git})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt="" className='hover:scale-105 duration-500 rounded-md'/>
                  <div className='flex justify-center items-center'>
                    <a href={link} target="_blank" rel='noreferrer' className="w-1/2 px-3 py-3 hover:scale-105 duration-200 text-cyan-500 font-bold flex items-center justify-center">Demo</a>
                    <a href={git} target="_blank" rel='noreferrer' className='w-1/2 px-3 py-3 hover:scale-105 duration-200 text-cyan-500 font-bold flex items-center justify-center'>Code</a>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Projects