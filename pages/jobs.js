//front-end
import React from 'react'
import {DeskJobHeader, MobJobHeader, jobs, JobCard, MobJob} from '../components/'
//back-end
import { useState } from 'react'
import Head from 'next/head'

function JobFeed() {

  return (
    <div className='
    h-full
    w-full
    bg-cover
    bg-no-repeat
    bg-job
    overflow-hidden
    '>
        <main className="
        h-full
        w-full
        mx-auto
        bg-cyan-800
        bg-opacity-90">
          <div className="
          h-full
          w-[90%]
          mx-auto
          bg-job
          bg-no-repeat
          bg-cover
          ">
            <div className="
            h-full
            w-full
            mx-auto
            bg-sky-800
            bg-opacity-80
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-slate-800
            scrollbar-thumb-sky-500
            flex
            flex-col
            items-center
            space-y-6
            ">
              {jobs.jobs.map(doc => (
                <JobCard 
                category={doc.category}
                company={doc.company}
                description={doc.description}
                mini_q={doc.minimum_qualifications}
                reco_q={doc.recommended_qualifications}
                salary={doc.salary}
                title={doc.title}
                work_h={doc.working_hours}
                />
              ))}
            </div>
          </div>
        </main>
    </div>
  )
}

export default JobFeed