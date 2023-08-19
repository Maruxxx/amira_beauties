import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./Components/Header";
import { Presentation, About, Services, Testimonials, Contact } from "./Sections";
import Slider from "./Sections/Slider";


function App() {
  const [color, setColor] = useState('beige')

  const home = useRef(null)
  const about = useRef(null)
  const services = useRef(null)
  const testimonials = useRef(null)
  const contact = useRef(null)

  const isInHome = useIsInViewport(home)
  const isInAbout = useIsInViewport(about);
  const isInServices = useIsInViewport(services);
  const isInTestimonials = useIsInViewport(testimonials);
  const isInContact = useIsInViewport(contact);
  

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }
  
  return (
    <>
      <div className="fixed bottom-10 right-7 md:right-10 flex flex-col gap-4 z-50">
        <div onClick={() => { setColor('beige')}} className="w-[50px] h-[50px] rounded-full bg-beige hover:shadow-neutral-700 hover:shadow-lg duration-200 ease-in-out transition-all cursor-pointer"></div>
        <div onClick={() => { setColor('darkGold')}} className="w-[50px] h-[50px] rounded-full bg-darkGold hover:shadow-neutral-700 hover:shadow-lg duration-200 ease-in-out transition-all cursor-pointer"></div>
        <div onClick={() => { setColor('pink')}} className="w-[50px] h-[50px] rounded-full bg-pink hover:shadow-neutral-700 hover:shadow-lg duration-200 ease-in-out transition-all cursor-pointer"></div>
      </div>
      <Header color={color} isInHome={isInHome} isInAbout={isInAbout} isInServices={isInServices} isInTestimonials={isInTestimonials} isInContact={isInContact}/>
      <Slider color={color}/>
      <div ref={home} id="presentation">
        <Presentation color={color}/>
      </div>
      <div ref={about} id="about">
        <About color={color}/>
      </div>
      <div ref={services} id="services">
        <Services color={color}/>
      </div>
      <div ref={testimonials} id="testimonials" className="py-0.5">
        <Testimonials color={color}/>
      </div>
      <div ref={contact} id="contact">
        <Contact color={color}/>
      </div>
    </>
  );
}

export default App;
