import { useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

    const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='flex flex-col h-auto'>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} scrollToSection={scrollToSection}/>
      <Home ref={homeRef} projectsRef={projectsRef} scrollToSection={scrollToSection}/>
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Blog ref={contactRef} />
      <Footer />
    </div>
  )
}

export default App
