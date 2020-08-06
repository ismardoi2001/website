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
      <a href="@">Contact</a>
      </nav>
      
      </div>
      <main className="main">
      <section className="left-sec">
      <h1><span>W</span>e Are Best<span> De</span>velopers</h1>
      <p> We are here for your help 24/7 just any help call us</p>
      <button> Make An Appointment</button>      
      </section>

      <section className="right-sec">
        <figure>
        <img src=""></img>
        </figure>
      </section>
      </main>
    </div>

  );
}

export default App;
