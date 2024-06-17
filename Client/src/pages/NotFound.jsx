import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
        <div className="max-w-[400px] text-center m-auto mt-20 border-2 dark:border-none dark:shadow-2xl dark:bg-slate-800 rounded p-4 pb-8 ">
            <h1 className='text-6xl text-red-500'>404 error</h1>
            <p className='text-xl text-red-500 mb-6'>Page Not Found!</p>
            <p className='dark:text-slate-400' >Opps! it seems the page you're trying to access does not exist. </p> <br />
            <Link to={'/'} className='bg-blue-500 text-white text-sm px-4 hover:bg-blue-600 transition-all duration-300 py-1 rounded-[0.3rem] mt-3'>Return Home</Link>
        
        </div>
    </>
  )
}

export default NotFound