import React from 'react'
import '../styling/Projects.css'
import travelmateimg from '../src/assets/projectimg/travelmate.png'
import geminiimg from '../src/assets/projectimg/gemini.png'
import dictionaryimg from '../src/assets/projectimg/dictionary.png'
import weatherimg from '../src/assets/projectimg/weather.png'
import ecomimg from '../src/assets/projectimg/ecommerce.png'
import fyloimg from '../src/assets/projectimg/fylo.png'

const Projects = () => {
  return (
    <>
    <div id="projects">
      <center><h3 class="heading">Projects</h3></center>
      <div class="project-container">
        <div class="cards">

          <div class="project-card">
            <img src={travelmateimg} alt="Project Image" />
            <div class="project-info">
              <h3>TravelMate AI</h3>
              <p>
                Created Travel Mate AI as Team, which suggests destinations based on user preferences like region and interest. It provides personalized travel recommendations for a better experience.
              </p>
              <div class="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>Python</span>
              </div>
              <div class="buttons">
                <a href="https://travelmate-d3zf.onrender.com/" target="_blank" class="project-btn live"
                  >Live Demo</a
                >
                <a href="https://github.com/Lokeshvenkateshan/TravelMate.git" target="_blank" class="project-btn github"
                  >GitHub</a
                >
              </div>
  
            </div>
          </div>


          <div class="project-card">
            <img src={geminiimg} alt="Project Image" />
            <div class="project-info">
              <h3>Gemini Clone</h3>
              <p>
                Developed a Gemini clone using React.js with Firebase for authentication. It offers AI-powered responses and a secure login system for user interactions.
              </p>
              <div class="tech-stack">
                <span>React js</span>
                <span>CSS</span>
                <span>Firebase</span>
              </div>
              <div class="buttons">
                <a href="https://geminiclone-ecru.vercel.app" target="_blank" class="project-btn live"
                  >Live Demo</a
                >
                <a href="https://github.com/Lokeshvenkateshan/Gemini-clone.git" target="_blank" class="project-btn github"
                  >GitHub</a
                >
              </div>
  
            </div>
          </div>



          <div class="project-card">
            <img src={dictionaryimg} alt="Project Image" />
            <div class="project-info">
              <h3>E-Dictionary</h3>
              <p>
                Developed an E-Dictionary with voice support, allowing users to hear their pronunciation. It provides meanings and examples for better understanding.
              </p>
              <div class="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>API</span>
              </div>
              <div class="buttons">
                <a href="https://lokeshvenkateshan.github.io/dictionary" target="_blank" class="project-btn live"
                  >Live Demo</a
                >
                <a href="https://github.com/Lokeshvenkateshan/dictionary.git" target="_blank" class="project-btn github"
                  >GitHub</a
                >
              </div>
  
            </div>
          </div>


          <div class="project-card">
            <img src={weatherimg} alt="Project Image" />
            <div class="project-info">
              <h3>Weather Forecast</h3>
              <p>
                Built a real-time weather forecasting web application using API. It displays temperature, humidity, and conditions with a user-friendly interface.
              </p>
              <div class="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>API</span>
              </div>
              <div class="buttons">
                <a href="https://lokeshvenkateshan.github.io/weatherforecast/" target="_blank" class="project-btn live"
                  >Live Demo</a
                >
                <a href="https://github.com/Lokeshvenkateshan/weatherforecast.git" target="_blank" class="project-btn github"
                  >GitHub</a
                >
              </div>
  
            </div>
          </div>



          <div class="project-card">
            <img src={ecomimg} alt="Project Image" />
            <div class="project-info">
              <h3>ECommerce</h3>
              <p style={{paddingTop: '20px', paddingBottom: '20px'}}>
                I developed a E-commerce website, which provides the frontend functionalities.

              </p>
              <div class="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div class="buttons">
                <a href="https://lokeshvenkateshan.github.io/E-Commerce/" target="_blank" class="project-btn live"
                  >Live Demo</a
                >
                <a href="https://github.com/Lokeshvenkateshan/E-Commerce.git" target="_blank" class="project-btn github"
                  >GitHub</a
                >
              </div>
  
            </div>
          </div>

          <div class="project-card">
            <img src={fyloimg} alt="Project Image" />
            <div class="project-info">
              <h3>Fylo</h3>
              <p style={{paddingTop: '10px', paddingBottom: '10px'}}>
                I developed this Fylo website in a intra college Tech events. This frontend has a light and dark mode functionalities.

              </p>
              <div class="tech-stack">
                <span>Frontend</span>
              </div>
              <div class="buttons">
                <a href="https://lokeshvenkateshan.github.io/fylo/" target="_blank" class="project-btn live"
                  >Live Demo</a
                >
                <a href="https://github.com/Lokeshvenkateshan/fylo.git" target="_blank" class="project-btn github"
                  >GitHub</a
                >
              </div>
  
            </div>
          </div>
          

        </div>
      </div>
    </div>
    </>
  )
}

export default Projects
