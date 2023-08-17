import React from 'react'

function Contact() {
  return (
    <div className='bg-darkGrey flex flex-col justify-evenly items-center gap-12 mt-6 py-12 md:flex-row'>
      <div className='flex flex-col justify-center items-center gap-6'>

        <img src={require('../assets/logo-white.png')}></img>
        <ul className='flex justify-center items-center flex-wrap'>
          <li className='flex flex-col justify-center items-start gap-4 text-white font-montserratRegular text-sm'>
            <a><span className='text-darkGold mx-2'>●</span> Proffessionel Certification</a>
            <a><span className='text-darkGold mx-2'>●</span> Terms & Conditions</a>
            <a><span className='text-darkGold mx-2'>●</span> About Us</a>
          </li>
        </ul>
      
      </div>
      
      <div className='w-[200px] h-[2px] bg-white md:w-[2px] md:h-[150px]'></div>

      <div className='flex flex-col justify-center items-center gap-6'>

        
        <div className='flex flex-col justify-center items-start gap-4'>
          <div className='flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D1A670" className="w-5 h-5">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <p className='font-montserratRegular text-white text-sm opacity-80'>35 Cité Bab Ezzouar, Alger, Algeria</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D1A670" className="w-5 h-5">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <p className='font-montserratRegular text-white text-sm opacity-80'>contact.amina@gmail.com</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D1A670" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            <p className='font-montserratRegular text-white text-sm opacity-80'>+213 555 19 72 35</p>
          </div>
        </div>

      </div>
      
      <p className='text-sm font-montserratRegular text-white opacity-40 md:hidden'>© 2018 - 2023, All Rights Reserved</p>
    </div>
  )
}

export default Contact