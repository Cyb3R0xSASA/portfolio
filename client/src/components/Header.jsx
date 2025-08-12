import React, { useState, useRef, useEffect } from 'react'
import { routes } from '../data/data.js'
import { Link, useLocation } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io"
import { IoCloseSharp } from "react-icons/io5"

const Header = () => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef()

    const toggleMenu = () => setIsOpen(prev => !prev)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-opacity-95 bg-gradient-to-b' style={{ backgroundImage: 'linear-gradient(to right, #121212, #1e1e1e)' }}>
            <div className='border-b border-[#c41e3a] border-opacity-20'>
                <div className='container mx-auto px-4 md:px-2 py-4 flex sm:flex-col items-center justify-between gap-2'>
                    <h1 className='text-white text-2xl font-bold cursor-pointer flex gap-2'>
                        Mohmed <span className='text-[#c41e3a]'>Mostafa</span>
                    </h1>

                    <ul className='hidden sm:flex space-x-3 md:space-x-6 text-white font-bold'>
                        {routes.map(({ name, path }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className={`transition-colors duration-300 cursor-pointer ${location.pathname === path ? 'text-[#c41e3a]' : 'hover:text-[#c41e3a]'
                                        }`}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button onClick={toggleMenu} className='sm:hidden text-white cursor-pointer'>
                        {isOpen ? <IoCloseSharp size={34} /> : <IoIosMenu size={34} />}
                    </button>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`sm:hidden px-6 text-white font-bold transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
                    } `}
            >
                {routes.map(({ name, path }) => (
                    <Link
                        key={path}
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className={`block transition-colors duration-300 my-3 pb-2 border-b border-[#c41e3a] border-opacity-20 ${location.pathname === path ? 'text-[#c41e3a]' : 'hover:text-[#c41e3a]'
                            }`}
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Header
