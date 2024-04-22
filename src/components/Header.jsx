import React from 'react'
import { MovingBorderBtn } from './ui/Moving-border'

function Header() {
  return (
    <header className='sticky top-0 z-50'> 
    
    <div className='cursor-pointer bg-gradient-to-r from-pink-800 to-[#2E2EF4] flex text-center justify-center gap-5 p-2 font-medium  text-white'>
      Try ReadyQ free for 30 days 🚀 | <span className='font-semibold rounded-full px-2 py-1 text-[13px] bg-gradient-to-b from-white/[.105] to-white/[.15] backdrop-[20px] text-[#fff] sm:block opacity-100 no-underline'><a href="Try for free">Try for free</a></span>
    </div>
    <div className='top-0 z-40 flex-col px-4 lg:px-4 backdrop-blur-sm border-b-1 border-gray-700'>
    <nav className="mx-auto flex h-[72px] max-w-[1216px] flex-1 items-center justify-between">
     <div className='flex justify-start'>
        <span>
          <img src="./src/assets/logo.png" alt="" className='w-[50px] h-[50px]'/>
        </span>
      </div> 
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-white text-sm gap-10 font-medium lg:flex">
            <a href='/' className='px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]'>Home</a>
            <a  href="/about" className='px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]'>About</a>
            <a href="/interview" className='px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]'>Interview</a>
            <a href="/pricing" className='px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]'>Pricing</a>
        </div>
        <div className='flex justify-end'>
          <MovingBorderBtn borderRadius="1.5rem" className='p-2 text-[13px]'>
            Sign Up
          </MovingBorderBtn>
        </div>
    </nav>
    </div>
    </header>
  )
}

export default Header