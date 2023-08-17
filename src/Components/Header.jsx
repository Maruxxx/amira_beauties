import React, { useState } from 'react'

function Header() {
  const [activeMenu, setActiveMenu] = useState(false)
  
  return (
    <div className='flex flex-col justify-center items-center bg-mainColor'>
      <div className='w-full flex justify-between items-center py-8 px-8 md:justify-around'>
          <a href='/'>
            <img src={require('../assets/logo.png')} className='w-[150px] lg:w-52'></img>
          </a>
          {
            !activeMenu ? (
                <svg onClick={() => {setActiveMenu(!activeMenu)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer md:hidden">
                  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>
            ) : (
              <svg onClick={() => {setActiveMenu(!activeMenu)}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer md:hidden">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>
            )
          }

          <ul className='hidden  justify-center items-center gap-8 md:flex lg:gap-12 text-sm font-bold font-montserratRegular'>
            <li className='cursor-pointer hover:text-darkGold duration-150 transition-all ease-in-out'>
              <a>Home</a>
            </li>
            <li className='cursor-pointer hover:text-darkGold duration-150 transition-all ease-in-out'>
              <a>About</a>
            </li>
            <li className='cursor-pointer hover:text-darkGold duration-150 transition-all ease-in-out'>
              <a>Our Services</a>
            </li>
            <li className='cursor-pointer hover:text-darkGold duration-150 transition-all ease-in-out'>
              <a>Testimonials</a>
            </li>
            <li className='cursor-pointer hover:text-darkGold duration-150 transition-all ease-in-out'>
              <a>Contact</a>
            </li>
          </ul>

      </div>
      
      {
        activeMenu ? (
          <div className='w-full justify-center items-center py-4 pb-12 animate-fade-down animate-ease-in-out md:hidden'>
            <ul className='flex flex-col justify-center items-center gap-2'>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Our Services</a>
              </li>
              <li>
                <a href='/'>Testimonials</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
          </div>
        ) : (
          null
        )
      }
    </div>
  )
}

export default Header