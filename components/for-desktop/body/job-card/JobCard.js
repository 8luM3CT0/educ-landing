//front-end
import React from 'react'
import { 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    Icon } 
    from '../../..'
import {CiRead} from 'react-icons/ci'
//back-end
import { useState } from 'react'

function JobCard({
    category,
    title,
    description,
    mini_q,
    reco_q,
    salary,
    company,
    work_h
}) {
    const [jobInfo, setJobInfo] = useState(false)

  return (
    <>
    <div className='jobCardDiv'>
    <div className="
    flex
    items-center
    justify-evenly
    min-h-[320px]
    max-h-[360px]
    w-[85%]
    px-3
    py-2
    ">
        {/**company icon/company initials here */}
        <div className="
        rounded-xl
        bg-purple-600
        bg-opacity-80
        place-items-center
        grid
        h-[30%]
        w-[15%]
        ">
            <h1 className="
            font-montserr
            font-semibold
            text-xl
            text-slate-50
            ">
                {company?.slice(0, 2)}
            </h1>
        </div>
        {/**div here; grid and contains job title with company name at bottom */}
        <div className="
        w-full
        h-[30%]
        flex
        flex-col
        place-items-start
        space-y-3
        ml-12   
        ">
            <h1 className="
            font-montserr
            font-semibold
            text-slate-700
            text-2xl
            ">
                {title}
            </h1>
            <p className="
            font-fira-sans
            font-light
            text-slate-800
            text-base
            ">
                {company}
            </p>
        </div>
        <h4 className="
        w-[30%]
        font-montserr
        text-lg
        font-normal
        text-slate-800
        underline
        ">
            {work_h}
        </h4>
    </div>
        {/**button here; most likely to check or open modal for job */}
        <div className="
    grid
    place-items-center
    h-[70%]
    w-[30%]
    px-3
    py-2
    ">
        {/**
         * show the salary range here.
         * 
         */}
        <h4 className="
        font-path-ex
        font-semibold
        text-base
        text-slate-700
        ">
            {salary}
        </h4>
        {/**button here; opens a modal ?/ or just leads to 
         * another page which
         * shows the job details.
        */}
        <button 
        onClick={() => setJobInfo(true)}
        className="
        flex
        items-center
        space-x-3
        bg-transparent
        border-2
        px-3
        py-2
        border-slate-700
        rounded-xl
        hover:shadow-xl
        transform
        transition
        duration-300
        ease-liner
        ">
            <CiRead 
            style={{
                fontSize: '1.1em',
                color: 'gray'
            }}
            />
            <p className="
            font-montserr
            font-normal
            text-lg
            text-slate-700
            ">
                Read more
            </p>
        </button>
        
    </div>
    </div>

    </>
  )
}

export default JobCard