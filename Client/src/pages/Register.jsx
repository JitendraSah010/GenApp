import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/Nav';
import { toast } from 'react-toastify';
import { baseURL } from '../component/apiData';
import { useAuthCustomHook } from '../store/Auth';


function Register() {

  const [inputData, setInputData] = useState( { name: "", userName: "", email:"", phone: "", password:"" } );

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuthCustomHook();

  function inputHandler(e){
    setInputData( (preValue)=>{
      return { ...preValue, [e.target.name] : e.target.value };
    } )
  }

  const registerHandler = async(e)=>{
    e.preventDefault();

    if( inputData.name === "" || inputData.userName === "" || inputData.email ==="" || inputData.phone === "" || inputData.password ===""){
      toast.error("Please fill all fileds");
    }else{
        try {
          const response = await fetch(`${baseURL}/auth/register`, {
            method:'POST',
            headers: {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(inputData)
          });
          
          if(response.ok){
            const data = await response.json();
            storeTokenInLS(data.token)                  // storing the token in local storage (Context API)
            toast.success(data.message);
            setInputData({ name: "", userName: "", email:"", phone: "", password:"" });
            navigate('/login');
          }else{
            const data = await response.json(); 
            toast.error(data.message);
          }
        } catch (error) {
          toast.error("Registration Failed");
        }
    }

  }

  return (
    <>
      <header>
        <Navbar/>
      </header>
      
      <section>
          <div className='flex justify-center items-center px-4 h-screen bg-white dark:bg-slate-700 py-4 '>
            <div className=" mt-20 sm:mt-14 dark:shadow-2xl rounded main_container border-2 dark:border-none p-5 bg-white dark:bg-slate-700">
                <h1 className='text-center text-4xl text-green-500 shadow-xl font-bold mt-5'>GenApp</h1>
                <div className="mt-4">
                    <h2 className='text-center text-2xl text-slate-700 dark:text-gray-300 font-bold mb-5 underline  '>Register Yourself Now!</h2>
                    <form onSubmit={registerHandler} className='text-center'>
                        <input name='name' onChange={inputHandler} value={inputData.name} type="text" placeholder='Enter your name' className='registerInput bg-white dark:bg-slate-300  w-full px-2 py-2 rounded mb-4  ' />
                        <input name='userName' onChange={inputHandler} value={inputData.userName} type="text" placeholder='Enter Username' className='registerInput bg-white dark:bg-slate-300  w-full px-2 py-2 rounded mb-4  ' />
                        <input name='email' onChange={inputHandler} value={inputData.email} type="email" placeholder='Enter your email' className='registerInput bg-white dark:bg-slate-300  w-full px-2 py-2 rounded mb-4 ' />
                        <input name='phone' onChange={inputHandler} value={inputData.phone} type="tel" placeholder='Enter phone number' className='registerInput bg-white dark:bg-slate-300  w-full px-2 py-2 rounded mb-4 ' />
                        <input name='password' onChange={inputHandler} value={inputData.password} type="password" placeholder='Create password' className='registerInput bg-white dark:bg-slate-300  w-full px-2 py-2 rounded mb-4 ' />
                        {/* <input name='confirmPassword' type="password" placeholder='Confirm password' className='registerInput  font-bold w-full px-2 py-3 rounded mb-4 ' /> */}
                        <button className='bg-blue-500 text-white text-sm px-6 hover:bg-blue-600 transition-all duration-300 py-1 rounded-[0.3rem] mt-3'>Submit</button>
                    </form>
                    <h4 className='text-center mt-4 text-gray-700 dark:text-teal-500' > If Already have account? <Link to={'/login'} className='text-blue-400 hover:text-red-500 duration-500' >Login</Link> </h4>       
                </div>
            </div>
          </div>
      </section>

    </>
  )
}

export default Register