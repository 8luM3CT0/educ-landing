//front-end
import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from '../../../'
//back-end
import { useEffect, useState } from 'react'


function ShortCard({id, title, description, duration}) {  
    const [courseInfo, setCourseInfo] = useState(false)
    const [openingCard, setOpeningCard] = useState(false)
    const [closingCard, setClosingCard] = useState(false)

    useEffect(() => {
      if(courseInfo && !openingCard){
        setTimeout(() => {
          setOpeningCard(true)
        }, 15)
      } else if(!courseInfo){
        setOpeningCard(false)
      }
    }, [courseInfo])
   
    return (
      <>
    <div 
    onClick={() => setCourseInfo(true)}
    key={id}
    className='
    h-[70%]
    max-w-[310px]
    min-w-[310px]
    rounded-xl
    bg-gradient-to-b
    from-indigo-500
    to-teal-800
    cursor-pointer
    hover:shadow-lg
    hover:shadow-slate-800
    transform
    transition
    duration-200
    group
    '>
      <div className="
    h-full
    w-full
    bg-slate-200
    bg-opacity-30
    rounded-xl
    flex
    flex-col
    items-center
    justify-center
    px-3
    py-2
    group-hover:bg-opacity-40
    transform
    transition
    duration-200
    ">
      <h1 className="
      font-fira-sans
      font-normal
      text-lg
      text-slate-50
      mx-auto
      ">
        {title}
      </h1>
    </div>
  </div>
  {(courseInfo || closingCard) && (
    <div className="fixed inset-0 z-50 h-screen w-screen bg-slate-800 bg-opacity-10 flex items-center">
      <div onClick={() => setClosingCard(true)} className="h-full w-[25%]"></div>
      <div className="
      h-full
      w-[50%]
      flex
      flex-col
      items-center
      ">
        <div onClick={() => setClosingCard(true)} className="h-[20%] w-full"></div>
        <div className={`
        h-[60%]
        w-full
        bg-slate-200
        rounded
        transition-transform
        duration-300
        ease-in-out
        border-8 
        border-solid
        [border-image:linear-gradient(to_right,slateblue,dodgerblue,blue,indigo,violet)_1]
        ${openingCard && !closingCard ? 'translate-y-0' : '-translate-y-full'}
        `}
        onTransitionEnd={() => {
          if(closingCard){
            setCourseInfo(false)
            setClosingCard(false)
          }
        }}
        >
          <header className="
          bg-gradient-to-br
          from-purple-600
          to-emerald-500
          w-full
          h-[70px]
          ">
            <div className="
            h-full
            w-full
            bg-slate-800
            bg-opacity-60
            px-4
            flex
            items-center
            space-x-4
            ">
              <h3 className="
              font-ibm-mono
              font-normal
              text-lg
              text-sky-100
              ">
                Course duration:
              </h3>
              <p className="
              font-ibm-sans
              font-semibold
              text-sky-500
              text-base
              ">
                {duration}
              </p>
            </div>
          </header>
        </div>
        <div onClick={() => setClosingCard(true)} className="h-[20%] w-full"></div>
      </div>
      <div onClick={() => setClosingCard(true)} className="h-full w-[25%]"></div>

    </div>
  )}
    </>
  )
}

export default ShortCard