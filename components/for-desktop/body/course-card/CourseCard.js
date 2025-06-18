//front-end
import React, {useState} from 'react'
import {
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    Icon} from '../../../'
//back-end
import { useRouter } from 'next/router'



function CourseCard({
  title,
  backgroundImage
}) {
  const router = useRouter()
  const [courseCardInfo, setCourseCardInfo] = useState(false)
  const [openCourseCardInfo, setOpenCourseCardInfo] = useState(false)
  const [closeCourseCardInfo, setCloseCourseCardInfo] = useState(false)
  return (
    <>
    <div 
    className='
    courseCardDiv
    group
    '
    style={{
      backgroundImage: `url(${backgroundImage})`
    }}
    >
        <div className="
        h-[100%]
        w-[100%]
        grid
        place-items-center
        space-y-4
        bg-slate-800
        bg-opacity-95
        rounded-lg
        group-hover:bg-opacity-75
        duration-200
        ease-in-out
        transform
        transition
        "
        >
          <h1 className="
          font-path-ex
          font-semibold
          text-3xl
          text-indigo-50
          ">
            {title}
          </h1>
        </div>
    </div>
    </>
  )
}

export default CourseCard