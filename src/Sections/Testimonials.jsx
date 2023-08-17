import React from 'react'

function Testimonials() {
  return (
    <div className='flex flex-col justify-center items-center gap-12 my-12 '>
      
      
      <div className='flex justify-center mx-4 items-center relative self-center'>
        <p className='z-20 font-montserratMedium text-xl my-4 md:text-2xl'>Testimonials</p>
        <img src={require('../assets/icons/flower.png')} width={50} className='absolute right-0 z-10 w-[50px] md:w-[60px]' alt=''></img>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-16'>

      

      <div className='flex flex-col justify-center items-center gap-4 bg-mainColor md:w-[400px] h-[550px] py-8 w-[350px]'>
          <div className='relative'>
            <img src={require('../assets/testimonials/1.webp')} className='scale-95'></img>
            <div className='p-4 w-fit bg-darkGold absolute -bottom-8 right-4'>
              <img src={require('../assets/icons/quotes.png')} width={25}></img>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='font-ttBold text-2xl mx-4 text-center self-center mt-4'>Chelsea Fraley</p>
            <p className='font-montserratRegular text-sm mx-4 text-center px-4'>We provide the best spa experience that guarantees to make you healthier and make you look more beautiful.</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-4 bg-mainColor md:w-[400px] h-[550px] py-8 w-[350px]'>
          <div className='relative'>
            <img src={require('../assets/testimonials/2.webp')}></img>
            <div className='p-4 w-fit bg-darkGold absolute -bottom-8 right-4'>
              <img src={require('../assets/icons/quotes.png')} width={25}></img>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='font-ttBold text-2xl mx-4 text-center self-center mt-4'>Emma Brandt</p>
            <p className='font-montserratRegular text-sm mx-4 text-center px-4'>I have been to alot of spas but Scarlett Spa is the best. I had the best pedicure ever.</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-4 bg-mainColor md:w-[400px] h-[550px] py-8 w-[350px]'>
          <div className='relative'>
            <img src={require('../assets/testimonials/3.webp')}></img>
            <div className='p-4 w-fit bg-darkGold absolute -bottom-8 right-4'>
              <img src={require('../assets/icons/quotes.png')} width={25}></img>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='font-ttBold text-2xl mx-4 text-center self-center mt-4'>Imelda Moretti</p>
            <p className='font-montserratRegular text-sm mx-4 text-center px-4'>Best day of the month is when I come. I can relax, and go home feeling like a new woman.</p>
          </div>
      </div>
    
      </div>
    </div>
  )
}

export default Testimonials