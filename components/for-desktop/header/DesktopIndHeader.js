//front-end
import React from 'react'
import {FcAcceptDatabase} from 'react-icons/fc'
import {FaConnectdevelop} from 'react-icons/fa'
import {BulbIcon, HammerIcon, SiBmcsoftware} from '../../'
//back-end
import { useRouter } from 'next/router'

function DesktopIndHeader() {
  const router = useRouter()
  
    return (
    <div
    className='
    desktopIndexHeader
    '
    >
        <span className="
        w-[80%]
        flex
        items-center
        space-x-8
        ">
            <SiBmcsoftware
            style={{
                color: 'gold',
                fontSize: '2.0em',
                cursor: 'pointer'
            }}
            className='hover:shadow-2xl transform transition duration-200'
            />
                    <button 
        onClick={() => router.push('/course')}
        className="
        diHeaderBtn
        hover:text-amber-600
        hover:border-amber-600
        transform
        transition
        duration-300
        ease-in-out
        ">  <BulbIcon />
            <p className="desktopHeaderTitle">
                Courses
            </p>
        </button>
        <button 
        onClick={() => router.push('/jobs')}
        className="
        diHeaderBtn
        hover:text-sky-400
        hover:border-sky-400
        transform
        transition
        duration-300
        ease-in-out
        ">  <HammerIcon />
            <p className="desktopHeaderTitle">
                Job offerings
            </p>
        </button>
        </span>

        <span 
        onClick={() => router.push('/support')}
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
        <h1 className="    
    font-robot-condensed
    font-bold
    text-sm
    text-slate-300">
            Connect with us
        </h1>
        </span>
    </div>
  )
}

export default DesktopIndHeader