//front-end
import React from 'react'
//back-end
import {useRef, useState} from 'react'
import { courses } from '../../..'

function ManagementDiv({
    closeManagementModal,
    setCloseManagementModal,
    isHovered,
    setIsHovered,
    viewMentor,
    setViewMentor,
    closeViewMentor,
    setCloseViewMentor,
    scrollRef
}) {
  const [selectedMentor, setSelectedMentor] = useState(null)

  return (
    <>
     <div 
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="
                    h-[50%] group bg-slate-900 bg-opacity-20 w-[95%] mx-auto flex items-center overflow-x-scroll scrollbar-hide space-x-7
                    ">
                      {courses?.lecturers && courses?.lecturers.map(lecturer => (
                        <div 
                        key={lecturer?.id}
                        style={{
                          backgroundImage: `url(${lecturer.lecpic})`
                        }}
                        className="
                        h-full
                        min-w-[400px]
                        max-w-[400px]
                        rounded
                        bg-cover
                        bg-no-repeat
                        flex
                        flex-col
                        items-end
                        transition-all
                        duration-300
                        ease-in-out
                        blur-sm
                        group
                        group-hover:blur-none
                        ">
                          <span className="
                          h-[70%]
                          "></span>
                          <span className="
                          h-[30%]
                          space-y-4
                          w-full
                          mx-auto
                          bg-slate-800
                          bg-opacity-60
                          rounded
                          group-hover:bg-opacity-90
                          transition-all
                          duration-300
                          ease-in-out
                          px-4
                          py-3
                          group
                          flex
                          flex-col
                          items-center
                          ">
                            <h3 className="font-montserr font-semibold text-xl text-pink-100 group-hover:text-pink-300">
                              {lecturer.name}
                            </h3>
                            <button 
                            disabled={viewMentor}
                            onClick={() => {
                              setSelectedMentor(lecturer);
                              setViewMentor(true);
                            }}
                            className="
                            h-[40%]
                            w-[85%]
                            mx-auto
                            rounded
                            bg-slate-900
                            text-pink-800
                            font-ibm-sans
                            font-semibold
                            focus:outline-none
                            border-2
                            border-pink-800
                            hover:border-pink-200
                            hover:bg-slate-800
                            transition-all
                            duration-300
                            ease-in-out
                            ">
                              View
                            </button>
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="
                    h-[50%] w-[95%] mx-auto bg-slate-900 bg-opacity-20 rounded-lg
                    ">
                      {((viewMentor || closeViewMentor) && selectedMentor !== null) && (
                        <div 
                        className={`
                          h-full 
                          w-full
                          flex
                          items-center
                          transition-all 
                          duration-700 
                          ease-in-out
                          transform
                          origin-top
                          ${!closeViewMentor ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-5'}
                          `}
                          onTransitionEnd={() => {
                            if(closeViewMentor){
                              setViewMentor(false)
                              setCloseViewMentor(false)
                              setSelectedMentor(null)
                            }
                          }}
                          >
                            <span 
                            style={{
                              backgroundImage: `url(${selectedMentor?.lecpic || ''})`
                            }}
                            className="h-full w-[50%] bg-cover bg-no-repeat "></span>
                            <span className="
                            h-full
                            w-[50%]
                            flex
                            flex-col
                            items-start
                            ">
                              <span className="
                              h-[90%]
                              space-y-2
                              w-full
                              flex
                              flex-col
                              items-start
                              border
                              border-slate-600
                              rounded
                              ">
                                <span className="w-full px-3 py-3 bg-slate-800 bg-opacity-70">
                                <h3 className="font-font-robot font-semibold text-lg text-slate-100">
                                  {selectedMentor?.name}
                                </h3>
                                </span>
                                <span className="
                                h-full
                                w-full
                              overflow-y-scroll
                              scrollbar-hide
                              bg-slate-800
                              bg-opacity-30
                                ">
                                  <p className="font-montserr text-base text-slate-100 font-bold px-3 py-2">
                                    {selectedMentor?.background}
                                  </p>
                                </span>
                              </span>
                              <span 
                              onClick={() => setCloseViewMentor(true)}
                              className="
                              h-[10%]
                              w-full
                              flex
                              justify-center
                              items-center
                              border-2
                              bg-slate-700
                              border-pink-600
                              text-pink-600
                              bg-opacity-30
                              hover:bg-slate-900
                              hover:bg-opacity-5
                              hover:text-pink-300
                              hover:border-pink-300
                              transition-all
                              duration-300
                              ease-in-out
                              cursor-pointer
                              ">
                                <p className="
                                font-font-robot
                                font-semibold
                                text-lg
                                ">
                                  Close
                                </p>
                              </span>
                            </span>
                          </div>
                      )}
                    </div> 
    </>
  )
}

export default ManagementDiv
