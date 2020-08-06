import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="mainheader"> 
      <div className="logo">
      </div>
      <nav>
      <a href="@">Home</a>
      <a href="@">Services</a>
      <a href="@">About</a>
      <a href="@">About</a>
      </nav>
      <div className="menubtn">
      <button> HelpLine</button>
      </div>
      </div>
      <main>
      <section className="left-sec">
      <h2> We Are Here For Your Care</h2>
      <h1>We The Best Doctors</h1>
      <p> We are here for your care 24/7 just any help call us</p>
      <button> Make An Appointment</button>      
      </section>

      <section className="right-sec">
        <figure>
        <img src="/src/Images/bg.png"></img>
        </figure>
      </section>
      </main>
    </div>

  );
}

export default App;
