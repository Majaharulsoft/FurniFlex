import React from 'react'
import HeroPic from '../assets/singup.png'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const SignUp = () => {
  return (
    <div className="flex">
        <div className=" ">
            <div className='w-[500Px] h-[618px] flex flex-col justify-center items-center top-0 bottom-0 bg-[#FAFAFA]'>
                <div>
                    <h2 className='font-bold text-[24px] text-center text-black'>Welcome Back</h2>
                    <p className="text-[40px] font-bold font-barlow text-center">
                            <span className="text-black">Furni</span>
                            <span className="text-[#1E99F5]">Flex</span>
                    </p>
                    <p className='text-[#707070] text-[16px]'>Signup for purchase your desire products</p>
                </div>
        
                <div className='flex-none pt-2'>
                    <form method="post">
                        <div className=" flex md:flex-row gap-3 flex-col">
                            <div className="flex-auto p-2">
                                <div className="mt-1">
                                <input
                                    name="first"
                                    id="first"
                                    type="text"
                                    value=""
                                    onChange=""
                                    placeholder="First name (optional)"
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                </div>
                            </div>

                            <div className="flex-auto p-2">
                                <div className="mt-1">
                                <input
                                    name="last"
                                    id="last"
                                    type="text"
                                    value=""
                                    onChange=""
                                    placeholder="Last name (optional)"
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                </div>
                            </div>
                        </div>

                        <div className="w-[452px] h-[56px] flex md:flex-row gap-3 flex-col">
                        <div className="flex-auto p-2">
                            <div className="mt-1">
                            <input
                                name="email"
                                id="email"
                                type="email"
                                value=""
                                onChange=""
                                placeholder="Email address"
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            />
                            </div>
                        </div>
                        </div>

                        <div className=" w-[452px] h-[56px] flex md:flex-row gap-3 flex-col">
                        <div className="flex-auto p-2 mt-1">
                            <div className="mt-2">
                            <input
                                name="password"
                                id="password"
                                type="password"
                                value=""
                                onChange=""
                                placeholder="Password"
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            />
                            </div>
                        </div>
                        </div>
                        <div className='p-3 mt-1'>
                        <input type='checkbox' />
                        <a className='pl-2' href='#' >
                        I agree to the  <span className='underline'>Terms & Policy</span></a>
                        
                        </div>
                        

                        <div className="pt-1 pl-2 w-[444px] h-[56px]">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white  " >
                                Signup
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center">
                <div className="flex-1 h-px dark:bg-gray-950"></div>
                <p className="px-3 text-sm text-center font-semibold dark:text-gray-700">
                  Or
                </p>
                <div className="flex-1 h-px dark:bg-gray-300"></div>
              </div>
                
               

                <div className='social'>
                    <form action= "">

                        <div className="w-[452px] h-[56px] flex md:flex-row gap-3 flex-col">
                            <div className="flex-auto p-2">
                                <div className="mt-1">
                                <button className=" flex w-full justify-center rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm border-[#D9D9D9] border-transparent py-2 px-4 text-sm font-medium text-black "type='submit'name='action'value="google">
                                <FcGoogle  className="text-2xl pr-2" /> <a href=""className='text-[12px]' >Sign in with Google</a>
                                </button>
                                </div>
                            </div>
                            <div className="flex-auto p-2">
                                <div className="mt-1">
                                <button className=" flex w-full justify-center rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm py-2 px-4 text-sm font-medium text-black "type='submit'name='action'value="google">
                                <FaApple className="text-2xl pr-2"  /> <a href="" className='text-[12px]'>Sign in with Apple</a>
                                </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='pt-3 flex items-center justify-center'>
                    <span> Have an account? <a className="text-[#0F3DDE] " href="/login" title> Login</a></span>
                    </div>
                </div>
            </div>
        </div>

        <div className=" ">  
            <div className="flex  justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroPic})`, width: '500px', height: '1024px' }}>
                <div className="w-[445px] h-[181px] text-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-[89px] h-[85px] bg-[#1E99F5] rounded-full">
                            <p className=" font-lucida text-[36px] italic text-black">F</p>
                        </div>
                        <p className="text-[36px] font-bold font-inter mt-4">
                            <span className="text-white">Furni</span>
                            <span className="text-[#1E99F5]">Flex</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-[#C8C4C4] mt-4 font-inter">
                            Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, 
                            we bring quality.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp