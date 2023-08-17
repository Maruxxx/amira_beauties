import React from 'react'
import Header from '../Components/Header'
import Slider from './Slider'

function Presentation() {
  return (
    <div className='bg-mainColor md:py-20 relative'>     

      <img src={require('../assets/icons/1.png')} className='hidden absolute right-0 w-[150px] z-40 lg:block'></img>
      <img src={require('../assets/icons/2.png')} className='hidden absolute left-0 bottom-10 z-10 w-[150px] opacity-80 lg:block'></img> 
       
      <div className='flex flex-col justify-evenly items-center gap-8 sm:flex-row'>

          
          
          <div className='flex  flex-col justify-center items-start'>

            <div className='flex flex-col pl-8 gap-4 animate-fade-right animate-ease-in-out z-50'>
              <p className='font-ttRegular lg:text-xl'>We can help you to</p>
              <p className='font-ttBold text-4xl lg:text-5xl'>Reveal Your Natural <br></br> Beauty Skin</p>
            </div>
            
            <div className='flex justify-center items-center gap-4 px-8 my-8 z-20'>
              <a href='/' className='bg-black py-3 w-36 rounded-md text-white text-center font-montserratBold text-sm md:w-44 md:py-4'>Book Now</a>
              <a href='/' className='border border-black rounded-md py-2.5 w-36 text-center font-montserratBold text-sm md:w-44 md:py-3.5'>Explore</a>
            </div>

          </div>
          
          <div className='flex justify-end items-center animate-fade-left animate-ease-in-out'>
            <img src={require('../assets/1.webp')} className='pl-4' alt=''></img>
          </div>
          

    
      </div>
    
    </div>
  )
}

export default Presentation