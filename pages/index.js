//front-end
import Head from 'next/head'
import {
  Button,
  CloseIcon,
  CourseCard,
  DIHeader,
  HammerIcon,
  Icon,
  MIHeader,
  PenIcon,
  ReviewCard,
  course_card,
  courses,
  reviews
} from '../components/'
//back-end
import {useEffect, useRef, useState} from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds } from '../backend/firebase'
import Course from './course'
import JobFeed from './jobs'
import AboutDiv from '../components/for-desktop/body/about-div/AboutDiv'
import ManagementDiv from '../components/for-desktop/body/management-div/ManagementDiv'


export default function Home () {
  const router = useRouter()
  const scrollRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [user] = useAuthState(creds)
  const headerPics = [
    "https://i.pinimg.com/736x/ef/19/3f/ef193fbb1889dc748ff685172d3b9217.jpg",
    "https://i.pinimg.com/736x/93/48/48/9348482bffa077e0044de41c6676e60b.jpg",
    "https://i.pinimg.com/736x/b2/c7/98/b2c79829d5547a54cefde3899c4a66f6.jpg",
    "https://i.pinimg.com/736x/22/23/3a/22233a273780452686fd092b9d5f555c.jpg",
    "https://i.pinimg.com/736x/bc/48/0d/bc480d733705203abb3c1d41e28599ca.jpg"
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // start fade-out
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % headerPics.length)
        setFade(true) // fade-in new image
      }, 1000) // match transition duration
    }, 3000) // longer cycle for better pacing

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const autoScroll = () => {
      if (!scrollContainer) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      if (atEnd) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
      }
    };

    if (!isHovered) {
      scrollInterval = setInterval(autoScroll, 3000);
    }

    return () => clearInterval(scrollInterval);
  }, [isHovered]);
  
 //for about modal
   const [openAboutModal, setOpenAboutModal] = useState(false)
   const [aboutModal, setAboutModal] = useState(false)
   const [closeAboutModal, setCloseAboutModal] = useState(false)
   //for management modal
   const [managementModal, setManagementModal] = useState(false)
   const [openManagementModal, setOpenManagementModal] = useState(false)
   const [closeManagementModal, setCloseManagementModal] = useState(false)
   const [openViewMentor, setOpenViewMentor] = useState(false)
   const [viewMentor, setViewMentor] = useState(false)
   const [closeViewMentor, setCloseViewMentor] = useState(false)
  //for course modal
   const [courseModal, setCourseModal] = useState(false)
   const [openCourseModal, setOpenCourseModal] = useState(false)
   const [closeCourseModal, setCloseCourseModal] = useState(false)
   //for job modal
   const [jobModal, setJobModal] = useState(false)
   const [openJobModal, setOpenJobModal] = useState(false)
   const [closeJobModal, setCloseJobModal] = useState(false) 

   //for open & close of aboutModal
   useEffect(() => {
    if(aboutModal && !openAboutModal){
      setTimeout(() => {
        setOpenAboutModal(true)
      }, 10)
    } else if(!aboutModal){
      setOpenAboutModal(false)
    }
   }, [aboutModal])

   const openAModal = () => {
    {!aboutModal && setAboutModal(true)}
    {managementModal && setManagementModal(false)}
    {courseModal && setCourseModal(false)}
    {jobModal && setJobModal(false)}
   }
   //for open & close of managementModal
   useEffect(() => {
    if(managementModal && !openManagementModal){
      setTimeout(() => {
        setOpenManagementModal(true)
      }, 15)
    } else if(!managementModal){
      setOpenManagementModal(false)
    }
   }, [managementModal])
   const openMModal = () => {
    {aboutModal && setAboutModal(false)}
    {!managementModal && setManagementModal(true)}
    {courseModal && setCourseModal(false)}
    {jobModal && setJobModal(false)}
   }
   useEffect(() => {
    if(viewMentor && !openViewMentor){
      setTimeout(() => {
        setViewMentor(true)
      }, 15)
    } else if(!viewMentor){
      setOpenViewMentor(false)
    }
   }, [viewMentor])
   //for open & close of courseModal
   useEffect(() => {
    if(courseModal && !openCourseModal){
      setTimeout(() => {
        setOpenCourseModal(true)
      }, 15)
    } else if(!courseModal){
      setOpenCourseModal(false)
    }
   }, [courseModal])
   
   const openCModal = () => {
    {aboutModal && setAboutModal(false)}
    {managementModal && setManagementModal(false)}
    {!courseModal && setCourseModal(true)}
    {jobModal && setJobModal(false)}
   }

   //for open & close of jobModal
   useEffect(() => {
    if(jobModal && !openJobModal){
      setTimeout(() => {
        setOpenJobModal(true)
      }, 15)
    } else if(!jobModal){
      setOpenJobModal(false)
    }
   }, [jobModal])
   
   const openJModal = () => {
    {aboutModal && setAboutModal(false)}
    {managementModal && setManagementModal(false)}
    {courseModal && setCourseModal(false)}
    {!jobModal && setJobModal(true)}
   }
   
  return (
   <>
    <div
      className='
    h-screen
    w-screen 
    overflow-hidden
    bg-sky-900
    bg-no-repeat 
    bg-cover
    '
    >
      <Head>
        <title>Welcome to an academy for excellence</title>
      </Head>
      <DIHeader 
      aboutModal={aboutModal}
      setAboutModal={setAboutModal}
      openAboutModal={openAboutModal}
      setOpenAboutModal={setOpenAboutModal}
      closeAboutModal={closeAboutModal}
      setCloseAboutModal={setCloseAboutModal}
      openAModal={openAModal}
      managementModal={managementModal}
      setManagementModal={setManagementModal}
      openManagementModal={openManagementModal}
      setOpenManagementModal={setOpenManagementModal}
      closeManagementModal={closeManagementModal}
      setCloseManagementModal={setCloseManagementModal}
      openMModal={openMModal}
      courseModal={courseModal}
      setCourseModal={setCourseModal}
      openCourseModal={openCourseModal}
      setOpenCourseModal={setOpenCourseModal}
      closeCourseModal={closeCourseModal}
      setCloseCourseModal={setCloseCourseModal}
      openCModal={openCModal}
      jobModal={jobModal}
      setJobModal={setJobModal}
      openJobModal={openJobModal}
      setOpenJobModal={setOpenJobModal}
      closeJobModal={closeJobModal}
      setCloseJobModal={setCloseJobModal}
      openJModal={openJModal}
      />
      <MIHeader 
      aboutModal={aboutModal}
      setAboutModal={setAboutModal}
      openAboutModal={openAboutModal}
      setOpenAboutModal={setOpenAboutModal}
      closeAboutModal={closeAboutModal}
      setCloseAboutModal={setCloseAboutModal}
      openAModal={openAModal}
      managementModal={managementModal}
      setManagementModal={setManagementModal}
      openManagementModal={openManagementModal}
      setOpenManagementModal={setOpenManagementModal}
      closeManagementModal={closeManagementModal}
      setCloseManagementModal={setCloseManagementModal}
      openMModal={openMModal}
      courseModal={courseModal}
      setCourseModal={setCourseModal}
      openCourseModal={openCourseModal}
      setOpenCourseModal={setOpenCourseModal}
      closeCourseModal={closeCourseModal}
      setCloseCourseModal={setCloseCourseModal}
      openCModal={openCModal}
      jobModal={jobModal}
      setJobModal={setJobModal}
      openJobModal={openJobModal}
      setOpenJobModal={setOpenJobModal}
      closeJobModal={closeJobModal}
      setCloseJobModal={setCloseJobModal}
      openJModal={openJModal}
      />
      {/**top of home page */}
      <main className="
      mainModal
      ">
        <div className="
      h-[60%]
      w-screen
      bg-gradient-to-b
      from-orange-100
      to-red-100
      ">
        {/**top entrance message */}
        <div className="
        h-full
        w-full
        bg-cover
        bg-no-repeat
        bg-headerpic
        flex
        items-center
        px-2
        bg-opacity-80
        ">
          {/**
           * 
           * div in the middle to show message  
           * 
           * (For desktop screens only)
           * */}
          <div className="
          w-[90%]
          mx-auto
          bg-sky-50
          bg-opacity-10
          shadow-md
          shadow-slate-900
          rounded-3xl
          h-[90%]
          lg:flex
          lg:items-center
          hidden
          ">
            {/**message */}
            <div className="
            h-full
            w-full
            rounded
            bg-slate-800
            bg-opacity-90
            flex
            px-2
            flex-col
            justify-evenly
            place-items-start
            space-y-4
            ">
              <h1 className="
            topText
            ">
             {`<
              Online software
              courses, at an
              affordable price
              />`}
            </h1>
            <h4 className="
toptextDesc
            ">
              Start your journey with us, with affordable pricing
              and multiple choices that would transform you from a
              junior to a master.
            </h4>
            <span className="
            w-full
            lg:flex
            flex-col
            items-center
            ">
              <button
            onClick={openJModal}
            className='
            m-2
            w-full
            px-3
            h-[50px]
            font-robot
            font-light
            outline-none
            focus:outline-none
            text-xl
            text-sky-50 
            mx-auto 
            rounded-lg 
            bg-slate-50 
            bg-opacity-10
            hover:shadow-xl
            hover:-translate-y-2
            hover:-skew-x-3
            hover:shadow-slate-800
            hover:bg-slate-700
            hover:text-indigo-200
            hover:bg-opacity-50
            transform
            transition
            duration-300
            ease-in-out
            flex
            justify-center
            items-center
            space-x-4
            '
            >
              <HammerIcon />
              <p>
                Apply for a job
              </p>
            </button>
              <button
            onClick={openCModal}
            className='
            w-full
            px-3
            h-[50px]
            font-robot
            font-light
            outline-none
            focus:outline-none
            text-xl
            text-sky-50 
            mx-auto 
            rounded-lg 
            bg-slate-50 
            bg-opacity-10
            hover:shadow-xl
            hover:translate-y-2
            hover:-skew-x-3
            hover:shadow-slate-800
            hover:bg-slate-700
            hover:text-indigo-200
            hover:bg-opacity-50
            transform
            transition
            duration-300
            ease-in-out
            flex
            justify-center
            items-center
            space-x-4
            '
            >
              <PenIcon />
              <p>
                Apply for a course
              </p>
            </button>
            </span>
            </div>
            {/**pic */}
            <div 
        className="
          mx-auto
          h-full
          w-full
          flex
          flex-col
          items-center
          rounded-r-xl
          bg-sky-300
          bg-opacity-10
          "
          >
            <img 
            src={headerPics[currentIndex]} 
            alt="" 
            className={`h-[95%] w-[95%] rounded-xl m-auto object-cover duration-1000 transition-opacity ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}/>
          </div>
          </div>
          {/**
           * 
           * 
           * div to show message
           * 
           * (for mobile screens only)
           * 
           */}
          <div 
          style={{
            backgroundImage: `url(${headerPics[currentIndex]})`
          }}
          className={`h-[90%] w-[90%] bg-cover bg-no-repeat lg:hidden m-auto rounded duration-1000 transition-opacity ease-in-out`}>
            <div className="h-full w-full bg-slate-600 bg-opacity-40 flex flex-col items-center justify-center space-y-3">
              <h3 className="topText">
                {`<
              Online software
              courses, at an
              affordable price
              />`}
              </h3>
              <h4 className="topTextDescMob">
                Start your journey with us, with affordable pricing
              and multiple choices that would transform you from a
              junior to a master.
              </h4>
              <span className="w-[80%] mx-auto flex flex-col items-center">
                <button
            onClick={openJModal}
            className='
            m-2
            w-full
            px-3
            h-[50px]
            font-robot
            font-light
            outline-none
            focus:outline-none
            text-xl
            text-sky-50 
            mx-auto 
            rounded-lg 
            bg-slate-50 
            bg-opacity-10
            hover:shadow-xl
            hover:-translate-y-2
            hover:-skew-x-3
            hover:shadow-slate-800
            hover:bg-slate-700
            hover:text-indigo-200
            hover:bg-opacity-50
            transform
            transition
            duration-300
            ease-in-out
            flex
            justify-center
            items-center
            space-x-4
            '
            >
              <HammerIcon />
              <p>
                Apply for a job
              </p>
            </button>
              <button
            onClick={openCModal}
            className='
            w-full
            px-3
            h-[50px]
            font-robot
            font-light
            outline-none
            focus:outline-none
            text-xl
            text-sky-50 
            mx-auto 
            rounded-lg 
            bg-slate-50 
            bg-opacity-10
            hover:shadow-xl
            hover:translate-y-2
            hover:-skew-x-3
            hover:shadow-slate-800
            hover:bg-slate-700
            hover:text-indigo-200
            hover:bg-opacity-50
            transform
            transition
            duration-300
            ease-in-out
            flex
            justify-center
            items-center
            space-x-4
            '
            >
              <PenIcon />
              <p>
                Apply for a course
              </p>
            </button>
              </span>
            </div>
          </div>
        </div>
        {/**end of entrance message */}
        {/**a computer with code picture here */}
      </div>
      {/**end of top */}
      <div className="
      h-full
      bg-gradient-to-b
      from-red-100
      to-amber-300
      ">
        {/**div that will showcase the course that they specialize in */}
        <div className="
        scrollableCourses
        ">
          {/**message about the courses */}
          <div className="
          h-[100%]
          w-full
          bg-sky-600
          bg-opacity-20
          flex
          flex-col
          justify-evenly
          px-5
          py-7
          ">
            <h1 className="
            courseTitleHeader
            ">
              From zero to hero, in a short time.
            </h1>
            <p className="
            courseTitleMess
            ">
              Learn and master skills in the world of software by 
              checking our course sites at the right, all taught 
              by the best instructors around, and see job 
              offerings that fit your expertise. 
            </p>
          </div>
          {/**div with the courses */}
          <div className="
          h-[100%]
          bg-slate-700
          bg-opacity-30
          flex
          items-center
          space-x-14
          w-full
          overflow-x-scroll
          scrollbar-thin
          scrollbar-track-slate-700
          scrollbar-thumb-indigo-400      
          ">
            {course_card && course_card?.course_names?.map(data => (
              <CourseCard 
              backgroundImage={data?.bgImg}
              title={data?.title}
              />
            ))}
            </div>
        </div>
        {/**end of the div */}
        <div className="
        h-[90%]
        bg-gradient-to-br
        from-slate-700
        to-violet-800
        place-items-start
        px-3
        py-2
        ">
          <h1 className="
          font-path-ex 
          font-thin
          text-3xl
          pl-4 
          py-3
          text-indigo-100">
            Reviews
          </h1>
          <div className="
            reviewCard
          ">
            {reviews && reviews?.reviews.map(data => (
              <ReviewCard 
              name={data?.name}
              image={data?.image}
              review={data?.review}
              date={data?.date}
              />
            ))}
          </div>
        </div>
      </div>
      </main>
          </div>
          {(aboutModal || closeAboutModal) && (
            <div className="
            h-full
            w-full
            bg-slate-800
            bg-opacity-50
            fixed
            inset-0
            z-50            
            flex
            items-center
            ">
              
                <div className={`
                lg:w-[80%]
                w-[90%]
                h-full
              border-r-2
              border-emerald-300
              bg-emerald-700
              transition-transform
              ease-in-out
              duration-300
              space-y-3
              ${openAboutModal && !closeAboutModal ? 'translate-x-0' : '-translate-x-full' }
              `}
              onTransitionEnd={() => {
                if(closeAboutModal){
                  setAboutModal(false)
                  setCloseAboutModal(false)
                }
              }}>
                <AboutDiv 
                closeAboutModal={closeAboutModal}
                setCloseAboutModal={setCloseAboutModal}
                />
              </div>
              <div 
              onClick={() => setCloseAboutModal(true)}
              className="lg:w-[20%] w-[10%] h-full"/>
            </div>
          )}
          {(managementModal || closeManagementModal) && (
            <div className="h-full w-full bg-slate-800 bg-opacity-50 fixed inset-0 z-50 flex items-center ">
              <div onClick={() => setCloseManagementModal(true)} className="w-[20%] h-full"></div>
              <div className= {`
                w-[80%] 
                h-full 
                border-l-2 
                border-pink-300 
                bg-pink-700 
                transition-transform 
                ease-in-out 
                duration-300 
                ${openManagementModal && !closeManagementModal ? '-translate-x-0' : 'translate-x-full'}
                `}
                onTransitionEnd={() => {
                  if(closeManagementModal){
                    setManagementModal(false)
                    setCloseManagementModal(false)
                  }
                }}
                >
                <div className="
                h-full
                w-full
                bg-slate-700
                bg-opacity-80
                ">
                  <header className="bg-slate-800 bg-opacity-95 h-[8%] w-full border-b-2 border-pink-300 px-6 flex items-center justify-between">
                    <h3 className="font-montserr font-semibold text-2xl text-pink-300 hover:-skew-x-6 hover:font-bold transition-transform duration-500 ease-in-out">
                      Management
                    </h3>
                    <button 
                    onClick={() => setCloseManagementModal(true)}
                    className="focus:outline-none text-lg rounded-full p-3 border-2 border-red-500 text-red-500 hover:-skew-x-6 hover:border-red-700 hover:text-red-700 transition-all transform duration-300 ease-in-out">
                      <CloseIcon />
                    </button>
                  </header>
                  <div className="h-[92%] w-full mx-auto flex flex-col items-start py-3 space-y-3 ">
                    {/**div that shows the team */}
                    <ManagementDiv 
                    closeManagementModal={closeManagementModal}
                    setCloseManagementModal={setCloseManagementModal}
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    viewMentor={viewMentor}
                    setViewMentor={setViewMentor}
                    closeViewMentor={closeViewMentor}
                    setCloseViewMentor={setCloseViewMentor}
                    scrollRef={scrollRef}
                    />
                  </div>
                </div>
                </div>
            </div>
          )}
          {(courseModal || closeCourseModal) && (
            <div className="h-full w-full bg-slate-800 bg-opacity-50 fixed inset-0 z-50 flex flex-col items-center">
              <div className="w-full h-[94%]">
              <div className={`
                w-[98%]
                mx-auto
                h-full
                bg-slate-800 
                border-2 
                border-amber-500 
                transition-transform
                ease-in-out
                duration-300
                ${openCourseModal && !closeCourseModal ? 'translate-y-0' : '-translate-y-full'}
                `}
                onTransitionEnd={() => {
                  if(closeCourseModal){
                    setCourseModal(false)
                    setCloseCourseModal(false)
                  }
                }}
                >
                  <header className="h-[8%] w-full bg-slate-800 border-b-2 border-amber-500 px-4 flex items-center justify-between ">
                  <h3 className="font-montserr font-semibold text-2xl text-amber-500 hover:-skew-x-6 hover:font-bold transition-transform duration-500 ease-in-out">
                      Course
                    </h3>
                    <button 
                    onClick={() => setCloseCourseModal(true)}
                    className="focus:outline-none text-lg rounded-full p-3 border-2 border-red-500 text-red-500 hover:-skew-x-6 hover:border-red-700 hover:text-red-700 transition-all transform duration-300 ease-in-out">
                      <CloseIcon />
                    </button>
                  </header>
                  <div className="h-[92%] w-full ">
                    <Course />
                  </div>
                </div>
              </div>
              <div 
              onClick={() => setCloseCourseModal(true)}
              className="w-full h-[3%]"></div>
              <div 
              onClick={() => setCloseCourseModal(true)}
              className="w-full h-[3%]"></div>
            </div>
          )}
          {(jobModal || closeJobModal) && (
            <div className="h-full w-full bg-slate-800 bg-opacity-50 fixed inset-0 z-50 flex flex-col items-center">
                            <div 
              onClick={() => setCloseJobModal(true)}
              className="w-full h-[3%]"></div>
              <div 
              onClick={() => setCloseJobModal(true)}
              className="w-full h-[3%]"></div>
              <div className="w-full h-[94%] flex items-center">
              <div className={`
                w-[98%]
                mx-auto
                h-full
                bg-slate-800 
                border-2 
                border-sky-500 
                transition-transform
                ease-in-out
                duration-300
                ${openJobModal && !closeJobModal ? '-translate-y-0' : 'translate-y-full'}
                `}
                onTransitionEnd={() => {
                  if(closeJobModal){
                    setJobModal(false)
                    setCloseJobModal(false)
                  }
                }}
                >
                  <header className="h-[7%] w-full bg-slate-800 border-b-2 border-sky-500 px-4 flex items-center justify-between ">
                  <h3 className="font-montserr font-semibold text-2xl text-sky-500 hover:-skew-x-6 hover:font-bold transition-transform duration-500 ease-in-out">
                      Job
                    </h3>
                    <button 
                    onClick={() => setCloseJobModal(true)}
                    className="focus:outline-none text-lg rounded-full p-3 border-2 border-red-500 text-red-500 hover:-skew-x-6 hover:border-red-700 hover:text-red-700 transition-all transform duration-300 ease-in-out">
                      <CloseIcon />
                    </button>
                  </header>
                  <div className="h-[93%] w-full">
                    <JobFeed />
                  </div>
                </div>
              </div>
            </div>
          )}
          </>
  )
}

