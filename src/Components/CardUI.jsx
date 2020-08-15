import React from 'react'
import img1 from "../Images/animation.png";
import img2 from "../Images/shoesstore.png";
import img3 from "../Images/tinyanimation.png";
import '../Components/styles.css';

const Card = props =>{
    return(
        
        <div className ="container-fluid d-flex justify-content-center">
        <div className ="row">
        <div className="col-md-4">
    <img src ={img1} alt="image1" className="card-img-top"/>
    <div className="card-body text-dark">
    <h4 className="card-title">Card title</h4>
    <p className="card-text text-secondary">
    post about why tests are important, I’m going, to begin with, mentioning that Exams are only secondarily essential. They’re not the most important things relating to instruction. Education is easily the most significant thing concerning instruction. Exams are merely a single means of quantifying the way profoundly and broadly a person knows something at a certain time period. They’re the only way of acting that comprehension.
    </p>
    <a href="#" className="btn btn-outline-success">Go Anywhere</a>
        </div>
        </div>

        <div className="col-md-4">
    <img src ={img1} alt="image3"/>
    <div className="card-body text-dark">
    <h4 className="card-title">Card title</h4>
    <p className="card-text text-secondary">
    Professional Websie Design Services
    </p>
    <a href="#" className="btn btn-outline-success">Go Anywhere</a>
        </div>
        </div>

        <div className="col-md-4">
    <img src ={img1} alt="image1"/>
    <div className="card-body text-dark">
    <h4 className="card-title">Card title</h4>
    <p className="card-text text-secondary">
    lorem20 best website
    </p>
    <a href="#" className="btn btn-outline-success">Go Anywhere</a>
        </div>
        </div>
    </div>
    </div>
    );
}
export default Card;