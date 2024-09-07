import React from 'react'
import Logo from './Logo'
import { FaRegCircleUser } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-[118px] w-full bg-white border-b-[1px] border-[#F1F1F1] rounded-t-lg">
        <div className='h-full flex items-center px-[72px] justify-between'>
            <div className=''>
              <Link to={"/"}>
                <Logo w={134} h={38}/>
              </Link>
              
            </div>

            <div>
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-3">
                  <li>
                    <a className="bg-[#fff] hover:bg-[#F8F8F8] h-[38px] w-[87px] flex items-center justify-center text-center text-[18px]" href="#"> Home</a>
                  </li>
                  <li>
                    <a className="bg-[#fff] hover:bg-[#F8F8F8] h-[38px] w-[87px] flex items-center justify-center text-center text-[18px]" href="#"> Products</a>
                  </li>
                  <li>
                    <a className="bg-[#fff] hover:bg-[#F8F8F8] h-[38px] w-[87px] flex items-center justify-center text-center text-[18px]" href="#"> Categories</a>
                  </li>
                  <li>
                    <a className="bg-[#fff] hover:bg-[#F8F8F8] h-[38px] w-[87px] flex items-center justify-center text-center text-[18px]" href="#"> Custom</a>
                  </li>
                  <li>
                    <a className="bg-[#fff] hover:bg-[#F8F8F8] h-[38px] w-[87px] flex items-center justify-center text-center text-[18px]" href="#"> Blog</a>
                  </li>
                </ul>
              </div>



            <div className='flex items-center gap-[24px]'>
              <div className='text-3xl relative'>
                <span><BiShoppingBag /></span>
                  <div className='bg-[#323232] text-white w-4 h-4 rounded-full p-1 flex items-center justify-center absolute bottom-0 left-3 '>
                      <p className='text-[10px]'>1</p>
                  </div>
              </div>

              <div className='text-3xl cursor-pointer'>
              <FaRegCircleUser/>
              </div>
            </div>
            
            



        </div>

    </header>
  )
}

export default Header