import React from 'react'
import '../styling/Skills.css'
import htmlimg from '../src/assets/skillimg/html-5.png'

const Skills = () => {
  return (
    <div id="skills">
      <div class="skills-section">
        <center><h3 class="heading">Skills</h3></center>

        <div class="skills-outer"> 

          <div class="skill-container">
            <center><h3 class="skill-heading">Frontend</h3></center>
            <div class="skills-box">
              
              <div class="box first">
                <img src={htmlimg} alt="photo" />
                <p>HTML</p>
              </div>

              <div class="box second" >
                <img src="../src/assets/skillimg/css-3.png" alt="photo" />
                <p>CSS</p>
              </div>

              <div class="box second">
                <img src="../src/assets/skillimg/js.png" alt="photo" />
                <p>Javascript</p>
              </div>

              <div class="box first ">
                <img src="../src/assets/skillimg/bootstrap.png" alt="photo" />
                <p>Bootstrap</p>
              </div>

              <div class="box first">
                <img src="../src/assets/skillimg/react.png" alt="photo" />
                <p>React</p>
              </div>

              
            </div>


          </div>


          <div class="skill-container">
            <center><h3 class="skill-heading">Backend</h3></center>
            <div class="skills-box">
              

              <div class="box first">
                <img src="../src/assets/skillimg/nodejs.png" alt="photo" />
                <p>Node Js</p>
              </div>

              <div class="box second">
                <img src="../src/assets/skillimg/mysql.png" alt="photo" />
                <p>MySQL</p>
              </div>

              <div class="box second">
                <img src="../src/assets/skillimg/mongodb.png" alt="photo" />
                <p>Mongo DB</p>
              </div>

              <div class="box first">
                <img src="../src/assets/skillimg/firebase.png" alt="photo" />
                <p>Firebase</p>
              </div>

              
            </div>

          </div>


          <div class="skill-container">
            <center><h3 class="skill-heading">Tools</h3></center>
            <div class="skills-box">
              

              <div class="box first">
                <img src="../src/assets/skillimg/git.png" alt="photo" />
                <p>Git</p>
              </div>

              <div class="box second">
                <img src="../src/assets/skillimg/vscode.png" alt="photo" />
                <p>VS code</p>
              </div>

                           
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills
