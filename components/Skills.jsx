import React from 'react'
import '../styling/Skills.css'
import htmlimg from '../src/assets/skillimg/html-5.png'
import cssimg from '../src/assets/skillimg/css-3.png'
import jsimg from '../src/assets/skillimg/js.png'
import bootstrapimg from '../src/assets/skillimg/bootstrap.png'
import reactimg from '../src/assets/skillimg/react.png'
import nodejsimg from '../src/assets/skillimg/nodejs.png'
import mysqlimg from '../src/assets/skillimg/mysql.png'
import mongodbimg from '../src/assets/skillimg/mongodb.png'
import firebaseimg from '../src/assets/skillimg/firebase.png'
import gitimg from '../src/assets/skillimg/git.png'
import vscodeimg from '../src/assets/skillimg/vscode.png'

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
                <img src={cssimg} alt="photo" />
                <p>CSS</p>
              </div>

              <div class="box second">
                <img src={jsimg} alt="photo" />
                <p>Javascript</p>
              </div>

              <div class="box first ">
                <img src={bootstrapimg} alt="photo" />
                <p>Bootstrap</p>
              </div>

              <div class="box first">
                <img src= {reactimg} alt="photo" />
                <p>React</p>
              </div>

              
            </div>


          </div>


          <div class="skill-container">
            <center><h3 class="skill-heading">Backend</h3></center>
            <div class="skills-box">
              

              <div class="box first">
                <img src={nodejsimg} alt="photo" />
                <p>Node Js</p>
              </div>

              <div class="box second">
                <img src={mysqlimg} alt="photo" />
                <p>MySQL</p>
              </div>

              <div class="box second">
                <img src={mongodbimg} alt="photo" />
                <p>Mongo DB</p>
              </div>

              <div class="box first">
                <img src={firebaseimg} alt="photo" />
                <p>Firebase</p>
              </div>

              
            </div>

          </div>


          <div class="skill-container">
            <center><h3 class="skill-heading">Tools</h3></center>
            <div class="skills-box">
              

              <div class="box first">
                <img src={gitimg} alt="photo" />
                <p>Git</p>
              </div>

              <div class="box second">
                <img src={vscodeimg} alt="photo" />
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
