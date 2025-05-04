//front-end
import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from '../../../'
//back-end
import { useEffect, useState } from 'react'


function ShortCard({id, title, description, duration, name, experience_years, background}) {  
    const [courseInfo, setCourseInfo] = useState(false)
    const [openingCard, setOpeningCard] = useState(false)
    const [closingCard, setClosingCard] = useState(false)
    const [openEnrollmentCard, setOpenEnrollmentCard] = useState(false)
    const [enrollmentCard, setEnrollmentCard] = useState(false)
    const [closeEnrollmentCard, setCloseEnrollmentCard] = useState(false)

    useEffect(() => {
      if(courseInfo && !openingCard){
        setTimeout(() => {
          setOpeningCard(true)
        }, 15)
      } else if(!courseInfo){
        setOpeningCard(false)
      }
    }, [courseInfo])
    
    useEffect(() => {
      if(enrollmentCard && !openEnrollmentCard){
        setTimeout(() => {
          setOpenEnrollmentCard(true)
        }, 15)
      } else if (!enrollmentCard){
        setOpenEnrollmentCard(false)
      }
    }, [enrollmentCard])

  const openingEnrollmentCard = () => {
    {!enrollmentCard && setEnrollmentCard(true)}
    {courseInfo && setClosingCard(true)}
  }

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
        rounded-xl
        transition-transform
        duration-300
        ease-in-out
        border-4
        border-slate-800 
        border-solid
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
          bg-slate-800
          w-full
          h-[8%]
          ">
            <div className="
            h-full
            w-full
            bg-sky-800
            bg-opacity-20
            px-4
            flex
            items-center
            space-x-4
            ">
              <h3 className="
              font-robot-condensed
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
          <div className="
          h-[80%]
          w-full
          bg-slate-700
          ">
            <div className="
            h-full
            w-full
            bg-slate-800
            bg-opacity-30
            flex
            flex-col
            items-start
            px-3
            ">
              <h3 className="
              font-monrserr
              font-normal
              text-lg
              text-emerald-100
              ">
                Subject name:
              </h3>
              <h2 className="
              font-montserr
              font-bold
              text-emerald-300
              text-3xl
              mx-auto
              hover:-skew-x-6
              hover:text-emerald-500
              transform
              transition-all
              duration-500
              ease-in-out
              ">
                {title}
              </h2>
              <span className="
              h-[25%]
              w-[80%]
              m-auto
            bg-gradient-to-bl
            from-emerald-500
            to-purple-600
              flex
              flex-col
              items-center
              ">
              <span className="
              h-full
              w-full
              p-3
              overflow-y-scroll
              scrollbar-hide
              bg-slate-800
              bg-opacity-20
              ">
                                <p className="
                font-montserr
                font-normal
                text-base
                mx-auto
                text-purple-100
                ">
                  {description}
                </p>
              </span>
              </span>
              <span className="w-full flex items-center justify-evenly"></span>
            </div>
          </div>
          <footer className="
          h-[12%]
          w-full
          bg-slate-800
          ">
            <div className="
            h-full
            w-full
            bg-sky-800
            bg-opacity-20            
            px-3
            flex
            items-center
            ">
              <span className="w-[50%]"></span>
              <button 
              onClick={openingEnrollmentCard}
              className="
              w-[45%]
              h-[80%]
              font-space-mono
              font-bold
              border-0
              rounded
              text-lg
              outline-none
              focus:outline-none
              bg-slate-900
              text-slate-100
              hover:bg-purple-700
              hover:text-slate-400
              hover:shadow-lg
              hover:shadow-emerald-500
              hover:-skew-x-3
              transform
              transition-all
              duration-500
              ease-in-out
              ">
                Enroll
              </button>
            </div>
          </footer>
        </div>
        <div onClick={() => setClosingCard(true)} className="h-[20%] w-full"></div>
      </div>
      <div onClick={() => setClosingCard(true)} className="h-full w-[25%]"></div>
    </div>
  )}

    {(enrollmentCard || closeEnrollmentCard) && (
      <div className="fixed inset-0 z-50 h-screen w-screen bg-opacity-10 bg-slate-800 flex items-center">
        <div 
        onClick={() => setCloseEnrollmentCard(true)}
        className="h-full w-[25%]"></div>
        <div className="h-full w-[50%] flex flex-col items-center">
          <div onClick={() => setCloseEnrollmentCard(true)} className="h-[20%] w-full"></div>
          <div className={`
          h-[60%]
          w-full
          bg-slate-200
          rounded-xl
          transition-transform
          duration-300
          ease-in-out
          border-4
          border-slate-800
          ${openEnrollmentCard && !closeEnrollmentCard ? 'translate-x-0' : '-translate-x-full'}
          `}
          onTransitionEnd={() => {
            if(closeEnrollmentCard){
              setEnrollmentCard(false)
              setCloseEnrollmentCard(false)
            }
          }}
          >
            <header className="h-[8%] w-full bg-slate-800">
              <div className="bg-sky-800 bg-opacity-20 w-full h-full px-4  flex items-center justify-between">
              </div>
            </header>
            <div className="h-[80%] w-full bg-slate-800 hover:bg-slate-700 transform transition-colors duration-300 ease-in-out">
              <div className="h-full w-full bg-opacity-30 bg-sky-900 flex flex-col items-center justify-center space-y-2">
                <h1 className="
                font-mont-sub
                font-bold
                text-sky-300
                text-3xl
                animate-pulse
                ">
                  Congratulations!
                </h1>
                <h1 className="
                font-montserr
                font-bold
                text-sky-600
                text-2xl
                ">
                  You are officially enrolled to: {title}
                </h1>
              </div>
            </div>
            <footer className="h-[12%] w-full bg-slate-800">
              
            </footer>
          </div>
          <div onClick={() => setCloseEnrollmentCard(true)} className="h-[20%] w-full"></div>
        </div>
        <div 
        onClick={() => setCloseEnrollmentCard(true)}
        className="h-full w-[25%]"></div>
      </div>
    )}
    </>
  )
}

export default ShortCard