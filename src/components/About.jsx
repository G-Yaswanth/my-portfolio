import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black to-black text-white'>
        <div className='max-w-screen-lg  py-2 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h2>
            </div>
            <h3>An enthuiast with a dream to achieve big by integrating IT with real world problems.</h3>
            <br />
            <p className='text-xl'>I am currently working as a Technical Consultant at Infor Private Limited in Hyderabad. I work on the product M3, which helps the customers to run their day to day business smoothly with the help of our advaneced ERP system which also helps in generating insightful reports.</p>
            <p className='text-xl'>My key skills at my work includes H5 Scripting, MEC mapping, and H5 SDK.</p>
            <p className='text-xl'>I have been working at Infor since July 2023.</p>
        </div>
    </div>
  )
}

export default About
