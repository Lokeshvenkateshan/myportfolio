import React from 'react'
import '../styling/Education.css'

const Education = () => {
  return (
    <div id="education">
      <div class="education-section">
        <center><h3 class="heading">Education</h3></center>

        <div class="timeline">
          <div class="event">
            <div class="content">
              <div class="school">
                SVB Matric Higher Secondary School, Salem
              </div>
              <div class="year">2020 - 2022</div>

              <div class="school-content">
                <p>
                  My schooling at SVBMHSS provided a strong academic foundation.
                  Active participation in extracurricular activities helped me
                  develop leadership and communication skills. These experiences
                  shaped my discipline and passion for learning.
                </p>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="school">
                Government Collenge of Engineering, Salem
              </div>
              <div class="year">2022 - 2026</div>

              <div class="school-content">
                <p>
                  Currently I am pursuing my B.E., Degree at Government College
                  of Engineering, where I developing my knowledge. Engaging in
                  projects and competitions
                  enhanced my problem-solving and teamwork abilities. This
                  experience has prepared me for real-world challenges in my
                  field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
