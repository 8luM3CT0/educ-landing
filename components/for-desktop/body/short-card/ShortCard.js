//front-end
import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, StarIcon} from '../../../'
//back-end
import { useEffect, useState } from 'react'

function ShortCard({data, lecData}) {  
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
    key={data?.id}
    className='
    h-[80%]
    max-w-[420px]
    min-w-[420px]
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
    bg-slate-900
    bg-opacity-30
    rounded-xl
    flex
    flex-col
    items-center
    group-hover:bg-opacity-40
    transform
    transition
    duration-200
    ">
      <header className="w-full flex items-center justify-between px-3 h-[10%] border-b border-slate-500">
        <h5 className="font-share-tech font-bold text-sky-100 text-lg">
          {data?.duration}
        </h5>
      </header>
      <div className="w-full flex flex-col space-y-3 items-start px-3 py-1 h-[98%]">
        <h1 className="font-playfair-disp group-hover:shadow-xl shadow-sky-100 font-bold text-xl text-sky-300 transform transition-all duration-300 ease-in-out">
          {data?.title}
        </h1>  
        <h5 className="font-merriweather font-bold text-lg text-sky-100">
          {data?.name}
        </h5>
      </div>
    </div>
  </div>
  {(courseInfo || closingCard) && (
    <div className="fixed inset-0 z-50 h-screen w-screen bg-slate-800 bg-opacity-40 flex items-center">
      <div onClick={() => setClosingCard(true)} className="h-full w-[8%]"></div>
      <div className="
      h-full
      w-[84%]
      flex
      flex-col
      items-center
      ">
        <div onClick={() => setClosingCard(true)} className="h-[2%] w-full"></div>
        <div className={`
        h-[96%]
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
          bg-sky-900
          w-full
          h-[8%]
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
              font-merriweather
              font-normal
              text-lg
              text-sky-100
              ">
                Course duration:
              </h3>
              <p className="
              font-playfair-disp
              font-semibold
              text-sky-500
              text-base
              ">
                {data.duration}
              </p>
            </div>
          </header>
          <div className="
          h-[84%]
          w-full
          bg-slate-700
          flex
          flex-col
          items-start
          space-y-3
          px-4
          py-3
          overflow-y-scroll
          scrollbar-thin
          scrollbar-track-slate-700
          scrollbar-thumb-sky-400
          ">
            <h1 className="font-playfair-disp font-bold text-slate-100 text-2xl">
              {data.title}
            </h1>
            <span className="w-full min-h-[100px] max-h-[240px] px-4 py-3 bg-slate-800 bg-opacity-30 rounded overflow-y-scroll scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600 font-playfair-disp font-normal text-base text-slate-400">
              {data.description}
            </span>
              {data.prerequisites.length > 0 && (
                <div className="flex flex-col items-center w-full">
              <header className="w-full flex items-center">
                <h4 className="font-playfair-disp font-semibold text-sky-400 text-lg">
                  Prerequisites
                </h4>
              </header>
              <div className="w-full flex items-center bg-slate-900 bg-opacity-30 py-3 px-4 overflow-x-scroll scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-sky-500 space-x-8 justify-between">
              {data.prerequisites.map(subdata => (
                  <span className="min-w-fit max-w-[400px] px-3 bg-sky-700 rounded-lg bg-opacity-30">
                    <h3 className="font-playfair-disp font-bold text-base text-sky-200">
                    {subdata}
                  </h3>
                  </span>
              ))}
              </div>
            </div>
              )}
            <div className="flex flex-col items-center w-full">
              <header className="w-full flex items-center">
                <h4 className="font-playfair-disp font-semibold text-emerald-400 text-lg">
                  Course materials
                </h4>
              </header>
              <div className="w-full flex items-center bg-slate-900 bg-opacity-30 py-3 px-4 overflow-x-scroll scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-emerald-200 space-x-8 justify-between">
              {data.course_materials.map(subdata => (
                  <span className="min-w-fit max-w-[400px] px-3 bg-emerald-700 rounded-lg bg-opacity-30">
                    <h3 className="font-playfair-disp font-bold text-base text-emerald-200">
                    {subdata}
                  </h3>
                  </span>
              ))}
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <header className="w-full flex items-center">
                <h4 className="font-playfair-disp font-semibold text-purple-400 text-lg">
                  Learning outcomes
                </h4>
              </header>
              <div className="w-full max-h-[150px] bg-slate-900 bg-opacity-30 px-4 py-3 flex flex-col items-start overflow-y-scroll scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-sky-500 space-y-4 justify-between">
              {data.learning_outcomes.map(subdata => (
                  <span className="min-w-fit max-w-[400px] px-3 bg-purple-700 rounded-lg bg-opacity-30">
                    <h3 className="font-playfair-disp font-bold text-base text-purple-200">
                   - {subdata}
                  </h3>
                  </span>
              ))}
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <header className="w-full flex items-center">
                <h4 className="font-playfair-disp font-semibold text-indigo-400 text-lg">
                  Testimonials
                </h4>
              </header>
              <div className="w-full min-h-[150px] max-h-[200px] bg-slate-900 bg-opacity-30 px-4 py-3 flex flex-col items-start overflow-y-scroll scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-sky-500 space-y-4 justify-between">
              {data.testimonials.map(subdata => (
                  <span className="min-w-[90%] max-w-full px-3 bg-indigo-700 rounded-lg bg-opacity-30 flex flex-col items-start">
                    <span className="flex items-center w-full px-3 py-2 justify-between">
                      <h3 className="font-playfair-disp font-bold text-lg text-indigo-200">
                   {subdata.student_name}
                  </h3>
                <span className="flex items-center space-x-2">
                 <h3 className="font-playfair-disp font-bold text-lg text-amber-200">
                   <StarIcon/>
                  </h3>
                <h3 className="font-playfair-disp font-bold text-lg text-indigo-200">
                   {subdata.rating}
                  </h3>
                </span>
                    </span>
                   <h3 className="font-playfair-disp font-bold text-sm text-indigo-50">
                   {subdata.comment}
                  </h3>
                  </span>
              ))}
              </div>
            </div>
          </div>
          <footer className="
          h-[8%]
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
              font-merriweather
              font-bold
              border-0
              rounded
              text-lg
              outline-none
              focus:outline-none
              bg-slate-900
              text-slate-100
              hover:bg-slate-800
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
        <div onClick={() => setClosingCard(true)} className="h-[2%] w-full"></div>
      </div>
      <div onClick={() => setClosingCard(true)} className="h-full w-[8%]"></div>
    </div>
  )}

    {(enrollmentCard || closeEnrollmentCard) && (
      <div className="fixed inset-0 z-50 h-screen w-screen bg-opacity-10 bg-slate-800 flex items-center">
        <div 
        onClick={() => setCloseEnrollmentCard(true)}
        className="h-full w-[15%]"></div>
        <div className="h-full w-[70%] flex flex-col items-center">
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
                <h1 className="
                font-merriweather
                font-bold
                text-sky-100
                text-xl
                ">
                  You are officially enrolled to: {data?.title}
                </h1>
              </div>
            </header>
            <div className="h-[80%] w-full bg-slate-800 hover:bg-slate-700 transform transition-colors duration-300 ease-in-out">
              <div className="h-full w-full bg-opacity-30 bg-sky-900 flex flex-col items-start space-y-2 px-3 py-2">
                <h3 className="font-playfair-disp text-base text-sky-500 font-semibold">
                  The course will be taught by
                </h3>
                <h1 className="font-merriweather font-bold text-2xl text-sky-400 mx-auto">
                  {data?.name}
                </h1>
              <span className="w-full h-full flex flex-col items-start space-y-4">
                <span className="flex items-center space-x-3">
                  <p className="font-merriweather font-semibold text-lg text-sky-500">
                    Years of experience:
                  </p>
                  <p className="font-merriweather font-extrabold text-base text-sky-600">
                    {data?.experience_years}
                  </p>
                </span>
                <span className="h-full w-full flex flex-col items-start space-y-2">
                  <p className="font-merriweather font-semibold text-lg text-sky-500">
                    Background:
                  </p>
                  <span className="font-merriweather font-normal text-sm text-sky-100 h-[70%] w-full overflow-y-scroll scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-sky-400 px-3 py-2">
                    {data?.background}
                  </span>
                </span>
              </span>
              </div>
            </div>
            <footer className="h-[12%] w-full bg-slate-800">
              
            </footer>
          </div>
          <div onClick={() => setCloseEnrollmentCard(true)} className="h-[20%] w-full"></div>
        </div>
        <div 
        onClick={() => setCloseEnrollmentCard(true)}
        className="h-full w-[15%]"></div>
      </div>
    )}
    </>
  )
}

export default ShortCard