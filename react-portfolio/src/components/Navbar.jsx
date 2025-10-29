import React, { useState } from 'react'
import { Link , NavLink} from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

return (
    <>
            <nav className='fixed top-0 left-0 right-0 z-50 bg-transparent'> 
            <div className='flex flex-wrap items-center justify-center py-4'>
                <div className='flex justify-between p-2 py-1.5 rounded-2xl shadow-lg shadow-gray-500/20 relative'  style={{ width: '70em', maxWidth: '90vw', height: '3.7em',backgroundColor: 'rgb(18, 18, 18)'}} >
                    <div className='flex items-center'>
                        <h1 className='text-lg sm:text-xl text-purple-300' style={{fontWeight:"bolder",fontFamily:"cursive"}}>Aditya</h1>
                    </div>

                    {/* Hamburger Menu Button (visible on mobile) */}
                    <div className='md:hidden flex items-center'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none'>
                            <div className='w-6 h-6 flex flex-col justify-center items-center'>
                                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'}`}></span>
                                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                            </div>
                        </button>
                    </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-3'>

                    <NavLink className='no-underline' to="/">
                        {({ isActive }) => (
                            <button className={isActive ? 'text-purple-600 border-b border-purple-600' : ''}>
                                HOME
                            </button>
                        )}
                    </NavLink>

                    <NavLink className='no-underline' to="/about">
                        {({ isActive }) => (
                            <button className={isActive ? 'text-purple-600 border-b border-purple-600' : ''}>
                                ABOUT
                            </button>
                        )}
                    </NavLink>

                    <NavLink className='no-underline' to="/projects">
                        {({ isActive }) => (
                            <button className={isActive ? 'text-purple-600 border-b border-purple-600' : ''}>
                                PROJECTS
                            </button>
                        )}
                    </NavLink>

                    
                    <div className='relative group'>
                        <button className='hover:text-purple-400 transition-colors duration-200'>
                            CONTACT
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className='absolute top-full right-0 mt-2 w-48 bg-black-800 rounded-lg shadow-lg invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-2 border-gray-600'>
                            <div className='py-2'>
                                <ul>
                                <li><a href='"mailto:aditya.mallick.1512@gmail.com"' target='_blank' rel='noopener noreferrer' 
                                   className='block px-4 py-2 text-white hover:[color: #790086] hover:text-white transition-colors duration-200 no-underline'>
                                    Email
                                </a>
                                </li>
                                <li><a href='https://www.linkedin.com/in/aditya-mallick-7836692b6/' target='_blank' rel='noopener noreferrer'
                                   className='block px-4 py-2 text-white hover:[color: #790086] hover:text-white transition-colors duration-200 no-underline'>
                                    LinkedIn
                                </a></li>
                                <li><a href='https://github.com/Adittyaaa-codes' target='_blank' rel='noopener noreferrer' 
                                   className='block px-4 py-2 text-white hover:[color: #790086] hover:text-white transition-colors duration-200 no-underline'>
                                    GitHub
                                </a>
                                </li>
                                
                                
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-gray-800 rounded-lg shadow-lg border-2 border-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className='flex flex-col p-4 gap-3'>
                        <NavLink className='no-underline' to="/" onClick={toggleMenu}>
                            {({ isActive }) => (
                                <button className={`w-full text-left ${isActive ? 'text-purple-600 border-b border-purple-600' : 'text-white hover:text-purple-400'}`}>
                                    HOME
                                </button>
                            )}
                        </NavLink>

                        <NavLink className='no-underline' to="/about" onClick={toggleMenu}>
                            {({ isActive }) => (
                                <button className={`w-full text-left ${isActive ? 'text-purple-600 border-b border-purple-600' : 'text-white hover:text-purple-400'}`}>
                                    ABOUT
                                </button>
                            )}
                        </NavLink>

                        <NavLink className='no-underline' to="/projects" onClick={toggleMenu}>
                            {({ isActive }) => (
                                <button className={`w-full text-left ${isActive ? 'text-purple-600 border-b border-purple-600' : 'text-white hover:text-purple-400'}`}>
                                    PROJECTS
                                </button>
                            )}
                        </NavLink>

                        <div className='border-t border-gray-600 pt-3 mt-2'>
                            <p className='text-gray-400 text-sm mb-2'>SOCIAL LINKS</p>
                            <div className='flex flex-col gap-2'>
                                <a href='https://github.com' target='_blank' rel='noopener noreferrer' 
                                   className='text-white hover:text-purple-400 transition-colors duration-200 no-underline text-sm'>
                                    GitHub
                                </a>
                                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'
                                   className='text-white hover:text-purple-400 transition-colors duration-200 no-underline text-sm'>
                                    LinkedIn
                                </a>
                                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'
                                   className='text-white hover:text-purple-400 transition-colors duration-200 no-underline text-sm'>
                                    Twitter
                                </a>
                                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'
                                   className='text-white hover:text-purple-400 transition-colors duration-200 no-underline text-sm'>
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
                    
            </nav>
    </>
)
}

export default Navbar