//front-end
import React from 'react'
import {
  BiSolidSchool, 
  BsHddNetwork, 
  BsInfoLg,
  CapIcon,
  FaConnectdevelop,
  FcAcceptDatabase,
  InfoIcon,
  PeopleIcon,
  SiBmcsoftware,
  WorkIcon
} from '../../'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'

function MobileIndHeader({
  aboutModal,
    setAboutModal,
    openAboutModal,
    setOpenAboutModal,
    closeAboutModal,
    setCloseAboutModal,
    openAModal,
    managementModal,
    setManagementModal,
    openManagementModal,
    setOpenManagementModal,
    closeManagementModal,
    setCloseManagementModal,
    openMModal,
    courseModal,
    setCourseModal,
    openCourseModal,
    setOpenCourseModal,
    closeCourseModal,
    setCloseCourseModal,
    openCModal,
    jobModal,
    setJobModal,
    openJobModal,
    setOpenJobModal,
    closeJobModal,
    setCloseJobModal,
    openJModal
}) {
  const router = useRouter()
  return (
    <>
    <div
    className='
    mobIndexHeader
    '
    >
        <span className="
        w-[80%]
        flex
        items-center
        space-x-8
        ">
            <span className="
            w-[25%]
            ">
                <SiBmcsoftware
            style={{
                color: 'gold',
                fontSize: '2.0em',
                cursor: 'pointer'
            }}
            className='hover:shadow-2xl transform transition duration-200'
            />
            </span>
            <span className="
            w-[75%]
            justify-evenly
            flex 
            items-center
            space-x-11
            ">
         <button 
         onClick={openAModal}
        className="
        diHeaderBtn
        hover:text-emerald-600
        hover:border-emerald-600
        transform
        transition
        duration-300
        ease-in-out
        ">  <InfoIcon />
        </button>
        <button 
        onClick={openMModal}
        className="
        diHeaderBtn
        hover:text-pink-600
        hover:border-pink-600
        transform
        transition
        duration-300
        ease-in-out
        ">  <PeopleIcon />
        </button>
        <button 
        onClick={openCModal}
        className="
        diHeaderBtn
        hover:text-amber-600
        hover:border-amber-600
        transform
        transition
        duration-300
        ease-in-out
        ">  <CapIcon />
        </button>
        <button
        onClick={openJModal} 
        className="
        diHeaderBtn
        hover:text-sky-400
        hover:border-sky-400
        transform
        transition
        duration-300
        ease-in-out
        ">  <WorkIcon />
        </button>
            </span>
        </span>

        <span 
        className="
        w-[0.2]
        bg-sky-900
        rounded-lg
        px-3
        py-2
        flex
        items-center
        space-x-3
        cursor-pointer
        hover:-skew-x-3
        hover:shadow-xl
        hover:bg-indigo-700
        transform
        transition
        duration-[400ms]
        ease-in-out
        group
        ">
                    <FaConnectdevelop 
        style={{
            color: 'cyan',
            fontSize: '1.5em'
        }}
        />
        </span>
    </div>
    </>
  )
}

export default MobileIndHeader