//front-end
import React from 'react'
import {Carousel, CourseHeader, MobCourseHeader, ShortCard} from '../components/'
import Head from 'next/head'
//back-end
import { courses } from '../components/'

console.log('Data from front-end here >>>>', courses?.fend_data)

function Course() {
  return (
    <div className='
    overflow-hidden
    h-full
    flex-col
    bg-slate-800
    '>
      <div className="
      w-[98%]
      mx-auto
      h-full
      bg-gradient-to-br
      from-amber-700
      to-amber-400
      overflow-hidden
      ">
        <main className="
      h-full
      w-full
      flex
      flex-col
      items-center
      bg-slate-900
      bg-opacity-80
      ">
        <div className="
        h-[34%]
        w-[95%]
        bg-slate-800
        bg-opacity-70
        rounded
        space-y-2
      bg-no-repeat
      bg-cover
      bg-study
        "></div>
        <div className="
        h-[65%]
        w-[95%]
        bg-slate-100
        bg-opacity-20
        flex
        flex-col
        px-8
        py-6
        mx-auto
        overflow-y-scroll
        scrollbar-thin
        scrollbar-track-slate-800
        scrollbar-thumb-indigo-300
        space-y-12
        pb-[120px]
        ">
            <h1 className="
            text-2xl
            font-merriweather
            font-normal
            text-sky-50
            ">
              Cybersecurity
            </h1>
            <div className="
            courseDiv
            bg-cybersecurity
            ">
                <div className="
                courseIntDiv
                bg-slate-700
                bg-opacity-70
                ">
                  {courses?.cyb_data && courses?.cyb_data.map(data => (
                    <ShortCard 
                    data={data}
                    lecData={courses?.lecturers}
                    />
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-merriweather
            font-normal
            text-sky-50
            ">
              Data science
            </h1>
                        <div className="
            courseDiv
            bg-data-sci
            ">
                                <div className="
                courseIntDiv
                bg-sky-700
                bg-opacity-30
                ">
                                    {courses?.dsci_data && courses?.dsci_data.map(data => (
                    <ShortCard 
                    data={data}
                    lecData={courses?.lecturers}
                    />
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-merriweather
            font-normal
            text-sky-50
            ">
              Front-end
            </h1>
                        <div className="
            courseDiv
            bg-front-end
            ">
                                <div className="
                courseIntDiv
                bg-indigo-700
                bg-opacity-30
                ">
                                    {courses?.fend_data && courses?.fend_data.map(data => (
                    <ShortCard 
                    data={data}
                    lecData={courses?.lecturers}
                    />
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-merriweather
            font-normal
            text-sky-50
            ">
              Project management
            </h1>
                        <div className="
            courseDiv
            bg-projman
            ">
                                <div className="
                courseIntDiv
                bg-cyan-700
                bg-opacity-30
                ">
                                    {courses?.projman_data && courses?.projman_data.map(data => (
                    <ShortCard 
                    data={data}
                    lecData={courses?.lecturers}
                    />
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-merriweather
            font-normal
            text-sky-50
            ">
              Software engineering
            </h1>
                        <div className="
            courseDiv
            bg-soft-eng
            ">

                                <div className="
                courseIntDiv
                bg-purple-700
                bg-opacity-30
                ">
                                    {courses?.se_data && courses?.se_data.map(data => (
                    <ShortCard 
                    data={data}
                    lecData={courses?.lecturers}
                    />
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-merriweather
            font-normal
            text-sky-50
            ">
              UX design
            </h1>
                        <div className="
            courseDiv
            bg-ux-des
            ">
                                <div className="
                courseIntDiv
                bg-teal-700
                bg-opacity-30
                ">
                                    {courses?.ux_design && courses?.ux_design.map(data => (
                    <ShortCard 
                    data={data}
                    lecData={courses?.lecturers}
                    />
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-merriweather
            font-normal
            text-sky-50
            ">
              Back-end
            </h1>
                        <div className="
            courseDiv
            bg-back-end
            ">
                                <div className="
                courseIntDiv
                bg-slate-700
                bg-opacity-70
                ">
                                    {courses?.bend_data && courses?.bend_data.map(data => (
                    <ShortCard 
data={data}
name={data?.name}
experience_years={data?.experience_years}
background={data?.background}
/>
                  ))}
                </div>
            </div>
        </div>
      </main>
      </div>
          
    </div>
  )
}

export default Course