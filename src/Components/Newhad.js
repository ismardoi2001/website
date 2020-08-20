import React from 'react'
import'./styles.css';
import img1 from "../Images/main.gif";

export const Newhad = () => {

    return (
        <div>
        <div className="banner">
        <div className="left-column">
            <div className="">       
            </div>
            <h1>Soft<span>Teach</span> </h1>
            <h3>Mobile<span> Apps Development</span></h3>
            <p>I am Mobile & Web Front End Developer My Expertise in Mobile & Website Development and Design HTML 5 CSS 3 JavasScript JQuery Bootstrap 4 React.Native Web Animation API, TypeScript and Embared Technologies with help of API Technology Provide Services in Mobile Apps Development Graphic Design Software Development Website Design Digital Markting SEO Front End Developer!</p>
            <div class="btn">
                <button type="button" class="primary-btn">Learn More</button>
                <button type="button">Watch Video</button>
            </div>
        </div>
        <div className="right-column"></div>
        <img src ={img1} alt="img1" className="img1"/>
    </div>
        </div>
    )
}
