import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import NeonCursor from "./components/NeonCursor";

export default function App() {
  return (
    <>
     <NeonCursor /> 
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Certifications/>
      <Contact />
         

    </>
  );
}
