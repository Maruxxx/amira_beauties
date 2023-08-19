import React from 'react'

function Testimonials({color}) {
  
  return (
    <div className='flex flex-col justify-center items-center gap-12 my-12 '>
      
      
      <div className='flex justify-center mx-4 items-center relative self-center'>
        <p className='z-20 font-montserratMedium text-2xl my-4 md:text-3xl'>Testimonials</p>
        {
        
        color === 'pink' ? (
              <img src={require('../assets/icons/flower-pink.png')} width={60} className='absolute right-0 z-10' alt=''></img>
              ) : color === 'darkGold' ? (
                <img src={require('../assets/icons/flower-darkGold.png')} width={60} className='absolute right-0 z-10' alt=''></img>
              ) : (
                <img src={require('../assets/icons/flower.png')} width={60} className='absolute right-0 z-10' alt=''></img>
              )  

        }
      </div>

      <div className='flex flex-wrap justify-center items-center gap-16'>

      

      <div className={`flex flex-col justify-center items-center gap-4 bg-${color} md:w-[400px] md:h-[570px] pb-8 md:py-8 w-[300px] h-fit rounded-lg`}>
          <div className='relative'>
            <img src={require('../assets/testimonials/1.webp')} alt=''></img>
            <div className={`p-4 w-fit ${color === 'pink' ? 'bg-[#363636]' : color === 'darkGold' ? 'bg-[#363636]' : 'bg-darkGold'} absolute -bottom-8 right-4`}>
              <img src={require('../assets/icons/quotes.png')} width={25} alt=''></img>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='font-ttBold text-2xl mx-4 text-center self-center mt-4'>Nahla Salem</p>
            <p className='font-montserratRegular text-sm mx-4 text-center px-4'>The staff's expertise and genuine care for my beauty needs were truly remarkable. Thanks to their personalized treatments!</p>
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center gap-4 bg-${color} md:w-[400px] md:h-[570px] pb-8 md:py-8 w-[300px] h-fit  rounded-lg`}>
          <div className='relative'>
            <img src={require('../assets/testimonials/2.webp')} alt=''></img>
            <div className={`p-4 w-fit ${color === 'pink' ? 'bg-[#363636]' : color === 'darkGold' ? 'bg-[#363636]' : 'bg-darkGold'} absolute -bottom-8 right-4`}>
              <img src={require('../assets/icons/quotes.png')} width={25} alt=''></img>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='font-ttBold text-2xl mx-4 text-center self-center mt-4'>Ikram Benkaddi</p>
            <p className='font-montserratRegular text-sm mx-4 text-center px-4'>Amira Beauties is more than a beauty center. it's a place where dreams of radiance come true. My experience there was nothing short of magical.</p>
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center gap-4 bg-${color} md:w-[400px] md:h-[570px] pb-8 md:py-8 w-[300px] h-fit  rounded-lg`}>
          <div className='relative'>
            <img src={require('../assets/testimonials/3.webp')} alt=''></img>
            <div className={`p-4 w-fit ${color === 'pink' ? 'bg-[#363636]' : color === 'darkGold' ? 'bg-[#363636]' : 'bg-darkGold'} absolute -bottom-8 right-4`}>
              <img src={require('../assets/icons/quotes.png')} width={25} alt=''></img>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='font-ttBold text-2xl mx-4 text-center self-center mt-4'>Chiraz Fradi</p>
            <p className='font-montserratRegular text-sm mx-4 text-center px-4'>Every visit feels like a journey towards self-discovery and empowerment. I'm grateful for this haven that celebrates and uplifts women like me.</p>
          </div>
      </div>
    
      </div>
    </div>
  )
}

export default Testimonials