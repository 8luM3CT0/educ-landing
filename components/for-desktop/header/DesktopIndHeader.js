//front-end
import React from 'react'
import {FcAcceptDatabase} from 'react-icons/fc'
import {FaConnectdevelop} from 'react-icons/fa'
import {
    BulbIcon, 
    CapIcon, 
    HammerIcon, 
    InfoIcon, 
    LoginIcon, 
    PeopleIcon, 
    SiBmcsoftware, 
    WorkIcon,
    CustomDropdown
} from '../../'
//back-end
import { useRouter } from 'next/router'
import {useRef ,useState, useEffect} from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { creds, store, provider } from '../../../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function DesktopIndHeader({
    openAModal,
    openMModal,
    openCModal,
    openJModal,
    options = [],
    onSelect
}) {
    const handleDropdownSelect = value => {
        console.log('Selected', value)
    }
    
const [user] = useAuthState(creds)
const date = new Date().toLocaleString()
const logIn = (e) => {
    e.preventDefault()

    creds.signInWithPopup(provider).catch(err => console.error(`Error in signing in >>>>`, err))
}

useEffect(() => {
    if(user){
        store.collection('educ_users').doc(user?.uid).set({
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            email: user?.email,
            loggedInOn: date
        }, {
            merge: true
        })
    }
}, [user])

const logOut = e => {
    e.preventDefault()

    creds.signOut().catch(err => console.error(`Error in signing out >>>>`, err))
}

const [dropDown, setDropDown] = useState(false)
const [supportModal, setSupportModal] = useState(false)
const [supportText, setSupportText] = useState('')

const sendIssue = e => {
    e.preventDefault()

    store.collection('issues').add({
        supportText,
        addedOn: date,
        addedBy: user?.displayName,
        picOfUser: user?.photoURL
    })

    setSupportText('')
    setSupportModal(false)
}

    return (
    <>
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
            <span className="
            w-[25%]
            ">
                <SiBmcsoftware
            style={{
                color: 'gold',
                fontSize: '2.0em',
                cursor: 'pointer'
            }}
            className='hover:shadow-2xl transform transition duration-200'
            />
            </span>
            <span className="
            w-[75%]
            justify-evenly
            flex 
            items-center
            space-x-11
            ">
         <button 
         onClick={openAModal}
        className="
        diHeaderBtn
        hover:text-emerald-600
        hover:border-emerald-600
        transform
        transition
        duration-300
        ease-in-out
        ">  <InfoIcon />
        </button>
        <button 
        onClick={openMModal}
        className="
        diHeaderBtn
        hover:text-pink-600
        hover:border-pink-600
        transform
        transition
        duration-300
        ease-in-out
        ">  <PeopleIcon />
        </button>
        <button  
        onClick={openCModal}
        className="
        diHeaderBtn
        hover:text-amber-600
        hover:border-amber-600
        transform
        transition
        duration-300
        ease-in-out
        ">  <CapIcon />
        </button>
        <button 
        onClick={openJModal}
        className="
        diHeaderBtn
        hover:text-sky-400
        hover:border-sky-400
        transform
        transition
        duration-300
        ease-in-out
        ">  
        <WorkIcon />
        </button>
            </span>
        </span>

        {user ? (
            <>
            <button 
            onClick={() => {
                if(dropDown) setDropDown(false) 
                else setDropDown(true)
            }}
            className={`focus:outline-none border-0 flex flex-col items-center font-playfair-disp font-semibold text-sky-300 hover:text-sky-500 hover:underline transform transition-all duration-300 ease-in-out ${dropDown && 'text-sky-100 underline'}`}>
                <img 
                src={user?.photoURL} 
                alt="" 
                className="rounded-3xl h-[35px] w-[35px]" />
                <h1 className="text-sm">
                    {user?.displayName}
                </h1>
            </button>
            {dropDown && (
                <div className="absolute top-full right-0 z-50 min-h-[120px] max-h-[120px] min-w-[200px] max-w-[200px] py-4 bg-slate-800 bg-opacity-[0.87] rounded border border-t-amber-400 border-b-emerald-400 border-l-sky-400 border-r-indigo-400 shadow-lg shadow-slate-800 flex flex-col items-center">
                    <button 
                    onClick={() => {
                        setSupportModal(true)
                        setDropDown(false)
                    }}
                    className="focus:outline-none h-[50px] w-[85%] mx-auto font-merriweather font-semibold rounded bg-slate-700  bg-opacity-70 text-sky-400 border border-sky-400 hover:text-sky-600 hover:border-sky-600 transform transition-all duration-300 ease-in-out">
                        Support
                    </button>
                </div>
            )}
            </>
        ): (
        <span 
        onClick={logIn}
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
         <LoginIcon 
         style={{
            fontSize: '1.3em',
            color: 'goldenrod'
         }}
         />
        <h1 className="    
    font-playfair-disp
    font-bold
    text-sm
    text-slate-300">
        Login
        </h1>
        </span>
        )}
    </div>
    {supportModal && (
        <div className="fixed inset-0 z-50 bg-slate-800 bg-opacity-[0.77] h-screen w-screen flex items-center overflow-hidden">
            <div onClick={() => setSupportModal(false)} className="h-full w-[14.5%]"></div>
            <div className="h-full w-[71%] flex flex-col items-center">
                <div className="h-[75%] bg-slate-800 bg-opacity-[0.93] w-full border-2 border-t-sky-400 border-b-amber-400 border-l-emerald-400 border-r-indigo-400 rounded">
                    <header className="h-[10%] w-full flex items-center justify-between border-b-2 border-slate-400 px-4 py-3">
                        <h2 className="text-lg text-slate-400 font-merriweather font-semibold">
                            Support modal
                        </h2>
                    <button 
                    onClick={() => setSupportModal(false) }
                    className="flex items-center focus:outline-none border border-red-500 px-3 rounded text-lg text-red-500 hover:border-red-700 hover:bg-red-700 hover:text-slate-900 transition-all transform duration-300 ease-in-out">
                        X
                    </button>
                    </header>
                    <div className="h-[90%] w-full px-4 py-3 space-y-3 flex flex-col items-start">
                        <h3 className="font-merriweather font-semibold text-slate-400 text-base">
                            What seems to be the issue ?
                        </h3>
                        <textarea 
                        value={supportText}
                        onChange={e => setSupportText(e.target.value)}
                        placeholder={`Issue:`} 
                        className='h-[75%] w-[85%] px-3 py-2 mx-auto focus:outline-none bg-slate-700 bg-opacity-75 rounded-lg font-playfair-disp font-normal text-lg text-sky-400 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-sky-400'
                        ></textarea>
                        <span className="h-[10%] w-[95%] mx-auto flex items-center justify-between">
                            <span></span>
                            <button 
                            disabled={!supportText} 
                            onClick={sendIssue}
                            className="h-full w-[30%] px-4 py-1 rounded font-merriweather font-semibold text-slate-400 text-lg border border-slate-400 hover:text-slate-100 hover:border-slate-100 transform transition duration-300 ease-in-out">
                                Send
                            </button>
                        </span>
                    </div>
                </div>
                <div onClick={() => setSupportModal(false)} className="h-[25%] w-full"></div>
            </div>
            <div onClick={() => setSupportModal(false)} className="h-full w-[14.5%]"></div>
        </div>
    )}
    </>
  )
}

export default DesktopIndHeader