import React, { useState, useEffect } from "react";
import "../styling/Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav-bar ${sticky ? "sticky-header" : ""}`}>
      <div className="portfolio">
        <a href="/">
          <span className="logo-span">&lt;/</span>
          <span className="logo-text">Portfolio</span>
          <span className="logo-span">&gt;</span>
        </a>
      </div>

      <div className="mobile-icon" onClick={toggleMenu}>☰</div>

      <ul className="nav-items">
        <li><a href="#home-sec" className="nav-link">Home</a></li>
        <li><a href="#sills-sec" className="nav-link">Skills</a></li>
        <li><a href="#education-sec" className="nav-link">Education</a></li>
        <li><a href="#projects-sec" className="nav-link">Projects</a></li>
        <li><a href="#contact-sec" className="nav-link">Contact</a></li>
        
      </ul>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home-sec" className="mobile-link" onClick={toggleMenu}>Home</a>
        <a href="#sills-sec" className="mobile-link" onClick={toggleMenu}>Skills</a>
        <a href="#education-sec" className="mobile-link" onClick={toggleMenu}>Education</a>
        <a href="#projects-sec" className="mobile-link" onClick={toggleMenu}>Projects</a>
        <a href="#contact-sec" className="mobile-link" onClick={toggleMenu}>Contact</a>
        <a href="https://github.com/Lokeshvenkateshan" target="_blank" className="github-button">Github Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
