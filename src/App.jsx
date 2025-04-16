import { useState, useEffect } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Quote from '../components/Quote'
import Contact from '../components/Contact'
import Loading from '../components/Loading'
import Scroll from '../components/Scroll'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds loading time
  }, []);

  return (
    <div>
      {isLoading? 
        <>
        <Loading/>
        </>
      :
        <div className='app'>
          <Scroll/>
          <Navbar/>
          <section id='home-sec'>
            <Home/>
          </section>

          <section id='sills-sec'>
            <Skills/>
          </section>

          <section id='education-sec'>
            <Education/>
          </section>

          <section id='projects-sec'>
            <Projects/>
          </section>

          {/* <section id='quote-sec'>
            <Quote/>
          </section> */}

          <section id='contact-sec'>
            <Contact/>
          </section>
        </div>
      }
    </div>
  )
}

export default App
