//front-end
import React from "react"
import { SiBmcsoftware } from "react-icons/si"
//back-end
import {useEffect, useRef, useState} from 'react'

function CustomDropdown ({options = [], onSelect, userEmail, userPic}) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const dropdownRef = useRef()

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

    const handleSelect = option => {
        setSelected(option)
        setDropdownOpen(false)
        onSelect?.option
    }

    useEffect(() => {
        const handleClickOutside = e => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
     }, [])
    return (
        <div className="relative w-64" ref={dropdownRef}>
            <button 
            onClick={toggleDropdown} 
            className="border-0 flex flex-col items-center px-3 py-2 outline-none focus:outline-none font-playfair-disp font-normal text-sm text-sky-100 hover:border-b hover:border-sky-400 hover:text-sky-400 transform transition-all duration-300 ease-in-out">
                <img src={userPic} 
                alt="" 
                className="h-[30px] w-[30px] rounded-3xl" />
                <h3>
                    {userEmail}
                </h3>
            </button>
            {dropdownOpen && (
                <ul className="absolute left-0 right-0 z-10 mt-1 bg-slate-800 border rounded border-indigo-500 shadow shadow-indigo-300 max-h-60 overflow-y-auto">
                    {options.map((option, index) => (
                        <li 
                        key={index}
                        onClick={() => handleSelect(option)}
                        className="text-base font-playfair-disp font-normal text-indigo-300 hover:text-indigo-600 transform transition-all duration-300 ease-in-out px-3">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}


  export default CustomDropdown