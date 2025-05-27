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
//back-end
import { useState } from 'react'
import { CiRead } from 'react-icons/ci'

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
    <div className='mobJobCard'>
    <div className="
    flex
    items-center
    h-[70%]
    px-3
    py-2

    ">
        {/**company icon/company initials here */}
        <div className="
        rounded-3xl
        bg-purple-600
        bg-opacity-80
        place-items-center
        grid
        p-4
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
    </div>
        {/**button here; most likely to check or open modal for job */}
        <div className="
    grid
    place-items-start
    space-y-3
    px-3
    py-2
    ">
        {/**company icon/company initials here */}
        {/**div here; grid and contains job title with company name at bottom */}
        <h1 className="
        text-lg
        font-montserr
        font-semibold
        text-slate-700
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
    <button
    className="
    flex
    items-center
    space-x-3
    bg-purple-600
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
            color: 'whitesmoke'
        }}
        />
    </button>    
    </div>
    </>
  )
}

export default JobCard