//front-end
import React from 'react'
import { 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    Icon, 
    ViewIcon,
    PinIcon,
    AltPinIcon,
    IndustryIcon,
    QualIcon,
    ClipboardIcon,
    CheckIcon,
    CalendarIcon,
    LaptopIcon,
    ToolIcon,
    GradCapIcon,
    ListIcon,
    ContractIcon,
    PencilIcon} 
    from '../../..'
import {CiRead} from 'react-icons/ci'
//back-end
import {useEffect, useState } from 'react'

function JobCard({doc}) {
    const [jobInfo, setJobInfo] = useState(false)
    const [openingInfo, setOpeningInfo] = useState(false)
    const [closingInfo, setClosingInfo] = useState(false)

    useEffect(() => {
        if(jobInfo && openingInfo){
            setTimeout(() => {
                setOpeningInfo(true)
            }, 15)
        } else if (!jobInfo){
            setOpeningInfo(false)
        }
    }, [jobInfo])


    const formatSalary = (salary) => {
        const min = salary.value.minValue.toLocaleString();
        const max = salary.value.maxValue.toLocaleString();
        const currency = salary.currency === "USD" ? "$" : salary.currency;
        const unit = salary.value.unitText === "YEAR" ? "/yr" : ""
        
        return `${currency}${min} - ${currency}${max} ${unit}`;
    }
  return (
    <>
    <div 
    key={doc?.identifier?.value}
    className='jobCardDiv group'>
        <div className="w-full h-full bg-slate-800 flex flex-col items-start bg-opacity-25 group-hover:bg-opacity-10 transform transition-all duration-500 ease-in-out">
            <header className="h-[8%] w-full flex items-center space-x-4 px-4 py-3 border-b-4 border-slate-800 group-hover:border-indigo-400 transfrom transition duration-500 ease-in-out ">
                    <h3 className="font-merriweather font-bold text-slate-800 text-lg group-hover:text-indigo-400 transform transition-all duration-500 ease-in-out">
                        {doc?.industry}
                    </h3>
            </header>
            <div className="h-[78%] w-full flex flex-col items-start">
                <div className="h-[40%] w-full bg-job bg-cover bg-no-repeat">
                    <div className="h-full w-full bg-slate-100 bg-opacity-50 flex flex-col items-start">
                        <div className="h-[60%] w-full"></div>
                        <div className="h-[40%] w-full bg-indigo-500 bg-opacity-30 rounded-sm flex items-center px-3">
                            <h3 className="font-merriweather font-bold text-indigo-100 text-lg underline">
                                {doc?.hiringOrganization?.name}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="h-[60%] w-full flex flex-col items-start space-y-3 px-3 py-2">
                    <h1 className="font-playfair-disp font-bold text-indigo-700 text-2xl">
                        {doc?.title}
                    </h1>
                    <span className="w-full flex items-center space-x-4">
                        <h3 className="font-merriweather font-black text-purple-700 text-base">
                            {doc?.workHours}
                        </h3>
                    </span>
                    <span className="w-full flex items-center space-x-4 text-sky-600">
                        <PinIcon 
                        style={{
                            fontSIze: '1.3em'
                        }}
                        />
                        <h3 className="font-merriweather font-black text-base">
                            {doc?.jobLocation?.address?.addressLocality} - {doc?.jobLocation?.address?.addressCountry}
                        </h3>
                    </span>
                </div>
            </div>
            <footer className="h-[12%] w-full flex items-center justify-between px-4 py-3 border-t-4 border-slate-800 group-hover:border-indigo-400 transform transition-all duration-500 ease-in-out">
                <span className=""></span>
                <button 
                onClick={() => {
                    setOpeningInfo(true);
                    setJobInfo(true);
                }}
                className="focus:outline-none flex items-center space-x-2 border-2 border-indigo-700 px-4 font-playfair-display font-bold text-indigo-700 rounded text-lg hover:text-indigo-900 hover:border-indigo-900 transform transition-all duration-300 ease-in-out ">
                    <ViewIcon style={{
                        fontSize: '1.3em'
                    }} />
                    <p>
                        View
                    </p>
                </button>
            </footer>
        </div>
    </div>
    {(openingInfo || closingInfo) && (
  <div
    className={`
      fixed inset-0 z-50 bg-slate-800 bg-opacity-40 flex items-center 
      transition-all duration-500 
      ${openingInfo && !closingInfo ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}
    onTransitionEnd={() => {
      if (closingInfo) {
        setJobInfo(false);
        setClosingInfo(false);
      }
    }}
  >
    <div onClick={() => setClosingInfo(true)} className="h-full w-[3%]"></div>
    <div className="h-full w-[94%] flex flex-col items-center">
      <div onClick={() => setClosingInfo(true)} className="h-[2%] w-full"></div>
      <div
        className={`
          h-[96%] w-full bg-slate-800 rounded border-4 border-indigo-500 border-solid 
          transition-all duration-500 
          ${openingInfo && !closingInfo ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <header className="h-[8%] w-full bg-sky-300 bg-opacity-10 px-3 flex items-center justify-between border-b-4 border-indigo-500">
            <span className="flex items-center space-x-4">
                <h3 className="font-merriweather font-semibold text-lg text-sky-500">
                    Application location:
                </h3>
                <p className="font-merriweather font-normal text-base text-sky-600">
                    {doc?.applicantLocationRequirements}
                </p>
            </span>
            <button 
            onClick={() => setClosingInfo(true)}
            className="focus:outline-none flex items-center font-playfair-disp font-bold text-base px-3 py-1 rounded-full text-red-500 border border-red-500 hover:text-red-600 hover:border-red-600 transform transition-all duration-300 ease-in-out">
                X
            </button>
        </header>
        <div className="h-[84%] w-full flex flex-col items-start px-5 py-3 space-y-4 overflow-y-scroll scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-sky-400">
            <span className="flex flex-col items-start space-y-3 w-full">
                <span className="flex items-center space-x-5">
                    <h1 className="text-2xl text-sky-300 font-merriweather font-bold">
                    {doc?.title}
                </h1>
                <strong className="text-sm text-sky-600 font-merriweather">
                    {formatSalary(doc?.baseSalary)}
                </strong>
                </span>
                <span className="w-[95%] flex items-center space-x-10 overflow-x-scroll scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-sky-400">
                    <span className="flex min-w-min max-w-max items-center space-x-2 text-sky-400">
                    <PinIcon 
                        style={{
                            fontSIze: '1.1em'
                        }}
                    />
                    <p className="font-merriweather font-light text-sm">
                        {doc?.hiringOrganization?.name}
                    </p>
                    </span>
                    <span className="flex min-w-min max-w-max items-center space-x-2 text-sky-400">
                    <IndustryIcon 
                        style={{
                            fontSIze: '1.1em'
                        }}
                    />
                    <p className="font-merriweather font-light text-sm">
                        {doc?.industry}
                    </p>
                    </span>
                {doc?.educationRequirements && (
                                        <span className="flex min-w-min max-w-max items-center space-x-2 text-sky-400">
                    <GradCapIcon 
                        style={{
                            fontSIze: '1.1em'
                        }}
                    />
                    <p className="font-merriweather font-light text-sm w-full">
                    Eduaction requirements: {doc?.educationRequirements}
                    </p>
                    </span>
                )}
                </span>
            </span>
            <span className="flex items-center space-x-2 text-sky-500">
                <QualIcon 
                style={{
                    fontSize: '1.5em'
                }}
                />
            <h3 className="font-merriweather font-semibold text-lg ">
                Qualifications
            </h3>
            </span>
            <span className="w-[95%] min-h-min max-h-max mx-auto space-y-2 bg-sky-700 px-3 bg-opacity-5 flex flex-col items-start overflow-y-scroll scrollbar-hide">
                {doc?.qualifications?.map(qual => (
                    <span className="flex items-center space-x-2 text-sky-100">
                    <AltPinIcon 
                    style={{
                        fontSize: '1.0em'
                    }}
                    />
                    <p className="font-merriweather font-light text-sm ">
                     {qual}
                    </p>
                    </span>
                ))}
            </span>
            <span className="flex items-center space-x-2 text-sky-500">
                <ListIcon 
                style={{
                    fontSize: '1.5em'
                }}
                />
            <h3 className="font-merriweather font-semibold text-lg ">
                Description
            </h3>
            </span>
            <span className="h-[140px] w-[95%] min-h-min max-h-max mx-auto space-y-2 bg-sky-700 px-3 bg-opacity-5 flex flex-col items-start overflow-y-scroll scrollbar-hide">
                    <p className="font-merriweather font-light text-sm text-sky-100">
                     {doc?.description}
                    </p>
            </span>
            <span className="flex items-center space-x-2 text-sky-500">
                <LaptopIcon 
                style={{
                    fontSize: '1.5em'
                }}
                />
            <h3 className="font-merriweather font-semibold text-lg ">
                Skills
            </h3>
            </span>
            <span className="w-[95%] min-h-min max-h-max mx-auto space-x-2 bg-sky-700 px-3 bg-opacity-5 flex items-center overflow-x-scroll scrollbar-hide">
                {doc?.skills?.map(skill => (
                    <span className="flex items-center space-x-2 text-sky-100">
                    <p className="font-merriweather font-light text-sm ">
                    -
                    </p>
                    <p className="font-merriweather font-light text-sm ">
                     {skill}
                    </p>
                    </span>
                ))}
            </span>
            <span className="flex items-center space-x-2 text-sky-500">
                <ClipboardIcon 
                style={{
                    fontSize: '1.5em'
                }}
                />
            <h3 className="font-merriweather font-semibold text-lg ">
                Responsibilities
            </h3>
            </span>
            <span className="w-[95%] min-h-min max-h-max mx-auto space-y-2 bg-sky-700 px-3 bg-opacity-5 flex flex-col items-start overflow-y-scroll scrollbar-hide">
                {doc?.responsibilities?.map(resp => (
                    <span className="flex items-center space-x-2 text-sky-100">
                    <CheckIcon 
                    style={{
                        fontSize: '1.0em'
                    }}
                    />
                    <p className="font-merriweather font-light text-sm ">
                     {resp}
                    </p>
                    </span>
                ))}
            </span>
            <span className="flex items-center space-x-2 text-sky-500">
                <ContractIcon 
                style={{
                    fontSize: '1.5em'
                }}
                />
            <h3 className="font-merriweather font-semibold text-lg ">
                Benefits
            </h3>
            </span>
            <span className="w-[95%] min-h-min max-h-max mx-auto space-y-2 bg-sky-700 px-3 bg-opacity-5 flex flex-col items-start overflow-y-scroll scrollbar-hide">
                {doc?.jobBenefits?.map(benefit => (
                    <span className="flex items-center space-x-2 text-sky-100">
                    <PencilIcon 
                    style={{
                        fontSize: '1.0em'
                    }}
                    />
                    <p className="font-merriweather font-light text-sm ">
                     {benefit}
                    </p>
                    </span>
                ))}
            </span>
        </div>
        <footer className="h-[8%] w-full bg-sky-300 bg-opacity-10 border-t-4 border-indigo-500 flex items-center justify-between"></footer>
      </div>

      <div onClick={() => setClosingInfo(true)} className="h-[2%] w-full"></div>
    </div>

    <div onClick={() => setClosingInfo(true)} className="h-full w-[3%]"></div>
  </div>
)}

    </>
  )
}

export default JobCard