import React from 'react'
import'./styles.css';
import img5 from "../Images/pineapple.png";
import img9 from "../Images/facebook.png";


export const Newhad = () => {
    return (
        <div>
        <div className="banner">
        <div className="left-column">
            <div className="">       
            </div>
            <h1>Pine<span>apple</span> </h1>
            <h3> Fills your<span> Life with Enjoy.</span></h3>
            <p>Pineapple and its compounds have been linked to many health benefits, including aiding digestion, boosting immunity and speeding up recovery from surgery, among others</p>
            <div class="btn">
                <button type="button" class="primary-btn">Learn More</button>
                <button type="button">Watch Video</button>
            </div>
            <div className="social-icon">
                <img src="/\src/Images/facebook.png"></img>
                <img src="img/"></img>
                <img src="img/facebook.png"></img>
                <img src="img/instagram.png"></img>
                <img src="img/youtube.png"></img>
                <img src="img/pinterest.png"></img>
            </div>
        </div>
        <div className="right-column"></div>
        <img src ={img5} alt="img7" className="card2"/>
     
    </div>
        </div>
    )
}
