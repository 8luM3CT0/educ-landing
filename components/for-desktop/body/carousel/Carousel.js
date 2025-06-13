//front-end
import React from 'react'
//back-end
import { useRef, useState } from 'react'

function Carousel({data}) {
    const [current, setCurrent] = useState(0)

    const prevIndex = (current - 1 + data.length) % data.length
    const nextIndex = (current + 1) % data.length

  return (
    <div className="relative w-full h-[380px] flex justify-center items-center overflow-hidden">
      {data.map((data, id) => {
        let scale = 0.6
        let zId = 0
        let translX = 0

        if(id === current){
          scale = 0.9
          zId = 10
          translX = 0
        } else if(id === prevIndex){
          translX = "-60%"
          zId = 5
        } else if(id === nextIndex){
          translX = "60%"
          zId = 5
        } else {
          return null
        }
        return (
          <div
            key={data.id}
            className="absolute h-[380px] w-[400px] transition-all duration-500 ease-in-out rounded-xl shadow-lg bg-white"
            style={{
              transform: `translateX(${translX}) scale(${scale})`,
              zId,
              width: "90%",
              height: "90%",
            }}
          >
            <div className="p-4">
              <h2 className="text-xl font-bold">{data.title}</h2>
            </div>
          </div>
        )
      })}
      <button
      onClick={() => setCurrent(prevIndex)}
      className="">
        {`<`}
      </button>      
      <button
      onClick={() => setCurrent(nextIndex)}
      className="">
        {`>`}
      </button>      
    </div>
  )
}

export default Carousel
