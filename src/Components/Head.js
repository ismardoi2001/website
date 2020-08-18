import React from 'react'

export const Head = () => {
  return (
    <div>
    <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero"><h1><span>M</span>uhammad <span>I</span>smail</h1></a>
        </div>
        <div className="nav-list">
          <div className="hamburger"><div className="bar"></div></div>
          <ul>
          
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#services" data-after="Service">Services</a></li>
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#about" data-after="About">About Us</a></li>
            <li><a href="#contact" data-after="Contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section> 
    </div>
  )
}
