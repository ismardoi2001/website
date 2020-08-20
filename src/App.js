import React from 'react';
import './App.css';
import { Footer } from './Components/Footer';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import { Newhad } from './Components/Newhad';
import { Services } from './Components/Services';
import { Portfolio } from './Components/Portfolio';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div> 
    < Newhad />
    < Services />
    < Navbar />
    < Portfolio />
    < About />
    < Contact/>
    < Footer/>
    </div>
  );
}

export default App;
