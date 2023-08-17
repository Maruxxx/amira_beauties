import Header from "./Components/Header";
import { Presentation, About, Services, Testimonials, Contact } from "./Sections";
import Slider from "./Sections/Slider";


function App() {
  return (
    <>
      <Header />
      <Slider />
      <Presentation />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
