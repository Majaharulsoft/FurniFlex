import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="h-[118px] w-full bg-white border-b-[1px] border-[#F1F1F1] rounded-t-lg">
        <div className='h-full flex items-center px-[72px] justify-between'>
            <div className=''>
              <Logo w={134} h={38}/>
            </div>

            <div>Home</div>
            <div>card user-icon</div>



        </div>

    </header>
  )
}

export default Header