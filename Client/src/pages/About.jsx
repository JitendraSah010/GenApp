import React from 'react';
import Navbar from '../component/Nav';
import HomeImg2 from '../../public/HomeImage2.png';
import Footer from '../component/Footer';


function About() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <div className="max-w-[70rem] m-auto pt-12">
          <div className=" sm:flex sm:justify-between items-center max-w-[1400px] text-center sm:text-left py-8 px-2 sm:p-14">
            <div className="max-w-[600px]" >
              <h1 className='dark:text-gray-200 text-3xl font-bold mb-4' >Why GenApp?</h1>
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

export default About