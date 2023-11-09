import React from 'react'
import content from '../constant/content'

const Body = () => {
  return (

    <div className="body-content bg-gray-50" id="panduan">
      {
        content.step.map((e, i) => 
          <div className="box flex flex-col items-center" key={i}>
            <div className="info-img md:max-w-[300px] md:h-[300px] max-w-[250px] mb-5"><img src={e.img} /></div>
            <div className="
            border 
            border-primary
            rounded-[100px]
            text-secondary
            text-center
            w-fit
            px-16
            ">{e.txt}</div>
          </div>
        )
      }
    </div>
  )
}

export default Body