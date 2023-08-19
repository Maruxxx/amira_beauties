import React, { useState } from 'react'

function Slider({color}) {
  
    
  const slides = [ 
    {
        url: require('../assets/slides/1.webp'),
        title: "Our Center",
        desc: "Explore our skincare sliders that unveil a world of flawless complexion. Unleash the power of customized regimens, unveiling radiant skin that tells your unique story."
    },
    {
        url: require('../assets/slides/2.webp'),
        title: "Timeless Beauty Solutions",
        desc: "Experience the artistry of our skincare sliders, tailored to defy age and enhance your natural allure. Reveal youthful, supple skin that stands as a testament to the magic of our expert care."
    },
    {
        url: require('../assets/slides/3.webp'),
        title: "Glowing Transformations",
        desc: "Immerse yourself in the realm of skin transformation through our curated skincare sliders. From revitalizing facials to invigorating treatments, achieve a luminous canvas that captures attention.",
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
    <div className='hidden justify-center items-center lg:flex max-w-[1600px] h-[700px] w-full m-auto py-16 px-4 relative'>
        
        <div onClick={prevSlide} className={`${color === 'pink' ? "bg-pink" : color === 'darkGold' ? "bg-darkGold" : "bg-beige"} rounded-full mx-8  p-4 w-fit h-fit cursor-pointer`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
        
        
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
            <div className='absolute bottom-20 left-24 w-4/6 gap-3 flex flex-col'>
              <p className='font-montserratBold text-white text-4xl'>{slides[currentIndex].title}</p>
              <p className='font-montserratRegular text-white text-xl opacity-95'>{slides[currentIndex].desc}</p>
            </div>
        </div>

        
        <div onClick={nextSlide} className={`${color === 'pink' ? "bg-pink" : color === 'darkGold' ? "bg-darkGold" : "bg-beige"} rounded-full mx-8 p-4 w-fit h-fit cursor-pointer`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    </div>
  )
}

export default Slider