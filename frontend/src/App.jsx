import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import NeonCursor from "./components/NeonCursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="dark"
  toastStyle={{
    background: "#060010",
    border: "1px solid rgba(34,211,238,0.4)",
    color: "#e5e7eb",
  }}
  progressStyle={{
    background: "linear-gradient(to right, #22d3ee, #a855f7)",
  }}
/>
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
