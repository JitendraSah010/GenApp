import React, { useState, useEffect } from 'react';
import Navbar from '../component/Nav';
import contactImg from '../../public/contactImg.png';
import Footer from '../component/Footer';
import { useAuthCustomHook } from '../store/Auth';
import { toast } from 'react-toastify';
import { baseURL } from '../component/apiData';


function Contact() {

  const [inputData, setInputData] = useState({ name:'', userName:'', message:'', email:'', phone:'' });
  const [userData, setUserData] = useState(true);

  function inputDataHandler(e){
    setInputData( (preValue)=>{
      return {...preValue, [e.target.name] : e.target.value }
    } )
  }

  // autofill logged in user data in contact form
  const {loggedInUserData} = useAuthCustomHook();

 useEffect(() => {
  if (loggedInUserData && userData) {
    setInputData({
      name: loggedInUserData.userDetails.name,
      userName: loggedInUserData.userDetails.userName,
      email: loggedInUserData.userDetails.email,
      phone: loggedInUserData.userDetails.phone,
      message : ''
    });
    setUserData(false);
  }
}, [loggedInUserData, userData]);
  

  const contactSubmitHandler = async(e)=>{
    e.preventDefault();

    if( inputData.name === "" || inputData.userName === "" || inputData.email ==="" || inputData.phone === "" || inputData.message ===""){
      toast.error("message filed cannot be empty");
    }
    else {
      try {
        const response = await fetch(`${baseURL}/contact/submit`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(inputData)
        });
  
        if(response.ok){
          const data = await response.json();
          toast.success(data.message);
        }
        
      } catch (error) {
        console.log("error in contact submit",error);
        toast.error(error.message);
      }
    }
  }


  return (
    <>
      <header>
        <Navbar/>
      </header>
      
      <section className='pt-24 text-center sm:h-screen'>

        <div className="px-4">
          <h1 className='dark:text-slate-300 text-slate-400 font-semibold  text-xl sm:text-2xl' >" We'd Love to Hear from You, Connect with Our Team "</h1>
        </div>

      <div className="max-w-[70rem] m-auto px-4">
          <div className=" sm:flex sm:justify-between items-center max-w-[1400px] text-center sm:text-left px-2 sm:p-14">
            
            <div className="homeImage2 max-w-[340px] m-auto sm:m-0 rounded">
              <img src={contactImg} alt="" className='w-full'/>
            </div>

            <div className="max-w-[420px]  dark:shadow-custom rounded p-5 border-2 dark:border-none  ">
              <p className='text-left text-sm text-gray-500 dark:text-slate-400'> 🙋‍♂️Hi {inputData.name?inputData.name:'user'} </p>
              <h2 className='font-semibold mb-8 text-3xl underline text-slate-500 dark:text-slate-400 text-center'>Contact us</h2>
              
                <form action="" onSubmit={contactSubmitHandler}>
                  <input name='name' onChange={inputDataHandler} value={inputData.name} type="text" autoComplete='off' placeholder='Enter your name' className='registerInput placeholder-slate-600 bg-white text-slate-500 text-sm dark:text-slate-700 dark:bg-slate-400 font w-full px-2 py-2 rounded mb-4  ' />
                  <input name='userName' onChange={inputDataHandler} value={inputData.userName} type="text" autoComplete='off' placeholder='Enter Username' className='registerInput placeholder-slate-600 bg-white text-slate-500 text-sm dark:text-slate-700 dark:bg-slate-400 font w-full px-2 py-2 rounded mb-4  ' />
                  <textarea name='message' onChange={inputDataHandler} value={inputData.message} type="text" autoComplete='off' cols="10" rows="4" placeholder='Your message' className='registerInput placeholder-slate-500 text-sm dark:placeholder-slate-600 text-slate-500 dark:text-slate-700 bg-white dark:bg-slate-400 font w-full px-2 py-2 rounded mb-4 ' />
                  <button className='bg-blue-500 text-white text-sm px-6 hover:bg-blue-600 transition-all duration-300 py-1 rounded-[0.3rem] mt-3'>Submit</button>
                </form>
            </div>

          </div>
      </div>
      </section>

      <footer className='mt-8 sm:mt-0'>
        <Footer/>
      </footer>

    </>
  )
}

export default Contact