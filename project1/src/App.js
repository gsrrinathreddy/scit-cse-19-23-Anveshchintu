import React from 'react';
import './App.css';
import{ Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutus from './pages/Aboutus';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Workshops from './pages/Workshops';
import Contactme from './pages/Contactme';
import Certifications from './pages/Certifications';
import { Card } from '@mui/material';


function App() {
  return (
    <div className="App">
      <INavbar/>
      <Card/>
      <Routes>
        <Route path = "Aboutus" element ={<Aboutus/>}/>
        <Route path = "Hobbies" element ={<Hobbies/>}/>
        <Route path = "Qualification" element ={<Qualification/>}/>
        <Route path = "Experience" element ={<Experience/>}/>
        <Route path = "Skills" element ={<Skills/>}/>
       <Route path = "Workshops" element ={<Workshops/>}/>
       <Route path ="Contactme" element ={<Contactme/>}/>
       <Route path = "Certifications" element ={<Certifications/>}/>
        </Routes>

    </div>
  );
}

export default App;
