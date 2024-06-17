import React from 'react';
import Navbar from '../component/Nav';
import Footer from '../component/Footer';
import contactImg from '../../public/contactImg.png';
import { useAuthCustomHook } from '../store/Auth';


function Service() {
  
  const { servicesData } = useAuthCustomHook();

  return (
    <>
      <header>
        <Navbar/>
      </header>

      <section className='pt-24 text-center min-h-screen'>
        <h1 className='text-xl font-bold mb-3 dark:text-slate-300 text-slate-400 '>🚀 Welcome to Our Service Hub! 🌟</h1>
        <h2 className=' dark:text-gray-200 hidden sm:block max-w-[660px] m-auto'>Looking for expert guidance and support for your projects and assignments? You're in the right place! At <span className=" text-green-500 font-bold dark:text-green-500 "> GenApp </span> , we're dedicated to helping students like you excel in your academic journey.</h2>
        <h2 className=' dark:text-gray-200 sm:hidden max-w-[660px] m-auto'>Expert guidance for your academic projects. Let's excel together!</h2>          
        {
          servicesData === null ? <h1 className='text-center mt-8 dark:text-slate-200'>Products loading...</h1> :
        
        <div className=' max-w-[80rem] m-auto dark:text-gray-200 sm:grid sm:grid-cols-3 lg:grid-cols-4 place-content-center items-center p-8 gap-8'>
          
        {
          servicesData.map( (data)=>{
            return (
                <div key={data._id}  className="max-w-[400px] m-auto hover:shadow-custom shadow-xl dark:shadow-custom-dark mb-8 rounded text-left p-4 border border-transparent dark:hover:border-slate-500 duration-700 ">
                  <div className="relative">
                    <img className='w-full py-2' src="https://picsum.photos/1400/800/?nature" alt="MERN project image" />
                    <span className=' absolute right-0 top-4 bg-yellow-400 shadow dark:bg-orange-700  hover:bg-orange-600 dark:hover:bg-orange-500 duration-700 rounded-tl rounded-bl px-2 py-1 text-xs'>Discount 68%</span>
                    <span className=' absolute bottom-4 left-1 font-semibold bg-slate-300 dark:text-slate-950 shadow rounded px-2 text-sm'>Rs 400</span>
                  </div>
                  <h1 className='font-semibold'>{data.technology}</h1>
                  <p className='text-sm dark:text-slate-400'>{data.description}</p>
                  <button className=' hover:bg-green-600 transition-all duration-500 text-white text-sm bg-blue-500 px-4 py-1 rounded mt-2' >Buy Now</button>
                </div>
            )
          } )
        }


        </div> 

      } 
        

      </section>


      <Footer/>

    </>
  )
}

export default Service