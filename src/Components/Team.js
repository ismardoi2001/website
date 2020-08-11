import React from 'react'
import './styles.css';
import img10 from "../Images/1.png";
import img11 from "../Images/2.png";
import img12 from "../Images/3.png";
import img13 from "../Images/4.png";

export const Team = () => {
    return (
        <div>
        <div className="title-box">
        <h1>Our Professional Team</h1>
        <p>Subscribe Computer Teacher Video Learn Graphic and 
        Website Design and Development modern Teachnologies </p>
    </div>
    <div className="team-row">
        <div className="profile-box">
        <h4>Karena Kapoor</h4>
        <small>Founder &  CEO</small>
        <img src ={img10} alt="image1" className="card-img-top"/>
        <div className="social-box">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-instagram"></i>
        </div>
        <p>Computer Teacher  Design and Development modern Teachnologies </p>
        </div>
        <div className="profile-box">
            <h4>Jawad Khan</h4>
            <small>Manager</small>
            <img src="2.png"></img>
            <img src ={img11} alt="image1" className="card-img-top"/>
            <div class="social-box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-instagram"></i>
            </div>
            <p>Computer Teacher  Design and Development modern Teachnologies </p>
            </div>
            <div class="profile-box">
                <h4>Kasif Noor</h4>
                <small>Graphic Designer</small>
                <img src="3.png"></img>
                <img src ={img12} alt="image1" className="card-img-top"/>
                <div class="social-box">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-instagram"></i>
                </div>
                <p>Computer Teacher  Design and Development modern Teachnologies </p>
                </div>
                <div class="profile-box">
                    <h4>Saeed Ahmed</h4>
                    <small>Web Developer</small>
                    <img src="4.png"></img>
                    <img src ={img13} alt="image1" className="card-img-top"/>
                    <div class="social-box">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-linkedin"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                    <p>Computer Teacher  Design and Development modern Teachnologies </p>
                    
    </div>
    </div>
        </div>
    )
}
