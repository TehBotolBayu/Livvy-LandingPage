import React from 'react'
import content from '../constant/content'

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 justify-center">
      <div className=" text-secondary text-2xl font-semibold text-center pt-10">
        Bagaimana Caranya?
      </div>
      <div className="body-content" id="panduan">
        {
          content.step.map((e, i) => 
            <div className="box flex flex-col items-center mb-10" key={i}>
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
    </div>
  )
}

export default Body