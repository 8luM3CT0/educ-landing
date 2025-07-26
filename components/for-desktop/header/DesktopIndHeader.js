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
        ">  <WorkIcon />
        </button>
            </span>
        </span>

        {user ? (
            <button className='border-0 flex flex-col items-center font-playfair-disp font-semibold text-sky-100 hover:text-sky-500 hover:underline transform transition-all duration-300 ease-in-out'>
                <img 
                src={user?.photoURL} 
                alt="" 
                className="rounded-3xl h-[35px] w-[35px]" />
                <h1 className="text-sm">
                    {user?.displayName}
                </h1>
            </button>
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
    </>
  )
}

export default DesktopIndHeader