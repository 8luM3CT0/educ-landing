//front-end
//back-end

import React from 'react'

function ReviewCard({
    name,
    image,
    review,
    date
}) {
  return (
    <div className='
    reviewCardDiv
    '>
        <div className="
        bg-slate-800
        bg-opacity-40
        h-full
        w-full
        flex
        flex-col
        items-center
        justify-evenly
        ">
    {/**image && name at the top */}
    <span className="
    border-slate-900
    w-full
    justify-evenly
    px-3
    py-2
    flex
    items-center
    ">
        <img 
        src={image} 
        alt="" 
        className="
        w-9
        h-9
        rounded-3xl
        border
        border-violet-300
        " />
    <p className="
    text-xl
    text-slate-50
    font-merriweather
    font-bold
    ">
        {name}
    </p>
    </span>
    {/**review at the middle */}
    <div className="
    h-[60%]
    w-full
    m-auto
    px-4
    overflow-y-scroll
    scrollbar-hide
    border-y
    border-slate-800
    bg-slate-900
    bg-opacity-40
    ">
        <p className="
        text-base 
        font-light 
        font-playfair-disp
        text-sky-100
        ">
            {review}
        </p>
    </div>
    {/**date made */}
    <span className="
    border-slate-900
    w-full
    px-3
    py-2
    ">
        <p className="
        text-sm
        text-slate-50
        font-merriweather
        font-light
        px-4
        ">
            {date}
        </p>
    </span>
    </div>
    </div>
  )
}

export default ReviewCard