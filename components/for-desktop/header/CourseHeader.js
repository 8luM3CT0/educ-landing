//front-end
import React from 'react'
import { FaConnectdevelop, FaDiscourse } from 'react-icons/fa'
//back-end
import { useRouter } from 'next/router'

function CourseHeader() {
  const router = useRouter()
  
    return (
    <header className='desktopCourseHeader'>
      <span className="
        w-[0.3]
        flex-items-center
        ">
            <FaDiscourse
            style={{
                color: 'gold',
                fontSize: '2.0em',
                cursor: 'pointer'
            }}
            className='hover:shadow-2xl transform transition duration-200'
            />
        </span>
        <div className="
        w-[50%]
        flex
        items-center
        justify-between
        ">
                <h1 
        onClick={() => router.push('/')}
        className="desktopHeaderTitle">
            Home
        </h1>
        <h1 
        onClick={() => router.push('/jobs')}
        className="desktopHeaderTitle">
            Job offerings
        </h1>
        <span className="
        w-[0.3]
        bg-slate-600
        rounded-lg
        px-3
        py-2
        flex
        items-center
        space-x-3
        cursor-pointer
        hover:shadow-xl
        hover:bg-indigo-700
        transform
        transition
        duration-200
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
       
    </header>
  )
}

export default CourseHeader