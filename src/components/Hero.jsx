import React from 'react'
import content from '../constant/content'
import house from '../assets/house.png'

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-text ">
        <h1 className="text-5xl mb-5">
        {content.hero_text.title}
        </h1>
        <p className="text-xl mb-5">
        {content.hero_text.sub}
        </p>
        <button className="
        max-w-[18rem]
        border 
        border-s-gray-50 
        rounded-[100px] 
        p-2 
        bg-gray-50 
        text-secondary 
        px-10
        text-xl" onClick={() => document.location.href = "#panduan"}>
          Mulai Sekarang ↓
        </button>
      </div>
      <div className="hero-image">
        <img src={house} />
      </div>
    </div>
  )
}

export default Hero