import React, {useState, useEffect} from 'react';
import { MdDarkMode } from "react-icons/md";
import { NavLink, Link } from 'react-router-dom';
import { useAuthCustomHook } from '../store/Auth';

function Nav() {

    const { isLoggedIn } = useAuthCustomHook();

    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [darkMode]);
  
    const handleToggle = () => {
      setDarkMode(!darkMode);
    };


  return (
    <>
        <nav className="bg-slate-50 fixed z-10 w-screen border-gray-200 shadow-lg dark:bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to='/'  className="flex items-center space-x-3 text-2xl text-green-500 font-bold rtl:space-x-reverse dark:text-green-500 "> GenApp </Link>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto " id="navbar-default">
            <ul className="font-medium text-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-50 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                <li>
                <NavLink to='/' className="block py-2 px-2 text-gray-900 md:hover:text-blue-700  rounded md:bg-transparent  md:p-0 dark:text-white ">Home</NavLink>
                </li>
                <li>
                <NavLink to='/service' className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Service</NavLink>
                </li>
                <li>
                <NavLink to='/contact' className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
                </li>
                <li>
                <NavLink to='/about' className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
                </li>
                <li>
                  {
                    isLoggedIn ? <NavLink to='/logout' className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</NavLink>
                    : <>
                        <ul className='md:flex sm:gap-4'>
                            <li>
                            <NavLink to='/register' className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</NavLink>
                            </li>
                            <li>
                            <NavLink to='/login' className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
                            </li>
                        </ul>
                    </>
                  }
                </li>
                <div className="text-center">
                  <button onClick={handleToggle} className="ml-3 text-gray-900 text-xl dark:text-white" > {darkMode ? <MdDarkMode title='Light mode' className='text-white'/> : <MdDarkMode title='Dark mode' className='text-black'/>} </button>
                </div>
            </ul>
            </div>
        </div>
        </nav>

    </>
  )
}

export default Nav