import React from 'react'

function Services({color}) {
  return (
    <div className={`flex flex-col justify-center items-center gap-8 my-12 md:flex-row-reverse bg-${color} md:py-12`}>
      <div className='flex justify-center items-center relative pb-4 pt-12 md:hidden'>
        <p className='z-20 font-montserratMedium text-2xl'>Our Services</p>
        <img src={require('../assets/icons/flower-white.png')} width={60} className='absolute right-0 z-10' alt=''></img>
      </div>

      <img src={require('../assets/services/1.webp')} alt='' className='px-4' width={450}></img>

      <div className='flex flex-col justify-center items-start mx-4 md:mx-0 md:w-1/3 gap-9'>


        <div className='hidden justify-center items-center mx-4 relative pt-8 md:flex'>
          <p className='z-20 font-montserratMedium text-2xl'>Our Services</p>
          <img src={require('../assets/icons/flower-white.png')} width={60} className='absolute right-0 z-10' alt=''></img>
        </div>
      
            <p className='font-ttBold text-2xl mx-4 text-center self-start lg:text-4xl'>Dapper Facial</p>

            <p className='font-ttRegular pr-8 text-md mx-4 text-start self-start lg:text-lg'>This service is for you - extra exfoliation, neck and upper chest masks, and a relaxing scalp massage to invigorate blood circulation.</p>
            
            <div className='flex flex-col justify-center items-center gap-2 w-full'>

              <div className='flex justify-center items-center gap-1.5 self-start mx-4 lg:gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color === 'pink' || color === 'darkGold' ? "white" : "#D1A670"} className="w-5 h-5 lg:w-6 lg:h-6">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <p className='font-ttBold text-md lg:text-lg'>60 minutes - 24000 DA</p>
              </div>

              <div className='flex justify-center items-center gap-1.5 self-start mx-4 lg:gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color === 'pink' || color === 'darkGold' ? "white" : "#D1A670"} className="w-5 h-5 lg:w-6 lg:h-6">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <p className='font-ttBold text-md lg:text-lg'>90 minutes - 32000 DA</p>
              </div>

            </div>

            <div className='flex justify-start items-center gap-4 px-4 pb-12 w-full'>
                <div href='/' className='bg-black py-3 w-36 rounded-md text-white text-center font-montserratRegular text-sm lg:text-md lg:w-40 lg:py-4'>Book Now</div>
                <div href='/' className={` ${color === 'pink' || color === 'darkGold' ? "bg-white" : "border border-black"} rounded-md py-2.5 w-36 text-center font-montserratBold text-sm lg:text-md lg:w-40 lg:py-3.5`}>Next Package</div>
            </div>

      </div>

    </div>
  )
}

export default Services