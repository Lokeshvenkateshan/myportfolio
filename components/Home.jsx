import React, { useState, useEffect } from 'react'
import myimg from '../src/assets/images/lokesh2.jpg'
import resume from '../src/assets/Lokesh Resume.pdf'
import '../styling/Home.css'

const words = ['Web Developer', 'MERN Developer']; 
const typingSpeed = 150; 
const erasingSpeed = 100; 
const delayBetweenWords = 1500; 

const Home = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    } else if (isDeleting && charIndex > 0) {
      
      const erasingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, erasingSpeed);

      return () => clearTimeout(erasingTimeout);
    } else if (!isDeleting && charIndex === currentWord.length) {
      
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [charIndex, isDeleting, wordIndex]);
  

  return (
    <div id="contents">
      <div className="main">
        <div className="bio1">
          <h3>Hi, I am</h3>
          <h1>Lokesh V</h1>
          <h4>I am a <span id="typed-text">{text}</span></h4>
          <p>
            &nbsp; &nbsp;I am a passionate Web Developer specializing in
            creating responsive and user-friendly websites. With knowledge in
            React, JavaScript, and backend technologies, I build seamless
            digital experiences. I focus on performance, design, and
            functionality to deliver high-quality solutions. Always eager to
            learn and innovate, I strive to turn ideas into reality.
          </p>
          <div className="bio1-btn">
            <a href="https://www.linkedin.com/in/lokesh-venkatesan-b991b425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><button className="btn">Connect</button></a>
            <a href={resume} download="Resume"
              ><button className="btn">Download cv</button></a
            >
            
          </div>
        </div>
        <div className="bio2">
          <div className="lokesh">
            <img src={myimg} alt="user" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;


