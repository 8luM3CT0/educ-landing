//front-end
import React from 'react'
import {DeskJobHeader, MobJobHeader, jobs, JobCard, MobJob} from '../components/'
//back-end
import { useState } from 'react'
import Head from 'next/head'

const ITEMS_PER_PAGE = 5

function JobFeed() {

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(jobs.jobs.length / ITEMS_PER_PAGE)
  const paginatedJobs = jobs.jobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

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
            h-[90%]
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
            py-4
            ">
              {paginatedJobs.map(doc => (
                <JobCard
                doc={doc}
                />
              ))}
            </div>
            <footer className="w-full h-[10%] bg-slate-800 space-x-3 flex items-center px-3 py-2 rounded border-t-2 border-indigo-500">
             {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return(
                <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-3xl text-base font-medium font-merriweather ${currentPage === page ? 'bg-indigo-400 text-purple-900' : 'bg-purple-900 text-indigo-400'}`}>
                  {page}
                </button>
              )
             })}
            </footer>
          </div>
        </main>
    </div>
  )
}

export default JobFeed