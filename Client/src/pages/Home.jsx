import React from 'react';
import Navbar from '../component/Nav';
import HomeImg2 from '../../public/HomeImage2.png';
import Footer from '../component/Footer';

function Home() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <section className='Container pt-16 w-screen'>
        <div className="max-w-[70rem] m-auto">
          <div className=" max-w-[600px] text-center sm:text-left py-8 px-2 sm:p-14">
            <h1 className='text-white dark:text-gray-200 text-3xl font-bold mb-4' >Welcome Back Jitendra</h1>
            <p className='text-slate-300'>Discover the ultimate platform, where you can make this web app your own just by adding products you want to sell here. GenApp is designed to cater to all your needs, whether you’re looking to sell educational content or a wide range of products. Seamlessly integrate your offerings and reach a broader audience with ease.</p>
            <button className=' hover:bg-green-600 transition-all duration-500 text-white bg-blue-500 px-12 py-2 rounded mt-8' >Explore More...</button>
          </div>
        </div>
      </section>

      <div className='mx-4'>
        <div className="max-w-[70rem] m-auto sm:grid sm:grid-cols-4 text-center sm:shadow-custom sm:dark:shadow-custom-dark rounded mt-6 sm:mt-10 dark:text-white">
          <div className="py-4 sm:py-8">
            <div className="sm:border-r-2 py-6 sm:p-0 rounded sm:rounded-none border-zinc-500 shadow-custom dark:shadow-custom-dark sm:dark:shadow-none sm:shadow-none ">
              <h1 className=' text-2xl font-bold dark:text-gray-200'>1000+</h1>
              <p className='dark:text-gray-200'>Students</p>
            </div>
          </div>
          <div className="py-4 sm:py-8 ">
            <div className="sm:border-r-2 py-6 sm:p-0 rounded sm:rounded-none border-zinc-500 shadow-custom dark:shadow-custom-dark sm:dark:shadow-none sm:shadow-none ">
              <h1 className=' text-2xl font-bold dark:text-gray-200'>30+</h1>
              <p className='dark:text-gray-200'>Technologies</p>
            </div>
          </div>
          <div className="py-4 sm:py-8">
            <div className="sm:border-r-2 py-6 sm:p-0 rounded sm:rounded-none border-zinc-500 shadow-custom dark:shadow-custom-dark sm:dark:shadow-none sm:shadow-none ">
              <h1 className=' text-2xl font-bold dark:text-gray-200'>900+</h1>
              <p className='dark:text-gray-200'>Success Stories</p>
            </div>
          </div>
          <div className="py-4 sm:py-8">
            <div className="py-6 sm:p-0 rounded sm:rounded-none border-zinc-500 shadow-custom dark:shadow-custom-dark sm:dark:shadow-none sm:shadow-none ">
              <h1 className=' text-2xl font-bold dark:text-gray-200'>27 x 7</h1>
              <p className='dark:text-gray-200'>Service</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="max-w-[70rem] m-auto">
          <div className=" sm:flex sm:justify-between items-center max-w-[1400px] text-center sm:text-left py-8 px-2 sm:p-14">
            <div className="max-w-[600px]" >
              <h1 className=' dark:text-gray-200 text-3xl font-bold mb-4' >Why GenApp?</h1>
              <p className='font-bold dark:text-gray-300 mb-4'> Versatile Marketplace: <span className='font-thin hidden lg:block '>Make this webApp your own in few steps, Then Sell anything and everything</span></p>
              <p className='font-bold dark:text-gray-300 mb-4'> User-Friendly: <span className='font-thin hidden lg:block '>Intuitive design ensures a smooth experience for all users.</span></p>
              <p className='font-bold dark:text-gray-300 mb-4'> Customizable Storefronts: <span className='font-thin hidden lg:block '> Tailor your store to reflect your brand’s unique identity.</span></p>
              <p className='font-bold dark:text-gray-300 mb-4'> Seamless Integration: <span className='font-thin hidden lg:block '> Easily integrate with popular payment gateways and shipping services.</span></p>
              <p className='font-bold dark:text-gray-300 mb-4'> Comprehensive Analytics:  <span className='font-thin hidden lg:block '> Gain insights into your sales, customer behavior, and market trends.</span></p>
              <p className='font-bold dark:text-gray-300 mb-4'> 24x7 Support:<span className='font-thin hidden lg:block '>Our dedicated support team is here to assist you around the clock.</span></p>
            </div>
            <div className="max-w-[300px] m-auto sm:m-0 shadow-xl rounded">
              <img src={HomeImg2} alt="" className='w-full'/>
            </div>
          </div>
        </div>

      <footer>
        <Footer/>
      </footer>

    </>
    
  )
}

export default Home;