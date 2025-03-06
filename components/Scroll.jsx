import React, { useState, useEffect } from 'react'
import '../styling/Scroll.css'

const Scroll = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const updateScrollPercentage = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(progress);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", updateScrollPercentage);
        return () => window.removeEventListener("scroll", updateScrollPercentage);
      }, []);

  return (
    <div className="progress-bar-con">
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  )
}

export default Scroll
