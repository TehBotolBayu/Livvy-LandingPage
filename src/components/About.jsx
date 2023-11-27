import React from 'react'
import content from '../constant/content'
import img from '../assets/images.jpeg'

const About = () => {
  return (
    <>
        <div className="h-screen bg-gray-50 flex flex-col justify-center items-center p-10">
            <div className='w-full mb-10'>
                <h1 className="text-secondary font-bold text-2xl text-center md:text-3xl">Siapa Kami?</h1>
            </div>
            <div className="md:flex md:flex-row md:items-base">
                <div className="w-full mb-10">
                    <img src={img}></img>
                </div>
                <div className="w-full text-center md:text-left md:ml-10">
                    <p className="md:text-2xl">{content.about}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About