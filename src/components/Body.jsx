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
          content.step.map((e, i) => {
            let row = "flex-row";
            if (i % 2 == 0) row = "flex-row-reverse"; 
            return(
            <div className={`flex flex-col items-center mb-10 md:${row} px-10 py-10 md:justify-center`} key={i}>
              <div className="info-img w-1/2 w-[250px] md:w-[50vw] mb-5"><img className='md:mx-auto' src={e.img} /></div>
              <div className='w-full md:w-1/2'>
                <div className="text-center my-10 md:text-justify md:mx-10 md:text-xl">{e.detail}</div>
                <div className="
                border 
                border-primary
                rounded-[100px]
                text-secondary
                w-fit
                px-16
                mx-auto
                text-center
                ">{e.txt}</div>
              </div>
            </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default Body