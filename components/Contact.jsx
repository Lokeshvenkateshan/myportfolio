import React from 'react'
import '../styling/Contact.css'
import linkedinimg from '../src/assets/footicon/linkedin.png'
import githubimg from '../src/assets/footicon/github.png'
import gmailimg from '../src/assets/footicon/gmail.png'

const Contact = () => {
  return (
    <div>
      <div class="footer">
      <h3>Contact !!</h3>
      <div class="icons">
        <a href="https://www.linkedin.com/in/lokesh-venkatesan-b991b425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><img src={linkedinimg} alt="linkedin" class="foot-img" /></a>

        <a href="https://github.com/Lokeshvenkateshan"><img src={githubimg} alt="git" class="foot-img" /></a>

        <a href="mailto:lokeshvenkatesan44@gmail.com"><img src={gmailimg} alt="email" class="foot-img" /></a>

      </div>
      <p> &copy; Copy Rights Reserved 2025</p>

    </div>
    </div>
  )
}
import '../styling/Quote.css'

export default Contact
