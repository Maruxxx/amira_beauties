import React from 'react'

function About({color}) {
  
  
  
  return (
    <div className='flex flex-col justify-center items-center gap-8 py-20 md:flex-row-reverse md:justify-evenly relative'>
      
      {
        color === 'pink' ? (
          <>
            <img src={require('../assets/icons/3-pink.png')} className='hidden absolute w-[150px] right-0 top-10 -z-20 lg:block' alt=''></img>
            <img src={require('../assets/icons/4-pink.png')} className='hidden absolute w-[150px] left-0 top-[200px] -z-40 lg:block' alt=''></img>
          </>
        ) : color === 'darkGold' ? (
          <>
            <img src={require('../assets/icons/3-darkGold.png')} className='hidden absolute w-[150px] right-0 top-10 -z-20 lg:block' alt=''></img>
            <img src={require('../assets/icons/4-darkGold.png')} className='hidden absolute w-[150px] left-0 top-[200px] -z-40 lg:block' alt=''></img>
          </>
        ) : (
          <>
            <img src={require('../assets/icons/3.png')} className='hidden absolute w-[150px] right-0 top-10 -z-20 lg:block' alt=''></img>
            <img src={require('../assets/icons/4.png')} className='hidden absolute w-[150px] left-0 top-[200px] -z-40 lg:block' alt=''></img>
          </>
        )
      }
      
      <div className='flex flex-col justify-center items-center md:items-start md:w-1/3 gap-6 mb-8 md:mb-0'>
        
          <div className='flex justify-center items-center relative w-fit mb-4'>
            <p className='z-20 font-montserratMedium text-2xl lg:text-2xl'>About us</p>
            
            {
              color === 'pink' ? (
                <img src={require('../assets/icons/flower-pink.png')} className='absolute right-0 z-10 w-[60px] lg:w-[60px]' alt=''></img>
                ) : color === 'darkGold' ? (
                  <img src={require('../assets/icons/flower-darkGold.png')} className='absolute right-0 z-10 w-[60px] lg:w-[60px]' alt=''></img>
                ) : (
                  <img src={require('../assets/icons/flower.png')} className='absolute right-0 z-10 w-[60px] lg:w-[60px]' alt=''></img>
                )  
            }
          </div>

          <p className='font-ttBold text-2xl mx-4 px-8 text-center md:text-start md:mx-0 md:px-0 lg:text-4xl'>Your Beauty Skin Is Our Priority</p>
          
          <p className='font-ttRegular px-8 text-lg mx-4 text-center md:text-start md:mx-0 md:px-0 lg:text-xl'>We provide the best spa experience that guarantees to make you healthier and make you look more beautiful</p>
          
          <div className={`px-8 py-3 ${color === 'pink' ? 'bg-pink' : color === 'darkGold' ? 'bg-darkGold' : 'bg-lightGold'} text-black font-montserratRegular lg:px-12 lg:py-4 lg:text-lg rounded-md text-sm cursor-pointer hover:scale-105 hover:bg-darkGold hover:text-white duration-150 ease-in-out transition-all`}>
            Learn More
          </div>

      </div>

      <div className='flex flex-wrap px-4 justify-center items-center gap-6 animate-fade-down animate-ease-in-out md:hidden'>
        <img src={require('../assets/about/1.webp')} width={150} alt=''></img>
        <img src={require('../assets/about/2.webp')} width={150} alt=''></img>
        <img src={require('../assets/about/3.webp')} width={150} alt=''></img>
      </div>

      <div className='hidden flex-wrap px-4 justify-center items-center gap-6 animate-fade-down animate-ease-in-out md:block w-96 h-96 relative'>
        <img src={require('../assets/about/1.webp')} width={220} alt='' className='absolute left-0 top-7 z-20'></img>
        <img src={require('../assets/about/2.webp')} width={220} alt='' className='absolute bottom-0 left-16 z-10'></img>
        <img src={require('../assets/about/3.webp')} width={220} alt='' className='absolute top-0 right-0 z-30'></img>
      </div>

    </div>
  )
}

export default About