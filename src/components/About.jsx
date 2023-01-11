import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black to-black text-white'>
        <div className='max-w-screen-lg  py-2 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h2>
            </div>
            <p className='text-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt ab nulla praesentium quis repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nihil ab sint ipsam, nesciunt pariatur.</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, asperiores. Eius nobis rerum repellat eos. Suscipit aut qui corrupti consectetur.</p>
        </div>
    </div>
  )
}

export default About
