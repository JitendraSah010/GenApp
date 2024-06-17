import React, {useState} from 'react';
import Navbar from '../component/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseURL } from '../component/apiData';
import { useAuthCustomHook } from '../store/Auth';


function Login() {
  const [inputData, setInputData] = useState({userName:"", email:"", password:""});

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuthCustomHook();

  const inputHandler = (e)=>{
    setInputData( (preValue)=>{
      return{ ...preValue, [e.target.name]: e.target.value };
    } )
  }

  const loginHandler = async (e)=>{
    e.preventDefault();

    if(inputData.userName === "" || inputData.email === "" || inputData.password === "" ){
      toast.error("please fill all login details");
    }
    else{
      try {
        const response = await fetch(`${baseURL}/auth/login`, {
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json',
          },
          body : JSON.stringify(inputData)
        });

        if(response.ok){
          const data = await response.json();
          storeTokenInLS(data.token);
          toast.success(data.message);
          setInputData({userName:"", email:"", password:""});
          navigate('/');
        }
        else{
          const data = await response.json();
          toast.error(data.message);
        }
        
      } catch (error) {
        toast.error("Login failed Internal server error");
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
            <div className=" mt-20 sm:mt-14  main_container border-2 dark:border-none dark:shadow-2xl p-5 bg-white dark:bg-slate-700">
                <h1 className='text-center text-4xl text-green-500 shadow-xl font-bold mt-5'>GenApp</h1>
                <div className="mt-4">
                    <h2 className='text-center text-2xl text-slate-700 dark:text-gray-300 font-bold mb-5 underline  '>Login</h2>
                    <form onSubmit={loginHandler} className='text-center'>
                        <input name='userName' onChange={inputHandler} value={inputData.userName} type="text" placeholder='Enter Username' className='registerInput dark:bg-slate-300 font-semibold w-full px-2 py-2 rounded mb-4  ' />
                        <input name='email' onChange={inputHandler} value={inputData.email} type="email" placeholder='Enter your email' className='registerInput  dark:bg-slate-300 font-semibold w-full px-2 py-2 rounded mb-4 ' />
                        <input name='password' onChange={inputHandler} value={inputData.password} type="password" placeholder='Create password' className='registerInput  dark:bg-slate-300 font-semibold w-full px-2 py-2 rounded mb-4 ' />
                        <button className='bg-blue-500 text-white text-sm px-6 hover:bg-blue-600 transition-all duration-300 py-1 rounded-[0.3rem] mt-3'>Submit</button>
                    </form>
                    <h4 className='text-center mt-4 text-gray-700 dark:text-teal-500' > Don't have account? <Link to={'/register'} className='text-blue-400 hover:text-red-500 duration-500' >Register</Link> </h4>       
                </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Login