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
  reviews
} from '../components/'
//back-end
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds } from '../backend/firebase'


export default function Home () {
  const router = useRouter()
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
 //for about modal
   const [openAboutModal, setOpenAboutModal] = useState(false)
   const [aboutModal, setAboutModal] = useState(false)
   const [closeAboutModal, setCloseAboutModal] = useState(false)
   //for management modal
   const [managementModal, setManagementModal] = useState(false)
   const [openManagementModal, setOpenManagementModal] = useState(false)
   const [closeManagementModal, setCloseManagementModal] = useState(false)
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
      h-full
      w-full
      overflow-y-scroll
      scrollbar-hide
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
          {/**div in the middle to show message  */}
          <div className="
          w-[90%]
          mx-auto
          bg-sky-50
          bg-opacity-10
          shadow-md
          shadow-slate-900
          rounded-3xl
          h-[90%]
          flex
          items-center
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
            flex
            items-center
            ">
              <button
            onClick={openJModal}
            className='
            w-[40%]
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
            w-[40%]
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
              router_link={data?.router_link}
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
                w-[50%]
                h-full
              border-r-2
              border-sky-300
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
                <div className="h-full w-full bg-slate-700 bg-opacity-80">
                  <header className="bg-slate-800 bg-opacity-95 h-[7%] w-full border-b-2 border-sky-400 px-6 flex items-center justify-between">
                    <h3 className="font-montserr font-semibold text-2xl text-sky-400 hover:-skew-x-6 hover:font-bold transition-transform duration-500 ease-in-out">
                      About
                    </h3>
                    <button 
                    onClick={() => setCloseAboutModal(true)}
                    className="focus:outline-none text-xl rounded-full p-3 border-2 border-red-500 text-red-500 hover:-skew-x-6 hover:border-red-700 hover:text-red-700 transition-all transform duration-300 ease-in-out">
                      <CloseIcon />
                    </button>
                  </header>
                  <div className="h-[93%] w-full flex flex-col items-center space-y-3 px-4 py-3">
                  <span className="flex flex-col items-start w-full space-y-3">
                      <h3 className="font-ibm-sans font-semibold text-xl text-emerald-200">
                        About us
                      </h3>
                      <span className="w-[85%] px-3 py-2 rounded-md group">
                        <p className="font-ubunto font-normal text-base text-emerald-500 transition-transform duration-300 ease-in-out ">
                        Located in the heart of Silicon Valley, our institution in Los Altos stands at the forefront of technology education, specializing in software engineering and data science. We are driven by a mission to equip learners with the technical expertise, critical thinking skills, and ethical foundations needed to thrive in today’s fast-evolving digital world.

Our programs are designed in collaboration with industry leaders, ensuring real-world relevance and immediate applicability. Whether you're preparing for a new career, upskilling for advancement, or exploring the frontiers of artificial intelligence and big data, we provide the tools, mentorship, and community to help you succeed.

With small class sizes, expert faculty, and a commitment to hands-on learning, we foster an environment where innovation flourishes and students are empowered to make meaningful impact—locally and globally.


                        </p>
                      </span>
                    </span>
                    <span className="flex flex-col items-start w-full space-y-3">
                      <h3 className="font-ibm-sans font-semibold text-xl text-emerald-200">
                        Vision statement
                      </h3>
                      <span className="w-[85%] px-3 py-2 rounded-md group">
                        <p className="font-ubunto font-normal text-base text-emerald-500 transition-transform duration-300 ease-in-out ">
                        To become a globally recognized center of excellence in software engineering and data science education, empowering learners to innovate, lead, and solve real-world problems through advanced technology and ethical data practices.
                        </p>
                      </span>
                    </span>
                    <span className="flex flex-col items-start w-full space-y-3">
                      <h3 className="font-ibm-sans font-semibold text-xl text-emerald-200">
                        Mission statement
                      </h3>
                      <span className="w-[85%] px-3 py-2 flex flex-col items-start space-y-3 rounded-md group">
                        <h4 className="font-ubunto font-normal text-base text-emerald-500 transition-transform duration-300 ease-in-out ">
                          Our mission is to cultivate a new generation of skilled software and data professionals by delivering industry-relevant, research-driven, and accessible education. We are committed to:
                          </h4>
                          <span className="flex flex-col items-center w-[90%] mx-auto space-y-2">
                            <p className="font-ubuntu-mono font-bold text-emerald-100 text-base">
                            Providing cutting-edge curricula in software development, data science, artificial intelligence, and related fields.
                            </p>
                            <p className="font-ubuntu-mono font-bold text-emerald-100 text-base">
                            Fostering critical thinking, innovation, and lifelong learning among students.
                            </p>
                            <p className="font-ubuntu-mono font-bold text-emerald-100 text-base">
                            Partnering with industry leaders to ensure practical experience and career readiness.
                            </p>
                            <p className="font-ubuntu-mono font-bold text-emerald-100 text-base">
                            Promoting ethical and responsible use of technology and data for the betterment of society.
                            </p>
                          </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div 
              onClick={() => setCloseAboutModal(true)}
              className="w-[50%] h-full"/>
            </div>
          )}
          {(managementModal || closeManagementModal) && (
            <div className="h-full w-full bg-slate-800 bg-opacity-50 fixed inset-0 z-50 flex items-center ">
              <div onClick={() => setCloseManagementModal(true)} className="w-[50%] h-full"></div>
              <div className= {`
                w-[50%] 
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
                "></div>
                </div>
            </div>
          )}
          {(courseModal || closeCourseModal) && (
            <div className="h-full w-full bg-slate-800 bg-opacity-50 fixed inset-0 z-50 flex flex-col items-center">
              <div 
              onClick={() => setCloseCourseModal(true)}
              className="w-full h-[5%]"></div>
              <div className="w-full h-[90%] flex items-center">
              <div onClick={() => setCloseCourseModal(true)} 
              className="w-[5%] h-full"></div>
              <div className={`
                w-[90%]
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
                ></div>
                <div onClick={() => setCloseCourseModal(true)} 
                className="w-[5%] h-full"></div>
              </div>
              <div 
              onClick={() => setCloseCourseModal(true)}
              className="w-full h-[5%]"></div>
            </div>
          )}
          {(jobModal || closeJobModal) && (
            <div className="h-full w-full bg-slate-800 bg-opacity-50 fixed inset-0 z-50 flex flex-col items-center">
              <div 
              onClick={() => setCloseJobModal(true)}
              className="w-full h-[5%]"></div>
              <div className="w-full h-[90%] flex items-center">
                <div 
                onClick={() => setCloseJobModal(true)}
                className="w-[5%] h-full"></div>
              <div className={`
                w-[90%]
                mx-auto
                h-[90%] 
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
                ></div>
                <div 
                onClick={() => setCloseJobModal(true)}
                className="w-[5%] h-full"></div>
              </div>
              <div 
              onClick={() => setCloseJobModal(true)}
              className="w-full h-[5%]"></div>
            </div>
          )}
          </>
  )
}

