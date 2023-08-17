import React, { useState } from 'react'

function Slider() {
  
    
  const slides = [ 
    {
        url: require('../assets/slides/1.jpg')
    },
    {
        url: require('../assets/slides/2.jpg')
    },
    {
        url: require('../assets/slides/3.jpg')
    },
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  

  
    return (
    <div className='hidden justify-center items-center md:flex max-w-[1600px] h-[700px] w-full m-auto py-16 px-4 relative'>
        
        <div onClick={prevSlide} className='bg-mainColor rounded-full mx-8  p-4 w-fit h-fit cursor-pointer hover:bg-[#f8ce9a] ease-in-out transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
        
        
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>

        
        <div onClick={nextSlide} className='bg-mainColor rounded-full mx-8 p-4 w-fit h-fit cursor-pointer hover:bg-[#f8ce9a] ease-in-out transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        
        </div>
    </div>
  )
}

export default Slider