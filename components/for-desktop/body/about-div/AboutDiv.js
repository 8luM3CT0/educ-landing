//front-end
import React from 'react'
import { CloseIcon } from '../../..'
//back-end

function AboutDiv({
    closeAboutModal,
    setCloseAboutModal
}) {
  return (
    <div className="h-full w-full bg-slate-700 bg-opacity-80">
                  <header className="bg-slate-800 bg-opacity-95 h-[5%] w-full border-b-2 border-emerald-300 px-6 flex items-center justify-between">
                    <h3 className="font-montserr font-semibold text-2xl text-emerald-300 hover:-skew-x-6 hover:font-bold transition-transform duration-500 ease-in-out">
                      About Us
                    </h3>
                    <button 
                    onClick={() => setCloseAboutModal(true)}
                    className="focus:outline-none text-xl rounded-full p-3 border-2 border-red-500 text-red-500 hover:-skew-x-6 hover:border-red-700 hover:text-red-700 transition-all transform duration-300 ease-in-out">
                      <CloseIcon />
                    </button>
                  </header>
                  <div className="h-[95%] lg:overflow-hidden overflow-y-scroll scrollbar-hide w-full flex flex-col items-center justify-evenly space-y-3 px-4 py-3">
                    <span className="bg-cover bg-no-repeat bg-about w-full rounded">
                    <span className="flex flex-col items-start w-full space-y-3 px-3 bg-slate-700 bg-opacity-80">
                      <h3 className="font-gothic-cond font-semibold text-3xl text-emerald-200">
                        Outstanding & amiable
                      </h3>
                      <span className="min-h-[50px] max-h-[350px] overflow-y-scroll scrollbar-hide scrollbar-track-slate-800 scrollbar-thumb-emerald-400 w-[85%] px-3 py-2 rounded-md group">
                        <p className="font-gothic-expo font-normal text-base text-emerald-50 transition-transform duration-300 ease-in-out ">
                        Located in the heart of Silicon Valley, our institution in Los Altos stands at the forefront of technology education, specializing in software engineering and data science. We are driven by a mission to equip learners with the technical expertise, critical thinking skills, and ethical foundations needed to thrive in today’s fast-evolving digital world.

Our programs are designed in collaboration with industry leaders, ensuring real-world relevance and immediate applicability. Whether you're preparing for a new career, upskilling for advancement, or exploring the frontiers of artificial intelligence and big data, we provide the tools, mentorship, and community to help you succeed.

With small class sizes, expert faculty, and a commitment to hands-on learning, we foster an environment where innovation flourishes and students are empowered to make meaningful impact—locally and globally.


                        </p>
                      </span>
                    </span>
                  </span>
                    <span className="bg-no-repeat bg-cover bg-about-alt w-full rounded">
                        <span className="flex flex-col items-start w-full space-y-3 px-3 bg-slate-700 bg-opacity-80">
                      <h3 className="font-gothic-cond font-semibold text-3xl text-emerald-200">
                        Vision
                      </h3>
                      <span className="min-h-[50px] max-h-[350px] overflow-y-scroll scrollbar-hide scrollbar-track-slate-800 scrollbar-thumb-emerald-400 w-[85%] px-3 py-2 rounded-md group">
                        <p className="font-gothic-expo font-normal text-base text-emerald-50 transition-transform duration-300 ease-in-out ">
                        To become a globally recognized center of excellence in software engineering and data science education, empowering learners to innovate, lead, and solve real-world problems through advanced technology and ethical data practices.
                        </p>
                      </span>
                    </span>
                    </span>
                <span className="bg-cover bg-no-repeat bg-about-alt-sec w-full rounded">
                    <span className="flex flex-col items-start w-full space-y-3 px-3 bg-slate-700 bg-opacity-80">
                      <h3 className="font-gothic-cond font-semibold text-3xl text-emerald-200">
                        Mission statement
                      </h3>
                      <span className="min-h-[50px] max-h-[350px] overflow-y-scroll scrollbar-hide scrollbar-track-slate-800 scrollbar-thumb-emerald-400 w-[85%] px-3 py-2 flex flex-col items-start space-y-3 rounded-md group">
                        <h4 className="font-gothic-expo font-normal text-base text-emerald-50 transition-transform duration-300 ease-in-out ">
                          Our mission is to cultivate a new generation of skilled software and data professionals by delivering industry-relevant, research-driven, and accessible education. We are committed to:
                          </h4>
                          <span className="flex flex-col items-start w-[80%] mx-auto space-y-2">
                            <p className="font-gothic-exp font-light text-emerald-50 text-sm">
                            Providing cutting-edge curricula in software development, data science, artificial intelligence, and related fields.
                            </p>
                            <p className="font-gothic-exp font-light text-emerald-50 text-sm">
                            Fostering critical thinking, innovation, and lifelong learning.
                            </p>
                            <p className="font-gothic-exp font-light text-emerald-50 text-sm">
                            Partnering with industry leaders to ensure practical experience and career readiness.
                            </p>
                            <p className="font-gothic-exp font-light text-emerald-50 text-sm">
                            Promoting ethical and responsible use of technology and data for the betterment of society.
                            </p>
                          </span>
                      </span>
                    </span>
                </span>
                  </div>
                </div>
  )
}

export default AboutDiv
