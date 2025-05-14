//front-end
import React from 'react'
//back-end
import { courses } from '../../..'

function ManagementDiv({
    closeManagementModal,
    setCloseManagementModal,
    isHovered,
    setIsHovered,
    viewMentor,
    setViewMentor,
    closeViewMentor,
    setCloseViewMentor,
    scrollRef
}) {
  return (
    <>
     <div 
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="
                    h-[50%] group bg-slate-900 bg-opacity-20 w-[95%] mx-auto flex items-center overflow-x-scroll scrollbar-hide space-x-7
                    ">
                      {courses?.lecturers && courses?.lecturers.map(lecturer => (
                        <div 
                        key={lecturer?.id}
                        style={{
                          backgroundImage: `url(${lecturer.lecpic})`
                        }}
                        className="
                        h-full
                        min-w-[400px]
                        max-w-[400px]
                        rounded
                        bg-cover
                        bg-no-repeat
                        flex
                        flex-col
                        items-end
                        transition-all
                        duration-300
                        ease-in-out
                        blur-sm
                        group
                        group-hover:blur-none
                        ">
                          <span className="
                          h-[70%]
                          "></span>
                          <span className="
                          h-[30%]
                          space-y-4
                          w-full
                          mx-auto
                          bg-slate-800
                          bg-opacity-60
                          rounded
                          group-hover:bg-opacity-90
                          transition-all
                          duration-300
                          ease-in-out
                          px-4
                          py-3
                          group
                          flex
                          flex-col
                          items-center
                          ">
                            <h3 className="font-montserr font-semibold text-xl text-pink-100 group-hover:text-pink-300">
                              {lecturer.name}
                            </h3>
                            <button 
                            disabled={viewMentor}
                            onClick={() => setViewMentor(true)}
                            className="
                            h-[40%]
                            w-[85%]
                            mx-auto
                            rounded
                            bg-slate-900
                            text-pink-800
                            font-ibm-sans
                            font-semibold
                            focus:outline-none
                            border-2
                            border-pink-800
                            hover:border-pink-200
                            hover:bg-slate-800
                            transition-all
                            duration-300
                            ease-in-out
                            ">
                              View
                            </button>
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="
                    h-[50%] w-[95%] mx-auto bg-slate-900 bg-opacity-20 rounded-lg
                    ">
                      {(viewMentor || closeViewMentor) && (
                        <div 
                        className={`
                          h-full 
                          w-full
                          flex
                          items-center
                          transition-all 
                          duration-700 
                          ease-in-out
                          transform
                          origin-top
                          ${!closeViewMentor ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-5'}
                          `}
                          onTransitionEnd={() => {
                            if(closeViewMentor){
                              setViewMentor(false)
                              setCloseViewMentor(false)
                            }
                          }}
                          >
                            <span 
                            style={{
                              backgroundImage: `url(${'https://i.pinimg.com/736x/3d/85/a0/3d85a04596ee3070cffb5362bffa7202.jpg'})`
                            }}
                            className="h-full w-[50%] bg-cover bg-no-repeat "></span>
                            <span className="
                            h-full
                            w-[50%]
                            flex
                            flex-col
                            items-start
                            ">
                              <span className="
                              h-[90%]
                              space-y-2
                              w-full
                              flex
                              flex-col
                              items-start
                              border
                              border-slate-600
                              rounded
                              ">
                                <span className="w-full px-3 py-3 bg-slate-800 bg-opacity-70">
                                <h3 className="font-font-robot font-semibold text-lg text-slate-100">
                                  Mentor Name
                                </h3>
                                </span>
                                <span className="
                                h-full
                                w-full
                              overflow-y-scroll
                              scrollbar-hide
                              bg-slate-800
                              bg-opacity-30
                                ">
                                  <p className="font-montserr text-base text-slate-100 font-bold px-3 py-2">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt pretium augue, in lacinia felis. Nunc vel dui ante. Nunc non odio commodo, feugiat lorem ac, interdum massa. Aenean neque nibh, rutrum non tempor quis, sollicitudin nec nulla. Etiam ut arcu bibendum, euismod nisl eget, facilisis dui. Donec malesuada imperdiet dui, eget porta ipsum ultrices sit amet. Nunc efficitur lacinia mi, eu suscipit quam ultrices sit amet. In elementum urna in mattis tristique. Aliquam non enim sapien. Vestibulum fringilla, dolor non tristique venenatis, purus felis iaculis mauris, condimentum blandit eros magna pulvinar orci. Suspendisse nec massa eleifend, finibus nunc eget, suscipit ex. Suspendisse potenti. Suspendisse dignissim erat diam.

Phasellus dapibus nibh elementum ipsum placerat interdum. Nullam venenatis ut augue at congue. Phasellus vehicula lacus nec nisl luctus pharetra. Duis aliquet sit amet velit non tempor. Suspendisse pellentesque neque enim, ut aliquet erat hendrerit vitae. In ac tempus sapien. Suspendisse tristique, ex vitae condimentum blandit, elit elit faucibus turpis, vel consequat quam nunc pellentesque ex. Vestibulum dolor sem, rhoncus id metus et, egestas fringilla arcu.

Vestibulum vel erat eu lectus venenatis pellentesque. Quisque luctus rutrum tempus. Nulla dignissim mi nec maximus imperdiet. Fusce velit nisl, lacinia sed magna non, posuere mollis mauris. Donec viverra ullamcorper lectus. Proin consequat euismod magna. Cras pharetra semper gravida. Curabitur sit amet imperdiet mi. In suscipit eleifend odio vitae pretium. Proin iaculis tempor imperdiet. Sed gravida quis massa nec dictum. Nam et dui dictum metus facilisis semper vel in erat. Nunc malesuada tellus sit amet orci sodales, a porttitor est malesuada. Pellentesque pharetra lectus condimentum, tincidunt odio eget, rutrum mauris. Morbi rhoncus, sem nec aliquet fringilla, dolor ipsum feugiat neque, non ultrices augue nisi a enim.

Sed vel augue in erat pulvinar fermentum sagittis a est. Ut dignissim massa erat, id fermentum lorem aliquet id. Morbi placerat porta nisi id euismod. Aliquam condimentum nisi eu nisl viverra, vel dapibus orci bibendum. Maecenas et tellus maximus enim laoreet ultricies. Maecenas consequat maximus metus vel ornare. Vivamus non velit augue. Aenean condimentum luctus odio ac dictum.

Fusce elit purus, hendrerit at pretium a, pellentesque nec metus. Etiam pretium semper purus, et placerat nisi posuere nec. Sed id volutpat nisi. In justo tellus, imperdiet elementum consectetur quis, ornare id risus. Fusce hendrerit ipsum eget lectus lacinia posuere. Proin facilisis id erat laoreet blandit. Phasellus eu diam a lectus imperdiet finibus. Donec commodo magna eget libero consectetur, vel tristique neque porta. Praesent at laoreet eros. Vestibulum congue luctus ligula. Vestibulum et ultricies massa.


                                  </p>
                                </span>
                              </span>
                              <span 
                              onClick={() => setCloseViewMentor(true)}
                              className="
                              h-[10%]
                              w-full
                              flex
                              justify-center
                              items-center
                              border-2
                              bg-slate-700
                              border-pink-600
                              text-pink-600
                              bg-opacity-30
                              hover:bg-slate-900
                              hover:bg-opacity-5
                              hover:text-pink-300
                              hover:border-pink-300
                              transition-all
                              duration-300
                              ease-in-out
                              cursor-pointer
                              ">
                                <p className="
                                font-font-robot
                                font-semibold
                                text-lg
                                ">
                                  Close
                                </p>
                              </span>
                            </span>
                          </div>
                      )}
                    </div> 
    </>
  )
}

export default ManagementDiv
